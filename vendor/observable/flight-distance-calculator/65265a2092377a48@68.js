// https://observablehq.com/@robinl/flights-globe-chart-function@68
function _1(md){return(
md`# Flights globe chart function`
)}

function _chart(DOM,width,height,d3,projection,sphere,land,resample,drag){return(
function(routes) {
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);

  let colour_scale = d3
    .scaleSequential(d3.interpolateOrRd)
    .domain(d3.extent(routes, d => d["distance"]));

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
        resampled["after"][1][0] + (d["lat_from"] + d["lng_to"]) / 100,
        resampled["after"][1][1] + (d["lat_from"] + d["lng_to"]) / 100
      ];

      resampled["after"][1] = mid_point_with_drift;

      let route = {
        type: "LineString",
        coordinates: resampled["after"]
      };
      context.lineWidth = 1.5;
      context.lineO;
      context.beginPath(),
        path(route),
        (context.strokeStyle = colour_scale(d["distance"])),
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
)}

function _4(md){return(
md`Imports`
)}

function _d3(require){return(
require("d3@5")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _world(d3){return(
d3.json("https://unpkg.com/world-atlas@1/world/110m.json")
)}

function _land(topojson,world){return(
topojson.feature(world, world.objects.land)
)}

function _drag(versor,d3){return(
function drag(projection) {
  let v0, q0, r0;

  function dragstarted() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)));
    q0 = versor((r0 = projection.rotate()));
  }

  function dragged() {
    const v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    projection.rotate(versor.rotation(q1));
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged);
}
)}

function _height(width){return(
width * 0.6
)}

function _projection(d3,width,height,sphere){return(
d3
  .geoEqualEarth()
  .fitExtent([[1, 1], [width - 1, height - 1]], sphere)
  .translate([width / 2, height / 2])
  .rotate([0, 0])
  .precision(0.1)
)}

function _sphere(){return(
{ type: "Sphere" }
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

function _versor(require){return(
require("versor@0.0.3")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("chart")).define("chart", ["DOM","width","height","d3","projection","sphere","land","resample","drag"], _chart);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("world")).define("world", ["d3"], _world);
  main.variable(observer("land")).define("land", ["topojson","world"], _land);
  main.variable(observer("drag")).define("drag", ["versor","d3"], _drag);
  main.variable(observer("height")).define("height", ["width"], _height);
  main.variable(observer("projection")).define("projection", ["d3","width","height","sphere"], _projection);
  main.variable(observer("sphere")).define("sphere", _sphere);
  main.variable(observer("resample")).define("resample", ["projection","d3"], _resample);
  main.variable(observer("versor")).define("versor", ["require"], _versor);
  return main;
}
