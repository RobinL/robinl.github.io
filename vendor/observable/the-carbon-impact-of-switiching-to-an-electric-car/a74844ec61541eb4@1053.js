// https://observablehq.com/@robinl/the-carbon-impact-of-switiching-to-an-electric-car@1053
import define1 from "./7764a40fe6b83ca1@437.js";

function _title(md){return(
md`# How does switching to an electric car affect your carbon footprint?`
)}

function _para_1(md){return(
md`This post considers three questions:

- What is the total carbon footprint of an full electric vehicle versus an ICE (petrol/diesel) equivalent? 

- If you own an ICE car, is it better immediately to replace it with an full electric car, or wait until it is beyond economic repair.

- Since electric cars are more expensive, may it be better for the environment to buy an ICE vehicle and use the balance to buy carbon offsets?

The answers to these questions depend on how you use your car, and other factors such as the mix of energy generation used to power the electric vehicle.  Estimates for some important variables such as emissions from the production of vehicles are often imprecise, and vary considerably between sources. 

This article provides default values which you may change.  Sources for these default values are provided in the appendix.
`
)}

function _title_assumptions(md){return(
md`## Assumptions`
)}

function _ice_mileage_md(md,inputs,html,$0,km_miles_unit_select,$1){return(
md`Total expected lifetime mileage of ICE vehicle:   ${inputs.bind(
  html`<input type=number style='width:3rem'>`,
  $0
)}  thousand  ${inputs.bind(
  html`${km_miles_unit_select}`,
  $1
)}
`
)}

function _elec_mileage_md(md,inputs,html,$0,km_miles_unit_select,$1){return(
md`Total expected lifetime mileage of electric vehicle:   ${inputs.bind(
  html`<input type=number style='width:3rem'>`,
  $0
)}  thousand  ${inputs.bind(
  html`${km_miles_unit_select}`,
  $1
)}
`
)}

function _total_emissions_ice_md(md,inputs,html,$0){return(
md`Total emissions in tonnes for ICE vehicle manufacture: ${inputs.bind(
  html`<input type=number style='width:2.5rem'>`,
  $0
)}  tonnes  (CO2 equivalent)`
)}

function _total_emissions_elec_md(md,inputs,html,$0){return(
md`Total emissions in tonnes for electric vehicle manufacture: ${inputs.bind(
  html`<input type=number style='width:2.5rem'>`,
  $0
)}  tonnes  (CO2 equivalent)`
)}

function _ice_vehicle_emissions_md(md,inputs,html,$0,ice_emissions_unit_select,$1){return(
md`ICE vehicle emissions:  ${inputs.bind(
  html`<input type=number style='width:3rem'>`,
  $0
)} 
${inputs.bind(html`${ice_emissions_unit_select}`, $1)}`
)}

function _uplift_md(md,inputs,html,$0){return(
md`ICE uplift for fuel production cycle (energy required for extraction, production and transport of petrol/diesel): ${inputs.bind(
  html`<input type=number style='width:2.5rem'>`,
  $0
)} %`
)}

function _elec_miles_kwh_md(md,inputs,html,$0,elec_emissions_unit_select,$1){return(
md`Electric vehicle energy usage:  ${inputs.bind(
  html`<input type=number style='width:2.5rem'>`,
  $0
)} 
${inputs.bind(html`${elec_emissions_unit_select}`, $1)}`
)}

function _carbon_intensity_md(md,inputs,html,$0){return(
md`Carbon intensity of electricity production:  ${inputs.bind(
  html`<input type=number style='width:3rem'>`,
  $0
)} gCO2/kWh`
)}

function _results_title(md){return(
md`## Results

### Total carbon emissions
`
)}

function _results_para_1(md,total_ice_emissions,total_elec_emissions,additional_emissions_ice){return(
md`Total lifetime carbon emissions are ${total_ice_emissions.toPrecision(
  3
)} tonnes CO2 for the ICE car, and   ${total_elec_emissions.toPrecision(
  3
)} tonnes CO2 for the electric car.

This makes lifetime electric emissions ${(
  (100 * total_elec_emissions) /
  total_ice_emissions
).toPrecision(3)}% of ICE emissions.

The ICE vehicle will therefore have additional emissions of ${additional_emissions_ice.toPrecision(
  3
)} tonnes of CO2.
`
)}

function _results_chart(embed,vl,total_emissions_data){return(
embed(
  vl
    .data(total_emissions_data)
    .transform(
      vl
        .groupby(["Lifecycle Stage", "Vehicle Type"])
        .aggregate(vl.sum('Tonnes CO2').as("Tonnes CO2")),
      vl
        .stack("Tonnes CO2")
        .groupby("Vehicle Type")
        .sort({ field: 'Lifecycle Stage', order: 'ascending' }),
      vl
        .calculate("(datum['Tonnes CO2_start'] + datum['Tonnes CO2_end'])/2")
        .as("sum_Tonnes CO2_mid")
    )
    .layer(
      vl.markBar().encode(
        vl.x().fieldN("Vehicle Type"),
        vl
          .y()
          .fieldQ("Tonnes CO2_start")
          .axis({ title: 'Tonnes CO2' }),
        vl.y2().fieldQ("Tonnes CO2_end"),
        vl.color().fieldN("Lifecycle Stage")
      ),
      vl.markText({ dy: -0 }).encode(
        vl.x().fieldN("Vehicle Type"),
        vl.y().fieldQ("sum_Tonnes CO2_mid"),
        vl
          .text()
          .fieldN('Tonnes CO2')
          .format(',.1f')
      )
    )
    .width(200)
    .toSpec()
)
)}

function _results_table(md,marginal_ice_emissions_gCO2km,marginal_elec_emissions_gCO2km,average_ice_emissions_gCO2km,average_elec_emissions_gCO2km){return(
md`
|                       | ICE | Electric |
|-----------------------|-----|----------|
| Marginal emissions/km |   ${marginal_ice_emissions_gCO2km.toFixed(
  1
)} gCO2/km  |     ${marginal_elec_emissions_gCO2km.toFixed(1)} gCO2/km       |
| Average emissions/km  |     ${average_ice_emissions_gCO2km.toFixed(
  1
)} gCO2/km  |     ${average_elec_emissions_gCO2km.toFixed(1)} gCO2/km       |
`
)}

function _results_carbon_offset(md,additional_emissions_ice){return(
md`


#### Carbon offsetting the difference 

Carbon offsetting costs vary wildly, between about [£6 and £300 per tonne](https://www.robinlinacre.com/offsetting_renewables/) - see also [here](https://www.gov.uk/flood-and-coastal-erosion-risk-management-research-reports/achieving-net-zero-carbon-emissions-a-review-of-the-evidence-behind-carbon-offsetting).  The Greater London Authority uses a [carbon offset price of £60/tonne CO2](https://www.london.gov.uk/sites/default/files/carbon_offsett_funds_guidance_2018.pdf).  

Using the £60 figure, the cost of offsetting the additional lifetime emissions from the ICE would be £${(
  additional_emissions_ice * 60
).toFixed(2)}.`
)}

function _replace_para_1(md,marginal_ice_emissions_gCO2km,average_elec_emissions_gCO2km){return(
md`### Replacing an ICE with an electric vehicle
If you own an existing ICE, is it better immediately to replace it with an electric vehicle or wait until it reaches the end of its life?

The production emissions of the ICE car are a sunk cost.  This makes the relevant comparison the [marginal](https://www.investopedia.com/terms/m/marginal-analysis.asp#:~:text=that%20same%20activity.-,Marginal%20refers%20to%20the%20focus%20on%20the%20cost%20or%20benefit,them%20maximize%20their%20potential%20profits.) emissions of the ICE car (${marginal_ice_emissions_gCO2km.toFixed(
  1
)} gCO2/km)  vs. the average emissions of the electric car (${average_elec_emissions_gCO2km.toFixed(
  1
)} gCO2/km).  

If the former are higher than the later, then further use of the ICE results in higher overall emissions.
`
)}

function _replace_para_2(md,inputs,html,$0,km_miles_unit_select,$1){return(
md`Although switching immediately to an electric car usually reduces your overall emissions, it's important to recognise that the savings are relatively modest.

Suppose that instead of immediately switching, suppose you keep your ICE for a further  ${inputs.bind(
  html`<input type=number style='width:2.5rem'>`,
  $0
)}  thousand  ${inputs.bind(
  html`${km_miles_unit_select}`,
  $1
)}.

`
)}

function _replace_para_3(md,ice_emissions_for_marginal_useage){return(
md`The total carbon saving of immediately switching would be ${ice_emissions_for_marginal_useage.toPrecision(
  3
)} tonnes CO2.

Using the £60 per tonne of CO2 offsetting figure mentioned earlier, the cost would be £${(
  ice_emissions_for_marginal_useage * 60
).toLocaleString('US-en', { maximumFractionDigits: 0 })}.`
)}

function _breakeven_electric(md,break_even_distance){return(
md`## 'Break even' point for electric cars 

Given that electric cars have greater carbon emissions from their production, how many miles must be driven before their total emissions fall below those of ICE vehicles?

As shown in the following chart, the breakeven distance is ${break_even_distance.toLocaleString(
  'en-US',
  {
    maximumFractionDigits: 0
  }
)} km.
`
)}

function _breakeven_electric_chart(vl,break_even_data,width,embed,markrule_be,text_be)
{
  let lines = vl
    .markLine()
    .data(break_even_data)

    .encode(
      vl
        .x()
        .fieldQ('Distance (km)')
        .axis({ title: 'Distance (km)' }),
      vl
        .y()
        .fieldQ('Tonnes CO2')
        .axis({ title: 'Tonnes CO2' }),
      vl.color().fieldN('Vehicle Type')
    )
    .title('Break even distance')
    .width(width - 200);

  return embed(vl.layer(lines, markrule_be, text_be).toSpec());
}


function _further_considerations(md){return(
md`## Further considerations

#### Substitution effects

Selling an ICE vehicle increases the supply of second hand ICE cars, depressing their price. If vehicles get cheaper, it's plausible more miles may be driven in total.

#### Positive externalities

Purchasing electric vehicles is likely to result in the technology maturing more rapidly, decreasing the energy cost of production and increasing the relative desirability.  

By increasing demand for electricity and reducing demand for petrol/diesel, it may also accelerate the transition to cleaner electricity.

#### Marginal vs average electric carbon intensity

The mix of electricity generation in many countries includes a substantial percentage of renewables.  In the short run, marginal electricity usage presumably comes from non-renewable energy sources, since short-term increases in demand are usually made up by non-renewable sources like natural gas.

Arguably, the assumption you use for the carbon intensity of electricity production should be based on marginal rather than average production.  In the UK, this would likely be gas-fired power stations, which is around [500gCO2/KWh](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


`
)}

function _annex(md){return(
md`## Annex - Source for assumptions:

**Carbon intensity of electricity production**:
-  [DEFRA conversion factors](https://gist.github.com/RobinL/2d253d1b5a4a27e563fd1ce811c1bb86#file-defra_conversion_factors_2019-csv-L1928). For other countries [see page 74](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).  For comparison of different sources of electricity, see [here](https://www.parliament.uk/globalassets/documents/post/postpn_383-carbon-footprint-electricity-generation.pdf).


**Emissions from production of electric vs ICE vehicles**

- [Figure A11 Page 189 and Figure 12 page 191](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf) for carbon emissions from production of ICE/electric 
- Or alternatively you can derive a figure of around 9 tonnes for ICE and 14 tonnes for electric from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).

**Uplift in ICE emissions from production fuel cycle**
- Derived from [figure ES5 on page 9](https://ec.europa.eu/clima/sites/default/files/transport/vehicles/docs/2020_study_main_report_en.pdf).
`
)}

function _24(md){return(
md`### Breakeven calcs`
)}

function _break_even_distance(elec_production_emissions_tonnes,ice_production_emissions_tonnes,marginal_ice_emissions_gCO2km,marginal_elec_emissions_gCO2km)
{
  // y = a + m1 x

  // y = b + m2 x
  //x = (a-b)/(m1-m2)
  let a_b =
    1e6 * (elec_production_emissions_tonnes - ice_production_emissions_tonnes);

  let m1_m2 = marginal_ice_emissions_gCO2km - marginal_elec_emissions_gCO2km;
  return a_b / m1_m2;
}


function _break_even_data(ice_production_emissions_tonnes,total_ice_km,ice_emissions_from_use,elec_production_emissions_tonnes,elec_emissions_from_use)
{
  let rows = [];
  let p;
  p = { id: 0, "Distance (km)": 0, "Tonnes CO2": 0, "Vehicle Type": "ICE" };
  rows.push(p);

  p = {
    id: 1,
    "Distance (km)": 0,
    "Tonnes CO2": ice_production_emissions_tonnes,
    "Vehicle Type": "ICE"
  };
  rows.push(p);

  p = {
    id: 2,
    "Distance (km)": total_ice_km,
    "Tonnes CO2": ice_production_emissions_tonnes + ice_emissions_from_use,
    "Vehicle Type": "ICE"
  };
  rows.push(p);

  p = {
    id: 0,
    "Distance (km)": 0,
    "Tonnes CO2": 0,
    "Vehicle Type": "Electric"
  };
  rows.push(p);

  p = {
    id: 1,
    "Distance (km)": 0,
    "Tonnes CO2": elec_production_emissions_tonnes,
    "Vehicle Type": "Electric"
  };
  rows.push(p);

  p = {
    id: 2,
    "Distance (km)": total_ice_km,
    "Tonnes CO2": elec_production_emissions_tonnes + elec_emissions_from_use,
    "Vehicle Type": "Electric"
  };
  rows.push(p);

  return rows;
}


function _text_be(vl,break_even_distance,total_ice_emissions){return(
vl
  .markText({ angle: -90, xOffset: -10, yOffset: -20 })
  .data({
    values: [
      {
        be_text: break_even_distance,
        y_pos: total_ice_emissions / 2,
        mytext:
          break_even_distance.toLocaleString('en-US', {
            maximumFractionDigits: 0
          }) + " km"
      }
    ]
  })
  .encode(vl.x().fieldQ('be_text'))
  .encode(vl.y().fieldQ('y_pos'))
  .encode(vl.text().fieldN('mytext'))
)}

function _markrule_be(vl,break_even_distance){return(
vl
  .markRule({ color: 'red', size: 1, strokeDash: ['4', '4'] })
  .data({ values: [{ rule: break_even_distance }] })
  .encode(vl.x().fieldQ('rule'))
)}

function _29(md){return(
md`## Chart data`
)}

function _total_emissions_data(elec_production_emissions_tonnes,elec_emissions_from_use,ice_emissions_from_use,ice_production_emissions_tonnes)
{
  let rows = [];
  let r = {
    'Lifecycle Stage': 'Production',
    'Vehicle Type': 'Electric',
    'Tonnes CO2': elec_production_emissions_tonnes
  };
  rows.push(r);

  r = {
    'Lifecycle Stage': 'Use',
    'Vehicle Type': 'Electric',
    'Tonnes CO2': elec_emissions_from_use
  };
  rows.push(r);

  r = {
    'Lifecycle Stage': 'Use',
    'Vehicle Type': 'ICE',
    'Tonnes CO2': ice_emissions_from_use
  };
  rows.push(r);

  r = {
    'Lifecycle Stage': 'Production',
    'Vehicle Type': 'ICE',
    'Tonnes CO2': ice_production_emissions_tonnes
  };
  rows.push(r);

  return rows;
}


function _31(md){return(
md`## Chart specs`
)}

function _chart(vl,total_emissions_data){return(
vl
  .data(total_emissions_data)

  .layer(
    vl
      .markBar()
      .encode(vl.x().fieldN("Vehicle Type"), vl.y().fieldQ("Tonnes CO2"))
  )
  .width(100)
  .toSpec()
)}

function _33(md){return(
md`## Conversions`
)}

function _total_ice_km(per,ice_lifetime_distance_units,ice_lifetime_distance){return(
per(`kilometers/${ice_lifetime_distance_units}`) *
  ice_lifetime_distance *
  1000
)}

function _total_elec_km(per,elec_lifetime_distance_units,elec_lifetime_distance){return(
per(`kilometers/${elec_lifetime_distance_units}`) *
  elec_lifetime_distance *
  1000
)}

function _marginal_ice_emissions_gCO2km(ice_emissions_unit,per,ice_emissions,ice_emissions_uplift_percent)
{
  let direct_vehicle_emissions_gCO2km;
  if (ice_emissions_unit == "mpg") {
    let kg_per_gallon = per("kg_co2_from_petrol/imperial_gallons_petrol");
    let kg_per_mile = kg_per_gallon / ice_emissions;
    let kg_per_km = kg_per_mile * per("miles/kilometers");

    direct_vehicle_emissions_gCO2km = kg_per_km * 1000;
  }

  if (ice_emissions_unit == "gCO2km") {
    direct_vehicle_emissions_gCO2km = ice_emissions;
  }

  return (
    direct_vehicle_emissions_gCO2km * (1 + ice_emissions_uplift_percent / 100)
  );
}


function _marginal_elec_emissions_gCO2km(elec_emissions_unit,per,elec_emissions,elec_carbon_intensity)
{
  let distance_units;
  if (elec_emissions_unit == "miles_per_kWh") {
    distance_units = "miles";
  }
  if (elec_emissions_unit == "km_per_kWh") {
    distance_units = "kilometers";
  }
  let conversion_factor = per(`kilometers/${distance_units}`);
  let kwh_per_km = elec_emissions * conversion_factor;
  let elec_emissions_gCO2km = elec_carbon_intensity / kwh_per_km;
  return elec_emissions_gCO2km;
}


function _ice_emissions_from_use(marginal_ice_emissions_gCO2km,total_ice_km){return(
(marginal_ice_emissions_gCO2km * total_ice_km) / 1e6
)}

function _elec_emissions_from_use(marginal_elec_emissions_gCO2km,total_elec_km){return(
(marginal_elec_emissions_gCO2km * total_elec_km) / 1e6
)}

function _total_ice_emissions(ice_emissions_from_use,ice_production_emissions_tonnes){return(
ice_emissions_from_use + ice_production_emissions_tonnes
)}

function _total_elec_emissions(elec_emissions_from_use,elec_production_emissions_tonnes){return(
elec_emissions_from_use +
  elec_production_emissions_tonnes
)}

function _average_elec_emissions_gCO2km(total_elec_emissions,total_elec_km){return(
(total_elec_emissions / total_elec_km) * 1e6
)}

function _average_ice_emissions_gCO2km(total_ice_emissions,total_ice_km){return(
(total_ice_emissions / total_ice_km) * 1e6
)}

function _ice_distance_remaining_km(per,ice_distance_remaining_units,ice_distance_remaining){return(
per(`kilometers/${ice_distance_remaining_units}`) *
  ice_distance_remaining *
  1000
)}

function _ice_remaining_emissions(ice_distance_remaining_km,marginal_ice_emissions_gCO2km){return(
(ice_distance_remaining_km *
  marginal_ice_emissions_gCO2km) /
  1e6
)}

function _elec_remaining_emissions_equivalent(ice_distance_remaining_km,average_elec_emissions_gCO2km){return(
(ice_distance_remaining_km *
  average_elec_emissions_gCO2km) /
  1e6
)}

function _ice_emissions_for_marginal_useage(ice_remaining_emissions,elec_remaining_emissions_equivalent){return(
ice_remaining_emissions -
  elec_remaining_emissions_equivalent
)}

function _additional_emissions_ice(total_ice_emissions,total_elec_emissions){return(
total_ice_emissions - total_elec_emissions
)}

function _49(md){return(
md`## Inputs/views`
)}

function _ice_lifetime_distance(inputs){return(
new inputs.input(100)
)}

function _elec_lifetime_distance(inputs){return(
new inputs.input(100)
)}

function _ice_lifetime_distance_units(inputs){return(
new inputs.input("miles")
)}

function _elec_lifetime_distance_units(inputs){return(
new inputs.input("miles")
)}

function _ice_production_emissions_tonnes(inputs){return(
new inputs.input(9)
)}

function _elec_production_emissions_tonnes(inputs){return(
new inputs.input(14)
)}

function _elec_emissions_units(inputs){return(
new inputs.input("gCO2km")
)}

function _ice_emissions(inputs){return(
new inputs.input("40")
)}

function _ice_emissions_unit(inputs){return(
new inputs.input("mpg")
)}

function _ice_emissions_uplift_percent(inputs){return(
new inputs.input("50")
)}

function _elec_emissions(inputs){return(
new inputs.input("4")
)}

function _elec_emissions_unit(inputs){return(
new inputs.input("miles_per_kWh")
)}

function _elec_carbon_intensity(inputs){return(
new inputs.input("250")
)}

function _ice_distance_remaining(inputs){return(
new inputs.input("30")
)}

function _ice_distance_remaining_units(inputs){return(
new inputs.input("miles")
)}

function _km_miles_unit_select(){return(
`<select>
    <option value="kilometers">kilometers</option>
    <option value="miles">miles</option>
  </select>`
)}

function _elec_emissions_unit_select(){return(
`<select>
<option value="miles_per_kWh">miles/kWh</option>
    <option value="km_per_kWh">km/kWh</option>
  </select>`
)}

function _ice_emissions_unit_select(){return(
`<select>
    <option value="mpg">miles per gallon</option>
    <option value="gCO2km">gCO2/km</option>
    
  </select>`
)}

function _68(md){return(
md`## Imports`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _eu(require){return(
require("@robinl/energy_usage@0.1.6")
)}

function _per(eu){return(
eu.convert.per
)}

function _embed(require){return(
require("vega-embed@6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("title_assumptions")).define("title_assumptions", ["md"], _title_assumptions);
  main.variable(observer("ice_mileage_md")).define("ice_mileage_md", ["md","inputs","html","viewof ice_lifetime_distance","km_miles_unit_select","viewof ice_lifetime_distance_units"], _ice_mileage_md);
  main.variable(observer("elec_mileage_md")).define("elec_mileage_md", ["md","inputs","html","viewof elec_lifetime_distance","km_miles_unit_select","viewof elec_lifetime_distance_units"], _elec_mileage_md);
  main.variable(observer("total_emissions_ice_md")).define("total_emissions_ice_md", ["md","inputs","html","viewof ice_production_emissions_tonnes"], _total_emissions_ice_md);
  main.variable(observer("total_emissions_elec_md")).define("total_emissions_elec_md", ["md","inputs","html","viewof elec_production_emissions_tonnes"], _total_emissions_elec_md);
  main.variable(observer("ice_vehicle_emissions_md")).define("ice_vehicle_emissions_md", ["md","inputs","html","viewof ice_emissions","ice_emissions_unit_select","viewof ice_emissions_unit"], _ice_vehicle_emissions_md);
  main.variable(observer("uplift_md")).define("uplift_md", ["md","inputs","html","viewof ice_emissions_uplift_percent"], _uplift_md);
  main.variable(observer("elec_miles_kwh_md")).define("elec_miles_kwh_md", ["md","inputs","html","viewof elec_emissions","elec_emissions_unit_select","viewof elec_emissions_unit"], _elec_miles_kwh_md);
  main.variable(observer("carbon_intensity_md")).define("carbon_intensity_md", ["md","inputs","html","viewof elec_carbon_intensity"], _carbon_intensity_md);
  main.variable(observer("results_title")).define("results_title", ["md"], _results_title);
  main.variable(observer("results_para_1")).define("results_para_1", ["md","total_ice_emissions","total_elec_emissions","additional_emissions_ice"], _results_para_1);
  main.variable(observer("results_chart")).define("results_chart", ["embed","vl","total_emissions_data"], _results_chart);
  main.variable(observer("results_table")).define("results_table", ["md","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km","average_ice_emissions_gCO2km","average_elec_emissions_gCO2km"], _results_table);
  main.variable(observer("results_carbon_offset")).define("results_carbon_offset", ["md","additional_emissions_ice"], _results_carbon_offset);
  main.variable(observer("replace_para_1")).define("replace_para_1", ["md","marginal_ice_emissions_gCO2km","average_elec_emissions_gCO2km"], _replace_para_1);
  main.variable(observer("replace_para_2")).define("replace_para_2", ["md","inputs","html","viewof ice_distance_remaining","km_miles_unit_select","viewof ice_distance_remaining_units"], _replace_para_2);
  main.variable(observer("replace_para_3")).define("replace_para_3", ["md","ice_emissions_for_marginal_useage"], _replace_para_3);
  main.variable(observer("breakeven_electric")).define("breakeven_electric", ["md","break_even_distance"], _breakeven_electric);
  main.variable(observer("breakeven_electric_chart")).define("breakeven_electric_chart", ["vl","break_even_data","width","embed","markrule_be","text_be"], _breakeven_electric_chart);
  main.variable(observer("further_considerations")).define("further_considerations", ["md"], _further_considerations);
  main.variable(observer("annex")).define("annex", ["md"], _annex);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer("break_even_distance")).define("break_even_distance", ["elec_production_emissions_tonnes","ice_production_emissions_tonnes","marginal_ice_emissions_gCO2km","marginal_elec_emissions_gCO2km"], _break_even_distance);
  main.variable(observer("break_even_data")).define("break_even_data", ["ice_production_emissions_tonnes","total_ice_km","ice_emissions_from_use","elec_production_emissions_tonnes","elec_emissions_from_use"], _break_even_data);
  main.variable(observer("text_be")).define("text_be", ["vl","break_even_distance","total_ice_emissions"], _text_be);
  main.variable(observer("markrule_be")).define("markrule_be", ["vl","break_even_distance"], _markrule_be);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("total_emissions_data")).define("total_emissions_data", ["elec_production_emissions_tonnes","elec_emissions_from_use","ice_emissions_from_use","ice_production_emissions_tonnes"], _total_emissions_data);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer("chart")).define("chart", ["vl","total_emissions_data"], _chart);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer("total_ice_km")).define("total_ice_km", ["per","ice_lifetime_distance_units","ice_lifetime_distance"], _total_ice_km);
  main.variable(observer("total_elec_km")).define("total_elec_km", ["per","elec_lifetime_distance_units","elec_lifetime_distance"], _total_elec_km);
  main.variable(observer("marginal_ice_emissions_gCO2km")).define("marginal_ice_emissions_gCO2km", ["ice_emissions_unit","per","ice_emissions","ice_emissions_uplift_percent"], _marginal_ice_emissions_gCO2km);
  main.variable(observer("marginal_elec_emissions_gCO2km")).define("marginal_elec_emissions_gCO2km", ["elec_emissions_unit","per","elec_emissions","elec_carbon_intensity"], _marginal_elec_emissions_gCO2km);
  main.variable(observer("ice_emissions_from_use")).define("ice_emissions_from_use", ["marginal_ice_emissions_gCO2km","total_ice_km"], _ice_emissions_from_use);
  main.variable(observer("elec_emissions_from_use")).define("elec_emissions_from_use", ["marginal_elec_emissions_gCO2km","total_elec_km"], _elec_emissions_from_use);
  main.variable(observer("total_ice_emissions")).define("total_ice_emissions", ["ice_emissions_from_use","ice_production_emissions_tonnes"], _total_ice_emissions);
  main.variable(observer("total_elec_emissions")).define("total_elec_emissions", ["elec_emissions_from_use","elec_production_emissions_tonnes"], _total_elec_emissions);
  main.variable(observer("average_elec_emissions_gCO2km")).define("average_elec_emissions_gCO2km", ["total_elec_emissions","total_elec_km"], _average_elec_emissions_gCO2km);
  main.variable(observer("average_ice_emissions_gCO2km")).define("average_ice_emissions_gCO2km", ["total_ice_emissions","total_ice_km"], _average_ice_emissions_gCO2km);
  main.variable(observer("ice_distance_remaining_km")).define("ice_distance_remaining_km", ["per","ice_distance_remaining_units","ice_distance_remaining"], _ice_distance_remaining_km);
  main.variable(observer("ice_remaining_emissions")).define("ice_remaining_emissions", ["ice_distance_remaining_km","marginal_ice_emissions_gCO2km"], _ice_remaining_emissions);
  main.variable(observer("elec_remaining_emissions_equivalent")).define("elec_remaining_emissions_equivalent", ["ice_distance_remaining_km","average_elec_emissions_gCO2km"], _elec_remaining_emissions_equivalent);
  main.variable(observer("ice_emissions_for_marginal_useage")).define("ice_emissions_for_marginal_useage", ["ice_remaining_emissions","elec_remaining_emissions_equivalent"], _ice_emissions_for_marginal_useage);
  main.variable(observer("additional_emissions_ice")).define("additional_emissions_ice", ["total_ice_emissions","total_elec_emissions"], _additional_emissions_ice);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer("viewof ice_lifetime_distance")).define("viewof ice_lifetime_distance", ["inputs"], _ice_lifetime_distance);
  main.variable(observer("ice_lifetime_distance")).define("ice_lifetime_distance", ["Generators", "viewof ice_lifetime_distance"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_lifetime_distance")).define("viewof elec_lifetime_distance", ["inputs"], _elec_lifetime_distance);
  main.variable(observer("elec_lifetime_distance")).define("elec_lifetime_distance", ["Generators", "viewof elec_lifetime_distance"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_lifetime_distance_units")).define("viewof ice_lifetime_distance_units", ["inputs"], _ice_lifetime_distance_units);
  main.variable(observer("ice_lifetime_distance_units")).define("ice_lifetime_distance_units", ["Generators", "viewof ice_lifetime_distance_units"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_lifetime_distance_units")).define("viewof elec_lifetime_distance_units", ["inputs"], _elec_lifetime_distance_units);
  main.variable(observer("elec_lifetime_distance_units")).define("elec_lifetime_distance_units", ["Generators", "viewof elec_lifetime_distance_units"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_production_emissions_tonnes")).define("viewof ice_production_emissions_tonnes", ["inputs"], _ice_production_emissions_tonnes);
  main.variable(observer("ice_production_emissions_tonnes")).define("ice_production_emissions_tonnes", ["Generators", "viewof ice_production_emissions_tonnes"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_production_emissions_tonnes")).define("viewof elec_production_emissions_tonnes", ["inputs"], _elec_production_emissions_tonnes);
  main.variable(observer("elec_production_emissions_tonnes")).define("elec_production_emissions_tonnes", ["Generators", "viewof elec_production_emissions_tonnes"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_emissions_units")).define("viewof elec_emissions_units", ["inputs"], _elec_emissions_units);
  main.variable(observer("elec_emissions_units")).define("elec_emissions_units", ["Generators", "viewof elec_emissions_units"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_emissions")).define("viewof ice_emissions", ["inputs"], _ice_emissions);
  main.variable(observer("ice_emissions")).define("ice_emissions", ["Generators", "viewof ice_emissions"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_emissions_unit")).define("viewof ice_emissions_unit", ["inputs"], _ice_emissions_unit);
  main.variable(observer("ice_emissions_unit")).define("ice_emissions_unit", ["Generators", "viewof ice_emissions_unit"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_emissions_uplift_percent")).define("viewof ice_emissions_uplift_percent", ["inputs"], _ice_emissions_uplift_percent);
  main.variable(observer("ice_emissions_uplift_percent")).define("ice_emissions_uplift_percent", ["Generators", "viewof ice_emissions_uplift_percent"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_emissions")).define("viewof elec_emissions", ["inputs"], _elec_emissions);
  main.variable(observer("elec_emissions")).define("elec_emissions", ["Generators", "viewof elec_emissions"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_emissions_unit")).define("viewof elec_emissions_unit", ["inputs"], _elec_emissions_unit);
  main.variable(observer("elec_emissions_unit")).define("elec_emissions_unit", ["Generators", "viewof elec_emissions_unit"], (G, _) => G.input(_));
  main.variable(observer("viewof elec_carbon_intensity")).define("viewof elec_carbon_intensity", ["inputs"], _elec_carbon_intensity);
  main.variable(observer("elec_carbon_intensity")).define("elec_carbon_intensity", ["Generators", "viewof elec_carbon_intensity"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_distance_remaining")).define("viewof ice_distance_remaining", ["inputs"], _ice_distance_remaining);
  main.variable(observer("ice_distance_remaining")).define("ice_distance_remaining", ["Generators", "viewof ice_distance_remaining"], (G, _) => G.input(_));
  main.variable(observer("viewof ice_distance_remaining_units")).define("viewof ice_distance_remaining_units", ["inputs"], _ice_distance_remaining_units);
  main.variable(observer("ice_distance_remaining_units")).define("ice_distance_remaining_units", ["Generators", "viewof ice_distance_remaining_units"], (G, _) => G.input(_));
  main.variable(observer("km_miles_unit_select")).define("km_miles_unit_select", _km_miles_unit_select);
  main.variable(observer("elec_emissions_unit_select")).define("elec_emissions_unit_select", _elec_emissions_unit_select);
  main.variable(observer("ice_emissions_unit_select")).define("ice_emissions_unit_select", _ice_emissions_unit_select);
  main.variable(observer()).define(["md"], _68);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  main.variable(observer("per")).define("per", ["eu"], _per);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  return main;
}
