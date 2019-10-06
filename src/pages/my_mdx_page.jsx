import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/first_post.mdx"

export const frontmatter = {
         title: "First MDX experiment",
         post_date: "2019-10-05",
         code_url:
           "https://github.com/RobinL/robinlinacre/blob/dev/src/pages/first_post.mdx",
         post_type: "mdx",
         post_category: "curiosities",
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)