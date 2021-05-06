import React from "react"
import define from "@robinl/bird-song-quiz"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
  title: "Birdsong quiz",
  post_date: "2020-04-26",
  code_url:
    "https://observablehq.com/@robinl/bird-song-quiz/",
  post_type: "obs",
  post_category: "other",
  description: "Test how good you are at identifying uK birdsong recordings"
}

let output_order = [
  "title",
  "tag",
  "settings",
  "viewof select_your_quiz",
  "quiz",
  "my_interface",
  "other_link"
]

export default ({ data }) => (
  <ObsMdxPage
    define={define}
    output_order={output_order}
    post_frontmatter={frontmatter}
  />
)
