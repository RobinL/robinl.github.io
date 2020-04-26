import React from "react"
import define from "@robinl/bird-song-quiz"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
  title: "Birdsong quiz",
  post_date: "2020-04-26",
  code_url:
    "https://observablehq.com/@robinlbirdsong-recordings/",
  post_type: "obs",
  post_category: "other",
  description: "Test how good you are at identifying uK birdsong recordings"
}

let output_order = [
  "title",
  "my_interface"
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
