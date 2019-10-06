import React from 'react'
import define from "@robinl/my-flights"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
    post_date: "2019-10-05",
    code_url: "https://observablehq.com/@robinl/my-flights/",
    post_type: "obs",
    post_category: "energy"
}

let output_order = [
    "title",
    "blurb",
    "chart"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter}/>

)
