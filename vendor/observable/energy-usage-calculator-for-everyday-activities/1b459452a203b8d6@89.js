import define1 from "./6b9b5e1eb1b4504e@107.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Flying`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _flying_text(md,inline_input,$0,time_period_picker,$1){return(
md` You fly an average of
${inline_input($0, "number", "60px")} 
miles per 
${time_period_picker($1)}
in economy class.  (Business class/first class would probably be double this or more)
`
)}

function _kwh(eu,miles,miles_flown_period){return(
eu.flying.flying_miles_to_kwh(miles, miles_flown_period)
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _flying_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _flying_chart(unit_chart,kwh){return(
unit_chart({"Flying":kwh})
)}

function _flying_data(kwh){return(
[ {"name": "Flying", "value" : kwh}]
)}

function _miles(inputs){return(
new inputs.input(12000)
)}

function _miles_flown_period(inputs){return(
new inputs.input("years")
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
  main.variable(observer("flying_text")).define("flying_text", ["md","inline_input","viewof miles","time_period_picker","viewof miles_flown_period"], _flying_text);
  main.variable(observer("kwh")).define("kwh", ["eu","miles","miles_flown_period"], _kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("flying_conclusion")).define("flying_conclusion", ["md","kwh_formatted"], _flying_conclusion);
  main.variable(observer("flying_chart")).define("flying_chart", ["unit_chart","kwh"], _flying_chart);
  main.variable(observer("flying_data")).define("flying_data", ["kwh"], _flying_data);
  main.variable(observer("viewof miles")).define("viewof miles", ["inputs"], _miles);
  main.variable(observer("miles")).define("miles", ["Generators", "viewof miles"], (G, _) => G.input(_));
  main.variable(observer("viewof miles_flown_period")).define("viewof miles_flown_period", ["inputs"], _miles_flown_period);
  main.variable(observer("miles_flown_period")).define("miles_flown_period", ["Generators", "viewof miles_flown_period"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
