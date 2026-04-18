function _1(md){return(
md`# Utils v2`
)}

function _inline_input(inputs,html){return(
function inline_input(view_to_bind, type = "number", width = "25px") {
  return inputs.bind(
    html`<input type=${type} style="width:${width};">`,
    view_to_bind
  );
}
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _time_period_picker(inputs,html){return(
function time_period_picker(view_to_bind) {
  return inputs.bind(
    html`<select>
    <option value="minutes">minute</option>
    <option value="hours">hour</option>
    <option value="days">day</option>
    <option value="weeks">week</option>
    <option value="months">month</option>
    <option value="years">year</option>
  </select>`,
    view_to_bind
  );
}
)}

function _miles(inputs){return(
new inputs.input(10000)
)}

function _driving_text(md,inline_input,$0){return(
md` You drive an average 
${inline_input($0, "number", "60px")} 
miles per 

miles per imperial gallon`
)}

function _7(miles){return(
miles
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inline_input")).define("inline_input", ["inputs","html"], _inline_input);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  main.variable(observer("time_period_picker")).define("time_period_picker", ["inputs","html"], _time_period_picker);
  main.variable(observer("viewof miles")).define("viewof miles", ["inputs"], _miles);
  main.variable(observer("miles")).define("miles", ["Generators", "viewof miles"], (G, _) => G.input(_));
  main.variable(observer("driving_text")).define("driving_text", ["md","inline_input","viewof miles"], _driving_text);
  main.variable(observer()).define(["miles"], _7);
  return main;
}
