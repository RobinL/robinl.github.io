import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { notebookKitCells } from './src/lib/notebook-kit/vite-plugin.ts';

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
    sitemap({
      filter: (page) =>
        !page.endsWith('/relative_costs_llms_vscode/') && !page.endsWith('/qlp/'),
      // These apps are hosted separately, so Astro cannot discover their routes.
      customPages: [
        'https://www.robinlinacre.com/letterpaths/',
        'https://www.robinlinacre.com/agile-price-forecast/',
        'https://www.robinlinacre.com/bee_letters/',
        'https://www.robinlinacre.com/letter_constellations/',
      ],
    }),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    plugins: [notebookKitCells()],
  },
});
