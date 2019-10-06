import React from 'react'
import Layout from "../layouts/layout"
import PostFrontMatter from "./post_frontmatter"


// How to do children data and props
const MDXPage = (props) => (
    <Layout>
        <PostFrontMatter post_frontmatter={props.post_frontmatter} />
        {props.children}
    </Layout>
)

export default MDXPage