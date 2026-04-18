function _1(md){return(
md`# ## partial match weights draft`
)}

function _refresh(Inputs){return(
Inputs.button("refresh splink_vis_utils javascript lib")
)}

function _input_table(html)
{
  const colour_mapping = {
    domain: [
      "Prior",
      "probability_two_random_records_match",
      "first_name",
      "surname",
      "postcode",
      "gender",
      "Final score"
    ],
    range: [
      "#1f77b4",
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#17becf"
    ]
  };

  // Function to convert HEX to RGBA
  function hexToRgba(hex, alpha = 1) {
    const [r, g, b] = [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16)
    ];
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Create a key-value mapping from domain to RGBA
  const rgbaMapping = {};
  colour_mapping.domain.forEach((key, i) => {
    rgbaMapping[key] = [
      hexToRgba(colour_mapping.range[i], 0.35),
      hexToRgba(colour_mapping.range[i], 0.1)
    ];
  });

  return html`
  <table id="data-table">
    <tr>
      <th style="background-color:${rgbaMapping["first_name"][0]};">first_name</th>
      <th style="background-color:${rgbaMapping["surname"][0]};">surname</th>
      <th style="background-color:${rgbaMapping["postcode"][0]};">postcode</th>
      <th style="background-color:${rgbaMapping["gender"][0]};">gender</th>
    </tr>
    <tr contenteditable>
      <td style="background-color:${rgbaMapping["first_name"][1]};">Robin</td>
      <td style="background-color:${rgbaMapping["surname"][1]};">Linacre</td>
      <td style="background-color:${rgbaMapping["postcode"][1]};">W1A 1AA</td>
      <td style="background-color:${rgbaMapping["gender"][1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${rgbaMapping["first_name"][1]};">Robyn</td>
      <td style="background-color:${rgbaMapping["surname"][1]};">Linacre</td>
      <td style="background-color:${rgbaMapping["postcode"][1]};">W1A 1AA</td>
      <td style="background-color:${rgbaMapping["gender"][1]};">
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`;
}


function _partial_match_weights_highligh(embed,rlju,partial_match_weight_chart_data_raw_with_barisactive){return(
embed(
  rlju.charts.partial_match_weights_chart(
    partial_match_weight_chart_data_raw_with_barisactive,
    true
  )
)
)}

function _text_activated_categories(waterfall_data,html)
{
  const colorLookup = {
    Prior: "#1f77b4",
    probability_two_random_records_match: "#1f77b4",
    first_name: "#ff7f0e",
    surname: "#2ca02c",
    postcode: "#d62728",
    gender: "#9467bd",
    "Final score": "#17becf"
  };

  let html_string = waterfall_data
    .filter(
      (item) =>
        item.column_name !== "Prior" && item.column_name !== "Final score"
    )
    .map(
      (item) => `
    <li style="color: ${colorLookup[item.column_name] || "#000"};">
      <span style="display: inline-block; width: 120px; font-family: monospace;">${
        item.column_name
      }</span>:   
      <span style="font-family: monospace;">'${item.value_l}'</span> 
      vs 
      <span style="font-family: monospace;">'${item.value_r}'</span> 
      is categorised as ${item.label_for_charts}
    </li>
  `
    )
    .join("");

  return html`<ul>${html_string}</ul>`;
}


function _waterfall_highlight(rlju,tutorial_settings,comparison_vector,embed)
{
  let data = rlju.settingsToWaterfall(tutorial_settings, comparison_vector[0]);

  let chart_spec = rlju.charts.waterfall_chart(data, true);

  return embed(chart_spec);
}


function _waterfall_as_formula(waterfall_data,tex)
{
  const colorMap = {
    Prior: "#1f77b4",
    probability_two_random_records_match: "#1f77b4",
    first_name: "#ff7f0e",
    surname: "#2ca02c",
    postcode: "#d62728",
    gender: "#9467bd",
    "Final score": "#17becf"
  };

  let coloredFormula = waterfall_data
    .filter((data) => data.column_name !== "Final score")
    .map((data) => {
      let color = colorMap[data.column_name];
      return `\\textcolor{${color}}{\\omega_{\\text{${data.column_name.replace(
        /_/g,
        "\\_"
      )}}}} &+&`;
    })
    .join(" ")
    .slice(0, -3);

  let formula = `
\\begin{array}{rcl rcl rcl rcl}
${coloredFormula} &=& \\textcolor{${colorMap["Final score"]}}{\\text{Final match weight}} \\\\[2ex]
`;

  let finalScore = waterfall_data.find(
    (data) => data.column_name === "Final score"
  ).log2_bayes_factor;

  let finalScoreRounded = finalScore.toFixed(2);

  let interpolation = waterfall_data
    .filter((data) => data.column_name !== "Final score")
    .map((data) => {
      let num = data.log2_bayes_factor.toFixed(2);
      let color = colorMap[data.column_name];
      return num >= 0
        ? `\\textcolor{${color}}{${num}} &+&`
        : `\\textcolor{${color}}{${num}} &+&`;
    })
    .join(" ")
    .slice(0, -3);

  formula += `${interpolation} &=& \\textcolor{${colorMap["Final score"]}}{${finalScoreRounded}} \\\\
\\end{array}
`;

  return tex`${formula}`;
}


function _probability_formula(waterfall_data,tex)
{
  let final_match_weight = waterfall_data.find(
    (data) => data.column_name === "Final score"
  ).log2_bayes_factor;

  let calculated_probability =
    Math.pow(2, final_match_weight) / (1 + Math.pow(2, final_match_weight));

  let latexFormula = `\\large{\\text{probability} = \\frac{2^{\\omega}}{1 + 2^{\\omega}} = \\frac{2^{${final_match_weight.toFixed(
    2
  )}}}{1 + 2^{${final_match_weight.toFixed(
    2
  )}}} = ${calculated_probability.toFixed(3)}}`;

  return tex`${latexFormula}`;
}


function _waterfall_data(rlju,tutorial_settings,comparison_vector){return(
rlju.settingsToWaterfall(tutorial_settings, comparison_vector[0])
)}

function _10(rlju,tutorial_settings,comparison_vector){return(
rlju.settingsToWaterfall(tutorial_settings, comparison_vector[0])
)}

function _tableData(Generators,rlju,input_table){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(rlju.parseTableData(input_table));
  input_table.addEventListener("input", keyinput, false);
  notify(rlju.parseTableData(input_table));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _jaro_winkler(require){return(
require("jaro-winkler")
)}

function _comparison_pairs(rlju,tableData){return(
rlju.createComparisonRows(tableData)
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


function _comparison_vector(rlju,comparison_pairs,comparison_functions){return(
rlju.applyComparisonFunctions(
  comparison_pairs,
  comparison_functions
)
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

function _embed(require){return(
require("vega-embed@6")
)}

function _rlju2(require,localUrl,refresh){return(
require(`${localUrl}?${refresh}${Date.now()}`)
)}

function _rlju(require){return(
require("@robinl/record_linkage_javascript_utilities@0.0.7")
)}

function _localUrl(){return(
"http://127.0.0.1:8889/bundle.js"
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof refresh")).define("viewof refresh", ["Inputs"], _refresh);
  main.variable(observer("refresh")).define("refresh", ["Generators", "viewof refresh"], (G, _) => G.input(_));
  main.variable(observer("input_table")).define("input_table", ["html"], _input_table);
  main.variable(observer("partial_match_weights_highligh")).define("partial_match_weights_highligh", ["embed","rlju","partial_match_weight_chart_data_raw_with_barisactive"], _partial_match_weights_highligh);
  main.variable(observer("text_activated_categories")).define("text_activated_categories", ["waterfall_data","html"], _text_activated_categories);
  main.variable(observer("waterfall_highlight")).define("waterfall_highlight", ["rlju","tutorial_settings","comparison_vector","embed"], _waterfall_highlight);
  main.variable(observer("waterfall_as_formula")).define("waterfall_as_formula", ["waterfall_data","tex"], _waterfall_as_formula);
  main.variable(observer("probability_formula")).define("probability_formula", ["waterfall_data","tex"], _probability_formula);
  main.variable(observer("waterfall_data")).define("waterfall_data", ["rlju","tutorial_settings","comparison_vector"], _waterfall_data);
  main.variable(observer()).define(["rlju","tutorial_settings","comparison_vector"], _10);
  main.variable(observer("tableData")).define("tableData", ["Generators","rlju","input_table"], _tableData);
  main.variable(observer("jaro_winkler")).define("jaro_winkler", ["require"], _jaro_winkler);
  main.variable(observer("comparison_pairs")).define("comparison_pairs", ["rlju","tableData"], _comparison_pairs);
  main.variable(observer("comparison_functions")).define("comparison_functions", ["rlju"], _comparison_functions);
  main.variable(observer("comparison_vector")).define("comparison_vector", ["rlju","comparison_pairs","comparison_functions"], _comparison_vector);
  main.variable(observer("tutorial_settings")).define("tutorial_settings", ["rlju"], _tutorial_settings);
  main.variable(observer("partial_match_weight_chart_data_raw")).define("partial_match_weight_chart_data_raw", ["rlju","tutorial_settings"], _partial_match_weight_chart_data_raw);
  main.variable(observer("partial_match_weight_chart_data_raw_with_barisactive")).define("partial_match_weight_chart_data_raw_with_barisactive", ["rlju","partial_match_weight_chart_data_raw","comparison_vector"], _partial_match_weight_chart_data_raw_with_barisactive);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer("rlju2")).define("rlju2", ["require","localUrl","refresh"], _rlju2);
  main.variable(observer("rlju")).define("rlju", ["require"], _rlju);
  main.variable(observer("localUrl")).define("localUrl", _localUrl);
  return main;
}
