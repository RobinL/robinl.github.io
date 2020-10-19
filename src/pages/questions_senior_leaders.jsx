import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/questions_senior_leaders.mdx"

export const frontmatter = {
         title: "Questions Senior Leaders Should Ask Their Data Delivery Teams",
         post_date: "2019-03-14",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/questions_senior_leaders.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Questions Senior Leaders Should Ask Their Data Delivery Teams - How to improve the likelihood of success whilst reducing the governance burden on teams"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)