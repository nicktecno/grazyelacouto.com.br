// Endpoint resiliente para contagem de downloads do E-book
// Utiliza REST nativo (fetch) para Vercel KV / Upstash Redis
// Suporta URLs formatadas como https://, redis:// ou o comando redis-cli completo

const REDIS_KEY =
  process.env.REDIS_DOWNLOAD_KEY ||
  process.env.DOWNLOADS_KEY ||
  "ebook_materiais_downloads";

let fallbackMemoryCount = 0;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // 1. Detecta URL e Token de qualquer formato do Upstash ou Vercel KV
  let rawUrl =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_API_URL ||
    process.env.REDIS_URL ||
    process.env.KV_URL;

  let rawToken =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_API_TOKEN;

  if (rawUrl) {
    let cleanUrl = rawUrl.trim();

    // Se o usuário colou o comando redis-cli ou uma URL redis://
    if (cleanUrl.includes("redis-cli") || cleanUrl.includes("redis://")) {
      const matchHost =
        cleanUrl.match(/@([^:\s\/]+)/) ||
        cleanUrl.match(/([a-z0-9-]+\.upstash\.io)/i);
      if (matchHost) {
        cleanUrl = "https://" + (matchHost[1] || matchHost[0]);
      }

      const matchToken = rawUrl.match(/redis:\/\/default:([^@\s]+)@/);
      if (matchToken && matchToken[1] && (!rawToken || rawToken.length < 5)) {
        rawToken = matchToken[1];
      }
    }

    cleanUrl = cleanUrl.replace(/\/+$/, "");
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = "https://" + cleanUrl;
    }

    const cleanToken = rawToken ? rawToken.trim().replace(/^["']|["']$/g, "") : null;

    if (cleanUrl && cleanToken) {
      try {
        const headers = { Authorization: `Bearer ${cleanToken}` };

        if (req.method === "POST") {
          const response = await fetch(`${cleanUrl}/incr/${REDIS_KEY}`, {
            method: "POST",
            headers,
          });
          const data = await response.json();

          if (!data.error) {
            const count = typeof data.result === "number" ? data.result : Number(data.result) || 1;
            return res.status(200).json({ count, source: "redis" });
          }
        } else {
          const response = await fetch(`${cleanUrl}/get/${REDIS_KEY}`, { headers });
          const data = await response.json();

          if (!data.error) {
            const count = data.result !== null && data.result !== undefined ? Number(data.result) : 0;
            return res.status(200).json({ count: isNaN(count) ? 0 : count, source: "redis" });
          }
        }
      } catch (err) {
        console.error("[Redis REST Error]", err);
      }
    }
  }

  // 2. Fallback in-memory
  if (req.method === "POST") {
    fallbackMemoryCount += 1;
    return res.status(200).json({ count: fallbackMemoryCount, source: "memory" });
  }

  return res.status(200).json({ count: fallbackMemoryCount, source: "memory" });
}
