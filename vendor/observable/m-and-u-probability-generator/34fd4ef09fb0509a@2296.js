import define1 from "./817db6818ab226c0@104.js";

function _1(md){return(
md`# Resizable areas`
)}

function _num_levels(inputs){return(
inputs.range([2, 6], {
  label: 'num levels',
  step: 1,
  value: 3
})
)}

function _3(md){return(
md`## Drag within the bars to resize

Note that if you change the number of levels of the axis squishiness, values will reset`
)}

function _thing(m_u_input_control,width,height,starting_data){return(
m_u_input_control(width, height, starting_data, 0, true, 0)
)}

function _gen_y_scale(d3){return(
function(axis_stretch_at_extremes, height, internal_height) {
  //https://www.wolframalpha.com/input/?i=solve+y%3D+log_b%28%28x%2Bc%29%2F%28c-x%29%29

  if (axis_stretch_at_extremes == 0) {
    return d3
      .scaleLinear()
      .domain([0, 1])
      .range([internal_height, 0]);
  }

  let squash = axis_stretch_at_extremes;
  let my_fn;
  if (squash >= 0) {
    my_fn = x => Math.pow(5, x) / (Math.pow(5, x) + 1);
  } else {
    my_fn = x => -1 * Math.log((x + 8.01) / (8.01 - x));

    let root = 1 / 3;

    let multiple = 8 / Math.pow(8, root);

    squash = -Math.pow(-squash, root) * multiple;
  }

  let offset_scale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([-squash, squash]);

  let num_points = 50;

  let in_values_not_normalised = d3
    .range(num_points + 1)
    .map(d => d / num_points)
    .map(offset_scale)
    .map(my_fn);

  let ext = d3.extent(in_values_not_normalised);

  let normalise_scale = d3
    .scaleLinear()
    .domain(ext)
    .range([0, 1]);

  let domain = in_values_not_normalised.map(normalise_scale);

  let range = d3
    .range(num_points + 1)
    .map(d => (internal_height * (num_points - d)) / num_points);

  return d3
    .scaleLinear()
    .domain(domain)
    .range(range);
}
)}

function _m_u_input_control(DOM,d3,margin,splink_data_to_unstacked_data,unstacked_data_to_stacked,num_levels_to_level_keys,get_level_colours_scale,inputs,gen_x_scale,gen_y_scale,html,get_tick_vals,redraw){return(
function(
  width,
  height,
  splink_settings,
  comparison_column_index = 0,
  axis_compression_slider = false,
  axis_compression_start_value = 0
) {
  // Lots of vars created in this funcion that need to be passed to other functinos like redraw
  // Put them all in 'enclosed data'

  let comparison_col =
    splink_settings.comparison_columns[comparison_column_index];
  let num_levels = comparison_col.u_probabilities.length;

  const node = DOM.svg(width, height);
  const svg_outer = d3.select(node);

  // svg_outer.style("border", "1px solid black ");
  const svg = svg_outer
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("class", "outer_group");

  let unstacked_data = splink_data_to_unstacked_data(
    splink_settings,
    comparison_column_index
  );
  let stacked_data = unstacked_data_to_stacked(unstacked_data);

  let plot_data = stacked_data.m_u;

  let level_keys = num_levels_to_level_keys(num_levels);

  let level_names = num_levels_to_level_keys(num_levels);
  if ('level_names' in splink_settings) {
    level_names = splink_settings.level_names;
  }

  let level_colours = get_level_colours_scale(stacked_data);
  let internal_width = width - margin.left - margin.right;
  let internal_height = height - margin.top - margin.bottom;

  let axis_slider = inputs.range([-8, 8], {
    step: 0.1,
    label: 'Axis compression',
    value: axis_compression_start_value
  });

  if (!axis_compression_slider) {
    axis_slider.style.display = 'none';
  }

  let x = gen_x_scale(axis_slider.value, width, internal_width);
  let y = gen_y_scale(axis_slider.value, height, internal_height);

  let final_output = html`

  ${axis_slider}
  ${svg_outer.node()}
  `;

  let enclosed_data = {
    x,
    y,
    svg,
    svg_outer,
    unstacked_data,
    stacked_data,
    level_keys,
    level_names,
    level_colours,
    final_output,
    axis_slider,
    internal_height,
    internal_width,
    width,
    height
  };

  svg.on(".drag", null);

  let inner = svg
    .selectAll("g")
    .data(plot_data)
    .join("g")
    .attr("fill", d => level_colours(d.key))
    .attr("class", d => d.key)
    .classed("inner_group", "true");

  inner
    .selectAll("rect")
    .data(d => d)
    .join("rect")
    .attr("stroke", "white")
    .attr("stroke-width", "2px")
    .classed("m_u_areas", "true");

  inner
    .selectAll("text")
    .data(d => d)
    .join("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("font-size", "0.8em")
    .attr("pointer-events", "none")

    .style("font-family", "sans-serif")
    .classed("m_u_labels", "true");
  let tickVals = get_tick_vals(axis_slider.value);

  svg.append('g').attr("class", "x_axis_group");

  svg.append('g').attr("class", "y_axis_group");

  inner.selectAll("text.chart_title").remove();

  inner
    .append("text")
    .text("Distribution of m and u values")
    .attr("y", -60)
    .attr("x", internal_width / 2)
    .attr("class", "chart_title")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("font-size", "1em")
    .style("font-weight", "bold")
    .attr("pointer-events", "none")
    .style('fill', 'black')
    .style("font-family", "sans-serif");

  inner
    .append("text")
    .text("✨ Drag within rectangles to change values ✨")
    .attr("y", -20)
    .attr("x", internal_width / 2)
    .attr("class", "chart_title")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("font-size", "0.8em")

    .attr("pointer-events", "none")
    .style('fill', 'red')
    .style("font-family", "sans-serif");

  inner
    .append("text")
    .text(
      "The area represents all record comparisons, split into levels by match status"
    )
    .attr("y", -40)
    .attr("x", internal_width / 2)
    .attr("class", "chart_title")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("font-size", "0.8em")

    .attr("pointer-events", "none")
    .style('fill', 'black')
    .style("font-family", "sans-serif");

  redraw(enclosed_data);

  d3.select(axis_slider).on('input', d => {
    redraw(enclosed_data);
  });

  final_output.value = unstacked_data;

  return final_output;
}
)}

function _7(thing){return(
thing
)}

function _redraw(gen_x_scale,gen_y_scale,get_scale,get_drag,get_label,get_tick_vals,d3,format_tick){return(
function redraw(enclosed_data) {
  let e = enclosed_data;

  let unstacked_data = e.unstacked_data;
  let svg = e.svg;
  let svg_outer = e.svg_outer;
  let stacked_data = e.stacked_data;
  let plot_data = stacked_data.m_u;
  let level_keys = e.level_keys;
  let level_names = e.level_names;

  let slider = e.axis_slider;
  let axis_stretch = slider.value;
  let internal_height = e.internal_height;
  let internal_width = e.internal_width;
  let width = e.width;
  let height = e.height;

  e.x = gen_x_scale(axis_stretch, width, internal_width);
  e.y = gen_y_scale(axis_stretch, height, internal_height);

  let inner = svg
    .selectAll(".inner_group")
    .data(plot_data)
    .join("g")
    .attr("fill", d => e.level_colours(d.key));

  inner
    .selectAll("rect.m_u_areas")
    .data(d => {
      return d;
    })
    .join("rect")
    .attr("x", d => {
      return get_scale(d.data.match_status, e.stacked_data.lam, e.x)(
        d.data.match_status
      );
    })
    .attr("y", d => e.y(d[1]))
    .attr("height", d => e.y(d[0]) - e.y(d[1]))
    .attr("width", d =>
      get_scale(d.data.match_status, unstacked_data.lam, e.x).bandwidth()
    )
    .call(get_drag(enclosed_data, redraw));

  inner
    .selectAll("text.m_u_labels")
    .data(d => {
      return d;
    })
    .join("text")
    .attr("x", d => {
      return (
        get_scale(d.data.match_status, stacked_data.lam, e.x)(
          d.data.match_status
        ) +
        get_scale(d.data.match_status, stacked_data.lam, e.x).bandwidth() / 2
      );
    })
    .attr("y", d => (e.y(d[1]) + e.y(d[0])) / 2)
    .text(d => get_label(d, level_keys, level_names))
    .style('fill', 'black');
  inner.selectAll("text.axis_match_label").remove();
  inner
    .selectAll("text.axis_match_label")
    .data([
      {
        text: "Record comparisons which are non-matches",
        x: [0, 1 - unstacked_data.lam]
      },
      {
        text: "Record comparisons which are matches",
        x: [1 - unstacked_data.lam, 1]
      }
    ])
    .join("text")
    .text(d => d.text)
    .attr("y", e.y(0) + 40)
    .attr("x", d => (e.x(d.x[0]) + e.x(d.x[1])) / 2)
    .attr("class", "axis_match_label")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("font-size", "0.8em")
    .attr("pointer-events", "none")
    .style('fill', 'black')
    .style("font-family", "sans-serif");

  let tickVals = get_tick_vals(slider.value);

  svg
    .selectAll(".x_axis_group")
    .attr("transform", "translate(" + 0 + "," + internal_height + ")")
    .call(
      d3
        .axisBottom(e.x)
        .tickValues(tickVals)
        .tickFormat(format_tick)
    );

  svg.selectAll(".y_axis_group").call(
    d3
      .axisLeft(e.y)
      .tickValues(tickVals)
      .tickFormat(format_tick)
  );
}
)}

function _starting_data(normalise,d3,num_levels){return(
{
  proportion_of_matches: 0.3,
  comparison_columns: [
    {
      col_name: "my column",
      m_probabilities: normalise(d3.range(1, num_levels + 1, 1)),
      u_probabilities: normalise(d3.range(num_levels, 0, -1))
    }
  ]
}
)}

function _splink_data_to_unstacked_data(){return(
function(
  splink_settings,
  comparison_column_index = 0
) {
  let data = { lam: splink_settings.proportion_of_matches };
  data.m_u = [null, null];

  let u_probs =
    splink_settings.comparison_columns[comparison_column_index].u_probabilities;
  data.m_u[0] = { match_status: "non-match", match_index: 0 };
  u_probs.forEach((p, i) => (data.m_u[0]["level_" + i] = p));

  let m_probs =
    splink_settings.comparison_columns[comparison_column_index].m_probabilities;
  data.m_u[1] = { match_status: "match", match_index: 1 };
  m_probs.forEach((p, i) => (data.m_u[1]["level_" + i] = p));

  return data;
}
)}

function _get_tick_vals(){return(
function(axis_stretch_at_extremes) {
  let vals = [
    1e-10,
    1e-9,
    1e-8,
    1e-7,
    1e-6,
    1e-5,
    1e-4,
    1e-3,
    1e-2,
    1e-1,
    0.5,
    1 - 1e-1,
    1 - 1e-2,
    1 - 1e-3,
    1 - 1e-4,
    1 - 1e-5,
    1 - 1e-6,
    1 - 1e-7,
    1 - 1e-8,
    1 - 1e-9,
    1 - 1e-10
  ];

  let index_offset = Math.floor(axis_stretch_at_extremes * 0.65);
  let middle_index = vals.indexOf(0.5);
  let start_index = middle_index - index_offset;
  let end_index = middle_index + index_offset;

  if (axis_stretch_at_extremes > 2.5) {
    return [0].concat(vals.slice(start_index, end_index + 1)).concat([1]);
  } else {
    return null;
  }
}
)}

function _get_label(d3){return(
function(d, level_keys, level_names) {
  let lev_name = d.key;

  let lev_index = level_keys.indexOf(lev_name);
  let this_name = level_names[lev_index];

  let ms = d.data.match_status;
  let level_prop = d3.format(",.2%")(d.data[d.key]);
  this_name = this_name.replace("_", " ");

  this_name = this_name.charAt(0).toUpperCase() + this_name.slice(1);

  return `${this_name}: ${level_prop} of ${ms}es`;
}
)}

function _gen_x_scale(d3){return(
function(axis_stretch_at_extremes, width, internal_width) {
  //https://www.wolframalpha.com/input/?i=solve+y%3D+log_b%28%28x%2Bc%29%2F%28c-x%29%29

  if (axis_stretch_at_extremes == 0) {
    return d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, internal_width]);
  }

  let squash = axis_stretch_at_extremes;
  let my_fn;
  if (squash >= 0) {
    my_fn = x => Math.pow(5, x) / (Math.pow(5, x) + 1);
  } else {
    my_fn = x => -1 * Math.log((x + 8.01) / (8.01 - x));

    let root = 1 / 3;

    let multiple = 8 / Math.pow(8, root);

    squash = -Math.pow(-squash, root) * multiple;
  }

  let offset_scale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([-squash, squash]);

  let num_points = 50;

  let in_values_not_normalised = d3
    .range(num_points + 1)
    .map(d => d / num_points)
    .map(offset_scale)
    .map(my_fn);

  let ext = d3.extent(in_values_not_normalised);

  let normalise_scale = d3
    .scaleLinear()
    .domain(ext)
    .range([0, 1]);

  let domain = in_values_not_normalised.map(normalise_scale);

  let range = d3
    .range(num_points + 1)
    .map(d => (internal_width * d) / num_points);

  return d3
    .scaleLinear()
    .domain(domain)
    .range(range);
}
)}

function _get_level_colours_scale(d3){return(
function(stacked_data) {
  let scheme = d3.schemeGnBu;
  scheme[2] = [scheme[3][0], scheme[3][2]];

  return d3
    .scaleOrdinal()
    .domain(stacked_data["m_u"].map(d => d.key))
    .range(scheme[stacked_data["m_u"].length]);
}
)}

function _get_drag(d3,get_lam,get_m_u,unstacked_data_to_stacked,Event){return(
function(enclosed_data, redraw) {
  // By passing data and redraw and then defining a function
  // we create a closure over data and redraw, making them
  // available to the drag function

  return d3.drag().on("drag", function(e) {
    // Lam
    enclosed_data.unstacked_data.lam = get_lam(e, enclosed_data);

    // Now reallocate between bins
    enclosed_data.unstacked_data.m_u = get_m_u(e, enclosed_data);

    let plot_data = unstacked_data_to_stacked(enclosed_data.unstacked_data);
    enclosed_data.stacked_data = plot_data;

    enclosed_data.final_output.value = enclosed_data.unstacked_data;

    redraw(enclosed_data);

    enclosed_data.final_output.dispatchEvent(new Event("input"));
  });
}
)}

function _get_lam(){return(
function get_lam(e, enclosed_data) {
  let x = enclosed_data.x;
  let start_lam = enclosed_data.unstacked_data.lam;
  let start_lam_x = x(start_lam);
  let new_lam = x.invert(start_lam_x - e.dx);

  new_lam = Math.min(new_lam, 1);
  new_lam = Math.max(new_lam, 0);

  return new_lam;
}
)}

function _get_m_u(){return(
function get_m_u(e, enclosed_data) {
  //Note that e.subject, the datum associated with the rectangle, is fixed
  // so for instance, the proportions contained in this data will not change
  // during the course of an individual drag event
  // m_u is being updated though, so it's actually m_u which contains the
  // most up-to-date data associated with the diagram and hence this should be used
  // for geometric calculations

  let level_keys = enclosed_data.level_keys;

  let stacked_data = enclosed_data.stacked_data;
  let y = enclosed_data.y;
  let m_u = enclosed_data.unstacked_data.m_u;

  //   Get proportions associated with dragged rect
  let this_level_name = e.subject.key;
  let level_index = level_keys.indexOf(this_level_name);

  let match_index = e.subject.data.match_index;

  let dragged_cum_proportions = stacked_data.m_u[level_index][match_index];

  //Get target level

  let start_of_this_level_prop = dragged_cum_proportions[0];
  let end_of_this_level_prop = dragged_cum_proportions[1];

  let start_level_y = y(start_of_this_level_prop);
  let end_level_y = y(end_of_this_level_prop);

  // let midpoint_y = (y(e.subject[0]) + y(e.subject[1])) / 2;
  let midpoint_y = (start_level_y + end_level_y) / 2;

  let in_top_half;
  if (e.y < midpoint_y) {
    in_top_half = true;
  } else {
    in_top_half = false;
  }

  let target_level_index;
  let dragging_from_bottom;

  if (in_top_half) {
    target_level_index = level_index + 1;
    dragging_from_bottom = false;
  } else {
    target_level_index = level_index + -1;
    dragging_from_bottom = true;
  }
  if (level_index == 0) {
    target_level_index = 1;
    dragging_from_bottom = false;
  }

  if (level_index == level_keys.length - 1) {
    target_level_index = level_keys.length - 2;
    dragging_from_bottom = true;
  }

  // Get y location we're starting the drag from

  let cum_proportion_drag_start;
  if (dragging_from_bottom) {
    cum_proportion_drag_start = start_of_this_level_prop;
  } else {
    cum_proportion_drag_start = end_of_this_level_prop;
  }

  let change_from_start_prop;

  let y_start = y(cum_proportion_drag_start);
  let y_start_with_delta = y_start + e.dy;

  let prop_start = y.invert(y_start);
  let prop_end = y.invert(y_start_with_delta);

  //   Update data

  let change_in_prop = prop_end - prop_start;

  if (!dragging_from_bottom) {
    change_in_prop = -change_in_prop;
  }

  let target_level = level_keys[target_level_index];

  let new_val_this_lev = m_u[match_index][this_level_name] - change_in_prop;

  let new_val_target_lev = m_u[match_index][target_level] + change_in_prop;

  function isBetween(n, a, b) {
    return (n - a) * (n - b) <= 0;
  }

  if (
    isBetween(new_val_this_lev, 0, 1) &&
    isBetween(new_val_target_lev, 0, 1)
  ) {
    m_u[match_index][this_level_name] = new_val_this_lev;
    m_u[match_index][target_level] = new_val_target_lev;
  }

  return m_u;
}
)}

function _margin()
{
  let m_size = 60;
  return { top: 80, right: m_size, bottom: m_size, left: m_size };
}


function _get_scale(d3){return(
function(match_status, lam, x) {
  let padding = 0.000;
  let s1 = d3
    .scaleBand()
    .domain(['match'])
    .range([x(1 - lam), x(1)])
    .padding(padding);

  let s2 = d3
    .scaleBand()
    .domain(['non-match'])
    .range([x(0), x(1 - lam)])
    .padding(padding);

  if (match_status == 'match') {
    return s1;
  } else {
    return s2;
  }
}
)}

function _input_control(num_levels_to_level_keys){return(
function input_control(widget_data) {
  let num_levels = widget_data.m_u[0].length;
  let levels = num_levels_to_level_keys(num_levels);
  let m = levels.map(lev => widget_data.m_u[1][lev]);
  let u = levels.map(lev => widget_data.m_u[0][lev]);

  return {
    proportion_of_matches: widget_data.lam,
    comparison_columns: [
      {
        col_name: 'my column',
        m_probabilities: m,
        u_probabilities: u,
        num_levels: levels.length
      }
    ]
  };
}
)}

function _height(){return(
500
)}

function _unstacked_data_to_stacked(level_keys_from_unstacked_data,d3){return(
function(unstacked_data) {
  let level_keys = level_keys_from_unstacked_data(unstacked_data);
  let stack = d3
    .stack()
    .keys(level_keys)
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

  let stacked = stack(unstacked_data["m_u"]);
  stacked = stacked.map(d => (d.forEach(v => (v.key = d.key)), d));
  return { lam: unstacked_data.lam, m_u: stacked };
}
)}

function _level_keys_from_unstacked_data(){return(
function(unstacked_data) {
  return Object.keys(unstacked_data.m_u[0]).filter(d => d.includes('level_'));
}
)}

function _input_control_data_to_splink_settings(level_keys_from_unstacked_data,num_levels_to_level_keys){return(
function input_control_data_to_splink_settings(input_control_data) {
  let num_levels = level_keys_from_unstacked_data(input_control_data).length;
  let levels = num_levels_to_level_keys(num_levels);
  let m = levels.map(lev => input_control_data.m_u[1][lev]);
  let u = levels.map(lev => input_control_data.m_u[0][lev]);

  return {
    proportion_of_matches: input_control_data.lam,
    comparison_columns: [
      {
        col_name: ' ',
        m_probabilities: m,
        u_probabilities: u,
        num_levels: levels.length
      }
    ]
  };
}
)}

function _num_levels_to_level_keys(d3){return(
function(num_levels) {
  return d3.range(num_levels).map(d => {
    return "level_" + d;
  });
}
)}

function _format_tick(){return(
function(d) {
  return d.toString();
}
)}

function _normalise(){return(
function normalise(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return arr.map(d => d / sum);
}
)}

function _gen_starting_data(num_levels_to_level_keys,d3,normalise){return(
function(num_levels) {
  let level_keys = num_levels_to_level_keys(num_levels);
  let settings = {
    proportion_of_matches: 0.3,
    comparison_columns: [
      {
        col_name: " ",
        m_probabilities: null,
        u_probabilities: null
      }
    ]
  };

  let norm = d3.range(1, num_levels + 1).reduce((d, acc) => {
    return d + acc;
  }, 0);

  let m_probs = d3.range(1, num_levels + 1, 1).map(d => d**2)
  m_probs = normalise(m_probs);

  let u_probs = d3.range(num_levels, 0, -1).map(d => d**2);
  u_probs = normalise(u_probs);

  settings.comparison_columns[0].m_probabilities = m_probs;
  settings.comparison_columns[0].u_probabilities = u_probs;

  return settings;
}
)}

function _30(md){return(
md`#### External fns`
)}

function _32(md){return(
md`#### External libs`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _d3(require){return(
require("d3@6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof num_levels")).define("viewof num_levels", ["inputs"], _num_levels);
  main.variable(observer("num_levels")).define("num_levels", ["Generators", "viewof num_levels"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("viewof thing")).define("viewof thing", ["m_u_input_control","width","height","starting_data"], _thing);
  main.variable(observer("thing")).define("thing", ["Generators", "viewof thing"], (G, _) => G.input(_));
  main.variable(observer("gen_y_scale")).define("gen_y_scale", ["d3"], _gen_y_scale);
  main.variable(observer("m_u_input_control")).define("m_u_input_control", ["DOM","d3","margin","splink_data_to_unstacked_data","unstacked_data_to_stacked","num_levels_to_level_keys","get_level_colours_scale","inputs","gen_x_scale","gen_y_scale","html","get_tick_vals","redraw"], _m_u_input_control);
  main.variable(observer()).define(["thing"], _7);
  main.variable(observer("redraw")).define("redraw", ["gen_x_scale","gen_y_scale","get_scale","get_drag","get_label","get_tick_vals","d3","format_tick"], _redraw);
  main.variable(observer("starting_data")).define("starting_data", ["normalise","d3","num_levels"], _starting_data);
  main.variable(observer("splink_data_to_unstacked_data")).define("splink_data_to_unstacked_data", _splink_data_to_unstacked_data);
  main.variable(observer("get_tick_vals")).define("get_tick_vals", _get_tick_vals);
  main.variable(observer("get_label")).define("get_label", ["d3"], _get_label);
  main.variable(observer("gen_x_scale")).define("gen_x_scale", ["d3"], _gen_x_scale);
  main.variable(observer("get_level_colours_scale")).define("get_level_colours_scale", ["d3"], _get_level_colours_scale);
  main.variable(observer("get_drag")).define("get_drag", ["d3","get_lam","get_m_u","unstacked_data_to_stacked","Event"], _get_drag);
  main.variable(observer("get_lam")).define("get_lam", _get_lam);
  main.variable(observer("get_m_u")).define("get_m_u", _get_m_u);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("get_scale")).define("get_scale", ["d3"], _get_scale);
  main.variable(observer("input_control")).define("input_control", ["num_levels_to_level_keys"], _input_control);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("unstacked_data_to_stacked")).define("unstacked_data_to_stacked", ["level_keys_from_unstacked_data","d3"], _unstacked_data_to_stacked);
  main.variable(observer("level_keys_from_unstacked_data")).define("level_keys_from_unstacked_data", _level_keys_from_unstacked_data);
  main.variable(observer("input_control_data_to_splink_settings")).define("input_control_data_to_splink_settings", ["level_keys_from_unstacked_data","num_levels_to_level_keys"], _input_control_data_to_splink_settings);
  main.variable(observer("num_levels_to_level_keys")).define("num_levels_to_level_keys", ["d3"], _num_levels_to_level_keys);
  main.variable(observer("format_tick")).define("format_tick", _format_tick);
  main.variable(observer("normalise")).define("normalise", _normalise);
  main.variable(observer("gen_starting_data")).define("gen_starting_data", ["num_levels_to_level_keys","d3","normalise"], _gen_starting_data);
  main.variable(observer()).define(["md"], _30);
  const child1 = runtime.module(define1);
  main.import("get_m_u_chart", child1);
  main.import("get_bayes_factor_chart", child1);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
