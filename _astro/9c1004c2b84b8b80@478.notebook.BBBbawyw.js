import{_ as f}from"./preload-helper.zoZ8CRZ9.js";function p(s){let t,e,o,a=!1;const i=s(u=>{o=u,t?(t(u),t=e=void 0):a=!0});return{async next(){return{done:!1,value:await(a?(a=!1,o):new Promise((u,n)=>(t=u,e=n)))}},async return(){return e?.(new Error("Generator returned")),t=e=void 0,i?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function c(s){let t;return Object.defineProperty(p(e=>{t=e,s!==void 0&&e(s)}),"value",{get:()=>s,set:e=>(s=e,t?.(s))})}function m(s){const t=c(s);return[t,{get value(){return t.value},set value(e){t.value=e}}]}function l(s,t=()=>null){const e=s.module();l.FileAttachment&&e.variable().define("FileAttachment",[],()=>l.FileAttachment);for(const o of l.cells){const a=o.inputs??[],i=o.output;if(o.outputs?.length){const u=`cell ${o.id}`;e.variable(t(null)).define(u,a,o.body);for(const n of o.outputs)e.variable(!0).define(n,[u],r=>r[n])}else if(i)if(o.autoview){const u=i.slice(7),n=`viewof ${u}`;e.variable(t(n)).define(n,a,o.body),e.variable(t(u)).define(u,["Generators",n],(r,d)=>r.input(d))}else if(o.automutable){const u=i.slice(8),n=`cell ${o.id}`;e.define(i,a,o.body),e.define(n,[i],m),e.variable(t(u)).define(u,[n],([r])=>r),e.variable(!0).define(`mutable$${u}`,[n],([,r])=>r)}else e.variable(t(i)).define(i,a,o.body);else e.variable(t(null)).define(a,o.body)}return e}Object.assign(l,{title:"@robinl/how-much-should-carbon-offsetting-cost: 9c1004c2b84b8b80@478.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async s=>{const{get_sources:t}=await f(()=>import("./d3cc0edb1b59f115@197.notebook.xxZri6RC.js"),[]).then(e=>{const o=s._module._runtime.module(e.default);return new Map(Array.from(s._outputs,i=>[i._name,i])).get("get_sources")?.import("get_sources",o),{}});return{get_sources:t}},inputs:["@variable"],outputs:["get_sources"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"ojs",body:function(t){return t`# Carbon offsetting vs. the cost of renewable energy`},inputs:["md"],outputs:void 0,output:"title",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(s){return s`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/offsetting_renewables/).*`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(t,e){return t`There are a multitude of reputable sites that allow you to offset carbon emissions.

For instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  ${e(6,"GBP","USD")} per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  

You can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at ${e(10,"USD")} a tonne. 

Even the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as ${e(.35,"USD")} a tonne.

Are these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.

Let's try to put these numbers in perspective.  


`},inputs:["md","xr_string"],outputs:void 0,output:"md1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(t,e,o,a){return t`## A single low energy light bulb.


Carbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.

How do these figures work out?

8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.

If a lightbulb is used for 6 hours a day, the saving is ${e(312/1e3)} KWh/day.  If it lasts 10 years, this translates to a total of 
${e(10*o("days/years")*(312/1e3))}KWh or 
${e(10*o("days/years")*(312/1e6))}MWh.

Translated into CO2 from grid electricity generation in the UK, this is around
${e(10*o("days/years")*(312/1e6)*o("kg_co2_from_grid_electricity/megawatt_hours"))} kg or 
${e(10*o("days/years")*(312/1e6)*o("kg_co2_from_grid_electricity/megawatt_hours")/1e3)} tonnes of CO2.

According to these figures, the cost of carbon offsetting is therefore around ${a(3/(10*o("days/years")*(312/1e6)*o("kg_co2_from_grid_electricity/megawatt_hours")/1e3),"GBP","USD")} per tonne.

So it does seem plausible that some forms of carbon offsetting may be very cheap.

Another interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.
`},inputs:["md","fmt_num","per","xr_string"],outputs:void 0,output:"md2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(s){return s`
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(t,e,o,a,i){return t`
## Renewable and low carbon power

### Offshore wind energy, UK

The UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.

In a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about 
${e(40,"GBP","USD")} per MWh.

Each litre jet fuel burned emits around ${o("kg_co2_from_jet_fuel/litres_jet_fuel")} kg of CO2, so a tonne of CO2 requires around ${a(1e3/i("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel.  The amount of energy in ${a(1e3/i("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel is about ${a(1e3*i("kwh/kg_co2_from_jet_fuel"))} KWh =  ${o("kwh/kg_co2_from_jet_fuel")} MWh.

This indicates that it would cost around **${e(i("kwh/kg_co2_from_jet_fuel")*40,"GBP","USD")}** to purchase renewable energy generating capacity equivalent to this flight.
`},inputs:["md","xr_string","fmt_per","fmt_num","per"],outputs:void 0,output:"md3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(t,e,o){return t`### Solar, Nevada, USA

Starting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for
${e(23.76,"USD","GBP")}
per MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).

Using the same conversions, this implies it would cost
**${e(o("kwh/kg_co2_from_jet_fuel")*23.76,"USD","GBP")}**
to purchase renewable energy generating capacity equivalent to this flight.



`},inputs:["md","xr_string","per"],outputs:void 0,output:"md4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(t,e,o){return t`### Nuclear Power, UK

Hinkley Point C nuclear power plant will sell energy to the UK grid for ${e(92.5,"GBP","USD")} per MWh.  

This implies it would cost 
**${e(o("kwh/kg_co2_from_jet_fuel")*92.5,"GBP","USD")}**
to purchase nuclear energy generating capacity equivalent to a tonne of CO2.
`},inputs:["md","xr_string","per"],outputs:void 0,output:"md5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(t,e,o,a){return t`### Schools Energy Cooperative, UK

The options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. 

One type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.

[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around 
${e(o("gbp/kwh_potential_solar_schools_energy"),"GBP","USD")}
to install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ${a("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")}
KWh of energy
per year.

Assuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around 
${e(1e3*o("gbp/kwh_potential_solar_schools_energy")/(20*o("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")),"GBP","USD")}.

This implies it would cost 
**${e(1e3*o("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"),"GBP","USD")}**

to purchase solar capacity equivalent to a tonne of CO2.

Note that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) ${e(1500,"GBP","USD")} per KW of potential generation.

`},inputs:["md","xr_string","per","fmt_per"],outputs:void 0,output:"md6",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(t){return t`## Annex:  Source of conversions`},inputs:["md"],outputs:void 0,output:"md7",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(t){return t("megawatt_hours","kg_co2_from_grid_electricity")},inputs:["get_sources"],outputs:void 0,output:"md8",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(t){return t("kilowatt_hours","kg_co2_from_jet_fuel")},inputs:["get_sources"],outputs:void 0,output:"md9",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(t){return t("kwh_potential_solar_schools_energy","gbp")},inputs:["get_sources"],outputs:void 0,output:"md10",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(t){return t("kwh_generated_per_year","residential_solar_uk_kwh_potential_capacity")},inputs:["get_sources"],outputs:void 0,output:"md11",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(){return{USD:1.39}},inputs:[],outputs:void 0,output:"gbp_xrs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(t){return t("@robinl/energy_usage@0.1.6")},inputs:["require"],outputs:void 0,output:"eu",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(t){return t.convert.per},inputs:["eu"],outputs:void 0,output:"per",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(t,e){return(function(o){return t(e.convert.per(o))})},inputs:["fmt_num","eu"],outputs:void 0,output:"fmt_per",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(t){return t("d3-format")},inputs:["require"],outputs:void 0,output:"d3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(t){return(function(e){return t.format(",.2r")(e)})},inputs:["d3"],outputs:void 0,output:"fmt_num",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(t){return(function(e){var o=t.format(",d");return"£ "+o(e)})},inputs:["d3"],outputs:void 0,output:"format_gbp",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(t){return(function(e,o="GBP"){let a=o+" ";o=="USD"&&(a="$"),o=="GBP"&&(a="£");var i=t.format(",.2f");return a+i(e)})},inputs:["d3"],outputs:void 0,output:"format_currency",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(t,e){return(function(o,a="USD",i="GBP"){let u;if(a=="GBP"){let n=o*t[i];return`${e(o)} = ${e(n,i)}`}if(i=="GBP")return u=o/t[a],`${e(u)} = ${e(o,a)}`})},inputs:["gbp_xrs","format_currency"],outputs:void 0,output:"xr_string",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(s){return s(10.1,"EUR")},inputs:["xr_string"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(s){return s(10.1,"GBP","USD")},inputs:["xr_string"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{l as default};
