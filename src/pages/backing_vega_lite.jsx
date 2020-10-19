import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/backing_vega_lite.mdx"

export const frontmatter = {
         title: "Why I’m backing Vega-Lite as our default tool for data visualisation",
         post_date: "2018-08-22",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/backing_vega_lite.mdx",
         post_type: "mdx",
         post_category: "data",
         description: "hy I’m backing Vega-Lite as our default tool for data visualisation"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)