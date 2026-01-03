import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hurtigit.github.io',
  base: '/bn',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
