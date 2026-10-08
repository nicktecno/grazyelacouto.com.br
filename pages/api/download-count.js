// Endpoint resiliente para contagem de downloads do E-book
// Utiliza REST nativo (fetch) para Vercel KV / Upstash Redis
// 100% compativel com Serverless e Edge, sem risco de erro 500 por dependencias

const REDIS_KEY =
  process.env.REDIS_DOWNLOAD_KEY ||
  process.env.DOWNLOADS_KEY ||
  "ebook_materiais_downloads";

let fallbackMemoryCount = 0;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Identifica URL e Token de qualquer formato do Upstash ou Vercel KV
  let restUrl =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_API_URL;
  let restToken =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_API_TOKEN;

  // Suporte caso a URL venha no formato redis://default:TOKEN@HOST:PORT
  if (!restUrl && (process.env.REDIS_URL || process.env.KV_URL)) {
    const raw = process.env.REDIS_URL || process.env.KV_URL;
    try {
      const parsed = new URL(raw);
      if (parsed.hostname && parsed.hostname.includes("upstash.io")) {
        restUrl = `https://${parsed.hostname}`;
        restToken = parsed.password || parsed.username;
      }
    } catch (e) {}
  }

  // 1. Se Redis estiver configurado
  if (restUrl && restToken) {
    try {
      const headers = { Authorization: `Bearer ${restToken}` };

      if (req.method === "POST") {
        const response = await fetch(`${restUrl}/incr/${REDIS_KEY}`, {
          method: "POST",
          headers,
        });
        const data = await response.json();
        const count = typeof data.result === "number" ? data.result : Number(data.result) || 1;
        return res.status(200).json({ count, source: "redis" });
      } else {
        const response = await fetch(`${restUrl}/get/${REDIS_KEY}`, { headers });
        const data = await response.json();
        const count = data.result !== null && data.result !== undefined ? Number(data.result) : 0;
        return res.status(200).json({ count: isNaN(count) ? 0 : count, source: "redis" });
      }
    } catch (err) {
      console.error("[Redis REST Error]", err);
    }
  }

  // 2. Fallback gracioso in-memory
  if (req.method === "POST") {
    fallbackMemoryCount += 1;
    return res.status(200).json({ count: fallbackMemoryCount, source: "memory" });
  }

  return res.status(200).json({ count: fallbackMemoryCount, source: "memory" });
}
