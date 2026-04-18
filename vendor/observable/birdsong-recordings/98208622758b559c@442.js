// https://observablehq.com/@robinl/birdsong-recordings@442
import define1 from "./fe79dfecacbfd10e@317.js";
import define2 from "./d313b158e2200d6b@274.js";
import define3 from "./20eedcbe81e569f0@721.js";

function _title(md){return(
md`# UK birdsong recordings
Select a bird from the list below or type a scientific name for best results.

Source of recordings:  [xeno-canto](https://www.xeno-canto.org/)`
)}

function _xeno_results(xeno_canto_query,search_string){return(
xeno_canto_query(search_string)
)}

function _bird(bird_interface,include_rare){return(
bird_interface(include_rare)
)}

function _4(bird){return(
bird
)}

function _include_rare(include_rare_checkbox){return(
include_rare_checkbox()
)}

function _audio_table(table_of_audio,xeno_results){return(
table_of_audio(xeno_results.recordings)
)}

function _photos_title(md){return(
md`## Photos from iNaturalist
Click on photo for full size
`
)}

function _gallery(picture_gallery,inat_results){return(
picture_gallery(inat_results)
)}

function _inat_results(bird,inaturalist_query)
{
  if (Object.keys(bird).length > 0) {
    return inaturalist_query(bird);
  } else {
    return [];
  }
}


function _search_string(bird)
{
  if (bird == '') {
    return ''
  }
  if (bird['free_text']) {
    return bird['raw']
  } else {
    return bird['scientific_name']
  }
}


function _12(md){return(
md`## Imports`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("xeno_results")).define("xeno_results", ["xeno_canto_query","search_string"], _xeno_results);
  main.variable(observer("viewof bird")).define("viewof bird", ["bird_interface","include_rare"], _bird);
  main.variable(observer("bird")).define("bird", ["Generators", "viewof bird"], (G, _) => G.input(_));
  main.variable(observer()).define(["bird"], _4);
  main.variable(observer("viewof include_rare")).define("viewof include_rare", ["include_rare_checkbox"], _include_rare);
  main.variable(observer("include_rare")).define("include_rare", ["Generators", "viewof include_rare"], (G, _) => G.input(_));
  main.variable(observer("audio_table")).define("audio_table", ["table_of_audio","xeno_results"], _audio_table);
  main.variable(observer("photos_title")).define("photos_title", ["md"], _photos_title);
  main.variable(observer("gallery")).define("gallery", ["picture_gallery","inat_results"], _gallery);
  main.variable(observer("inat_results")).define("inat_results", ["bird","inaturalist_query"], _inat_results);
  const child1 = runtime.module(define1);
  main.import("bird_interface", child1);
  main.import("include_rare_checkbox", child1);
  main.variable(observer("search_string")).define("search_string", ["bird"], _search_string);
  main.variable(observer()).define(["md"], _12);
  const child2 = runtime.module(define2);
  main.import("inaturalist_query", child2);
  main.import("picture_gallery", child2);
  const child3 = runtime.module(define3);
  main.import("xeno_canto_query", child3);
  main.import("table_of_audio", child3);
  return main;
}
