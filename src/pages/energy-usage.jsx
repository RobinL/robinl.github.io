import React from "react"
import define from "@robinl/energy-usage-calculator-for-everyday-activities"
import ObsMdxPage from "../components/mdx_obs_page"

export const frontmatter = {
    title: "Energy usage ready reckoner",
    post_date: "2019-10-05",
    code_url: "https://observablehq.com/@robinl/energy-usage-calculator-for-everyday-activities",
    post_type: "obs",
    post_category: "energy"
}

let output_order = [
  "title",
  "under_title_blurb",
  "key_to_graphics_title",
  "key_to_graphics_text",
  "driving_title",
  "driving_text_output",
  "driving_chart_output",
  "flying_title",
  "flying_text_output",
  "flying_chart_output",
  "heating_title",
  "heating_text_output",
  "heating_chart_output",
  "showers_baths_text_output",
  "showers_bath_chart_output",
  "electricity_title",
  "electricity_text_output",
  "electricity_chart_output",
  "stuff_title",
  "stuff_text_output",
  "stuff_chart_output",
  "showers_title",
  "showers_text_output",
  "showers_chart_output",
  "eating_title",
  "eating_text_output",
  "eating_chart_output",
  "washing_title",
  "washing_text_output",
  "washing_chart_output",
  "dogs_title",
  "dogs_text_output",
  "dogs_chart_output",
  "summary_title",
  "summary_text_output",
  "summary_chart_output",
  "summary_text_output_2",
  "energy_use_treemap"
]

export default ({ data }) => (
    <ObsMdxPage
        define={define}
        output_order={output_order}
        post_frontmatter={frontmatter} />

)