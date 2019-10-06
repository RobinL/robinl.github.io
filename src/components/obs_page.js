import React from 'react'
import Layout from "../layouts/layout"
import ObeservableNotebookDiv from "./observable_div"
import PostFrontMatter from "./post_frontmatter"

const ObservablePage = (props) => (

    <Layout>
        <PostFrontMatter post_frontmatter={props.post_frontmatter} />
        <ObeservableNotebookDiv define={props.define} output_order={props.output_order} />
    </Layout>

)

export default ObservablePage