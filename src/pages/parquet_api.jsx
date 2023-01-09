import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/parquet_api.mdx"

export const frontmatter = {
         title: "Why parquet files are my preferred API for bulk open data",
         post_date: "2023-01-09",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/parquet_api.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Open data should be served as CORS-enabled parquet files rather than using a custom API"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)