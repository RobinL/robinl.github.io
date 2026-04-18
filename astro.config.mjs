import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://www.robinlinacre.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        [rehypeKatex, { strict: 'ignore' }],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: { className: ['heading-anchor'] },
          },
        ],
      ],
    }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
