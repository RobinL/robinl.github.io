import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import PostList from "../components/post_list"
import SEO from "../components/seo"
function Index() {

  let cats = [

    { header: "Data science and engineering", code: "data" },
    { header: "Probabilistic record linkage", code: "probabilistic_linkage", category_homepage: "probabilistic_linkage" },

    { header: "Energy and climate change", code: "energy" },
    { header: "Other", code: "other" },


  ]


  return (
    <Layout>
      <SEO title="robinlinacre.com" description="Robin Linacre's personal homepage" />
      {cats.map(c => (
        <PostList post_category={c.code} post_header={c.header} category_homepage={c.category_homepage} />
      ))}
    </Layout>
  )
}

export default Index


