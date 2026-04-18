function _1(md){return(
md`# Treemap for Bayes Intuition`
)}

function _settings_raw(inputs,default_settings){return(
inputs.textarea({
  value: default_settings,
  rows: 29
})
)}

function _max_depth_1(settings,inputs)
{
  let num_levels = settings["comparison_columns"].length;

  return inputs.range([0, num_levels], {
    step: 1,
    label: "How many columns to take account of?"
  });
}


function _4(md){return(
md`In the following diagram, the outermost rectangle represents the space all pairwise record comparisons.  

This can then be recursively split into subsets, beginning with spliting between record pairs that match and those that do not match, then further splitting these rectangles based on comparisons of the values in columns.
`
)}

function _5(plot_treemap,settings,max_depth_1){return(
plot_treemap(settings, max_depth_1, 600)
)}

function _plot_treemap(generate_treemap_data,treemap,html,d3,width,DOM,box_html){return(
function (settings, max_depth, height) {
  const data_generated = generate_treemap_data(settings);
  const root = treemap(data_generated, height);

  const container = html`<div class="treemap_container">`;

  const tooltip = d3
    .select(container)
    .append("div")
    .attr("class", "svg-tooltip")
    .style("position", "absolute")
    .style("display", "inline-block")
    .style("visibility", "hidden")
    .attr("pointer-events", "none");

  const svg = d3
    .select(container)
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  let grouped_data = d3.filter(root, (d) => d.depth <= max_depth + 1);
  grouped_data = d3.group(grouped_data, (d) => d.height);

  const node = svg
    .selectAll("g")
    .data(grouped_data)
    .join("g")
    .selectAll("g")
    .data((d) => d[1])
    .join("g")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  node
    .append("rect")
    .attr("id", (d) => (d.nodeUid = DOM.uid("node")).id)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("stroke-width", "1px")
    .attr("stroke", "black")
    .attr("fill", (d) => {
      if (d.depth == max_depth + 1) {
        return d3.rgb(d.data.colour);
      } else {
        let col = d3.rgb(d.data.colour);
        if (col.hex() != "#ffffff") {
          if (d.depth == 1) {
            col.opacity = 0.3;
          } else {
            col.opacity = 0.0;
          }
        }
        return col;
      }
    });

  node
    .append("foreignObject")
    .attr("pointer-events", "none")
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("xmlns", "http://www.w3.org/1999/xhtml")
    .append("xhtml:div")
    .attr("class", "wrap-info")

    .append("div")
    .html((d) => box_html(d, max_depth));

  node
    .filter((d) => d.children)
    .selectAll("tspan")
    .attr("dx", 3)
    .attr("y", 13);

  node
    .filter((d) => !d.children)
    .selectAll("tspan")
    .attr("x", 3)
    .attr(
      "y",
      (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
    );

  svg
    .selectAll("rect")
    .on("mouseover", function (event) {
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function (event) {
      let this_data = d3.select(this).datum();

      let b_html = box_html(this_data, max_depth);
      tooltip.html(b_html);

      let top;
      let left;

      let tt_height = tooltip.node().getBoundingClientRect().height;
      let tt_width = tooltip.node().getBoundingClientRect().width;

      top = event.offsetY + 10 + "px";

      if (width - event.layerX > tt_width) {
        left = event.offsetX + 10 + "px";
      } else {
        left = event.offsetX - tt_width - 10 + "px";
      }

      let visible = "visible";

      if (b_html == "") {
        visible = "hidden";
      }
      return tooltip
        .style("top", top)
        .style("left", left)
        .style("visibility", visible);
    })
    .on("click", function (event) {
      console.log(`height: ${height}`);
      console.log(`event.layerY: ${event.layerY}`);
    })
    .on("mouseout", function () {
      return tooltip.style("visibility", "hidden");
    });

  return container;
}
)}

function _add_children_from_column(children_to_add){return(
function add_children_from_column(subtree, column, match) {
  // We want to find all current leaves.
  if ("children" in subtree) {
    subtree["children"].forEach((c) => {
      add_children_from_column(c, column, match);
    });
    
  } 
  // When a leaf is found, add children
  else {
    let items_to_add = children_to_add(column, subtree, match);
    subtree["children"] = items_to_add;
  }
  delete subtree["value"];
}
)}

function _children_to_add(color_match,color_non_match,d3){return(
function children_to_add(col, parent, match) {
  let children = [];
  let probabilities;
  let this_colour;
  if (match) {
    probabilities = col["m_probabilities"];
    this_colour = color_match;
  } else {
    probabilities = col["u_probabilities"];
    this_colour = color_non_match;
  }

  probabilities.forEach((prob, i) => {
    let name = "gamma_" + col["col_name"] + " = " + i;
    let child = {
      name: name,
      name_list: parent["name_list"].concat(name),
      value: parent["value"] * prob,
      prob: prob,
      prob_list: parent["prob_list"].concat(prob)
    };

    if (col["gamma_value"] == i && parent["colour"] == this_colour) {
      child["colour"] = this_colour;
    } else {
      child["colour"] = d3.rgb(255, 255, 255);
    }
    children.push(child);
  });

  return children;
}
)}

function _generate_treemap_data(d3,color_match,color_non_match,add_children_from_column){return(
function (settings) {
  let lam = settings["proportion_of_matches"];
  let start_template = {
    name: "All comparisons",
    name_list: [],
    prob_list: [],
    prob: 1.0,
    colour: d3.rgb(255, 255, 255),
    children: [
      {
        name: "matches",
        name_list: ["match"],
        prob_list: [lam],
        prob: lam,
        value: lam,
        colour: color_match
      },
      {
        name: "non-match",
        name_list: ["non-match"],
        prob_list: [1 - lam],
        prob: 1 - lam,
        value: 1 - lam,
        colour: color_non_match
      }
    ]
  };

  let matches = start_template["children"][0];
  let non_matches = start_template["children"][1];

  settings["comparison_columns"].forEach((c, i) => {
    add_children_from_column(matches, c, true);
    add_children_from_column(non_matches, c, false);
  });

  return start_template;
}
)}

function _box_html(format_perc,html){return(
function box_html(d, max_depth) {
  let name_list = d.data.name_list;
  let prob_list = d.data.prob_list;

  let zipped = name_list.map((k, i) => [k, prob_list[i]]);

  let elems = zipped.map((d) => `<p>${d[0]} (${format_perc(d[1])})`);

  let text = elems.join(" and ");
  let final_prob = prob_list.reduce((a, b) => a * b, 1);
  text = text + `<p>Proportion of all comparisons: ${format_perc(final_prob)}`;
  let contents = html`${text}`;

  if (d.depth == max_depth + 1) {
    return contents.innerHTML;
  } else {
    return "";
  }
}
)}

function _settings(settings_raw){return(
JSON.parse(settings_raw)
)}

function _12(settings){return(
JSON.stringify(settings)
)}

function _styles(html){return(
html`
<style>
.wrap-info {
  padding: 5px;
  font-family: monospace;
  font-size: 0.6em;
  line-height: 1.3em;
}
.wrap-info p {
  margin-top: 0px;
  margin-bottom: 0.1rem;
  
}
textarea {
    max-height: 1000em !important
}

.svg-tooltip {

    background: rgba(69,77,93,.9);
    border-radius: .1rem;
    color: #fff;
    display: inline-block;
    max-width: 500px;
    padding: .2rem .4rem;
    position: absolute;
    text-overflow: ellipsis;
    white-space: pre;
    z-index: 300;
    visibility: hidden;
  }

.svg-tooltip p {
font-family: sans-serif;
    padding: 0;
    margin: 0.2rem;
      font-size: 0.8em;
    line-height: 1.0em;
  }
</style>`
)}

function _treemap(d3,width){return(
(data, height) =>
  d3
    .treemap()
    .tile(d3.treemapSquarify)
    .size([width, height])
    .paddingOuter(5)
    .paddingTop(5)
    .paddingInner(5)
    .round(true)(
    d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value)
  )
)}

function _default_settings(){return(
`{
    "proportion_of_matches": 0.4,
    "comparison_columns": [
        {
            "col_name": "fname",
            "m_probabilities": [0.25, 0.75],
            "u_probabilities": [0.7,  0.3],
            "gamma_value": 1
        },
        {
            "col_name": "sname",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 0
        },
        {
            "col_name": "dob",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        },
        {
            "col_name": "town",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        }
    ]
}`
)}

function _format_perc(d3){return(
d3.format(".1%")
)}

function _colours(d3){return(
d3.scaleOrdinal(d3.schemeCategory10)
)}

function _color_match(d3,colours){return(
d3.rgb(colours(2)).brighter(2.5)
)}

function _color_non_match(d3,colours){return(
d3.rgb(colours(1)).brighter(1.5)
)}

function _d3(require){return(
require("d3@6")
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _22(){return(
`Links:

x times more likely: 
https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/
https://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1740-9713.2006.00204.x

Odds are not quite the same as bayes factors:  https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/MIT18_05S14_Reading12b.pdf

https://cran.r-project.org/web/packages/BayesFactor/vignettes/odds_probs.html#:~:text=The%20Bayes%20factor%20represents%20the,are%20what%20are%20being%20changed.&text=Further%2C%20these%20odds%20can%20be,models%20sum%20to%20known%20probability.
The Bayes factor represents the relative evidence between two models – that is, the change in the model odds due to the data – but the odds are what are being changed. 


https://bookdown.org/kevin_davisross/bayesian-reasoning-and-methods/bayes-factor.html
Representing bayes theorem using bf

`
)}

function _23(generate_treemap_data,settings){return(
generate_treemap_data(settings)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof settings_raw")).define("viewof settings_raw", ["inputs","default_settings"], _settings_raw);
  main.variable(observer("settings_raw")).define("settings_raw", ["Generators", "viewof settings_raw"], (G, _) => G.input(_));
  main.variable(observer("viewof max_depth_1")).define("viewof max_depth_1", ["settings","inputs"], _max_depth_1);
  main.variable(observer("max_depth_1")).define("max_depth_1", ["Generators", "viewof max_depth_1"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["plot_treemap","settings","max_depth_1"], _5);
  main.variable(observer("plot_treemap")).define("plot_treemap", ["generate_treemap_data","treemap","html","d3","width","DOM","box_html"], _plot_treemap);
  main.variable(observer("add_children_from_column")).define("add_children_from_column", ["children_to_add"], _add_children_from_column);
  main.variable(observer("children_to_add")).define("children_to_add", ["color_match","color_non_match","d3"], _children_to_add);
  main.variable(observer("generate_treemap_data")).define("generate_treemap_data", ["d3","color_match","color_non_match","add_children_from_column"], _generate_treemap_data);
  main.variable(observer("box_html")).define("box_html", ["format_perc","html"], _box_html);
  main.variable(observer("settings")).define("settings", ["settings_raw"], _settings);
  main.variable(observer()).define(["settings"], _12);
  main.variable(observer("styles")).define("styles", ["html"], _styles);
  main.variable(observer("treemap")).define("treemap", ["d3","width"], _treemap);
  main.variable(observer("default_settings")).define("default_settings", _default_settings);
  main.variable(observer("format_perc")).define("format_perc", ["d3"], _format_perc);
  main.variable(observer("colours")).define("colours", ["d3"], _colours);
  main.variable(observer("color_match")).define("color_match", ["d3","colours"], _color_match);
  main.variable(observer("color_non_match")).define("color_non_match", ["d3","colours"], _color_non_match);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  main.variable(observer()).define(_22);
  main.variable(observer()).define(["generate_treemap_data","settings"], _23);
  return main;
}
