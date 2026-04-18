function l(t){return t`# intro prob linkage`}function c(t){return t`
  <table id="data-table">
    <tr>
      <th>first_name</th>
      <th>surname</th>
      <th>postcode</th>
      <th>gender</th>
    </tr>
    <tr contenteditable>
      <td>Robin</td>
      <td>Linacre</td>
      <td>W1A 1AA</td>
      <td>
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td>Robyn</td>
      <td>Linacre</td>
      <td>W1A 1AA</td>
      <td>
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`}function _(t,a,e,i){let r=t.settingsToWaterfall(a,e[0]),n=t.charts.waterfall_chart(r,!1);return i(n)}function s(t,a,e,i){let n=t.settingsToWaterfall(a,e[0]).pop(),o=t.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(n.log2_bayes_factor);return o=(o*100).toFixed(1)+"%",i`<div><mark>The estimated probability these two records match is ${o}.</mark></div>`}function u(t){return t.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(1/1e7)}function d(t){return t.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(6)}function p(t){return t.tutorial_partial_match_weights_settings}function h(t,a){return t.settingsToPartialMatchWeightsData(a)}function f(t,a,e){return t.setBarIsActive(a,e[0])}function m(t,a,e){return t.applyComparisonFunctions(a,e)}function b(t,a){return t.createComparisonRows(a)}function v(t,a,e){return t.observe(i=>{const r=n=>i(a.parseTableData(e));return e.addEventListener("input",r,!1),i(a.parseTableData(e)),()=>window.removeEventListener("input",r)})}function w(t){return{first_name:t.jaroWinklerComparison,surname:t.jaroWinklerComparison,postcode:t.levenshteinComparison,gender:t.exactMatchComparison}}function g(t){return t("vega-embed@6")}function j(){return"http://127.0.0.1:8889/bundle.js"}function y(t,a,e){return t(`${a}?${e}${Date.now()}`)}function M(t){return t("@robinl/record_linkage_javascript_utilities@0.0.7")}function W(t){return t.button("refresh splink_vis_utils javascript lib")}function k(t,a){const e=t.module();return e.variable(a()).define(["md"],l),e.variable(a("input_table")).define("input_table",["html"],c),e.variable(a("waterfall_chart")).define("waterfall_chart",["rlju","tutorial_settings","comparison_vector","embed"],_),e.variable(a("estimated_probability")).define("estimated_probability",["rlju","tutorial_settings","comparison_vector","html"],s),e.variable(a()).define(["rlju"],u),e.variable(a()).define(["rlju"],d),e.variable(a("tutorial_settings")).define("tutorial_settings",["rlju"],p),e.variable(a("partial_match_weight_chart_data_raw")).define("partial_match_weight_chart_data_raw",["rlju","tutorial_settings"],h),e.variable(a("partial_match_weight_chart_data_raw_with_barisactive")).define("partial_match_weight_chart_data_raw_with_barisactive",["rlju","partial_match_weight_chart_data_raw","comparison_vector"],f),e.variable(a("comparison_vector")).define("comparison_vector",["rlju","comparison_pairs","comparison_functions"],m),e.variable(a("comparison_pairs")).define("comparison_pairs",["rlju","tableData"],b),e.variable(a("tableData")).define("tableData",["Generators","rlju","input_table"],v),e.variable(a("comparison_functions")).define("comparison_functions",["rlju"],w),e.variable(a("embed")).define("embed",["require"],g),e.variable(a("localUrl")).define("localUrl",j),e.variable(a("rlju2")).define("rlju2",["require","localUrl","refresh"],y),e.variable(a("rlju")).define("rlju",["require"],M),e.variable(a("viewof refresh")).define("viewof refresh",["Inputs"],W),e.variable(a("refresh")).define("refresh",["Generators","viewof refresh"],(i,r)=>i.input(r)),e}export{k as default};
