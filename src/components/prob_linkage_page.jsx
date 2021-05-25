import React from 'react'
import Layout from "../layouts/layout"
import LinkageFooter from './linkage_footer'
import ObeservableNotebookDiv from "./observable_div"
import PostFrontMatter from "./post_frontmatter"
import SEO from "./seo"


function ProbLinkagePage(props) {


  // let post


  let post = <ObeservableNotebookDiv define={props.define} output_order={props.output_order} />


  return (
    <Layout css={props.className}>
      <SEO title={props.post_frontmatter.title} description={props.post_frontmatter.description} />
      <PostFrontMatter post_frontmatter={props.post_frontmatter} />
      {post}
      <LinkageFooter current_path={props.current_path}
      />
    </Layout>
  )

}

export default ProbLinkagePage