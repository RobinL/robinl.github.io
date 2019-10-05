import React from "react"
import { colors } from "gatsby-design-tokens"

const front_matter_style = {
    color: colors.grey[40],
    marginBottom: 0,
    paddingBottom: 0

}



function PostFrontMatter(props)  {
    return (
        <div style={front_matter_style}>
        <p>Originally posted: {props.post_frontmatter.post_date}. Live edit this notebook <a href={props.post_frontmatter.code_url}>here</a>.</p>

    </div>
    )
    }

export default PostFrontMatter