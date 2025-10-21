// @ts-check
import { defineConfig, passthroughImageService  } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import rehypeExternalLinks from 'rehype-external-links';

import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://wave.graphics',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },

  image: {
    service: passthroughImageService(),
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
          site: 'https://wave.graphics'
        }
      ],
    ],
  },

  integrations: [svelte(), mdx(), react(), sitemap(), vue()],
});