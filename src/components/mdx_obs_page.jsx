import React from 'react'
import Layout from "../layouts/layout"
import ObeservableNotebookDiv from "./observable_div"
import PostFrontMatter from "./post_frontmatter"
import SEO from "../components/seo"

function ObsMdxPage(props){


    let post

    if (props.define) {
        post = <ObeservableNotebookDiv define={props.define} output_order={props.output_order} />
    } else {
        post = props.children
    }

    return (
      <Layout>
          <SEO title={props.post_frontmatter.title}/>
        <PostFrontMatter post_frontmatter={props.post_frontmatter} />
        {post}
      </Layout>
    )

}

export default ObsMdxPage