import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/em_intuition.mdx"
import LinkageFooter from '../components/linkage_footer'

export const frontmatter = {
  title: "The relationship between probabilities, match weights and Bayes factors",
  post_date: "2023-07-07",
  code_url:
    "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/slide_rule.mdx",
  post_type: "mdx",
  post_category: "probabilistic_linkage",
  description: "Visualising the correspondence between match weights, probabilities, Bayes factors and their intuitive explanations"
}



export default (props) => {


  return (
    <ObsMdxPage post_frontmatter={frontmatter}>
      <MDXDocument />
      <LinkageFooter current_path={props.current_path}></LinkageFooter>
    </ObsMdxPage>
  )
}

