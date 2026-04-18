function _1(md){return(
md`# Interactive Bayes Factor, Probability and Match Weight`
)}

function _spec(spec_json,chart_data,width)
{
  let spec_parsed = JSON.parse(spec_json);
  spec_parsed["datasets"]["mydata"] = chart_data;
  spec_parsed.vconcat.forEach((obj) => {
    if (obj.hasOwnProperty("width")) {
      obj.width = width - 190;
    }
  });
  return spec_parsed;
}


function _chart(embed,spec){return(
embed(spec)
)}

function _mw_1(roundToSignificantFigures,selected_val,html,tex)
{
  const rounded_partial_match_weight = roundToSignificantFigures(
    selected_val,
    4
  );
  return html`${tex`\text{Partial Match Weight} = \omega = ${rounded_partial_match_weight}`}`;
}


function _bf_1(roundToSignificantFigures,calcBayesFactorFromPartialMatchWeight,selected_val,calcProbabilityFromPartialMatchWeight,html,tex)
{
  const bayes_factor = roundToSignificantFigures(
    calcBayesFactorFromPartialMatchWeight(selected_val),
    4
  );
  const p_val = calcProbabilityFromPartialMatchWeight(selected_val).toFixed(4);
  const rounded_partial_match_weight = roundToSignificantFigures(
    selected_val,
    4
  );

  return html`${tex`\text{Bayes Factor} = K = 2^{\omega} = 2^{{${rounded_partial_match_weight}}} = ${bayes_factor}`}`;
}


function _p_1(calcProbabilityFromPartialMatchWeight,selected_val,roundToSignificantFigures,html,tex)
{
  const p_val = calcProbabilityFromPartialMatchWeight(selected_val).toFixed(4);

  const partial_match_weight = roundToSignificantFigures(selected_val, 4);

  return html`${tex`\text{Probability} = p = \frac{K}{1 + K} = \frac{2^{{${partial_match_weight}}}}{1 + 2^{{${partial_match_weight}}}} = ${p_val}`}`;
}


function _8(html,tex){return(
html`${tex`\text{Bayes Factor} = K = \frac{p}{1-p}`}`
)}

function _p_2(calcProbabilityFromPartialMatchWeight,selected_val,html,tex)
{
  const p_val = calcProbabilityFromPartialMatchWeight(selected_val);
  const p_val_rounded = p_val.toFixed(4);
  return html`${tex`\text{Probability} = p = ${p_val_rounded}`}`;
}


function _bf_2(calcProbabilityFromPartialMatchWeight,selected_val,roundToSignificantFigures,calcBayesFactorFromProbability,html,tex)
{
  const p_val = calcProbabilityFromPartialMatchWeight(selected_val);
  const p_val_rounded = p_val.toFixed(4);
  const bayes_factor = roundToSignificantFigures(
    calcBayesFactorFromProbability(p_val),
    4
  );

  return html`${tex`\text{Bayes Factor} = K = \frac{p}{1-p} = \frac{${p_val_rounded}}{1 - ${p_val_rounded}} = ${bayes_factor}`}`;
}


function _mw_2(calcBayesFactorFromPartialMatchWeight,selected_val,roundToSignificantFigures,calcPartialMatchWeightFromBayesFactor,html,tex)
{
  const bayes_factor = calcBayesFactorFromPartialMatchWeight(selected_val);
  const bayes_factor_rounded = roundToSignificantFigures(bayes_factor, 4);
  const rounded_partial_match_weight = roundToSignificantFigures(
    calcPartialMatchWeightFromBayesFactor(bayes_factor),
    4
  );

  return html`${tex`\text{Partial Match Weight} = \omega = \log_{2} K = \log_{2} {${bayes_factor_rounded}} = ${rounded_partial_match_weight}`}`;
}


function _prior_probabability(Inputs){return(
Inputs.range([0, 1], {
  label: "Prior probability"
  
})
)}

function _max_match_weight(Inputs){return(
Inputs.range([5, 40], {
  label: "Max match weight",
  step: 5,
  value: 10 // Default value
})
)}

function _15(calcBayesFactorFromProbability,prior_probabability,calcPartialMatchWeightFromBayesFactor,selected_val,calcProbabilityFromPartialMatchWeight,roundToSignificantFigures,html,tex)
{
  const prior_bayes_factor =
    calcBayesFactorFromProbability(prior_probabability);

  const prior_partial_match_weight =
    calcPartialMatchWeightFromBayesFactor(prior_bayes_factor);

  const posterior_match_weight = prior_partial_match_weight + selected_val;

  const posterior_probability = calcProbabilityFromPartialMatchWeight(
    posterior_match_weight
  );

  // I want the following formula to include not just the interpolated values but also the maths that maps from prior probability and partial match weight to posterior probability

  let a = `With a prior probability of ${prior_probabability.toFixed(
    4
  )}, applying a partial match weight of ${roundToSignificantFigures(
    selected_val,
    4
  )} would result in: `;
  return html`${a} ${tex`
  \begin{aligned}
  \text{Prior as probability} &= p_{\text{prior}} &= ${roundToSignificantFigures(
    prior_probabability,
    4
  )}\\
  \text{Prior as Bayes Factor} &= K = \frac{p_{\text{prior}}}{1 - p_{\text{prior}}} &= ${roundToSignificantFigures(
    prior_bayes_factor,
    4
  )} \\
  \text{Prior as Match Weight} &= \omega_{\text{prior}} = \log_{2}(K) &= ${roundToSignificantFigures(
    prior_partial_match_weight,
    4
  )} \\
  \text{Selected Partial Match Weight} &= v &= ${roundToSignificantFigures(
    selected_val,
    4
  )} \\
  \text{Posterior Match Weight} &= \omega_{\text{posterior}} = \omega_{\text{prior}} + v &= ${roundToSignificantFigures(
    posterior_match_weight,
    4
  )} \\
  \text{Posterior Probability} &= p_{\text{posterior}} = \frac{2^{\omega_{\text{posterior}}}}{1 + 2^{\omega_{\text{posterior}}}} &= ${roundToSignificantFigures(
    posterior_probability,
    4
  )}
  \end{aligned}
`}`;
}


function _calcBayesFactorFromPartialMatchWeight(){return(
function calcBayesFactorFromPartialMatchWeight(selected_val) {
  return Math.pow(2, selected_val);
}
)}

function _calcProbabilityFromPartialMatchWeight(){return(
function calcProbabilityFromPartialMatchWeight(selected_val) {
  return Math.pow(2, selected_val) / (1 + Math.pow(2, selected_val));
}
)}

function _computeProbabilityFromPartialMatchWeight(){return(
function computeProbabilityFromPartialMatchWeight(logOdds) {
  return Math.pow(2, logOdds) / (1 + Math.pow(2, logOdds));
}
)}

function _calcPartialMatchWeightFromBayesFactor(){return(
function calcPartialMatchWeightFromBayesFactor(K) {
  return Math.log2(K);
}
)}

function _calcBayesFactorFromProbability(){return(
function calcBayesFactorFromProbability(p) {
  return p / (1 - p);
}
)}

function _roundToSignificantFigures(){return(
function roundToSignificantFigures(num, sigFigs) {
  if (num === 0) return 0;

  // Calculate the order of magnitude of the number
  const magnitude = Math.floor(Math.log10(Math.abs(num)));

  // Calculate the scaling factor
  const scale = Math.pow(10, sigFigs - magnitude - 1);

  // Round the number and undo the scaling
  return Math.round(num * scale) / scale;
}
)}

function _embed(require){return(
require("vega-embed@6")
)}

function _observed_param(observe_chart_data,chart){return(
observe_chart_data(chart, "param_7")
)}

function _selected_val(observed_param){return(
observed_param["mw"][0]
)}

function _observe_chart_data(Generators){return(
function observe_chart_data(chart, signal_name) {
  return Generators.observe(function (notify) {
    const signaled = (name, value) => notify(value);
    chart.addSignalListener(signal_name, signaled);

    notify(chart.signal(signal_name));

    return () => chart.removeSignalListener(signal_name, signaled);
  });
}
)}

function _probToBayesFactor(){return(
function probToBayesFactor(prob) {
    return prob !== 1 ? prob / (1 - prob) : Infinity;
}
)}

function _probToMatchWeight(probToBayesFactor){return(
function probToMatchWeight(prob) {
  const bayesFactor = probToBayesFactor(prob);
  const matchWeight = Math.log2(bayesFactor);

  // Round to avoid floating point errors
  const precision = 8; // You can adjust the precision as needed
  return (
    Math.round(matchWeight * Math.pow(10, precision)) / Math.pow(10, precision)
  );
}
)}

function _matchWeightToBayesFactor(){return(
function matchWeightToBayesFactor(weight) {
  return Math.pow(2, weight);
}
)}

function _bayesFactorToProb(){return(
function bayesFactorToProb(bf) {
  return bf / (1 + bf);
}
)}

function _formatBf(){return(
function formatBf(bf, mw) {
  if (bf >= 1000) {
    return bf.toLocaleString(undefined, { maximumFractionDigits: 0 });
  } else if (bf >= 100) {
    return bf.toLocaleString(undefined, { maximumFractionDigits: 1 });
  } else if (bf >= 10) {
    return bf.toLocaleString(undefined, { maximumFractionDigits: 2 });
  } else if (bf >= 1) {
    return bf
      .toLocaleString(undefined, { maximumFractionDigits: 3 })
      .replace(/\.?0+$/, "");
  } else {
    // Apply similar formatting logic as prob_fmt for bf < 1
    const absMw = Math.abs(mw);
    const additionalDigits = Math.floor(absMw / 5);
    const minFractionDigits = 4 + additionalDigits;

    return bf
      .toLocaleString(undefined, { minimumFractionDigits: minFractionDigits })
      .replace(/\.?0+$/, "");
  }
}
)}

function _chart_data(max_match_weight,bayesFactorToProb,matchWeightToBayesFactor,probToBayesFactor,probToMatchWeight,formatBf)
{
  const start = -max_match_weight;
  const end = -1 * start;
  const subdivisions = 5;

  // Adjust the length to be inclusive of both start and end
  let data = Array.from({ length: (end - start) * subdivisions + 1 }, (_, i) =>
    bayesFactorToProb(
      matchWeightToBayesFactor((i + start * subdivisions) / subdivisions)
    )
  );

  data = data.map((x) => ({
    prob: x,
    bf: probToBayesFactor(x),
    mw: probToMatchWeight(x)
  }));

  data = data.map((d) => {
    const absMw = Math.abs(d.mw);
    const additionalDigits = Math.floor(absMw / 5);
    const minFractionDigits = 4 + additionalDigits;

    const probFmt = d.prob
      .toLocaleString(undefined, { minimumFractionDigits: minFractionDigits })
      .replace(/\.?0+$/, "");

    const bfFmt = formatBf(d.bf, d.mw);
    const mwFmt = d.mw.toLocaleString(undefined, { maximumFractionDigits: 1 });

    let intFmt;
    if (d.prob > 0.5) {
      const bfValue = d.bf;
      if (bfValue > 100) {
        intFmt = `${bfValue.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })}x more likely`;
      } else {
        intFmt = `${bfValue
          .toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })
          .replace(/\.?0+$/, "")}x more likely`;
      }
    } else if (d.prob < 0.5) {
      const bfValue = 1 / d.bf;
      if (bfValue > 100) {
        intFmt = `${bfValue.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })}x less likely`;
      } else {
        intFmt = `${bfValue
          .toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })
          .replace(/\.?0+$/, "")}x less likely`;
      }
    } else {
      intFmt = "no more or less likely";
    }

    return {
      ...d,
      prob_fmt: probFmt,
      bf_fmt: bfFmt,
      mw_fmt: mwFmt,
      int_fmt: intFmt
    };
  });

  return data; // Return the processed data
}


function _texd(tex){return(
tex.options({
  displayMode: true,
  fleqn: true
})
)}

function _spec_json(){return(
`
{
  "config": {
    "view": {
      "continuousWidth": 300,
      "continuousHeight": 300
    },
    "title": {
      "anchor": "middle"
    }
  },
  "vconcat": [
    {
      "layer": [
        {
          "mark": {
            "type": "bar",
            "opacity": 0.5
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "interpolate": "lab",
                "range": [
                  "red",
                  "red",
                  "#bbbbbb",
                  "green",
                  "green"
                ]
              },
              "title": "Match weight",
              "type": "quantitative"
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "rule",
            "color": "#FFAAAA"
          },
          "encoding": {
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "text",
            "baseline": "middle",
            "fontSize": 16,
            "fontWeight": "bold"
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "range": [
                  "#8B0000",
                  "#8B0000",
                  "#444444",
                  "#006400",
                  "#006400"
                ]
              },
              "type": "quantitative"
            },
            "opacity": {
              "condition": {
                "param": "param_7",
                "value": 1,
                "empty": false
              },
              "value": 0
            },
            "text": {
              "field": "mw_fmt",
              "type": "quantitative"
            },
            "x": {
              "axis": {
                "labelExpr": "datum.value",
                "title": "Partial Match Weight"
              },
              "field": "mw",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {
            "type": "point"
          },
          "encoding": {
            "opacity": {
              "value": 0
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "name": "view_58"
        }
      ],
      "height": 30,
      "resolve": {
        "scale": {
          "color": "independent"
        }
      },
      "width": 800
    },
    {
      "layer": [
        {
          "mark": {
            "type": "bar",
            "opacity": 0.5
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "interpolate": "lab",
                "range": [
                  "red",
                  "red",
                  "#bbbbbb",
                  "green",
                  "green"
                ]
              },
              "title": "Match weight",
              "type": "quantitative"
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "rule",
            "color": "#FFAAAA"
          },
          "encoding": {
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "text",
            "baseline": "middle",
            "fontSize": 16,
            "fontWeight": "bold"
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "range": [
                  "#8B0000",
                  "#8B0000",
                  "#444444",
                  "#006400",
                  "#006400"
                ]
              },
              "type": "quantitative"
            },
            "opacity": {
              "condition": {
                "param": "param_7",
                "value": 1,
                "empty": false
              },
              "value": 0
            },
            "text": {
              "field": "bf_fmt",
              "type": "nominal"
            },
            "x": {
              "axis": {
                "labelExpr": "if(pow(2, datum.value) >=1, pow(2, datum.value), '1/' + (1/pow(2, datum.value)))",
                "title": "Bayes Factor (odds)"
              },
              "field": "mw",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {
            "type": "point"
          },
          "encoding": {
            "opacity": {
              "value": 0
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "name": "view_59"
        }
      ],
      "height": 30,
      "resolve": {
        "scale": {
          "color": "independent"
        }
      },
      "width": 800
    },
    {
      "layer": [
        {
          "mark": {
            "type": "bar",
            "opacity": 0.5
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "interpolate": "lab",
                "range": [
                  "red",
                  "red",
                  "#bbbbbb",
                  "green",
                  "green"
                ]
              },
              "title": "Match weight",
              "type": "quantitative"
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "rule",
            "color": "#FFAAAA"
          },
          "encoding": {
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "text",
            "baseline": "middle",
            "fontSize": 16,
            "fontWeight": "bold"
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "range": [
                  "#8B0000",
                  "#8B0000",
                  "#444444",
                  "#006400",
                  "#006400"
                ]
              },
              "type": "quantitative"
            },
            "opacity": {
              "condition": {
                "param": "param_7",
                "value": 1,
                "empty": false
              },
              "value": 0
            },
            "text": {
              "field": "prob_fmt",
              "type": "nominal"
            },
            "x": {
              "axis": {
                "labelExpr": "format(pow(2, datum.value)/(1+ pow(2, datum.value)), ',.3f')",
                "title": "Probability (assuming a prior of 50%)"
              },
              "field": "mw",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {
            "type": "point"
          },
          "encoding": {
            "opacity": {
              "value": 0
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "name": "view_57"
        }
      ],
      "height": 30,
      "resolve": {
        "scale": {
          "color": "independent"
        }
      },
      "width": 800
    },
    {
      "layer": [
        {
          "mark": {
            "type": "bar",
            "opacity": 0.5
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "interpolate": "lab",
                "range": [
                  "red",
                  "red",
                  "#bbbbbb",
                  "green",
                  "green"
                ]
              },
              "title": "Match weight",
              "type": "quantitative"
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "rule",
            "color": "#FFAAAA"
          },
          "encoding": {
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "transform": [
            {
              "filter": {
                "param": "param_7",
                "empty": false
              }
            }
          ]
        },
        {
          "mark": {
            "type": "text",
            "baseline": "middle",
            "fontSize": 16,
            "fontWeight": "bold"
          },
          "encoding": {
            "color": {
              "field": "mw",
              "legend": null,
              "scale": {
                "domain": [
                  -100,
                  -10,
                  0,
                  10,
                  100
                ],
                "range": [
                  "#8B0000",
                  "#8B0000",
                  "#444444",
                  "#006400",
                  "#006400"
                ]
              },
              "type": "quantitative"
            },
            "opacity": {
              "condition": {
                "param": "param_7",
                "value": 1,
                "empty": false
              },
              "value": 0
            },
            "text": {
              "field": "int_fmt",
              "type": "nominal"
            },
            "x": {
              "axis": {
                "labelExpr": "if(pow(2, datum.value) >=1, pow(2, datum.value), (1/pow(2, datum.value)))",
                "title": "\u2b05\ufe0f  times less likely                    Intuitive interpretation                    times more likely  \u27a1\ufe0f"
              },
              "field": "mw",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {
            "type": "point"
          },
          "encoding": {
            "opacity": {
              "value": 0
            },
            "x": {
              "field": "mw",
              "type": "quantitative"
            }
          },
          "name": "view_60"
        }
      ],
      "height": 30,
      "resolve": {
        "scale": {
          "color": "independent"
        }
      },
      "width": 800
    }
  ],
  "data": {
    "name": "mydata"
  },
  "params": [
    {
      "name": "param_7",
      "select": {
        "type": "point",
        "fields": [
          "mw"
        ],
        "nearest": true,
        "on": "mouseover"
      },
      "value": [
        {
          "mw": 0
        }
      ],
      "views": [
        "view_58",
        "view_59",
        "view_57",
        "view_60"
      ]
    }
  ],
  "title": "Correspondence between probability, match weight, and Bayes factor",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
  "datasets": {
    "mydata": []
  }
}`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("spec")).define("spec", ["spec_json","chart_data","width"], _spec);
  main.variable(observer("viewof chart")).define("viewof chart", ["embed","spec"], _chart);
  main.variable(observer("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer("mw_1")).define("mw_1", ["roundToSignificantFigures","selected_val","html","tex"], _mw_1);
  main.variable(observer("bf_1")).define("bf_1", ["roundToSignificantFigures","calcBayesFactorFromPartialMatchWeight","selected_val","calcProbabilityFromPartialMatchWeight","html","tex"], _bf_1);
  main.variable(observer("p_1")).define("p_1", ["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","html","tex"], _p_1);
  main.variable(observer()).define(["html","tex"], _8);
  main.variable(observer("p_2")).define("p_2", ["calcProbabilityFromPartialMatchWeight","selected_val","html","tex"], _p_2);
  main.variable(observer("bf_2")).define("bf_2", ["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcBayesFactorFromProbability","html","tex"], _bf_2);
  main.variable(observer("mw_2")).define("mw_2", ["calcBayesFactorFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcPartialMatchWeightFromBayesFactor","html","tex"], _mw_2);
  main.variable(observer("viewof prior_probabability")).define("viewof prior_probabability", ["Inputs"], _prior_probabability);
  main.variable(observer("prior_probabability")).define("prior_probabability", ["Generators", "viewof prior_probabability"], (G, _) => G.input(_));
  main.variable(observer("viewof max_match_weight")).define("viewof max_match_weight", ["Inputs"], _max_match_weight);
  main.variable(observer("max_match_weight")).define("max_match_weight", ["Generators", "viewof max_match_weight"], (G, _) => G.input(_));
  main.variable(observer()).define(["calcBayesFactorFromProbability","prior_probabability","calcPartialMatchWeightFromBayesFactor","selected_val","calcProbabilityFromPartialMatchWeight","roundToSignificantFigures","html","tex"], _15);
  main.variable(observer("calcBayesFactorFromPartialMatchWeight")).define("calcBayesFactorFromPartialMatchWeight", _calcBayesFactorFromPartialMatchWeight);
  main.variable(observer("calcProbabilityFromPartialMatchWeight")).define("calcProbabilityFromPartialMatchWeight", _calcProbabilityFromPartialMatchWeight);
  main.variable(observer("computeProbabilityFromPartialMatchWeight")).define("computeProbabilityFromPartialMatchWeight", _computeProbabilityFromPartialMatchWeight);
  main.variable(observer("calcPartialMatchWeightFromBayesFactor")).define("calcPartialMatchWeightFromBayesFactor", _calcPartialMatchWeightFromBayesFactor);
  main.variable(observer("calcBayesFactorFromProbability")).define("calcBayesFactorFromProbability", _calcBayesFactorFromProbability);
  main.variable(observer("roundToSignificantFigures")).define("roundToSignificantFigures", _roundToSignificantFigures);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer("observed_param")).define("observed_param", ["observe_chart_data","chart"], _observed_param);
  main.variable(observer("selected_val")).define("selected_val", ["observed_param"], _selected_val);
  main.variable(observer("observe_chart_data")).define("observe_chart_data", ["Generators"], _observe_chart_data);
  main.variable(observer("probToBayesFactor")).define("probToBayesFactor", _probToBayesFactor);
  main.variable(observer("probToMatchWeight")).define("probToMatchWeight", ["probToBayesFactor"], _probToMatchWeight);
  main.variable(observer("matchWeightToBayesFactor")).define("matchWeightToBayesFactor", _matchWeightToBayesFactor);
  main.variable(observer("bayesFactorToProb")).define("bayesFactorToProb", _bayesFactorToProb);
  main.variable(observer("formatBf")).define("formatBf", _formatBf);
  main.variable(observer("chart_data")).define("chart_data", ["max_match_weight","bayesFactorToProb","matchWeightToBayesFactor","probToBayesFactor","probToMatchWeight","formatBf"], _chart_data);
  main.variable(observer("texd")).define("texd", ["tex"], _texd);
  main.variable(observer("spec_json")).define("spec_json", _spec_json);
  return main;
}
