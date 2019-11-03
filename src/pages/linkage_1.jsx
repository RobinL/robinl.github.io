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
       }

let output_order = [
  "title",
  "md_1",
  "md_2",
  "md_3",
  "md_4",
  "md_5",
  "md_6",
  "viewof lambda",
  "viewof pi1_1_m1",
  "viewof pi1_1_m0",
  "viewof pi2_1_m1",
  "viewof pi2_05_m1",
  "viewof pi2_1_m0",
  "viewof pi2_05_m0",
  "md_7",
  "md_8",
  "ll_chart",
  "md_9",
  "pi_chart_1",
  "md_10",
  "pi_chart_2",
  "md_11",
  "md_12"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
