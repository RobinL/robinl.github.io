import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/introducing_splink.mdx"

export const frontmatter = {
         title: "Fuzzy Matching and Deduplicating Hundreds of Millions of Records with Splink",
         post_date: "2022-08-04",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/introducing_splink.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Introducing Splink, a fast, accurate and scalable fuzzy record matching library that supports multiple SQL backends"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)