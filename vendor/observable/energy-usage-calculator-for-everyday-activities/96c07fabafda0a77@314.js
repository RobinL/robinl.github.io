function _1(md){return(
md`# Energy usage treemap and summary`
)}

function _summary_text(get_total,md,format){return(
function(data) {
  let total_energy = get_total(data)
  let watts = (total_energy/24)*1000
  return md`You use a total of __${format(total_energy)} kilowatt hours__ of energy a day from the activities covered on this webpage. This means your average power consumption is ${format(watts)} watts. `
}
)}

function _get_total(){return(
function get_total(data) {
return data.reduce((a,b) => a+b.value, 0)
}
)}

function _my_data(){return(
[{name: "Showers", value: 2.5104}, {name: "Driving", value: 26.293975646879755}, {name: "Flying", value: 13.425863835616436}, {name: "Washing machine", value: 4.19999999999999998}, {name: "Dishwasher", value: 0.6}, {name: "Food/Eating", value: 23.303485333333334}, {name: "Dogs", value: 0.86730602373828}]
)}

function _5(treemap_chart,my_data){return(
treemap_chart(my_data)
)}

function _treemap_chart(treemap,d3,grid_size,format,DOM,per_fmt){return(
function(my_data, svg_width=640, clip_width=true) {
  
    if ((svg_width > 640) & clip_width) {
    svg_width = 640
    }
  
  let my_data_nested = {"name": "root", "children" : my_data}
  
  const root = treemap(my_data_nested, svg_width);
 
  let colorScale = d3.scaleOrdinal().range(d3.schemeCategory10).domain(["Driving", "Flying", "Heating", "Stuff", "Showers", "Food/Eating", "Washing machine", "Dishwasher", "Dogs"])
  
  const total_kwh = my_data.reduce((a,b) => a + b["value"],0)
  
  const total_size  = (grid_size * grid_size) * total_kwh
  
  let height = (total_size / svg_width);
  console.log(total_kwh)
  console.log(total_size)
  console.log(height)
  console.log(svg_width)
  
  const svg = d3.create("svg")
      .attr("width", svg_width)
  .attr("height", height)
      .style("font", "10px sans-serif");

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

  leaf.append("title")
      .text(d => `${d.ancestors().reverse().map(d => d.data.name).join("/")}\n${format(d.value)}`);

  leaf.append("rect")
      .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
      .attr("fill", d => { while (d.depth > 1) d = d.parent; return colorScale(d.data.name); })
      .attr("fill-opacity", 0.7)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0);

  leaf.append("clipPath")
      .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    .append("use")
      .attr("xlink:href", d => d.leafUid.href);

  leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)+ " kwh").concat(per_fmt(d.value/d.parent.value)))
    .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
      .text(d => d);

  return svg.node();
}
)}

function _grid_size(){return(
22
)}

function _treemap(grid_size,d3){return(
function(data, chart_width) {

  const total_kwh = data["children"].reduce((a,b) => a + b["value"],0)
  
  const total_size  = (grid_size * grid_size) * total_kwh
  
  let height = total_size / chart_width;
  
    console.log('-- from treemap')
  console.log(total_kwh)
  console.log(total_size)
  console.log(height)
    console.log('--')
  
  return d3.treemap()
    .tile(d3["treemapBinary"])
    .size([chart_width, height])
    .padding(1)
    .round(true)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))
}
)}

function _format(d3){return(
d3.format(",.3r")
)}

function _per_fmt(d3){return(
d3.format(",.1%")
)}

function _color(d3){return(
d3.scaleOrdinal(d3.schemeCategory10)
)}

function _d3(require){return(
require("d3@5")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("summary_text")).define("summary_text", ["get_total","md","format"], _summary_text);
  main.variable(observer("get_total")).define("get_total", _get_total);
  main.variable(observer("my_data")).define("my_data", _my_data);
  main.variable(observer()).define(["treemap_chart","my_data"], _5);
  main.variable(observer("treemap_chart")).define("treemap_chart", ["treemap","d3","grid_size","format","DOM","per_fmt"], _treemap_chart);
  main.variable(observer("grid_size")).define("grid_size", _grid_size);
  main.variable(observer("treemap")).define("treemap", ["grid_size","d3"], _treemap);
  main.variable(observer("format")).define("format", ["d3"], _format);
  main.variable(observer("per_fmt")).define("per_fmt", ["d3"], _per_fmt);
  main.variable(observer("color")).define("color", ["d3"], _color);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
