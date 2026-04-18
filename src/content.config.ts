import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    postDate: z.coerce.date(),
    category: z.enum([
      'data',
      'probabilistic_linkage',
      'energy',
      'other',
      'quotes_links',
      'non_blog_post',
    ]),
    codeUrl: z.string().url().optional(),
    image: z.string().optional(),
    latestUpdate: z.coerce.date().optional(),
    probLinkageCategory: z.string().optional(),
    stylesheet: z.string().optional(),
    tutorialNumber: z.number().optional(),
    pageWidth: z.enum(['prose', 'wide', 'full']).default('prose'),
  }),
});

const microblog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/microblog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const linksQuotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links-quotes' }),
  schema: z.object({
    type: z.enum(['quote', 'link', 'podcast']),
    title: z.string().optional(),
    source: z.string().optional(),
    author: z.string().optional(),
    url: z.string().url(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts,
  microblog,
  linksQuotes,
};
