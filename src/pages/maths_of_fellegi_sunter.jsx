import React from 'react'
import define from "@robinl/the-mathematics-of-the-fellegi-sunter-model"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
    title: "The mathematics of the Fellegi Sunter model",
    post_date: "2021-05-07",
    code_url: "https://observablehq.com/@robinl/the-mathematics-of-the-fellegi-sunter-model",
    post_type: "obs",
    post_category: "probabilistic_linkage",
    description: "An set of interactive, explorable explanations of the Fellegi Sunter model of probabilistic record linkage.  This article presents the maths alongside an interactive example."
}

let output_order = [
    "title",
    "para_1",
    "para_2",
    "para_3",
    "para_4",
    "subhead_1",
    "para_5",
    "para_6",
    "para_7",
    "para_8",
    "subhead_2",
    "para_9",
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



]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter} />

)
