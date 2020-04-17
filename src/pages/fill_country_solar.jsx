import React from 'react'
import define from "@robinl/filling-the-country-with-solar-panels"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Filling the country with solar panels",
         post_date: "2020-04-17",
         code_url:
           "https://observablehq.com/@robinl/filling-the-country-with-solar-panels",
         post_type: "obs",
         post_category: "energy",
         description: ""
       }

let output_order = [
  "title",
  "viewof solar_perc",
  "map",
  "total_kwh"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
