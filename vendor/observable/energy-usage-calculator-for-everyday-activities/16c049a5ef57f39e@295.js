import define1 from "./6b9b5e1eb1b4504e@107.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Heating and gas`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _heating_text(md,inline_input,$0,units_picker,$1,$2){return(
md` Your energy bill says you use 
${inline_input($0, "number", "60px")} 
${units_picker($1)} 
per year and there are 
${inline_input($2, "number", "45px")} 
people in your household.


`
)}

function _5(md){return(
md`## Need to take out showers and baths from heating`
)}

function _showers_and_baths_text(md,inline_input,$0,$1,$2,$3,$4){return(
md`
You take 
${inline_input($0, "number", "30px")} 
shower(s) a day averaging 
${inline_input($1, "number", "30px")} 
minutes with water flow of 
${inline_input($2, "number", "45px")}
ml per second.

You have 
${inline_input($3,  "number", "30px")} 
bath(s) a day, each one of which contains 
${inline_input($4, "number", "45px")} litres of water.
`
)}

function _heating_kwh(eu,actual_usage_from_bill,num_occupants,bill_units,showers_kwh,baths_kwh){return(
eu.heating.heating_kwh_per_day(actual_usage_from_bill, 19, 19, num_occupants, bill_units) - (showers_kwh - baths_kwh) * num_occupants
)}

function _showers_kwh(eu,num_showers,shower_flow,shower_minutes){return(
eu.shower_bath.shower_get_daily_kwh(num_showers, shower_flow, shower_minutes)
)}

function _baths_kwh(eu,num_baths,bath_litres){return(
eu.shower_bath.bath_get_daily_kwh(num_baths, bath_litres)
)}

function _kwh_formatted(eu,heating_kwh){return(
eu.utils.format_kwh(heating_kwh)
)}

function _heating_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _heating_gas_data(heating_kwh,showers_kwh,baths_kwh){return(
[{"name":"Heating", "value": heating_kwh},{"name":"Showers", "value": showers_kwh},{"name":"Baths", "value": baths_kwh}]
)}

function _heating_chart(unit_chart,heating_kwh){return(
unit_chart({"Heating":heating_kwh})
)}

function _showers_bath_chart(unit_chart,showers_kwh,baths_kwh){return(
unit_chart({"Showers": showers_kwh, "Baths": baths_kwh})
)}

function _actual_usage_from_bill(inputs){return(
new inputs.input(597)
)}

function _bill_units(inputs){return(
new inputs.input("metric_gas_units")
)}

function _num_occupants(inputs){return(
new inputs.input(2)
)}

function _num_showers(inputs){return(
new inputs.input(2)
)}

function _num_baths(inputs){return(
new inputs.input(0.0)
)}

function _shower_minutes(inputs){return(
new inputs.input(4)
)}

function _shower_flow(inputs){return(
new inputs.input(135)
)}

function _bath_litres(inputs){return(
new inputs.input(150)
)}

function _eu(require){return(
require('@robinl/energy_usage@0.1.9')
)}

function _units_picker(inputs,html){return(
function units_picker(view_to_bind) {
  return inputs.bind(
    html`<select>
    <option value="kwh">kwh</option>
    <option value="imperial_gas_units">Imperial units (100s of cubic feet)</option>
    <option value="metric_gas_units">Metrics units</option>
  </select>`,
    view_to_bind
  );
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("inline_input", child1);
  main.variable(observer("heating_text")).define("heating_text", ["md","inline_input","viewof actual_usage_from_bill","units_picker","viewof bill_units","viewof num_occupants"], _heating_text);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("showers_and_baths_text")).define("showers_and_baths_text", ["md","inline_input","viewof num_showers","viewof shower_minutes","viewof shower_flow","viewof num_baths","viewof bath_litres"], _showers_and_baths_text);
  main.variable(observer("heating_kwh")).define("heating_kwh", ["eu","actual_usage_from_bill","num_occupants","bill_units","showers_kwh","baths_kwh"], _heating_kwh);
  main.variable(observer("showers_kwh")).define("showers_kwh", ["eu","num_showers","shower_flow","shower_minutes"], _showers_kwh);
  main.variable(observer("baths_kwh")).define("baths_kwh", ["eu","num_baths","bath_litres"], _baths_kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","heating_kwh"], _kwh_formatted);
  main.variable(observer("heating_conclusion")).define("heating_conclusion", ["md","kwh_formatted"], _heating_conclusion);
  main.variable(observer("heating_gas_data")).define("heating_gas_data", ["heating_kwh","showers_kwh","baths_kwh"], _heating_gas_data);
  main.variable(observer("heating_chart")).define("heating_chart", ["unit_chart","heating_kwh"], _heating_chart);
  main.variable(observer("showers_bath_chart")).define("showers_bath_chart", ["unit_chart","showers_kwh","baths_kwh"], _showers_bath_chart);
  main.variable(observer("viewof actual_usage_from_bill")).define("viewof actual_usage_from_bill", ["inputs"], _actual_usage_from_bill);
  main.variable(observer("actual_usage_from_bill")).define("actual_usage_from_bill", ["Generators", "viewof actual_usage_from_bill"], (G, _) => G.input(_));
  main.variable(observer("viewof bill_units")).define("viewof bill_units", ["inputs"], _bill_units);
  main.variable(observer("bill_units")).define("bill_units", ["Generators", "viewof bill_units"], (G, _) => G.input(_));
  main.variable(observer("viewof num_occupants")).define("viewof num_occupants", ["inputs"], _num_occupants);
  main.variable(observer("num_occupants")).define("num_occupants", ["Generators", "viewof num_occupants"], (G, _) => G.input(_));
  main.variable(observer("viewof num_showers")).define("viewof num_showers", ["inputs"], _num_showers);
  main.variable(observer("num_showers")).define("num_showers", ["Generators", "viewof num_showers"], (G, _) => G.input(_));
  main.variable(observer("viewof num_baths")).define("viewof num_baths", ["inputs"], _num_baths);
  main.variable(observer("num_baths")).define("num_baths", ["Generators", "viewof num_baths"], (G, _) => G.input(_));
  main.variable(observer("viewof shower_minutes")).define("viewof shower_minutes", ["inputs"], _shower_minutes);
  main.variable(observer("shower_minutes")).define("shower_minutes", ["Generators", "viewof shower_minutes"], (G, _) => G.input(_));
  main.variable(observer("viewof shower_flow")).define("viewof shower_flow", ["inputs"], _shower_flow);
  main.variable(observer("shower_flow")).define("shower_flow", ["Generators", "viewof shower_flow"], (G, _) => G.input(_));
  main.variable(observer("viewof bath_litres")).define("viewof bath_litres", ["inputs"], _bath_litres);
  main.variable(observer("bath_litres")).define("bath_litres", ["Generators", "viewof bath_litres"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  main.variable(observer("units_picker")).define("units_picker", ["inputs","html"], _units_picker);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
