function _1(md){return(
md`# xeno-canto utils`
)}

function _cors_anywhere(){return(
'https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl='
)}

function _generate_get_request_url(cors_anywhere,xeno_endpoint,toTitleCase){return(
function generate_get_request_url(query='', type='', quality='', country='') {
  // A query looks like this:
  // https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=troglodytes%20troglodytes"
  
 //?query=troglodytes%20troglodytes%20type%3A%22male%22%20cnt%3A%22Italy%22
  

  let base_url = cors_anywhere+xeno_endpoint + "query="
  
  let elems = []
  elems.push(query)
  
  if (type != '') {
    elems.push(`type:"${type}"`)
  }
  
  if (quality != '') {
    elems.push(`q:"${quality}"`)
  }
  
  if (country != '') {
    elems.push(`cnt:"${toTitleCase(country)}"`)
  }
  
  let query_string = elems.join(" ")
  query_string = encodeURIComponent(query_string)

  return base_url + query_string
   
}
)}

function _xeno_endpoint(){return(
"https://xeno-canto.org/api/2/recordings?"
)}

function _get_results_async(){return(
function (url) {
  return fetch(url)
    .then((d) => d.json())
    .catch((d) => {
      return {
        recordings: [],
        status: "query_failed",
        message: "Query failed"
      };
    });
}
)}

function _xeno_canto_query(generate_get_request_url,get_results_async){return(
async function* xeno_canto_query(query='', type='', quality='', country='', min_return_recordings = 3) {
  
 yield {recordings: [],
        status: "query_incomplete",
        message: "Please wait, querying recordings..."  }
 
 if (query == '' ) {
  yield  {
          recordings: [],
          status: "no_query",
          message: "No search terms entered"  }
 } else {
  let url = generate_get_request_url(query, type,quality,country)
  let url_backup = generate_get_request_url(query, '','','')
 
  let results = await get_results_async(url)
  results['status'] = 'query_successful'
  results['message'] = 'Query Successful'
  
  if (results.recordings.length < min_return_recordings) {
     console.log(`Fewer than ${min_return_recordings} found, using backup query`)
     results = await get_results_async(url_backup)
     results['status'] = 'backup_query_successful'
     results['message'] = 'Query Successful, but only using backup URL'
  } 
   
  yield results 

 }
}
)}

function _recording_to_mp3_url(){return(
function recording_to_mp3_url(recording) {
  let file = recording["file"];
  file = file.split("/");

  file = file.filter((x) => x != "");
  file = file.filter((x) => x != "http:");
  file = file.filter((x) => x != "https:");

  return "https://" + file.join("/");
}
)}

function _player(html,recording_to_mp3_url,results){return(
html`<audio controls><source src='${recording_to_mp3_url(results["recordings"][0])}' type='audio/mpeg'></audio>`
)}

function _toTitleCase(){return(
function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
)}

function _get_random_recording_from_results(getRandomInt){return(
function get_random_recording_from_results(results) {

 
  let num_results = results.recordings.length
  
  if (num_results == 0) {
    return
  }
  
  let result_num = getRandomInt(0, num_results)
  
  return results.recordings[result_num]
  
}
)}

function _getRandomInt(){return(
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
)}

function _get_n_from_array_at_random(){return(
function get_n_from_array_at_random(arr, n, truncate = true) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len){
        if (truncate) {
          n = len
        } else {
          throw new RangeError("getRandom: more elements taken than available");
        }
    }
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
  
  return result
}
)}

function _13(md){return(
md`## Presentational functions`
)}

function _results(xeno_canto_query){return(
xeno_canto_query(
  "troglodytes troglodytes",
  "song",
  "A",
  "United Kingdom"
)
)}

function _15(md){return(
md`## Demos of functions`
)}

function _htl(require){return(
require("htl@0.2")
)}

function _html(htl){return(
htl.html
)}

function _rec(get_n_from_array_at_random,results){return(
get_n_from_array_at_random(results.recordings, 3)
)}

function _audio_player_and_buttons(html,recording_to_mp3_url){return(
function audio_player_and_buttons(rec, next_rec) {
  let player_id = `player_${rec.id}`;

  let next_player_id;
  if (next_rec == null) {
    next_player_id = 'player_null';
  } else {
    next_player_id = `player_${next_rec.id}`;
  }

  function player_toggle_play() {
    // Pause all audio
    let audio_elems = document.getElementsByClassName('birdaudio');
    for (var item of audio_elems) {
      if (item.id != player_id) {
        if (!item.paused) {
          item.pause();
          console.log("paused");
          let button_elem = document.getElementsByClassName(
            `${item.id}_play_button`
          )[0];
          button_elem.innerText = "Paused";
        }
      }
    }

    let button_elem = document.getElementsByClassName(
      `${player_id}_play_button`
    )[0];

    let audio_elem = document.getElementById(`${player_id}`);

    if (audio_elem.paused) {
      audio_elem.play();
      button_elem.innerText = "Pause";
      button_elem.setAttribute('play_status', 'playing');
    } else {
      audio_elem.pause();
      button_elem.innerText = "Paused";
      button_elem.setAttribute('play_status', 'paused');
    }
  }

  function player_on_end() {
    let ending_button_elem = document.getElementsByClassName(
      `${player_id}_play_button`
    )[0];
    ending_button_elem.innerText = "Played";
    ending_button_elem.setAttribute('play_status', 'played');

    let next_player_audio_elem = document.getElementById(`${next_player_id}`);

    next_player_audio_elem.play();

    let next_play_button = document.getElementsByClassName(
      `${next_player_id}_play_button`
    )[0];
    next_play_button.setAttribute('play_status', 'playing');
    next_play_button.innerText = "Playing";
  }

  let player_html = html`<div>
 <audio id='${player_id}' 
        class = 'birdaudio'
        src="${recording_to_mp3_url(rec)}"
        onended=${() => player_on_end()}>
 </audio>
 <div> 
  <button class="audioplayer ${player_id}_play_button" 
          onclick=${() => player_toggle_play()}
          play_status = "unplayed"
          >Play</button> 

  
`;
  return player_html;
}
)}

function _table_of_audio(html,get_n_from_array_at_random,audio_player_and_buttons){return(
function table_of_audio(recordings, max_recordings = 20, random_order = true) {
  
  if (recordings.length == 0) {
    return html`Please wait, fetching audio recordings...`
  }
  
  let num_recordings = recordings.length;
  let num_rows = Math.min(max_recordings, num_recordings);

  let rows;
  if (random_order) {
    rows = get_n_from_array_at_random(recordings, num_rows);
  } else {
    rows = recordings.slice(0, num_rows);
  }

  let audio_table = html`<table><tr>
<th>Species</th>
<th>Type</th>
<th>Length</th>
<th>Audio</th>

</tr>

${rows.map((rec, rec_index) => {
  let next_recording = rows.slice(rec_index + 1, rec_index + 2);

  if (next_recording.length == 0) {
    next_recording = null;
  } else {
    next_recording = next_recording[0];
  }

  return html`<tr>

<td>${rec.en} (<i>${rec.gen} ${rec.sp})

<td>${rec.type}
<td>${rec.length}
<td>${audio_player_and_buttons(rec, next_recording)}`;
})}

</table>
 `;

  return audio_table;
}
)}

function _21(table_of_audio,results){return(
table_of_audio(results.recordings)
)}

function _22(md){return(
md`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)

[Docs for xeno-canto api](https://www.xeno-canto.org/article/153)

[Docs for quering xeno-canto](https://www.xeno-canto.org/help/search)
`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("cors_anywhere")).define("cors_anywhere", _cors_anywhere);
  main.variable(observer("generate_get_request_url")).define("generate_get_request_url", ["cors_anywhere","xeno_endpoint","toTitleCase"], _generate_get_request_url);
  main.variable(observer("xeno_endpoint")).define("xeno_endpoint", _xeno_endpoint);
  main.variable(observer("get_results_async")).define("get_results_async", _get_results_async);
  main.variable(observer("xeno_canto_query")).define("xeno_canto_query", ["generate_get_request_url","get_results_async"], _xeno_canto_query);
  main.variable(observer("recording_to_mp3_url")).define("recording_to_mp3_url", _recording_to_mp3_url);
  main.variable(observer("player")).define("player", ["html","recording_to_mp3_url","results"], _player);
  main.variable(observer("toTitleCase")).define("toTitleCase", _toTitleCase);
  main.variable(observer("get_random_recording_from_results")).define("get_random_recording_from_results", ["getRandomInt"], _get_random_recording_from_results);
  main.variable(observer("getRandomInt")).define("getRandomInt", _getRandomInt);
  main.variable(observer("get_n_from_array_at_random")).define("get_n_from_array_at_random", _get_n_from_array_at_random);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("results")).define("results", ["xeno_canto_query"], _results);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("htl")).define("htl", ["require"], _htl);
  main.variable(observer("html")).define("html", ["htl"], _html);
  main.variable(observer("rec")).define("rec", ["get_n_from_array_at_random","results"], _rec);
  main.variable(observer("audio_player_and_buttons")).define("audio_player_and_buttons", ["html","recording_to_mp3_url"], _audio_player_and_buttons);
  main.variable(observer("table_of_audio")).define("table_of_audio", ["html","get_n_from_array_at_random","audio_player_and_buttons"], _table_of_audio);
  main.variable(observer()).define(["table_of_audio","results"], _21);
  main.variable(observer()).define(["md"], _22);
  return main;
}
