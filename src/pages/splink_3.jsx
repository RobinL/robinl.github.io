import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/splink_3.mdx"

export const frontmatter = {
         title: "Splink version 3: Fast, accurate and scalable linkage in Python",
         post_date: "2022-08-05",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/introducing_splink.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Splink v3 now offers support for Python and AWS Athena backends, in addition to Spark. It's now easier to use, faster and more flexible, and can be used for close to real time linkage."
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)