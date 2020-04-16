import React from 'react'
import define from "@robinl/unsupervised-probabalistic-data-matching-using-the-expec"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title:
           "Unsupervised probabalistic data matching using the Expectation Maximisation algorithm",
         post_date: "2019-11-03",
         code_url:
           "https://observablehq.com/@robinl/unsupervised-probabalistic-data-matching-using-the-expec/",
         post_type: "obs",
         post_category: "data",
         description: ""
       }

let output_order = [
"title",
"out_1",
"out_2",
"out_3",
"viewof left_table_csv",
"out_4",
"out_5",
"viewof right_table_csv",
"out_6",
"out_7",
"viewof match_pairs_csv",
"out_8",
"out_9",
"out_10",
"out_11",
"out_12",
"viewof lambda",
"viewof pi1_1_m1",
"viewof pi1_1_m0",
"viewof pi2_1_m1",
"viewof pi2_05_m1",
"viewof pi2_1_m0",
"viewof pi2_05_m0",
"out_13",
"out_14",
"ll_chart",
"out_15",
"pi_chart_1",
"out_16",
"pi_chart_2",
"out_17",
"out_18",
"out_19"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
