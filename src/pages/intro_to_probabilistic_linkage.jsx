import React from 'react'
import define from "@robinl/an-introduction-to-probabalistic-record-linkage-using-the"
import ObsMdxPage from "../components/mdx_obs_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "An Introduction to Probabalistic Record Linkage using the Fellegi Sunter model",
    post_date: "2021-05-06",
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
    "para_4",
]


const css_override = css`

    font-size: 10pt;
`

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}
        css={css_override} />

)
