import React from 'react'
import MDXPage from "../components/mdx_page.jsx"
import MDXDocument from "./first_post.mdx"

const post_frontmatter = {
    post_date: "2019-10-05",
    code_url: "https://observablehq.com/@robinl/my-flights/"
}

export default (props) => (
    <MDXPage post_frontmatter={post_frontmatter}>
        <MDXDocument />
    </MDXPage>
)