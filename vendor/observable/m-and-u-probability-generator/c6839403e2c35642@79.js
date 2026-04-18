// https://observablehq.com/@robinl/m-and-u-probability-generator@79
import define1 from "./817db6818ab226c0@104.js";
import define2 from "./34fd4ef09fb0509a@2296.js";

function _title(md){return(
md`# m and u probability generator

This page allows you to generate plausible starting values for m and u probabilities, to be used in the \`Splink\` settings object.

A version that allows you to copy and paste starting values from a Splink settings object is [here](https://www.robinlinacre.com/m_u_generator_starting/).`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/m_u_generator/).*`
)}

function _num_levels(inputs){return(
inputs.range([2, 8], {
  step: 1,
  label: "Choose num levels",
  value: 3
})
)}

function _stretch_axis(inputs){return(
inputs.range([1, 8], {
  step: 1,
  label: "Stretch axis",
  value: 1
})
)}

function _d(m_u_input_control,width,starting_data,stretch_axis){return(
m_u_input_control(width, 700, starting_data, 0, stretch_axis)
)}

function _bf_chart(get_bayes_factor_chart,input_control_data_to_splink_settings,d){return(
get_bayes_factor_chart(input_control_data_to_splink_settings(d))
)}

function _para_1(md){return(
md`You may now use the following settings in your Splink settings object`
)}

function _settings_output(md,input_control_data_to_splink_settings,d){return(
md`
\`\`\`
settings = ${JSON.stringify(input_control_data_to_splink_settings(d), null, 4)}
\`\`\`
`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _starting_data(gen_starting_data,num_levels){return(
gen_starting_data(num_levels)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("viewof num_levels")).define("viewof num_levels", ["inputs"], _num_levels);
  main.variable(observer("num_levels")).define("num_levels", ["Generators", "viewof num_levels"], (G, _) => G.input(_));
  main.variable(observer("viewof stretch_axis")).define("viewof stretch_axis", ["inputs"], _stretch_axis);
  main.variable(observer("stretch_axis")).define("stretch_axis", ["Generators", "viewof stretch_axis"], (G, _) => G.input(_));
  main.variable(observer("viewof d")).define("viewof d", ["m_u_input_control","width","starting_data","stretch_axis"], _d);
  main.variable(observer("d")).define("d", ["Generators", "viewof d"], (G, _) => G.input(_));
  main.variable(observer("bf_chart")).define("bf_chart", ["get_bayes_factor_chart","input_control_data_to_splink_settings","d"], _bf_chart);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("settings_output")).define("settings_output", ["md","input_control_data_to_splink_settings","d"], _settings_output);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("get_bayes_factor_chart", child1);
  main.variable(observer("starting_data")).define("starting_data", ["gen_starting_data","num_levels"], _starting_data);
  const child2 = runtime.module(define2);
  main.import("m_u_input_control", child2);
  main.import("input_control_data_to_splink_settings", child2);
  main.import("gen_starting_data", child2);
  return main;
}
