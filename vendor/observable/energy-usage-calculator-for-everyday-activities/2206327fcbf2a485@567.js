import define1 from "./ab12e7a3fdc4f2be@181.js";
import define2 from "./1b459452a203b8d6@89.js";
import define3 from "./de6c2e587683b436@93.js";
import define4 from "./0f80b8822accb473@95.js";
import define5 from "./5bd5c66c77a6d1cd@168.js";
import define6 from "./16c049a5ef57f39e@295.js";
import define7 from "./b60a5a494ad36861@175.js";
import define8 from "./96c07fabafda0a77@314.js";
import define9 from "./6ddb4d39b12399ea@269.js";
import define10 from "./d2b70dd4960f3314@511.js";

function _title(md){return(
md`# Energy usage ready reckoner for everyday activities`
)}

function _2(md){return(
md`_A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/energy-usage/)._`
)}

function _under_title_blurb(md){return(
md`This is a __rough ready reckoner__ to help you understand your personal energy consumption. 

I'm sure these estimates could be significantly improved - suggestions gratefully received [here](https://github.com/RobinL/energy_usage/pulls).

Following, [David MacKay](https://www.withouthotair.com/c2/page_24.shtml), I standardise everything in kilowatt hours. 

You can find all assumptions and calculations [here](https://github.com/RobinL/energy_usage/tree/master/src), or click on the headers for calculations specific to each activity.
`
)}

function _key_to_graphics_title(md){return(
md`## Key to graphics`
)}

function _key_to_graphics_text(key){return(
key
)}

function _driving_title(md){return(
md`## [Driving](https://github.com/RobinL/energy_usage/blob/master/src/driving.js)`
)}

function _driving_text_output(driving_text){return(
driving_text
)}

function _driving_chart_output(driving_chart){return(
driving_chart
)}

function _flying_title(md){return(
md`## [Flying](https://github.com/RobinL/energy_usage/blob/master/src/flying.js)`
)}

function _flying_text_output(flying_text){return(
flying_text
)}

function _flying_chart_output(flying_chart){return(
flying_chart
)}

function _heating_title(md){return(
md`## [Heating](https://github.com/RobinL/energy_usage/blob/master/src/heating.js)`
)}

function _heating_text_output(heating_text){return(
heating_text
)}

function _heating_chart_output(heating_chart){return(
heating_chart
)}

function _showers_baths_title(md){return(
md`## [Showers/baths](https://github.com/RobinL/energy_usage/blob/master/src/shower.js)`
)}

function _showers_baths_text_output(showers_and_baths_text){return(
showers_and_baths_text
)}

function _showers_bath_chart_output(showers_bath_chart){return(
showers_bath_chart
)}

function _electricity_title(md){return(
md`## [Electricity](https://github.com/RobinL/energy_usage/blob/master/src/electricity.js)`
)}

function _electricity_text_output(electricity_text){return(
electricity_text
)}

function _electricity_chart_output(electricity_chart){return(
electricity_chart
)}

function _stuff_title(md){return(
md`## [Stuff](https://github.com/RobinL/energy_usage/blob/master/src/stuff.js)`
)}

function _stuff_text_output(stuff_text){return(
stuff_text
)}

function _stuff_chart_output(stuff_chart){return(
stuff_chart
)}

function _eating_title(md){return(
md`## [Eating](https://github.com/RobinL/energy_usage/blob/master/src/eating.js)`
)}

function _eating_text_output(eating_text){return(
eating_text
)}

function _eating_chart_output(eating_chart){return(
eating_chart
)}

function _dogs_title(md){return(
md`## [Pets](https://github.com/RobinL/energy_usage/blob/master/src/pets.js)`
)}

function _dogs_text_output(dogs_text){return(
dogs_text
)}

function _dogs_chart_output(dogs_chart){return(
dogs_chart
)}

function _summary_title(md){return(
md`# Summary`
)}

function _summary_text_output(summary_text,all_data){return(
summary_text(all_data)
)}

function _summary_chart_output(unit_chart_2,all_data_dict){return(
unit_chart_2(all_data_dict)
)}

function _summary_text_output_2(md){return(
md`Here's another representation of how your energy usage breaks down:`
)}

function _energy_use_treemap(treemap_chart,all_data,width){return(
treemap_chart(all_data, width, true)
)}

function _35(md){return(
md`## How do you compare?`
)}

function _md_notinclude(md){return(
md`This calculator only considers a subset of your energy usage, so your overall total will actually be higher.  Nonetheless, it's interesting to compare to average per captia energy usage of various countries:`
)}

function _37(md){return(
md`The following chart shows primary per capita energy usage, converted into kwh.  See [here](https://datacatalog.worldbank.org/energy-use-kg-oil-equivalent-capita-1) for the source of the data.  `
)}

function _38(primary_energy_use_per_capita){return(
primary_energy_use_per_capita
)}

function _39(md){return(
md`Note that primary energy usage is __not__ equivalent to the end-user consumption tallied in this calculator.


It is [defined as](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Primary_energy_consumption) "The total energy demand of a country. It covers consumption of the energy sector itself, losses during transformation (for example, from oil or gas into electricity) and distribution of energy, and the final consumption by end users". 

I think this means it would count both energy produced domestically and primary energy imports in the form of fuel.  But not energy embodied in imported goods.  It is unclear to me whether it would count jet fuel oil for international flights.`
)}

function _40(md){return(
md`The following chart shows final energy consumption per capita.`
)}

function _41(final_energy_use_per_capita){return(
final_energy_use_per_capita
)}

function _42(md){return(
md `## Annex: Imports and Calculations`
)}

function _all_data(driving_data,flying_data,electricity_data,eating_data,dogs_data,heating_gas_data,stuff_data){return(
driving_data.concat(flying_data, electricity_data, eating_data, dogs_data, heating_gas_data, stuff_data)
)}

function _all_data_dict(all_data)
{


let data_dict = {}

all_data.forEach(d =>
                  data_dict[d["name"]] = d["value"])
  
  return data_dict

}


async function _ga(require,html)
{
  const ga = await require("https://www.google-analytics.com/analytics.js").catch(() => window.ga);
  ga("create", "UA-146468274-1", "auto");
  ga("send", "pageview", html`<a href>`.pathname);
  return ga;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("under_title_blurb")).define("under_title_blurb", ["md"], _under_title_blurb);
  main.variable(observer("key_to_graphics_title")).define("key_to_graphics_title", ["md"], _key_to_graphics_title);
  main.variable(observer("key_to_graphics_text")).define("key_to_graphics_text", ["key"], _key_to_graphics_text);
  main.variable(observer("driving_title")).define("driving_title", ["md"], _driving_title);
  main.variable(observer("driving_text_output")).define("driving_text_output", ["driving_text"], _driving_text_output);
  main.variable(observer("driving_chart_output")).define("driving_chart_output", ["driving_chart"], _driving_chart_output);
  main.variable(observer("flying_title")).define("flying_title", ["md"], _flying_title);
  main.variable(observer("flying_text_output")).define("flying_text_output", ["flying_text"], _flying_text_output);
  main.variable(observer("flying_chart_output")).define("flying_chart_output", ["flying_chart"], _flying_chart_output);
  main.variable(observer("heating_title")).define("heating_title", ["md"], _heating_title);
  main.variable(observer("heating_text_output")).define("heating_text_output", ["heating_text"], _heating_text_output);
  main.variable(observer("heating_chart_output")).define("heating_chart_output", ["heating_chart"], _heating_chart_output);
  main.variable(observer("showers_baths_title")).define("showers_baths_title", ["md"], _showers_baths_title);
  main.variable(observer("showers_baths_text_output")).define("showers_baths_text_output", ["showers_and_baths_text"], _showers_baths_text_output);
  main.variable(observer("showers_bath_chart_output")).define("showers_bath_chart_output", ["showers_bath_chart"], _showers_bath_chart_output);
  main.variable(observer("electricity_title")).define("electricity_title", ["md"], _electricity_title);
  main.variable(observer("electricity_text_output")).define("electricity_text_output", ["electricity_text"], _electricity_text_output);
  main.variable(observer("electricity_chart_output")).define("electricity_chart_output", ["electricity_chart"], _electricity_chart_output);
  main.variable(observer("stuff_title")).define("stuff_title", ["md"], _stuff_title);
  main.variable(observer("stuff_text_output")).define("stuff_text_output", ["stuff_text"], _stuff_text_output);
  main.variable(observer("stuff_chart_output")).define("stuff_chart_output", ["stuff_chart"], _stuff_chart_output);
  main.variable(observer("eating_title")).define("eating_title", ["md"], _eating_title);
  main.variable(observer("eating_text_output")).define("eating_text_output", ["eating_text"], _eating_text_output);
  main.variable(observer("eating_chart_output")).define("eating_chart_output", ["eating_chart"], _eating_chart_output);
  main.variable(observer("dogs_title")).define("dogs_title", ["md"], _dogs_title);
  main.variable(observer("dogs_text_output")).define("dogs_text_output", ["dogs_text"], _dogs_text_output);
  main.variable(observer("dogs_chart_output")).define("dogs_chart_output", ["dogs_chart"], _dogs_chart_output);
  main.variable(observer("summary_title")).define("summary_title", ["md"], _summary_title);
  main.variable(observer("summary_text_output")).define("summary_text_output", ["summary_text","all_data"], _summary_text_output);
  main.variable(observer("summary_chart_output")).define("summary_chart_output", ["unit_chart_2","all_data_dict"], _summary_chart_output);
  main.variable(observer("summary_text_output_2")).define("summary_text_output_2", ["md"], _summary_text_output_2);
  main.variable(observer("energy_use_treemap")).define("energy_use_treemap", ["treemap_chart","all_data","width"], _energy_use_treemap);
  main.variable(observer()).define(["md"], _35);
  main.variable(observer("md_notinclude")).define("md_notinclude", ["md"], _md_notinclude);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer()).define(["primary_energy_use_per_capita"], _38);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer()).define(["final_energy_use_per_capita"], _41);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("all_data")).define("all_data", ["driving_data","flying_data","electricity_data","eating_data","dogs_data","heating_gas_data","stuff_data"], _all_data);
  main.variable(observer("all_data_dict")).define("all_data_dict", ["all_data"], _all_data_dict);
  const child1 = runtime.module(define1);
  main.import("driving_text", child1);
  main.import("driving_conclusion", child1);
  main.import("driving_data", child1);
  main.import("driving_chart", child1);
  const child2 = runtime.module(define2);
  main.import("flying_text", child2);
  main.import("flying_chart", child2);
  main.import("flying_data", child2);
  const child3 = runtime.module(define3);
  main.import("electricity_text", child3);
  main.import("electricity_conclusion", child3);
  main.import("electricity_data", child3);
  main.import("electricity_chart", child3);
  const child4 = runtime.module(define4);
  main.import("dogs_text", child4);
  main.import("dogs_conclusion", child4);
  main.import("dogs_data", child4);
  main.import("dogs_chart", child4);
  const child5 = runtime.module(define5);
  main.import("eating_text", child5);
  main.import("eating_conclusion", child5);
  main.import("eating_data", child5);
  main.import("eating_chart", child5);
  const child6 = runtime.module(define6);
  main.import("heating_text", child6);
  main.import("showers_and_baths_text", child6);
  main.import("heating_gas_data", child6);
  main.import("heating_chart", child6);
  main.import("showers_bath_chart", child6);
  const child7 = runtime.module(define7);
  main.import("stuff_text", child7);
  main.import("stuff_conclusion", child7);
  main.import("stuff_data", child7);
  main.import("stuff_chart", child7);
  const child8 = runtime.module(define8);
  main.import("treemap_chart", child8);
  main.import("summary_text", child8);
  const child9 = runtime.module(define9);
  main.import("primary_energy_use_per_capita", child9);
  main.import("final_energy_use_per_capita", child9);
  const child10 = runtime.module(define10);
  main.import("key", child10);
  main.variable(observer("ga")).define("ga", ["require","html"], _ga);
  const child11 = runtime.module(define10);
  main.import("unit_chart", child11);
  main.import("unit_chart_2", child11);
  return main;
}
