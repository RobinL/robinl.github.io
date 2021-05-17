import React from 'react'
import define from "@robinl/interactive-fellegi-sunter-model"
import ObsMdxPage from "../components/mdx_obs_page"
import { css } from "@emotion/core"

export const frontmatter = {
    title: "Interactive probabilistic record linkage model",
    post_date: "2021-05-17",
    code_url: "https://observablehq.com/@robinl/interactive-fellegi-sunter-model",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "A live, interactive, explorable probabilistic record linkage (Fellegi Sunter) model"
}

let output_order = [
    "title",
    "para_1",
    "table",
    "estimated_probability",
    "para_2",
    "viewof show_complex",
    "waterfall_chart",
    "notes",

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

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}
        css={css_override} />

)
