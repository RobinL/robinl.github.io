import define1 from "./6b9b5e1eb1b4504e@107.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Driving`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _driving_text(md,inline_input,$0,time_period_picker,$1,$2){return(
md` You drive an average 
${inline_input($0, "number", "60px")} 
miles per 
${time_period_picker($1)} in a vehicle that gets an average of 
${inline_input($2, "number", "45px")}
miles per imperial gallon`
)}

function _kwh(eu,miles,miles_driven_period,miles_per_gallon){return(
eu.driving.miles_driven_to_kwh_per_day(miles, miles_driven_period, miles_per_gallon)
)}

function _driving_chart(unit_chart,kwh){return(
unit_chart({"Driving":kwh})
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _driving_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _driving_data(kwh){return(
[{"name": "Driving", "value": kwh}]
)}

function _miles(inputs){return(
new inputs.input(10000)
)}

function _miles_per_gallon(inputs){return(
new inputs.input(45)
)}

function _miles_driven_period(inputs){return(
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
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  main.variable(observer("driving_text")).define("driving_text", ["md","inline_input","viewof miles","time_period_picker","viewof miles_driven_period","viewof miles_per_gallon"], _driving_text);
  main.variable(observer("kwh")).define("kwh", ["eu","miles","miles_driven_period","miles_per_gallon"], _kwh);
  main.variable(observer("driving_chart")).define("driving_chart", ["unit_chart","kwh"], _driving_chart);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("driving_conclusion")).define("driving_conclusion", ["md","kwh_formatted"], _driving_conclusion);
  main.variable(observer("driving_data")).define("driving_data", ["kwh"], _driving_data);
  main.variable(observer("viewof miles")).define("viewof miles", ["inputs"], _miles);
  main.variable(observer("miles")).define("miles", ["Generators", "viewof miles"], (G, _) => G.input(_));
  main.variable(observer("viewof miles_per_gallon")).define("viewof miles_per_gallon", ["inputs"], _miles_per_gallon);
  main.variable(observer("miles_per_gallon")).define("miles_per_gallon", ["Generators", "viewof miles_per_gallon"], (G, _) => G.input(_));
  main.variable(observer("viewof miles_driven_period")).define("viewof miles_driven_period", ["inputs"], _miles_driven_period);
  main.variable(observer("miles_driven_period")).define("miles_driven_period", ["Generators", "viewof miles_driven_period"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  return main;
}
