import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/"

export default ( {data} ) => (
<Layout>
    <div>Hello world!</div>
    <div>
          {data.allSitePage.nodes.map((node) => (<p><Link to={node.path}>{node.path} </Link></p>))}
    </div>
</Layout>

)

export const  query = graphql`
query MyQuery {
  allSitePage {
    nodes {
      id
      path
    }
  }
}`


