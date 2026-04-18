function _1(md){return(
md`# Unit chart`
)}

function _d3(require){return(
require('d3@5', "d3-scale-chromatic@^1.4.0")
)}

function _data(slider)
{return {"label a": 15.5, "b stuff": 42.2, "c another label": slider}}


function _get_d3_data(){return(
function get_d3_data(data) {
  
  // Turn dict into array sorted by size 
  let data_array = Object.keys(data).map(key => { return {"key":key, "value": data[key]}})
  data_array.sort((a,b) => b["value"]-a["value"])

  
  function get_map(d) {
    
    let value = d["value"]
    let num_squares = Math.ceil(value)

    let items = Array(num_squares).fill(0)
    
    items = items.map(function(d2,i) {
      return {"key": d["key"],
        "value": (i + 1 > value) ?  value-i :  1}})
        
    return items
  }
  
  let squares = data_array.map(get_map).flat()
                                          
  return squares

}
)}

function _slider(html){return(
html`<input type=range min=0 max=100 step=0.25>`
)}

function _d3_data(get_d3_data,data){return(
get_d3_data(data)
)}

function _7(unit_chart,data){return(
unit_chart(data)
)}

function _unit_chart(width,get_d3_data,d3,DOM){return(
function unit_chart(data, clip_width = true) {
  let svg_width = width;
  if ((width > 640) & clip_width) {
    svg_width = 640;
  }

  const GRID_SIZE = 20;
  const GAP_SIZE = 4;
  const SQUARE_SIZE = GRID_SIZE - GAP_SIZE;

  let d3_data = get_d3_data(data);

  const margin = { top: 0, right: 20, bottom: 0, left: 0 };

  const viswidth = svg_width - margin.left - margin.right;

  // Compute the height of the graphic.
  const total_squares = d3_data.reduce((a, b) => a + b["value"], 0);
  const num_squares_in_width = Math.floor(viswidth / GRID_SIZE);
  const height_of_squares =
    Math.ceil(total_squares / num_squares_in_width) * GRID_SIZE;

  // If text is destined to be in the penultimate four squares on the right, put on next line
  const squares_on_final_row = total_squares % num_squares_in_width;

  let text_on_final_line = num_squares_in_width - squares_on_final_row < 7;

  let additional_height_for_text = 0;
  if (text_on_final_line) {
    additional_height_for_text = GRID_SIZE;
  }

  const svg_height =
    height_of_squares + additional_height_for_text + margin.top + margin.bottom;

  const height = svg_height - margin.top - margin.bottom;

  let colorScale = d3
    .scaleOrdinal()
    .range(d3.schemeCategory10)
    .domain([
      "Driving",
      "Flying",
      "Heating",
      "Stuff",
      "Showers",
      "Food/Eating",
      "Washing machine",
      "Dishwasher",
      "Dogs"
    ]);

  let svg = d3.select(
    DOM.svg(
      viswidth + margin.left + margin.right,
      height + margin.top + margin.bottom
    )
  );

  let svg_group = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Colored rectangles
  svg_group
    .selectAll("c_rect")
    .data(d3_data) // Joins arrayOfNumbers with DOM <rect/> elements, producing .enter(),.exit() selections
    .enter() // Returns the portion of the data which is new ("entering") and not yet bound to DOM elements
    .append("rect") // For each, append a <circle /> to selected svg
    .attr("x", (d, i) => (i % num_squares_in_width) * GRID_SIZE)
    .attr("y", (d, i) => Math.floor(i / num_squares_in_width) * GRID_SIZE)
    .attr("width", (d) => d.value * SQUARE_SIZE) // Set each cirlces x position using its index in the array
    .attr("height", SQUARE_SIZE) // Set each circles y position (cy is short for 'y coordinate of the circle's center')
    .attr("fill", (d) => colorScale(d["key"]));

  // Grid
  svg_group
    .selectAll("g_rect")
    .data(d3_data) // Joins arrayOfNumbers with DOM <rect/> elements, producing .enter(),.exit() selections
    .enter() // Returns the portion of the data which is new ("entering") and not yet bound to DOM elements
    .append("rect") // For each, append a <circle /> to selected svg
    .attr("x", (d, i) => (i % num_squares_in_width) * GRID_SIZE)
    .attr("y", (d, i) => Math.floor(i / num_squares_in_width) * GRID_SIZE)
    .attr("width", (d) => SQUARE_SIZE) // Set each cirlces x position using its index in the array
    .attr("height", SQUARE_SIZE) // Set each circles y position (cy is short for 'y coordinate of the circle's center')
    .attr("stroke", "gray")
    .attr("stroke-width", 0.5)
    .attr("fill", "none");

  // Total text
  let total =
    d3_data.reduce((a, b) => a + b["value"], 0).toFixed(1) + " kwh/day";

  // Position of text
  let text_x_position = 0;
  if (!text_on_final_line) {
    text_x_position =
      ((d3_data.length - 1) % num_squares_in_width) * GRID_SIZE + GRID_SIZE;
  }

  let text_y_position =
    Math.floor((d3_data.length - 1) / num_squares_in_width) * GRID_SIZE;

  if (text_on_final_line) {
    text_y_position += GRID_SIZE;
  }

  svg_group
    .append("text")
    .attr("x", text_x_position)
    .attr("dx", 2)
    .attr("y", text_y_position)
    .attr("dy", GRID_SIZE / 2)
    .style("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .style("font-size", "1em")
    .text(total);

  // Once we append the vis elments to it, we return the DOM element for Observable to display above.
  return svg.node();
}
)}

function _9(unit_chart_2,data){return(
unit_chart_2(data)
)}

function _unit_chart_2(width,get_d3_data,munge_data,d3,DOM){return(
function unit_chart_2(data, clip_width = true) {
  let svg_width = width;
  if ((width > 640) & clip_width) {
    svg_width = 640;
  }

  const GRID_SIZE = 20;
  const GAP_SIZE = 4;
  const SQUARE_SIZE = GRID_SIZE - GAP_SIZE;
  const CATEGORY_GAP = 2;

  let squares_data = get_d3_data(data);

  const margin = { top: 0, right: 20, bottom: 0, left: 100 };

  const viswidth = svg_width - margin.left - margin.right;

  // Compute the height of the graphic.
  const total_squares = squares_data.reduce((a, b) => a + b["value"], 0);
  const num_squares_in_width = Math.floor(viswidth / GRID_SIZE);

  let d3_data = munge_data(squares_data, num_squares_in_width);

  let text_positions = d3
    .nest()
    .key(function (d) {
      return d.key;
    })
    .rollup((d) => d3.extent(d, (d) => d["y"]))
    .entries(d3_data);

  const height_of_squares = (d3_data.slice(-1)[0]["y"] + 1) * GRID_SIZE;

  const svg_height = height_of_squares + margin.top + margin.bottom;

  const height = svg_height - margin.top - margin.bottom;

  let colorScale = d3
    .scaleOrdinal()
    .range(d3.schemeCategory10)
    .domain([
      "Driving",
      "Flying",
      "Heating",
      "Stuff",
      "Showers",
      "Food/Eating",
      "Washing machine",
      "Dishwasher",
      "Dogs"
    ]);

  let svg = d3.select(
    DOM.svg(
      viswidth + margin.left + margin.right,
      height + margin.top + margin.bottom
    )
  );

  let svg_group = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Colored rectangles
  svg_group
    .selectAll("c_rect")
    .data(d3_data) // Joins arrayOfNumbers with DOM <rect/> elements, producing .enter(),.exit() selections
    .enter() // Returns the portion of the data which is new ("entering") and not yet bound to DOM elements
    .append("rect") // For each, append a <circle /> to selected svg
    .attr("x", (d) => d["x"] * GRID_SIZE)
    .attr("y", (d) => d["y"] * GRID_SIZE)
    .attr("width", (d) => d.value * SQUARE_SIZE) // Set each cirlces x position using its index in the array
    .attr("height", SQUARE_SIZE) // Set each circles y position (cy is short for 'y coordinate of the circle's center')
    .attr("fill", (d) => colorScale(d["key"]));

  // Grid rectangles
  svg_group
    .selectAll("g_rect")
    .data(d3_data) // Joins arrayOfNumbers with DOM <rect/> elements, producing .enter(),.exit() selections
    .enter() // Returns the portion of the data which is new ("entering") and not yet bound to DOM elements
    .append("rect") // For each, append a <circle /> to selected svg
    .attr("x", (d) => d["x"] * GRID_SIZE)
    .attr("y", (d) => d["y"] * GRID_SIZE)
    .attr("width", SQUARE_SIZE) // Set each cirlces x position using its index in the array
    .attr("height", SQUARE_SIZE) // Set each circles y position (cy is short for 'y coordinate of the circle's center')
    .attr("fill", null)
    .attr("stroke", "gray")
    .attr("stroke-width", 0.5)
    .attr("fill", "none");

  function calc_text_size(d) {
    if (d.key.length <= 10) {
      return "1rem";
    } else {
      return 10 / d.key.length + "rem";
    }
  }

  svg_group
    .selectAll("a_text")
    .data(text_positions)
    .enter()
    .append("text")
    .attr("x", 0)
    .attr("dx", -6)
    .attr("y", (d) => {
      return d3.mean(d["value"]) * GRID_SIZE;
    })
    .attr("dy", GRID_SIZE / 2)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("font-size", (d) => calc_text_size(d))
    .text((d) => d["key"]);

  // Once we append the vis elments to it, we return the DOM element for Observable to display above.
  return svg.node();
}
)}

function _munge_data(){return(
function munge_data(data, num_squares_in_width) {
  
  let x_counter = 0
  let y_counter = 0
  let previous_key = data[0]["key"]
  let new_data = data.map(d => {
    
    
    if (previous_key != d["key"]) {
      y_counter += 1.5
      x_counter = 0
    } else if (x_counter > num_squares_in_width) {
      x_counter = 0
      y_counter +=1
    }
    
    d["x"] = x_counter
    d["y"] = y_counter
    
    previous_key = d["key"] 
    x_counter += 1
    return d
  })
  
  return new_data
}
)}

function _munged(munge_data,get_d3_data,data){return(
munge_data(get_d3_data(data), 10)
)}

function _text_positions(d3,munged){return(
d3.nest()
  .key(function(d) { return d.key; })
  .rollup(d => d3.extent(d, d=> d["y"]))
  .entries(munged)
)}

function _key(md){return(
md`Each full square ( <svg width=16 height=16><rect x="0" y="0" width="16" height="16" fill="#BBB" stroke="gray"></rect></svg> ) in the visualisations represents 1 kilowatt hour (kwh), the amount of energy consumed by using 1000 watts of power for one hour.  `
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("data")).define("data", ["slider"], _data);
  main.variable(observer("get_d3_data")).define("get_d3_data", _get_d3_data);
  main.variable(observer("viewof slider")).define("viewof slider", ["html"], _slider);
  main.variable(observer("slider")).define("slider", ["Generators", "viewof slider"], (G, _) => G.input(_));
  main.variable(observer("d3_data")).define("d3_data", ["get_d3_data","data"], _d3_data);
  main.variable(observer()).define(["unit_chart","data"], _7);
  main.variable(observer("unit_chart")).define("unit_chart", ["width","get_d3_data","d3","DOM"], _unit_chart);
  main.variable(observer()).define(["unit_chart_2","data"], _9);
  main.variable(observer("unit_chart_2")).define("unit_chart_2", ["width","get_d3_data","munge_data","d3","DOM"], _unit_chart_2);
  main.variable(observer("munge_data")).define("munge_data", _munge_data);
  main.variable(observer("munged")).define("munged", ["munge_data","get_d3_data","data"], _munged);
  main.variable(observer("text_positions")).define("text_positions", ["d3","munged"], _text_positions);
  main.variable(observer("key")).define("key", ["md"], _key);
  return main;
}
