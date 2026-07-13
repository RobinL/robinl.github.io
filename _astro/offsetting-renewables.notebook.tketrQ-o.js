const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/energy-conversion.CEmKpvPg.js","_astro/NotebookCellProvider.CYO8crXj.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/step.BThr63Mb.js","_astro/convert.CHZG6Ip0.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./preload-helper.zoZ8CRZ9.js";function u(s,o=()=>null){const e=s.module();u.FileAttachment&&e.variable().define("FileAttachment",[],()=>u.FileAttachment);for(const t of u.cells){const i=t.inputs??[],n=t.output;if(t.outputs?.length){const a=`cell ${t.id}`;e.variable(o(null)).define(a,i,t.body);for(const r of t.outputs)e.variable(!0).define(r,[a],l=>l[r])}else if(n)if(t.autoview){const a=n.slice(7),r=`viewof ${a}`;e.variable(o(r)).define(r,i,t.body),e.variable(o(a)).define(a,["Generators",r],(l,d)=>l.input(d))}else e.variable(o(n)).define(n,i,t.body);else e.variable(o(null)).define(i,t.body)}return e}Object.assign(u,{title:"Carbon offsetting vs. the cost of renewable energy",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{per:s,fmt_num:o,fmt_per:e,xr_string:t,get_sources:i}=await f(()=>import("./energy-conversion.CEmKpvPg.js"),__vite__mapDeps([0,1,2,3,4,5])).then(n=>{if(!("per"in n))throw new SyntaxError("export 'per' not found");if(!("fmt_num"in n))throw new SyntaxError("export 'fmt_num' not found");if(!("fmt_per"in n))throw new SyntaxError("export 'fmt_per' not found");if(!("xr_string"in n))throw new SyntaxError("export 'xr_string' not found");if(!("get_sources"in n))throw new SyntaxError("export 'get_sources' not found");return n});return{per:s,fmt_num:o,fmt_per:e,xr_string:t,get_sources:i}},inputs:[],outputs:["per","fmt_num","fmt_per","xr_string","get_sources"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:2,mode:"js",body:(s,o)=>(s(o`# Carbon offsetting vs. the cost of renewable energy`),{title:null}),inputs:["display","md"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:4,mode:"js",body:(s,o,e)=>(s(o`There are a multitude of reputable sites that allow you to offset carbon emissions.

For instance, [carbonfootprint.com](https://www.carbonfootprint.com/offsetshop.html) offer carbon offsetting from around  ${e(6,"GBP","USD")} per tonne of CO2 though the [Verified Carbon Standard](https://verra.org/project/vcs-program/).  

You can [offset emissions](https://www.goldstandard.org/take-action/offset-your-emissions) though the [Gold Standard](https://www.goldstandard.org/about-us/vision-and-mission) scheme, whereby offsetting projects also contribute to sustainable development.  Offsetting starts at ${e(10,"USD")} a tonne. 

Even the UN has a [carbon offsetting platform](https://offset.climateneutralnow.org/jorethang-loop-hydroelectric-project-india), with costs as little as ${e(.35,"USD")} a tonne.

Are these values plausible?   How much might we expect it to cost to offset 1 tonne of CO2 emissions? - roughly equivalent to flying economy from the UK to USA return.

Let's try to put these numbers in perspective.  


`),{md1:null}),inputs:["display","md","xr_string"],outputs:["md1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:(s,o,e,t,i)=>(s(o`## A single low energy light bulb.


Carbon offsetting schemes claim that it's possible to find extremely cheap means of reducing emissions.  For instance, a £1 low energy light bulb [supposedly](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) can [supposedly save](https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions) 250kg of CO2 over its lifetime.

How do these figures work out?

8 watt LED bulbs are marketed as equivalent to 60 watt incandecent bulbs, and they cost about £3.

If a lightbulb is used for 6 hours a day, the saving is ${e(312/1e3)} KWh/day.  If it lasts 10 years, this translates to a total of 
${e(10*t("days/years")*(312/1e3))}KWh or 
${e(10*t("days/years")*(312/1e6))}MWh.

Translated into CO2 from grid electricity generation in the UK, this is around
${e(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours"))} kg or 
${e(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours")/1e3)} tonnes of CO2.

According to these figures, the cost of carbon offsetting is therefore around ${i(3/(10*t("days/years")*(312/1e6)*t("kg_co2_from_grid_electricity/megawatt_hours")/1e3),"GBP","USD")} per tonne.

So it does seem plausible that some forms of carbon offsetting may be very cheap.

Another interesting way of looking at the problem is to consider how much it would cost to generate an equivalent amount of renewable energy.
`),{md2:null}),inputs:["display","md","fmt_num","per","xr_string"],outputs:["md2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:7,mode:"js",body:(s,o,e,t,i,n)=>(s(o`
## Renewable and low carbon power

### Offshore wind energy, UK

The UK has some of the best sites in the world for offshore wind[*](https://en.wikipedia.org/wiki/Wind_power_in_the_United_Kingdom), so perhaps it would make sense to offset carbon by buying new wind turbines - enough to generate the same amount of energy.

In a recent auction[*](https://www.theguardian.com/environment/2019/sep/20/new-windfarms-taxpayers-subsidies-record-low), the cost of building new offshore wind had fallen to about 
${e(40,"GBP","USD")} per MWh.

Each litre jet fuel burned emits around ${t("kg_co2_from_jet_fuel/litres_jet_fuel")} kg of CO2, so a tonne of CO2 requires around ${i(1e3/n("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel.  The amount of energy in ${i(1e3/n("kg_co2_from_jet_fuel/litres_jet_fuel"))} litres of fuel is about ${i(1e3*n("kwh/kg_co2_from_jet_fuel"))} KWh =  ${t("kwh/kg_co2_from_jet_fuel")} MWh.

This indicates that it would cost around **${e(n("kwh/kg_co2_from_jet_fuel")*40,"GBP","USD")}** to purchase renewable energy generating capacity equivalent to this flight.
`),{md3:null}),inputs:["display","md","xr_string","fmt_per","fmt_num","per"],outputs:["md3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:8,mode:"js",body:(s,o,e,t)=>(s(o`### Solar, Nevada, USA

Starting in 2021, over a 25-year time horizon, the Eagle Shadow Mountain Solar Farm in Nevada will generate electricity for
${e(23.76,"USD","GBP")}
per MWh[*](https://earther.gizmodo.com/solar-just-hit-a-record-low-price-in-the-u-s-1826830592).

Using the same conversions, this implies it would cost
**${e(t("kwh/kg_co2_from_jet_fuel")*23.76,"USD","GBP")}**
to purchase renewable energy generating capacity equivalent to this flight.



`),{md4:null}),inputs:["display","md","xr_string","per"],outputs:["md4"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:9,mode:"js",body:(s,o,e,t)=>(s(o`### Nuclear Power, UK

Hinkley Point C nuclear power plant will sell energy to the UK grid for ${e(92.5,"GBP","USD")} per MWh.  

This implies it would cost 
**${e(t("kwh/kg_co2_from_jet_fuel")*92.5,"GBP","USD")}**
to purchase nuclear energy generating capacity equivalent to a tonne of CO2.
`),{md5:null}),inputs:["display","md","xr_string","per"],outputs:["md5"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:10,mode:"js",body:(s,o,e,t,i)=>(s(o`### Schools Energy Cooperative, UK

The options previously discussed are utility-scale installations, which cannot easily be bought into on a public-scription basis. 

One type of option where consumers may expect a genuinely additive impact is buying into an energy cooperative such as the [Schools Energy Cooperative](https://schools-energy-coop.co.uk/), which installs solar panels on schools.

[Figures](https://github.com/RobinL/energy_usage/blob/master/source_documents/schools_energy_cooperative_factsheet.pdf) from the cooperative suggests that it costs around 
${e(t("gbp/kwh_potential_solar_schools_energy"),"GBP","USD")}
to install solar panels with a potential capacity of 1KW.  [Their figures](https://github.com/RobinL/energy_usage/blob/bd65f21af54a8aad2914d944dcedbd49b56b1bcb/src/convert.js#L76) suggest that, in practice generate around ${i("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")}
KWh of energy
per year.

Assuming these panels have a lifetime of 20 years, this means that the cost of generating 1MWh of power is around 
${e(1e3*t("gbp/kwh_potential_solar_schools_energy")/(20*t("kwh_generated_per_year/residential_solar_uk_kwh_potential_capacity")),"GBP","USD")}.

This implies it would cost 
**${e(1e3*t("gbp_to_generate_solar_schools_energy/kg_co2_from_jet_fuel"),"GBP","USD")}**

to purchase solar capacity equivalent to a tonne of CO2.

Note that buying residential rooftop solar in the UK costs a little more than this at around[*](https://www.solarguide.co.uk/how-much-does-it-cost-to-install-solar-panels#/) ${e(1500,"GBP","USD")} per KW of potential generation.

`),{md6:null}),inputs:["display","md","xr_string","per","fmt_per"],outputs:["md6"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:11,mode:"js",body:(s,o)=>(s(o`## Annex:  Source of conversions`),{md7:null}),inputs:["display","md"],outputs:["md7"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:12,mode:"js",body:(s,o)=>(s(o("megawatt_hours","kg_co2_from_grid_electricity")),{md8:null}),inputs:["display","get_sources"],outputs:["md8"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:13,mode:"js",body:(s,o)=>(s(o("kilowatt_hours","kg_co2_from_jet_fuel")),{md9:null}),inputs:["display","get_sources"],outputs:["md9"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:14,mode:"js",body:(s,o)=>(s(o("kwh_potential_solar_schools_energy","gbp")),{md10:null}),inputs:["display","get_sources"],outputs:["md10"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:15,mode:"js",body:(s,o)=>(s(o("kwh_generated_per_year","residential_solar_uk_kwh_potential_capacity")),{md11:null}),inputs:["display","get_sources"],outputs:["md11"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{u as default};
