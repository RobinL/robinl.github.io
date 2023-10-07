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



ToDO:


````
