import define1 from "./de6c2e587683b436@93.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Pets`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _dogs_text(md,inline_input,$0,$1){return(
md` You have 
${inline_input($0, "number", "30px")} 
dog(s) who weigh 
${inline_input($1, "number", "50px")} 
kg each (on average)
`
)}

function _kwh(num_dogs,eu,dogs_weight_kg){return(
num_dogs * eu.pets.kwh_required_by_dogs_per_day(dogs_weight_kg)
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _dogs_chart(unit_chart,kwh){return(
unit_chart({"Dogs":kwh})
)}

function _dogs_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _dogs_data(kwh){return(
[{"name": "Dogs", "value": kwh}]
)}

function _num_dogs(inputs){return(
new inputs.input(1)
)}

function _dogs_weight_kg(inputs){return(
new inputs.input(15)
)}

function _eu(require){return(
require('@robinl/energy_usage@0.0.22')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("inline_input", child1);
  main.import("time_period_picker", child1);
  main.variable(observer("dogs_text")).define("dogs_text", ["md","inline_input","viewof num_dogs","viewof dogs_weight_kg"], _dogs_text);
  main.variable(observer("kwh")).define("kwh", ["num_dogs","eu","dogs_weight_kg"], _kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("dogs_chart")).define("dogs_chart", ["unit_chart","kwh"], _dogs_chart);
  main.variable(observer("dogs_conclusion")).define("dogs_conclusion", ["md","kwh_formatted"], _dogs_conclusion);
  main.variable(observer("dogs_data")).define("dogs_data", ["kwh"], _dogs_data);
  main.variable(observer("viewof num_dogs")).define("viewof num_dogs", ["inputs"], _num_dogs);
  main.variable(observer("num_dogs")).define("num_dogs", ["Generators", "viewof num_dogs"], (G, _) => G.input(_));
  main.variable(observer("viewof dogs_weight_kg")).define("viewof dogs_weight_kg", ["inputs"], _dogs_weight_kg);
  main.variable(observer("dogs_weight_kg")).define("dogs_weight_kg", ["Generators", "viewof dogs_weight_kg"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
