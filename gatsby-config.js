/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {
  pathPrefix: "/robinlinacre",
  siteMetadata: {
    title: "Robin Linacre",
    titleTemplate: "%s",
    description: "Robin Linacre's personal blog.  Data science, data engineering, and the environment.",
    url: "http://robinl.github.io/robinlinacre",
    twitterUsername: "@robinl",
    image: "/images/favicon-32x32.png"

  },
  plugins: [
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-prismjs' }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs'
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "javascript-pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149828982-1",
      },
    },
  ]
}
