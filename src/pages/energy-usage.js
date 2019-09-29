
import define from "@robinl/energy-usage-calculator-for-everyday-activities"
import ObservablePage from "../components/obs_page"


let output_order = [
    "title",
    "under_title_blurb",
    "key_to_graphics_title",
    "driving_title",
    "driving_text_output",
    "driving_chart_output"

]


export default ({ data }) => (
    ObservablePage(define, output_order)
)


