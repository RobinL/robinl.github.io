"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[8959],{3432:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return F},output_order:function(){return R}});var o=n(7294),r=n(7848),i=n(7825);function a(e){return e`# Magic energy usage and carbon emissions converter`}function s(e,t,n){const o=e`<input type="number" >`,r=e`
         <input name="unit_from" type="text" autocomplete="off" 
          placeholder="Units to convert from" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${t.map((t=>Object.assign(e`<option>`,{value:t})))}
          </datalist>`,i=e`<input name="units_to" type="text" autocomplete="off" 
          placeholder="Units to convert to" style="font-size: 1em;" list=options2>
          <datalist id="options2">
              ${t.map((t=>Object.assign(e`<option>`,{value:t})))}
          </datalist>`;function a(){s.value={value:o.value,from:r.children[0].value,to:i.children[0].value},s.dispatchEvent(new CustomEvent("input"))}r.onclick=()=>{r.children[0].value="",i.children[0].value=""},i.onclick=()=>{i.children[0].value=""},r.onchange=()=>{let t=r.children[0].value,o=Object.keys(n.convert._constants_dict[t]),s=i.children[1],u=o.reduce(((e,t)=>`${e}<option value="${t}">`),""),l=e`options_list`;console.log(l.outerHTML),s.innerHTML=u,a()},o.onkeyup=a,i.onchange=a;const s=e`<p>Convert the value ${o} <br/> from ${r} <br/> into ${i}<br/></p>`;return s.value={value:"",from:"",to:""},s}function u(e,t,n){let o=""!=e.value,r=""!=e.from,i=""!=e.to;if(o&&r&&i){let o=e,r=t.convert.convert_units(o.from,o.to)*o.value;return n`${o.value} ${o.from} is ${r} ${o.to}`}return n`Please enter a value and select from and to units`}function l(e,t){return e(t.from,t.to)}function c(e,t,n){return function(o,r){function i(e){return e||""}let a=e`Conversion from \`${o}\` to \`${r}\``,s=t.convert._constants_dict[o][r].sources,u=n`<table> 
   <tr>
    <th>Unit conversion</th>
    <th>URL</th>
    <th>Notes</th>
</tr>
   
   ${s.map((e=>n`<tr>
<td>${i(e.from_to)}</td>
<td>${function(e){return e?`<a href="${e}">link</a>`:""}(e.url)}</td>
<td>${i(e.desc)}</td>
</tr>`))}
   
`;return n`${a} ${u}`}}function f(e){return Object.keys(e.convert._constants_dict)}function d(e){return e.convert._constants_dict.imperial_gas_units.gbp_to_generate_nuclear_hinkley_point_uk}function m(e){return e("@robinl/energy_usage@0.1.6")}function h(e,t){const n=e.module();return n.variable(t()).define(["md"],a),n.variable(t("viewof conversion")).define("viewof conversion",["html","from_options","eu"],s),n.variable(t("conversion")).define("conversion",["Generators","viewof conversion"],((e,t)=>e.input(t))),n.variable(t("converted_value")).define("converted_value",["conversion","eu","md"],u),n.variable(t()).define(["get_sources","conversion"],l),n.variable(t("get_sources")).define("get_sources",["md","eu","html"],c),n.variable(t("from_options")).define("from_options",["eu"],f),n.variable(t()).define(["eu"],d),n.variable(t("eu")).define("eu",["require"],m),n}function _(e){return e`# Carbon offsetting vs. the cost of renewable energy`}function g(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/offsetting_renewables/).*`}function p(e,t){return e`There are a multitude of reputable sites that allow you to offset carbon emissions.

For instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  ${t(6,"GBP","USD")} per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  

You can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at ${t(10,"USD")} a tonne. 

Even the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as ${t(.35,"USD")} a tonne.

Are these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.

Let's try to put these numbers in perspective.  


`}function b(e,t,n,o){return e`## A single low energy light bulb.


Carbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.

How do these figures work out?

8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.

If a lightbulb is used for 6 hours a day, the saving is ${t(.312)} KWh/day.  If it lasts 10 years, this translates to a total of 
${t(10*n("days/years")*.312)}KWh or 
${t(10*n("days/years")*312e-6)}MWh.

Translated into CO2 from grid electricity generation in the UK, this is around
${t(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours"))} kg or 
${t(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours")/1e3)} tonnes of CO2.

According to these figures, the cost of carbon offsetting is therefore around ${o(3/(10*n("days/years")*312e-6*n("kg_co2_from_grid_electricity/megawatt_hours")/1e3),"GBP","USD")} per tonne.

So it does seem plausible that some forms of carbon offsetting may be very cheap.

Another interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.
`}function v(e){return e`
`}function w(e,t,n,o,r){return e`
## Renewable and low carbon power

### Offshore wind energy, UK

The UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.

In a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about 
${t(40,"GBP","USD")} per MWh.

Each litre jet fuel burned emits around ${n("kg_co2_from_jet_fuel/litres_jet_fuel")} kg of CO2, so a tonne of CO2 requires around ${o(1e3/r("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel.  The amount of energy in ${o(1e3/r("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel is about ${o(1e3*r("kwh/kg_co2_from_jet_fuel"))} KWh =  ${n("kwh/kg_co2_from_jet_fuel")} MWh.

This indicates that it would cost around **${t(40*r("kwh/kg_co2_from_jet_fuel"),"GBP","USD")}** to purchase renewable energy generating capacity equivalent to this flight.
`}function y(e,t,n){return e`### Solar, Nevada, USA

Starting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for
${t(23.76,"USD","GBP")}
per MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).

Using the same conversions, this implies it would cost
**${t(23.76*n("kwh/kg_co2_from_jet_fuel"),"USD","GBP")}**
to purchase renewable energy generating capacity equivalent to this flight.



`}function k(e,t,n){return e`### Nuclear Power, UK

Hinkley Point C nuclear power plant will sell energy to the UK grid for ${t(92.5,"GBP","USD")} per MWh.  

This implies it would cost 
**${t(92.5*n("kwh/kg_co2_from_jet_fuel"),"GBP","USD")}**
to purchase nuclear energy generating capacity equivalent to a tonne of CO2.
`}function $(e,t,n,o){return e`### Schools Energy Cooperative, UK

The options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. 

One type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.

[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around 
${t(n("gbp/kwh_potential_solar_schools_energy"),"GBP","USD")}
to install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ${o("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")}
KWh of energy
per year.

Assuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around 
${t(1e3*n("gbp/kwh_potential_solar_schools_energy")/(20*n("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")),"GBP","USD")}.

This implies it would cost 
**${t(1e3*n("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"),"GBP","USD")}**

to purchase solar capacity equivalent to a tonne of CO2.

Note that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) ${t(1500,"GBP","USD")} per KW of potential generation.

`}function U(e){return e`## Annex:  Source of conversions`}function S(e){return e("megawatt_hours","kg_co2_from_grid_electricity")}function j(e){return e("kilowatt_hours","kg_co2_from_jet_fuel")}function E(e){return e("kwh_potential_solar_schools_energy","gbp")}function x(e){return e("kwh_generated_per_year","residential_solar_uk_kwh_potential_capacity")}function C(){return{GBP:1/1.39}}function G(){return{USD:1.39}}function P(e){return e("@robinl/energy_usage@0.1.6")}function B(e){return e.convert.per}function D(e,t){return function(n){return e(t.convert.per(n))}}function O(e){return e("d3-format")}function K(e){return function(t){return e.format(",.2r")(t)}}function W(e){return function(t){return"£ "+e.format(",d")(t)}}function q(e){return function(t,n="GBP"){let o=n+" ";return"USD"==n&&(o="$"),"GBP"==n&&(o="£"),o+e.format(",.2f")(t)}}function M(e,t){return function(n,o="USD",r="GBP"){let i;if("GBP"==o){let o=n*e[r];return`${t(n)} = ${t(o,r)}`}if("GBP"==r)return i=n/e[o],`${t(i)} = ${t(n,o)}`}}function T(e){return e(10.1,"EUR")}function L(e){return e(10.1,"GBP","USD")}function A(e,t){const n=e.module();n.variable(t("title")).define("title",["md"],_),n.variable(t()).define(["md"],g),n.variable(t("md1")).define("md1",["md","xr_string"],p),n.variable(t("md2")).define("md2",["md","fmt_num","per","xr_string"],b),n.variable(t()).define(["md"],v),n.variable(t("md3")).define("md3",["md","xr_string","fmt_per","fmt_num","per"],w),n.variable(t("md4")).define("md4",["md","xr_string","per"],y),n.variable(t("md5")).define("md5",["md","xr_string","per"],k),n.variable(t("md6")).define("md6",["md","xr_string","per","fmt_per"],$),n.variable(t("md7")).define("md7",["md"],U),n.variable(t("md8")).define("md8",["get_sources"],S),n.variable(t("md9")).define("md9",["get_sources"],j),n.variable(t("md10")).define("md10",["get_sources"],E),n.variable(t("md11")).define("md11",["get_sources"],x);const o=e.module(h);return n.import("get_sources",o),n.variable(t()).define(C),n.variable(t("gbp_xrs")).define("gbp_xrs",G),n.variable(t("eu")).define("eu",["require"],P),n.variable(t("per")).define("per",["eu"],B),n.variable(t("fmt_per")).define("fmt_per",["fmt_num","eu"],D),n.variable(t("d3")).define("d3",["require"],O),n.variable(t("fmt_num")).define("fmt_num",["d3"],K),n.variable(t("format_gbp")).define("format_gbp",["d3"],W),n.variable(t("format_currency")).define("format_currency",["d3"],q),n.variable(t("xr_string")).define("xr_string",["gbp_xrs","format_currency"],M),n.variable(t()).define(["xr_string"],T),n.variable(t()).define(["xr_string"],L),n}var H=n(5860);const N=e=>o.createElement(i.H,{frontmatter:e.pageContext.frontmatter}),R=["title","md1","md2","md3","md4","md5","md6","md7","md8","md9","md10","md11"];function z(e){return o.createElement(H.Z,{notebook:A,cells:R})}var F=function(e){return void 0===e&&(e={}),o.createElement(r.fE,e,o.createElement(z,e))}},5860:function(e,t,n){var o=n(7294),r=n(6493);const i="mdx-container-div",a=new r.Zu,s=Object.assign({},a,{width:function(){return a.Generators.observe((e=>{let t=e(document.getElementById(i).clientWidth);function n(){let n=document.getElementById(i).clientWidth;n!==t&&e(t=n)}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}))}});t.Z=function(e){let{notebook:t,cells:n,customClassName:i}=e;const a=(0,o.useRef)(n.map((()=>o.createRef())));return(0,o.useEffect)((()=>{const e=new r.r_(s);return e.module(t,(e=>{const t=n.indexOf(e);if(-1!==t)return new r.lj(a.current[t].current)})),()=>e.dispose()}),[t,n]),o.createElement("div",{className:i},a.current.map(((e,t)=>o.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,n){n.d(t,{H:function(){return i}});var o=n(7294),r=n(4160);const i=e=>{let{frontmatter:t}=e;const{title:n,description:i,image:a,siteUrl:s,twitterUsername:u}=(0,r.K2)("1865044719").site.siteMetadata,l={title:(null==t?void 0:t.title)||n,description:(null==t?void 0:t.description)||i,image:`${s}${(null==t?void 0:t.image)||a}`,url:`${s}${(null==t?void 0:t.pathname)||""}`,twitterUsername:u,...t},c=null==t?void 0:t.stylesheet;return o.createElement(o.Fragment,null,o.createElement("title",null,l.title),o.createElement("meta",{name:"description",content:l.description}),o.createElement("meta",{name:"image",content:l.image}),c&&o.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${c}`}))}}}]);
//# sourceMappingURL=component---src-mdx-offsetting-renewables-mdx-bd01bf2ce1d392bbff72.js.map