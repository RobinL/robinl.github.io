import React from "react"
import define from "@robinl/understanding-the-spark-ui-by-example-sorting-data"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
  title: "Understanding the Spark UI by example: sorting data",
  post_date: "2019-12-08",
  code_url:
    "https://observablehq.com/@robinl/understanding-the-spark-ui-by-example-sorting-data/",
  post_type: "obs",
  post_category: "data",
  description: ""
}

let output_order = [
  "title",
  "intro",
  "jobs",
  "plan",
  "observations",
  "references",
  "mystyles",
  "metadata",
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
