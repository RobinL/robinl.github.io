### Development notes

To develop a single page, it's faster to edit gatsby config

````
  {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./src/mdx_dev/`,
      },
    },
        {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx",
        "path": "./src/mdx_dev/"
      }
    },

    ```

#### Frontmatter

To get a postlist for the main listing, and for the rss feed, we need to obtain frontmatter data (title, desc) for all posts

You get this for 'free' with the mdx posts, which have their own frontmatter
For jsx posts, you need a transformer



I write a transformer in gatsby node to create CombinedFrontmatter so this is a single list

ToDO:

- fix the sitemap to have correct urls etc https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
- Add an observable page to check it's possible
- Write the homepage/index page which is a listing of the site
````
