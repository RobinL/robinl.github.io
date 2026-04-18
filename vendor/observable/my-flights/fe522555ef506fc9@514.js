// https://observablehq.com/@robinl/my-flights@514
function _title(md,diff_years,start_end_date){return(
md`# ${diff_years(
  start_end_date[1],
  start_end_date[0]
)} years of flights`
)}

function _2(md){return(
md`A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/flights/).`
)}

function _blurb(md,format_date,start_end_date,routes,fmt_num,average_miles,total_miles,fmt_num_round,eu,tonnes_co2){return(
md`Between ${format_date(start_end_date[0])} and ${format_date(
  start_end_date[1]
)} I took ${routes.length} flights with and average distance of ${fmt_num(
  average_miles
)} miles, and total milage of ${fmt_num(
  total_miles
)}.  Total energy usage was around ${fmt_num_round(
  eu.flying.flying_miles_to_kwh(total_miles)
)} kwh or ${fmt_num_round(tonnes_co2)} tonnes of co2.

You can drag the globe below to rotate.`
)}

function _chart(DOM,width,height,d3,projection,sphere,land,routes,resample,colour_scale,drag)
{
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);

  function render() {
    context.clearRect(0, 0, width, height);

    context.beginPath(),
      path(sphere),
      (context.fillStyle = "#fff"),
      context.fill();

    context.beginPath(),
      path(land),
      (context.fillStyle = "#000"),
      context.fill();

    context.beginPath(), path(sphere), context.stroke();

    routes.forEach(function(d) {
      let coordinates = [
        [d["lng_from"], d["lat_from"]],
        [d["lng_to"], d["lat_to"]]
      ];

      let resampled = resample(coordinates);

      let mid_point_with_drift = [
        resampled["after"][1][0] + d["random"],
        resampled["after"][1][1] + d["random"]
      ];

      resampled["after"][1] = mid_point_with_drift;

      let route = {
        type: "LineString",
        coordinates: resampled["after"]
      };
      context.lineWidth = 1;
      context.lineO;
      context.beginPath(),
        path(route),
        (context.strokeStyle = colour_scale(d["date"])),
        context.stroke();
    });

    context.lineWidth = 1;
    context.strokeStyle = "#000000";
  }

  return d3
    .select(context.canvas)
    .call(drag(projection).on("drag.render", render))
    .call(render)
    .node();
}


function _projection(d3,width,height,sphere){return(
d3
  .geoOrthographic()
  .fitExtent([[1, 1], [width - 1, height - 1]], sphere)
  .translate([width / 2, height / 2])
  .rotate([0, -51])
  .precision(0.1)
)}

function _tonnes_co2(kwh_to_kg_co2,eu,total_miles){return(
kwh_to_kg_co2(eu.flying.flying_miles_to_kwh(total_miles)) / 1000
)}

function _kwh_to_kg_co2(eu){return(
function(kwh) {
  return kwh * eu.convert.per("kg_co2_jet_fuel/kwh");
}
)}

function _total_miles(d3,routes){return(
d3.sum(routes, d => d["distance"])
)}

function _average_miles(d3,routes){return(
d3.mean(routes, d => d["distance"])
)}

function _eu(require){return(
require("@robinl/energy_usage@0.0.34")
)}

function _start_end_date(d3,routes){return(
d3.extent(routes, d => d["date"])
)}

function _fmt_num(d3){return(
d3.format(",.0f")
)}

function _fmt_num_round(d3){return(
d3.format(",.2r")
)}

function _diff_years(){return(
function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
}
)}

function _format_date(){return(
d => d.toISOString().split('T')[0]
)}

function _colour_scale(d3,routes){return(
d3
  .scaleSequential(d3.interpolateOrRd)
  .domain(d3.extent(routes, d => d["date"]))
)}

function _resample(projection,d3){return(
function resample(coordinates) {
  var i = 0,
    n = coordinates.length,
    before = [],
    after = [];
  while (++i < n) {
    var c0 = coordinates[i - 1].slice(),
      c1 = coordinates[i].slice(),
      p0 = projection(c0),
      p1 = projection(c1),
      x10 = p1[0] - p0[0],
      y10 = p1[1] - p0[1],
      d1 = x10 * x10 + y10 * y10;
    before.push(c0);
    after.push(c0);
    if (d1 > 4 * .1) {
      // linear distance check
      var c2 = d3.geoInterpolate(c0, c1)(.5),
        p2 = projection(c2),
        x20 = p2[0] - p0[0],
        y20 = p2[1] - p0[1],
        dz = y10 * x20 - x10 * y20;
      if ((dz * dz) / d1 > .1) {
        // perpendicular distance check
        var t = (x20 * x10 + y20 * y10) / d1;
        before.push(
          projection.invert((c2.resampled = [p0[0] + t * x10, p0[1] + t * y10]))
        );
        after.push(c2);
      }
    }
  }
  if (n) before.push(c1), after.push(c1);
  return { before: before, after: after };
}
)}

function _drag(versor,d3){return(
function drag(projection) {
  let v0, q0, r0;
  
  function dragstarted() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)));
    q0 = versor(r0 = projection.rotate());
  }
  
  function dragged() {
    const v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    projection.rotate(versor.rotation(q1));
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged);
}
)}

function _height(width){return(
width
)}

function _sphere(){return(
{type: "Sphere"}
)}

function _land(topojson,world){return(
topojson.feature(world, world.objects.land)
)}

function _world(d3){return(
d3.json("https://unpkg.com/world-atlas@1/world/110m.json")
)}

function _versor(require){return(
require("versor@0.0.3")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _d3(require){return(
require("d3@5")
)}

function _routes_raw(d3){return(
d3.csv("https://gist.githubusercontent.com/RobinL/ba3acbf42349115ed266a98643eb5a80/raw/a603b1fec071383d6a3eb27cbcda789c54cb0014/my_flights.csv", d3.autoType)
)}

function _routes(routes_raw){return(
routes_raw.map(d => {
  d["random"] = ((Math.random() - 0.5) * d["distance"]) / 1000;
  return d;
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md","diff_years","start_end_date"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("blurb")).define("blurb", ["md","format_date","start_end_date","routes","fmt_num","average_miles","total_miles","fmt_num_round","eu","tonnes_co2"], _blurb);
  main.variable(observer("chart")).define("chart", ["DOM","width","height","d3","projection","sphere","land","routes","resample","colour_scale","drag"], _chart);
  main.variable(observer("projection")).define("projection", ["d3","width","height","sphere"], _projection);
  main.variable(observer("tonnes_co2")).define("tonnes_co2", ["kwh_to_kg_co2","eu","total_miles"], _tonnes_co2);
  main.variable(observer("kwh_to_kg_co2")).define("kwh_to_kg_co2", ["eu"], _kwh_to_kg_co2);
  main.variable(observer("total_miles")).define("total_miles", ["d3","routes"], _total_miles);
  main.variable(observer("average_miles")).define("average_miles", ["d3","routes"], _average_miles);
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  main.variable(observer("start_end_date")).define("start_end_date", ["d3","routes"], _start_end_date);
  main.variable(observer("fmt_num")).define("fmt_num", ["d3"], _fmt_num);
  main.variable(observer("fmt_num_round")).define("fmt_num_round", ["d3"], _fmt_num_round);
  main.variable(observer("diff_years")).define("diff_years", _diff_years);
  main.variable(observer("format_date")).define("format_date", _format_date);
  main.variable(observer("colour_scale")).define("colour_scale", ["d3","routes"], _colour_scale);
  main.variable(observer("resample")).define("resample", ["projection","d3"], _resample);
  main.variable(observer("drag")).define("drag", ["versor","d3"], _drag);
  main.variable(observer("height")).define("height", ["width"], _height);
  main.variable(observer("sphere")).define("sphere", _sphere);
  main.variable(observer("land")).define("land", ["topojson","world"], _land);
  main.variable(observer("world")).define("world", ["d3"], _world);
  main.variable(observer("versor")).define("versor", ["require"], _versor);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("routes_raw")).define("routes_raw", ["d3"], _routes_raw);
  main.variable(observer("routes")).define("routes", ["routes_raw"], _routes);
  return main;
}
