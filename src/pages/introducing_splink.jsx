import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/introducing_splink.mdx"

export const frontmatter = {
         title: "Fuzzy Matching and Deduplicating Hundreds of Millions of Records using Apache Spark",
         post_date: "2020-04-16",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/introducing_splink.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Introducing splink, a Pyspark library for record linkage at scale using unsupervised learning"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)