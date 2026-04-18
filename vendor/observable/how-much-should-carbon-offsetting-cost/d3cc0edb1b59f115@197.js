// https://observablehq.com/@robinl/magic-energy-usage-and-carbon-emissions-converter@197
function _1(md){return(
md`# Magic energy usage and carbon emissions converter`
)}

function _conversion(html,from_options,eu)
{
  const value_input = html`<input type="number" >`;

  const units_from = html`
         <input name="unit_from" type="text" autocomplete="off" 
          placeholder="Units to convert from" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${from_options.map(d =>
                Object.assign(html`<option>`, {
                  value: d
                })
              )}
          </datalist>`;

  const units_to = html`<input name="units_to" type="text" autocomplete="off" 
          placeholder="Units to convert to" style="font-size: 1em;" list=options2>
          <datalist id="options2">
              ${from_options.map(d =>
                Object.assign(html`<option>`, {
                  value: d
                })
              )}
          </datalist>`;

  function form_on_change() {
    div.value = {
      value: value_input.value,
      from: units_from.children[0].value,
      to: units_to.children[0].value
    };
    div.dispatchEvent(new CustomEvent('input'));
  }

  units_from.onclick = () => {
    units_from.children[0].value = "";
    units_to.children[0].value = "";
  };

  units_to.onclick = () => {
    units_to.children[0].value = "";
  };

  units_from.onchange = () => {
    let selected_from = units_from.children[0].value;
    let possible_into_units = Object.keys(
      eu.convert._constants_dict[selected_from]
    );

    let datalist = units_to.children[1];
    let options_list = possible_into_units.reduce(
      (a, d) => `${a}<option value="${d}">`,
      ""
    );
    let as_html = html`options_list`;
    console.log(as_html.outerHTML);
    datalist.innerHTML = options_list;

    form_on_change();
  };

  // value_input.onchange = form_on_change;
  value_input.onkeyup = form_on_change;

  units_to.onchange = form_on_change;

  const div = html`<p>Convert the value ${value_input} <br/> from ${units_from} <br/> into ${units_to}<br/></p>`;

  div.value = { value: "", from: "", to: "" };
  return div;
}


function _converted_value(conversion,eu,md)
{
  let f1 = conversion["value"] != "";
  let f2 = conversion["from"] != "";
  let f3 = conversion["to"] != "";

  if (f1 && f2 && f3) {
    let c = conversion;
    let val = eu.convert.convert_units(c["from"], c["to"]) * c["value"];
    return md`${c["value"]} ${c["from"]} is ${val} ${c["to"]}`;
  } else {
    return md`Please enter a value and select from and to units`;
  }
}


function _4(get_sources,conversion){return(
get_sources(conversion["from"], conversion["to"])
)}

function _get_sources(md,eu,html){return(
function get_sources(from, to) {
  function if_null_blank(d) {
    if (d) {
      return d;
    } else {
      return "";
    }
  }

  function url_to_link(d) {
    if (d) {
      return `<a href="${d}">link</a>`;
    } else {
      return "";
    }
  }

  let markdown = md`Conversion from \`${from}\` to \`${to}\``;
  let sources =
    eu.convert._constants_dict[from][to]["sources"];

  let table = html`<table> 
   <tr>
    <th>Unit conversion</th>
    <th>URL</th>
    <th>Notes</th>
</tr>
   
   ${sources.map(
     d => html`<tr>
<td>${if_null_blank(d["from_to"])}</td>
<td>${url_to_link(d["url"])}</td>
<td>${if_null_blank(d["desc"])}</td>
</tr>`
   )}
   
`;

  return html`${markdown} ${table}`;
}
)}

function _from_options(eu){return(
Object.keys(eu.convert._constants_dict)
)}

function _7(eu){return(
eu.convert._constants_dict["imperial_gas_units"][
  "gbp_to_generate_nuclear_hinkley_point_uk"
]
)}

function _eu(require){return(
require("@robinl/energy_usage@0.1.6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof conversion")).define("viewof conversion", ["html","from_options","eu"], _conversion);
  main.variable(observer("conversion")).define("conversion", ["Generators", "viewof conversion"], (G, _) => G.input(_));
  main.variable(observer("converted_value")).define("converted_value", ["conversion","eu","md"], _converted_value);
  main.variable(observer()).define(["get_sources","conversion"], _4);
  main.variable(observer("get_sources")).define("get_sources", ["md","eu","html"], _get_sources);
  main.variable(observer("from_options")).define("from_options", ["eu"], _from_options);
  main.variable(observer()).define(["eu"], _7);
  main.variable(observer("eu")).define("eu", ["require"], _eu);
  return main;
}
