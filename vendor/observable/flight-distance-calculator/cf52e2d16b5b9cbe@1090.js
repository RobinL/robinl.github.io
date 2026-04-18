// https://observablehq.com/@robinl/flight-distance-calculator@1090
import define1 from "./65265a2092377a48@68.js";
import define2 from "./35510f059fbb566b@520.js";

function _title(md){return(
md`# Flight distance calculator`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/flight_distance/).*`
)}

function _flights_list(html,options,get_icao_from_value)
{
  const dep_box = html`

         <input name="dep" type="text" autocomplete="off" 
          placeholder="Choose departure airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${options.map(d =>
                Object.assign(html`<option>`, {
                  value: d
                })
              )}
          </datalist>`;

  const arr_box = html`<input name="arr" type="text" autocomplete="off" 
          placeholder="Choose arrival airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${options.map(d =>
                Object.assign(html`<option>`, {
                  value: d
                })
              )}
          </datalist>`;

  const add_to_list = html`<input type="button" value="Add flight">`;
  const reset_list = html`<input type="button" value="Clear all flights">`;
  const empty_inputs = html`<input type="button" value="Clear current inputs">`;
  const switch_inputs = html`<input type="button" value="Switch departure and arrival airports">`;

  const div = html`<p>${dep_box} ${arr_box}<br/>${add_to_list}${reset_list}${empty_inputs}${switch_inputs}</p>`;

  add_to_list.onclick = () => {
    let dep_value = dep_box.children[0].value;
    let arr_value = arr_box.children[0].value;

    if (dep_value != "" && arr_value != "") {
      div.value.push([
        get_icao_from_value(dep_value),
        get_icao_from_value(arr_value)
      ]);
    } else {
      throw "Must select both a departure and arrival airport";
    }

    div.dispatchEvent(new CustomEvent('input'));
  };

  empty_inputs.onclick = () => {
    dep_box.children[0].value = "";
    arr_box.children[0].value = "";
  };

  switch_inputs.onclick = () => {
    let dval = dep_box.children[0].value;
    dep_box.children[0].value = arr_box.children[0].value;
    arr_box.children[0].value = dval;
  };

  reset_list.onclick = () => {
    div.value = [];
    dep_box.children[0].value = "";
    arr_box.children[0].value = "";
    div.dispatchEvent(new CustomEvent('input'));
  };
  div.value = [];
  return div;
}


function _selected_airports(flights_list,airports_icao_dict)
{
  return flights_list.map(d => [
    airports_icao_dict.get(d[0]),
    airports_icao_dict.get(d[1])
  ]);
}


function _table_of_distances(data_for_table,table,md)
{
  if (data_for_table.length > 0) {
    return table(data_for_table);
  } else {
    return md`Add a flight to display flight data here.`;
  }
}


function _blurb(data_for_table,md,fmt_num,total_flight_miles,fmt_num_round,total_energy_usage,tonnes_co2)
{
  if (data_for_table.length > 0) {
    return md`Your total flight distance is ${fmt_num(
      total_flight_miles
    )} miles.  If flying economy, this will have required around ${fmt_num_round(
      total_energy_usage
    )} kwh of energy, and the total co2 emissions will be around ${fmt_num_round(
      tonnes_co2
    )} tonnes. `;
  } else {
    return md``;
  }
}


function _selected_airports_with_distances(selected_airports,getDistanceFromLatLonInMiles)
{
  let sa = selected_airports.map(function(d) {
    let airport0 = d[0];
    let airport1 = d[1];

    let new_dict = {};

    new_dict["from"] = airport0.name;
    new_dict["to"] = airport1.name;

    for (const [key, value] of Object.entries(airport0)) {
      new_dict[key + "_from"] = value;
    }

    for (const [key, value] of Object.entries(airport1)) {
      new_dict[key + "_to"] = value;
    }
    let lat1 = new_dict["lat_from"];
    let lng1 = new_dict["lng_from"];
    let lat2 = new_dict["lat_to"];
    let lng2 = new_dict["lng_to"];

    new_dict["distance"] = getDistanceFromLatLonInMiles(lat1, lng1, lat2, lng2);

    return new_dict;
  });
  return sa;
}


function _data_for_table(selected_airports_with_distances,d3)
{
  let obj = selected_airports_with_distances.map(function(d) {
    return {
      from: d["name_from"],
      to: d["name_to"],
      miles: d3.format(",.0f")(d["distance"])
    };
  });
  return obj;
}


function _9(d3,selected_airports_with_distances){return(
d3.csvFormat(selected_airports_with_distances)
)}

function _download_as_csv(DOM,serialize,selected_airports_with_distances){return(
DOM.download(
  serialize(selected_airports_with_distances),
  "flights",
  "Download CSV"
)
)}

function _file_upload_blurb(md){return(
md`Bulk import previously created csv (needs at minimum \`icao_from\` and \`icao_to\` fields)`
)}

function _upload(html){return(
html`<input type=file accept="text/csv" >`
)}

async function _csv_data(Files,upload,d3,$0)
{
  const text = await Files.text(upload);
  const csv = d3.csvParse(text);

  $0.value = csv.map(d => [d["icao_from"], d["icao_to"]]);

  $0.dispatchEvent(new CustomEvent('input'));
}


function _flights_chart(chart,selected_airports_with_distances){return(
chart(selected_airports_with_distances)
)}

function _total_flight_miles(d3,selected_airports_with_distances){return(
d3.sum(selected_airports_with_distances, d => d.distance)
)}

function _total_energy_usage(eu,total_flight_miles){return(
eu.flying.flying_miles_to_kwh(total_flight_miles)
)}

function _kwh_to_kg_co2(eu){return(
function(kwh) {
  return kwh * eu.convert.per("kg_co2_from_jet_fuel/kwh");
}
)}

function _tonnes_co2(kwh_to_kg_co2,eu,total_flight_miles){return(
kwh_to_kg_co2(eu.flying.flying_miles_to_kwh(total_flight_miles))  /
  1000
)}

function _fmt_num(d3){return(
d3.format(",.0f")
)}

function _fmt_num_round(d3){return(
d3.format(",.2r")
)}

function _21(md){return(
md`### Modules & Imports`
)}

function _d3(require){return(
require("d3")
)}

function _eu(require){return(
require("@robinl/energy_usage@0.1.6")
)}

function _serialize(d3){return(
function serialize (data) {
 return new Blob([d3.csvFormat(data)], {type: "text/csv"}) 
}
)}

function _getDistanceFromLatLonInMiles(){return(
function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d * 0.621371; //to miles
}
)}

function _airports(d3){return(
d3
  .text(
    "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat"
  )
  .then(function(t) {
    var header = "id,name,city,country,iata,icao,lat,lng\n";

    let t2 = header + t;
    var data3 = d3.csvParse(t2, d3.autoType);

    return data3;
  })
)}

function _airports_icao_dict(airports){return(
new Map(airports.map(i => [i.icao, i]))
)}

function _options(airports){return(
airports.map(
  val => `${val.name} ${val.city} ${val.country} ${val.iata} (${val.icao})`
)
)}

function _get_icao_from_value(){return(
function(val) {
  var myRegexp = /\((\w{4})\)$/g;
  var match = myRegexp.exec(val);
  if (match) {
    return match[1];
  }
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof flights_list")).define("viewof flights_list", ["html","options","get_icao_from_value"], _flights_list);
  main.variable(observer("flights_list")).define("flights_list", ["Generators", "viewof flights_list"], (G, _) => G.input(_));
  main.variable(observer("selected_airports")).define("selected_airports", ["flights_list","airports_icao_dict"], _selected_airports);
  main.variable(observer("table_of_distances")).define("table_of_distances", ["data_for_table","table","md"], _table_of_distances);
  main.variable(observer("blurb")).define("blurb", ["data_for_table","md","fmt_num","total_flight_miles","fmt_num_round","total_energy_usage","tonnes_co2"], _blurb);
  main.variable(observer("selected_airports_with_distances")).define("selected_airports_with_distances", ["selected_airports","getDistanceFromLatLonInMiles"], _selected_airports_with_distances);
  main.variable(observer("data_for_table")).define("data_for_table", ["selected_airports_with_distances","d3"], _data_for_table);
  main.variable(observer()).define(["d3","selected_airports_with_distances"], _9);
  main.variable(observer("download_as_csv")).define("download_as_csv", ["DOM","serialize","selected_airports_with_distances"], _download_as_csv);
  main.variable(observer("file_upload_blurb")).define("file_upload_blurb", ["md"], _file_upload_blurb);
  main.variable(observer("viewof upload")).define("viewof upload", ["html"], _upload);
  main.variable(observer("upload")).define("upload", ["Generators", "viewof upload"], (G, _) => G.input(_));
  main.variable(observer("csv_data")).define("csv_data", ["Files","upload","d3","viewof flights_list"], _csv_data);
  main.variable(observer("flights_chart")).define("flights_chart", ["chart","selected_airports_with_distances"], _flights_chart);
  main.variable(observer("total_flight_miles")).define("total_flight_miles", ["d3","selected_airports_with_distances"], _total_flight_miles);
  main.variable(observer("total_energy_usage")).define("total_energy_usage", ["eu","total_flight_miles"], _total_energy_usage);
  main.variable(observer("kwh_to_kg_co2")).define("kwh_to_kg_co2", ["eu"], _kwh_to_kg_co2);
  main.variable(observer("tonnes_co2")).define("tonnes_co2", ["kwh_to_kg_co2","eu","total_flight_miles"], _tonnes_co2);
  main.variable(observer("fmt_num")).define("fmt_num", ["d3"], _fmt_num);
  main.variable(observer("fmt_num_round")).define("fmt_num_round", ["d3"], _fmt_num_round);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  const child1 = runtime.module(define1);
  main.import("chart", child1);
  const child2 = runtime.module(define2);
  main.import("table", child2);
  main.variable(observer("serialize")).define("serialize", ["d3"], _serialize);
  main.variable(observer("getDistanceFromLatLonInMiles")).define("getDistanceFromLatLonInMiles", _getDistanceFromLatLonInMiles);
  main.variable(observer("airports")).define("airports", ["d3"], _airports);
  main.variable(observer("airports_icao_dict")).define("airports_icao_dict", ["airports"], _airports_icao_dict);
  main.variable(observer("options")).define("options", ["airports"], _options);
  main.variable(observer("get_icao_from_value")).define("get_icao_from_value", _get_icao_from_value);
  return main;
}
