import define1 from "./146f352f1166f0d1@2202.js";

function _1(md){return(
md`# Interface`
)}

function _bird_interface(bird_list,html,width,clean_scientific_name,scientific_lookup){return(
function bird_interface(include_rare) {
  let birds_for_datalist;

  if (include_rare) {
    birds_for_datalist = bird_list;
  } else {
    birds_for_datalist = bird_list.filter(d => d.roughly_how_common > 100000);
  }

  let as = html`<input  id='birdinputbox' name="dep" type="text" autocomplete="off" onfocus="blur();" inputmode='none' value='' placeholder="Type or select a bird to begin" style="font-size: 1em; width:${width}px" list=options>
          <datalist id="options">
              ${birds_for_datalist.map(d =>
                Object.assign(html`<option>`, {
                  label: d["common_name"],
                  value: d["scientific_name"]
                })
              )}
          </datalist>`;

  let div = html`<div>${as}`;
  div.value = {};

  as.children[0].onfocus = function() {
    document.getElementById('birdinputbox').setAttribute("inputmode", '');
    as.children[0].value = '';
  };

  as.oninput = e => {
    e.stopPropagation();
  };

  as.onchange = () => {
    let raw_value = as.children[0].value;
    let cleaned_raw_value = clean_scientific_name(raw_value);

    document.getElementById('birdinputbox').setAttribute("inputmode", 'none');
    let value = {};
    if (cleaned_raw_value in scientific_lookup) {
      value['free_text'] = false;
      value['scientific_name'] = raw_value;
      value['common_name'] =
        scientific_lookup[cleaned_raw_value]['common_name'];
      value['inaturalist_id'] =
        scientific_lookup[cleaned_raw_value]['inaturalist_id'];
      value['raw'] = raw_value;
    } else {
      value['free_text'] = true;
      value['raw'] = raw_value;
    }

    div.value = value;
    div.dispatchEvent(new CustomEvent('input'));
  };

  return div;
}
)}

function _bird(bird_interface){return(
bird_interface()
)}

function _4(bird){return(
bird
)}

function _include_rare_checkbox(checkbox){return(
function() {
  return checkbox({
    options: [{ value: "toggle", label: "Include rare birds? (causes lag on selection box)" }],
    value: ""
  });
}
)}

function _6(bird){return(
bird
)}

function _d3(require){return(
require("d3-dsv","d3-fetch")
)}

function _bird_list_old(d3){return(
d3.csv(
  "https://gist.githubusercontent.com/RobinL/bb510e6e7a0ee6e51c8746adcf21cd57/raw/205b23451ed36b1c4ace91293d235dd4cb2e8a44/birds_to_learn.csv"
)
)}

function _bird_list(d3,compare_birds_sort){return(
d3.csv(
  "https://raw.githubusercontent.com/RobinL/birds_list/master/birds_list_with_inaturalist_id.csv",
  d3.autoType
).then(birds => birds.sort(compare_birds_sort))
)}

function _compare_birds_sort(){return(
function(a,b)  {
    if (a["common_name"] > b["common_name"]) {
    return 1}
    else {
      return -1
    }
  }
)}

function _scientific_lookup(bird_list,clean_scientific_name)
{
  let sl = {};
  bird_list.forEach(d => {
    let key = d["scientific_name"];
    key = clean_scientific_name(key);
    sl[key] = d;
  });
  return sl;
}


function _clean_scientific_name(){return(
function clean_scientific_name(sci_name) {
  return sci_name
    .toLowerCase()
    .trim()
    .replace(" ", "");
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("bird_interface")).define("bird_interface", ["bird_list","html","width","clean_scientific_name","scientific_lookup"], _bird_interface);
  main.variable(observer("viewof bird")).define("viewof bird", ["bird_interface"], _bird);
  main.variable(observer("bird")).define("bird", ["Generators", "viewof bird"], (G, _) => G.input(_));
  main.variable(observer()).define(["bird"], _4);
  main.variable(observer("include_rare_checkbox")).define("include_rare_checkbox", ["checkbox"], _include_rare_checkbox);
  main.variable(observer()).define(["bird"], _6);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("bird_list_old")).define("bird_list_old", ["d3"], _bird_list_old);
  main.variable(observer("bird_list")).define("bird_list", ["d3","compare_birds_sort"], _bird_list);
  main.variable(observer("compare_birds_sort")).define("compare_birds_sort", _compare_birds_sort);
  main.variable(observer("scientific_lookup")).define("scientific_lookup", ["bird_list","clean_scientific_name"], _scientific_lookup);
  main.variable(observer("clean_scientific_name")).define("clean_scientific_name", _clean_scientific_name);
  const child1 = runtime.module(define1);
  main.import("checkbox", child1);
  return main;
}
