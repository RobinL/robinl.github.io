import React from 'react'
import define from "@robinl/86fc30325e4106c4"
import ProbLinkagePage from "../components/prob_linkage_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "The mathematics of the Fellegi Sunter model",
    post_date: "2021-05-07",
    code_url: "https://observablehq.com/@robinl/86fc30325e4106c4",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  This article presents the maths alongside an interactive example."
}

let output_order = [
    "title",
    "para_1",
    "para_2",
    "para_3",
    "table_l1",
    "ds2_head",
    "table_r1",
    "rec_comparisons",
    "para_4",
    "subhead_1",
    "para_5",
    "para_6",
    "para_7",
    "para_8",
    "subhead_2",
    "para_10",
    "viewof splink_settings",
    "para_11",
    "viewof row_index",
    "this_row",
    "para_12",
    "para_13",
    "para_14",
    "para_15",
    "para_16",
    "para_17",
    "para_18",
    "para_19",
    "css_styles"



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