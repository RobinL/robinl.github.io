import React from "react"
import { colors } from "gatsby-design-tokens"

const front_matter_style = {
    color: colors.grey[40],
    marginBottom: 0,
    paddingBottom: 0

}



function PostFrontMatter(props)  {


    const isObservable = !(props.post_frontmatter.code_url.toLowerCase().includes("github.com/robinl"))

    let edit_text
    if (isObservable) {
        edit_text = "Live edit this notebook"
    } else {
        edit_text = "View source code for this page"
    }

    return (
        <div style={front_matter_style}>
            <p>Originally posted: {props.post_frontmatter.post_date}. {edit_text} <a href={props.post_frontmatter.code_url}>here</a>.</p>

    </div>
    )
    }

export default PostFrontMatter