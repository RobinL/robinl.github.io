function u(e){return e`# ## partial match weights draft`}function f(e){return e.button("refresh splink_vis_utils javascript lib")}function d(e){const t={domain:["Prior","probability_two_random_records_match","first_name","surname","postcode","gender","Final score"],range:["#1f77b4","#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#17becf"]};function a(r,o=1){const[c,_,i]=[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16)];return`rgba(${c}, ${_}, ${i}, ${o})`}const n={};return t.domain.forEach((r,o)=>{n[r]=[a(t.range[o],.35),a(t.range[o],.1)]}),e`
  <table id="data-table">
    <tr>
      <th style="background-color:${n.first_name[0]};">first_name</th>
      <th style="background-color:${n.surname[0]};">surname</th>
      <th style="background-color:${n.postcode[0]};">postcode</th>
      <th style="background-color:${n.gender[0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${n.first_name[1]};">Robin</td>
      <td style="background-color:${n.surname[1]};">Linacre</td>
      <td style="background-color:${n.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${n.gender[1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${n.first_name[1]};">Robyn</td>
      <td style="background-color:${n.surname[1]};">Linacre</td>
      <td style="background-color:${n.postcode[1]};">W1A 1AA</td>
      <td style="background-color:${n.gender[1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`}function m(e,t,a){return e(t.charts.partial_match_weights_chart(a,!0))}function p(e,t){const a={Prior:"#1f77b4",probability_two_random_records_match:"#1f77b4",first_name:"#ff7f0e",surname:"#2ca02c",postcode:"#d62728",gender:"#9467bd","Final score":"#17becf"};let n=e.filter(r=>r.column_name!=="Prior"&&r.column_name!=="Final score").map(r=>`
    <li style="color: ${a[r.column_name]||"#000"};">
      <span style="display: inline-block; width: 120px; font-family: monospace;">${r.column_name}</span>:   
      <span style="font-family: monospace;">'${r.value_l}'</span> 
      vs 
      <span style="font-family: monospace;">'${r.value_r}'</span> 
      is categorised as ${r.label_for_charts}
    </li>
  `).join("");return t`<ul>${n}</ul>`}function h(e,t,a,n){let r=e.settingsToWaterfall(t,a[0]),o=e.charts.waterfall_chart(r,!0);return n(o)}function g(e,t){const a={Prior:"#1f77b4",probability_two_random_records_match:"#1f77b4",first_name:"#ff7f0e",surname:"#2ca02c",postcode:"#d62728",gender:"#9467bd","Final score":"#17becf"};let r=`
\\begin{array}{rcl rcl rcl rcl}
${e.filter(i=>i.column_name!=="Final score").map(i=>`\\textcolor{${a[i.column_name]}}{\\omega_{\\text{${i.column_name.replace(/_/g,"\\_")}}}} &+&`).join(" ").slice(0,-3)} &=& \\textcolor{${a["Final score"]}}{\\text{Final match weight}} \\\\[2ex]
`,c=e.find(i=>i.column_name==="Final score").log2_bayes_factor.toFixed(2),_=e.filter(i=>i.column_name!=="Final score").map(i=>{let l=i.log2_bayes_factor.toFixed(2),s=a[i.column_name];return l>=0?`\\textcolor{${s}}{${l}} &+&`:`\\textcolor{${s}}{${l}} &+&`}).join(" ").slice(0,-3);return r+=`${_} &=& \\textcolor{${a["Final score"]}}{${c}} \\\\
\\end{array}
`,t`${r}`}function b(e,t){let a=e.find(o=>o.column_name==="Final score").log2_bayes_factor,n=Math.pow(2,a)/(1+Math.pow(2,a)),r=`\\large{\\text{probability} = \\frac{2^{\\omega}}{1 + 2^{\\omega}} = \\frac{2^{${a.toFixed(2)}}}{1 + 2^{${a.toFixed(2)}}} = ${n.toFixed(3)}}`;return t`${r}`}function w(e,t,a){return e.settingsToWaterfall(t,a[0])}function $(e,t,a){return e.settingsToWaterfall(t,a[0])}function v(e,t,a){return e.observe(n=>{const r=o=>n(t.parseTableData(a));return a.addEventListener("input",r,!1),n(t.parseTableData(a)),()=>window.removeEventListener("input",r)})}function y(e){return e("jaro-winkler")}function j(e,t){return e.createComparisonRows(t)}function k(e){return{first_name:e.jaroWinklerComparison,surname:e.jaroWinklerComparison,postcode:e.levenshteinComparison,gender:e.exactMatchComparison}}function x(e,t,a){return e.applyComparisonFunctions(t,a)}function F(e){return e.tutorial_partial_match_weights_settings}function D(e,t){return e.settingsToPartialMatchWeightsData(t)}function M(e,t,a){return e.setBarIsActive(t,a[0])}function W(e){return e("vega-embed@6")}function A(e,t,a){return e(`${t}?${a}${Date.now()}`)}function T(e){return e("@robinl/record_linkage_javascript_utilities@0.0.7")}function C(){return"http://127.0.0.1:8889/bundle.js"}function I(e,t){const a=e.module();return a.variable(t()).define(["md"],u),a.variable(t("viewof refresh")).define("viewof refresh",["Inputs"],f),a.variable(t("refresh")).define("refresh",["Generators","viewof refresh"],(n,r)=>n.input(r)),a.variable(t("input_table")).define("input_table",["html"],d),a.variable(t("partial_match_weights_highligh")).define("partial_match_weights_highligh",["embed","rlju","partial_match_weight_chart_data_raw_with_barisactive"],m),a.variable(t("text_activated_categories")).define("text_activated_categories",["waterfall_data","html"],p),a.variable(t("waterfall_highlight")).define("waterfall_highlight",["rlju","tutorial_settings","comparison_vector","embed"],h),a.variable(t("waterfall_as_formula")).define("waterfall_as_formula",["waterfall_data","tex"],g),a.variable(t("probability_formula")).define("probability_formula",["waterfall_data","tex"],b),a.variable(t("waterfall_data")).define("waterfall_data",["rlju","tutorial_settings","comparison_vector"],w),a.variable(t()).define(["rlju","tutorial_settings","comparison_vector"],$),a.variable(t("tableData")).define("tableData",["Generators","rlju","input_table"],v),a.variable(t("jaro_winkler")).define("jaro_winkler",["require"],y),a.variable(t("comparison_pairs")).define("comparison_pairs",["rlju","tableData"],j),a.variable(t("comparison_functions")).define("comparison_functions",["rlju"],k),a.variable(t("comparison_vector")).define("comparison_vector",["rlju","comparison_pairs","comparison_functions"],x),a.variable(t("tutorial_settings")).define("tutorial_settings",["rlju"],F),a.variable(t("partial_match_weight_chart_data_raw")).define("partial_match_weight_chart_data_raw",["rlju","tutorial_settings"],D),a.variable(t("partial_match_weight_chart_data_raw_with_barisactive")).define("partial_match_weight_chart_data_raw_with_barisactive",["rlju","partial_match_weight_chart_data_raw","comparison_vector"],M),a.variable(t("embed")).define("embed",["require"],W),a.variable(t("rlju2")).define("rlju2",["require","localUrl","refresh"],A),a.variable(t("rlju")).define("rlju",["require"],T),a.variable(t("localUrl")).define("localUrl",C),a}export{I as default};
