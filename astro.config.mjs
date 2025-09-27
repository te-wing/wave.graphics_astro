// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    service: passthroughImageService(),
  },

  integrations: [svelte()],
});