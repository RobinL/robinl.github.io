import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/effective_testing.mdx"

export const frontmatter = {
         title: "Effective testing of analytical models using automated sense checks",
         post_date: "2019-08-26",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/effective_testing.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Effective testing of analytical models using automated sense checks"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)