import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ciberem.com',
  // URLs sin barra final en canonical, hreflang y sitemap. Vercel las sirve con `cleanUrls`.
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Los alternates hreflang van en el <head> de cada página (los slugs difieren por idioma,
  // así que el emparejamiento automático del sitemap sería parcial).
  integrations: [sitemap()],
  server: {
    port: 4321,
    host: true,
  },
});
