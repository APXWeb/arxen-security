import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site).href;
  const regras = SITE.indexavel ? 'User-agent: *\nAllow: /' : '# Proposta: indexação desativada (SITE.indexavel = false)\nUser-agent: *\nDisallow: /';
  return new Response(`${regras}\n\nSitemap: ${sitemap}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
