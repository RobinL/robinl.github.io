import React from "react"
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/transforming_analytical_functions"

export const frontmatter = {
  title: "Transforming analytical functions by mainstreaming data science",
  post_date: "2018-08-11",
  code_url:
    "https://github.com/RobinL/robinlinacre/blob/dev/src/pages/transforming_analytical_functions.mdx",
  post_type: "mdx",
  post_category: "data",
}

export default ({ data }) => (
  <ObsMdxPage post_frontmatter={frontmatter}>
    <MDXDocument />
  </ObsMdxPage>
)
