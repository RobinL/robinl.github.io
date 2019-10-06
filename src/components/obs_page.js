import React from 'react'
import Layout from "../layouts/layout"
import ObeservableNotebookDiv from "./observable_div"
import PostFrontMatter from "./post_frontmatter"

// let ObservablePage = (define, output_order = [], post_frontmatter = {}) => (
//     <Layout>
//         <PostFrontMatter post_frontmatter={post_frontmatter}/>
//         <ObeservableNotebookDiv define={define} output_order={output_order}/>
//     </Layout>
// )

const ObservablePage = (props) => (

    <Layout>
        <PostFrontMatter post_frontmatter={props.post_frontmatter} />
        <ObeservableNotebookDiv define={props.define} output_order={props.output_order} />
    </Layout>

)

export default ObservablePage