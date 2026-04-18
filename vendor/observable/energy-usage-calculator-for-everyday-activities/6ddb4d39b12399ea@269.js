import define1 from "./7764a40fe6b83ca1@437.js";

function _1(md){return(
md`# Energy usage in different countries`
)}

function _2(md){return(
md`[Sustainable Energy Without the Hot Air](http://www.inference.org.uk/sustainable/book/tex/sewtha.pdf) contains charts of energy consumption of different countries.  See pages 231 and 105.  See page 381 for the conversion of barrels of oil to kwh.

This data is sourced from [UNDP Human Development Report, 2007](http://hdr.undp.org/sites/default/files/reports/268/hdr_20072008_en_complete.pdf), see table 23 page  306.  It is based on [Total primary
energy supply](https://en.wikipedia.org/wiki/Primary_energy)`
)}

function _3(md){return(
md`https://datacatalog.worldbank.org/energy-use-kg-oil-equivalent-capita-1
https://datacatalog.worldbank.org/total-final-energy-consumption-tfec

Not clear from either measure what it contains -e.g. presumably it doesn't contain energy embodied in imported goods?
`
)}

function _d3(require){return(
require("d3")
)}

function _5(md){return(
md`Data comes from a custom report generated from the World Development Indicators, [here](https://databank.worldbank.org/reports.aspx?source=world-development-indicators#)`
)}

function _url(){return(
"https://gist.githubusercontent.com/RobinL/f9d478dadd70ec2dda67c1e9e91686f1/raw/1d628cb38f3d693052bf6bf5eedcb4126bf34a25/energy_usage.csv"
)}

function _data(d3,url){return(
d3.csv(url, d3.autoType)
)}

function _nonnull_data(data){return(
data.filter(d => d["2014 [YR2014]"] != "..")
)}

function _data_by_country(nonnull_data){return(
nonnull_data.map(function(d) {
  let ret = {}
  ret["2014_kg_oil_equiv_per_capita"] = d["2014 [YR2014]"]
  ret["country"] = d["Country Name"]
  ret["code"] = d["Country Code"]
  return ret
})
)}

function _data_with_kwh(data_by_country){return(
data_by_country.map(function(d) {
  d["kwh_per_day"] = (d["2014_kg_oil_equiv_per_capita"]*11.63)/365; 
  return {"kwh_per_day":d["kwh_per_day"],
         "code": d["code"],
         "country": d["country"]}
})
)}

function _countries(){return(
["USA", "GBR", "CHN", "FRA", "BRA", "IND", "AUS"]
)}

function _selected_countries(data_with_kwh,countries){return(
data_with_kwh.filter(d =>  countries.includes(d["code"]))
)}

function _13(selected_countries){return(
JSON.stringify(selected_countries)
)}

function _primary_energy_use_data_pc(d3){return(
d3.json(
  "https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/USA;GBR;CHN;FRA;BRA;IND;AUS/indicators/EG.USE.PCAP.KG.OE?date=2014%3A2014%26format=json%26per_page=1000"
)
)}

function _tfec_data(d3){return(
d3.json(
  "https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/USA;GBR;CHN;FRA;BRA;IND;AUS/indicators/1.1_TOTAL.FINAL.ENERGY.CONSUM?date=2014%3A2014%26format=json%26per_page=1000"
)
)}

function _population_data(d3){return(
d3.json(
  "https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/USA;GBR;CHN;FRA;BRA;IND;AUS/indicators/SP.POP.TOTL?date=2014%3A2014%26format=json%26per_page=1000"
)
)}

function _final_energy_use_per_capita_data(tfec_data,population_data)
{
  return [0,1,2,3,4,5,6].map(function(i) {
    let country_code = tfec_data[1][i]["country"]["id"]
    let country_name =  tfec_data[1][i]["country"]["value"]
    // let total_energy_consumption_kg_of_oil_eq = tfec_data[1][i]["value"]
    // let total_energy_consumption_kwh = total_energy_consumption_kg_of_oil_eq * 11.63
    let total_energy_consumption_terajoules = tfec_data[1][i]["value"]
    let total_population = population_data[1][i]["value"]
    let kwh_per_capita = total_energy_consumption_terajoules*1e12/(total_population*3600000)
    return {"code": country_code, "country": country_name, "kwh_per_day":kwh_per_capita/365.25}
  }
    ) 
}


function _primary_energy_use_per_capita_data(primary_energy_use_data_pc)
{
  let api_data = primary_energy_use_data_pc[1]
  let mapped = api_data.map(function(d) {
  d["kwh_per_day"] = (d["value"]*11.63)/365; 
  return {"kwh_per_day":d["kwh_per_day"],
         "code": d["country"]["id"],
         "country": d["country"]["value"]}
})
  return mapped
}


function _vega_embed(require){return(
require("vega-embed@3")
)}

function _primary_energy_use_per_capita(vega_embed,primary_energy_use_per_capita_data){return(
vega_embed({
  data: {values: primary_energy_use_per_capita_data},
  mark: "bar",
  encoding: {
    x: {field: "country", type: "nominal", sort: {field:"kwh_per_day", op: "mean", order: "descending"}},
    y: {field: "kwh_per_day", type: "quantitative"}
  }
})
)}

function _final_energy_use_per_capita(vega_embed,final_energy_use_per_capita_data){return(
vega_embed({
  data: {values: final_energy_use_per_capita_data},
  mark: "bar",
  encoding: {
    x: {field: "country", type: "nominal", sort: {field:"kwh_per_day", op: "mean", order: "descending"}},
    y: {field: "kwh_per_day", type: "quantitative"}
  }
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("url")).define("url", _url);
  main.variable(observer("data")).define("data", ["d3","url"], _data);
  main.variable(observer("nonnull_data")).define("nonnull_data", ["data"], _nonnull_data);
  main.variable(observer("data_by_country")).define("data_by_country", ["nonnull_data"], _data_by_country);
  main.variable(observer("data_with_kwh")).define("data_with_kwh", ["data_by_country"], _data_with_kwh);
  main.variable(observer("countries")).define("countries", _countries);
  main.variable(observer("selected_countries")).define("selected_countries", ["data_with_kwh","countries"], _selected_countries);
  main.variable(observer()).define(["selected_countries"], _13);
  main.variable(observer("primary_energy_use_data_pc")).define("primary_energy_use_data_pc", ["d3"], _primary_energy_use_data_pc);
  main.variable(observer("tfec_data")).define("tfec_data", ["d3"], _tfec_data);
  main.variable(observer("population_data")).define("population_data", ["d3"], _population_data);
  main.variable(observer("final_energy_use_per_capita_data")).define("final_energy_use_per_capita_data", ["tfec_data","population_data"], _final_energy_use_per_capita_data);
  main.variable(observer("primary_energy_use_per_capita_data")).define("primary_energy_use_per_capita_data", ["primary_energy_use_data_pc"], _primary_energy_use_per_capita_data);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer("vega_embed")).define("vega_embed", ["require"], _vega_embed);
  main.variable(observer("primary_energy_use_per_capita")).define("primary_energy_use_per_capita", ["vega_embed","primary_energy_use_per_capita_data"], _primary_energy_use_per_capita);
  main.variable(observer("final_energy_use_per_capita")).define("final_energy_use_per_capita", ["vega_embed","final_energy_use_per_capita_data"], _final_energy_use_per_capita);
  return main;
}
