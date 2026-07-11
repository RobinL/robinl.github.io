function F(i){let e,t,a,o=!1;const l=i(n=>{a=n,e?(e(n),e=t=void 0):o=!0});return{async next(){return{done:!1,value:await(o?(o=!1,a):new Promise((n,s)=>(e=n,t=s)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,l?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function W(i){let e;return Object.defineProperty(F(t=>{e=t,i!==void 0&&t(i)}),"value",{get:()=>i,set:t=>(i=t,e?.(i))})}function k(i){const e=W(i);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function h(i,e=()=>null){const t=i.module();h.FileAttachment&&t.variable().define("FileAttachment",[],()=>h.FileAttachment);for(const a of h.cells){const o=a.inputs??[],l=a.output;if(a.outputs?.length){const n=`cell ${a.id}`;t.variable(e(null)).define(n,o,a.body);for(const s of a.outputs)t.variable(!0).define(s,[n],p=>p[s])}else if(l)if(a.autoview){const n=l.slice(7),s=`viewof ${n}`;t.variable(e(s)).define(s,o,a.body),t.variable(e(n)).define(n,["Generators",s],(p,d)=>p.input(d))}else if(a.automutable){const n=l.slice(8),s=`cell ${a.id}`;t.define(l,o,a.body),t.define(s,[l],k),t.variable(e(n)).define(n,[s],([p])=>p),t.variable(!0).define(`mutable$${n}`,[s],([,p])=>p)}else t.variable(e(l)).define(l,o,a.body);else t.variable(e(null)).define(o,a.body)}return t}Object.assign(h,{title:"@robinl/computing-the-fellegi-sunter-model: 0068042ce3b10dd1@284.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(i){return i`# Computing the Fellegi Sunter model
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(e){return e("@robinl/record_linkage_javascript_utilities@0.0.8")},inputs:["require"],outputs:void 0,output:"rlju",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(e){return e.button("refresh splink_vis_utils javascript lib")},inputs:["Inputs"],outputs:void 0,output:"viewof$refresh",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(){return"http://127.0.0.1:8889/bundle.js"},inputs:[],outputs:void 0,output:"localUrl",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(){return{domain:["first_name","surname","postcode","gender","prior","final_match","match_probability"],range:["#ff7f0e","#2ca02c","#d62728","#9467bd","#aaaaaa","#aaaaaa","#aaaaaa"]}},inputs:[],outputs:void 0,output:"colour_mapping",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(){return(function(){const t=document.getElementById("data-table").insertRow(-1);t.contentEditable=!0;const a=t.insertCell(0),o=t.insertCell(1),l=t.insertCell(2),n=t.insertCell(3);a.innerHTML="New First Name",o.innerHTML="New Surname",l.innerHTML="New Postcode",n.innerHTML='<select><option value="male">Male</option><option value="female">Female</option><option value="other">Non-binary</option></select>'})},inputs:[],outputs:void 0,output:"addRow",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(){return(function(t,a=1){const[o,l,n]=[parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)];return`rgba(${o}, ${l}, ${n}, ${a})`})},inputs:[],outputs:void 0,output:"hexToRgba",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,a){const o={};return e.domain.forEach((l,n)=>{o[l]=[t(e.range[n],.35),t(e.range[n],.1)]}),a`
  <table id="data-table">
    <tr>
      <th style="background-color:${o.first_name[0]};">first_name</th>
      <th style="background-color:${o.surname[0]};">surname</th>
      <th style="background-color:${o.postcode[0]};">postcode</th>
      <th style="background-color:${o.gender[0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${o.first_name[1]};">Robin</td>
      <td style="background-color:${o.surname[1]};">Linacre</td>
      <td style="background-color:${o.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${o.gender[1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${o.first_name[1]};">Emma</td>
      <td style="background-color:${o.surname[1]};">Williams</td>
      <td style="background-color:${o.postcode[1]};">EC4M 8AD</td>
      <td style="background-color:${o.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${o.first_name[1]};">Sarah</td>
      <td style="background-color:${o.surname[1]};">Williams</td>
      <td style="background-color:${o.postcode[1]};">SW7 2AZ</td>
      <td style="background-color:${o.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`},inputs:["colour_mapping","hexToRgba","html"],outputs:void 0,output:"input_table_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e,t,a){const o={};return e.domain.forEach((l,n)=>{o[l]=[t(e.range[n],.35),t(e.range[n],.1)]}),a`
  <table id="data-table">
    <tr>
      <th style="background-color:${o.first_name[0]};">first_name</th>
      <th style="background-color:${o.surname[0]};">surname</th>
      <th style="background-color:${o.postcode[0]};">postcode</th>
      <th style="background-color:${o.gender[0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${o.first_name[1]};">Robyn</td>
      <td style="background-color:${o.surname[1]};">Linacre</td>
      <td style="background-color:${o.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${o.gender[1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${o.first_name[1]};">Emma</td>
      <td style="background-color:${o.surname[1]};">Williams</td>
      <td style="background-color:${o.postcode[1]};">EC4M 8AD</td>
      <td style="background-color:${o.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  
</table>
  `},inputs:["colour_mapping","hexToRgba","html"],outputs:void 0,output:"input_table_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t,a){return(function(l,n){const s={};n.domain.forEach((u,f)=>{s[u]=[e(n.range[f],.35),e(n.range[f],.1)]});const p=Object.keys(l[0]),d=`<tr>${p.map(u=>{const f=n.domain.find(c=>u.includes(c));return`<th style='background-color:${f?s[f][0]:""};'>${u}</th>`}).join("")}</tr>`,r=l.map(u=>`<tr>${p.map(f=>{const b=u[f];let c="";if(f.includes("final_match_weight"))c=t(b);else if(f.includes("match_probability"))c=a(b);else{const m=n.domain.find(_=>f.includes(_));c=m?s[m][1]:""}return`<td style='background-color:${c};'>${b}</td>`}).join("")}</tr>`).join("");return`<table>${d}${r}</table>`})},inputs:["hexToRgba","getColorForFinalMatchWeight","getColorForMatchProbability"],outputs:void 0,output:"createColouredTable",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t,a,o){const l=e.map(n=>{const{uid_l:s,uid_r:p,source_dataset_l:d,source_dataset_r:r,...u}=n;return u});return t`${a(l,o)}`},inputs:["comparison_pairs","html","createColouredTable","colour_mapping"],outputs:void 0,output:"comparison_pairs_no_gamma",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t,a,o,l){const n={};e.domain.forEach((m,_)=>{n[m]=[t(e.range[_],.35),t(e.range[_],.2)]});const s=a.filter(m=>m[1]!=="Null"),p=o.convertMatchScoreMetrics.roundToSignificantFigures,d=o.convertMatchScoreMetrics.calcBayesFactorFromMandU,r=o.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor,u=m=>p(m,3),f=s.slice(1).map(m=>{const[_,y,g,v,w]=m,M=u(v),j=u(w),$=u(d(v,w)),C=u(r($));return[_,y,g,M,j,$,C]}),b=`<tr>${["Column","Scenario","Comparison Vector Value (γ)","M Prob","U Prob","Bayes Factor","Partial Match Weight (ω)"].map(m=>`<th style='background-color:#DDD'; >${m}</th>`).join("")}</tr>`,c=f.map(m=>{const _=m[0],y=n[_]?n[_][1]:"#ffffff";return`<tr>${m.map(g=>`<td style='background-color:${y};'>${g}</td>`).join("")}</tr>`}).join("");return l`<table>${b}${c}</table>`},inputs:["colour_mapping","hexToRgba","table_of_settings","rlju","html"],outputs:void 0,output:"lookup_table",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e,t,a){return e.applyComparisonFunctions(t,a)},inputs:["rlju","comparison_pairs","comparison_functions"],outputs:void 0,output:"comparison_vector",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e,t,a,o){const l=e.map(n=>{const{uid_l:s,uid_r:p,source_dataset_l:d,source_dataset_r:r,...u}=n;return u});return t`${a(l,o)}`},inputs:["comparison_vector","html","createColouredTable","colour_mapping"],outputs:void 0,output:"comparison_pairs_with_gamma",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t,a,o){const l=e.map(n=>Object.fromEntries(Object.entries(n).filter(([s])=>s.startsWith("γ"))));return t`${a(l,o)}`},inputs:["cv_with_model_params","html","createColouredTable","colour_mapping"],outputs:void 0,output:"comparison_vector_values_only",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e,t,a,o,l,n){const s=r=>e.convertMatchScoreMetrics.roundToSignificantFigures(r,3),d=t.map(r=>Object.fromEntries(Object.entries(r).filter(([u])=>u.startsWith("γ")||u.startsWith("ω")))).map(r=>{const u=[],f=[];Object.keys(r).forEach(c=>{c.startsWith("ω")?(r[c]=s(r[c]),f.push(c)):c.startsWith("γ")&&u.push(c)});const b={};return u.forEach(c=>{b[c]=r[c]}),b.ω_prior=s(a),f.forEach(c=>{b[c]=r[c]}),b});return o`${l(d,n)}`},inputs:["rlju","cv_with_model_params","prior_ω","html","createColouredTable","colour_mapping"],outputs:void 0,output:"cv_pmw_sum",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e,t,a,o,l){const p=e.map(d=>Object.fromEntries(Object.entries(d).filter(([r])=>(r.endsWith("_l")||r.endsWith("_r")||r.endsWith("final_match_weight"))&&!r.includes("uid")&&!r.includes("source_dataset")))).map(d=>(d.match_probability=t.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(d.ω_final_match_weight),d.ω_final_match_weight=d.ω_final_match_weight.toFixed(3),d.match_probability=d.match_probability.toFixed(3),d)).map(d=>{const{match_probability:r,ω_final_match_weight:u,...f}=d;return{match_probability:r,ω_final_match_weight:u,...f}});return a`${o(p,l)}`},inputs:["cv_with_model_params","rlju","html","createColouredTable","colour_mapping"],outputs:void 0,output:"raw_values_with_final_match_prob",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(i){return i},inputs:["cv_with_model_params"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e,t,a){return e.addModelParametersToComparisonVector(t,a)},inputs:["rlju","comparison_vector","settings"],outputs:void 0,output:"cv_with_model_params",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e){return{first_name:e.jaroWinklerComparison,surname:e.jaroWinklerComparison,postcode:e.levenshteinComparison,gender:e.exactMatchComparison}},inputs:["rlju"],outputs:void 0,output:"comparison_functions",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e,t,a){return e.createComparisonRowsLinkOnly([t,a],t.properties)},inputs:["rlju","table_data_l","table_data_r"],outputs:void 0,output:"comparison_pairs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e,t,a){return e.observe(o=>{const l=n=>o(t.parseTableData(a));return a.addEventListener("input",l,!1),o(t.parseTableData(a)),()=>window.removeEventListener("input",l)})},inputs:["Generators","rlju","input_table_l"],outputs:void 0,output:"table_data_l",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e,t,a){return e.observe(o=>{const l=n=>o(t.parseTableData(a));return a.addEventListener("input",l,!1),o(t.parseTableData(a)),()=>window.removeEventListener("input",l)})},inputs:["Generators","rlju","input_table_r"],outputs:void 0,output:"table_data_r",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e,t){return e.transformComparisonLevelsToTable(t)},inputs:["rlju","settings"],outputs:void 0,output:"table_of_settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e,t){return e.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(t.probability_two_random_records_match)},inputs:["rlju","settings"],outputs:void 0,output:"prior_ω",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e){return e.tutorial_partial_match_weights_settings},inputs:["rlju"],outputs:void 0,output:"settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(){return(function(t){const a=Math.max(Math.min(t,10),-10)/10,o=Math.floor(128+127*a);return`rgba(${Math.floor(128-127*a)}, ${o}, 128, 0.35)`})},inputs:[],outputs:void 0,output:"getColorForFinalMatchWeight",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(){return(function(t){const a=Math.max(Math.min(t,1),0),o=Math.floor(16256*a);return`rgba(${Math.floor(16256*(1-a))}, ${o}, 128, 0.35)`})},inputs:[],outputs:void 0,output:"getColorForMatchProbability",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{h as default};
