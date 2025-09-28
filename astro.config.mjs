// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  image: {
    service: passthroughImageService(),
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [svelte(), mdx(), react()],
});