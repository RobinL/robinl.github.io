import React from "react"
import define from "@robinl/flight-distance-calculator-working"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Flight distance calculator",
         post_date: "2019-10-06",
         code_url:
           "https://observablehq.com/@robinl/flight-distance-calculator-working/",
         post_type: "obs",
         post_category: "energy",
       }

let output_order = [
    "title",
   "dropdown",
  "table_of_distances",
  "download_as_csv",
  "flights_chart",
  "style_selectize"
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
