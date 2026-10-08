import { Redis } from "@upstash/redis";
import RedisIo from "ioredis";

const REDIS_KEY =
  process.env.REDIS_DOWNLOAD_KEY ||
  process.env.DOWNLOADS_KEY ||
  "ebook_materiais_downloads";

let memoryCount = 0;
let upstashClient = null;
let ioRedisClient = null;

function getRedisClient() {
  const restUrl =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL;
  const restToken =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN;

  if (restUrl && restToken) {
    if (!upstashClient) {
      upstashClient = new Redis({
        url: restUrl,
        token: restToken,
      });
    }
    return { type: "upstash", client: upstashClient };
  }

  const rawUrl = process.env.REDIS_URL || process.env.KV_URL;
  if (rawUrl) {
    if (!ioRedisClient) {
      ioRedisClient = new RedisIo(rawUrl, {
        lazyConnect: true,
        connectTimeout: 5000,
        maxRetriesPerRequest: 1,
      });
    }
    return { type: "ioredis", client: ioRedisClient };
  }

  return null;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

  const redisInstance = getRedisClient();

  if (redisInstance) {
    try {
      if (redisInstance.type === "upstash") {
        const client = redisInstance.client;

        if (req.method === "POST") {
          const newCount = await client.incr(REDIS_KEY);
          return res.status(200).json({ count: Number(newCount), source: "redis" });
        } else {
          let val = await client.get(REDIS_KEY);

          // Verifica chave alternativa caso a principal esteja vazia
          if (val === null || val === undefined) {
            const alt = await client.get("ebook_downloads");
            if (alt !== null && alt !== undefined) {
              val = alt;
            }
          }

          const count = val !== null && val !== undefined ? Number(val) : 0;
          return res.status(200).json({ count: isNaN(count) ? 0 : count, source: "redis" });
        }
      } else if (redisInstance.type === "ioredis") {
        const client = redisInstance.client;
        if (client.status !== "ready") {
          await client.connect().catch(() => {});
        }

        if (req.method === "POST") {
          const newCount = await client.incr(REDIS_KEY);
          return res.status(200).json({ count: Number(newCount), source: "redis" });
        } else {
          let val = await client.get(REDIS_KEY);
          if (val === null || val === undefined) {
            const alt = await client.get("ebook_downloads");
            if (alt !== null && alt !== undefined) {
              val = alt;
            }
          }

          const count = val !== null && val !== undefined ? Number(val) : 0;
          return res.status(200).json({ count: isNaN(count) ? 0 : count, source: "redis" });
        }
      }
    } catch (err) {
      console.error("[Redis Error]", err);
    }
  }

  // Fallback in-memory caso Redis não esteja conectado nas variáveis de ambiente
  if (req.method === "POST") {
    memoryCount += 1;
    return res.status(200).json({ count: memoryCount, source: "memory" });
  }

  return res.status(200).json({ count: memoryCount, source: "memory" });
}
