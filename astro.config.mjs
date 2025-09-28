// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    service: passthroughImageService(),
  },

  integrations: [svelte(), mdx()],
});