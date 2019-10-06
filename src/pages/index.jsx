import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import PostList from "../components/post_list"

function Index() {

  let cats = [
    { header: "Energy and climate change", code: "energy" },
    { header: "Curiosities", code: "curiosities" },
  ]


return (
  <Layout>
    {cats.map(c => (
      <PostList post_category={c.code} post_header={c.header} />
    ))}
  </Layout>
)
}

export default Index


