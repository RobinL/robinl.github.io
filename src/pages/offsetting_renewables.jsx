import React from 'react'
import define from "@robinl/how-much-should-carbon-offsetting-cost"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
         title: "Carbon offsetting vs. the cost of renewable energy",
         post_date: "2019-10-13",
         code_url:
           "https://observablehq.com/@robinl/how-much-should-carbon-offsetting-cost/",
         post_type: "obs",
         post_category: "energy",
       }

let output_order = [
    "title",
"md1",
"md2",
"md3",
"md4",
"md5",
"md6",
"md7",
"md8",
"md9",
"md10",
"md11"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
