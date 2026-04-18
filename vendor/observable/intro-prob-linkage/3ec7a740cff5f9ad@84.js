function _1(md){return(
md`# intro prob linkage`
)}

function _input_table(html)
{
  return html`
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
  </table>`;
}


function _waterfall_chart(rlju,tutorial_settings,comparison_vector,embed)
{
  let data = rlju.settingsToWaterfall(tutorial_settings, comparison_vector[0]);

  let chart_spec = rlju.charts.waterfall_chart(data, false);

  return embed(chart_spec);
}


function _estimated_probability(rlju,tutorial_settings,comparison_vector,html)
{
  let data = rlju.settingsToWaterfall(tutorial_settings, comparison_vector[0]);
  let final_score = data.pop();

  let match_probability =
    rlju.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(
      final_score.log2_bayes_factor
    );
  match_probability = (match_probability * 100).toFixed(1) + "%";

  return html`<div><mark>The estimated probability these two records match is ${match_probability}.</mark></div>`;
}


function _5(rlju){return(
rlju.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(1 / 10e6)
)}

function _6(rlju){return(
rlju.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(6)
)}

function _tutorial_settings(rlju){return(
rlju.tutorial_partial_match_weights_settings
)}

function _partial_match_weight_chart_data_raw(rlju,tutorial_settings){return(
rlju.settingsToPartialMatchWeightsData(
  tutorial_settings
)
)}

function _partial_match_weight_chart_data_raw_with_barisactive(rlju,partial_match_weight_chart_data_raw,comparison_vector){return(
rlju.setBarIsActive(
  partial_match_weight_chart_data_raw,
  comparison_vector[0]
)
)}

function _comparison_vector(rlju,comparison_pairs,comparison_functions){return(
rlju.applyComparisonFunctions(
  comparison_pairs,
  comparison_functions
)
)}

function _comparison_pairs(rlju,tableData){return(
rlju.createComparisonRows(tableData)
)}

function _tableData(Generators,rlju,input_table){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(rlju.parseTableData(input_table));
  input_table.addEventListener("input", keyinput, false);
  notify(rlju.parseTableData(input_table));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _comparison_functions(rlju)
{
  return {
    first_name: rlju.jaroWinklerComparison,
    surname: rlju.jaroWinklerComparison,
    postcode: rlju.levenshteinComparison,
    gender: rlju.exactMatchComparison
  };
}


function _embed(require){return(
require("vega-embed@6")
)}

function _localUrl(){return(
"http://127.0.0.1:8889/bundle.js"
)}

function _rlju2(require,localUrl,refresh){return(
require(`${localUrl}?${refresh}${Date.now()}`)
)}

function _rlju(require){return(
require("@robinl/record_linkage_javascript_utilities@0.0.7")
)}

function _refresh(Inputs){return(
Inputs.button("refresh splink_vis_utils javascript lib")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("input_table")).define("input_table", ["html"], _input_table);
  main.variable(observer("waterfall_chart")).define("waterfall_chart", ["rlju","tutorial_settings","comparison_vector","embed"], _waterfall_chart);
  main.variable(observer("estimated_probability")).define("estimated_probability", ["rlju","tutorial_settings","comparison_vector","html"], _estimated_probability);
  main.variable(observer()).define(["rlju"], _5);
  main.variable(observer()).define(["rlju"], _6);
  main.variable(observer("tutorial_settings")).define("tutorial_settings", ["rlju"], _tutorial_settings);
  main.variable(observer("partial_match_weight_chart_data_raw")).define("partial_match_weight_chart_data_raw", ["rlju","tutorial_settings"], _partial_match_weight_chart_data_raw);
  main.variable(observer("partial_match_weight_chart_data_raw_with_barisactive")).define("partial_match_weight_chart_data_raw_with_barisactive", ["rlju","partial_match_weight_chart_data_raw","comparison_vector"], _partial_match_weight_chart_data_raw_with_barisactive);
  main.variable(observer("comparison_vector")).define("comparison_vector", ["rlju","comparison_pairs","comparison_functions"], _comparison_vector);
  main.variable(observer("comparison_pairs")).define("comparison_pairs", ["rlju","tableData"], _comparison_pairs);
  main.variable(observer("tableData")).define("tableData", ["Generators","rlju","input_table"], _tableData);
  main.variable(observer("comparison_functions")).define("comparison_functions", ["rlju"], _comparison_functions);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer("localUrl")).define("localUrl", _localUrl);
  main.variable(observer("rlju2")).define("rlju2", ["require","localUrl","refresh"], _rlju2);
  main.variable(observer("rlju")).define("rlju", ["require"], _rlju);
  main.variable(observer("viewof refresh")).define("viewof refresh", ["Inputs"], _refresh);
  main.variable(observer("refresh")).define("refresh", ["Generators", "viewof refresh"], (G, _) => G.input(_));
  return main;
}
