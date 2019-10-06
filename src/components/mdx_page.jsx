import React from 'react'
import Layout from "../layouts/layout"
import PostFrontMatter from "./post_frontmatter"


let MDXPage = (Mdx, post_frontmatter = {}) => (
    <Layout>
        <PostFrontMatter post_frontmatter={post_frontmatter} />
        <Mdx />
    </Layout>
)

export default MDXPage