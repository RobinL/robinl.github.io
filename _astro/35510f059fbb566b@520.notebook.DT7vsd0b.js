function x(t){let a,e,o,i=!1;const s=t(n=>{o=n,a?(a(n),a=e=void 0):i=!0});return{async next(){return{done:!1,value:await(i?(i=!1,o):new Promise((n,r)=>(a=n,e=r)))}},async return(){return e?.(new Error("Generator returned")),a=e=void 0,s?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function S(t){let a;return Object.defineProperty(x(e=>{a=e,t!==void 0&&e(t)}),"value",{get:()=>t,set:e=>(t=e,a?.(t))})}function M(t){const a=S(t);return[a,{get value(){return a.value},set value(e){a.value=e}}]}function k(t,a=()=>null){const e=t.module();k.FileAttachment&&e.variable().define("FileAttachment",[],()=>k.FileAttachment);for(const o of k.cells){const i=o.inputs??[],s=o.output;if(o.outputs?.length){const n=`cell ${o.id}`;e.variable(a(null)).define(n,i,o.body);for(const r of o.outputs)e.variable(!0).define(r,[n],l=>l[r])}else if(s)if(o.autoview){const n=s.slice(7),r=`viewof ${n}`;e.variable(a(r)).define(r,i,o.body),e.variable(a(n)).define(n,["Generators",r],(l,d)=>l.input(d))}else if(o.automutable){const n=s.slice(8),r=`cell ${o.id}`;e.define(s,i,o.body),e.define(r,[s],M),e.variable(a(n)).define(n,[r],([l])=>l),e.variable(!0).define(`mutable$${n}`,[r],([,l])=>l)}else e.variable(a(s)).define(s,i,o.body);else e.variable(a(null)).define(i,o.body)}return e}Object.assign(k,{title:"@robinl/flight-distance-calculator: 35510f059fbb566b@520.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(t,a){return t`# Tables

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
${JSON.stringify(a.slice(0,2),null,2)}
\`\`\`
`},inputs:["md","opinionPolls"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(t){return t`
<br /><br />

*Click the caret on the left to view code for any example.*


### Titanic survivors

This is a table of the Titanic survivors dataset - it shows the data in natural order, first, but the columns are sortable. It shows usage of custom formatters for the Name and Fare columns. The Fare column formatter uses the rowIndex to determine the appropriate format based on the row number. (i.e. $ for the first row only).`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(t,a,e,o){return t(a,{sortable:!0,columns:{Fare:{formatter(i,s){return s===0?e.format("$.2f")(i):e.format(".2f")(i)}},Name:{formatter(i){let s=i.match(/([^,]*)\,(.*)/);return o`<strong>${s[1]}</strong>, ${s[2]}`}}}})},inputs:["table","titanicData","d3","html"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(t){return t`<br /><br />

### Spotify top charts

This is a table of the top-streamed tracks from [Spotify](https://spotifycharts.com/regional) today. It shows usage of a custom formatter, as well as the \`rank\` option to add an unlabeled rank column. This also sets the \`style\` to compact because we’re displaying a bunch of rows.`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(t,a,e,o){return t(a,{rank:!0,style:"compact",columns:{Track:{formatter(i,s){return e`<strong>${i[0]}</strong> by ${i[1]}`}},Streams:{formatter:o.format(",")}}})},inputs:["table","spotify","html","d3"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(a,e,o,i){return((s,n)=>{n=Object.assign({},a,n);const{sortable:r,rank:l,paged:d}=n;let y,g=!0,b=0;if(r&&l)throw new Error("A table can either be ranked or sortable, but not both");let j=Object.keys(s[0]).map(u=>{const h=n.columns[u]||{};return{key:u,type:h.type||typeof s[0][u],options:h}});function T(){y&&(s=s.slice().sort((f,p)=>{let c=f[y],m=p[y];if(c==m)return JSON.stringify(f).localeCompare(JSON.stringify(p));let $=c>m?1:c<m?-1:0;return g&&($=-$),$}));let u=s.slice(b*d,b*d+d),h=Math.ceil(s.length/d);return e`<div><div>
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
        <table class='pretty-table ${n.style}'>
          ${n.header===!1?"":e`<thead>
            ${l?e`<th></th>`:""}
            ${j.map(f=>o(f,y,g,r))}
          </thead>`}
          <tbody>
            ${u.map((f,p)=>e`<tr>
              ${l?e`<td class='cell-rank'>${p+1}</td>`:""}
              ${j.map(c=>{let m=(c.options.formatter||i)(f[c.key],p,f);return m instanceof window.HTMLElement&&m.tagName=="TD"?m:e`<td class='cell-type-${c.type}'>${m}</td>`})}
            </tr>`)}
          </tbody>
        </table>
        ${h?e`<div class='pretty-pager'>
          <button data-action="next">Previous</button>
          ${Array.from({length:h}).map((f,p)=>e`<button data-page="${p+1}">${p+1}</button>`)}
          <button data-action="previous">Next</button>
        </div>`:""}
      </div></div>`}let v=T();function w(){v.firstChild.remove(),v.appendChild(T().firstChild)}return v.addEventListener("click",u=>{if(u.target.tagName==="TH"&&r&&(y==u.target.dataset.key&&(g=!g),y=u.target.dataset.key,w()),u.target.tagName==="BUTTON")if(u.target.dataset.action)switch(u.target.dataset.action){case"next":b++,w();break;case"previous":b--,w();break}else u.target.dataset.page&&(b=parseInt(u.target.dataset.page),w())}),v})},inputs:["defaultOptions","html","th","identity"],outputs:void 0,output:"table",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(t){return t`<br /><br />

### Kenya data

Demonstration of [data from Quartz Atlas](https://www.theatlas.com/charts/BJGldhdsG): demonstrates usage of the _type_ override, a custom formatter, and overriding titles.`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(t,a,e,o){return t(a,{columns:{method:{title:""},percent:{title:"Method of transfer (2006)",type:"string",formatter(i,s){return e`<div style='display:flex;align-items:center;height:1.5em;'>
          <div style='width:${i}%;height:1em;background:#5f27cd;margin-right:0.5em;'></div>${s==0?o.format(".0%")(i/100):i}
        </div>`}}}})},inputs:["table","kenyaData","html","d3"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(t){return t`<br /><br />

### Heat-tables

A tribute to the [538](https://fivethirtyeight.com/features/the-year-in-trumps-approval-rating/) table style for opinion polls. Demonstrates that if a cell formatter returns a \`<td>\` element, it can take over the entire cell to do things like setting background colors.

This also demonstrates using a table with viewof: click a name to view the person below.
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(a,e,o,i){let s=a(e,{columns:{name:{formatter(n,r,l){let d=o`<a style='cursor:pointer'>${n}</a>`;return d.addEventListener("click",()=>{s.value=l,s.dispatchEvent(new CustomEvent("input"))}),d}},elected:{type:"string"},approval:{formatter(n,r){let l=i.scaleLinear().domain([-2,0,2]).range(["#f4c8cf","#f8f8f8","#c8f4cb"]);return o`<td style='background:${l(n)};text-align:right;padding:2px 5px;'>${n}</td>`}}}});return s},inputs:["table","opinionPolls","html","d3"],outputs:void 0,output:"viewof$name",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(t,a){return t&&a`## ${t.name}

I was elected ${t.elected} and have an approval rating of ${t.approval}.`},inputs:["name","md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(a){return((e,o,i,s)=>{let{options:{title:n}}=e,r=o&&i?"↑":"↓",l=a`<span style='${o===e.key?"":"visibility:hidden"}'>${r}</span>`,d=n!==void 0?n:e.key;return e.type==="number"?a`<th
      data-key="${e.key}"
      class='column-type-${e.type} ${s?"sortable":""}'>
        ${l}${d}
    </th>`:a`<th
      data-key="${e.key}"
      class='column-type-${e.type} ${s?"sortable":""}'>
        ${d}${l}
    </th>`})},inputs:["html"],outputs:void 0,output:"th",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(){return`

`},inputs:[],outputs:void 0,output:"style",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(t){return t`Here's [my are.na collection](https://www.are.na/tom-macwright/good-looking-tables) of inspirations. My key observations:

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
- Alternate row coloring`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(){return{columns:{},style:"normal",paged:25}},inputs:[],outputs:void 0,output:"defaultOptions",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(){return(a=>a)},inputs:[],outputs:void 0,output:"identity",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(t){return t`Helpers (not used in export path)`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(a){return a("d3@5")},inputs:["require"],outputs:void 0,output:"d3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(t){return t`Datasets`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(a){return a.map(e=>({Track:[e["Track Name"],e.Artist],Streams:+e.Streams}))},inputs:["spotifyCharts"],outputs:void 0,output:"spotify",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(){return[{method:"Hand",percent:58},{method:"Bus",percent:27},{method:"Post office, money order",percent:24},{method:"Direct deposit",percent:11},{method:"Money transfer services",percent:9},{method:"Cheque",percent:4},{method:"Someone else's account",percent:3}]},inputs:[],outputs:void 0,output:"kenyaData",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(){return["Barney","Homer","Bart","Lisa","Marge"].map((a,e)=>({name:a,elected:1990+e*5,approval:e-2}))},inputs:[],outputs:void 0,output:"opinionPolls",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(a){return a.csvParse(`PassengerId,Survived,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked
1,0,3,"Braund, Mr. Owen Harris",male,22,1,0,A/5 21171,7.25,,S
2,1,1,"Cumings, Mrs. John Bradley (Florence Briggs Thayer)",female,38,1,0,PC 17599,71.2833,C85,C
3,1,3,"Heikkinen, Miss. Laina",female,26,0,0,STON/O2. 3101282,7.925,,S
4,1,1,"Futrelle, Mrs. Jacques Heath (Lily May Peel)",female,35,1,0,113803,53.1,C123,S
5,0,3,"Allen, Mr. William Henry",male,35,0,0,373450,8.05,,S
6,0,3,"Moran, Mr. James",male,,0,0,330877,8.4583,,Q
7,0,1,"McCarthy, Mr. Timothy J",male,54,0,0,17463,51.8625,E46,S
8,0,3,"Palsson, Master. Gosta Leonard",male,2,3,1,349909,21.075,,S`).map(({Age:e,Name:o,Fare:i})=>({Name:o,Age:+e,Fare:+i}))},inputs:["d3"],outputs:void 0,output:"titanicData",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{k as default};
