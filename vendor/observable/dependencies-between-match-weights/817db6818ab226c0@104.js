function _1(md){return(
md`# Match Weights Charts`
)}

function _base_spec_m_u(width)
{
  return {
    config: {
      view: { width: width / 3, height: 300 },
      title: { anchor: "middle", offset: 10 },
      header: { title: null }
    },
    hconcat: [
      {
        mark: "bar",
        title: { text: "Non-matches", fontWeight: "normal" },
        encoding: {
          row: {
            type: "nominal",
            field: "column_name",
            sort: { field: "gamma_index" },
            header: { labelAngle: 0, labelAnchor: "middle", labelAlign: "left" }
          },
          x: {
            type: "quantitative",
            field: "u_probability",
            axis: { title: "proportion" }
          },
          y: { type: "nominal", axis: { title: null }, field: "level_name" },
          tooltip: [
            { type: "nominal", field: "column_name" },
            { type: "ordinal", field: "level_name" },
            { type: "quantitative", field: "u_probability", format: ".4f" },
            { type: "quantitative", field: "bayes_factor", format: ".4f" },
            {
              type: "nominal",
              field: "level_proportion",
              title: "Percentage of record comparisons in this level",
              format: ".2%"
            },
            { type: "quantitative", field: "log2_bayes_factor", format: ".4f" }
          ],
          color: { value: "red" }
        },
        resolve: { scale: { y: "independent" } },
        transform: [
          {
            filter:
              "(datum.bayes_factor != 'unnecessary filter2 due to vega lite issue 4680')"
          }
        ],
        // width: width / 2,
        height: 50
      },
      {
        mark: "bar",
        title: { text: "Matches", fontWeight: "normal" },
        encoding: {
          row: {
            type: "nominal",
            field: "column_name",
            sort: { field: "gamma_index" },
            header: { labels: false }
          },
          x: {
            type: "quantitative",
            field: "m_probability",
            axis: { title: "proportion" }
          },
          y: { type: "nominal", axis: { title: null }, field: "level_name" },
          tooltip: [
            { type: "nominal", field: "column_name" },
            { type: "ordinal", field: "level_name" },
            { type: "quantitative", field: "m_probability", format: ".4f" },
            { type: "quantitative", field: "bayes_factor", format: ".4f" },
            {
              type: "nominal",
              field: "level_proportion",
              title: "Percentage of record comparisons in this level",
              format: ".2%"
            },
            { type: "quantitative", field: "log2_bayes_factor", format: ".4f" }
          ],
          color: { value: "green" }
        },
        resolve: { scale: { y: "independent" } },
        transform: [
          {
            filter:
              "(datum.bayes_factor != 'unnecessary filter due to vega lite issue 4680')"
          }
        ],
        // width: width / 2,
        height: 50
      }
    ],
    data: { values: null },
    transform: [],
    title: {
      text: "Probability distributions of non-matches and matches ",
      subtitle: "Estimated proportion of matches λ = "
    },
    $schema: "https://vega.github.io/schema/vega-lite/v4.json"
  };
}


function _base_spec_bayes_factors(width)
{
  return {
    config: {
      view: { width: width / 1.5, height: 300 },
      mark: { tooltip: null },
      title: { anchor: "middle" },
      header: { title: null }
    },
    data: { values: null },
    mark: { type: "bar", clip: true },
    selection: {
      selector076: { type: "interval", bind: "scales", encodings: ["x"] }
    },
    encoding: {
      color: {
        type: "quantitative",
        field: "log2_bayes_factor",
        scale: { range: ["red", "orange", "green"], domain: [-10, 0, 10] }
      },
      row: {
        type: "nominal",
        field: "column_name",
        sort: { field: "gamma_index" },
        header: { labelAngle: 0, labelAnchor: "middle", labelAlign: "left" }
      },
      tooltip: [
        { type: "nominal", field: "column_name" },
        { type: "ordinal", field: "level_name" },
        { type: "quantitative", field: "m_probability", format: ".4f" },
        { type: "quantitative", field: "bayes_factor", format: ".4f" },
        {
          type: "nominal",
          field: "level_proportion",
          title: "Percentage of record comparisons in this level",
          format: ".2%"
        },
        {
          type: "quantitative",
          field: "log2_bayes_factor",
          title: "log2(Bayes factor, K = m/u)",
          format: ".4f"
        }
      ],
      x: {
        type: "quantitative",
        axis: {
          title: "log2(Bayes factor, K = m/u)",
          values: [-10, -5, 0, 5, 10]
        },
        field: "log2_bayes_factor",
        scale: { domain: [-10, 10] }
      },
      y: { type: "nominal", field: "level_name", axis: { title: null } }
    },
    height: 50,
    resolve: { scale: { y: "independent" } },
    title: {
      text: "Influence of comparison vector values on match probability",
      subtitle: "Use mousewheeel to zoom"
    },
    $schema: "https://vega.github.io/schema/vega-lite/v4.json"
  };
}


function _settings_example(default_splink_settings){return(
JSON.parse(default_splink_settings)
)}

function _chart_data_from_splink_settings(get_chart_row){return(
function chart_data_from_splink_settings(splink_settings) {
  let chart_data = [];
  const zip = (a, b) => a.map((k, i) => [k, b[i]]);

  splink_settings.comparison_columns.forEach((cc) => {
    let zipped = zip(cc["m_probabilities"], cc["u_probabilities"]);
    zipped.forEach((m_u_pair, index) => {
      let row = get_chart_row(m_u_pair, cc, index);
      chart_data.push(row);
    });
  });
  return chart_data;
}
)}

function _get_m_u_chart(base_spec_m_u,chart_data_from_splink_settings,embed){return(
function get_m_u_chart(splink_setttings) {
  let base_spec = JSON.parse(JSON.stringify(base_spec_m_u));
  let lam = splink_setttings.proportion_of_matches;
  base_spec.data.values = chart_data_from_splink_settings(splink_setttings);
  base_spec.title.subtitle = `Estimated proportion of matches λ = ${lam}`;
  return embed(base_spec);
}
)}

function _7(get_m_u_chart,settings_example){return(
get_m_u_chart(settings_example)
)}

function _get_bayes_factor_chart(base_spec_bayes_factors,chart_data_from_splink_settings,embed){return(
function get_bayes_factor_chart(splink_setttings) {
  let base_spec = JSON.parse(JSON.stringify(base_spec_bayes_factors));
  let lam = splink_setttings.proportion_of_matches;
  base_spec.data.values = chart_data_from_splink_settings(splink_setttings);
  base_spec.title.subtitle = `Estimated proportion of matches λ = ${lam.toPrecision(
    4
  )}`;
  return embed(base_spec);
}
)}

function _9(get_bayes_factor_chart,settings_example){return(
get_bayes_factor_chart(settings_example)
)}

function _get_chart_row(){return(
function get_chart_row(m_u_pair, comparison_column, index) {
  let row = {};
  let cc = comparison_column;
  row["m_probability"] = m_u_pair[0];
  row["u_probability"] = m_u_pair[1];
  row["bayes_factor"] = m_u_pair[0] / m_u_pair[1];
  row["column_name"] = cc["col_name"];
  row["log2_bayes_factor"] = Math.log2(row["bayes_factor"]);
  row["gamma_index"] = index;
  row["gamma_column_name"] = "gamma_" + cc["col_name"];
  row["level_name"] = "level_" + index;
  row["max_gamma_index"] = cc.m_probabilities.length - 1;
  row["num_levels"] = cc.m_probabilities.length;

  return row;
}
)}

function _default_splink_settings()
{
  return `{
    "proportion_of_matches": 0.001,
    "comparison_columns": [
      {
        "col_name": "fname",
        "u_probabilities": [0.8, 0.2],
        "m_probabilities": [0.2, 0.8]
      },
      {
        "col_name": "sname",
        "u_probabilities": [0.9, 0.1],
        "m_probabilities": [0.2, 0.8]
      },
      {
        "col_name": "dob",
        "u_probabilities": [0.99, 0.01],
        "m_probabilities": [0.2, 0.8]
      },
      {
        "col_name": "town",
        "u_probabilities": [0.7, 0.3],
        "m_probabilities": [0.3, 0.7]
      }
    ]
  
  }`;
}


function _embed(require){return(
require("vega-embed@6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("base_spec_m_u")).define("base_spec_m_u", ["width"], _base_spec_m_u);
  main.variable(observer("base_spec_bayes_factors")).define("base_spec_bayes_factors", ["width"], _base_spec_bayes_factors);
  main.variable(observer("settings_example")).define("settings_example", ["default_splink_settings"], _settings_example);
  main.variable(observer("chart_data_from_splink_settings")).define("chart_data_from_splink_settings", ["get_chart_row"], _chart_data_from_splink_settings);
  main.variable(observer("get_m_u_chart")).define("get_m_u_chart", ["base_spec_m_u","chart_data_from_splink_settings","embed"], _get_m_u_chart);
  main.variable(observer()).define(["get_m_u_chart","settings_example"], _7);
  main.variable(observer("get_bayes_factor_chart")).define("get_bayes_factor_chart", ["base_spec_bayes_factors","chart_data_from_splink_settings","embed"], _get_bayes_factor_chart);
  main.variable(observer()).define(["get_bayes_factor_chart","settings_example"], _9);
  main.variable(observer("get_chart_row")).define("get_chart_row", _get_chart_row);
  main.variable(observer("default_splink_settings")).define("default_splink_settings", _default_splink_settings);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  return main;
}
