import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/open_source_multiplier.mdx"

export const frontmatter = {
         title: "The open source multipler",
         post_date: "2023-03-04",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/open_source_multipler.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "The open source multiplier and splink stats"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)