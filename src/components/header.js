import React from "react"
import { StaticQuery, graphql } from "gatsby"

// https://stackoverflow.com/questions/52780033/uncaught-typeerror-cannot-read-property-data-of-undefined-with-gatsby-and-gra

export default () => (
    <StaticQuery
        query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <header>
                <h2>{data.site.siteMetadata.title}</h2>
                <div>This is part of the site header</div>
            </header>
        )}
    />
)