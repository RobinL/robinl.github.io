// https://observablehq.com/@robinl/map-fill-component-second-attempt@727
function _1(md){return(
md`#  Map fill component second attempt`
)}

function _projection(d3,width,height,uk){return(
d3.geoAlbers()
    .rotate([4.4, 0])
    .parallels([50, 60])
     .fitExtent([[20, 0], [width, height]], {"type": "FeatureCollection", "features":uk.features})
)}

function _plot_fill_percentage_of_uk(d3,DOM,width,height,yAxis,projection,uk,perc_to_lat_scale,turf){return(
function plot_fill_percentage_of_uk(perc){
 
  const svg = d3.select(DOM.svg(width, height))
      .style("width", width)
      .style("height", height);
  
//   svg.append("defs")
//      .append('pattern')
//      .attr('id', 'locked2')
//      .attr('patternUnits', 'userSpaceOnUse')
//      .attr('width', 294/2)
//      .attr('height', 146/2)
//      .append("image")
//      .attr("xlink:href", "https://raw.githubusercontent.com/RobinL/cheatsheets_etc/master/solar.png")
//      .attr('width', 294/2)
//      .attr('height', 146/2);
  
 svg.append("g")
      .call(yAxis);

  var path = d3.geoPath()
    .projection(projection)
    


  svg.selectAll(".outline")
      .data(uk.features)
    .enter().append("path")
      .attr("class", function(d) { return "subunit " + d.id; })
      .attr("stroke", function(d) {
         return "black"
      })
    .attr("fill", "none")
    .attr("stroke-width", 1)
    .attr("d", path)
  
  
 
  let lat_cut = perc_to_lat_scale(perc)
  var bbox = [-20, 50, 10, lat_cut];


  var bottom_geo = turf.bboxClip(uk.features["0"], bbox)

   

  svg.selectAll(".sliced")
      .data([bottom_geo])
    .enter().append("path")
      .attr("class", function(d) { return "subunit " + d.id; })
      .attr("fill", "green")
    .attr("d", path)
  

  return svg.node();
}
)}

function _4(md){return(
md`## Scale and axis`
)}

function _yAxis(d3,perc_to_pix_scale,width){return(
svg => svg
    .attr("transform", `translate(0,0)`)
    .call(d3.axisRight(perc_to_pix_scale)
        .tickSize(width ).tickFormat(d3.format(".0p"))
        )
    .call(g => g.select(".domain")
        .remove())
    .call(g => g.selectAll(".tick line")
        .attr("stroke-opacity", 0.2))
    .call(g => g.selectAll(".tick text")
        .attr("x", 4)
        .attr("dy", -4))
)}

function _perc_to_pix_scale(table,d3)
{
  let domain = table.map(d =>  d["proportion"])
  let range = table.map(d =>  d["pix"][1])
  
  return d3.scaleLinear().domain(domain).range(range)
                         
}


function _perc_to_lat_scale(table,d3)
{
  let domain = table.map(d =>  d["proportion"])
  let range = table.map(d =>  d["lat"])
  
  return d3.scaleLinear().domain(domain).range(range)
                         
}


function _8(md){return(
md`## Geographies`
)}

function _uk_json(d3){return(
d3.json("https://gist.githubusercontent.com/RobinL/d1fd489f864f3e0a6f3061b5e48e02c0/raw/ff42f61974b49a4133a6f3a07ce876257995ab15/uk_topo.json")
)}

function _uk(topojson,uk_json){return(
topojson.feature(uk_json, uk_json.objects.uk)
)}

function _table(turf,uk,d3,projection)
{

    let extent = turf.bbox(uk)
    let min_lat = extent[1]
    let max_lat = extent[3]

    let delta = 0.3
    let scale_values = d3.range(min_lat, max_lat + delta, delta).map(function(d) {
  
  
      let area = turf.area(uk)
      let area_sq_miles = turf.convertArea(area, "meters", "miles")

       // minX, minY, maxX, maxY
      var bbox = [-20, 50, 10, d];
      var bbox_rest = [-20, d, 10, 70];

      var bottom = turf.bboxClip(uk.features["0"], bbox)

      let area_bottom = turf.area(bottom)

      let area_sq_miles_bottom = turf.convertArea(area_bottom, "meters", "miles")
      
      if (d >= max_lat) {
        area_sq_miles_bottom = area_sq_miles
      }

      return {
        "area_sq_miles": area_sq_miles, 
        "area_sq_miles_bottom": area_sq_miles_bottom, 
        "proportion": area_sq_miles_bottom/area_sq_miles, 
        "lat": d,
        "pix":projection([ 0, d])
    }
  })
     
  return scale_values
     
   
                                           
}


function _12(md){return(
md`## Size`
)}

function _height(){return(
600
)}

function _width(height,width_to_height_ratio){return(
height * width_to_height_ratio
)}

function _width_to_height_ratio(){return(
0.5373256204432791
)}

function _16(md){return(
md`### Imports`
)}

function _d3(require){return(
require("d3")
)}

function _topojson(require){return(
require("topojson")
)}

function _turf(require){return(
require("@turf/turf@5")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("projection")).define("projection", ["d3","width","height","uk"], _projection);
  main.variable(observer("plot_fill_percentage_of_uk")).define("plot_fill_percentage_of_uk", ["d3","DOM","width","height","yAxis","projection","uk","perc_to_lat_scale","turf"], _plot_fill_percentage_of_uk);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("yAxis")).define("yAxis", ["d3","perc_to_pix_scale","width"], _yAxis);
  main.variable(observer("perc_to_pix_scale")).define("perc_to_pix_scale", ["table","d3"], _perc_to_pix_scale);
  main.variable(observer("perc_to_lat_scale")).define("perc_to_lat_scale", ["table","d3"], _perc_to_lat_scale);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("uk_json")).define("uk_json", ["d3"], _uk_json);
  main.variable(observer("uk")).define("uk", ["topojson","uk_json"], _uk);
  main.variable(observer("table")).define("table", ["turf","uk","d3","projection"], _table);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("width")).define("width", ["height","width_to_height_ratio"], _width);
  main.variable(observer("width_to_height_ratio")).define("width_to_height_ratio", _width_to_height_ratio);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("turf")).define("turf", ["require"], _turf);
  return main;
}
