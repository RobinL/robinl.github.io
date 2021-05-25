import React from 'react'
import define from "@robinl/an-introduction-to-probabalistic-record-linkage-using-the"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"


export const frontmatter = {
    title: "An Introduction to Probabalistic Record Linkage using the Fellegi Sunter model",
    post_date: "2021-05-07",
    code_url: "https://observablehq.com/@robinl/an-introduction-to-probabalistic-record-linkage-using-the",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage"
}

let output_order = [
    "title",
    "subtitle_1",
    "para_1",
    "para_2",
    "para_3",
    "table_1",
    "para_4",
    "para_5",
    "para_6",
]


const css_override = css`
margin-left: auto;
margin-right: auto;
width: 90%;
max-width: 800px;
table {font-size: 0.8rem;
 line-height: 1rem;
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
