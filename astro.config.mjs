import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // or 'hybrid' if needed
  output: 'static',

  adapter: netlify(),
  integrations: [tailwind()],
});