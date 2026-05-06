/**
 * URL pública do site (sem barra final). Usada em SEO, OG e sitemap.
 * Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://grazyelacouto.com.br).
 */
export function getSiteOrigin() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://grazyelacouto.com.br";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return getSiteOrigin();
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const origin = getSiteOrigin();
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${origin}${path}`;
}
