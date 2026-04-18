function F(o){return o`# Computing the Fellegi Sunter model
`}function w(o){return o("@robinl/record_linkage_javascript_utilities@0.0.8")}function W(o){return o.button("refresh splink_vis_utils javascript lib")}function T(){return"http://127.0.0.1:8889/bundle.js"}function k(){return{domain:["first_name","surname","postcode","gender","prior","final_match","match_probability"],range:["#ff7f0e","#2ca02c","#d62728","#9467bd","#aaaaaa","#aaaaaa","#aaaaaa"]}}function j(){return(function(){const t=document.getElementById("data-table").insertRow(-1);t.contentEditable=!0;const e=t.insertCell(0),a=t.insertCell(1),r=t.insertCell(2),n=t.insertCell(3);e.innerHTML="New First Name",a.innerHTML="New Surname",r.innerHTML="New Postcode",n.innerHTML='<select><option value="male">Male</option><option value="female">Female</option><option value="other">Non-binary</option></select>'})}function P(){return(function(t,e=1){const[a,r,n]=[parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)];return`rgba(${a}, ${r}, ${n}, ${e})`})}function E(o,t,e){const a={};return o.domain.forEach((r,n)=>{a[r]=[t(o.range[n],.35),t(o.range[n],.1)]}),e`
  <table id="data-table">
    <tr>
      <th style="background-color:${a.first_name[0]};">first_name</th>
      <th style="background-color:${a.surname[0]};">surname</th>
      <th style="background-color:${a.postcode[0]};">postcode</th>
      <th style="background-color:${a.gender[0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${a.first_name[1]};">Robin</td>
      <td style="background-color:${a.surname[1]};">Linacre</td>
      <td style="background-color:${a.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${a.gender[1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${a.first_name[1]};">Emma</td>
      <td style="background-color:${a.surname[1]};">Williams</td>
      <td style="background-color:${a.postcode[1]};">EC4M 8AD</td>
      <td style="background-color:${a.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${a.first_name[1]};">Sarah</td>
      <td style="background-color:${a.surname[1]};">Williams</td>
      <td style="background-color:${a.postcode[1]};">SW7 2AZ</td>
      <td style="background-color:${a.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`}function R(o,t,e){const a={};return o.domain.forEach((r,n)=>{a[r]=[t(o.range[n],.35),t(o.range[n],.1)]}),e`
  <table id="data-table">
    <tr>
      <th style="background-color:${a.first_name[0]};">first_name</th>
      <th style="background-color:${a.surname[0]};">surname</th>
      <th style="background-color:${a.postcode[0]};">postcode</th>
      <th style="background-color:${a.gender[0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${a.first_name[1]};">Robyn</td>
      <td style="background-color:${a.surname[1]};">Linacre</td>
      <td style="background-color:${a.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${a.gender[1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${a.first_name[1]};">Emma</td>
      <td style="background-color:${a.surname[1]};">Williams</td>
      <td style="background-color:${a.postcode[1]};">EC4M 8AD</td>
      <td style="background-color:${a.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  
</table>
  `}function S(o,t,e){return(function(r,n){const _={};n.domain.forEach((l,d)=>{_[l]=[o(n.range[d],.35),o(n.range[d],.1)]});const p=Object.keys(r[0]),s=`<tr>${p.map(l=>{const d=n.domain.find(c=>l.includes(c));return`<th style='background-color:${d?_[d][0]:""};'>${l}</th>`}).join("")}</tr>`,i=r.map(l=>`<tr>${p.map(d=>{const m=l[d];let c="";if(d.includes("final_match_weight"))c=t(m);else if(d.includes("match_probability"))c=e(m);else{const u=n.domain.find(b=>d.includes(b));c=u?_[u][1]:""}return`<td style='background-color:${c};'>${m}</td>`}).join("")}</tr>`).join("");return`<table>${s}${i}</table>`})}function N(o,t,e,a){const r=o.map(n=>{const{uid_l:_,uid_r:p,source_dataset_l:s,source_dataset_r:i,...l}=n;return l});return t`${e(r,a)}`}function L(o,t,e,a,r){const n={};o.domain.forEach((u,b)=>{n[u]=[t(o.range[b],.35),t(o.range[b],.2)]});const _=e.filter(u=>u[1]!=="Null"),p=a.convertMatchScoreMetrics.roundToSignificantFigures,s=a.convertMatchScoreMetrics.calcBayesFactorFromMandU,i=a.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor,l=u=>p(u,3),d=_.slice(1).map(u=>{const[b,f,h,g,v]=u,y=l(g),$=l(v),M=l(s(g,v)),C=l(i(M));return[b,f,h,y,$,M,C]}),m=`<tr>${["Column","Scenario","Comparison Vector Value (γ)","M Prob","U Prob","Bayes Factor","Partial Match Weight (ω)"].map(u=>`<th style='background-color:#DDD'; >${u}</th>`).join("")}</tr>`,c=d.map(u=>{const b=u[0],f=n[b]?n[b][1]:"#ffffff";return`<tr>${u.map(h=>`<td style='background-color:${f};'>${h}</td>`).join("")}</tr>`}).join("");return r`<table>${m}${c}</table>`}function A(o,t,e){return o.applyComparisonFunctions(t,e)}function x(o,t,e,a){const r=o.map(n=>{const{uid_l:_,uid_r:p,source_dataset_l:s,source_dataset_r:i,...l}=n;return l});return t`${e(r,a)}`}function D(o,t,e,a){const r=o.map(n=>Object.fromEntries(Object.entries(n).filter(([_])=>_.startsWith("γ"))));return t`${e(r,a)}`}function O(o,t,e,a,r,n){const _=i=>o.convertMatchScoreMetrics.roundToSignificantFigures(i,3),s=t.map(i=>Object.fromEntries(Object.entries(i).filter(([l])=>l.startsWith("γ")||l.startsWith("ω")))).map(i=>{const l=[],d=[];Object.keys(i).forEach(c=>{c.startsWith("ω")?(i[c]=_(i[c]),d.push(c)):c.startsWith("γ")&&l.push(c)});const m={};return l.forEach(c=>{m[c]=i[c]}),m.ω_prior=_(e),d.forEach(c=>{m[c]=i[c]}),m});return a`${r(s,n)}`}function B(o,t,e,a,r){const p=o.map(s=>Object.fromEntries(Object.entries(s).filter(([i])=>(i.endsWith("_l")||i.endsWith("_r")||i.endsWith("final_match_weight"))&&!i.includes("uid")&&!i.includes("source_dataset")))).map(s=>(s.match_probability=t.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(s.ω_final_match_weight),s.ω_final_match_weight=s.ω_final_match_weight.toFixed(3),s.match_probability=s.match_probability.toFixed(3),s)).map(s=>{const{match_probability:i,ω_final_match_weight:l,...d}=s;return{match_probability:i,ω_final_match_weight:l,...d}});return e`${a(p,r)}`}function K(o){return o}function U(o,t,e){return o.addModelParametersToComparisonVector(t,e)}function I(o){return{first_name:o.jaroWinklerComparison,surname:o.jaroWinklerComparison,postcode:o.levenshteinComparison,gender:o.exactMatchComparison}}function V(o,t,e){return o.createComparisonRowsLinkOnly([t,e],t.properties)}function H(o,t,e){return o.observe(a=>{const r=n=>a(t.parseTableData(e));return e.addEventListener("input",r,!1),a(t.parseTableData(e)),()=>window.removeEventListener("input",r)})}function G(o,t,e){return o.observe(a=>{const r=n=>a(t.parseTableData(e));return e.addEventListener("input",r,!1),a(t.parseTableData(e)),()=>window.removeEventListener("input",r)})}function z(o,t){return o.transformComparisonLevelsToTable(t)}function q(o,t){return o.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(t.probability_two_random_records_match)}function Z(o){return o.tutorial_partial_match_weights_settings}function J(){return(function(t){const e=Math.max(Math.min(t,10),-10)/10,a=Math.floor(128+127*e);return`rgba(${Math.floor(128-127*e)}, ${a}, 128, 0.35)`})}function Q(){return(function(t){const e=Math.max(Math.min(t,1),0),a=Math.floor(16256*e);return`rgba(${Math.floor(16256*(1-e))}, ${a}, 128, 0.35)`})}function X(o,t){const e=o.module();return e.variable(t()).define(["md"],F),e.variable(t("rlju")).define("rlju",["require"],w),e.variable(t("viewof refresh")).define("viewof refresh",["Inputs"],W),e.variable(t("refresh")).define("refresh",["Generators","viewof refresh"],(a,r)=>a.input(r)),e.variable(t("localUrl")).define("localUrl",T),e.variable(t("colour_mapping")).define("colour_mapping",k),e.variable(t("addRow")).define("addRow",j),e.variable(t("hexToRgba")).define("hexToRgba",P),e.variable(t("input_table_l")).define("input_table_l",["colour_mapping","hexToRgba","html"],E),e.variable(t("input_table_r")).define("input_table_r",["colour_mapping","hexToRgba","html"],R),e.variable(t("createColouredTable")).define("createColouredTable",["hexToRgba","getColorForFinalMatchWeight","getColorForMatchProbability"],S),e.variable(t("comparison_pairs_no_gamma")).define("comparison_pairs_no_gamma",["comparison_pairs","html","createColouredTable","colour_mapping"],N),e.variable(t("lookup_table")).define("lookup_table",["colour_mapping","hexToRgba","table_of_settings","rlju","html"],L),e.variable(t("comparison_vector")).define("comparison_vector",["rlju","comparison_pairs","comparison_functions"],A),e.variable(t("comparison_pairs_with_gamma")).define("comparison_pairs_with_gamma",["comparison_vector","html","createColouredTable","colour_mapping"],x),e.variable(t("comparison_vector_values_only")).define("comparison_vector_values_only",["cv_with_model_params","html","createColouredTable","colour_mapping"],D),e.variable(t("cv_pmw_sum")).define("cv_pmw_sum",["rlju","cv_with_model_params","prior_ω","html","createColouredTable","colour_mapping"],O),e.variable(t("raw_values_with_final_match_prob")).define("raw_values_with_final_match_prob",["cv_with_model_params","rlju","html","createColouredTable","colour_mapping"],B),e.variable(t()).define(["cv_with_model_params"],K),e.variable(t("cv_with_model_params")).define("cv_with_model_params",["rlju","comparison_vector","settings"],U),e.variable(t("comparison_functions")).define("comparison_functions",["rlju"],I),e.variable(t("comparison_pairs")).define("comparison_pairs",["rlju","table_data_l","table_data_r"],V),e.variable(t("table_data_l")).define("table_data_l",["Generators","rlju","input_table_l"],H),e.variable(t("table_data_r")).define("table_data_r",["Generators","rlju","input_table_r"],G),e.variable(t("table_of_settings")).define("table_of_settings",["rlju","settings"],z),e.variable(t("prior_ω")).define("prior_ω",["rlju","settings"],q),e.variable(t("settings")).define("settings",["rlju"],Z),e.variable(t("getColorForFinalMatchWeight")).define("getColorForFinalMatchWeight",J),e.variable(t("getColorForMatchProbability")).define("getColorForMatchProbability",Q),e}export{X as default};
