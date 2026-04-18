import define1 from "./146f352f1166f0d1@2202.js";
import define2 from "./d313b158e2200d6b@274.js";
import define3 from "./20eedcbe81e569f0@721.js";

function _title(md){return(
md`# UK Birdsong quiz`
)}

function _tag(md){return(
md`Are you able to identify common UK birds from their song?`
)}

function _settings(md){return(
md`**Settings:** 

Please select which birds you'd like to include in your quiz:`
)}

function _select_your_quiz(html,quiz_list_urls)
{
  let answer = html`<input id='select-quiz' 
                     type='text'
                     autocomplete='off'
                     inputmode='' 
                     value='20 most common birds'    
                     placeholder="Select which birds to include in quiz..." 
                     style="font-size: 1em; width: 320px" 
                     list=options2>

          <datalist id="options2">
              ${quiz_list_urls.map((d) =>
                Object.assign(html`<option>`, {
                  value: d["name"]
                })
              )}
          </datalist>`;

  let upload = html`<input name="file_input" class="inputfile" type="file">`;

  let or_blurb = html`<br><span>or upload custom bird list .csv created <a href='https://observablehq.com/@robinl/birdsong-quiz-list-creator'>here:`;

  let style = html`<style>
    .inputfile {padding-left: 10px}`;

  let div = html`${answer}${or_blurb}${style}${upload}`;

  div.value = answer.children[0].value;

  answer.onchange = () => {
    upload.value = null;
    div.value = answer.children[0].value;
    div.dispatchEvent(new CustomEvent("input"));
  };

  answer.children[0].onfocus = function () {
    answer.children[0].value = "";
  };

  answer.children[0].onclick = function () {
    answer.children[0].value = "";
  };

  upload.onchange = () => {
    let file = upload.files[0];

    let data = file.text();
    div.value = data;
    answer.children[0].value = "Custom upload...";

    div.dispatchEvent(new CustomEvent("input"));
  };

  return div;
}


function _quiz(md){return(
md`**Quiz**`
)}

function _my_interface(md,get_audio_controls,html,width,quiz_birds,get_inaturalist_photos,$0,random_bird,$1,$2,$3,$4,previous_answer,previous_selection,scientific_name_lookup,score,total)
{
  let title = md`
  Play the audio clips below, enter your answer and hit submit.
  `;

  let audio_controls = get_audio_controls();

  let answer = html`<input id='birdinputbox' 
                     name="dep" 
                     type="text"  
                     inputmode='' 
                     value=''    
                     placeholder="Choose your answer from this list..." 
                     style="font-size: 1em; width:${width}px" 
                     list=options>

          <datalist id="options">
              ${quiz_birds.map((d) =>
                Object.assign(html`<option>`, {
                  label: d["common_name"],
                  value: d["scientific_name"]
                })
              )}
          </datalist>`;

  let display_clue = html`<input type="button" value="Display clue">`;
  let gallery = get_inaturalist_photos();

  let submit = html`<input type="button" value="Submit answer">`;

  let results = "";

  let your_score = "";

  display_clue.onclick = () => {
    document.getElementById("bird_gallery").style.display = "inline-block";
  };

  answer.onchange = () => {
    document.getElementById("birdinputbox").setAttribute("inputmode", "none");
  };
  submit.onclick = () => {
    $0.value += 1;

    let selected_bird = answer.children[0].value;
    let actual_bird = random_bird.scientific_name;
    let correct = selected_bird == actual_bird;

    $1.value = selected_bird;
    $2.value = actual_bird;

    if (correct) {
      $3.value += 1;
    }

    $4.value += 1;

    document.getElementById("birdinputbox").setAttribute("inputmode", "");
    document.getElementById("bird_gallery").style.display = "none";
  };

  if (previous_answer != "") {
    let emoji = "👎";

    if (previous_answer == previous_selection) {
      emoji = "✔";
    }

    results = md`${emoji} The answer to the previous question was ${
      scientific_name_lookup[previous_answer].common_name
    } (*${previous_answer.toLowerCase()}*).  You chose ${
      scientific_name_lookup[previous_selection].common_name
    }  (*${previous_selection.toLowerCase()}*).`;
  }

  your_score = md`You currently have ${score} points out of ${total}`;

  return html`${title}
             ${audio_controls}
             ${gallery}
             ${answer}
             ${submit}
             ${display_clue}
              ${results}
             ${your_score}`;
}


function _other_link(md){return(
md`You can find a more comprehensive list of audio recordings for each bird, and photos of them [here](https://robinlinacre.com/birdsong/).`
)}

function _get_audio_controls(results,md,html,random_recordings,toTitleCase,recording_to_mp3_url){return(
function() {

if (results.recordings.length == 0){
  return md`Please wait, loading recordings`
} else {
  return html`<style>
  .audio_container {display: inline-block;}
  .audio_container div {display: block;  text-align: center}
  </style>
<div>
  ${random_recordings.map(d => html`<div class='audio_container'><div><a href='${d.url}'>${toTitleCase(d.type)}<div><audio controls><source src='${recording_to_mp3_url(d)}' type='audio/mpeg'>   </audio>`)}`
}


}
)}

function _get_inaturalist_photos(get_n_from_array_at_random,inaturalist_pics,html,width){return(
function () {
  let photos_for_clue = get_n_from_array_at_random(inaturalist_pics, 6);

  return html`<style> 
.collection {width: ${width}px; }
.collection .species { display: inline-block }
.collection img { display: inline-block; width: 6; height: 6em; object-fit: cover}

</style>

<h2>

<div class="collection" id="bird_gallery" style="display: none" >

${photos_for_clue.map(
  (s) => `<div class="species">
  <img src="${s.photos[0].url_medium}">
`
)}
</div>
`;
}
)}

function _inaturalist_pics(random_bird,inaturalist_query)
{
  let query = { raw: random_bird["scientific_name"] };
  return inaturalist_query(query);
}


function _trigger(){return(
0
)}

function _score(){return(
0
)}

function _total(){return(
0
)}

function _previous_answer(){return(
""
)}

function _previous_selection(){return(
""
)}

function _pictures_visibile(){return(
false
)}

function _19(md){return(
md`
- Present user with sound clips from a random bird
- Use can see whether song or call
- User can select how common
`
)}

function _bird_list(d3,compare_birds_sort){return(
d3.csv(
  "https://raw.githubusercontent.com/RobinL/birds_list/master/the_british_list.csv",
  d3.autoType
).then(birds => birds.sort(compare_birds_sort))
)}

function _scientific_name_lookup(bird_list)
{
 
  let lookup = {}
  bird_list.forEach(d => lookup[d.scientific_name] = d)
  return lookup
}


function _quiz_birds(select_your_quiz,quiz_name_to_url_lookup,d3)
{
      if (select_your_quiz in quiz_name_to_url_lookup) {
        let url = quiz_name_to_url_lookup[select_your_quiz]["url"]
        return d3.csv(url)
      } else {
        return d3.csvParse(select_your_quiz)
      }

}


function _compare_birds_sort(){return(
function(a,b)  {
    if (a["common_name"] > b["common_name"]) {
    return 1}
    else {
      return -1
    }
  }
)}

function _d3(require){return(
require("d3")
)}

function _results(xeno_canto_query,random_bird)
{
  return xeno_canto_query(
    random_bird["scientific_name"],
    "",
    "A",
    "United Kingdom"
  );
}


function _random_recordings(results,get_n_from_array_at_random)
{
  let len = results.recordings.length
  if (len == 0) {
    return []
  }
  let num_to_get = Math.min(len, 6)
  return get_n_from_array_at_random(results.recordings, num_to_get)
  
}


function _random_bird(trigger,get_n_from_array_at_random,quiz_birds)
{
  trigger;
  return get_n_from_array_at_random(quiz_birds, 1)[0]
  
}


function _quiz_list_urls(){return(
[
  {"name": "10 most common birds", "url": "https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_10.csv"},
   {"name": "20 most common birds", "url":"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_20.csv"},
   {"name": "30 most common birds", "url":"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_30.csv"},
   {"name": "40 most common birds", "url":"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_40.csv"},
  ]
)}

function _quiz_name_to_url_lookup(quiz_list_urls)
{
     let lookup = {}
  quiz_list_urls .forEach(d => lookup[d.name] = d)
  return lookup
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("tag")).define("tag", ["md"], _tag);
  main.variable(observer("settings")).define("settings", ["md"], _settings);
  main.variable(observer("viewof select_your_quiz")).define("viewof select_your_quiz", ["html","quiz_list_urls"], _select_your_quiz);
  main.variable(observer("select_your_quiz")).define("select_your_quiz", ["Generators", "viewof select_your_quiz"], (G, _) => G.input(_));
  main.variable(observer("quiz")).define("quiz", ["md"], _quiz);
  main.variable(observer("my_interface")).define("my_interface", ["md","get_audio_controls","html","width","quiz_birds","get_inaturalist_photos","mutable total","random_bird","mutable previous_selection","mutable previous_answer","mutable score","mutable trigger","previous_answer","previous_selection","scientific_name_lookup","score","total"], _my_interface);
  main.variable(observer("other_link")).define("other_link", ["md"], _other_link);
  const child1 = runtime.module(define1);
  main.import("file", child1);
  main.variable(observer("get_audio_controls")).define("get_audio_controls", ["results","md","html","random_recordings","toTitleCase","recording_to_mp3_url"], _get_audio_controls);
  main.variable(observer("get_inaturalist_photos")).define("get_inaturalist_photos", ["get_n_from_array_at_random","inaturalist_pics","html","width"], _get_inaturalist_photos);
  const child2 = runtime.module(define2);
  main.import("inaturalist_query", child2);
  main.variable(observer("inaturalist_pics")).define("inaturalist_pics", ["random_bird","inaturalist_query"], _inaturalist_pics);
  main.define("initial trigger", _trigger);
  main.variable(observer("mutable trigger")).define("mutable trigger", ["Mutable", "initial trigger"], (M, _) => new M(_));
  main.variable(observer("trigger")).define("trigger", ["mutable trigger"], _ => _.generator);
  main.define("initial score", _score);
  main.variable(observer("mutable score")).define("mutable score", ["Mutable", "initial score"], (M, _) => new M(_));
  main.variable(observer("score")).define("score", ["mutable score"], _ => _.generator);
  main.define("initial total", _total);
  main.variable(observer("mutable total")).define("mutable total", ["Mutable", "initial total"], (M, _) => new M(_));
  main.variable(observer("total")).define("total", ["mutable total"], _ => _.generator);
  main.define("initial previous_answer", _previous_answer);
  main.variable(observer("mutable previous_answer")).define("mutable previous_answer", ["Mutable", "initial previous_answer"], (M, _) => new M(_));
  main.variable(observer("previous_answer")).define("previous_answer", ["mutable previous_answer"], _ => _.generator);
  main.define("initial previous_selection", _previous_selection);
  main.variable(observer("mutable previous_selection")).define("mutable previous_selection", ["Mutable", "initial previous_selection"], (M, _) => new M(_));
  main.variable(observer("previous_selection")).define("previous_selection", ["mutable previous_selection"], _ => _.generator);
  main.define("initial pictures_visibile", _pictures_visibile);
  main.variable(observer("mutable pictures_visibile")).define("mutable pictures_visibile", ["Mutable", "initial pictures_visibile"], (M, _) => new M(_));
  main.variable(observer("pictures_visibile")).define("pictures_visibile", ["mutable pictures_visibile"], _ => _.generator);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("bird_list")).define("bird_list", ["d3","compare_birds_sort"], _bird_list);
  main.variable(observer("scientific_name_lookup")).define("scientific_name_lookup", ["bird_list"], _scientific_name_lookup);
  main.variable(observer("quiz_birds")).define("quiz_birds", ["select_your_quiz","quiz_name_to_url_lookup","d3"], _quiz_birds);
  main.variable(observer("compare_birds_sort")).define("compare_birds_sort", _compare_birds_sort);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child3 = runtime.module(define3);
  main.import("xeno_canto_query", child3);
  main.import("get_n_from_array_at_random", child3);
  main.import("recording_to_mp3_url", child3);
  main.import("toTitleCase", child3);
  main.variable(observer("results")).define("results", ["xeno_canto_query","random_bird"], _results);
  main.variable(observer("random_recordings")).define("random_recordings", ["results","get_n_from_array_at_random"], _random_recordings);
  main.variable(observer("random_bird")).define("random_bird", ["trigger","get_n_from_array_at_random","quiz_birds"], _random_bird);
  main.variable(observer("quiz_list_urls")).define("quiz_list_urls", _quiz_list_urls);
  main.variable(observer("quiz_name_to_url_lookup")).define("quiz_name_to_url_lookup", ["quiz_list_urls"], _quiz_name_to_url_lookup);
  return main;
}
