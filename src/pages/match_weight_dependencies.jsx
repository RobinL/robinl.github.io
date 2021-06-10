import React from 'react'
import define from "@robinl/dependencies-between-match-weights"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "Dependencies between match weights",
    post_date: "2021-06-10",
    code_url: "https://observablehq.com/@robinl/dependencies-between-match-weights",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  The dependencies between match weights"
}

let output_order = [
    "title",
    "para_1",
    "para_2",
    "viewof gen",
    "viewof reset_gender",
    "bf_chart_gender",
    "para_3",
    "para_4",
    "viewof fn1",
    "viewof reset_fn1",
    "bf_chart_fn_1",
    "para_5",
    "viewof fn2",
    "viewof reset_fn2",
    "bf_chart_fn_2",
    "para_6",





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