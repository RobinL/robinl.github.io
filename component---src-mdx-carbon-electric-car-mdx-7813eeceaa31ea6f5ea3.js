"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[6947],{8292:function(e,i,t){t.r(i),t.d(i,{Head:function(){return Ge},default:function(){return Qe},output_order:function(){return qe}});var n=t(7294),s=t(7848),a=t(7825);function o(e){return e`# Vega-Lite API v4`}function r(e){return e`The [Vega-Lite JavaScript API](https://github.com/vega/vega-lite-api/) provides a convenient way to write [Vega-Lite](https://vega.github.io/vega-lite) specifications in a programmatic fashion. Scroll down for some usage examples, or browse the [Vega-Lite API example collection](https://observablehq.com/collection/@vega/vega-lite-api)!

This notebook uses **version 4** of Vega-Lite and the corresponding Vega-Lite API 4.0. _To use the more recent Vega-Lite version 5, see the [Vega-Lite API v5 notebook](https://observablehq.com/@vega/vega-lite-api-v5) instead._

Want to learn more about data visualization and how to use the Vega-Lite API? Read the [introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite) and the [data visualization curriculum](https://observablehq.com/@uwdata/data-visualization-curriculum?collection=@uwdata/visualization-curriculum).`}function l(e){return e`
The cell below imports the Vega-Lite API and registers the desired versions of Vega and Vega-Lite, along with default [Vega View options](https://vega.github.io/vega/docs/api/view/#view) and [Vega-Lite configuration](https://vega.github.io/vega-lite/docs/config.html):
`}async function c(e){const[i,t,n,s]=await Promise.all(["vega@5.23.0","vega-lite@4.17.0","vega-lite-api@4.0.0","vega-tooltip@0.25.1"].map((i=>e(i)))),a={config:{config:{view:{continuousWidth:400,continuousHeight:300},mark:{tooltip:null}}},init:e=>{e.tooltip((new s.Handler).call),e.container()&&(e.container().style["overflow-x"]="auto")},view:{loader:i.loader({baseURL:"https://cdn.jsdelivr.net/npm/vega-datasets@2/"}),renderer:"canvas"}};return n.register(i,t,a)}function u(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import {vl} from '@vega/vega-lite-api'
~~~
To use the API outside of Observable, see the [stand-alone usage instructions](#standalone_use) below.
`}function d(e){return e`## Zip Codes

A dot for each zip code in the United States, colored by the first digit.
`}function m(e,i){return e.markSquare({size:2,opacity:1}).data("data/zipcodes.csv").transform(e.calculate("substring(datum.zip_code, 0, 1)").as("digit")).project(e.projection("albersUsa")).encode(e.longitude().fieldQ("longitude"),e.latitude().fieldQ("latitude"),e.color().fieldN("digit")).width(i).height(Math.floor(i/1.75)).autosize({type:"fit-x",contains:"padding"}).config({view:{stroke:null}}).render()}function _(e){return e`## Interactive Seattle Weather 2012-2015

A scatter plot and summary histogram with linked \`selections\` between plots to perform cross-filtering and configure conditional color encodings.
`}function f(e,i){const t=e.selectInterval().encodings("x"),n=e.selectMulti().encodings("color"),s={domain:["sun","fog","drizzle","rain","snow"],range:["#e7ba52","#a7a7a7","#aec7e8","#1f77b4","#9467bd"]},a=e.markPoint({filled:!0}).encode(e.color().value("lightgray").if(t,e.color().fieldN("weather").scale(s).title("Weather")),e.size().fieldQ("precipitation").scale({domain:[-1,50],range:[10,500]}).title("Precipitation"),e.order().fieldQ("precipitation").sort("descending"),e.x().timeMD("date").axis({title:"Date",format:"%b"}),e.y().fieldQ("temp_max").scale({domain:[-5,40]}).axis({title:"Maximum Daily Temperature (°C)"})).width(i).height(300).select(t).transform(e.filter(n)),o=e.markBar().encode(e.color().value("lightgray").if(n,e.color().fieldN("weather").scale(s).title("Weather")),e.x().count(),e.y().fieldN("weather").scale({domain:s.domain}).title("Weather")).width(i).select(n).transform(e.filter(t));return e.vconcat(a,o).data("data/seattle-weather.csv").autosize({type:"fit-x",contains:"padding"}).render()}function p(e){return e`## Parallel Coordinates

A [parallel coordinates plot](https://en.wikipedia.org/wiki/Parallel_coordinates) that uses \`window\` and \`fold\` transforms to convert the four dimensions of penguin measurements into normalized coordinates that can be visualized as \`line\` marks. The graphic includes an additional layer with custom \`text\` mark labels for the parallel axis grid lines. We render the plot as SVG by passing \`{renderer:'svg'}\` to the \`render\` method.
`}function v(e,i){const t=e.markLine({strokeWidth:1.5,opacity:.5}).encode(e.color().fieldN("Species").sort("descending"),e.detail().fieldN("index"),e.x().fieldO("key").scale({type:"point",padding:0}).axis({domain:!1,ticks:!1,title:!1,grid:!0,gridColor:"#888",labelAngle:0,labelPadding:8,labelFontWeight:"bold"}),e.y().fieldQ("fraction").axis(null)),n=e.markText({dx:-2,align:"right",baseline:"middle"}).transform(e.groupby("key").aggregate(e.min("value").as("min"),e.max("value").as("max")),e.fold("min","max").as("op","value"),e.groupby("key").window(e.percent_rank("value").as("fraction"))).encode(e.x().fieldN("key"),e.y().fieldQ("fraction").axis(null),e.text().field("value").format(","));return e.layer(t,n).data("data/penguins.json").transform(e.filter('datum["Beak Length (mm)"] != null'),e.window(e.row_number().as("index")),e.fold(["Beak Length (mm)","Beak Depth (mm)","Flipper Length (mm)","Body Mass (g)"]).as("key","value"),e.groupby("key").join(e.min("value").as("min"),e.max("value").as("max")),e.calculate("(datum.value - datum.min) / (datum.max - datum.min)").as("fraction")).width(i).height(300).autosize({type:"fit-x",contains:"padding"}).render({renderer:"svg"})}function h(e){return e`<hr/>
## Stand-Alone Usage in a Web Browser

To use the Vega-Lite API in the browser outside of Observable, you need to include all the dependencies, set the default configuration, and then register the Vega libraries. Here is some starting code to build from:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite-api@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-tooltip"></script>
  </head>
  <body>
    <div id="view"></div>

    <script>
      // setup API options
      const options = {
        config: {
          // Vega-Lite default configuration
        },
        init: (view) => {
          // initialize tooltip handler
          view.tooltip(new vegaTooltip.Handler().call);
        },
        view: {
          // view constructor options
          // remove the loader if you don't want to default to vega-datasets!
          loader: vega.loader({
            baseURL: "https://cdn.jsdelivr.net/npm/vega-datasets@2/",
          }),
          renderer: "canvas",
        },
      };

      // register vega and vega-lite with the API
      vl.register(vega, vegaLite, options);

      // now you can use the API!
      vl.markBar({ tooltip: true })
        .data([
          { a: "A", b: 28 }, { a: "B", b: 55 }, { a: "C", b: 43 },
          { a: "D", b: 91 }, { a: "E", b: 81 }, { a: "F", b: 53 },
          { a: "G", b: 19 }, { a: "H", b: 87 }, { a: "I", b: 52 },
        ])
        .encode(
          vl.x().fieldQ("b"),
          vl.y().fieldN("a"),
          vl.tooltip([vl.fieldQ("b"), vl.fieldN("a")])
        )
        .render()
        .then(viewElement => {
          // render returns a promise to a DOM element containing the chart
          // viewElement.value contains the Vega View object instance
          document.getElementById('view').appendChild(viewElement);
        });
    </script>
  </body>
</html>

~~~`}function g(e,i){const t=e.module();return t.variable(i()).define(["md"],o),t.variable(i()).define(["md"],r),t.variable(i()).define(["md"],l),t.variable(i("vl")).define("vl",["require"],c),t.variable(i()).define(["md"],u),t.variable(i("zip_codes")).define("zip_codes",["md"],d),t.variable(i()).define(["vl","width"],m),t.variable(i("interactive_weather")).define("interactive_weather",["md"],_),t.variable(i()).define(["vl","width"],f),t.variable(i("parallel_coordinats")).define("parallel_coordinats",["md"],p),t.variable(i()).define(["vl","width"],v),t.variable(i("standalone_use")).define("standalone_use",["md"],h),t}function b(e){return e`# How does switching to an electric car affect your carbon footprint?`}function w(e){return e`This post considers three questions:

- What is the total carbon footprint of an full electric vehicle versus an ICE (petrol/diesel) equivalent? 

- If you own an ICE car, is it better immediately to replace it with an full electric car, or wait until it is beyond economic repair.

- Since electric cars are more expensive, may it be better for the environment to buy an ICE vehicle and use the balance to buy carbon offsets?

The answers to these questions depend on how you use your car, and other factors such as the mix of energy generation used to power the electric vehicle.  Estimates for some important variables such as emissions from the production of vehicles are often imprecise, and vary considerably between sources. 

This article provides default values which you may change.  Sources for these default values are provided in the appendix.
`}function y(e){return e`## Assumptions`}function k(e,i,t,n,s,a){return e`Total expected lifetime mileage of ICE vehicle:   ${i.bind(t`<input type=number style='width:3rem'>`,n)}  thousand  ${i.bind(t`${s}`,a)}
`}function C(e,i,t,n,s,a){return e`Total expected lifetime mileage of electric vehicle:   ${i.bind(t`<input type=number style='width:3rem'>`,n)}  thousand  ${i.bind(t`${s}`,a)}
`}function x(e,i,t,n){return e`Total emissions in tonnes for ICE vehicle manufacture: ${i.bind(t`<input type=number style='width:2.5rem'>`,n)}  tonnes  (CO2 equivalent)`}function O(e,i,t,n){return e`Total emissions in tonnes for electric vehicle manufacture: ${i.bind(t`<input type=number style='width:2.5rem'>`,n)}  tonnes  (CO2 equivalent)`}function T(e,i,t,n,s,a){return e`ICE vehicle emissions:  ${i.bind(t`<input type=number style='width:3rem'>`,n)} 
${i.bind(t`${s}`,a)}`}function E(e,i,t,n){return e`ICE uplift for fuel production cycle (energy required for extraction, production and transport of petrol/diesel): ${i.bind(t`<input type=number style='width:2.5rem'>`,n)} %`}function I(e,i,t,n,s,a){return e`Electric vehicle energy usage:  ${i.bind(t`<input type=number style='width:2.5rem'>`,n)} 
${i.bind(t`${s}`,a)}`}function $(e,i,t,n){return e`Carbon intensity of electricity production:  ${i.bind(t`<input type=number style='width:3rem'>`,n)} gCO2/kWh`}function L(e){return e`## Results

### Total carbon emissions
`}function V(e,i,t,n){return e`Total lifetime carbon emissions are ${i.toPrecision(3)} tonnes CO2 for the ICE car, and   ${t.toPrecision(3)} tonnes CO2 for the electric car.

This makes lifetime electric emissions ${(100*t/i).toPrecision(3)}% of ICE emissions.

The ICE vehicle will therefore have additional emissions of ${n.toPrecision(3)} tonnes of CO2.
`}function S(e,i,t){return e(i.data(t).transform(i.groupby(["Lifecycle Stage","Vehicle Type"]).aggregate(i.sum("Tonnes CO2").as("Tonnes CO2")),i.stack("Tonnes CO2").groupby("Vehicle Type").sort({field:"Lifecycle Stage",order:"ascending"}),i.calculate("(datum['Tonnes CO2_start'] + datum['Tonnes CO2_end'])/2").as("sum_Tonnes CO2_mid")).layer(i.markBar().encode(i.x().fieldN("Vehicle Type"),i.y().fieldQ("Tonnes CO2_start").axis({title:"Tonnes CO2"}),i.y2().fieldQ("Tonnes CO2_end"),i.color().fieldN("Lifecycle Stage")),i.markText({dy:-0}).encode(i.x().fieldN("Vehicle Type"),i.y().fieldQ("sum_Tonnes CO2_mid"),i.text().fieldN("Tonnes CO2").format(",.1f"))).width(200).toSpec())}function P(e,i,t,n,s){return e`
|                       | ICE | Electric |
|-----------------------|-----|----------|
| Marginal emissions/km |   ${i.toFixed(1)} gCO2/km  |     ${t.toFixed(1)} gCO2/km       |
| Average emissions/km  |     ${n.toFixed(1)} gCO2/km  |     ${s.toFixed(1)} gCO2/km       |
`}function A(e,i){return e`


#### Carbon offsetting the difference 

Carbon offsetting costs vary wildly, between about [£6 and £300 per tonne](https://www.robinlinacre.com/offsetting_renewables/) - see also [here](https://www.gov.uk/flood-and-coastal-erosion-risk-management-research-reports/achieving-net-zero-carbon-emissions-a-review-of-the-evidence-behind-carbon-offsetting).  The Greater London Authority uses a [carbon offset price of £60/tonne CO2](https://www.london.gov.uk/sites/default/files/carbon_offsett_funds_guidance_2018.pdf).  

Using the £60 figure, the cost of offsetting the additional lifetime emissions from the ICE would be £${(60*i).toFixed(2)}.`}function z(e,i,t){return e`### Replacing an ICE with an electric vehicle
If you own an existing ICE, is it better immediately to replace it with an electric vehicle or wait until it reaches the end of its life?

The production emissions of the ICE car are a sunk cost.  This makes the relevant comparison the [marginal](https://www.investopedia.com/terms/m/marginal-analysis.asp#:~:text=that%20same%20activity.-,Marginal%20refers%20to%20the%20focus%20on%20the%20cost%20or%20benefit,them%20maximize%20their%20potential%20profits.) emissions of the ICE car (${i.toFixed(1)} gCO2/km)  vs. the average emissions of the electric car (${t.toFixed(1)} gCO2/km).  

If the former are higher than the later, then further use of the ICE results in higher overall emissions.
`}function W(e,i,t,n,s,a){return e`Although switching immediately to an electric car usually reduces your overall emissions, it's important to recognise that the savings are relatively modest.

Suppose that instead of immediately switching, suppose you keep your ICE for a further  ${i.bind(t`<input type=number style='width:2.5rem'>`,n)}  thousand  ${i.bind(t`${s}`,a)}.

`}function D(e,i){return e`The total carbon saving of immediately switching would be ${i.toPrecision(3)} tonnes CO2.

Using the £60 per tonne of CO2 offsetting figure mentioned earlier, the cost would be £${(60*i).toLocaleString("US-en",{maximumFractionDigits:0})}.`}function F(e,i){return e`## 'Break even' point for electric cars 

Given that electric cars have greater carbon emissions from their production, how many miles must be driven before their total emissions fall below those of ICE vehicles?

As shown in the following chart, the breakeven distance is ${i.toLocaleString("en-US",{maximumFractionDigits:0})} km.
`}function G(e,i,t,n,s,a){let o=e.markLine().data(i).encode(e.x().fieldQ("Distance (km)").axis({title:"Distance (km)"}),e.y().fieldQ("Tonnes CO2").axis({title:"Tonnes CO2"}),e.color().fieldN("Vehicle Type")).title("Break even distance").width(t-200);return n(e.layer(o,s,a).toSpec())}function q(e){return e`## Further considerations

#### Substitution effects

Selling an ICE vehicle increases the supply of second hand ICE cars, depressing their price. If vehicles get cheaper, it's plausible more miles may be driven in total.

#### Positive externalities

Purchasing electric vehicles is likely to result in the technology maturing more rapidly, decreasing the energy cost of production and increasing the relative desirability.  

By increasing demand for electricity and reducing demand for petrol/diesel, it may also accelerate the transition to cleaner electricity.

#### Marginal vs average electric carbon intensity

The mix of electricity generation in many countries includes a substantial percentage of renewables.  In the short run, marginal electricity usage presumably comes from non-renewable energy sources, since short-term increases in demand are usually made up by non-renewable sources like natural gas.

Arguably, the assumption you use for the carbon intensity of electricity production should be based on marginal rather than average production.  In the UK, this would likely be gas-fired power stations, which is around [500gCO2/KWh](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


`}function N(e){return e`## Annex - Source for assumptions:

**Carbon intensity of electricity production**:
-  [DEFRA conversion factors](https://gist.github.com/RobinL/2d253d1b5a4a27e563fd1ce811c1bb86#file-defra_conversion_factors_2019-csv-L1928). For other countries [see page 74](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).  For comparison of different sources of electricity, see [here](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


**Emissions from production of electric vs ICE vehicles**

- [Figure A11 Page 189 and Figure 12 page 191](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf) for carbon emissions from production of ICE/electric 
- Or alternatively you can derive a figure of around 9 tonnes for ICE and 14 tonnes for electric from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).

**Uplift in ICE emissions from production fuel cycle**
- Derived from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).
`}function Q(e){return e`### Breakeven calcs`}function U(e,i,t,n){return 1e6*(e-i)/(t-n)}function B(e,i,t,n,s){let a,o=[];return a={id:0,"Distance (km)":0,"Tonnes CO2":0,"Vehicle Type":"ICE"},o.push(a),a={id:1,"Distance (km)":0,"Tonnes CO2":e,"Vehicle Type":"ICE"},o.push(a),a={id:2,"Distance (km)":i,"Tonnes CO2":e+t,"Vehicle Type":"ICE"},o.push(a),a={id:0,"Distance (km)":0,"Tonnes CO2":0,"Vehicle Type":"Electric"},o.push(a),a={id:1,"Distance (km)":0,"Tonnes CO2":n,"Vehicle Type":"Electric"},o.push(a),a={id:2,"Distance (km)":i,"Tonnes CO2":n+s,"Vehicle Type":"Electric"},o.push(a),o}function j(e,i,t){return e.markText({angle:-90,xOffset:-10,yOffset:-20}).data({values:[{be_text:i,y_pos:t/2,mytext:i.toLocaleString("en-US",{maximumFractionDigits:0})+" km"}]}).encode(e.x().fieldQ("be_text")).encode(e.y().fieldQ("y_pos")).encode(e.text().fieldN("mytext"))}function M(e,i){return e.markRule({color:"red",size:1,strokeDash:["4","4"]}).data({values:[{rule:i}]}).encode(e.x().fieldQ("rule"))}function R(e){return e`## Chart data`}function H(e,i,t,n){let s=[],a={"Lifecycle Stage":"Production","Vehicle Type":"Electric","Tonnes CO2":e};return s.push(a),a={"Lifecycle Stage":"Use","Vehicle Type":"Electric","Tonnes CO2":i},s.push(a),a={"Lifecycle Stage":"Use","Vehicle Type":"ICE","Tonnes CO2":t},s.push(a),a={"Lifecycle Stage":"Production","Vehicle Type":"ICE","Tonnes CO2":n},s.push(a),s}function Z(e){return e`## Chart specs`}function K(e,i){return e.data(i).layer(e.markBar().encode(e.x().fieldN("Vehicle Type"),e.y().fieldQ("Tonnes CO2"))).width(100).toSpec()}function J(e){return e`## Conversions`}function Y(e,i,t){return e(`kilometers/${i}`)*t*1e3}function X(e,i,t){return e(`kilometers/${i}`)*t*1e3}function ee(e,i,t,n){let s;if("mpg"==e){s=1e3*(i("kg_co2_from_petrol/imperial_gallons_petrol")/t*i("miles/kilometers"))}return"gCO2km"==e&&(s=t),s*(1+n/100)}function ie(e,i,t,n){let s;return"miles_per_kWh"==e&&(s="miles"),"km_per_kWh"==e&&(s="kilometers"),n/(t*i(`kilometers/${s}`))}function te(e,i){return e*i/1e6}function ne(e,i){return e*i/1e6}function se(e,i){return e+i}function ae(e,i){return e+i}function oe(e,i){return e/i*1e6}function re(e,i){return e/i*1e6}function le(e,i,t){return e(`kilometers/${i}`)*t*1e3}function ce(e,i){return e*i/1e6}function ue(e,i){return e*i/1e6}function de(e,i){return e-i}function me(e,i){return e-i}function _e(e){return e`## Inputs/views`}function fe(e){return new e.input(100)}function pe(e){return new e.input(100)}function ve(e){return new e.input("miles")}function he(e){return new e.input("miles")}function ge(e){return new e.input(9)}function be(e){return new e.input(14)}function we(e){return new e.input("gCO2km")}function ye(e){return new e.input("40")}function ke(e){return new e.input("mpg")}function Ce(e){return new e.input("50")}function xe(e){return new e.input("4")}function Oe(e){return new e.input("miles_per_kWh")}function Te(e){return new e.input("250")}function Ee(e){return new e.input("30")}function Ie(e){return new e.input("miles")}function $e(){return'<select>\n    <option value="kilometers">kilometers</option>\n    <option value="miles">miles</option>\n  </select>'}function Le(){return'<select>\n<option value="miles_per_kWh">miles/kWh</option>\n    <option value="km_per_kWh">km/kWh</option>\n  </select>'}function Ve(){return'<select>\n    <option value="mpg">miles per gallon</option>\n    <option value="gCO2km">gCO2/km</option>\n    \n  </select>'}function Se(e){return e`## Imports`}function Pe(e){return e("@observablehq/inputs")}function Ae(e){return e("@robinl/energy_usage@0.1.6")}function ze(e){return e.convert.per}function We(e){return e("vega-embed@6")}function De(e,i){const t=e.module();t.variable(i("title")).define("title",["md"],b),t.variable(i("para_1")).define("para_1",["md"],w),t.variable(i("title_assumptions")).define("title_assumptions",["md"],y),t.variable(i("ice_mileage_md")).define("ice_mileage_md",["md","inputs","html","viewof ice_lifetime_distance","km_miles_unit_select","viewof ice_lifetime_distance_units"],k),t.variable(i("elec_mileage_md")).define("elec_mileage_md",["md","inputs","html","viewof elec_lifetime_distance","km_miles_unit_select","viewof elec_lifetime_distance_units"],C),t.variable(i("total_emissions_ice_md")).define("total_emissions_ice_md",["md","inputs","html","viewof ice_production_emissions_tonnes"],x),t.variable(i("total_emissions_elec_md")).define("total_emissions_elec_md",["md","inputs","html","viewof elec_production_emissions_tonnes"],O),t.variable(i("ice_vehicle_emissions_md")).define("ice_vehicle_emissions_md",["md","inputs","html","viewof ice_emissions","ice_emissions_unit_select","viewof ice_emissions_unit"],T),t.variable(i("uplift_md")).define("uplift_md",["md","inputs","html","viewof ice_emissions_uplift_percent"],E),t.variable(i("elec_miles_kwh_md")).define("elec_miles_kwh_md",["md","inputs","html","viewof elec_emissions","elec_emissions_unit_select","viewof elec_emissions_unit"],I),t.variable(i("carbon_intensity_md")).define("carbon_intensity_md",["md","inputs","html","viewof elec_carbon_intensity"],$),t.variable(i("results_title")).define("results_title",["md"],L),t.variable(i("results_para_1")).define("results_para_1",["md","total_ice_emissions","total_elec_emissions","additional_emissions_ice"],V),t.variable(i("results_chart")).define("results_chart",["embed","vl","total_emissions_data"],S),t.variable(i("results_table")).define("results_table",["md","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km","average_ice_emissions_gCO2km","average_elec_emissions_gCO2km"],P),t.variable(i("results_carbon_offset")).define("results_carbon_offset",["md","additional_emissions_ice"],A),t.variable(i("replace_para_1")).define("replace_para_1",["md","marginal_ice_emissions_gCO2km","average_elec_emissions_gCO2km"],z),t.variable(i("replace_para_2")).define("replace_para_2",["md","inputs","html","viewof ice_distance_remaining","km_miles_unit_select","viewof ice_distance_remaining_units"],W),t.variable(i("replace_para_3")).define("replace_para_3",["md","ice_emissions_for_marginal_useage"],D),t.variable(i("breakeven_electric")).define("breakeven_electric",["md","break_even_distance"],F),t.variable(i("breakeven_electric_chart")).define("breakeven_electric_chart",["vl","break_even_data","width","embed","markrule_be","text_be"],G),t.variable(i("further_considerations")).define("further_considerations",["md"],q),t.variable(i("annex")).define("annex",["md"],N),t.variable(i()).define(["md"],Q),t.variable(i("break_even_distance")).define("break_even_distance",["elec_production_emissions_tonnes","ice_production_emissions_tonnes","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km"],U),t.variable(i("break_even_data")).define("break_even_data",["ice_production_emissions_tonnes","total_ice_km","ice_emissions_from_use","elec_production_emissions_tonnes","elec_emissions_from_use"],B),t.variable(i("text_be")).define("text_be",["vl","break_even_distance","total_ice_emissions"],j),t.variable(i("markrule_be")).define("markrule_be",["vl","break_even_distance"],M),t.variable(i()).define(["md"],R),t.variable(i("total_emissions_data")).define("total_emissions_data",["elec_production_emissions_tonnes","elec_emissions_from_use","ice_emissions_from_use","ice_production_emissions_tonnes"],H),t.variable(i()).define(["md"],Z),t.variable(i("chart")).define("chart",["vl","total_emissions_data"],K),t.variable(i()).define(["md"],J),t.variable(i("total_ice_km")).define("total_ice_km",["per","ice_lifetime_distance_units","ice_lifetime_distance"],Y),t.variable(i("total_elec_km")).define("total_elec_km",["per","elec_lifetime_distance_units","elec_lifetime_distance"],X),t.variable(i("marginal_ice_emissions_gCO2km")).define("marginal_ice_emissions_gCO2km",["ice_emissions_unit","per","ice_emissions","ice_emissions_uplift_percent"],ee),t.variable(i("marginal_elec_emissions_gCO2km")).define("marginal_elec_emissions_gCO2km",["elec_emissions_unit","per","elec_emissions","elec_carbon_intensity"],ie),t.variable(i("ice_emissions_from_use")).define("ice_emissions_from_use",["marginal_ice_emissions_gCO2km","total_ice_km"],te),t.variable(i("elec_emissions_from_use")).define("elec_emissions_from_use",["marginal_elec_emissions_gCO2km","total_elec_km"],ne),t.variable(i("total_ice_emissions")).define("total_ice_emissions",["ice_emissions_from_use","ice_production_emissions_tonnes"],se),t.variable(i("total_elec_emissions")).define("total_elec_emissions",["elec_emissions_from_use","elec_production_emissions_tonnes"],ae),t.variable(i("average_elec_emissions_gCO2km")).define("average_elec_emissions_gCO2km",["total_elec_emissions","total_elec_km"],oe),t.variable(i("average_ice_emissions_gCO2km")).define("average_ice_emissions_gCO2km",["total_ice_emissions","total_ice_km"],re),t.variable(i("ice_distance_remaining_km")).define("ice_distance_remaining_km",["per","ice_distance_remaining_units","ice_distance_remaining"],le),t.variable(i("ice_remaining_emissions")).define("ice_remaining_emissions",["ice_distance_remaining_km","marginal_ice_emissions_gCO2km"],ce),t.variable(i("elec_remaining_emissions_equivalent")).define("elec_remaining_emissions_equivalent",["ice_distance_remaining_km","average_elec_emissions_gCO2km"],ue),t.variable(i("ice_emissions_for_marginal_useage")).define("ice_emissions_for_marginal_useage",["ice_remaining_emissions","elec_remaining_emissions_equivalent"],de),t.variable(i("additional_emissions_ice")).define("additional_emissions_ice",["total_ice_emissions","total_elec_emissions"],me),t.variable(i()).define(["md"],_e),t.variable(i("viewof ice_lifetime_distance")).define("viewof ice_lifetime_distance",["inputs"],fe),t.variable(i("ice_lifetime_distance")).define("ice_lifetime_distance",["Generators","viewof ice_lifetime_distance"],((e,i)=>e.input(i))),t.variable(i("viewof elec_lifetime_distance")).define("viewof elec_lifetime_distance",["inputs"],pe),t.variable(i("elec_lifetime_distance")).define("elec_lifetime_distance",["Generators","viewof elec_lifetime_distance"],((e,i)=>e.input(i))),t.variable(i("viewof ice_lifetime_distance_units")).define("viewof ice_lifetime_distance_units",["inputs"],ve),t.variable(i("ice_lifetime_distance_units")).define("ice_lifetime_distance_units",["Generators","viewof ice_lifetime_distance_units"],((e,i)=>e.input(i))),t.variable(i("viewof elec_lifetime_distance_units")).define("viewof elec_lifetime_distance_units",["inputs"],he),t.variable(i("elec_lifetime_distance_units")).define("elec_lifetime_distance_units",["Generators","viewof elec_lifetime_distance_units"],((e,i)=>e.input(i))),t.variable(i("viewof ice_production_emissions_tonnes")).define("viewof ice_production_emissions_tonnes",["inputs"],ge),t.variable(i("ice_production_emissions_tonnes")).define("ice_production_emissions_tonnes",["Generators","viewof ice_production_emissions_tonnes"],((e,i)=>e.input(i))),t.variable(i("viewof elec_production_emissions_tonnes")).define("viewof elec_production_emissions_tonnes",["inputs"],be),t.variable(i("elec_production_emissions_tonnes")).define("elec_production_emissions_tonnes",["Generators","viewof elec_production_emissions_tonnes"],((e,i)=>e.input(i))),t.variable(i("viewof elec_emissions_units")).define("viewof elec_emissions_units",["inputs"],we),t.variable(i("elec_emissions_units")).define("elec_emissions_units",["Generators","viewof elec_emissions_units"],((e,i)=>e.input(i))),t.variable(i("viewof ice_emissions")).define("viewof ice_emissions",["inputs"],ye),t.variable(i("ice_emissions")).define("ice_emissions",["Generators","viewof ice_emissions"],((e,i)=>e.input(i))),t.variable(i("viewof ice_emissions_unit")).define("viewof ice_emissions_unit",["inputs"],ke),t.variable(i("ice_emissions_unit")).define("ice_emissions_unit",["Generators","viewof ice_emissions_unit"],((e,i)=>e.input(i))),t.variable(i("viewof ice_emissions_uplift_percent")).define("viewof ice_emissions_uplift_percent",["inputs"],Ce),t.variable(i("ice_emissions_uplift_percent")).define("ice_emissions_uplift_percent",["Generators","viewof ice_emissions_uplift_percent"],((e,i)=>e.input(i))),t.variable(i("viewof elec_emissions")).define("viewof elec_emissions",["inputs"],xe),t.variable(i("elec_emissions")).define("elec_emissions",["Generators","viewof elec_emissions"],((e,i)=>e.input(i))),t.variable(i("viewof elec_emissions_unit")).define("viewof elec_emissions_unit",["inputs"],Oe),t.variable(i("elec_emissions_unit")).define("elec_emissions_unit",["Generators","viewof elec_emissions_unit"],((e,i)=>e.input(i))),t.variable(i("viewof elec_carbon_intensity")).define("viewof elec_carbon_intensity",["inputs"],Te),t.variable(i("elec_carbon_intensity")).define("elec_carbon_intensity",["Generators","viewof elec_carbon_intensity"],((e,i)=>e.input(i))),t.variable(i("viewof ice_distance_remaining")).define("viewof ice_distance_remaining",["inputs"],Ee),t.variable(i("ice_distance_remaining")).define("ice_distance_remaining",["Generators","viewof ice_distance_remaining"],((e,i)=>e.input(i))),t.variable(i("viewof ice_distance_remaining_units")).define("viewof ice_distance_remaining_units",["inputs"],Ie),t.variable(i("ice_distance_remaining_units")).define("ice_distance_remaining_units",["Generators","viewof ice_distance_remaining_units"],((e,i)=>e.input(i))),t.variable(i("km_miles_unit_select")).define("km_miles_unit_select",$e),t.variable(i("elec_emissions_unit_select")).define("elec_emissions_unit_select",Le),t.variable(i("ice_emissions_unit_select")).define("ice_emissions_unit_select",Ve),t.variable(i()).define(["md"],Se),t.variable(i("inputs")).define("inputs",["require"],Pe),t.variable(i("eu")).define("eu",["require"],Ae),t.variable(i("per")).define("per",["eu"],ze);const n=e.module(g);return t.import("vl",n),t.variable(i("embed")).define("embed",["require"],We),t}var Fe=t(5860);const Ge=e=>n.createElement(a.H,{frontmatter:e.pageContext.frontmatter}),qe=["title","para_1","title_assumptions","ice_mileage_md","elec_mileage_md","total_emissions_ice_md","total_emissions_elec_md","ice_vehicle_emissions_md","uplift_md","elec_miles_kwh_md","carbon_intensity_md","results_title","results_para_1","results_chart","results_table","results_carbon_offset","replace_para_1","replace_para_2","replace_para_3","breakeven_electric","breakeven_electric_chart","further_considerations","annex"];function Ne(e){return n.createElement(Fe.Z,{notebook:De,cells:qe})}var Qe=function(e){return void 0===e&&(e={}),n.createElement(s.fE,e,n.createElement(Ne,e))}},5860:function(e,i,t){var n=t(7294),s=t(6493);const a="mdx-container-div",o=new s.Zu,r=Object.assign({},o,{width:function(){return o.Generators.observe((e=>{let i=e(document.getElementById(a).clientWidth);function t(){let t=document.getElementById(a).clientWidth;t!==i&&e(i=t)}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}))}});i.Z=function(e){let{notebook:i,cells:t,customClassName:a}=e;const o=(0,n.useRef)(t.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new s.r_(r);return e.module(i,(e=>{const i=t.indexOf(e);if(-1!==i)return new s.lj(o.current[i].current)})),()=>e.dispose()}),[i,t]),n.createElement("div",{className:a},o.current.map(((e,i)=>n.createElement("div",{key:i,ref:e}))))}},7825:function(e,i,t){t.d(i,{H:function(){return a}});var n=t(7294),s=t(4160);const a=e=>{let{frontmatter:i}=e;const{title:t,description:a,image:o,siteUrl:r,twitterUsername:l}=(0,s.K2)("1865044719").site.siteMetadata,c={title:(null==i?void 0:i.title)||t,description:(null==i?void 0:i.description)||a,image:`${r}${(null==i?void 0:i.image)||o}`,url:`${r}${(null==i?void 0:i.pathname)||""}`,twitterUsername:l,...i},u=null==i?void 0:i.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,c.title),n.createElement("meta",{name:"description",content:c.description}),n.createElement("meta",{name:"image",content:c.image}),u&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${u}`}))}}}]);
//# sourceMappingURL=component---src-mdx-carbon-electric-car-mdx-7813eeceaa31ea6f5ea3.js.map