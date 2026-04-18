import define1 from "./1b459452a203b8d6@89.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Electricity`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _electricity_text(md,inline_input,$0,$1){return(
md` Your energy bill says you use 
${inline_input($0, "number", "60px")} KWh of electricity
per year and there are 
${inline_input($1, "number", "45px")} 
people in your household.
`
)}

function _kwh(eu,actual_usage_from_bill,num_occupants){return(
eu.electricity.electricity_kwh_per_day(actual_usage_from_bill, num_occupants)
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _electricity_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _electricity_chart(unit_chart,kwh){return(
unit_chart({"Electricity":kwh})
)}

function _electricity_data(kwh){return(
[ {"name": "Electricity", "value" : kwh}]
)}

function _actual_usage_from_bill(inputs){return(
new inputs.input(1800)
)}

function _num_occupants(inputs){return(
new inputs.input(2)
)}

function _eu(require){return(
require('@robinl/energy_usage@0.1.7')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("inline_input", child1);
  main.import("time_period_picker", child1);
  main.variable(observer("electricity_text")).define("electricity_text", ["md","inline_input","viewof actual_usage_from_bill","viewof num_occupants"], _electricity_text);
  main.variable(observer("kwh")).define("kwh", ["eu","actual_usage_from_bill","num_occupants"], _kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("electricity_conclusion")).define("electricity_conclusion", ["md","kwh_formatted"], _electricity_conclusion);
  main.variable(observer("electricity_chart")).define("electricity_chart", ["unit_chart","kwh"], _electricity_chart);
  main.variable(observer("electricity_data")).define("electricity_data", ["kwh"], _electricity_data);
  main.variable(observer("viewof actual_usage_from_bill")).define("viewof actual_usage_from_bill", ["inputs"], _actual_usage_from_bill);
  main.variable(observer("actual_usage_from_bill")).define("actual_usage_from_bill", ["Generators", "viewof actual_usage_from_bill"], (G, _) => G.input(_));
  main.variable(observer("viewof num_occupants")).define("viewof num_occupants", ["inputs"], _num_occupants);
  main.variable(observer("num_occupants")).define("num_occupants", ["Generators", "viewof num_occupants"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
