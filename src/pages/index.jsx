import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import PostList from "../components/post_list"
import SEO from "../components/seo"
function Index() {

  let cats = [
    { header: "Probabilistic record linkage", code: "probabilistic_linkage" },
    { header: "Data science and engineering", code: "data" },
    { header: "Other", code: "other" },
    { header: "Energy and climate change", code: "energy" },


  ]


  return (
    <Layout>
      <SEO title="robinlinacre.com" description="Robin Linacre's personal homepage" />
      {cats.map(c => (
        <PostList post_category={c.code} post_header={c.header} />
      ))}
    </Layout>
  )
}

export default Index


