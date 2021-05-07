import React from 'react'
import define from "@robinl/understanding-match-weights"
import ObsMdxPage from "../components/mdx_obs_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "Understanding match weights in the Fellegi Sunter model",
    post_date: "2021-05-07",
    code_url: "https://observablehq.com/@robinl/understanding-match-weights",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  This article discusses match weights."
}

let output_order = [
    "title",
    "para_1",
    "para_2",
    "para_3",
    "viewof prior",
    "viewof m",
    "viewof u",
    "bf",
    "post",
    "subhead_1",
    "para_4",
    "para_5",
    "subhead_2",
    "para_6",
    "para_7",
    "viewof splink_settings",
    "para_8",
    "chart_1",
    "para_9",
    "chart_2",
    "para_10",
    "viewof fname_radio",
    "viewof sname_radio",
    "viewof dob_radio",
    "viewof town_radio",
    "chart_3",
    "para_11",
    "annex",
    "para_12",
    "para_13",
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

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}
        css={css_override} />

)