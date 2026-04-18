import define1 from "./6b9b5e1eb1b4504e@107.js";
import define2 from "./d2b70dd4960f3314@511.js";

function _1(md){return(
md`# Eating`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

function _eating_text_more(md,inline_input,$0,$1,$2,gender_picker,$3,activity_level_picker,$4,diet_picker,$5){return(
md` You are 
${inline_input($0, "number", "3rem")} 
cm high, 
you are 
${inline_input($1, "number", "3rem")} 
years old,
you weigh
${inline_input($2, "number", "60px")} 
kg,
you're
${gender_picker($3)} 
and you have a 
${activity_level_picker($4)} 
lifestyle, and your diet type is 
${diet_picker($5)}
`
)}

function _eating_text(md,activity_level_picker,$0,diet_picker,$1){return(
md` You have a ${activity_level_picker($0)} 
lifestyle, and your diet type is 
${diet_picker($1)}
`
)}

function _kwh(eu,activity_level,diet_type){return(
eu.eating.kwh_per_day(84, 165, 40, "Female", activity_level, diet_type)
)}

function _kwh_formatted(eu,kwh){return(
eu.utils.format_kwh(kwh)
)}

function _eating_chart(unit_chart,kwh){return(
unit_chart({"Food/Eating":kwh})
)}

function _eating_conclusion(md,kwh_formatted){return(
md`= ${kwh_formatted} kwh per day`
)}

function _eating_data(kwh){return(
[{"name":"Food/Eating", "value": kwh}]
)}

function _weight_kg(inputs){return(
new inputs.input(68)
)}

function _height_cm(inputs){return(
new inputs.input(178)
)}

function _age_years(inputs){return(
new inputs.input(34)
)}

function _gender(inputs){return(
new inputs.input("male")
)}

function _activity_level(inputs){return(
new inputs.input("moderately_active")
)}

function _diet_type(inputs){return(
new inputs.input("omnivore")
)}

function _eu(require){return(
require('@robinl/energy_usage@0.0.25')
)}

function _activity_level_picker(inputs,html){return(
function activity_level_picker(view_to_bind) {
  return inputs.bind(
    html`<select>
    <option value="sedentary_light">Sedentary/lightly active</option>
    <option value="moderately_active">Moderately active</option>
    <option value="vigorous">Vigorous</option>
  </select>`,
    view_to_bind
  );
}
)}

function _gender_picker(inputs,html){return(
function gender_picker(view_to_bind) {
  return inputs.bind(
    html`<select>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>`,
    view_to_bind
  );
}
)}

function _diet_picker(inputs,html){return(
function diet_picker(view_to_bind) {
  return inputs.bind(
    html`<select>
    <option value="omnivore">Omnivore</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="vegan">Vegan</option>
  </select>`,
    view_to_bind
  );
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("inline_input", child1);
  main.import("time_period_picker", child1);
  main.variable(observer("eating_text_more")).define("eating_text_more", ["md","inline_input","viewof height_cm","viewof age_years","viewof weight_kg","gender_picker","viewof gender","activity_level_picker","viewof activity_level","diet_picker","viewof diet_type"], _eating_text_more);
  main.variable(observer("eating_text")).define("eating_text", ["md","activity_level_picker","viewof activity_level","diet_picker","viewof diet_type"], _eating_text);
  main.variable(observer("kwh")).define("kwh", ["eu","activity_level","diet_type"], _kwh);
  main.variable(observer("kwh_formatted")).define("kwh_formatted", ["eu","kwh"], _kwh_formatted);
  main.variable(observer("eating_chart")).define("eating_chart", ["unit_chart","kwh"], _eating_chart);
  main.variable(observer("eating_conclusion")).define("eating_conclusion", ["md","kwh_formatted"], _eating_conclusion);
  main.variable(observer("eating_data")).define("eating_data", ["kwh"], _eating_data);
  main.variable(observer("viewof weight_kg")).define("viewof weight_kg", ["inputs"], _weight_kg);
  main.variable(observer("weight_kg")).define("weight_kg", ["Generators", "viewof weight_kg"], (G, _) => G.input(_));
  main.variable(observer("viewof height_cm")).define("viewof height_cm", ["inputs"], _height_cm);
  main.variable(observer("height_cm")).define("height_cm", ["Generators", "viewof height_cm"], (G, _) => G.input(_));
  main.variable(observer("viewof age_years")).define("viewof age_years", ["inputs"], _age_years);
  main.variable(observer("age_years")).define("age_years", ["Generators", "viewof age_years"], (G, _) => G.input(_));
  main.variable(observer("viewof gender")).define("viewof gender", ["inputs"], _gender);
  main.variable(observer("gender")).define("gender", ["Generators", "viewof gender"], (G, _) => G.input(_));
  main.variable(observer("viewof activity_level")).define("viewof activity_level", ["inputs"], _activity_level);
  main.variable(observer("activity_level")).define("activity_level", ["Generators", "viewof activity_level"], (G, _) => G.input(_));
  main.variable(observer("viewof diet_type")).define("viewof diet_type", ["inputs"], _diet_type);
  main.variable(observer("diet_type")).define("diet_type", ["Generators", "viewof diet_type"], (G, _) => G.input(_));
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  main.variable(observer("activity_level_picker")).define("activity_level_picker", ["inputs","html"], _activity_level_picker);
  main.variable(observer("gender_picker")).define("gender_picker", ["inputs","html"], _gender_picker);
  main.variable(observer("diet_picker")).define("diet_picker", ["inputs","html"], _diet_picker);
  const child2 = runtime.module(define2);
  main.import("unit_chart", child2);
  return main;
}
