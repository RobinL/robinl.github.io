import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
const siteUrl = process.env.URL || `https://www.robinlinacre.com`





const config = {
  pathPrefix: "",
  siteMetadata: {
    title: `Robin Linacre's blog`,
    description: `Probabilistic record linkage, Data Deduplication, Data Science, Engineering and the Environment`,
    siteUrl: siteUrl,
    twitterUsername: `@robinlinacre`,
    image: `/gatsby-icon.png`,
  },
  plugins: ["gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [
            [rehypeKatex, { strict: 'ignore' }],
          ],
        },

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },

          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source serif pro\:600`,
          `source sans pro\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-94373ZKHEE"
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/mdx/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/images/"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `definitions`,
        path: `./src/definitions_markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/mdx/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allMdx {
            edges {
              node {
                frontmatter {
                  title
                  post_date
                  code_url
                  description
                }
                fields {
                  slug
                }
              }
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allMdx: { edges: allMdxPages } }) => {
          return allMdxPages.map(({ node }) => {
            return {
              path: node.fields.slug,
              frontmatter: node.frontmatter
            };
          });
        },
        serialize: ({ path, frontmatter }) => {
          return {
            url: path,
            lastmod: frontmatter.post_date,
          };
        },
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes
                .filter(node => node.frontmatter.post_category !== "non_blog_post")
                .map(node => Object.assign({}, {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description,
                  date: node.frontmatter.post_date,
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,

                }));
            },
            query: `
            {
              allMdx(filter: {frontmatter: {post_category: {ne: "non_blog_post"}}}) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    post_date
                    post_category
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      }
    }

  ]
};

export default config;