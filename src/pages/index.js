import React from "react"
import { graphql, Link } from "gatsby"

import { LayoutPost } from "../layouts/"

export default ( {data} ) => (
  <LayoutPost>
    <div>Hello world!</div>
    <div>
          {data.allSitePage.nodes.map((node) => (<p><Link to={node.path}>{node.path} </Link></p>))}
    </div>
  </LayoutPost>

)

export const  query = graphql`
query MyQuery {
  allSitePage (filter: {
           path: {ne: "/dev-404-page/"}
         }){
    nodes {
      id
      path
    }
  }
}`


