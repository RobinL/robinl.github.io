
import define from "@robinl/my-flights"
import ObservablePage from "../components/obs_page"


let output_order = [
    "title",
    "blurb",
    "chart"
]


export default ({ data }) => (
    ObservablePage(define, output_order)
)


