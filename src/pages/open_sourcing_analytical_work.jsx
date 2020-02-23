import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/open_sourcing_analytical_work.mdx"

export const frontmatter = {
         title: "Why you should open source your analytical work",
         post_date: "2020-02-22",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/pages/open_sourcing_analytical_work.mdx",
         post_type: "mdx",
         post_category: "data",
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)