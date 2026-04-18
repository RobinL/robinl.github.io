function _1(md){return(
md`# BF prior calc`
)}

function _rlju(require){return(
require("@robinl/record_linkage_javascript_utilities@0.0.7")
)}

function _bf_to_pmw(rlju){return(
rlju.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor
)}

function _prob_to_odds(rlju){return(
function (p) {
  return rlju.convertMatchScoreMetrics.roundToSignificantFigures(
    p / (1 - p),
    8
  );
}
)}

function _odds_to_prob(){return(
function odds_to_prob(odds) {
  return odds / (1 + odds);
}
)}

function _pmw_to_bf(rlju){return(
rlju.convertMatchScoreMetrics.calcBayesFactorFromPartialMatchWeight
)}

function _prior_probability_bound(bind2,Inputs,$0){return(
bind2(
  Inputs.range([0, 1], {
    label: "Prior probability",
    value: 0.2,
    step: 0.01
  }),
  $0,
  (x) => x,
  (x) => x
)
)}

function _prior_odds_bound(bind2,Inputs,prob_to_odds,$0,odds_to_prob){return(
bind2(
  Inputs.number([0, prob_to_odds(0.999)], {
    label: "Equivalent prior odds",
    value: prob_to_odds(0.2)
  }),
  $0,

  prob_to_odds,
  odds_to_prob
)
)}

function _partial_match_weight_bound(bind2,Inputs,$0){return(
bind2(
  Inputs.range([-10, 10], {
    label: "Partial match weight",
    value: 2
  }),
  $0,
  (x) => x,
  (x) => x
)
)}

function _bayes_factor(bind2,Inputs,pmw_to_bf,$0,pow2,log2){return(
bind2(
  Inputs.number([pmw_to_bf(-10), pmw_to_bf(10)], {
    label: "Equivalent Bayes Factor",
    value: 2
  }),
  $0,

  pow2,
  log2
)
)}

function _narrative(rlju,prior_probability,partial_match_weight,bayes_factor,md)
{
  let c = rlju.convertMatchScoreMetrics;
  let sf = 4;

  let prior_fmt = c.roundToSignificantFigures(prior_probability, sf);

  let pmw_fmt = c.roundToSignificantFigures(partial_match_weight, sf);

  let bf_fmt = c.roundToSignificantFigures(bayes_factor.value, sf);

  function formatBayesFactor(bf) {
    if (bf > 1) {
      let formattedBF = c.roundToSignificantFigures(bf, sf);
      return `${formattedBF} times more likely`;
    } else {
      let formattedBF = c.roundToSignificantFigures(1 / bf, sf);
      return `${formattedBF} times less likely`;
    }
  }

  let pr_mw = c.calcPartialMatchWeightFromProbability(prior_probability);
  let po_mw = pr_mw + partial_match_weight;
  let po_prob = c.calcProbabilityFromPartialMatchWeight(po_mw);

  let po_prob_fmt = c.roundToSignificantFigures(po_prob, sf);

  return md`

The partial match weight of ${pmw_fmt} is equivalent a Bayes Factor of ${bf_fmt}.  

This means after updating the prior, the records are ${formatBayesFactor(
    bayes_factor.value
  )} to be a match.

Our updated (posterior) belief about the probability of a match is ${po_prob_fmt}.


`;
}


function _chart(embed,spec){return(
embed(spec)
)}

function _data_for_chart(rlju,prior_probability,partial_match_weight)
{
  function format_to_2sf(num) {
    return parseFloat(num).toFixed(2);
  }

  let c = rlju.convertMatchScoreMetrics;

  let pr_mw = c.calcPartialMatchWeightFromProbability(prior_probability);
  let po_mw = pr_mw + partial_match_weight;

  let pr_bf = c.calcBayesFactorFromPartialMatchWeight(pr_mw);
  let po_bf = c.calcBayesFactorFromPartialMatchWeight(po_mw);

  let pr_prob = c.calcProbabilityFromPartialMatchWeight(pr_mw);
  let po_prob = c.calcProbabilityFromPartialMatchWeight(po_mw);

  return [
    {
      prior_match_weight: pr_mw,
      posterior_match_weight: po_mw,
      prior_match_weight_fmt: format_to_2sf(pr_mw),
      posterior_match_weight_fmt: format_to_2sf(po_mw),
      prior_bayes_factor_fmt: format_to_2sf(pr_bf),
      posterior_bayes_factor_fmt: format_to_2sf(po_bf),
      prior_prob_fmt: format_to_2sf(pr_prob),
      posterior_prob_fmt: format_to_2sf(po_prob),
      prior_text: "prior",
      posterior_text: "posterior"
    }
  ];
}


function _prior_probability(Inputs){return(
Inputs.input(0.25)
)}

function _partial_match_weight(Inputs){return(
Inputs.input(6)
)}

function _log2(){return(
(x) => Math.log2(x)
)}

function _pow2(rlju){return(
(x) =>
  rlju.convertMatchScoreMetrics.roundToSignificantFigures(Math.pow(2, x), 8)
)}

function _set(get){return(
function set(target, source, transform) {
  let value = get(source);
  if (transform) {
    value = transform(value);
  }
  switch (target.type) {
    case "range":
    case "number":
      target.valueAsNumber = value;
      break;
    case "date":
      target.valueAsDate = value;
      break;
    case "checkbox":
      target.checked = value;
      break;
    case "file":
      target.multiple ? (target.files = value) : (target.files = [value]);
      break;
    default:
      target.value = value;
      break;
  }
}
)}

function _get(){return(
function get(input) {
  switch (input.type) {
    case "range":
    case "number":
      return input.valueAsNumber;
    case "date":
      return input.valueAsDate;
    case "checkbox":
      return input.checked;
    case "file":
      return input.multiple ? input.files : input.files[0];
    default:
      return input.value;
  }
}
)}

function _bind2(disposal,eventof,set,Event){return(
function bind2(
  target,
  source,
  transform,
  inverseTransform,
  invalidation = disposal(target)
) {
  const sourceEvent = eventof(source);
  const onsource = () => set(target, source, transform);

  const ontarget = () => {
    set(source, target, inverseTransform);
    source.dispatchEvent(new Event(sourceEvent, { bubbles: true }));
  };
  onsource();
  target.addEventListener(eventof(target), ontarget);
  source.addEventListener(sourceEvent, onsource);
  invalidation.then(() => source.removeEventListener(sourceEvent, onsource));
  return target;
}
)}

function _eventof(){return(
function eventof(input) {
  switch (input.type) {
    case "button":
    case "submit":
      return "click";
    case "file":
      return "change";
    default:
      return "input";
  }
}
)}

function _disposal(MutationObserver){return(
function disposal(element) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const target = element.closest(".observablehq");
      if (!target) return resolve();
      const observer = new MutationObserver(() => {
        if (target.contains(element)) return;
        observer.disconnect(), resolve();
      });
      observer.observe(target, { childList: true });
    });
  });
}
)}

function _embed(require){return(
require("vega-embed@6")
)}

function _spec(bf_movement_spec_json,data_for_chart,rlju,partial_match_weight)
{
  let spec = JSON.parse(bf_movement_spec_json);
  spec["datasets"]["mydata"] = data_for_chart;
  let prob = data_for_chart[0]["prior_prob_fmt"];
  let pmw = data_for_chart[0]["partial_match_weight_fmt"];
  spec[
    "title"
  ] = `Updating a prior probability of ${prob} with a partial match weight of ${rlju.roundToSignificantFigures(
    partial_match_weight,
    3
  )}`;
  return spec;
}


function _bf_movement_spec_json(){return(
`{
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
                        "type": "bar"
                    },
                    "encoding": {
                        "color": {
                            "value": "#4FABF5"
                        },
                        "x": {
                            "field": "prior_match_weight",
                            "scale": {
                                "domain": [
                                    -10,
                                    10
                                ]
                            },
                            "type": "quantitative"
                        },
                        "x2": {
                            "field": "posterior_match_weight"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "value": "prior"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value",
                                "title": "Partial Match Weight"
                            },
                            "field": "prior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "value": "posterior"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value",
                                "title": "Partial Match Weight"
                            },
                            "field": "posterior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "color": "white",
                        "dx": 0,
                        "fontSize": 30,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "condition": {
                                "test": "datum.prior_match_weight < datum.posterior_match_weight",
                                "value": "\u2192"
                            },
                            "value": "\u2190"
                        },
                        "x": {
                            "field": "midpoint",
                            "type": "quantitative"
                        }
                    },
                    "transform": [
                        {
                            "calculate": "(datum.prior_match_weight + datum.posterior_match_weight) / 2",
                            "as": "midpoint"
                        }
                    ]
                }
            ],
            "height": 30,
            "width": 450
        },
        {
            "layer": [
                {
                    "mark": {
                        "type": "bar"
                    },
                    "encoding": {
                        "color": {
                            "value": "#4FABF5"
                        },
                        "x": {
                            "field": "prior_match_weight",
                            "scale": {
                                "domain": [
                                    -10,
                                    10
                                ]
                            },
                            "type": "quantitative"
                        },
                        "x2": {
                            "field": "posterior_match_weight"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "prior_match_weight_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value",
                                "title": "Partial Match Weight"
                            },
                            "field": "prior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "posterior_match_weight_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value",
                                "title": "Partial Match Weight"
                            },
                            "field": "posterior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "color": "white",
                        "dx": 0,
                        "fontSize": 30,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "condition": {
                                "test": "datum.prior_match_weight < datum.posterior_match_weight",
                                "value": "\u2192"
                            },
                            "value": "\u2190"
                        },
                        "x": {
                            "field": "midpoint",
                            "type": "quantitative"
                        }
                    },
                    "transform": [
                        {
                            "calculate": "(datum.prior_match_weight + datum.posterior_match_weight) / 2",
                            "as": "midpoint"
                        }
                    ]
                }
            ],
            "height": 30,
            "width": 450
        },
        {
            "layer": [
                {
                    "mark": {
                        "type": "bar"
                    },
                    "encoding": {
                        "color": {
                            "value": "#4FABF5"
                        },
                        "x": {
                            "field": "prior_match_weight",
                            "scale": {
                                "domain": [
                                    -10,
                                    10
                                ]
                            },
                            "type": "quantitative"
                        },
                        "x2": {
                            "field": "posterior_match_weight"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "prior_bayes_factor_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value < 1 ? format(pow(2, datum.value),',.3f') : format(pow(2, datum.value),',.0f') ",
                                "title": "Bayes Factor (odds)"
                            },
                            "field": "prior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "posterior_bayes_factor_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "datum.value < 1 ? format(pow(2, datum.value),',.3f') : format(pow(2, datum.value),',.0f') ",
                                "title": "Bayes Factor (odds)"
                            },
                            "field": "posterior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "color": "white",
                        "dx": 0,
                        "fontSize": 30,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "condition": {
                                "test": "datum.prior_match_weight < datum.posterior_match_weight",
                                "value": "\u2192"
                            },
                            "value": "\u2190"
                        },
                        "x": {
                            "field": "midpoint",
                            "type": "quantitative"
                        }
                    },
                    "transform": [
                        {
                            "calculate": "(datum.prior_match_weight + datum.posterior_match_weight) / 2",
                            "as": "midpoint"
                        }
                    ]
                }
            ],
            "height": 30,
            "width": 450
        },
        {
            "layer": [
                {
                    "mark": {
                        "type": "bar"
                    },
                    "encoding": {
                        "color": {
                            "value": "#4FABF5"
                        },
                        "x": {
                            "field": "prior_match_weight",
                            "scale": {
                                "domain": [
                                    -10,
                                    10
                                ]
                            },
                            "type": "quantitative"
                        },
                        "x2": {
                            "field": "posterior_match_weight"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "prior_prob_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "format(pow(2, datum.value)/(1+ pow(2, datum.value)), ',.3f')",
                                "title": "Probability"
                            },
                            "field": "prior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "fontSize": 16,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "field": "posterior_prob_fmt",
                            "type": "quantitative"
                        },
                        "x": {
                            "axis": {
                                "labelExpr": "format(pow(2, datum.value)/(1+ pow(2, datum.value)), ',.3f')",
                                "title": "Probability"
                            },
                            "field": "posterior_match_weight",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "baseline": "middle",
                        "color": "white",
                        "dx": 0,
                        "fontSize": 30,
                        "fontWeight": "bold"
                    },
                    "encoding": {
                        "text": {
                            "condition": {
                                "test": "datum.prior_match_weight < datum.posterior_match_weight",
                                "value": "\u2192"
                            },
                            "value": "\u2190"
                        },
                        "x": {
                            "field": "midpoint",
                            "type": "quantitative"
                        }
                    },
                    "transform": [
                        {
                            "calculate": "(datum.prior_match_weight + datum.posterior_match_weight) / 2",
                            "as": "midpoint"
                        }
                    ]
                }
            ],
            "height": 30,
            "width": 450
        }
    ],
    "data": {
        "name": "mydata"
    },
    "title": "Updating a prior probability of x with a partial match weight of y",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.14.1.json",
    "datasets": {
        "mydata": [
            {
                "prior_match_weight": 2,
                "posterior_match_weight": -5.5,
                "prior_match_weight_fmt": "2",
                "posterior_match_weight_fmt": "-5.5",
                "prior_bayes_factor_fmt": "4",
                "posterior_bayes_factor_fmt": "0.0221",
                "prior_prob_fmt": "0.8",
                "posterior_prob_fmt": "0.0216",
                "prior_text": "prior",
                "posterior_text": "posterior"
            }
        ]
    }
}`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("rlju")).define("rlju", ["require"], _rlju);
  main.variable(observer("bf_to_pmw")).define("bf_to_pmw", ["rlju"], _bf_to_pmw);
  main.variable(observer("prob_to_odds")).define("prob_to_odds", ["rlju"], _prob_to_odds);
  main.variable(observer("odds_to_prob")).define("odds_to_prob", _odds_to_prob);
  main.variable(observer("pmw_to_bf")).define("pmw_to_bf", ["rlju"], _pmw_to_bf);
  main.variable(observer("prior_probability_bound")).define("prior_probability_bound", ["bind2","Inputs","viewof prior_probability"], _prior_probability_bound);
  main.variable(observer("prior_odds_bound")).define("prior_odds_bound", ["bind2","Inputs","prob_to_odds","viewof prior_probability","odds_to_prob"], _prior_odds_bound);
  main.variable(observer("partial_match_weight_bound")).define("partial_match_weight_bound", ["bind2","Inputs","viewof partial_match_weight"], _partial_match_weight_bound);
  main.variable(observer("bayes_factor")).define("bayes_factor", ["bind2","Inputs","pmw_to_bf","viewof partial_match_weight","pow2","log2"], _bayes_factor);
  main.variable(observer("narrative")).define("narrative", ["rlju","prior_probability","partial_match_weight","bayes_factor","md"], _narrative);
  main.variable(observer("chart")).define("chart", ["embed","spec"], _chart);
  main.variable(observer("data_for_chart")).define("data_for_chart", ["rlju","prior_probability","partial_match_weight"], _data_for_chart);
  main.variable(observer("viewof prior_probability")).define("viewof prior_probability", ["Inputs"], _prior_probability);
  main.variable(observer("prior_probability")).define("prior_probability", ["Generators", "viewof prior_probability"], (G, _) => G.input(_));
  main.variable(observer("viewof partial_match_weight")).define("viewof partial_match_weight", ["Inputs"], _partial_match_weight);
  main.variable(observer("partial_match_weight")).define("partial_match_weight", ["Generators", "viewof partial_match_weight"], (G, _) => G.input(_));
  main.variable(observer("log2")).define("log2", _log2);
  main.variable(observer("pow2")).define("pow2", ["rlju"], _pow2);
  main.variable(observer("set")).define("set", ["get"], _set);
  main.variable(observer("get")).define("get", _get);
  main.variable(observer("bind2")).define("bind2", ["disposal","eventof","set","Event"], _bind2);
  main.variable(observer("eventof")).define("eventof", _eventof);
  main.variable(observer("disposal")).define("disposal", ["MutationObserver"], _disposal);
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer("spec")).define("spec", ["bf_movement_spec_json","data_for_chart","rlju","partial_match_weight"], _spec);
  main.variable(observer("bf_movement_spec_json")).define("bf_movement_spec_json", _bf_movement_spec_json);
  return main;
}
