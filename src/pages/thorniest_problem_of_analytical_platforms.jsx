import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/thorniest_problem_of_analytical_platforms.mdx"

export const frontmatter = {
  title: "The Thorniest Problem of Building an Analytical Platform",
  post_date: "2021-10-29",
  code_url:
    "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/thorniest_problem_of_analytical_platforms.mdx",
  post_type: "mdx",
  post_category: "data",
  description: "The Thorniest Problem of Building an Analytical Platform: Enabling collaborative development of the platform itself without losing control of complexity."
}

export default ({ data }) => (
  <ObsMdxPage post_frontmatter={frontmatter}>
    <MDXDocument />
  </ObsMdxPage>
)