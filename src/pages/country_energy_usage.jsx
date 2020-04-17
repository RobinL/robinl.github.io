import React from 'react'
import define from "@robinl/energy-usage-and-goods-imports-and-exports"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Comparing energy usage across countries",
         post_date: "2020-04-17",
         code_url:
           "https://observablehq.com/@robinl/energy-usage-and-goods-imports-and-exports",
         post_type: "obs",
         post_category: "energy",
         description: ""
       }

let output_order = [
  "title",
  "intro",
  "viewof metric",
  "country_map",
  "bar_chart",
  "sewha_comparison",
  "styles"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
