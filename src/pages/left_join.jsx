import React from 'react'
import define from "@robinl/understanding-the-spark-ui-by-example-the-left-join"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Understanding the Spark UI by example: the Left Join",
         post_date: "2019-12-01",
         code_url:
           "https://observablehq.com/@robinl/understanding-the-spark-ui-by-example-the-left-join/",
         post_type: "obs",
         post_category: "data",
       }

let output_order = [
  "title",
  "intro",
  "plan",
  "parallelisation",
  "other_parts",
  "references",
  "mystyles",
  "metadata"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
