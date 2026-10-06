// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anti-agence-web.fr',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
