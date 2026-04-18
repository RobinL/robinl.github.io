import define1 from "./817db6818ab226c0@104.js";
import define2 from "./34fd4ef09fb0509a@2296.js";

function _title(md){return(
md`# m and u probability generator with starting values

This page allows you to generate plausible starting values for m and u probabilities, to be used in the \`Splink\` settings object.

An alternative version with simpler input controls can be found [here](https://www.robinlinacre.com/m_u_generator/)`
)}

function _starting_data(inputs,initial_value){return(
inputs.textarea({
  label: "Settings",
  value: initial_value,
  monospace: true,
  rows: 40
})
)}

function _d(m_u_input_control,width,starting_data){return(
m_u_input_control(width, 700, JSON.parse(starting_data), 0, 1)
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

function _initial_value(){return(
`{
  "proportion_of_matches": 0.3,
  "comparison_columns": [
    {
      "col_name": " ",
      "m_probabilities": [0.8, 0.1, 0.1],
      "u_probabilities": [0.1, 0.2, 0.7]
    }
  ]
}`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("viewof starting_data")).define("viewof starting_data", ["inputs","initial_value"], _starting_data);
  main.variable(observer("starting_data")).define("starting_data", ["Generators", "viewof starting_data"], (G, _) => G.input(_));
  main.variable(observer("viewof d")).define("viewof d", ["m_u_input_control","width","starting_data"], _d);
  main.variable(observer("d")).define("d", ["Generators", "viewof d"], (G, _) => G.input(_));
  main.variable(observer("bf_chart")).define("bf_chart", ["get_bayes_factor_chart","input_control_data_to_splink_settings","d"], _bf_chart);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("settings_output")).define("settings_output", ["md","input_control_data_to_splink_settings","d"], _settings_output);
  main.variable(observer("initial_value")).define("initial_value", _initial_value);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("get_bayes_factor_chart", child1);
  const child2 = runtime.module(define2);
  main.import("m_u_input_control", child2);
  main.import("input_control_data_to_splink_settings", child2);
  main.import("gen_starting_data", child2);
  return main;
}
