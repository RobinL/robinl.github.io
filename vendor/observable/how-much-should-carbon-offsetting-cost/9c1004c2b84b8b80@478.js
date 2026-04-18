// https://observablehq.com/@robinl/how-much-should-carbon-offsetting-cost@478
import define1 from "./d3cc0edb1b59f115@197.js";

function _title(md){return(
md`# Carbon offsetting vs. the cost of renewable energy`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/offsetting_renewables/).*`
)}

function _md1(md,xr_string){return(
md`There are a multitude of reputable sites that allow you to offset carbon emissions.

For instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  ${xr_string(6, "GBP", "USD")} per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  

You can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at ${xr_string(10,"USD")} a tonne. 

Even the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as ${xr_string(0.35,"USD")} a tonne.

Are these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.

Let's try to put these numbers in perspective.  


`
)}

function _md2(md,fmt_num,per,xr_string){return(
md`## A single low energy light bulb.


Carbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.

How do these figures work out?

8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.

If a lightbulb is used for 6 hours a day, the saving is ${fmt_num(((60-8)*6)/1000)} KWh/day.  If it lasts 10 years, this translates to a total of 
${fmt_num(10*per("days/years") * (((60-8)*6)/1000))}KWh or 
${fmt_num(10*per("days/years") * (((60-8)*6)/1e6))}MWh.

Translated into CO2 from grid electricity generation in the UK, this is around
${fmt_num(10*per("days/years") * (((60-8)*6)/1e6) * per("kg_co2_from_grid_electricity/megawatt_hours"))} kg or 
${fmt_num(10*per("days/years") * (((60-8)*6)/1e6) * per("kg_co2_from_grid_electricity/megawatt_hours") / 1000)} tonnes of CO2.

According to these figures, the cost of carbon offsetting is therefore around ${xr_string(3/(10*per("days/years") * (((60-8)*6)/1e6) * per("kg_co2_from_grid_electricity/megawatt_hours") / 1000), "GBP", "USD")} per tonne.

So it does seem plausible that some forms of carbon offsetting may be very cheap.

Another interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.
`
)}

function _5(md){return(
md`
`
)}

function _md3(md,xr_string,fmt_per,fmt_num,per){return(
md`
## Renewable and low carbon power

### Offshore wind energy, UK

The UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.

In a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about 
${xr_string(40, "GBP", "USD")} per MWh.

Each litre jet fuel burned emits around ${fmt_per("kg_co2_from_jet_fuel/litres_jet_fuel")} kg of CO2, so a tonne of CO2 requires around ${fmt_num(1000 / per("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel.  The amount of energy in ${fmt_num( 1000 / per("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel is about ${fmt_num(1000 * per("kwh/kg_co2_from_jet_fuel"))} KWh =  ${fmt_per("kwh/kg_co2_from_jet_fuel")} MWh.

This indicates that it would cost around **${xr_string(per("kwh/kg_co2_from_jet_fuel") * 40, "GBP", "USD")}** to purchase renewable energy generating capacity equivalent to this flight.
`
)}

function _md4(md,xr_string,per){return(
md`### Solar, Nevada, USA

Starting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for
${xr_string(23.76, "USD", "GBP")}
per MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).

Using the same conversions, this implies it would cost
**${xr_string(per("kwh/kg_co2_from_jet_fuel") * 23.76, "USD", "GBP")}**
to purchase renewable energy generating capacity equivalent to this flight.



`
)}

function _md5(md,xr_string,per){return(
md`### Nuclear Power, UK

Hinkley Point C nuclear power plant will sell energy to the UK grid for ${xr_string(92.50, "GBP", "USD")} per MWh.  

This implies it would cost 
**${xr_string(per("kwh/kg_co2_from_jet_fuel") * 92.50, "GBP", "USD")}**
to purchase nuclear energy generating capacity equivalent to a tonne of CO2.
`
)}

function _md6(md,xr_string,per,fmt_per){return(
md`### Schools Energy Cooperative, UK

The options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. 

One type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.

[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around 
${xr_string(per("gbp/kwh_potential_solar_schools_energy"), "GBP", "USD")}
to install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ${fmt_per("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")}
KWh of energy
per year.

Assuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around 
${xr_string(1000 * per("gbp/kwh_potential_solar_schools_energy") / (20 * per("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")), "GBP", "USD")}.

This implies it would cost 
**${xr_string(1000* per("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"), "GBP", "USD")}**

to purchase solar capacity equivalent to a tonne of CO2.

Note that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) ${xr_string(1500, "GBP", "USD")} per KW of potential generation.

`
)}

function _md7(md){return(
md`## Annex:  Source of conversions`
)}

function _md8(get_sources){return(
get_sources("megawatt_hours", "kg_co2_from_grid_electricity")
)}

function _md9(get_sources){return(
get_sources("kilowatt_hours", "kg_co2_from_jet_fuel")
)}

function _md10(get_sources){return(
get_sources("kwh_potential_solar_schools_energy", "gbp")
)}

function _md11(get_sources){return(
get_sources("kwh_generated_per_year", "residential_solar_uk_kwh_potential_capacity")
)}

function _16()
{
  return {
    GBP: 1 / 1.39
  };
}


function _gbp_xrs()
{
  return {
    USD: 1.39
  };
}


function _eu(require){return(
require("@robinl/energy_usage@0.1.6")
)}

function _per(eu){return(
eu.convert.per
)}

function _fmt_per(fmt_num,eu){return(
function(to_over_from) {
  return fmt_num(eu.convert.per(to_over_from))
}
)}

function _d3(require){return(
require("d3-format")
)}

function _fmt_num(d3){return(
function(d) {return d3.format(",.2r")(d)}
)}

function _format_gbp(d3){return(
function(d) {
  var format = d3.format(",d");
  return '£ ' + format(d);
}
)}

function _format_currency(d3){return(
function(d, currency = "GBP") {
  let symbol = currency + ' ';
  if (currency == "USD") {
    symbol = "$";
  }
  if (currency == "GBP") {
    symbol = "£";
  }

  var format = d3.format(",.2f");
  return symbol + format(d);
}
)}

function _xr_string(gbp_xrs,format_currency){return(
function(amount, in_currency = "USD", out_currency = "GBP") {
  let gbp;
  if (in_currency == "GBP") {
    let converted = amount * gbp_xrs[out_currency];
    return `${format_currency(amount)} = ${format_currency(converted, out_currency)}`;
  }
  if (out_currency == "GBP") {
    gbp = amount / gbp_xrs[in_currency];
    return `${format_currency(gbp)} = ${format_currency(amount, in_currency)}`;
  }
}
)}

function _26(xr_string){return(
xr_string(10.1, "EUR")
)}

function _27(xr_string){return(
xr_string(10.1, "GBP", "USD")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("md1")).define("md1", ["md","xr_string"], _md1);
  main.variable(observer("md2")).define("md2", ["md","fmt_num","per","xr_string"], _md2);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("md3")).define("md3", ["md","xr_string","fmt_per","fmt_num","per"], _md3);
  main.variable(observer("md4")).define("md4", ["md","xr_string","per"], _md4);
  main.variable(observer("md5")).define("md5", ["md","xr_string","per"], _md5);
  main.variable(observer("md6")).define("md6", ["md","xr_string","per","fmt_per"], _md6);
  main.variable(observer("md7")).define("md7", ["md"], _md7);
  main.variable(observer("md8")).define("md8", ["get_sources"], _md8);
  main.variable(observer("md9")).define("md9", ["get_sources"], _md9);
  main.variable(observer("md10")).define("md10", ["get_sources"], _md10);
  main.variable(observer("md11")).define("md11", ["get_sources"], _md11);
  const child1 = runtime.module(define1);
  main.import("get_sources", child1);
  main.variable(observer()).define(_16);
  main.variable(observer("gbp_xrs")).define("gbp_xrs", _gbp_xrs);
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  main.variable(observer("per")).define("per", ["eu"], _per);
  main.variable(observer("fmt_per")).define("fmt_per", ["fmt_num","eu"], _fmt_per);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("fmt_num")).define("fmt_num", ["d3"], _fmt_num);
  main.variable(observer("format_gbp")).define("format_gbp", ["d3"], _format_gbp);
  main.variable(observer("format_currency")).define("format_currency", ["d3"], _format_currency);
  main.variable(observer("xr_string")).define("xr_string", ["gbp_xrs","format_currency"], _xr_string);
  main.variable(observer()).define(["xr_string"], _26);
  main.variable(observer()).define(["xr_string"], _27);
  return main;
}
