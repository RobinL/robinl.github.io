import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/open_source_dividend.mdx"

export const frontmatter = {
         title: "The open source dividend",
         post_date: "2023-03-04",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/open_source_dividend.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Splink and the open source dividend"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)