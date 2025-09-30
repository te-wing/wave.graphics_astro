// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://wave.graphics',

  image: {
    service: passthroughImageService(),
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [svelte(), mdx(), react(), sitemap(), vue()],
});