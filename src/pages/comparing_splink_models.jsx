import React from 'react'
import ObsMdxPage from "../components/mdx_obs_page"
import MDXDocument from "../mdx/comparing_splink_models.mdx"

export const frontmatter = {
         title: "Are more complex probabilistic linkage models more accurate?",
         post_date: "2021-11-01",
         code_url:
           "https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/comparing_splink_models.mdx",
         post_type: "mdx",
         post_category: "probabilistic_linkage",
         description: "Comparing Splink models: Are more complex probabilistic linkage models more accurate?"
       }

export default ({ data }) => (
    <ObsMdxPage post_frontmatter={frontmatter}>
        <MDXDocument />
    </ObsMdxPage>
)