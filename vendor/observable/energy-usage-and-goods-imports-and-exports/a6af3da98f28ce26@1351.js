// https://observablehq.com/@robinl/energy-usage-and-goods-imports-and-exports@1351
import define1 from "./146f352f1166f0d1@2202.js";

function _title(md){return(
md`# Energy usage and goods imports and exports`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/country_energy_usage/).*`
)}

function _intro(md,pepc_dict,tfec_dict,pepc_def,tfec_def){return(
md`The following charts show energy usage per head of the population for different countries, converted into kilowatt hours per day to be consistent with my other notebooks.

The data is queried directly from the [World Bank indicators API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation).

The two metrics of total energy usage which are available are:
- ${pepc_dict["GBR"].indicator.value}
- ${tfec_dict["GBR"].indicator.value}

### [${pepc_dict["GBR"].indicator.value}](https://datacatalog.worldbank.org/energy-use-kg-oil-equivalent-capita-1)

${pepc_def[1][0].sourceNote}


### [${tfec_dict["GBR"].indicator.value}](https://datacatalog.worldbank.org/total-final-energy-consumption-tfec)

${tfec_def[1][0].sourceNote}


Note that neither definition accounts for the energy embodied in imported goods.  So if a country uses energy to manufacture goods, and then exports those good, this energy is counted in the exporting country's energy usage, not that of the importing country.


`
)}

function _metric_label_lookup()
{
 return {"final_energy_consumption_per_capita_kwh": {"label": "Final energy consumption, kwh per capita per day ", "value": "final_energy_consumption_per_capita_kwh"}, 

         "primary_energy_per_capita_kwh": {"label": "Primary energy consumption, kwh per capita per day", "value": "primary_energy_per_capita_kwh"}}
}


function _metric(select,metric_label_lookup){return(
select({
  title: "Select metric to plot",
  options: Object.values(metric_label_lookup),
  value: "final_energy_consumption_per_capita_kwh"
})
)}

function _height(width){return(
width/1.8
)}

function _country_map(vega_embed,metric_label_lookup,metric,width,height,world,table_data_to_plot){return(
vega_embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": `${metric_label_lookup[metric]["label"]}`,
  "width": width,
  "height": height,
   "autosize": "fit",
  
   "config": {
    "view": {
      "stroke": "transparent"
    }
  },
  "data": {
    "values": world,
    "format": {
      "type": "topojson",
      "feature": "countries"
    }
  },
  "transform": [{
    "lookup": "id",
    "from": {
      "data": {"values": table_data_to_plot},
      "key": "country_id",
      "fields": ["final_energy_consumption_per_capita_kwh", "primary_energy_per_capita_kwh", "country_name"]
    }
  }],
  "projection": {
    "type": "naturalEarth1",
    "scale":width/4.5,
    "center" : [10,10],
    "translate" : [width/2,height/2]

  },
"mark": {
    "type": "geoshape",
    "stroke": "#757575",
    "strokeWidth": 0.5
  },
  
  "encoding": {
    "color": {
      "field": metric,
      "type": "quantitative",
      "legend": null
    },
    "tooltip": [
               {"field": "primary_energy_per_capita_kwh", "type": "quantitative", "format": ",.1f"},
               {"field": "final_energy_consumption_per_capita_kwh", "type": "quantitative", "format": ",.1f"},
              {"field": "country_name", "type": "nominal"}]
  }
}
  )
)}

function _bar_chart(vega_embed,table_data_to_plot,metric,width,metric_label_lookup){return(
vega_embed({
  data: { values: table_data_to_plot },
  transform: [
    { filter: { field: "population", gt: "20e6" } },
    { filter: { field: metric, gt: 0 } }
  ],
  width: width,
  height: 1000,
  autosize: "fit",
  mark: "bar",
  encoding: {
    y: {
      field: "country_name",
      type: "nominal",
      sort: { field: metric, op: "mean", order: "descending" }
    },
    x: { field: metric, type: "quantitative" },
    tooltip: [
      {
        field: "primary_energy_per_capita_kwh",
        type: "quantitative",
        format: ",.1f"
      },
      {
        field: "final_energy_consumption_per_capita_kwh",
        type: "quantitative",
        format: ",.1f"
      },
      { field: "country_name", type: "nominal" }
    ]
  },
  title: `${metric_label_lookup[metric]["label"]} for countries with population > 20 million`
})
)}

function _styles(html){return(
html`<style>
.vega-embed-wrapper {overflow: hidden}

#vg-tooltip-element table  td {
    white-space: nowrap;
    font-size: 0.8rem;
    border-bottom: 0px;
}

#vg-tooltip-element table tr td.key {
    max-width:500px;
}

#vg-tooltip-element table   {
    margin-bottom: 0rem;
    line-height: 1rem;
    border-collapse: unset;
}

`
)}

function _sewha_comparison(md){return(
md`## Comparison to SEWHA

[Sustainable Energy Without the Hot Air](http://www.inference.org.uk/sustainable/book/tex/sewtha.pdf) contains charts of energy consumption of different countries.  See pages 231 and 105.  See page 381 for the conversion of barrels of oil to kwh.

This data is sourced from [UNDP Human Development Report, 2007](http://hdr.undp.org/sites/default/files/reports/268/hdr_20072008_en_complete.pdf), see table 23 page  306.  It is based on [Total primary
energy supply](https://en.wikipedia.org/wiki/Primary_energy)`
)}

function _11(md){return(
md`## Combine data`
)}

function _api_results_to_country_lookup_dict(){return(
function api_results_to_country_lookup_dict(api_results) {
  return api_results[1].reduce((obj, item) => {
    let three_letter_id = "";
    debugger;
    if (item.country.id.length == 3) {
      three_letter_id = item.country.id;
    }

    if (item.countryiso3code != "") {
      three_letter_id = item.countryiso3code;
    }

    if (three_letter_id != "") {
      obj[three_letter_id] = item;
    }
    return obj;
  }, {});
}
)}

function _pepc_dict(api_results_to_country_lookup_dict,primary_energy_use_pc_raw){return(
api_results_to_country_lookup_dict(primary_energy_use_pc_raw)
)}

function _tfec_dict(api_results_to_country_lookup_dict,total_final_energy_consumption_raw){return(
api_results_to_country_lookup_dict(total_final_energy_consumption_raw)
)}

function _exp_dict(api_results_to_country_lookup_dict,merchandice_exports_raw){return(
api_results_to_country_lookup_dict(merchandice_exports_raw)
)}

function _population_dict(api_results_to_country_lookup_dict,population_raw){return(
api_results_to_country_lookup_dict(population_raw)
)}

function _countries_dict(countries_raw){return(
countries_raw[1].reduce((obj, item) => {
  if (item.id != "") {
    obj[item.id] = item;
  }
  return obj;
}, {})
)}

function _countries_dict_iso2(countries_raw){return(
countries_raw[1].reduce((obj, item) => {
  if (item.id != "") {
    obj[item.iso2Code] = item;
  }
  return obj;
}, {})
)}

function _countries_to_id_dict(id_to_country_raw){return(
id_to_country_raw.reduce((obj, item) => {
    if (item.code != "") {
      obj[item.code] = item;
    }
    return obj
  }, {})
)}

function _convert_kg_oil_eq_to_kwh(){return(
function convert_kg_oil_eq_to_kwh(kg_oil) {
  
  if (kg_oil == null) {
    return null
  } else {
    return (kg_oil*11.63)/365
  }

}
)}

function _convert_tfec_to_kwh_per_capita(){return(
function convert_tfec_to_kwh_per_capita(tfec_tj, population) {
  if ((tfec_tj == null) || (population == null) || (population == 0)) {
    return null
  } else {
    return (tfec_tj*1e12/(population*3600000))/365.25  //3600000 is num seconds in an hour * 1000 (w to kw)
  }
}
)}

function _get_value_if_exists(){return(
function get_value_if_exists(
  country_lookup_dict,
  country_key,
  value_key = "value",
  type_convert_num = true
) {
  if (country_key in country_lookup_dict) {
    let this_row = country_lookup_dict[country_key];
    if (value_key in this_row) {
      let ret_val = this_row[value_key];
      if (type_convert_num) {
        return +ret_val;
      } else {
        return ret_val;
      }
    } else {
      debugger;
      return null;
    }
  } else {
    debugger;
    return null;
  }
}
)}

function _table_data_to_plot(countries_to_id_dict,countries_dict_iso2,get_value_if_exists,pepc_dict,tfec_dict,population_dict,convert_kg_oil_eq_to_kwh,convert_tfec_to_kwh_per_capita)
{
  let list_of_countries = Object.keys(countries_to_id_dict);

  // LIst of countries is the elements of the geojson
  return list_of_countries.map(function(country_key) {
    let row = {};
    let three_letter_country_key = "";
    if (country_key in countries_dict_iso2) {
      three_letter_country_key = countries_dict_iso2[country_key].id;
    } else {
      debugger;
    }
    row["iso2code"] = country_key;
    row["country_name"] = countries_to_id_dict[country_key]["name"];
    row["country_id"] = countries_to_id_dict[country_key]["id"];

    row["primary_energy_per_capita_kg_oil_eq"] = get_value_if_exists(
      pepc_dict,
      three_letter_country_key
    );
    row["total_final_energy_consumption_tj"] = get_value_if_exists(
      tfec_dict,
      three_letter_country_key
    );
    row["population"] = get_value_if_exists(
      population_dict,
      three_letter_country_key
    );

    let pepcoe = row["primary_energy_per_capita_kg_oil_eq"];
    row["primary_energy_per_capita_kwh"] = convert_kg_oil_eq_to_kwh(pepcoe);

    let pop = row["population"];
    let tfec = row["total_final_energy_consumption_tj"];
    row[
      "final_energy_consumption_per_capita_kwh"
    ] = convert_tfec_to_kwh_per_capita(tfec, pop);

    return row;
  });
}


function _final_data_lookup(table_data_to_plot){return(
table_data_to_plot.reduce((obj, item) => {
    if (item.country_id != "") {
      obj[item.country_id] = item;
    }
    return obj
  }, {})
)}

function _25(md){return(
md`## Get data from the API`
)}

function _countries_raw(d3){return(
d3.json(
  "https://api.worldbank.org/v2/country?format=json&per_page=1000"
)
)}

function _total_final_energy_consumption_raw(d3){return(
d3.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/1.1_TOTAL.FINAL.ENERGY.CONSUM?date=2014%3A2014%26format=json%26per_page=1000")
)}

function _merchandice_exports_raw(d3){return(
d3.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/TX.VAL.MRCH.CD.WT?date=2014%3A2014%26format=json%26per_page=1000")
)}

function _primary_energy_use_pc_raw(d3){return(
d3.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/EG.USE.PCAP.KG.OE?date=2014%3A2014%26format=json%26per_page=1000")
)}

function _population_raw(d3){return(
d3.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?date=2014%3A2014%26format=json%26per_page=1000")
)}

function _id_to_country_raw(d3){return(
d3.json("https://raw.githubusercontent.com/alisle/world-110m-country-codes/master/world-110m-country-codes.json")
)}

function _tfec_def(d3){return(
d3.json("https://api.worldbank.org/v2/indicator/1.1_TOTAL.FINAL.ENERGY.CONSUM?format=json")
)}

function _pepc_def(d3){return(
d3.json("https://api.worldbank.org/v2/indicator/EG.USE.PCAP.KG.OE?format=json")
)}

function _34(md){return(
md`## Geodata`
)}

function _world(d3){return(
d3.json('https://vega.github.io/vega-datasets/data/world-110m.json')
)}

function _36(md){return(
md`## External libraries`
)}

function _d3(require){return(
require("d3@5")
)}

function _vega_embed(require){return(
require("vega-embed")
)}

function _vegalite(require){return(
require("@observablehq/vega-lite@0.2")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("intro")).define("intro", ["md","pepc_dict","tfec_dict","pepc_def","tfec_def"], _intro);
  main.variable(observer("metric_label_lookup")).define("metric_label_lookup", _metric_label_lookup);
  main.variable(observer("viewof metric")).define("viewof metric", ["select","metric_label_lookup"], _metric);
  main.variable(observer("metric")).define("metric", ["Generators", "viewof metric"], (G, _) => G.input(_));
  main.variable(observer("height")).define("height", ["width"], _height);
  main.variable(observer("country_map")).define("country_map", ["vega_embed","metric_label_lookup","metric","width","height","world","table_data_to_plot"], _country_map);
  main.variable(observer("bar_chart")).define("bar_chart", ["vega_embed","table_data_to_plot","metric","width","metric_label_lookup"], _bar_chart);
  main.variable(observer("styles")).define("styles", ["html"], _styles);
  main.variable(observer("sewha_comparison")).define("sewha_comparison", ["md"], _sewha_comparison);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("api_results_to_country_lookup_dict")).define("api_results_to_country_lookup_dict", _api_results_to_country_lookup_dict);
  main.variable(observer("pepc_dict")).define("pepc_dict", ["api_results_to_country_lookup_dict","primary_energy_use_pc_raw"], _pepc_dict);
  main.variable(observer("tfec_dict")).define("tfec_dict", ["api_results_to_country_lookup_dict","total_final_energy_consumption_raw"], _tfec_dict);
  main.variable(observer("exp_dict")).define("exp_dict", ["api_results_to_country_lookup_dict","merchandice_exports_raw"], _exp_dict);
  main.variable(observer("population_dict")).define("population_dict", ["api_results_to_country_lookup_dict","population_raw"], _population_dict);
  main.variable(observer("countries_dict")).define("countries_dict", ["countries_raw"], _countries_dict);
  main.variable(observer("countries_dict_iso2")).define("countries_dict_iso2", ["countries_raw"], _countries_dict_iso2);
  main.variable(observer("countries_to_id_dict")).define("countries_to_id_dict", ["id_to_country_raw"], _countries_to_id_dict);
  main.variable(observer("convert_kg_oil_eq_to_kwh")).define("convert_kg_oil_eq_to_kwh", _convert_kg_oil_eq_to_kwh);
  main.variable(observer("convert_tfec_to_kwh_per_capita")).define("convert_tfec_to_kwh_per_capita", _convert_tfec_to_kwh_per_capita);
  main.variable(observer("get_value_if_exists")).define("get_value_if_exists", _get_value_if_exists);
  main.variable(observer("table_data_to_plot")).define("table_data_to_plot", ["countries_to_id_dict","countries_dict_iso2","get_value_if_exists","pepc_dict","tfec_dict","population_dict","convert_kg_oil_eq_to_kwh","convert_tfec_to_kwh_per_capita"], _table_data_to_plot);
  main.variable(observer("final_data_lookup")).define("final_data_lookup", ["table_data_to_plot"], _final_data_lookup);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("countries_raw")).define("countries_raw", ["d3"], _countries_raw);
  main.variable(observer("total_final_energy_consumption_raw")).define("total_final_energy_consumption_raw", ["d3"], _total_final_energy_consumption_raw);
  main.variable(observer("merchandice_exports_raw")).define("merchandice_exports_raw", ["d3"], _merchandice_exports_raw);
  main.variable(observer("primary_energy_use_pc_raw")).define("primary_energy_use_pc_raw", ["d3"], _primary_energy_use_pc_raw);
  main.variable(observer("population_raw")).define("population_raw", ["d3"], _population_raw);
  main.variable(observer("id_to_country_raw")).define("id_to_country_raw", ["d3"], _id_to_country_raw);
  main.variable(observer("tfec_def")).define("tfec_def", ["d3"], _tfec_def);
  main.variable(observer("pepc_def")).define("pepc_def", ["d3"], _pepc_def);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("world")).define("world", ["d3"], _world);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("vega_embed")).define("vega_embed", ["require"], _vega_embed);
  main.variable(observer("vegalite")).define("vegalite", ["require"], _vegalite);
  const child1 = runtime.module(define1);
  main.import("select", child1);
  return main;
}
