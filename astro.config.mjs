// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    service: passthroughImageService(),
  },

  integrations: [svelte(), mdx(), react()],
});