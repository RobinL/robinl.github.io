import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import PostList from "../components/post_list"

export default ( {data} ) => (
  <Layout>
    <div>Hello world!</div>
    <div>
          {data.allSitePage.nodes.map((node) => (<p><Link to={node.path}>{node.path} </Link></p>))}
    </div>
    <PostList />
  </Layout>

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


