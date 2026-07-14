const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/electric-car.us0_3pjB.js","_astro/vega-embed.module.DiVocoQ4.js","_astro/_commonjsHelpers.DaWZu8wl.js","_astro/feature.DXDMwmIR.js","_astro/step.BThr63Mb.js","_astro/energy-conversion.Dl18nnYR.js","_astro/NotebookCellProvider.D6sqgwCc.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/convert.CHZG6Ip0.js","_astro/observable-vega-embed.Ca3N63KR.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./preload-helper.zoZ8CRZ9.js";function l(i,t=()=>null){const e=i.module();l.FileAttachment&&e.variable().define("FileAttachment",[],()=>l.FileAttachment);for(const s of l.cells){const n=s.inputs??[],o=s.output;if(s.outputs?.length){const a=`cell ${s.id}`;e.variable(t(null)).define(a,n,s.body);for(const r of s.outputs)e.variable(!0).define(r,[a],c=>c[r])}else if(o)if(s.autoview){const a=o.slice(7),r=`viewof ${a}`;e.variable(t(r)).define(r,n,s.body),e.variable(t(a)).define(a,["Generators",r],(c,u)=>c.input(u))}else e.variable(t(o)).define(o,n,s.body);else e.variable(t(null)).define(n,s.body)}return e}Object.assign(l,{title:"The carbon impact of switching to an electric car",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{calculateElectricCar:i,createElectricCarAssumptionsControls:t,createRemainingIceControl:e,renderLifetimeChart:s,renderBreakEvenChart:n}=await v(()=>import("./electric-car.us0_3pjB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(o=>{if(!("calculateElectricCar"in o))throw new SyntaxError("export 'calculateElectricCar' not found");if(!("createElectricCarAssumptionsControls"in o))throw new SyntaxError("export 'createElectricCarAssumptionsControls' not found");if(!("createRemainingIceControl"in o))throw new SyntaxError("export 'createRemainingIceControl' not found");if(!("renderLifetimeChart"in o))throw new SyntaxError("export 'renderLifetimeChart' not found");if(!("renderBreakEvenChart"in o))throw new SyntaxError("export 'renderBreakEvenChart' not found");return o});return{calculateElectricCar:i,createElectricCarAssumptionsControls:t,createRemainingIceControl:e,renderLifetimeChart:s,renderBreakEvenChart:n}},inputs:[],outputs:["calculateElectricCar","createElectricCarAssumptionsControls","createRemainingIceControl","renderLifetimeChart","renderBreakEvenChart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:2,mode:"js",body:(i,t)=>{const e=i`# How does switching to an electric car affect your carbon footprint?`;return t(e),{title:e}},inputs:["md","display"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:3,mode:"js",body:(i,t)=>{const e=i`This post considers three questions:

- What is the total carbon footprint of an full electric vehicle versus an ICE (petrol/diesel) equivalent?

- If you own an ICE car, is it better immediately to replace it with an full electric car, or wait until it is beyond economic repair.

- Since electric cars are more expensive, may it be better for the environment to buy an ICE vehicle and use the balance to buy carbon offsets?

The answers to these questions depend on how you use your car, and other factors such as the mix of energy generation used to power the electric vehicle.  Estimates for some important variables such as emissions from the production of vehicles are often imprecise, and vary considerably between sources.

This article provides default values which you may change.  Sources for these default values are provided in the appendix.
`;return t(e),{para_1:e}},inputs:["md","display"],outputs:["para_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:4,mode:"js",body:(i,t)=>{const e=i`## Assumptions`;return t(e),{title_assumptions:e}},inputs:["md","display"],outputs:["title_assumptions"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:(i,t)=>({electricCarAssumptions:i(t())}),inputs:["view","createElectricCarAssumptionsControls"],outputs:["electricCarAssumptions"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:13,mode:"js",body:(i,t)=>{const e=i`## Results

### Total carbon emissions
`;return t(e),{results_title:e}},inputs:["md","display"],outputs:["results_title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:14,mode:"js",body:(i,t,e,s,n)=>{const o=i`Total lifetime carbon emissions are ${t.toPrecision(3)} tonnes CO2 for the ICE car, and   ${e.toPrecision(3)} tonnes CO2 for the electric car.

This makes lifetime electric emissions ${(100*e/t).toPrecision(3)}% of ICE emissions.

The ICE vehicle will therefore have additional emissions of ${s.toPrecision(3)} tonnes of CO2.
`;return n(o),{results_para_1:o}},inputs:["md","total_ice_emissions","total_elec_emissions","additional_emissions_ice","display"],outputs:["results_para_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:15,mode:"js",body:async(i,t,e,s)=>(i(await t(e,s)),{results_chart:null}),inputs:["display","renderLifetimeChart","electricCarInputs","electricCarResults"],outputs:["results_chart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:16,mode:"js",body:(i,t,e,s,n,o)=>{const a=i`
|                       | ICE | Electric |
|-----------------------|-----|----------|
| Marginal emissions/km |   ${t.toFixed(1)} gCO2/km  |     ${e.toFixed(1)} gCO2/km       |
| Average emissions/km  |     ${s.toFixed(1)} gCO2/km  |     ${n.toFixed(1)} gCO2/km       |
`;return o(a),{results_table:a}},inputs:["md","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km","average_ice_emissions_gCO2km","average_elec_emissions_gCO2km","display"],outputs:["results_table"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:17,mode:"js",body:(i,t,e)=>{const s=i`


#### Carbon offsetting the difference

Carbon offsetting costs vary wildly, between about [£6 and £300 per tonne](https://www.robinlinacre.com/offsetting_renewables/) - see also [here](https://www.gov.uk/flood-and-coastal-erosion-risk-management-research-reports/achieving-net-zero-carbon-emissions-a-review-of-the-evidence-behind-carbon-offsetting).  The Greater London Authority uses a [carbon offset price of £60/tonne CO2](https://www.london.gov.uk/sites/default/files/carbon_offsett_funds_guidance_2018.pdf).

Using the £60 figure, the cost of offsetting the additional lifetime emissions from the ICE would be £${(t*60).toFixed(2)}.`;return e(s),{results_carbon_offset:s}},inputs:["md","additional_emissions_ice","display"],outputs:["results_carbon_offset"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:18,mode:"js",body:(i,t,e,s)=>{const n=i`### Replacing an ICE with an electric vehicle
If you own an existing ICE, is it better immediately to replace it with an electric vehicle or wait until it reaches the end of its life?

The production emissions of the ICE car are a sunk cost.  This makes the relevant comparison the [marginal](https://www.investopedia.com/terms/m/marginal-analysis.asp#:~:text=that%20same%20activity.-,Marginal%20refers%20to%20the%20focus%20on%20the%20cost%20or%20benefit,them%20maximize%20their%20potential%20profits.) emissions of the ICE car (${t.toFixed(1)} gCO2/km)  vs. the average emissions of the electric car (${e.toFixed(1)} gCO2/km).

If the former are higher than the later, then further use of the ICE results in higher overall emissions.
`;return s(n),{replace_para_1:n}},inputs:["md","marginal_ice_emissions_gCO2km","average_elec_emissions_gCO2km","display"],outputs:["replace_para_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:19,mode:"js",body:(i,t)=>{const e=i`Although switching immediately to an electric car usually reduces your overall emissions, it's important to recognise that the savings are relatively modest.

Suppose that instead of immediately switching, you keep your ICE for a further distance:`;return t(e),{replace_para_2:e}},inputs:["md","display"],outputs:["replace_para_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:50,mode:"js",body:(i,t)=>({remainingIce:i(t())}),inputs:["view","createRemainingIceControl"],outputs:["remainingIce"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:20,mode:"js",body:(i,t,e)=>{const s=i`The total carbon saving of immediately switching would be ${t.toPrecision(3)} tonnes CO2.

Using the £60 per tonne of CO2 offsetting figure mentioned earlier, the cost would be £${(t*60).toLocaleString("US-en",{maximumFractionDigits:0})}.`;return e(s),{replace_para_3:s}},inputs:["md","ice_emissions_for_marginal_useage","display"],outputs:["replace_para_3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:21,mode:"js",body:(i,t,e)=>{const s=i`## 'Break even' point for electric cars

Given that electric cars have greater carbon emissions from their production, how many miles must be driven before their total emissions fall below those of ICE vehicles?

As shown in the following chart, the breakeven distance is ${t.toLocaleString("en-US",{maximumFractionDigits:0})} km.
`;return e(s),{breakeven_electric:s}},inputs:["md","break_even_distance","display"],outputs:["breakeven_electric"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:22,mode:"js",body:async(i,t,e,s,n)=>(i(await t(e,s,n)),{breakeven_electric_chart:null}),inputs:["display","renderBreakEvenChart","electricCarInputs","electricCarResults","width"],outputs:["breakeven_electric_chart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:23,mode:"js",body:(i,t)=>{const e=i`## Further considerations

#### Substitution effects

Selling an ICE vehicle increases the supply of second hand ICE cars, depressing their price. If vehicles get cheaper, it's plausible more miles may be driven in total.

#### Positive externalities

Purchasing electric vehicles is likely to result in the technology maturing more rapidly, decreasing the energy cost of production and increasing the relative desirability.

By increasing demand for electricity and reducing demand for petrol/diesel, it may also accelerate the transition to cleaner electricity.

#### Marginal vs average electric carbon intensity

The mix of electricity generation in many countries includes a substantial percentage of renewables.  In the short run, marginal electricity usage presumably comes from non-renewable energy sources, since short-term increases in demand are usually made up by non-renewable sources like natural gas.

Arguably, the assumption you use for the carbon intensity of electricity production should be based on marginal rather than average production.  In the UK, this would likely be gas-fired power stations, which is around [500gCO2/KWh](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


`;return t(e),{further_considerations:e}},inputs:["md","display"],outputs:["further_considerations"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:24,mode:"js",body:(i,t)=>{const e=i`## Annex - Source for assumptions:

**Carbon intensity of electricity production**:
-  [DEFRA conversion factors](https://gist.github.com/RobinL/2d253d1b5a4a27e563fd1ce811c1bb86#file-defra_conversion_factors_2019-csv-L1928). For other countries [see page 74](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).  For comparison of different sources of electricity, see [here](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


**Emissions from production of electric vs ICE vehicles**

- [Figure A11 Page 189 and Figure 12 page 191](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf) for carbon emissions from production of ICE/electric
- Or alternatively you can derive a figure of around 9 tonnes for ICE and 14 tonnes for electric from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).

**Uplift in ICE emissions from production fuel cycle**
- Derived from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).
`;return t(e),{annex:e}},inputs:["md","display"],outputs:["annex"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:100,mode:"js",body:(i,t,e)=>{const s={...i,remainingIce:t},n=e(s),o=n.totalIceKm,a=n.totalElectricKm,r=n.marginalIce,c=n.marginalElectric,u=n.iceUseEmissions,d=n.electricUseEmissions,f=n.totalIce,p=n.totalElectric,m=n.averageIce,h=n.averageElectric,_=n.immediateSwitchSaving,y=n.breakEvenDistance,g=n.additionalIce;return{electricCarInputs:s,electricCarResults:n,total_ice_km:o,total_elec_km:a,marginal_ice_emissions_gCO2km:r,marginal_elec_emissions_gCO2km:c,ice_emissions_from_use:u,elec_emissions_from_use:d,total_ice_emissions:f,total_elec_emissions:p,average_ice_emissions_gCO2km:m,average_elec_emissions_gCO2km:h,ice_emissions_for_marginal_useage:_,break_even_distance:y,additional_emissions_ice:g}},inputs:["electricCarAssumptions","remainingIce","calculateElectricCar"],outputs:["electricCarInputs","electricCarResults","total_ice_km","total_elec_km","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km","ice_emissions_from_use","elec_emissions_from_use","total_ice_emissions","total_elec_emissions","average_ice_emissions_gCO2km","average_elec_emissions_gCO2km","ice_emissions_for_marginal_useage","break_even_distance","additional_emissions_ice"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{l as default};
