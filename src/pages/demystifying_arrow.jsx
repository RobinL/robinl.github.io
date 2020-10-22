import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/demystifying_arrow.mdx"

export const frontmatter = {
         title: "Demystifying Apache Arrow",
         post_date: "2020-10-22",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/demystifying_arrow.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "Demystifying Apache Arrow - some observations from a data scientist. Learning more about a tool that can filter and aggregate two billion rows on a laptop in two seconds"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)