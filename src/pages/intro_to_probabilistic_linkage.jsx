import React from 'react'
import define from "@robinl/an-interactive-introduction-to-probabilistic-record-link"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"


export const frontmatter = {
    title: "An Interactive Introduction to Probabilistic Record Linkage",
    post_date: "2021-05-25",
    code_url: "https://observablehq.com/@robinl/an-interactive-introduction-to-probabilistic-record-link",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "A set of interactive, explorable explanations of the Fellegi Sunter model, providing an introduction to probabilistic record linkage."
}

let output_order = [
    "title",
    "para_1",
    "para_2",
    "para_3",
    "para_4",
    "para_5",
    "table",
    "estimated_probability",
    "para_6",
    "viewof show_complex",
    "waterfall_chart",
    "para_7",
    "structure",
    "para_8"
]


const css_override = css`
margin-left: auto;
margin-right: auto;
width: 90%;
max-width: 700px;
table {font-size: 1.3rem;
 line-height: 1.5rem;
}
#output__table_1 {
    margin-bottom:10px;
}


`



export default (props) => {

    return (<ProbLinkagePage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}
        css={css_override}
        current_path={props.path}
    />)


}
