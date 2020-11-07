/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: "Robin Linacre",
    titleTemplate: "%s",
    description: "Robin Linacre's personal blog.  Data science, data engineering, and the environment.",
    url: "https://www.robinlinacre.com",
    twitterUsername: "@robinl",
    image: "/images/favicon-32x32.png",
    siteUrl: `https://www.robinlinacre.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.robinlinacre.com',
        sitemap: 'https://www.robinlinacre.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
