import React from 'react'
import { LayoutPost } from "../layouts"
import ObeservableNotebookDiv from "./observable_div"
import PostFrontMatter from "./post_frontmatter"



let ObservablePage = (define, output_order = [], post_frontmatter = {}) => (
    <LayoutPost>
        <PostFrontMatter post_frontmatter={post_frontmatter}/>
        <ObeservableNotebookDiv define={define} output_order={output_order}/>
    </LayoutPost>
)

export default ObservablePage