import React from "react"
import define from "@robinl/interactive-blogging-with-observable-notebooks-and-gatsb"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
  title: "Interactive blogging with Observable Notebooks and gatsby.js",
  post_date: "2019-10-11",
  code_url:
    "https://observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb",
  post_type: "obs",
  post_category: "data",
  description: ""
}

let output_order = ["message", "md1", "md2", "md3", "md4", "md5", "md6"]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
