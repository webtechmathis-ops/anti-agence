// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anti-agence-web.fr',
  trailingSlash: 'always',
  // La compression supprimait les espaces entre un texte et un lien/strong passés à la ligne.
  compressHTML: false,
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
