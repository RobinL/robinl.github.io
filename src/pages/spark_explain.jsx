import React from 'react'
import define from "@robinl/spark-explain"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Spark UI SQL detailed annotator",
         post_date: "2019-11-15",
         code_url: "https://observablehq.com/@robinl/spark-explain/",
         post_type: "obs",
         post_category: "data",
         description: ""
       }

let output_order = [
  "title",
  "md_1",
  "viewof raw_html",
  "output_svg",
  "md_glossary",
  "metadata",
  "styles1",
  "styles2"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
