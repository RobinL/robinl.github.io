import React from 'react'
import define from "@robinl/my-flights"
import ObservablePage from "../components/obs_page"


let output_order = [
    "title",
    "blurb",
    "chart"
]

const post_frontmatter = {
    post_date: "2019-10-05",
    code_url: "https://observablehq.com/@robinl/my-flights/"
}

export default ({ data }) => (
    <ObservablePage
        define={define}
        output_order={output_order}
        post_frontmatter={post_frontmatter}/>

)