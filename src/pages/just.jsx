import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/just.mdx"

export const frontmatter = {
         title: "Why don't you just",
         post_date: "2022-11-11",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/just.mdx",
         post_type: "mdx",
         post_category: "other",
         description: "The phrase 'why don't you just' is problematic"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)