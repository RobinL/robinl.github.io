import React from 'react'
import define from "@robinl/visualising-fellegi-sunter"

import ObsMdxPage from "../components/mdx_obs_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "Visualising the Fellegi Sunter model",
    post_date: "2021-05-07",
    code_url: "https://observablehq.com/@robinl/visualising-fellegi-sunter",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  This article presents a way of visualising how the model works."
}

let output_order = [
    "additional_styles",
    "title",
    "para_1",
    "para_2",
    "para_3",
    "para_4",
    "subhead_1",
    "para_5",
    "lam_view",
    "treemap_1",
    "para_6",
    "subhead_2",
    "para_7",
    "fname_view",
    "para_8",
    "treemap_2",
    "para_9",
    "subhead_3",
    "para_10",
    "sname_view",
    "para_11",
    "treemap_3",
    "para_12",

    "subhead_4",
    "dob_view",
    "para_13",
    "treemap_4",
    "para_14",

    "subhead_5",
    "town_view",
    "para_15",
    "treemap_5",
    "para_16",
    "annex",


    "additional_styles",
    "styles2",
    "css_styles"


]

const css_override = css`
margin-left: auto;
margin-right: auto;
width: 90%;
max-width: 800px;
table {font-size: 0.8rem;
 line-height: 1rem;}
 div {position: relative}
 .wrap-info {
     font-size: 0.7rem;
 }
rem;
`



export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}
        css={css_override} />

)