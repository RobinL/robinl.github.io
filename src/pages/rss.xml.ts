import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
import { postSlug } from '../lib/content';

export async function GET() {
  const posts = (await getCollection('posts', ({ data }) => data.category !== 'non_blog_post')).sort(
    (a, b) => b.data.postDate.getTime() - a.data.postDate.getTime()
  );

  return rss({
    title: "Robin Linacre's homepage: Probabilistic record linkage, Data Science and Data Engineering",
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.postDate,
      link: `/${postSlug(post.id)}/`,
    })),
  });
}
