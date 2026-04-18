import define1 from "./6b9b5e1eb1b4504e@107.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Stuff`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _stuff_text(md,inline_input,$0,time_period_picker,$1){return(
md` You spend an average of 
£ ${inline_input($0, "number", "60px")} 
per ${time_period_picker($1)}
on 'stuff'.

('Stuff' includes things like clothes, electronics, white goods and cars, but excludes items otherwise accounted for such as food, petrol and flights)
`
)}

function _kwh(eu,spending,spending_time_period){return(
eu.stuff.pounds_sterling_to_kwh(spending) / eu.convert.convert_units(spending_time_period, "days")
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _stuff_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _stuff_chart(unit_chart,kwh){return(
unit_chart({"Stuff":kwh})
)}

function _stuff_data(kwh){return(
[{"name": "Stuff", "value": kwh}]
)}

function _spending(inputs){return(
new inputs.input(500)
)}

function _spending_time_period(inputs){return(
new inputs.input("months")
)}

function _eu(require){return(
require('@robinl/energy_usage@0.0.31')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("inline_input", child1);
  main.import("time_period_picker", child1);
  main.variable(observer("stuff_text")).define("stuff_text", ["md","inline_input","viewof spending","time_period_picker","viewof spending_time_period"], _stuff_text);
  main.variable(observer("kwh")).define("kwh", ["eu","spending","spending_time_period"], _kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("stuff_conclusion")).define("stuff_conclusion", ["md","kwh_formatted"], _stuff_conclusion);
  main.variable(observer("stuff_chart")).define("stuff_chart", ["unit_chart","kwh"], _stuff_chart);
  main.variable(observer("stuff_data")).define("stuff_data", ["kwh"], _stuff_data);
  main.variable(observer("viewof spending")).define("viewof spending", ["inputs"], _spending);
  main.variable(observer("spending")).define("spending", ["Generators", "viewof spending"], (G, _) => G.input(_));
  main.variable(observer("viewof spending_time_period")).define("viewof spending_time_period", ["inputs"], _spending_time_period);
  main.variable(observer("spending_time_period")).define("spending_time_period", ["Generators", "viewof spending_time_period"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
