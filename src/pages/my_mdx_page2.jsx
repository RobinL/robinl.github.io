import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/first_post.mdx"

const post_frontmatter = {
    post_date: "2019-10-05",
    code_url: "https://observablehq.com/@robinl/my-flights/"
}

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={post_frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)