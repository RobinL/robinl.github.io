import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/command_control.mdx"

export const frontmatter = {
  title: "The Downfall of Command and Control Data Leadership",
  post_date: "2020-11-07",
  code_url:
    "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/command_control.mdx",
  post_type: "mdx",
  post_category: "data",
  description: "The Downfall of Command and Control Data Leadership - why new big bang data platforms fail"
}

export default ({ data }) => (
  <ObsMdxPage post_frontmatter={frontmatter}>
    <MDXDocument />
  </ObsMdxPage>
)