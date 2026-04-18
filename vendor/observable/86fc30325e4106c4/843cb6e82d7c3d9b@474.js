function _1(md){return(
md`# Waterfall chart`
)}

function _2(md){return(
md`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`
)}

function _3(md){return(
md`## Example`
)}

function _splink_settings()
{
  return {
    proportion_of_matches: 1 / 100,
    comparison_columns: [
      {
        num_levels: 3,
        col_name: "first_name",
        u_probabilities: [0.8, 0.2],
        m_probabilities: [0.2, 0.8]
      },
      {
        num_levels: 3,
        col_name: "surname",
        u_probabilities: [0.8, 0.2],
        m_probabilities: [0.2, 0.8]
      },
      {
        col_name: "date_of_birth",
        u_probabilities: [0.99, 0.01],
        m_probabilities: [0.2, 0.8]
      }
    ]
  };
}


function _row()
{
  return {
    first_name_l: "John",
    first_name_r: "John",
    𝛾_first_name: 1,
    surname_l: "Smith",
    surname_r: "Smith",
    𝛾_surname: 1,
    date_of_birth_l: "1992-04-01",
    date_of_birth_l: "1992-04-02",
    𝛾_date_of_birth: 0,
    other: "hi"
  };
}


function _overrides()
{
  return { height: 200 };
}


function _7(get_waterfall_chart,row,splink_settings,overrides){return(
get_waterfall_chart(row, splink_settings, overrides, true)
)}

function _8(get_waterfall_chart,row,splink_settings,overrides){return(
get_waterfall_chart(row, splink_settings, overrides, false)
)}

function _9(md){return(
md`## Code`
)}

function _get_waterfall_chart(get_waterfall_chart_data,embed,get_chart_spec){return(
function (
  row,
  splink_settings,
  chart_overrides,
  simplified,
  term_freqs = {}
) {
  let data = get_waterfall_chart_data(row, splink_settings, term_freqs);

  return embed(get_chart_spec(data, chart_overrides, simplified));
}
)}

function _get_comparison_column_lookup(){return(
function get_comparison_column_lookup(splink_settings) {
  let lookup = {};
  splink_settings.comparison_columns.forEach((d) => {
    let col_name = d["col_name"];
    lookup[col_name] = d;
  });
  return lookup;
}
)}

function _get_waterfall_chart_data(get_waterfall_data_lambda_row,get_waterfall_data_other_rows,get_waterfall_data_final_row){return(
function get_waterfall_chart_data(row, splink_settings, term_freqs = {}) {
  
  let lambda_row = get_waterfall_data_lambda_row(splink_settings);
  let waterfall_data_other_rows = get_waterfall_data_other_rows(
    row,
    splink_settings,
    term_freqs
  );

  let rows_except_final = [lambda_row].concat(waterfall_data_other_rows);
  let final_row = get_waterfall_data_final_row(splink_settings);

  let cumulative_log2_bayes_factor = rows_except_final.reduce(
    (a, b) => a + b["log2_bayes_factor"],
    0
  );

  final_row["bayes_factor"] = 2 ** cumulative_log2_bayes_factor;
  final_row["log2_bayes_factor"] = cumulative_log2_bayes_factor;

  return rows_except_final.concat([final_row]);
}
)}

function _get_waterfall_row_gamma(get_comparison_column_lookup,log2){return(
function get_waterfall_row_gamma(gamma_key, row, splink_settings, term_freqs) {
  let key = gamma_key;
  let gamma_value = row[key];
  let col_name = key.replace("𝛾_", "");
  let cc_lookup = get_comparison_column_lookup(splink_settings);
  let this_cc = cc_lookup[col_name];

  let value_l = row[col_name + "_l"];
  let value_r = row[col_name + "_r"];

  let u_probability, m_probability;
  if (gamma_value == -1) {
    u_probability = 0.5;
    m_probability = 0.5;
  } else {
    u_probability = this_cc["u_probabilities"][gamma_value];
    m_probability = this_cc["m_probabilities"][gamma_value];

    if (value_l == value_r) {
      if (col_name in term_freqs) {
        let tfs = term_freqs[col_name];
        u_probability = tfs[value_l] || u_probability;
      }
    }
  }

  let bayes_factor = m_probability / u_probability;

  return {
    bayes_factor: bayes_factor,
    column_name: col_name,
    gamma_column_name: "𝛾_" + col_name,
    gamma_index: gamma_value,

    level_name: "level_" + gamma_value,

    log2_bayes_factor: log2(bayes_factor),
    m_probability: m_probability,

    num_levels: null,
    u_probability: u_probability,
    value_l: value_l,
    value_r: value_r
  };
}
)}

function _get_waterfall_data_lambda_row(prob_to_bayes_factor,prob_to_log2_bayes_factor){return(
function (splink_settings) {
  let row = {
    bayes_factor: prob_to_bayes_factor(splink_settings.proportion_of_matches),
    column_name: "Prior",
    gamma_column_name: "",
    gamma_index: "",

    level_name: null,

    log2_bayes_factor: prob_to_log2_bayes_factor(
      splink_settings.proportion_of_matches
    ),
    m_probability: null,

    num_levels: null,
    u_probability: null,
    value_l: "",
    value_r: ""
  };

  return row;
}
)}

function _get_waterfall_data_other_rows(get_waterfall_row_gamma){return(
function (row, splink_settings, term_freqs) {
  let keys = Object.keys(row);
  keys = keys.filter((key) => key.includes("𝛾_"));
  return keys.map((gamma_key) =>
    get_waterfall_row_gamma(gamma_key, row, splink_settings, term_freqs)
  );
}
)}

function _get_waterfall_data_final_row(){return(
function (splink_settings) {
  let row = {
    bayes_factor: null,
    column_name: "Final score",
    gamma_column_name: "",
    gamma_index: "",

    level_name: null,

    log2_bayes_factor: null,
    m_probability: null,

    num_levels: null,
    u_probability: null,
    value_l: "",
    value_r: ""
  };

  return row;
}
)}

function _get_chart_spec(base_spec){return(
function (data, overrides, simplified = false) {
  let base_spec_2 = JSON.parse(JSON.stringify(base_spec));
  // let base_spec_2 = Object.assign({}, base_spec);
  base_spec_2.data.values = data;
  let spec = { ...base_spec_2, ...overrides };
  if (simplified) {
    // Remove right hand axis
    spec["layer"][1]["encoding"]["y"]["axis"] = false;

    // Remove bayes factor text overlays
    // spec["layer"][0]["layer"].splice(2, 1);
    spec["layer"][0]["layer"][2]["encoding"]["text"] = {
      type: "nominal",
      field: "up_down_emoji"
    };
    spec["layer"][0]["layer"][2]["encoding"]["opacity"] = {
      condition: {
        value: 0,
        test:
          "datum.column_name == 'Final score' || datum.column_name == 'Prior'"
      }
    };

    // Make left hand side axis probability
    let expr = "format(1 / (1 + pow(2, -1*datum.value)), '.2r')";
    spec["layer"][0]["layer"][1]["encoding"]["y"]["axis"]["labelExpr"] = expr;
    spec["layer"][0]["layer"][1]["encoding"]["y"]["axis"]["title"] =
      "probability";

    // Tooltip

    spec["layer"][0]["layer"][1]["encoding"]["tooltip"] = [
      {
        type: "quantitative",
        field: "prob",
        format: ".3r",
        title: "Cumulative match probability"
      }
    ];
  }

  return spec;
}
)}

function _base_spec()
{
  return {
    config: { view: { continuousHeight: 300, continuousWidth: 400 } },
    title: {
      text: "Bayes factor intuition chart",
      subtitle:
        "How each comparison column contributes to the final match score"
    },
    transform: [
      { filter: "(datum.bayes_factor !== 1.0)" },
      {
        window: [
          { op: "sum", field: "log2_bayes_factor", as: "sum" },
          { op: "lead", field: "column_name", as: "lead" }
        ],
        frame: [null, 0]
      },
      {
        calculate:
          'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',
        as: "sum"
      },
      {
        calculate: "datum.lead === null ? datum.column_name : datum.lead",
        as: "lead"
      },
      {
        calculate:
          'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',
        as: "previous_sum"
      },
      {
        calculate: 'datum.sum > datum.previous_sum ? datum.column_name : ""',
        as: "top_label"
      },
      {
        calculate: 'datum.sum < datum.previous_sum ? datum.column_name : ""',
        as: "bottom_label"
      },
      {
        calculate:
          "datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",
        as: "sum_top"
      },
      {
        calculate:
          "datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",
        as: "sum_bottom"
      },
      { calculate: "(datum.sum + datum.previous_sum) / 2", as: "center" },
      {
        calculate:
          '(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',
        as: "text_log2_bayes_factor"
      },
      { calculate: "datum.sum < datum.previous_sum ? 4 : -4", as: "dy" },
      {
        calculate: 'datum.sum < datum.previous_sum ? "top" : "bottom"',
        as: "baseline"
      },
      { calculate: "1. / (1 + pow(2, -1.*datum.sum))", as: "prob" },
      { calculate: "0*datum.sum", as: "zero" },
      {
        calculate: 'datum.sum > datum.previous_sum ? "↑" : "↓"',
        as: "up_down_emoji"
      }
    ],
    layer: [
      {
        layer: [
          {
            mark: "rule",
            encoding: {
              y: { field: "zero", type: "quantitative" },
              size: { value: 0.5 },
              color: { value: "black" }
            }
          },
          {
            mark: { type: "bar", width: 60 },
            encoding: {
              color: {
                condition: {
                  value: "red",
                  test: "(datum.log2_bayes_factor < 0)"
                },
                value: "green"
              },
              opacity: {
                condition: {
                  value: 1,
                  test:
                    "datum.column_name == 'Prior' || datum.column_name == 'Final score'"
                },
                value: 0.5
              },
              tooltip: [
                {
                  type: "nominal",
                  field: "column_name",
                  title: "Comparison column"
                },
                { type: "nominal", field: "value_l", title: "Value (L)" },
                { type: "nominal", field: "value_r", title: "Value (R)" },
                { type: "nominal", field: "gamma_index", title: "Gamma level" },

                {
                  type: "quantitative",
                  field: "bayes_factor",
                  format: ".3r",
                  title: "Bayes factor"
                },
                {
                  type: "quantitative",
                  field: "log2_bayes_factor",
                  format: ".3r",
                  title: "log2(Bayes factor)"
                },
                {
                  type: "quantitative",
                  field: "prob",
                  format: ".3r",
                  title: "Cumulative match probability"
                }
              ],
              x: {
                type: "nominal",
                axis: {
                  labelExpr:
                    "datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",

                  labelAlign: "center",
                  labelPadding: 10,
                  title: "Column",
                  grid: true,
                  tickBand: "extent"
                },
                field: "column_name",
                sort: null
              },
              y: {
                type: "quantitative",
                axis: {
                  grid: false,
                  orient: "left",
                  title: "log2(Bayes factor)"
                },
                field: "previous_sum"
              },
              y2: { field: "sum" }
            }
          },
          {
            mark: { type: "text", fontWeight: "bold" },
            encoding: {
              color: { value: "white" },
              text: {
                condition: {
                  type: "nominal",
                  field: "log2_bayes_factor",
                  format: ".2f",
                  test: "abs(datum.log2_bayes_factor) > 1"
                },
                value: ""
              },
              x: {
                type: "nominal",
                axis: { labelAngle: 0, title: "Column" },
                field: "column_name",
                sort: null
              },
              y: {
                type: "quantitative",
                axis: { orient: "left" },
                field: "center"
              }
            }
          },
          {
            mark: {
              type: "text",
              baseline: "bottom",
              dy: -5,
              fontWeight: "bold"
            },
            encoding: {
              color: { value: "black" },
              text: {
                condition: {
                  type: "nominal",
                  field: "top_label",
                  test: "abs(datum.log2_bayes_factor) > 1"
                },
                value: ""
              },
              x: {
                type: "nominal",
                axis: { labelAngle: 0, title: "Column" },
                field: "column_name",
                sort: null
              },
              y: { type: "quantitative", field: "sum_top" }
            }
          },
          {
            mark: { type: "text", baseline: "top", dy: 5, fontWeight: "bold" },
            encoding: {
              color: { value: "black" },
              text: {
                condition: {
                  type: "nominal",
                  field: "bottom_label",
                  test: "abs(datum.log2_bayes_factor) > 1"
                },
                value: ""
              },
              x: {
                type: "nominal",
                axis: { labelAngle: 0, title: "Column" },
                field: "column_name",
                sort: null
              },
              y: { type: "quantitative", field: "sum_bottom" }
            }
          }
        ]
      },
      {
        mark: {
          type: "rule",
          color: "black",
          strokeWidth: 2,
          x2Offset: 30,
          xOffset: -30
        },
        encoding: {
          x: {
            type: "nominal",
            axis: { labelAngle: 0, title: "Column" },
            field: "column_name",
            sort: null
          },
          x2: { field: "lead" },
          y: {
            type: "quantitative",
            axis: {
              labelExpr: "format(1 / (1 + pow(2, -1*datum.value)), '.2r')",
              orient: "right",
              title: "Probability"
            },
            field: "sum",
            scale: { zero: false }
          }
        }
      }
    ],
    height: 450,
    resolve: { axis: { y: "independent" } },
    width: { step: 75 },
    $schema: "https://vega.github.io/schema/vega-lite/v4.8.1.json",
    data: { values: null }
  };
}


function _embed(require){return(
require("vega-embed@6")
)}

function _bayes_factor_to_prob(){return(
function bayes_factor_to_prob(b) {
  return b / (b + 1);
}
)}

function _log2(){return(
Math.log2
)}

function _prob_to_bayes_factor(){return(
function prob_to_bayes_factor(p) {
  return p / (1 - p);
}
)}

function _prob_to_log2_bayes_factor(log2,prob_to_bayes_factor){return(
function prob_to_log2_bayes_factor(p) {
  return log2(prob_to_bayes_factor(p));
}
)}

function _log2_bayes_factor_to_prob(bayes_factor_to_prob){return(
function log2_bayes_factor_to_prob(log2_b) {
  return bayes_factor_to_prob(2 ** log2_b);
}
)}

function _first_name_lookup(d3)
{
  return d3
    .csv(
      "https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",
      d3.autoType
    )
    .then((csv_file) => {
      let lookup = {};
      csv_file.forEach((row) => {
        lookup[row.firstname] = row.freq;
      });
      return lookup;
    });
}


function _term_freqs(first_name_lookup)
{
  return {
    first_name: first_name_lookup
  };
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("splink_settings")).define("splink_settings", _splink_settings);
  main.variable(observer("row")).define("row", _row);
  main.variable(observer("overrides")).define("overrides", _overrides);
  main.variable(observer()).define(["get_waterfall_chart","row","splink_settings","overrides"], _7);
  main.variable(observer()).define(["get_waterfall_chart","row","splink_settings","overrides"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("get_waterfall_chart")).define("get_waterfall_chart", ["get_waterfall_chart_data","embed","get_chart_spec"], _get_waterfall_chart);
  main.variable(observer("get_comparison_column_lookup")).define("get_comparison_column_lookup", _get_comparison_column_lookup);
  main.variable(observer("get_waterfall_chart_data")).define("get_waterfall_chart_data", ["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"], _get_waterfall_chart_data);
  main.variable(observer("get_waterfall_row_gamma")).define("get_waterfall_row_gamma", ["get_comparison_column_lookup","log2"], _get_waterfall_row_gamma);
  main.variable(observer("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row", ["prob_to_bayes_factor","prob_to_log2_bayes_factor"], _get_waterfall_data_lambda_row);
  main.variable(observer("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows", ["get_waterfall_row_gamma"], _get_waterfall_data_other_rows);
  main.variable(observer("get_waterfall_data_final_row")).define("get_waterfall_data_final_row", _get_waterfall_data_final_row);
  main.variable(observer("get_chart_spec")).define("get_chart_spec", ["base_spec"], _get_chart_spec);
  main.variable(observer("base_spec")).define("base_spec", _base_spec);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer("bayes_factor_to_prob")).define("bayes_factor_to_prob", _bayes_factor_to_prob);
  main.variable(observer("log2")).define("log2", _log2);
  main.variable(observer("prob_to_bayes_factor")).define("prob_to_bayes_factor", _prob_to_bayes_factor);
  main.variable(observer("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor", ["log2","prob_to_bayes_factor"], _prob_to_log2_bayes_factor);
  main.variable(observer("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob", ["bayes_factor_to_prob"], _log2_bayes_factor_to_prob);
  main.variable(observer("first_name_lookup")).define("first_name_lookup", ["d3"], _first_name_lookup);
  main.variable(observer("term_freqs")).define("term_freqs", ["first_name_lookup"], _term_freqs);
  return main;
}
