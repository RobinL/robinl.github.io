"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[5027],{2701:function(e,t,a){a.r(t),a.d(t,{Head:function(){return ke},default:function(){return Ee}});var n=a(7294),r=a(7848),i=a(7825);function o(e){return e`# Flights globe chart function`}function l(e,t,a,n,r,i,o,l,s){return function(c){const d=e.context2d(t,a),u=n.geoPath(r,d);let f=n.scaleSequential(n.interpolateOrRd).domain(n.extent(c,(e=>e.distance)));function m(){d.clearRect(0,0,t,a),d.beginPath(),u(i),d.fillStyle="#fff",d.fill(),d.beginPath(),u(o),d.fillStyle="#000",d.fill(),d.beginPath(),u(i),d.stroke(),c.forEach((function(e){let t=[[e.lng_from,e.lat_from],[e.lng_to,e.lat_to]],a=l(t),n=[a.after[1][0]+(e.lat_from+e.lng_to)/100,a.after[1][1]+(e.lat_from+e.lng_to)/100];a.after[1]=n;let r={type:"LineString",coordinates:a.after};d.lineWidth=1.5,d.lineO,d.beginPath(),u(r),d.strokeStyle=f(e.distance),d.stroke()})),d.lineWidth=1,d.strokeStyle="#000000"}return n.select(d.canvas).call(s(r).on("drag.render",m)).call(m).node()}}function s(e){return e`Imports`}function c(e){return e("d3@5")}function d(e){return e("topojson-client@3")}function u(e){return e.json("https://unpkg.com/world-atlas@1/world/110m.json")}function f(e,t){return e.feature(t,t.objects.land)}function m(e,t){return function(a){let n,r,i;return t.drag().on("start",(function(){n=e.cartesian(a.invert(t.mouse(this))),r=e(i=a.rotate())})).on("drag",(function(){const o=e.cartesian(a.rotate(i).invert(t.mouse(this))),l=e.multiply(r,e.delta(n,o));a.rotate(e.rotation(l))}))}}function p(e){return.6*e}function h(e,t,a,n){return e.geoEqualEarth().fitExtent([[1,1],[t-1,a-1]],n).translate([t/2,a/2]).rotate([0,0]).precision(.1)}function b(){return{type:"Sphere"}}function v(e,t){return function(a){for(var n=0,r=a.length,i=[],o=[];++n<r;){var l=a[n-1].slice(),s=a[n].slice(),c=e(l),d=e(s),u=d[0]-c[0],f=d[1]-c[1],m=u*u+f*f;if(i.push(l),o.push(l),m>.4){var p=t.geoInterpolate(l,s)(.5),h=e(p),b=h[0]-c[0],v=h[1]-c[1],g=f*b-u*v;if(g*g/m>.1){var y=(b*u+v*f)/m;i.push(e.invert(p.resampled=[c[0]+y*u,c[1]+y*f])),o.push(p)}}}return r&&(i.push(s),o.push(s)),{before:i,after:o}}}function g(e){return e("versor@0.0.3")}function y(e,t){const a=e.module();return a.variable(t()).define(["md"],o),a.variable(t("chart")).define("chart",["DOM","width","height","d3","projection","sphere","land","resample","drag"],l),a.variable(t()).define(["md"],s),a.variable(t("d3")).define("d3",["require"],c),a.variable(t("topojson")).define("topojson",["require"],d),a.variable(t("world")).define("world",["d3"],u),a.variable(t("land")).define("land",["topojson","world"],f),a.variable(t("drag")).define("drag",["versor","d3"],m),a.variable(t("height")).define("height",["width"],p),a.variable(t("projection")).define("projection",["d3","width","height","sphere"],h),a.variable(t("sphere")).define("sphere",b),a.variable(t("resample")).define("resample",["projection","d3"],v),a.variable(t("versor")).define("versor",["require"],g),a}function _(e,t){return e`# Tables

_This notebook is ready for public input - hit me up at @tmcw on [the forum](https://talk.observablehq.com/t/it-would-be-cool-if-table-tags-had-a-spiffy-default-style/588/4), twitter, or elsewhere to give input. You can use it, but the API is likely to change soon, so use this exact version:_

\`\`\`js
import {table} from "@tmcw/tables@513"
\`\`\`

Good tables are good. Making a good table relies on good defaults, good options, and lots of nitpicky finishing touches. This is a notebook that tries to provide a good starting point for table defaults, a fast drop-in read-only data table for data analysis.

### Table API:

- **data** \`Array<Object>\`: with consistent data types across rows
- **options**:
  - **style**: \`enum(normal, compact)\`: a string value of a default style. By default, tables are designed for comfortable reading with large fonts. To display more information in less screen space, use compact.
  - **header** \`boolean\` (default true): set to false to entirely omit the table header.
  - **sortable** \`boolean\` (default false): make columns sortable
  - **paged** \`number\` (default 25): split data by pages, if it has more than the given number of items.
  - **rank** \`boolean\` (default false): show 1… rank numbers in the first column. Cannot be combined with sortable.
  - **columns** \`Object\`: column-specific configuration, indexed by key:
    - \`[key]\`
      - **formatter** \`Function(value, rowIndex, row) ⇒ output\`: value formatter for cells. This can return a string, number, or element. If it returns a \`<td>\` element, that element can ‘take over’ the cell.
      - **title** \`string\`: alternate text for table header - by default, the header cell is named after the key in the data object
      - **type** \`string\`: override auto-detected type for this column - display numbers as strings, etc. Optional, should be one of 'string' or 'number'.

An example of a dataset that table() easily accepts:

\`\`\`json
${JSON.stringify(t.slice(0,2),null,2)}
\`\`\`
`}function w(e){return e`
<br /><br />

*Click the caret on the left to view code for any example.*


### Titanic survivors

This is a table of the Titanic survivors dataset - it shows the data in natural order, first, but the columns are sortable. It shows usage of custom formatters for the Name and Fare columns. The Fare column formatter uses the rowIndex to determine the appropriate format based on the row number. (i.e. $ for the first row only).`}function k(e,t,a,n){return e(t,{sortable:!0,columns:{Fare:{formatter(e,t){return 0===t?a.format("$.2f")(e):a.format(".2f")(e)}},Name:{formatter(e){let t=e.match(/([^,]*)\,(.*)/);return n`<strong>${t[1]}</strong>, ${t[2]}`}}}})}function $(e){return e`<br /><br />

### Spotify top charts

This is a table of the top-streamed tracks from [Spotify](https://spotifycharts.com/regional) today. It shows usage of a custom formatter, as well as the \`rank\` option to add an unlabeled rank column. This also sets the \`style\` to compact because we’re displaying a bunch of rows.`}function E(e,t,a,n){return e(t,{rank:!0,style:"compact",columns:{Track:{formatter(e,t){return a`<strong>${e[0]}</strong> by ${e[1]}`}},Streams:{formatter:n.format(",")}}})}function x(e,t,a,n){return(r,i)=>{i=Object.assign({},e,i);const{sortable:o,rank:l,paged:s}=i;let c,d=!0,u=0;if(o&&l)throw new Error("A table can either be ranked or sortable, but not both");let f=Object.keys(r[0]).map((e=>{const t=i.columns[e]||{};return{key:e,type:t.type||typeof r[0][e],options:t}}));function m(){c&&(r=r.slice().sort(((e,t)=>{let a=e[c],n=t[c];if(a==n)return JSON.stringify(e).localeCompare(JSON.stringify(t));let r=a>n?1:a<n?-1:0;return d&&(r=-r),r})));let e=r.slice(u*s,u*s+s),m=Math.ceil(r.length/s);return t`<div><div>
      <style>
.pretty-pager {
  padding-top: 1rem;
}
.pretty-pager button {
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #fff;
  font-size: inherit;
}
.pretty-pager button:hover {
  border: 1px solid #888;
}
.pretty-table.normal {
  font-size: 15px;
}
.pretty-table.normal th,
.pretty-table.normal td {
  padding: 3px 2px;
}
.pretty-table th,
.pretty-table td {
  vertical-align: top;
}
.pretty-table thead th {
  text-transform: uppercase;
  font-weight:500;
}
.pretty-table thead th.column-type-number string {
  order: 1;
}
.pretty-table th.sortable {
  cursor: pointer;
}
.pretty-table thead th.column-type-number,
.pretty-table tbody td.cell-type-number,
.pretty-table tbody td.cell-rank {
  text-align:right;
}
.pretty-table tbody td.cell-type-number,
.pretty-table tbody td.cell-rank {
  font-family: menlo,consolas,monaco,monospace;
  font-size: 90%;
}
.pretty-table tbody td.cell-rank {
  padding-right: 1em;
  color: #666;
}

</style>
        <table class='pretty-table ${i.style}'>
          ${!1===i.header?"":t`<thead>
            ${l?t`<th></th>`:""}
            ${f.map((e=>a(e,c,d,o)))}
          </thead>`}
          <tbody>
            ${e.map(((e,a)=>t`<tr>
              ${l?t`<td class='cell-rank'>${a+1}</td>`:""}
              ${f.map((r=>{let i=(r.options.formatter||n)(e[r.key],a,e);return i instanceof window.HTMLElement&&"TD"==i.tagName?i:t`<td class='cell-type-${r.type}'>${i}</td>`}))}
            </tr>`))}
          </tbody>
        </table>
        ${m?t`<div class='pretty-pager'>
          <button data-action="next">Previous</button>
          ${Array.from({length:m}).map(((e,a)=>t`<button data-page="${a+1}">${a+1}</button>`))}
          <button data-action="previous">Next</button>
        </div>`:""}
      </div></div>`}let p=m();function h(){p.firstChild.remove(),p.appendChild(m().firstChild)}return p.addEventListener("click",(e=>{if("TH"===e.target.tagName&&o&&(c==e.target.dataset.key&&(d=!d),c=e.target.dataset.key,h()),"BUTTON"===e.target.tagName)if(e.target.dataset.action)switch(e.target.dataset.action){case"next":u++,h();break;case"previous":u--,h()}else e.target.dataset.page&&(u=parseInt(e.target.dataset.page),h())})),p}}function M(e){return e`<br /><br />

### Kenya data

Demonstration of [data from Quartz Atlas](https://www.theatlas.com/charts/BJGldhdsG): demonstrates usage of the _type_ override, a custom formatter, and overriding titles.`}function S(e,t,a,n){return e(t,{columns:{method:{title:""},percent:{title:"Method of transfer (2006)",type:"string",formatter(e,t){return a`<div style='display:flex;align-items:center;height:1.5em;'>
          <div style='width:${e}%;height:1em;background:#5f27cd;margin-right:0.5em;'></div>${0==t?n.format(".0%")(e/100):e}
        </div>`}}}})}function C(e){return e`<br /><br />

### Heat-tables

A tribute to the [538](https://fivethirtyeight.com/features/the-year-in-trumps-approval-rating/) table style for opinion polls. Demonstrates that if a cell formatter returns a \`<td>\` element, it can take over the entire cell to do things like setting background colors.

This also demonstrates using a table with viewof: click a name to view the person below.
`}function N(e,t,a,n){let r=e(t,{columns:{name:{formatter(e,t,n){let i=a`<a style='cursor:pointer'>${e}</a>`;return i.addEventListener("click",(()=>{r.value=n,r.dispatchEvent(new CustomEvent("input"))})),i}},elected:{type:"string"},approval:{formatter(e,t){let r=n.scaleLinear().domain([-2,0,2]).range(["#f4c8cf","#f8f8f8","#c8f4cb"]);return a`<td style='background:${r(e)};text-align:right;padding:2px 5px;'>${e}</td>`}}}});return r}function j(e,t){return e&&t`## ${e.name}

I was elected ${e.elected} and have an approval rating of ${e.approval}.`}function T(e){return(t,a,n,r)=>{let{options:{title:i}}=t,o=a&&n?"↑":"↓",l=e`<span style='${a===t.key?"":"visibility:hidden"}'>${o}</span>`,s=void 0!==i?i:t.key;return"number"===t.type?e`<th
      data-key="${t.key}"
      class='column-type-${t.type} ${r?"sortable":""}'>
        ${l}${s}
    </th>`:e`<th
      data-key="${t.key}"
      class='column-type-${t.type} ${r?"sortable":""}'>
        ${s}${l}
    </th>`}}function O(){return"\n\n"}function P(e){return e`Here's [my are.na collection](https://www.are.na/tom-macwright/good-looking-tables) of inspirations. My key observations:

- ✔ Numeric columns should really have monospaced numbers: it’s important for numbers to line up
- ✔ Most data tables use title-case, bold or semibold headers

Necessary perks:

- Good support for N/A values
- code-based reordering for columns

Stretch goals:

- ✔️ Sorting
- Selecting of rows

I don’t see any of the following in the wild:

- Vertical borders
- Alternate row coloring`}function A(){return{columns:{},style:"normal",paged:25}}function I(){return e=>e}function F(e){return e`Helpers (not used in export path)`}function G(e){return e("d3@5")}function D(e){return e`Datasets`}async function L(e,t){return e.csv(await t("regional-global-daily-latest@2.csv").url())}function q(e){return e.map((e=>({Track:[e["Track Name"],e.Artist],Streams:+e.Streams})))}function H(){return[{method:"Hand",percent:58},{method:"Bus",percent:27},{method:"Post office, money order",percent:24},{method:"Direct deposit",percent:11},{method:"Money transfer services",percent:9},{method:"Cheque",percent:4},{method:"Someone else's account",percent:3}]}function B(){return["Barney","Homer","Bart","Lisa","Marge"].map(((e,t)=>({name:e,elected:1990+5*t,approval:t-2})))}function z(e){return e.csvParse('PassengerId,Survived,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked\n1,0,3,"Braund, Mr. Owen Harris",male,22,1,0,A/5 21171,7.25,,S\n2,1,1,"Cumings, Mrs. John Bradley (Florence Briggs Thayer)",female,38,1,0,PC 17599,71.2833,C85,C\n3,1,3,"Heikkinen, Miss. Laina",female,26,0,0,STON/O2. 3101282,7.925,,S\n4,1,1,"Futrelle, Mrs. Jacques Heath (Lily May Peel)",female,35,1,0,113803,53.1,C123,S\n5,0,3,"Allen, Mr. William Henry",male,35,0,0,373450,8.05,,S\n6,0,3,"Moran, Mr. James",male,,0,0,330877,8.4583,,Q\n7,0,1,"McCarthy, Mr. Timothy J",male,54,0,0,17463,51.8625,E46,S\n8,0,3,"Palsson, Master. Gosta Leonard",male,2,3,1,349909,21.075,,S').map((({Age:e,Name:t,Fare:a})=>({Name:t,Age:+e,Fare:+a})))}function J(e,t){const a=e.module();return a.variable(t()).define(["md","opinionPolls"],_),a.variable(t()).define(["md"],w),a.variable(t()).define(["table","titanicData","d3","html"],k),a.variable(t()).define(["md"],$),a.variable(t()).define(["table","spotify","html","d3"],E),a.variable(t("table")).define("table",["defaultOptions","html","th","identity"],x),a.variable(t()).define(["md"],M),a.variable(t()).define(["table","kenyaData","html","d3"],S),a.variable(t()).define(["md"],C),a.variable(t("viewof name")).define("viewof name",["table","opinionPolls","html","d3"],N),a.variable(t("name")).define("name",["Generators","viewof name"],((e,t)=>e.input(t))),a.variable(t()).define(["name","md"],j),a.variable(t("th")).define("th",["html"],T),a.variable(t("style")).define("style",O),a.variable(t()).define(["md"],P),a.variable(t("defaultOptions")).define("defaultOptions",A),a.variable(t("identity")).define("identity",I),a.variable(t()).define(["md"],F),a.variable(t("d3")).define("d3",["require"],G),a.variable(t()).define(["md"],D),a.variable(t("spotifyCharts")).define("spotifyCharts",["d3","FileAttachment"],L),a.variable(t("spotify")).define("spotify",["spotifyCharts"],q),a.variable(t("kenyaData")).define("kenyaData",H),a.variable(t("opinionPolls")).define("opinionPolls",B),a.variable(t("titanicData")).define("titanicData",["d3"],z),a}function R(e){return e`# Flight distance calculator`}function W(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/flight_distance/).*`}function U(e,t,a){const n=e`

         <input name="dep" type="text" autocomplete="off" 
          placeholder="Choose departure airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${t.map((t=>Object.assign(e`<option>`,{value:t})))}
          </datalist>`,r=e`<input name="arr" type="text" autocomplete="off" 
          placeholder="Choose arrival airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${t.map((t=>Object.assign(e`<option>`,{value:t})))}
          </datalist>`,i=e`<input type="button" value="Add flight">`,o=e`<input type="button" value="Clear all flights">`,l=e`<input type="button" value="Clear current inputs">`,s=e`<input type="button" value="Switch departure and arrival airports">`,c=e`<p>${n} ${r}<br/>${i}${o}${l}${s}</p>`;return i.onclick=()=>{let e=n.children[0].value,t=r.children[0].value;if(""==e||""==t)throw"Must select both a departure and arrival airport";c.value.push([a(e),a(t)]),c.dispatchEvent(new CustomEvent("input"))},l.onclick=()=>{n.children[0].value="",r.children[0].value=""},s.onclick=()=>{let e=n.children[0].value;n.children[0].value=r.children[0].value,r.children[0].value=e},o.onclick=()=>{c.value=[],n.children[0].value="",r.children[0].value="",c.dispatchEvent(new CustomEvent("input"))},c.value=[],c}function K(e,t){return e.map((e=>[t.get(e[0]),t.get(e[1])]))}function Q(e,t,a){return e.length>0?t(e):a`Add a flight to display flight data here.`}function V(e,t,a,n,r,i,o){return e.length>0?t`Your total flight distance is ${a(n)} miles.  If flying economy, this will have required around ${r(i)} kwh of energy, and the total co2 emissions will be around ${r(o)} tonnes. `:t``}function Y(e,t){return e.map((function(e){let a=e[0],n=e[1],r={};r.from=a.name,r.to=n.name;for(const[t,c]of Object.entries(a))r[t+"_from"]=c;for(const[t,c]of Object.entries(n))r[t+"_to"]=c;let i=r.lat_from,o=r.lng_from,l=r.lat_to,s=r.lng_to;return r.distance=t(i,o,l,s),r}))}function Z(e,t){return e.map((function(e){return{from:e.name_from,to:e.name_to,miles:t.format(",.0f")(e.distance)}}))}function X(e,t){return e.csvFormat(t)}function ee(e,t,a){return e.download(t(a),"flights","Download CSV")}function te(e){return e`Bulk import previously created csv (needs at minimum \`icao_from\` and \`icao_to\` fields)`}function ae(e){return e`<input type=file accept="text/csv" >`}async function ne(e,t,a,n){const r=await e.text(t),i=a.csvParse(r);n.value=i.map((e=>[e.icao_from,e.icao_to])),n.dispatchEvent(new CustomEvent("input"))}function re(e,t){return e(t)}function ie(e,t){return e.sum(t,(e=>e.distance))}function oe(e,t){return e.flying.flying_miles_to_kwh(t)}function le(e){return function(t){return t*e.convert.per("kg_co2_from_jet_fuel/kwh")}}function se(e,t,a){return e(t.flying.flying_miles_to_kwh(a))/1e3}function ce(e){return e.format(",.0f")}function de(e){return e.format(",.2r")}function ue(e){return e`### Modules & Imports`}function fe(e){return e("d3")}function me(e){return e("@robinl/energy_usage@0.1.6")}function pe(e){return function(t){return new Blob([e.csvFormat(t)],{type:"text/csv"})}}function he(){return function(e,t,a,n){function r(e){return e*(Math.PI/180)}var i=r(a-e),o=r(n-t),l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r(e))*Math.cos(r(a))*Math.sin(o/2)*Math.sin(o/2);return.621371*(6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))))}}function be(e){return e.text("https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat").then((function(t){let a="id,name,city,country,iata,icao,lat,lng\n"+t;return e.csvParse(a,e.autoType)}))}function ve(e){return new Map(e.map((e=>[e.icao,e])))}function ge(e){return e.map((e=>`${e.name} ${e.city} ${e.country} ${e.iata} (${e.icao})`))}function ye(){return function(e){var t=/\((\w{4})\)$/g.exec(e);if(t)return t[1]}}function _e(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],R),a.variable(t()).define(["md"],W),a.variable(t("viewof flights_list")).define("viewof flights_list",["html","options","get_icao_from_value"],U),a.variable(t("flights_list")).define("flights_list",["Generators","viewof flights_list"],((e,t)=>e.input(t))),a.variable(t("selected_airports")).define("selected_airports",["flights_list","airports_icao_dict"],K),a.variable(t("table_of_distances")).define("table_of_distances",["data_for_table","table","md"],Q),a.variable(t("blurb")).define("blurb",["data_for_table","md","fmt_num","total_flight_miles","fmt_num_round","total_energy_usage","tonnes_co2"],V),a.variable(t("selected_airports_with_distances")).define("selected_airports_with_distances",["selected_airports","getDistanceFromLatLonInMiles"],Y),a.variable(t("data_for_table")).define("data_for_table",["selected_airports_with_distances","d3"],Z),a.variable(t()).define(["d3","selected_airports_with_distances"],X),a.variable(t("download_as_csv")).define("download_as_csv",["DOM","serialize","selected_airports_with_distances"],ee),a.variable(t("file_upload_blurb")).define("file_upload_blurb",["md"],te),a.variable(t("viewof upload")).define("viewof upload",["html"],ae),a.variable(t("upload")).define("upload",["Generators","viewof upload"],((e,t)=>e.input(t))),a.variable(t("csv_data")).define("csv_data",["Files","upload","d3","viewof flights_list"],ne),a.variable(t("flights_chart")).define("flights_chart",["chart","selected_airports_with_distances"],re),a.variable(t("total_flight_miles")).define("total_flight_miles",["d3","selected_airports_with_distances"],ie),a.variable(t("total_energy_usage")).define("total_energy_usage",["eu","total_flight_miles"],oe),a.variable(t("kwh_to_kg_co2")).define("kwh_to_kg_co2",["eu"],le),a.variable(t("tonnes_co2")).define("tonnes_co2",["kwh_to_kg_co2","eu","total_flight_miles"],se),a.variable(t("fmt_num")).define("fmt_num",["d3"],ce),a.variable(t("fmt_num_round")).define("fmt_num_round",["d3"],de),a.variable(t()).define(["md"],ue),a.variable(t("d3")).define("d3",["require"],fe),a.variable(t("eu")).define("eu",["require"],me);const n=e.module(y);a.import("chart",n);const r=e.module(J);return a.import("table",r),a.variable(t("serialize")).define("serialize",["d3"],pe),a.variable(t("getDistanceFromLatLonInMiles")).define("getDistanceFromLatLonInMiles",he),a.variable(t("airports")).define("airports",["d3"],be),a.variable(t("airports_icao_dict")).define("airports_icao_dict",["airports"],ve),a.variable(t("options")).define("options",["airports"],ge),a.variable(t("get_icao_from_value")).define("get_icao_from_value",ye),a}var we=a(8342);const ke=e=>n.createElement(i.H,{frontmatter:e.pageContext.frontmatter});function $e(e){return n.createElement(we.A5,{notebook:_e},n.createElement(we.Gc,{cellName:"title"}),n.createElement(we.Gc,{cellName:"viewof flights_list"}),n.createElement(we.Gc,{cellName:"blurb"}),n.createElement(we.Gc,{cellName:"table_of_distances"}),n.createElement(we.Gc,{cellName:"download_as_csv"}),n.createElement(we.Gc,{cellName:"flights_chart"}),n.createElement(we.Gc,{cellName:"file_upload_blurb"}),n.createElement(we.Gc,{cellName:"viewof upload"}))}var Ee=function(e){return void 0===e&&(e={}),n.createElement(r.fE,e,n.createElement($e,e))}},8342:function(e,t,a){a.d(t,{A5:function(){return u},Gc:function(){return d}});var n=a(7294),r=a(6493);const i=(0,n.createContext)(null),o="mdx-container-div",l=new r.Zu;Object.assign({},l,{width:s});function s(){return l.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function a(){let a=document.getElementById(o).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}function c(e){let{notebook:t,children:a}=e;const{0:o,1:l}=(0,n.useState)({}),c=new r.r_(Object.assign({},new r.Zu,{width:s}));return(0,n.useEffect)((()=>(c.module(t,(e=>{if(o[e])return new r.lj(o[e])})),()=>c.dispose())),[c,o,t]),n.createElement(i.Provider,{value:{setSharedRefs:l}},a)}function d(e){let{cellName:t,styles:a,className:r}=e;const o=(0,n.useRef)(null),{setSharedRefs:l}=(0,n.useContext)(i);return(0,n.useEffect)((()=>{l((e=>({...e,[t]:o.current})))}),[t,l]),n.createElement("div",{ref:o,style:a,className:r})}function u(e){let{notebook:t,children:a}=e;return n.createElement(c,{notebook:t},a)}},7825:function(e,t,a){a.d(t,{H:function(){return i}});var n=a(7294),r=a(4160);const i=e=>{let{frontmatter:t}=e;const{title:a,description:i,image:o,siteUrl:l,twitterUsername:s}=(0,r.K2)("1865044719").site.siteMetadata,c={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||i,image:`${l}${(null==t?void 0:t.image)||o}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:s,...t},d=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,c.title),n.createElement("meta",{name:"description",content:c.description}),n.createElement("meta",{name:"image",content:c.image}),d&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${d}`}))}}}]);
//# sourceMappingURL=component---src-mdx-flight-distance-mdx-ad7933c942b16c947ac1.js.map