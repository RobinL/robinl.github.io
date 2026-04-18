function _1(md){return(
md`# Updating a prior simplified`
)}

function _prior_probabability(Inputs){return(
Inputs.range([0, 1], {
  label: "Prior probability",
  value: 0.3
})
)}

function _m(Inputs){return(
Inputs.range([0.01, 0.99], {
  label: "m probability",
  value: 0.8
})
)}

function _u(Inputs){return(
Inputs.range([0.01, 0.99], {
  label: "u probability",
  value: 0.2
})
)}

function _scenario_name(Inputs){return(
Inputs.text({
  label: "Scenario name (optional):",
  placeholder: "e.g. 'first names are equal'",
  value: ""
})
)}

function _get_scenario_labels(scenario_name){return(
function get_scenario_labels(scenario_holds, entities_match) {
  let label;

  if (scenario_name !== null && scenario_name !== "") {
    if (scenario_holds) {
      label = scenario_name;
    } else {
      label = "All other scenarios";
    }
  } else {
    if (scenario_holds) {
      label = `Scenario holds`;
    } else {
      label = `Scenario does not hold`;
    }
  }

  if (entities_match) {
    label = `${label} (amongst matching entities)`;
  } else {
    label = `${label} (amongst non-matching entities)`;
  }

  return label;
}
)}

function _treemap_1(generateTreemapData,prior_probabability,m,u,width,treemap,pruneTreeInPlace,html,d3)
{
  let data_generated = generateTreemapData(prior_probabability, m, u);

  const height = 400;
  const width2 = Math.max(400, width);

  let root = treemap(data_generated, height, width2);

  pruneTreeInPlace(root, 1);

  const container = html`<div class="treemap_container">`;

  const svg = d3
    .select(container)
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  const color = d3.scaleOrdinal(d3.schemeCategory10); // Or any other color scheme

  // Bind data to all nodes, not just leaves
  const nodes = svg
    .selectAll("g")
    .data(root)
    .join("g")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  // Append rectangles with borders
  nodes
    .append("rect")
    .attr("fill", (d) => d.data.colour)
    .attr("stroke", (d) => d.data.bordercolour)
    .attr("stroke-width", 1)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0);

  nodes
    .append("foreignObject")
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("xmlns", "http://www.w3.org/1999/xhtml")
    .append("xhtml:div")
    .attr("class", "wrap-info")
    .html((d) => {
      return `<div>${d3.format(".1%")(d.value)} -  ${d.data.name}</div>`;
    });

  return container;
}


function _treemap_2(generateTreemapData,prior_probabability,m,u,width,treemap,html,d3)
{
  let data_generated = generateTreemapData(prior_probabability, m, u);
  const height = 400;
  const width2 = Math.max(400, width);

  const root = treemap(data_generated, height, width2);

  const container = html`<div class="treemap_container">`;

  const svg = d3
    .select(container)
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  const color = d3.scaleOrdinal(d3.schemeCategory10); // Or any other color scheme

  // Bind data to all nodes, not just leaves
  const nodes = svg
    .selectAll("g")
    .data(root.descendants())
    .join("g")
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  // Append rectangles with borders
  nodes
    .append("rect")
    .attr("fill", (d) => d.data.colour)
    .attr("stroke", (d) => d.data.bordercolour)
    .attr("stroke-width", 1)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0);

  nodes
    .append("foreignObject")
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0)
    .attr("xmlns", "http://www.w3.org/1999/xhtml")
    .append("xhtml:div")
    .attr("class", "wrap-info")
    .html((d) => {
      return `<div>${d3.format(".1%")(d.value)} -  ${d.data.name}</div>`;
    });

  return container;
}


function _treemap_3(width,generateTreemapData,prior_probabability,m,u,treemap,findNodeByName,get_scenario_labels,html,d3)
{
  const height = 400;
  const width3 = Math.max(400, width);

  const data_generated = generateTreemapData(prior_probabability, m, u);

  const root = treemap(data_generated, height, width3);
  let rect1 = findNodeByName(root, get_scenario_labels(true, true));
  let rect2 = findNodeByName(root, get_scenario_labels(true, false));

  const width1 = rect1.x1 - rect1.x0;
  const height1 = rect1.y1 - rect1.y0;

  const width2 = rect2.x1 - rect2.x0;
  const height2 = rect2.y1 - rect2.y0;

  // Align both rectangles vertically to the highest y value (smallest y0)
  const highestY = Math.min(rect1.y0, rect2.y0);

  rect1.y0 = highestY;
  rect1.y1 = highestY + height1;

  rect2.y0 = highestY;
  rect2.y1 = highestY + height2;

  // Position rect2 20 pixels to the right of rect1
  rect2.x0 = rect1.x1 + 20;
  rect2.x1 = rect2.x0 + width2;

  const container = html`<div class="treemap_container">`;
  const svg = d3
    .select(container)
    .append("svg")
    .attr("height", height)
    .attr("width", width3);

  // Draw the first rectangle in a group
  let g1 = svg
    .append("g")
    .attr("transform", `translate(${rect1.x0}, ${rect1.y0})`);
  g1.append("rect")
    .attr("width", rect1.x1 - rect1.x0)
    .attr("height", rect1.y1 - rect1.y0)
    .attr("fill", rect1.data.colour)
    .attr("stroke", rect1.data.bordercolour);

  g1.append("foreignObject")
    .attr("width", rect1.x1 - rect1.x0)
    .attr("height", rect1.y1 - rect1.y0)
    .attr("xmlns", "http://www.w3.org/1999/xhtml")
    .append("xhtml:div")
    .attr("class", "wrap-info")
    .html(() => {
      return `<div>${d3.format(".1%")(rect1.value)} - ${rect1.data.name}</div>`;
    });

  // Draw the second rectangle in a group
  let g2 = svg
    .append("g")
    .attr("transform", `translate(${rect2.x0}, ${rect2.y0})`);
  g2.append("rect")
    .attr("width", rect2.x1 - rect2.x0)
    .attr("height", rect2.y1 - rect2.y0)
    .attr("fill", rect2.data.colour)
    .attr("stroke", rect2.data.bordercolour);

  g2.append("foreignObject")
    .attr("width", rect2.x1 - rect2.x0)
    .attr("height", rect2.y1 - rect2.y0)
    .attr("xmlns", "http://www.w3.org/1999/xhtml")
    .append("xhtml:div")
    .attr("class", "wrap-info")
    .html(() => {
      return `<div>${d3.format(".1%")(rect2.value)} - ${rect2.data.name}</div>`;
    });
  return container;
}


function _coloured_formulas(md,tex,scenario_match_colour,scenario_non_match_colour){return(
md`
${tex`\text{match probability} = \frac{\colorbox{${scenario_match_colour}}{\text{yellow area}}}{\colorbox{${scenario_match_colour}}{\text{yellow area}} + \colorbox{${scenario_non_match_colour}}{\text{blue area}} } `}

`
)}

function _coloured_formulas_2(md,tex,scenario_match_colour,scenario_non_match_colour){return(
md`We can see that the ${tex`\colorbox{${scenario_match_colour}}{$\text{yellow area} = \lambda m$}`} and the 
${tex`\colorbox{${scenario_non_match_colour}}{$\text{blue area} = (1-\lambda) u$}`}.

So:

${tex`\text{match probability} = \frac{\colorbox{${scenario_match_colour}}{{$\lambda m$}}}{\colorbox{${scenario_match_colour}}{$\lambda m$} + \colorbox{${scenario_non_match_colour}}{$(1-\lambda)u$} } `}

Which is our original formula.`
)}

function _formula_with_numbers(prior_probabability,u,m,match_probability,html,tex)
{
  let lam = prior_probabability.toFixed(2);
  let u_f = u.toFixed(2);
  let m_f = m.toFixed(2);
  let mp_f = match_probability.toFixed(2);
  return html`
 ${tex`\text{posterior match probability} = \frac{${lam} \times ${m_f}}{${lam} \times ${m_f}  + (1 - ${lam}) \times ${u_f}} = ${mp_f}`}

`;
}


function _match_probability(prior_probabability,m,u){return(
(prior_probabability * m) /
  (prior_probabability * m + (1 - prior_probabability) * u)
)}

function _findNodeByName(){return(
function findNodeByName(node, targetName) {
  if (node.data.name === targetName) {
    return node;
  }

  if (node.children) {
    for (let child of node.children) {
      const result = findNodeByName(child, targetName);
      if (result) {
        return result;
      }
    }
  }

  return null;
}
)}

function _pruneTreeInPlace(){return(
function pruneTreeInPlace(data, maxDepth, currentDepth = 0) {
  if (currentDepth >= maxDepth) {
    delete data.children;
    return;
  }

  if (Array.isArray(data.children)) {
    for (let i = 0; i < data.children.length; i++) {
      pruneTreeInPlace(data.children[i], maxDepth, currentDepth + 1);
    }
  }
}
)}

function _generateTreemapData(get_scenario_labels,scenario_match_colour,scenario_non_match_colour){return(
function generateTreemapData(probability_two_random_records_match, m, u) {
  return {
    name: `All pairwise record comparisons`,
    colour: "white",
    bordercolour: "black",
    children: [
      {
        name: `Entities match = λ`,
        colour: "#d6ffe0",
        bordercolour: "black",
        children: [
          {
            name: get_scenario_labels(true, true),
            value: probability_two_random_records_match * m,
            colour: scenario_match_colour,
            bordercolour: "black"
          },
          {
            name: get_scenario_labels(false, true),
            value: probability_two_random_records_match * (1 - m),
            colour: "white",
            bordercolour: "black"
          }
        ]
      },
      {
        name: "Entities do not match = (1-λ)",
        colour: "#ffd6d9",
        bordercolour: "black",
        children: [
          {
            name: get_scenario_labels(true, false),
            value: (1 - probability_two_random_records_match) * u,
            colour: scenario_non_match_colour,
            bordercolour: "black"
          },
          {
            name: get_scenario_labels(false, false),
            value: (1 - probability_two_random_records_match) * (1 - u),
            colour: "white",
            bordercolour: "black"
          }
        ]
      }
    ]
  };
}
)}

function _treemap(d3){return(
(data, height, width) =>
  d3
    .treemap()
    .tile(d3.treemapResquarify)
    .size([width, height])
    .paddingOuter(15)
    .paddingTop(30)
    .paddingInner(10)
    .round(true)(d3.hierarchy(data).sum((d) => d.value))
)}

function _d3(require){return(
require("d3@6")
)}

function _scenario_match_colour(d3){return(
d3.color("rgb(255, 255, 34)").hex()
)}

function _scenario_non_match_colour(){return(
"#35cbff"
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof prior_probabability")).define("viewof prior_probabability", ["Inputs"], _prior_probabability);
  main.variable(observer("prior_probabability")).define("prior_probabability", ["Generators", "viewof prior_probabability"], (G, _) => G.input(_));
  main.variable(observer("viewof m")).define("viewof m", ["Inputs"], _m);
  main.variable(observer("m")).define("m", ["Generators", "viewof m"], (G, _) => G.input(_));
  main.variable(observer("viewof u")).define("viewof u", ["Inputs"], _u);
  main.variable(observer("u")).define("u", ["Generators", "viewof u"], (G, _) => G.input(_));
  main.variable(observer("viewof scenario_name")).define("viewof scenario_name", ["Inputs"], _scenario_name);
  main.variable(observer("scenario_name")).define("scenario_name", ["Generators", "viewof scenario_name"], (G, _) => G.input(_));
  main.variable(observer("get_scenario_labels")).define("get_scenario_labels", ["scenario_name"], _get_scenario_labels);
  main.variable(observer("treemap_1")).define("treemap_1", ["generateTreemapData","prior_probabability","m","u","width","treemap","pruneTreeInPlace","html","d3"], _treemap_1);
  main.variable(observer("treemap_2")).define("treemap_2", ["generateTreemapData","prior_probabability","m","u","width","treemap","html","d3"], _treemap_2);
  main.variable(observer("treemap_3")).define("treemap_3", ["width","generateTreemapData","prior_probabability","m","u","treemap","findNodeByName","get_scenario_labels","html","d3"], _treemap_3);
  main.variable(observer("coloured_formulas")).define("coloured_formulas", ["md","tex","scenario_match_colour","scenario_non_match_colour"], _coloured_formulas);
  main.variable(observer("coloured_formulas_2")).define("coloured_formulas_2", ["md","tex","scenario_match_colour","scenario_non_match_colour"], _coloured_formulas_2);
  main.variable(observer("formula_with_numbers")).define("formula_with_numbers", ["prior_probabability","u","m","match_probability","html","tex"], _formula_with_numbers);
  main.variable(observer("match_probability")).define("match_probability", ["prior_probabability","m","u"], _match_probability);
  main.variable(observer("findNodeByName")).define("findNodeByName", _findNodeByName);
  main.variable(observer("pruneTreeInPlace")).define("pruneTreeInPlace", _pruneTreeInPlace);
  main.variable(observer("generateTreemapData")).define("generateTreemapData", ["get_scenario_labels","scenario_match_colour","scenario_non_match_colour"], _generateTreemapData);
  main.variable(observer("treemap")).define("treemap", ["d3"], _treemap);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("scenario_match_colour")).define("scenario_match_colour", ["d3"], _scenario_match_colour);
  main.variable(observer("scenario_non_match_colour")).define("scenario_non_match_colour", _scenario_non_match_colour);
  return main;
}
