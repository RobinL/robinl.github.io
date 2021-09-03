import React from 'react'
import define from "@robinl/the-carbon-impact-of-switiching-to-an-electric-car"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
    title: "The carbon impact of switiching to an electric car",
    post_date: "2021-09-03",
    code_url: "https://observablehq.com/@robinl/the-carbon-impact-of-switiching-to-an-electric-car",
    post_type: "obs",
    post_category: "energy",
    description: "What is the comparative carbon footprint of electric cars?  As an existing petrol ICE car owner, should you switch to an electric car"
}

let output_order = [
    "title",
    "para_1",
    "title_assumptions",
    "ice_mileage_md",
    "elec_mileage_md",
    "total_emissions_ice_md",
    "total_emissions_elec_md",
    "ice_vehicle_emissions_md",
    "uplift_md",
    "elec_miles_kwh_md",
    "carbon_intensity_md",
    "results_title",
    "results_para_1",
    "results_chart",
    "results_table",
    "results_carbon_offset",
    "replace_para_1",
    "replace_para_2",
    "replace_para_3",
    "breakeven_electric",
    "breakeven_electric_chart",
    "further_considerations",
    "annex"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter} />

)
