// https://observablehq.com/@robinl/filling-the-country-with-solar-panels@66
import define1 from "./146f352f1166f0d1@2202.js";
import define2 from "./686908927d2af6bf@727.js";

function _title(md){return(
md`# Filling the country with solar panels

What would happen if we covered the entire country in solar panels?`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/fill_country_solar/).*`
)}

function _solar_perc(slider){return(
slider( {min: 0, 
  max: 1, 
  step: 0.0025, 
  format: ".1p",
  title: "Choose percentage to fill with solar panels", 
  description: ""})
)}

function _map(plot_fill_percentage_of_uk,solar_perc){return(
plot_fill_percentage_of_uk(solar_perc)
)}

function _total_kwh(md,d3,kwh_per_person_per_day){return(
md`If we covered this much of the UK with solar panels, we'd generate about ${d3.format(",.0f")(kwh_per_person_per_day)} kWh a day per person.

See [here](http://robinlinacre.com/country_energy_usage) for daily energy usage by country`
)}

function _kwh_per_person_per_day(kwh_uk_total,solar_perc){return(
kwh_uk_total * solar_perc / 66e6
)}

function _kwh_uk_total(){return(
242.495e9 * (20/1000) * 24
)}

function _9(md){return(
md`## Imports`
)}

function _d3(require){return(
require("d3")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof solar_perc")).define("viewof solar_perc", ["slider"], _solar_perc);
  main.variable(observer("solar_perc")).define("solar_perc", ["Generators", "viewof solar_perc"], (G, _) => G.input(_));
  main.variable(observer("map")).define("map", ["plot_fill_percentage_of_uk","solar_perc"], _map);
  main.variable(observer("total_kwh")).define("total_kwh", ["md","d3","kwh_per_person_per_day"], _total_kwh);
  main.variable(observer("kwh_per_person_per_day")).define("kwh_per_person_per_day", ["kwh_uk_total","solar_perc"], _kwh_per_person_per_day);
  main.variable(observer("kwh_uk_total")).define("kwh_uk_total", _kwh_uk_total);
  main.variable(observer()).define(["md"], _9);
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  const child2 = runtime.module(define2);
  main.import("plot_fill_percentage_of_uk", child2);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
