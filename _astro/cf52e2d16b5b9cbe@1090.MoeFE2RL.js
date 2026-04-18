function $(e){return e`# Flights globe chart function`}function M(e,t,a,n,i,r,l,d,u){return(function(s){const o=e.context2d(t,a),c=n.geoPath(i,o);let m=n.scaleSequential(n.interpolateOrRd).domain(n.extent(s,p=>p.distance));function _(){o.clearRect(0,0,t,a),o.beginPath(),c(r),o.fillStyle="#fff",o.fill(),o.beginPath(),c(l),o.fillStyle="#000",o.fill(),o.beginPath(),c(r),o.stroke(),s.forEach(function(p){let b=[[p.lng_from,p.lat_from],[p.lng_to,p.lat_to]],f=d(b),y=[f.after[1][0]+(p.lat_from+p.lng_to)/100,f.after[1][1]+(p.lat_from+p.lng_to)/100];f.after[1]=y;let h={type:"LineString",coordinates:f.after};o.lineWidth=1.5,o.lineO,o.beginPath(),c(h),o.strokeStyle=m(p.distance),o.stroke()}),o.lineWidth=1,o.strokeStyle="#000000"}return n.select(o.canvas).call(u(i).on("drag.render",_)).call(_).node()})}function x(e){return e`Imports`}function S(e){return e("d3@5")}function C(e){return e("topojson-client@3")}function T(e){return e.json("https://unpkg.com/world-atlas@1/world/110m.json")}function O(e,t){return e.feature(t,t.objects.land)}function P(e,t){return(function(n){let i,r,l;function d(){i=e.cartesian(n.invert(t.mouse(this))),r=e(l=n.rotate())}function u(){const s=e.cartesian(n.rotate(l).invert(t.mouse(this))),o=e.multiply(r,e.delta(i,s));n.rotate(e.rotation(o))}return t.drag().on("start",d).on("drag",u)})}function D(e){return e*.6}function I(e,t,a,n){return e.geoEqualEarth().fitExtent([[1,1],[t-1,a-1]],n).translate([t/2,a/2]).rotate([0,0]).precision(.1)}function j(){return{type:"Sphere"}}function L(e,t){return(function(n){for(var i=0,r=n.length,l=[],d=[];++i<r;){var u=n[i-1].slice(),s=n[i].slice(),o=e(u),c=e(s),m=c[0]-o[0],_=c[1]-o[1],p=m*m+_*_;if(l.push(u),d.push(u),p>4*.1){var b=t.geoInterpolate(u,s)(.5),f=e(b),y=f[0]-o[0],h=f[1]-o[1],g=_*y-m*h;if(g*g/p>.1){var v=(y*m+h*_)/p;l.push(e.invert(b.resampled=[o[0]+v*m,o[1]+v*_])),d.push(b)}}}return r&&(l.push(s),d.push(s)),{before:l,after:d}})}function A(e){return e("versor@0.0.3")}function F(e,t){const a=e.module();return a.variable(t()).define(["md"],$),a.variable(t("chart")).define("chart",["DOM","width","height","d3","projection","sphere","land","resample","drag"],M),a.variable(t()).define(["md"],x),a.variable(t("d3")).define("d3",["require"],S),a.variable(t("topojson")).define("topojson",["require"],C),a.variable(t("world")).define("world",["d3"],T),a.variable(t("land")).define("land",["topojson","world"],O),a.variable(t("drag")).define("drag",["versor","d3"],P),a.variable(t("height")).define("height",["width"],D),a.variable(t("projection")).define("projection",["d3","width","height","sphere"],I),a.variable(t("sphere")).define("sphere",j),a.variable(t("resample")).define("resample",["projection","d3"],L),a.variable(t("versor")).define("versor",["require"],A),a}function E(e,t){return e`# Tables

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
`}function q(e){return e`
<br /><br />

*Click the caret on the left to view code for any example.*


### Titanic survivors

This is a table of the Titanic survivors dataset - it shows the data in natural order, first, but the columns are sortable. It shows usage of custom formatters for the Name and Fare columns. The Fare column formatter uses the rowIndex to determine the appropriate format based on the row number. (i.e. $ for the first row only).`}function N(e,t,a,n){return e(t,{sortable:!0,columns:{Fare:{formatter(i,r){return r===0?a.format("$.2f")(i):a.format(".2f")(i)}},Name:{formatter(i){let r=i.match(/([^,]*)\,(.*)/);return n`<strong>${r[1]}</strong>, ${r[2]}`}}}})}function B(e){return e`<br /><br />

### Spotify top charts

This is a table of the top-streamed tracks from [Spotify](https://spotifycharts.com/regional) today. It shows usage of a custom formatter, as well as the \`rank\` option to add an unlabeled rank column. This also sets the \`style\` to compact because we’re displaying a bunch of rows.`}function H(e,t,a,n){return e(t,{rank:!0,style:"compact",columns:{Track:{formatter(i,r){return a`<strong>${i[0]}</strong> by ${i[1]}`}},Streams:{formatter:n.format(",")}}})}function z(e,t,a,n){return((i,r)=>{r=Object.assign({},e,r);const{sortable:l,rank:d,paged:u}=r;let s,o=!0,c=0;if(l&&d)throw new Error("A table can either be ranked or sortable, but not both");let m=Object.keys(i[0]).map(f=>{const y=r.columns[f]||{};return{key:f,type:y.type||typeof i[0][f],options:y}});function _(){s&&(i=i.slice().sort((h,g)=>{let v=h[s],w=g[s];if(v==w)return JSON.stringify(h).localeCompare(JSON.stringify(g));let k=v>w?1:v<w?-1:0;return o&&(k=-k),k}));let f=i.slice(c*u,c*u+u),y=Math.ceil(i.length/u);return t`<div><div>
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
        <table class='pretty-table ${r.style}'>
          ${r.header===!1?"":t`<thead>
            ${d?t`<th></th>`:""}
            ${m.map(h=>a(h,s,o,l))}
          </thead>`}
          <tbody>
            ${f.map((h,g)=>t`<tr>
              ${d?t`<td class='cell-rank'>${g+1}</td>`:""}
              ${m.map(v=>{let w=(v.options.formatter||n)(h[v.key],g,h);return w instanceof window.HTMLElement&&w.tagName=="TD"?w:t`<td class='cell-type-${v.type}'>${w}</td>`})}
            </tr>`)}
          </tbody>
        </table>
        ${y?t`<div class='pretty-pager'>
          <button data-action="next">Previous</button>
          ${Array.from({length:y}).map((h,g)=>t`<button data-page="${g+1}">${g+1}</button>`)}
          <button data-action="previous">Next</button>
        </div>`:""}
      </div></div>`}let p=_();function b(){p.firstChild.remove(),p.appendChild(_().firstChild)}return p.addEventListener("click",f=>{if(f.target.tagName==="TH"&&l&&(s==f.target.dataset.key&&(o=!o),s=f.target.dataset.key,b()),f.target.tagName==="BUTTON")if(f.target.dataset.action)switch(f.target.dataset.action){case"next":c++,b();break;case"previous":c--,b();break}else f.target.dataset.page&&(c=parseInt(f.target.dataset.page),b())}),p})}function G(e){return e`<br /><br />

### Kenya data

Demonstration of [data from Quartz Atlas](https://www.theatlas.com/charts/BJGldhdsG): demonstrates usage of the _type_ override, a custom formatter, and overriding titles.`}function J(e,t,a,n){return e(t,{columns:{method:{title:""},percent:{title:"Method of transfer (2006)",type:"string",formatter(i,r){return a`<div style='display:flex;align-items:center;height:1.5em;'>
          <div style='width:${i}%;height:1em;background:#5f27cd;margin-right:0.5em;'></div>${r==0?n.format(".0%")(i/100):i}
        </div>`}}}})}function R(e){return e`<br /><br />

### Heat-tables

A tribute to the [538](https://fivethirtyeight.com/features/the-year-in-trumps-approval-rating/) table style for opinion polls. Demonstrates that if a cell formatter returns a \`<td>\` element, it can take over the entire cell to do things like setting background colors.

This also demonstrates using a table with viewof: click a name to view the person below.
`}function V(e,t,a,n){let i=e(t,{columns:{name:{formatter(r,l,d){let u=a`<a style='cursor:pointer'>${r}</a>`;return u.addEventListener("click",()=>{i.value=d,i.dispatchEvent(new CustomEvent("input"))}),u}},elected:{type:"string"},approval:{formatter(r,l){let d=n.scaleLinear().domain([-2,0,2]).range(["#f4c8cf","#f8f8f8","#c8f4cb"]);return a`<td style='background:${d(r)};text-align:right;padding:2px 5px;'>${r}</td>`}}}});return i}function W(e,t){return e&&t`## ${e.name}

I was elected ${e.elected} and have an approval rating of ${e.approval}.`}function Q(e){return((t,a,n,i)=>{let{options:{title:r}}=t,l=a&&n?"↑":"↓",d=e`<span style='${a===t.key?"":"visibility:hidden"}'>${l}</span>`,u=r!==void 0?r:t.key;return t.type==="number"?e`<th
      data-key="${t.key}"
      class='column-type-${t.type} ${i?"sortable":""}'>
        ${d}${u}
    </th>`:e`<th
      data-key="${t.key}"
      class='column-type-${t.type} ${i?"sortable":""}'>
        ${u}${d}
    </th>`})}function Y(){return`

`}function K(e){return e`Here's [my are.na collection](https://www.are.na/tom-macwright/good-looking-tables) of inspirations. My key observations:

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
- Alternate row coloring`}function U(){return{columns:{},style:"normal",paged:25}}function X(){return(e=>e)}function Z(e){return e`Helpers (not used in export path)`}function tt(e){return e("d3@5")}function et(e){return e`Datasets`}async function at(e,t){return e.csv(await t("regional-global-daily-latest@2.csv").url())}function nt(e){return e.map(t=>({Track:[t["Track Name"],t.Artist],Streams:+t.Streams}))}function it(){return[{method:"Hand",percent:58},{method:"Bus",percent:27},{method:"Post office, money order",percent:24},{method:"Direct deposit",percent:11},{method:"Money transfer services",percent:9},{method:"Cheque",percent:4},{method:"Someone else's account",percent:3}]}function rt(){return["Barney","Homer","Bart","Lisa","Marge"].map((e,t)=>({name:e,elected:1990+t*5,approval:t-2}))}function ot(e){return e.csvParse(`PassengerId,Survived,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked
1,0,3,"Braund, Mr. Owen Harris",male,22,1,0,A/5 21171,7.25,,S
2,1,1,"Cumings, Mrs. John Bradley (Florence Briggs Thayer)",female,38,1,0,PC 17599,71.2833,C85,C
3,1,3,"Heikkinen, Miss. Laina",female,26,0,0,STON/O2. 3101282,7.925,,S
4,1,1,"Futrelle, Mrs. Jacques Heath (Lily May Peel)",female,35,1,0,113803,53.1,C123,S
5,0,3,"Allen, Mr. William Henry",male,35,0,0,373450,8.05,,S
6,0,3,"Moran, Mr. James",male,,0,0,330877,8.4583,,Q
7,0,1,"McCarthy, Mr. Timothy J",male,54,0,0,17463,51.8625,E46,S
8,0,3,"Palsson, Master. Gosta Leonard",male,2,3,1,349909,21.075,,S`).map(({Age:t,Name:a,Fare:n})=>({Name:a,Age:+t,Fare:+n}))}function lt(e,t){const a=e.module();return a.variable(t()).define(["md","opinionPolls"],E),a.variable(t()).define(["md"],q),a.variable(t()).define(["table","titanicData","d3","html"],N),a.variable(t()).define(["md"],B),a.variable(t()).define(["table","spotify","html","d3"],H),a.variable(t("table")).define("table",["defaultOptions","html","th","identity"],z),a.variable(t()).define(["md"],G),a.variable(t()).define(["table","kenyaData","html","d3"],J),a.variable(t()).define(["md"],R),a.variable(t("viewof name")).define("viewof name",["table","opinionPolls","html","d3"],V),a.variable(t("name")).define("name",["Generators","viewof name"],(n,i)=>n.input(i)),a.variable(t()).define(["name","md"],W),a.variable(t("th")).define("th",["html"],Q),a.variable(t("style")).define("style",Y),a.variable(t()).define(["md"],K),a.variable(t("defaultOptions")).define("defaultOptions",U),a.variable(t("identity")).define("identity",X),a.variable(t()).define(["md"],Z),a.variable(t("d3")).define("d3",["require"],tt),a.variable(t()).define(["md"],et),a.variable(t("spotifyCharts")).define("spotifyCharts",["d3","FileAttachment"],at),a.variable(t("spotify")).define("spotify",["spotifyCharts"],nt),a.variable(t("kenyaData")).define("kenyaData",it),a.variable(t("opinionPolls")).define("opinionPolls",rt),a.variable(t("titanicData")).define("titanicData",["d3"],ot),a}function st(e){return e`# Flight distance calculator`}function dt(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/flight_distance/).*`}function ut(e,t,a){const n=e`

         <input name="dep" type="text" autocomplete="off" 
          placeholder="Choose departure airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${t.map(o=>Object.assign(e`<option>`,{value:o}))}
          </datalist>`,i=e`<input name="arr" type="text" autocomplete="off" 
          placeholder="Choose arrival airport" style="font-size: 1em;" list=options>
          <datalist id="options">
              ${t.map(o=>Object.assign(e`<option>`,{value:o}))}
          </datalist>`,r=e`<input type="button" value="Add flight">`,l=e`<input type="button" value="Clear all flights">`,d=e`<input type="button" value="Clear current inputs">`,u=e`<input type="button" value="Switch departure and arrival airports">`,s=e`<p>${n} ${i}<br/>${r}${l}${d}${u}</p>`;return r.onclick=()=>{let o=n.children[0].value,c=i.children[0].value;if(o!=""&&c!="")s.value.push([a(o),a(c)]);else throw"Must select both a departure and arrival airport";s.dispatchEvent(new CustomEvent("input"))},d.onclick=()=>{n.children[0].value="",i.children[0].value=""},u.onclick=()=>{let o=n.children[0].value;n.children[0].value=i.children[0].value,i.children[0].value=o},l.onclick=()=>{s.value=[],n.children[0].value="",i.children[0].value="",s.dispatchEvent(new CustomEvent("input"))},s.value=[],s}function ct(e,t){return e.map(a=>[t.get(a[0]),t.get(a[1])])}function ft(e,t,a){return e.length>0?t(e):a`Add a flight to display flight data here.`}function pt(e,t,a,n,i,r,l){return e.length>0?t`Your total flight distance is ${a(n)} miles.  If flying economy, this will have required around ${i(r)} kwh of energy, and the total co2 emissions will be around ${i(l)} tonnes. `:t``}function mt(e,t){return e.map(function(n){let i=n[0],r=n[1],l={};l.from=i.name,l.to=r.name;for(const[c,m]of Object.entries(i))l[c+"_from"]=m;for(const[c,m]of Object.entries(r))l[c+"_to"]=m;let d=l.lat_from,u=l.lng_from,s=l.lat_to,o=l.lng_to;return l.distance=t(d,u,s,o),l})}function ht(e,t){return e.map(function(n){return{from:n.name_from,to:n.name_to,miles:t.format(",.0f")(n.distance)}})}function _t(e,t){return e.csvFormat(t)}function gt(e,t,a){return e.download(t(a),"flights","Download CSV")}function bt(e){return e`Bulk import previously created csv (needs at minimum \`icao_from\` and \`icao_to\` fields)`}function yt(e){return e`<input type=file accept="text/csv" >`}async function vt(e,t,a,n){const i=await e.text(t),r=a.csvParse(i);n.value=r.map(l=>[l.icao_from,l.icao_to]),n.dispatchEvent(new CustomEvent("input"))}function wt(e,t){return e(t)}function kt(e,t){return e.sum(t,a=>a.distance)}function $t(e,t){return e.flying.flying_miles_to_kwh(t)}function Mt(e){return(function(t){return t*e.convert.per("kg_co2_from_jet_fuel/kwh")})}function xt(e,t,a){return e(t.flying.flying_miles_to_kwh(a))/1e3}function St(e){return e.format(",.0f")}function Ct(e){return e.format(",.2r")}function Tt(e){return e`### Modules & Imports`}function Ot(e){return e("d3")}function Pt(e){return e("@robinl/energy_usage@0.1.6")}function Dt(e){return(function(a){return new Blob([e.csvFormat(a)],{type:"text/csv"})})}function It(){return(function(t,a,n,i){function r(m){return m*(Math.PI/180)}var l=6371,d=r(n-t),u=r(i-a),s=Math.sin(d/2)*Math.sin(d/2)+Math.cos(r(t))*Math.cos(r(n))*Math.sin(u/2)*Math.sin(u/2),o=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)),c=l*o;return c*.621371})}function jt(e){return e.text("https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat").then(function(t){var a=`id,name,city,country,iata,icao,lat,lng
`;let n=a+t;var i=e.csvParse(n,e.autoType);return i})}function Lt(e){return new Map(e.map(t=>[t.icao,t]))}function At(e){return e.map(t=>`${t.name} ${t.city} ${t.country} ${t.iata} (${t.icao})`)}function Ft(){return(function(e){var t=/\((\w{4})\)$/g,a=t.exec(e);if(a)return a[1]})}function Et(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],st),a.variable(t()).define(["md"],dt),a.variable(t("viewof flights_list")).define("viewof flights_list",["html","options","get_icao_from_value"],ut),a.variable(t("flights_list")).define("flights_list",["Generators","viewof flights_list"],(r,l)=>r.input(l)),a.variable(t("selected_airports")).define("selected_airports",["flights_list","airports_icao_dict"],ct),a.variable(t("table_of_distances")).define("table_of_distances",["data_for_table","table","md"],ft),a.variable(t("blurb")).define("blurb",["data_for_table","md","fmt_num","total_flight_miles","fmt_num_round","total_energy_usage","tonnes_co2"],pt),a.variable(t("selected_airports_with_distances")).define("selected_airports_with_distances",["selected_airports","getDistanceFromLatLonInMiles"],mt),a.variable(t("data_for_table")).define("data_for_table",["selected_airports_with_distances","d3"],ht),a.variable(t()).define(["d3","selected_airports_with_distances"],_t),a.variable(t("download_as_csv")).define("download_as_csv",["DOM","serialize","selected_airports_with_distances"],gt),a.variable(t("file_upload_blurb")).define("file_upload_blurb",["md"],bt),a.variable(t("viewof upload")).define("viewof upload",["html"],yt),a.variable(t("upload")).define("upload",["Generators","viewof upload"],(r,l)=>r.input(l)),a.variable(t("csv_data")).define("csv_data",["Files","upload","d3","viewof flights_list"],vt),a.variable(t("flights_chart")).define("flights_chart",["chart","selected_airports_with_distances"],wt),a.variable(t("total_flight_miles")).define("total_flight_miles",["d3","selected_airports_with_distances"],kt),a.variable(t("total_energy_usage")).define("total_energy_usage",["eu","total_flight_miles"],$t),a.variable(t("kwh_to_kg_co2")).define("kwh_to_kg_co2",["eu"],Mt),a.variable(t("tonnes_co2")).define("tonnes_co2",["kwh_to_kg_co2","eu","total_flight_miles"],xt),a.variable(t("fmt_num")).define("fmt_num",["d3"],St),a.variable(t("fmt_num_round")).define("fmt_num_round",["d3"],Ct),a.variable(t()).define(["md"],Tt),a.variable(t("d3")).define("d3",["require"],Ot),a.variable(t("eu")).define("eu",["require"],Pt);const n=e.module(F);a.import("chart",n);const i=e.module(lt);return a.import("table",i),a.variable(t("serialize")).define("serialize",["d3"],Dt),a.variable(t("getDistanceFromLatLonInMiles")).define("getDistanceFromLatLonInMiles",It),a.variable(t("airports")).define("airports",["d3"],jt),a.variable(t("airports_icao_dict")).define("airports_icao_dict",["airports"],Lt),a.variable(t("options")).define("options",["airports"],At),a.variable(t("get_icao_from_value")).define("get_icao_from_value",Ft),a}export{Et as default};
