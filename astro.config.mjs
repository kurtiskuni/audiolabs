import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'hybrid', // or 'hybrid' if needed
  adapter: netlify(),
});