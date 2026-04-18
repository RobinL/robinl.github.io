function _1(md){return(
md`# Computing the Fellegi Sunter model
`
)}

function _rlju(require){return(
require("@robinl/record_linkage_javascript_utilities@0.0.8")
)}

function _refresh(Inputs){return(
Inputs.button("refresh splink_vis_utils javascript lib")
)}

function _localUrl(){return(
"http://127.0.0.1:8889/bundle.js"
)}

function _colour_mapping()
{
  return {
    domain: [
      "first_name",
      "surname",
      "postcode",
      "gender",
      "prior",
      "final_match",
      "match_probability"
    ],
    range: [
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#aaaaaa",
      "#aaaaaa",
      "#aaaaaa"
    ]
  };
}


function _addRow(){return(
function () {
  const table = document.getElementById("data-table");
  const newRow = table.insertRow(-1);
  newRow.contentEditable = true;

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  // Add what you want in the cells
  cell1.innerHTML = "New First Name";
  cell2.innerHTML = "New Surname";
  cell3.innerHTML = "New Postcode";
  cell4.innerHTML = `<select><option value="male">Male</option><option value="female">Female</option><option value="other">Non-binary</option></select>`;
}
)}

function _hexToRgba(){return(
function hexToRgba(hex, alpha = 1) {
  const [r, g, b] = [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16)
  ];
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
)}

function _input_table_l(colour_mapping,hexToRgba,html)
{
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
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${rgbaMapping["first_name"][1]};">Emma</td>
      <td style="background-color:${rgbaMapping["surname"][1]};">Williams</td>
      <td style="background-color:${rgbaMapping["postcode"][1]};">EC4M 8AD</td>
      <td style="background-color:${rgbaMapping["gender"][1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td style="background-color:${rgbaMapping["first_name"][1]};">Sarah</td>
      <td style="background-color:${rgbaMapping["surname"][1]};">Williams</td>
      <td style="background-color:${rgbaMapping["postcode"][1]};">SW7 2AZ</td>
      <td style="background-color:${rgbaMapping["gender"][1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`;
}


function _input_table_r(colour_mapping,hexToRgba,html)
{
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
    <tr contenteditable>
      <td style="background-color:${rgbaMapping["first_name"][1]};">Emma</td>
      <td style="background-color:${rgbaMapping["surname"][1]};">Williams</td>
      <td style="background-color:${rgbaMapping["postcode"][1]};">EC4M 8AD</td>
      <td style="background-color:${rgbaMapping["gender"][1]};">
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  
</table>
  `;
}


function _createColouredTable(hexToRgba,getColorForFinalMatchWeight,getColorForMatchProbability){return(
function createColouredTable(arrayOfDicts, colourMapping) {
  const rgbaMapping = {};

  colourMapping.domain.forEach((key, i) => {
    rgbaMapping[key] = [
      hexToRgba(colourMapping.range[i], 0.35),
      hexToRgba(colourMapping.range[i], 0.1)
    ];
  });

  // Create header
  const headerKeys = Object.keys(arrayOfDicts[0]);
  const thead = `<tr>${headerKeys
    .map((key) => {
      const colorKey = colourMapping.domain.find((d) => key.includes(d));
      const bgColor = colorKey ? rgbaMapping[colorKey][0] : "";
      return `<th style='background-color:${bgColor};'>${key}</th>`;
    })
    .join("")}</tr>`;

  const rows = arrayOfDicts
    .map((row) => {
      return `<tr>${headerKeys
        .map((key) => {
          const value = row[key];
          let bgColor = "";

          if (key.includes("final_match_weight")) {
            bgColor = getColorForFinalMatchWeight(value);
          } else if (key.includes("match_probability")) {
            bgColor = getColorForMatchProbability(value);
          } else {
            const colorKey = colourMapping.domain.find((d) => key.includes(d));
            bgColor = colorKey ? rgbaMapping[colorKey][1] : "";
          }

          return `<td style='background-color:${bgColor};'>${value}</td>`;
        })
        .join("")}</tr>`;
    })
    .join("");

  return `<table>${thead}${rows}</table>`;
}
)}

function _comparison_pairs_no_gamma(comparison_pairs,html,createColouredTable,colour_mapping)
{
  const comparison_pairs_filtered = comparison_pairs.map((row) => {
    const { uid_l, uid_r, source_dataset_l, source_dataset_r, ...rest } = row;
    return rest;
  });

  return html`${createColouredTable(
    comparison_pairs_filtered,
    colour_mapping
  )}`;
}


function _lookup_table(colour_mapping,hexToRgba,table_of_settings,rlju,html)
{
  const rgbaMapping = {};
  colour_mapping.domain.forEach((key, i) => {
    rgbaMapping[key] = [
      hexToRgba(colour_mapping.range[i], 0.35),
      hexToRgba(colour_mapping.range[i], 0.2)
    ];
  });

  const filteredTable = table_of_settings.filter((row) => row[1] !== "Null");
  const roundToSignificantFigures =
    rlju.convertMatchScoreMetrics.roundToSignificantFigures;
  const calcBayesFactorFromMandU =
    rlju.convertMatchScoreMetrics.calcBayesFactorFromMandU;

  const calcPartialMatchWeightFromBayesFactor =
    rlju.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor;

  const roundTo3SF = (num) => roundToSignificantFigures(num, 3);

  // Adding new columns and rounding
  const modifiedRows = filteredTable.slice(1).map((row) => {
    const [columnName, scenario, comparison_vector_value, m_prob, u_prob] = row;
    const col_scen = columnName + " " + scenario;
    const m_prob_rounded = roundTo3SF(m_prob);
    const u_prob_rounded = roundTo3SF(u_prob);
    const bayesFactor = roundTo3SF(calcBayesFactorFromMandU(m_prob, u_prob));
    const partialMatchWeight = roundTo3SF(
      calcPartialMatchWeightFromBayesFactor(bayesFactor)
    );

    return [
      columnName,
      scenario,
      comparison_vector_value,
      m_prob_rounded,
      u_prob_rounded,
      bayesFactor,
      partialMatchWeight
    ];
  });

  // Table Header
  const thead = `<tr>${[
    "Column",
    "Scenario",
    "Comparison Vector Value (γ)",
    "M Prob",
    "U Prob",
    "Bayes Factor",
    "Partial Match Weight (ω)"
  ]
    .map((key) => `<th style='background-color:#DDD'; >${key}</th>`)
    .join("")}</tr>`;

  // Table Rows
  const rows = modifiedRows
    .map((row) => {
      const columnName = row[0];
      const color = rgbaMapping[columnName]
        ? rgbaMapping[columnName][1]
        : "#ffffff";
      return `<tr>${row
        .map((val) => `<td style='background-color:${color};'>${val}</td>`)
        .join("")}</tr>`;
    })
    .join("");

  return html`<table>${thead}${rows}</table>`;
}


function _comparison_vector(rlju,comparison_pairs,comparison_functions){return(
rlju.applyComparisonFunctions(
  comparison_pairs,
  comparison_functions
)
)}

function _comparison_pairs_with_gamma(comparison_vector,html,createColouredTable,colour_mapping)
{
  const comparison_pairs_filtered = comparison_vector.map((row) => {
    const { uid_l, uid_r, source_dataset_l, source_dataset_r, ...rest } = row;
    return rest;
  });
  return html`${createColouredTable(
    comparison_pairs_filtered,
    colour_mapping
  )}`;
}


function _comparison_vector_values_only(cv_with_model_params,html,createColouredTable,colour_mapping)
{
  const filteredCvWithModelParams = cv_with_model_params.map((row) => {
    return Object.fromEntries(
      Object.entries(row).filter(([key]) => key.startsWith("γ"))
    );
  });

  return html`${createColouredTable(
    filteredCvWithModelParams,
    colour_mapping
  )}`;
}


function _cv_pmw_sum(rlju,cv_with_model_params,prior_ω,html,createColouredTable,colour_mapping)
{
  const round3sf = (val) =>
    rlju.convertMatchScoreMetrics.roundToSignificantFigures(val, 3);

  const filteredCvWithModelParams = cv_with_model_params.map((row) => {
    return Object.fromEntries(
      Object.entries(row).filter(
        ([key]) => key.startsWith("γ") || key.startsWith("ω")
      )
    );
  });

  const filteredCvWithModelParams2 = filteredCvWithModelParams.map((row) => {
    const gammaKeys = [];
    const omegaKeys = [];

    Object.keys(row).forEach((key) => {
      if (key.startsWith("ω")) {
        row[key] = round3sf(row[key]);

        omegaKeys.push(key);
      } else if (key.startsWith("γ")) {
        gammaKeys.push(key);
      }
    });

    const orderedRow = {};

    gammaKeys.forEach((key) => {
      orderedRow[key] = row[key];
    });
    (orderedRow["ω_prior"] = round3sf(prior_ω)),
      omegaKeys.forEach((key) => {
        orderedRow[key] = row[key];
      });

    return orderedRow;
  });

  return html`${createColouredTable(
    filteredCvWithModelParams2,
    colour_mapping
  )}`;
}


function _raw_values_with_final_match_prob(cv_with_model_params,rlju,html,createColouredTable,colour_mapping)
{
  const filteredCvWithModelParams = cv_with_model_params.map((row) => {
    return Object.fromEntries(
      Object.entries(row).filter(
        ([key]) =>
          (key.endsWith("_l") ||
            key.endsWith("_r") ||
            key.endsWith("final_match_weight")) &&
          !key.includes("uid") &&
          !key.includes("source_dataset")
      )
    );
  });

  const round3sf = (val) =>
    rlju.convertMatchScoreMetrics.roundToSignificantFigures(val, 3);

  const filteredCvWithModelParams2 = filteredCvWithModelParams.map((row) => {
    row["match_probability"] =
      rlju.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(
        row["ω_final_match_weight"]
      );

    row["ω_final_match_weight"] = row["ω_final_match_weight"].toFixed(3);
    row["match_probability"] = row["match_probability"].toFixed(3);
    return row;
  });

  const reorderedRows = filteredCvWithModelParams2.map((row) => {
    const { match_probability, ω_final_match_weight, ...otherKeys } = row;
    return {
      match_probability,
      ω_final_match_weight,
      ...otherKeys
    };
  });

  return html`${createColouredTable(reorderedRows, colour_mapping)}`;
}


function _19(cv_with_model_params){return(
cv_with_model_params
)}

function _cv_with_model_params(rlju,comparison_vector,settings){return(
rlju.addModelParametersToComparisonVector(
  comparison_vector,
  settings
)
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


function _comparison_pairs(rlju,table_data_l,table_data_r){return(
rlju.createComparisonRowsLinkOnly(
  [table_data_l, table_data_r],
  table_data_l.properties
)
)}

function _table_data_l(Generators,rlju,input_table_l){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(rlju.parseTableData(input_table_l));
  input_table_l.addEventListener("input", keyinput, false);
  notify(rlju.parseTableData(input_table_l));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _table_data_r(Generators,rlju,input_table_r){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(rlju.parseTableData(input_table_r));
  input_table_r.addEventListener("input", keyinput, false);
  notify(rlju.parseTableData(input_table_r));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _table_of_settings(rlju,settings)
{
  let table_of_settings = rlju.transformComparisonLevelsToTable(settings);
  return table_of_settings;
}


function _prior_ω(rlju,settings){return(
rlju.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(
  settings.probability_two_random_records_match
)
)}

function _settings(rlju){return(
rlju.tutorial_partial_match_weights_settings
)}

function _getColorForFinalMatchWeight(){return(
function getColorForFinalMatchWeight(value) {
  const normalizedValue = Math.max(Math.min(value, 10), -10) / 10;
  const greenComponent = Math.floor(128 + 127 * normalizedValue);
  const redComponent = Math.floor(128 - 127 * normalizedValue);
  return `rgba(${redComponent}, ${greenComponent}, 128, 0.35)`;
}
)}

function _getColorForMatchProbability(){return(
function getColorForMatchProbability(value) {
  const normalizedValue = Math.max(Math.min(value, 1), 0);
  const greenComponent = Math.floor(128 * 127 * normalizedValue);
  const redComponent = Math.floor(128 * 127 * (1 - normalizedValue));
  return `rgba(${redComponent}, ${greenComponent}, 128, 0.35)`;
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("rlju")).define("rlju", ["require"], _rlju);
  main.variable(observer("viewof refresh")).define("viewof refresh", ["Inputs"], _refresh);
  main.variable(observer("refresh")).define("refresh", ["Generators", "viewof refresh"], (G, _) => G.input(_));
  main.variable(observer("localUrl")).define("localUrl", _localUrl);
  main.variable(observer("colour_mapping")).define("colour_mapping", _colour_mapping);
  main.variable(observer("addRow")).define("addRow", _addRow);
  main.variable(observer("hexToRgba")).define("hexToRgba", _hexToRgba);
  main.variable(observer("input_table_l")).define("input_table_l", ["colour_mapping","hexToRgba","html"], _input_table_l);
  main.variable(observer("input_table_r")).define("input_table_r", ["colour_mapping","hexToRgba","html"], _input_table_r);
  main.variable(observer("createColouredTable")).define("createColouredTable", ["hexToRgba","getColorForFinalMatchWeight","getColorForMatchProbability"], _createColouredTable);
  main.variable(observer("comparison_pairs_no_gamma")).define("comparison_pairs_no_gamma", ["comparison_pairs","html","createColouredTable","colour_mapping"], _comparison_pairs_no_gamma);
  main.variable(observer("lookup_table")).define("lookup_table", ["colour_mapping","hexToRgba","table_of_settings","rlju","html"], _lookup_table);
  main.variable(observer("comparison_vector")).define("comparison_vector", ["rlju","comparison_pairs","comparison_functions"], _comparison_vector);
  main.variable(observer("comparison_pairs_with_gamma")).define("comparison_pairs_with_gamma", ["comparison_vector","html","createColouredTable","colour_mapping"], _comparison_pairs_with_gamma);
  main.variable(observer("comparison_vector_values_only")).define("comparison_vector_values_only", ["cv_with_model_params","html","createColouredTable","colour_mapping"], _comparison_vector_values_only);
  main.variable(observer("cv_pmw_sum")).define("cv_pmw_sum", ["rlju","cv_with_model_params","prior_ω","html","createColouredTable","colour_mapping"], _cv_pmw_sum);
  main.variable(observer("raw_values_with_final_match_prob")).define("raw_values_with_final_match_prob", ["cv_with_model_params","rlju","html","createColouredTable","colour_mapping"], _raw_values_with_final_match_prob);
  main.variable(observer()).define(["cv_with_model_params"], _19);
  main.variable(observer("cv_with_model_params")).define("cv_with_model_params", ["rlju","comparison_vector","settings"], _cv_with_model_params);
  main.variable(observer("comparison_functions")).define("comparison_functions", ["rlju"], _comparison_functions);
  main.variable(observer("comparison_pairs")).define("comparison_pairs", ["rlju","table_data_l","table_data_r"], _comparison_pairs);
  main.variable(observer("table_data_l")).define("table_data_l", ["Generators","rlju","input_table_l"], _table_data_l);
  main.variable(observer("table_data_r")).define("table_data_r", ["Generators","rlju","input_table_r"], _table_data_r);
  main.variable(observer("table_of_settings")).define("table_of_settings", ["rlju","settings"], _table_of_settings);
  main.variable(observer("prior_ω")).define("prior_ω", ["rlju","settings"], _prior_ω);
  main.variable(observer("settings")).define("settings", ["rlju"], _settings);
  main.variable(observer("getColorForFinalMatchWeight")).define("getColorForFinalMatchWeight", _getColorForFinalMatchWeight);
  main.variable(observer("getColorForMatchProbability")).define("getColorForMatchProbability", _getColorForMatchProbability);
  return main;
}
