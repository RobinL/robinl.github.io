import React from "react"
import { colors } from "gatsby-design-tokens"

const front_matter_style = {
    color: colors.grey[60],
    fontSize: "1.5rem",
    lineHeight: "1.2",
    marginBottom: "1.5625rem"}


function Subtitle(props)  {

    return (
        <div style={front_matter_style}>
            {props.children}

    </div>
    )
    }

export default Subtitle