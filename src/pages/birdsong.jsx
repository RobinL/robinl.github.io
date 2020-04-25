import React from "react"
import define from "@robinl/birdsong-recordings"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
  title: "Birdsong recording finder",
  post_date: "2020-04-25",
  code_url:
    "https://observablehq.com/@robinlbirdsong-recordings/",
  post_type: "obs",
  post_category: "data",
  description: "Listen to UK birdsong using the xeno-canto API"
}

let output_order = [
  "title",
  "viewof bird",
  "viewof include_rare",
  "audio_table",
  "photos_title",
  "gallery"
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
