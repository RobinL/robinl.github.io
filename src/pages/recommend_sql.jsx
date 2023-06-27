import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/recommend_sql.mdx"

export const frontmatter = {
         title: "SQL should be the default choice for data transformation logic",
         post_date: "2023-01-30",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/recommend_sql.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "SQL should be the first option considered for new data engineering work.  It’s robust, fast, future-proof and testable. With a bit of care, it’s clear and readable."
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)