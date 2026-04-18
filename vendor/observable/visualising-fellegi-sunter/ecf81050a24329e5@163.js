function _1(md){return(
md`# Fellegi-Sunter visualisation interface`
)}

function _my_interface(inputs,tex,html){return(
function my_interface(col) {
  let rad_value = col["gamma_value"] == 1 ? "match" : "mismatch";
  const rad1 = inputs.radio(["match", "mismatch"], {
    label: `Comparison of ${col["col_name"]} is a:`,
    value: rad_value
  });

  const u0 = inputs.range([0, 1], {
    label: tex`u_\text{${col["col_name"]},level\_0}`,
    value: col["u_probabilities"][0]
  });
  const u1 = inputs.range([0, 1], {
    label: tex`u_\text{${col["col_name"]},level\_1}`,
    value: col["u_probabilities"][1]
  });

  const m0 = inputs.range([0, 1], {
    label: tex`m_\text{${col["col_name"]},level\_0}`,
    value: col["m_probabilities"][0]
  });
  const m1 = inputs.range([0, 1], {
    label: tex`m_\text{${col["col_name"]},level\_1}`,
    value: col["m_probabilities"][1]
  });

  const form = html`
    <h4>Choose value and parameters for ${col["col_name"]}</h4>
    ${rad1}
    <div class="container">
      <div class="item-0">${u0}${m0}</div>
      <div class="item-1">${u1}${m1}</div>
    </div>
  `;

  let get_value = () => {
    return {
      col_name: col["col_name"],
      gamma_value: rad1.querySelector("input").checked ? 1 : 0,
      u_probabilities: [u0.value, u1.value],
      m_probabilities: [m0.value, m1.value]
    };
  };

  rad1.onclick = () => {
    // form.dispatchEvent(new CustomEvent("input"));
    console.log(rad1.value);
    form.value = get_value();
  };

  u0.oninput = () => {
    u1.value = 1.0 - u0.value;
    form.value = get_value();
    // form.dispatchEvent(new CustomEvent("input"));
  };

  u1.oninput = () => {
    u0.value = 1.0 - u1.value;
    form.value = get_value();
    // form.dispatchEvent(new CustomEvent("input"));
  };

  m0.oninput = () => {
    m1.value = 1.0 - m0.value;
    form.value = get_value();
    // form.dispatchEvent(new CustomEvent("input"));
  };

  m1.oninput = () => {
    m0.value = 1.0 - m1.value;
    form.value = get_value();
    // form.dispatchEvent(new CustomEvent("input"));
  };

  form.value = get_value();

  return form;
}
)}

function _fname_val(my_interface){return(
my_interface({
  col_name: "fname",
  gamma_value: 1,
  m_probabilities: [0.3, 0.7],
  u_probabilities: [0.75, 0.25]
})
)}

function _4(fname_val){return(
fname_val
)}

function _sname_val(my_interface){return(
my_interface({
  col_name: "sname",
  gamma_value: 0,
  m_probabilities: [0.2, 0.8],
  u_probabilities: [0.85, 0.15]
})
)}

function _dob_val(my_interface){return(
my_interface({
  col_name: "dob",
  gamma_value: 1,
  m_probabilities: [0.2, 0.8],
  u_probabilities: [0.8, 0.2]
})
)}

function _town_val(my_interface){return(
my_interface({
  col_name: "town",
  gamma_value: 1,
  m_probabilities: [0.3, 0.7],
  u_probabilities: [0.9, 0.1]
})
)}

function _lam(inputs,tex){return(
inputs.range([0, 1], { label: tex`\lambda`, value: 0.3 })
)}

function _splink_settings(lam,fname_val,sname_val,dob_val,town_val)
{
  return {
    proportion_of_matches: lam,
    comparison_columns: [fname_val, sname_val, dob_val, town_val]
  };
}


function _form_styles(html){return(
html`<style>.container {
  display: flex;
flex-wrap: wrap;
  gap: 12px;
}
</style>
`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("my_interface")).define("my_interface", ["inputs","tex","html"], _my_interface);
  main.variable(observer("viewof fname_val")).define("viewof fname_val", ["my_interface"], _fname_val);
  main.variable(observer("fname_val")).define("fname_val", ["Generators", "viewof fname_val"], (G, _) => G.input(_));
  main.variable(observer()).define(["fname_val"], _4);
  main.variable(observer("viewof sname_val")).define("viewof sname_val", ["my_interface"], _sname_val);
  main.variable(observer("sname_val")).define("sname_val", ["Generators", "viewof sname_val"], (G, _) => G.input(_));
  main.variable(observer("viewof dob_val")).define("viewof dob_val", ["my_interface"], _dob_val);
  main.variable(observer("dob_val")).define("dob_val", ["Generators", "viewof dob_val"], (G, _) => G.input(_));
  main.variable(observer("viewof town_val")).define("viewof town_val", ["my_interface"], _town_val);
  main.variable(observer("town_val")).define("town_val", ["Generators", "viewof town_val"], (G, _) => G.input(_));
  main.variable(observer("viewof lam")).define("viewof lam", ["inputs","tex"], _lam);
  main.variable(observer("lam")).define("lam", ["Generators", "viewof lam"], (G, _) => G.input(_));
  main.variable(observer("splink_settings")).define("splink_settings", ["lam","fname_val","sname_val","dob_val","town_val"], _splink_settings);
  main.variable(observer("form_styles")).define("form_styles", ["html"], _form_styles);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  return main;
}
