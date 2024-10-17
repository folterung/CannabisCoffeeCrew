import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cannabiscoffeecrew.com',
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://cannabiscoffeecrew.com'
    })
  ],
});
