import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/em_intuition.mdx"
import LinkageFooter from '../components/linkage_footer'

export const frontmatter = {
         title: "The Intuition Behind the Use of Expectation Maximisation to Train Record Linkage Models",
         post_date: "2022-10-14",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/em_intuition.mdx",
         post_type: "mdx",
         post_category: "probabilistic_linkage",
         description: "An intuitive explanation for how the Expectation Maximimisation algorithm is able to produce unsupervised estimates of Splink model parameters"
       }



export default (props) => {


return  (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
        <LinkageFooter current_path={props.current_path}></LinkageFooter>
    </ObsMdxPage>
)
}

