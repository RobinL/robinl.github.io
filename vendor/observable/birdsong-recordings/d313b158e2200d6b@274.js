function _1(md){return(
md`# iNaturalist utils`
)}

function _call_api(){return(
function call_api(taxon_name='', inaturalist_id=null) {
  let endpoint = 'https://api.inaturalist.org/v1/observations'
  
  
  let params = {
    photos: true,
    verifiable:true,
    order_by: "votes",
    lat:53.807321,
    lng:-1.387255,
    radius:1400
  }
  
  if (inaturalist_id !== null) {
    params["taxon_id"] = inaturalist_id
  } else {
    params["taxon_name"] = taxon_name
  }
  
  params = Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  
  return endpoint + "?" + params

}
)}

function _inaturalist_query(call_api){return(
function *inaturalist_query(bird) {
 
 yield []
  
 if (bird.raw == '') {
 yield []
 } else {
  
 let url
 if ('inaturalist_id' in bird) {
     url = call_api(bird.raw, bird.inaturalist_id)
   } else {
     url = call_api(bird.raw)
   }
 
 yield fetch(url).then(d=>d.json()).then((d) => {
   
   d.results.forEach(r => r.photos.forEach(p => {p.url_medium = p.url.replace("square", "medium");
                                                 p.url_large = p.url.replace("square", "original")}))
   
   let results = d.results
   
   results.sort((a,b) => { a.faves_count-b.faves_count})
   
  
   return results 
 })
 }
                                          
                                          
}
)}

function _getRandomInt(){return(
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
)}

function _get_random_inat_from_results(getRandomInt){return(
function get_random_inat_from_results(results) {

 
  let num_results = results.results.length
  
  if (num_results == 0) {
    return
  }
  
  let result_num = getRandomInt(0, num_results)
  
  return results.results[result_num]
  
}
)}

function _6(md){return(
md`## Presentational functions`
)}

function _picture_gallery(html,width){return(
function picture_gallery(results) {
  
 if (results.length == 0) {
  return html`Please wait, loading pictures...` 
 }
  
 let res = results 
 let default_photo =  res[0].taxon.default_photo.medium_url
 let default_photo_orig = default_photo.replace('medium', 'original')
 
 return html`
<style> 
.collection {width: ${width}px}
.collection .species { display: inline-block; }
.collection img { display: block; width: 12em; height: 12em; object-fit: cover}

</style>

<h2>

<div class="collection">
<div class="species">
 <a href="${default_photo_orig}"  target="_blank"><img src="${default_photo}"></div>


${res.map(s => `<div class="species">
  <a href="${s.photos[0].url_large}"  target="_blank"><img src="${s.photos[0].url_medium}"></div>
`)}
</div>
`
}
)}

function _8(md){return(
md`## Demo of functions`
)}

function _results2(inaturalist_query){return(
inaturalist_query({"raw": "Lagopus lagopus scotica", "inaturalist_id": 362643})
)}

function _results(inaturalist_query){return(
inaturalist_query({"raw": "Lagopus lagopus"})
)}

function _11(picture_gallery,results2){return(
picture_gallery(results2)
)}

function _12(md){return(
md`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("call_api")).define("call_api", _call_api);
  main.variable(observer("inaturalist_query")).define("inaturalist_query", ["call_api"], _inaturalist_query);
  main.variable(observer("getRandomInt")).define("getRandomInt", _getRandomInt);
  main.variable(observer("get_random_inat_from_results")).define("get_random_inat_from_results", ["getRandomInt"], _get_random_inat_from_results);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("picture_gallery")).define("picture_gallery", ["html","width"], _picture_gallery);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("results2")).define("results2", ["inaturalist_query"], _results2);
  main.variable(observer("results")).define("results", ["inaturalist_query"], _results);
  main.variable(observer()).define(["picture_gallery","results2"], _11);
  main.variable(observer()).define(["md"], _12);
  return main;
}
