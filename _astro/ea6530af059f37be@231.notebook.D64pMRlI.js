const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ef62bc8f8c0d577e@90.notebook.BjEcGyBy.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/843cb6e82d7c3d9b@474.notebook.qQOzargc.js","_astro/index.BXWY-sTu.js","_astro/NotebookCellProvider.BwccWe4F.js","_astro/vega-embed.module.CqX21S21.js","_astro/NotebookCellProvider.BmMInUOO.css","_astro/first-names.DbkC4pBN.js","_astro/d25176b0fe784ad0@488.notebook.Bts83zUG.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./preload-helper.zoZ8CRZ9.js";function _(o){let e,t,a,u=!1;const n=o(i=>{a=i,e?(e(i),e=t=void 0):u=!0});return{async next(){return{done:!1,value:await(u?(u=!1,a):new Promise((i,s)=>(e=i,t=s)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,n?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function c(o){let e;return Object.defineProperty(_(t=>{e=t,o!==void 0&&t(o)}),"value",{get:()=>o,set:t=>(o=t,e?.(o))})}function b(o){const e=c(o);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function p(o,e=()=>null){const t=o.module();p.FileAttachment&&t.variable().define("FileAttachment",[],()=>p.FileAttachment);for(const a of p.cells){const u=a.inputs??[],n=a.output;if(a.outputs?.length){const i=`cell ${a.id}`;t.variable(e(null)).define(i,u,a.body);for(const s of a.outputs)t.variable(!0).define(s,[i],l=>l[s])}else if(n)if(a.autoview){const i=n.slice(7),s=`viewof ${i}`;t.variable(e(s)).define(s,u,a.body),t.variable(e(i)).define(i,["Generators",s],(l,d)=>l.input(d))}else if(a.automutable){const i=n.slice(8),s=`cell ${a.id}`;t.define(n,u,a.body),t.define(s,[n],b),t.variable(e(i)).define(i,[s],([l])=>l),t.variable(!0).define(`mutable$${i}`,[s],([,l])=>l)}else t.variable(e(n)).define(n,u,a.body);else t.variable(e(null)).define(u,a.body)}return t}Object.assign(p,{title:"@robinl/86fc30325e4106c4: ea6530af059f37be@231.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async o=>{const{Record:e,RecordComparison:t}=await f(()=>import("./ef62bc8f8c0d577e@90.notebook.BjEcGyBy.js"),__vite__mapDeps([0,1,2])).then(a=>{const u=o._module._runtime.module(a.default),n=new Map(Array.from(o._outputs,i=>[i._name,i]));return n.get("Record")?.import("Record",u),n.get("RecordComparison")?.import("RecordComparison",u),{}});return{Record:e,RecordComparison:t}},inputs:["@variable"],outputs:["Record","RecordComparison"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"js",body:async o=>{const{get_waterfall_chart:e}=await f(()=>import("./843cb6e82d7c3d9b@474.notebook.qQOzargc.js"),__vite__mapDeps([3,4,5,1,2,6,7,8])).then(t=>{const a=o._module._runtime.module(t.default);return new Map(Array.from(o._outputs,n=>[n._name,n])).get("get_waterfall_chart")?.import("get_waterfall_chart",a),{}});return{get_waterfall_chart:e}},inputs:["@variable"],outputs:["get_waterfall_chart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:3,mode:"js",body:async o=>{const{get_df_comparison:e,get_df_gammas:t}=await f(()=>import("./d25176b0fe784ad0@488.notebook.Bts83zUG.js"),__vite__mapDeps([9,1,2,4,5,6,7,8])).then(a=>{const u=o._module._runtime.module(a.default),n=new Map(Array.from(o._outputs,i=>[i._name,i]));return n.get("get_df_comparison")?.import("get_df_comparison",u),n.get("get_df_gammas")?.import("get_df_gammas",u),{}});return{get_df_comparison:e,get_df_gammas:t}},inputs:["@variable"],outputs:["get_df_comparison","get_df_gammas"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:4,mode:"js",body:async o=>{const{aq:e,op:t}=await f(()=>import("./79750b3b8e929d9d@209.notebook.D3YC6dXV.js"),[]).then(a=>{const u=o._module._runtime.module(a.default),n=new Map(Array.from(o._outputs,i=>[i._name,i]));return n.get("aq")?.import("aq",u),n.get("op")?.import("op",u),{}});return{aq:e,op:t}},inputs:["@variable"],outputs:["aq","op"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:5,mode:"ojs",body:function(o){return o`# Charts and Figures (Introduction)`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bristol"})},inputs:["Record"],outputs:void 0,output:"example_record_1_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bath"})},inputs:["Record"],outputs:void 0,output:"example_record_1_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,a){return new e(t,a)},inputs:["RecordComparison","example_record_1_l","example_record_1_r"],outputs:void 0,output:"example_1_comparison",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.9,.1],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7]}]}},inputs:[],outputs:void 0,output:"splink_settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t){let a=e.as_wide().objects()[0];return Object.keys(t.as_dict()).forEach(u=>{a[u+"_l"]==a[u+"_r"]?a["𝛾_"+u]=1:a["𝛾_"+u]=0}),a},inputs:["example_1_comparison","example_record_1_l"],outputs:void 0,output:"example_1_row_with_gammas",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}},inputs:[],outputs:void 0,output:"overrides",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t,a,u){return e(t,a,u,!0)},inputs:["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"],outputs:void 0,output:"intro_simple_waterfall",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(o){return o`# Charts and Figures (Mathematical Model)`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(){return(function(t){const a=[],u={"unique id":"uid","first name":"fname",surname:"sname","date of birth":"dob",town:"town"};return t.querySelectorAll("tr").forEach((i,s)=>{let l=i.cells,d=[];for(let m of l){let r=m.innerText;r=r.trim(),r=r.toLowerCase(),r==""&&(r=null),d.push(r)}a.push(d)}),a.reduce((i,s,l)=>{if(l==0)s=s.map(d=>u[d]),i.properties=s;else{const d={};i.properties.forEach((m,r)=>{d[m]=s[r]}),i.push(d)}return i},[])})},inputs:[],outputs:void 0,output:"parseTableData",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t,a){return e.observe(u=>{const n=i=>u(t(a));return a.addEventListener("input",n,!1),u(t(a)),()=>window.removeEventListener("input",n)})},inputs:["Generators","parseTableData","table_l"],outputs:void 0,output:"records_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e){return e`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_l</td>
<td contenteditable>John</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_l</td>
<td contenteditable>Emma</td>

<td contenteditable>Jones</td>
<td contenteditable>1956-07-09</td>
<td contenteditable>Hull</td>

</tr>


<tr>
<td>3_l</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>London</td>

</tr>


</table>
`},inputs:["html"],outputs:void 0,output:"table_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return e`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_r</td>
<td contenteditable>Jonathan</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_r</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>Peckham</td>

</tr>



</table>
`},inputs:["html"],outputs:void 0,output:"table_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e,t,a){return e.observe(u=>{const n=i=>u(t(a));return a.addEventListener("input",n,!1),u(t(a)),()=>window.removeEventListener("input",n)})},inputs:["Generators","parseTableData","table_r"],outputs:void 0,output:"records_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e,t){return e.from(t)},inputs:["aq","records_l"],outputs:void 0,output:"df_1_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e,t){return e.from(t)},inputs:["aq","records_r"],outputs:void 0,output:"df_1_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e,t,a){return e(t,a)},inputs:["get_df_comparison","records_l","records_r"],outputs:void 0,output:"df_comparisons_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e,t,a){return e(t,a)},inputs:["get_df_gammas","df_comparisons_1","splink_settings_1"],outputs:void 0,output:"df_gammas_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){let t=["uid_l","uid_r"],a=e.columnNames();return a=a.filter(u=>u.includes("𝛾_")),a=t.concat(a),e.select(a)},inputs:["df_gammas_1"],outputs:void 0,output:"df_gammas_only_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}},inputs:[],outputs:void 0,output:"splink_settings_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"July"})},inputs:["Record"],outputs:void 0,output:"example_record_2_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"June"})},inputs:["Record"],outputs:void 0,output:"example_record_2_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(e,t,a){return new e(t,a)},inputs:["RecordComparison","example_record_2_l","example_record_2_r"],outputs:void 0,output:"example_2_comparison",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{p as default};
