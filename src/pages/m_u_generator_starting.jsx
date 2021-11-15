import React from 'react'
import define from "@robinl/m-and-u-probability-generator_starting_values"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "m and u probability generator with starting values",
    post_date: "2021-11-15",
    code_url: "https://observablehq.com/d/1d09c6cf5d576e0a",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "Generate m and u probabilities to input into Splink.  Part of the introduction to Fellegi Sunter series."
}

let output_order = [
    "title",
    "viewof starting_data",
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