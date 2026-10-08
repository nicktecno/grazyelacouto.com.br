// Endpoint resiliente para contagem de downloads do E-book
// Utiliza REST nativo (fetch) para Vercel KV / Upstash Redis

const REDIS_KEY =
  process.env.REDIS_DOWNLOAD_KEY ||
  process.env.DOWNLOADS_KEY ||
  "ebook_materiais_downloads";

let fallbackMemoryCount = 0;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // 1. Detecta URL e Token de todas as possíveis variáveis
  let rawUrl =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_API_URL ||
    process.env.STORAGE_KV_REST_API_URL ||
    process.env.VERCEL_KV_REST_API_URL;

  let rawToken =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_API_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN ||
    process.env.VERCEL_KV_REST_API_TOKEN;

  // Suporte caso a URL tenha sido colada no formato redis://default:TOKEN@HOST:PORT
  if (!rawUrl && (process.env.REDIS_URL || process.env.KV_URL)) {
    const connStr = process.env.REDIS_URL || process.env.KV_URL;
    try {
      const parsed = new URL(connStr);
      if (parsed.hostname && parsed.hostname.includes("upstash.io")) {
        rawUrl = `https://${parsed.hostname}`;
        rawToken = parsed.password || parsed.username;
      }
    } catch (e) {}
  }

  const hasUrl = Boolean(rawUrl);
  const hasToken = Boolean(rawToken);
  let redisError = null;

  // 2. Se as credenciais estiverem presentes, comunica via REST com Upstash
  if (rawUrl && rawToken) {
    try {
      let cleanUrl = rawUrl.trim().replace(/\/+$/, "");
      if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
        cleanUrl = "https://" + cleanUrl;
      }
      const cleanToken = rawToken.trim().replace(/^["']|["']$/g, "");

      const headers = {
        Authorization: `Bearer ${cleanToken}`,
      };

      if (req.method === "POST") {
        const response = await fetch(`${cleanUrl}/incr/${REDIS_KEY}`, {
          method: "POST",
          headers,
        });
        const data = await response.json();

        if (data.error) {
          redisError = data.error;
        } else {
          const count = typeof data.result === "number" ? data.result : Number(data.result) || 1;
          return res.status(200).json({
            count,
            source: "redis",
            env: process.env.VERCEL_ENV || "unknown",
          });
        }
      } else {
        const response = await fetch(`${cleanUrl}/get/${REDIS_KEY}`, { headers });
        const data = await response.json();

        if (data.error) {
          redisError = data.error;
        } else {
          // Se a chave for null (ainda não foi incrementada), começa em 0
          const count = data.result !== null && data.result !== undefined ? Number(data.result) : 0;
          return res.status(200).json({
            count: isNaN(count) ? 0 : count,
            source: "redis",
            env: process.env.VERCEL_ENV || "unknown",
          });
        }
      }
    } catch (err) {
      redisError = err.message || String(err);
      console.error("[Redis REST Error]", err);
    }
  }

  // 3. Fallback in-memory
  if (req.method === "POST") {
    fallbackMemoryCount += 1;
    return res.status(200).json({
      count: fallbackMemoryCount,
      source: "memory",
      hasUrl,
      hasToken,
      redisError,
      env: process.env.VERCEL_ENV || "unknown",
    });
  }

  return res.status(200).json({
    count: fallbackMemoryCount,
    source: "memory",
    hasUrl,
    hasToken,
    redisError,
    env: process.env.VERCEL_ENV || "unknown",
  });
}
