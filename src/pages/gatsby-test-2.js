import define from "@robinl/gatsby-test-2"
import ObservablePage from "../components/obs_page"

let output_order = [
    "first_cell",
    "second_cell",
    "third_cell",
    "viewof options",
    "error_text"
]
export default ({ data }) => (
    ObservablePage(define, output_order)
)