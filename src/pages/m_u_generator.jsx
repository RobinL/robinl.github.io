import React from 'react'
import define from "@robinl/m-and-u-probability-generator"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "m and u probability generator",
    post_date: "2021-06-10",
    code_url: "https://observablehq.com/@robinl/m-and-u-probability-generator",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "Generate m and u probabilities to input into Splink.  Part of the introductino to Fellegi Sunter series."
}

let output_order = [
    "title",
    "viewof num_levels",
    "viewof d",
    "bf_chart",
    "para_1",
    "settings_output"




]

const css_override = css`
margin-left: auto;
margin-right: auto;
width: 90%;
max-width: 800px;
table {font-size: 0.8rem;
 line-height: 1rem;}
rem;
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