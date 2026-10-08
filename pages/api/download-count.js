// API Route para rastreamento e contagem de downloads do E-book
// Suporta Upstash Redis e Vercel KV automaticamente caso configurado.

const BASE_COUNT = 2847;
let memoryCount = BASE_COUNT;

export default async function handler(req, res) {
  // Lê as variáveis do Upstash Redis ou Vercel KV
  const redisUrl =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL;
  const redisToken =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN;

  if (redisUrl && redisToken) {
    try {
      const headers = { Authorization: `Bearer ${redisToken}` };

      // Garante que a chave existe e tem valor inicial se for a primeira vez
      // SETNX só atribui se a chave ainda não existir
      await fetch(`${redisUrl}/setnx/ebook_materiais_downloads/${BASE_COUNT}`, {
        headers,
      }).catch(() => {});

      if (req.method === "POST") {
        // Incrementa em +1 atomicamente
        const resp = await fetch(`${redisUrl}/incr/ebook_materiais_downloads`, {
          method: "POST",
          headers,
        });
        const data = await resp.json();
        const current = typeof data.result === "number" ? data.result : BASE_COUNT + 1;
        return res.status(200).json({ count: current });
      } else {
        // Busca contagem atual
        const resp = await fetch(`${redisUrl}/get/ebook_materiais_downloads`, {
          headers,
        });
        const data = await resp.json();
        const current = data.result ? parseInt(data.result, 10) : BASE_COUNT;
        return res.status(200).json({ count: isNaN(current) ? BASE_COUNT : current });
      }
    } catch (err) {
      console.error("Erro ao conectar ao Redis:", err);
      // Fallback gracioso em caso de erro de rede no Redis
    }
  }

  // Fallback in-memory quando o Redis não estiver configurado (desenvolvimento / teste local)
  if (req.method === "POST") {
    memoryCount += 1;
    return res.status(200).json({ count: memoryCount });
  }

  return res.status(200).json({ count: memoryCount });
}
