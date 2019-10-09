import React from "react"
import define from "@robinl/flight-distance-calculator"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Flight distance calculator",
         post_date: "2019-10-09",
         code_url:
           "https://observablehq.com/@robinl/flight-distance-calculator/",
         post_type: "obs",
         post_category: "energy",
       }

let output_order = [
  "title",
  "viewof flights_list",
  "blurb",
  "table_of_distances",
  "download_as_csv",
  "flights_chart",
  "file_upload_blurb",
  "viewof upload",
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
