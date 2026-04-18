function m(n){return n`# Magic energy usage and carbon emissions converter`}function g(n,e,t){const o=n`<input type="number" >`,i=n`
         <input name="unit_from" type="text" autocomplete="off" 
          placeholder="Units to convert from" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${e.map(u=>Object.assign(n`<option>`,{value:u}))}
          </datalist>`,r=n`<input name="units_to" type="text" autocomplete="off" 
          placeholder="Units to convert to" style="font-size: 1em;" list=options2>
          <datalist id="options2">
              ${e.map(u=>Object.assign(n`<option>`,{value:u}))}
          </datalist>`;function a(){l.value={value:o.value,from:i.children[0].value,to:r.children[0].value},l.dispatchEvent(new CustomEvent("input"))}i.onclick=()=>{i.children[0].value="",r.children[0].value=""},r.onclick=()=>{r.children[0].value=""},i.onchange=()=>{let u=i.children[0].value,c=Object.keys(t.convert._constants_dict[u]),f=r.children[1],s=c.reduce((_,h)=>`${_}<option value="${h}">`,""),d=n`options_list`;console.log(d.outerHTML),f.innerHTML=s,a()},o.onkeyup=a,r.onchange=a;const l=n`<p>Convert the value ${o} <br/> from ${i} <br/> into ${r}<br/></p>`;return l.value={value:"",from:"",to:""},l}function p(n,e,t){let o=n.value!="",i=n.from!="",r=n.to!="";if(o&&i&&r){let a=n,l=e.convert.convert_units(a.from,a.to)*a.value;return t`${a.value} ${a.from} is ${l} ${a.to}`}else return t`Please enter a value and select from and to units`}function b(n,e){return n(e.from,e.to)}function w(n,e,t){return(function(i,r){function a(s){return s||""}function l(s){return s?`<a href="${s}">link</a>`:""}let u=n`Conversion from \`${i}\` to \`${r}\``,c=e.convert._constants_dict[i][r].sources,f=t`<table> 
   <tr>
    <th>Unit conversion</th>
    <th>URL</th>
    <th>Notes</th>
</tr>
   
   ${c.map(s=>t`<tr>
<td>${a(s.from_to)}</td>
<td>${l(s.url)}</td>
<td>${a(s.desc)}</td>
</tr>`)}
   
`;return t`${u} ${f}`})}function v(n){return Object.keys(n.convert._constants_dict)}function y(n){return n.convert._constants_dict.imperial_gas_units.gbp_to_generate_nuclear_hinkley_point_uk}function k(n){return n("@robinl/energy_usage@0.1.6")}function $(n,e){const t=n.module();return t.variable(e()).define(["md"],m),t.variable(e("viewof conversion")).define("viewof conversion",["html","from_options","eu"],g),t.variable(e("conversion")).define("conversion",["Generators","viewof conversion"],(o,i)=>o.input(i)),t.variable(e("converted_value")).define("converted_value",["conversion","eu","md"],p),t.variable(e()).define(["get_sources","conversion"],b),t.variable(e("get_sources")).define("get_sources",["md","eu","html"],w),t.variable(e("from_options")).define("from_options",["eu"],v),t.variable(e()).define(["eu"],y),t.variable(e("eu")).define("eu",["require"],k),t}function U(n){return n`# Carbon offsetting vs. the cost of renewable energy`}function S(n){return n`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/offsetting_renewables/).*`}function j(n,e){return n`There are a multitude of reputable sites that allow you to offset carbon emissions.

For instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  ${e(6,"GBP","USD")} per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  

You can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at ${e(10,"USD")} a tonne. 

Even the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as ${e(.35,"USD")} a tonne.

Are these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.

Let's try to put these numbers in perspective.  


`}function P(n,e,t,o){return n`## A single low energy light bulb.


Carbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.

How do these figures work out?

8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.

If a lightbulb is used for 6 hours a day, the saving is ${e(312/1e3)} KWh/day.  If it lasts 10 years, this translates to a total of 
${e(10*t("days/years")*(312/1e3))}KWh or 
${e(10*t("days/years")*(312/1e6))}MWh.

Translated into CO2 from grid electricity generation in the UK, this is around
${e(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours"))} kg or 
${e(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours")/1e3)} tonnes of CO2.

According to these figures, the cost of carbon offsetting is therefore around ${o(3/(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours")/1e3),"GBP","USD")} per tonne.

So it does seem plausible that some forms of carbon offsetting may be very cheap.

Another interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.
`}function G(n){return n`
`}function B(n,e,t,o,i){return n`
## Renewable and low carbon power

### Offshore wind energy, UK

The UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.

In a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about 
${e(40,"GBP","USD")} per MWh.

Each litre jet fuel burned emits around ${t("kg_co2_from_jet_fuel/litres_jet_fuel")} kg of CO2, so a tonne of CO2 requires around ${o(1e3/i("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel.  The amount of energy in ${o(1e3/i("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel is about ${o(1e3*i("kwh/kg_co2_from_jet_fuel"))} KWh =  ${t("kwh/kg_co2_from_jet_fuel")} MWh.

This indicates that it would cost around **${e(i("kwh/kg_co2_from_jet_fuel")*40,"GBP","USD")}** to purchase renewable energy generating capacity equivalent to this flight.
`}function D(n,e,t){return n`### Solar, Nevada, USA

Starting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for
${e(23.76,"USD","GBP")}
per MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).

Using the same conversions, this implies it would cost
**${e(t("kwh/kg_co2_from_jet_fuel")*23.76,"USD","GBP")}**
to purchase renewable energy generating capacity equivalent to this flight.



`}function C(n,e,t){return n`### Nuclear Power, UK

Hinkley Point C nuclear power plant will sell energy to the UK grid for ${e(92.5,"GBP","USD")} per MWh.  

This implies it would cost 
**${e(t("kwh/kg_co2_from_jet_fuel")*92.5,"GBP","USD")}**
to purchase nuclear energy generating capacity equivalent to a tonne of CO2.
`}function O(n,e,t,o){return n`### Schools Energy Cooperative, UK

The options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. 

One type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.

[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around 
${e(t("gbp/kwh_potential_solar_schools_energy"),"GBP","USD")}
to install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ${o("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")}
KWh of energy
per year.

Assuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around 
${e(1e3*t("gbp/kwh_potential_solar_schools_energy")/(20*t("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")),"GBP","USD")}.

This implies it would cost 
**${e(1e3*t("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"),"GBP","USD")}**

to purchase solar capacity equivalent to a tonne of CO2.

Note that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) ${e(1500,"GBP","USD")} per KW of potential generation.

`}function K(n){return n`## Annex:  Source of conversions`}function x(n){return n("megawatt_hours","kg_co2_from_grid_electricity")}function W(n){return n("kilowatt_hours","kg_co2_from_jet_fuel")}function q(n){return n("kwh_potential_solar_schools_energy","gbp")}function T(n){return n("kwh_generated_per_year","residential_solar_uk_kwh_potential_capacity")}function M(){return{GBP:1/1.39}}function A(){return{USD:1.39}}function E(n){return n("@robinl/energy_usage@0.1.6")}function L(n){return n.convert.per}function N(n,e){return(function(t){return n(e.convert.per(t))})}function H(n){return n("d3-format")}function R(n){return(function(e){return n.format(",.2r")(e)})}function z(n){return(function(e){var t=n.format(",d");return"£ "+t(e)})}function F(n){return(function(e,t="GBP"){let o=t+" ";t=="USD"&&(o="$"),t=="GBP"&&(o="£");var i=n.format(",.2f");return o+i(e)})}function I(n,e){return(function(t,o="USD",i="GBP"){let r;if(o=="GBP"){let a=t*n[i];return`${e(t)} = ${e(a,i)}`}if(i=="GBP")return r=t/n[o],`${e(r)} = ${e(t,o)}`})}function V(n){return n(10.1,"EUR")}function Y(n){return n(10.1,"GBP","USD")}function J(n,e){const t=n.module();t.variable(e("title")).define("title",["md"],U),t.variable(e()).define(["md"],S),t.variable(e("md1")).define("md1",["md","xr_string"],j),t.variable(e("md2")).define("md2",["md","fmt_num","per","xr_string"],P),t.variable(e()).define(["md"],G),t.variable(e("md3")).define("md3",["md","xr_string","fmt_per","fmt_num","per"],B),t.variable(e("md4")).define("md4",["md","xr_string","per"],D),t.variable(e("md5")).define("md5",["md","xr_string","per"],C),t.variable(e("md6")).define("md6",["md","xr_string","per","fmt_per"],O),t.variable(e("md7")).define("md7",["md"],K),t.variable(e("md8")).define("md8",["get_sources"],x),t.variable(e("md9")).define("md9",["get_sources"],W),t.variable(e("md10")).define("md10",["get_sources"],q),t.variable(e("md11")).define("md11",["get_sources"],T);const o=n.module($);return t.import("get_sources",o),t.variable(e()).define(M),t.variable(e("gbp_xrs")).define("gbp_xrs",A),t.variable(e("eu")).define("eu",["require"],E),t.variable(e("per")).define("per",["eu"],L),t.variable(e("fmt_per")).define("fmt_per",["fmt_num","eu"],N),t.variable(e("d3")).define("d3",["require"],H),t.variable(e("fmt_num")).define("fmt_num",["d3"],R),t.variable(e("format_gbp")).define("format_gbp",["d3"],z),t.variable(e("format_currency")).define("format_currency",["d3"],F),t.variable(e("xr_string")).define("xr_string",["gbp_xrs","format_currency"],I),t.variable(e()).define(["xr_string"],V),t.variable(e()).define(["xr_string"],Y),t}export{J as default};
