function s(i){return i`# BF prior calc`}function b(i){return i("@robinl/record_linkage_javascript_utilities@0.0.7")}function g(i){return i.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor}function w(i){return(function(t){return i.convertMatchScoreMetrics.roundToSignificantFigures(t/(1-t),8)})}function v(){return(function(t){return t/(1+t)})}function y(i){return i.convertMatchScoreMetrics.calcBayesFactorFromPartialMatchWeight}function x(i,t,e){return i(t.range([0,1],{label:"Prior probability",value:.2,step:.01}),e,r=>r,r=>r)}function F(i,t,e,r,o){return i(t.number([0,e(.999)],{label:"Equivalent prior odds",value:e(.2)}),r,e,o)}function k(i,t,e){return i(t.range([-10,10],{label:"Partial match weight",value:2}),e,r=>r,r=>r)}function q(i,t,e,r,o,a){return i(t.number([e(-10),e(10)],{label:"Equivalent Bayes Factor",value:2}),r,o,a)}function M(i,t,e,r,o){let a=i.convertMatchScoreMetrics,n=4;a.roundToSignificantFigures(t,n);let _=a.roundToSignificantFigures(e,n),d=a.roundToSignificantFigures(r.value,n);function p(m){return m>1?`${a.roundToSignificantFigures(m,n)} times more likely`:`${a.roundToSignificantFigures(1/m,n)} times less likely`}let l=a.calcPartialMatchWeightFromProbability(t)+e,u=a.calcProbabilityFromPartialMatchWeight(l),f=a.roundToSignificantFigures(u,n);return o`

The partial match weight of ${_} is equivalent a Bayes Factor of ${d}.  

This means after updating the prior, the records are ${p(r.value)} to be a match.

Our updated (posterior) belief about the probability of a match is ${f}.


`}function S(i,t){return i(t)}function W(i,t,e){function r(l){return parseFloat(l).toFixed(2)}let o=i.convertMatchScoreMetrics,a=o.calcPartialMatchWeightFromProbability(t),n=a+e,_=o.calcBayesFactorFromPartialMatchWeight(a),d=o.calcBayesFactorFromPartialMatchWeight(n),p=o.calcProbabilityFromPartialMatchWeight(a),c=o.calcProbabilityFromPartialMatchWeight(n);return[{prior_match_weight:a,posterior_match_weight:n,prior_match_weight_fmt:r(a),posterior_match_weight_fmt:r(n),prior_bayes_factor_fmt:r(_),posterior_bayes_factor_fmt:r(d),prior_prob_fmt:r(p),posterior_prob_fmt:r(c),prior_text:"prior",posterior_text:"posterior"}]}function P(i){return i.input(.25)}function B(i){return i.input(6)}function j(){return(i=>Math.log2(i))}function E(i){return(t=>i.convertMatchScoreMetrics.roundToSignificantFigures(Math.pow(2,t),8))}function z(i){return(function(e,r,o){let a=i(r);switch(o&&(a=o(a)),e.type){case"range":case"number":e.valueAsNumber=a;break;case"date":e.valueAsDate=a;break;case"checkbox":e.checked=a;break;case"file":e.multiple?e.files=a:e.files=[a];break;default:e.value=a;break}})}function T(){return(function(t){switch(t.type){case"range":case"number":return t.valueAsNumber;case"date":return t.valueAsDate;case"checkbox":return t.checked;case"file":return t.multiple?t.files:t.files[0];default:return t.value}})}function A(i,t,e,r){return(function(a,n,_,d,p=i(a)){const c=t(n),l=()=>e(a,n,_),u=()=>{e(n,a,d),n.dispatchEvent(new r(c,{bubbles:!0}))};return l(),a.addEventListener(t(a),u),n.addEventListener(c,l),p.then(()=>n.removeEventListener(c,l)),a})}function $(){return(function(t){switch(t.type){case"button":case"submit":return"click";case"file":return"change";default:return"input"}})}function I(i){return(function(e){return new Promise(r=>{requestAnimationFrame(()=>{const o=e.closest(".observablehq");if(!o)return r();const a=new i(()=>{o.contains(e)||(a.disconnect(),r())});a.observe(o,{childList:!0})})})})}function L(i){return i("vega-embed@6")}function N(i,t,e,r){let o=JSON.parse(i);o.datasets.mydata=t;let a=t[0].prior_prob_fmt;return t[0].partial_match_weight_fmt,o.title=`Updating a prior probability of ${a} with a partial match weight of ${e.roundToSignificantFigures(r,3)}`,o}function O(){return`{
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
                                "value": "→"
                            },
                            "value": "←"
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
                                "value": "→"
                            },
                            "value": "←"
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
                                "value": "→"
                            },
                            "value": "←"
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
                                "value": "→"
                            },
                            "value": "←"
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
}`}function D(i,t){const e=i.module();return e.variable(t()).define(["md"],s),e.variable(t("rlju")).define("rlju",["require"],b),e.variable(t("bf_to_pmw")).define("bf_to_pmw",["rlju"],g),e.variable(t("prob_to_odds")).define("prob_to_odds",["rlju"],w),e.variable(t("odds_to_prob")).define("odds_to_prob",v),e.variable(t("pmw_to_bf")).define("pmw_to_bf",["rlju"],y),e.variable(t("prior_probability_bound")).define("prior_probability_bound",["bind2","Inputs","viewof prior_probability"],x),e.variable(t("prior_odds_bound")).define("prior_odds_bound",["bind2","Inputs","prob_to_odds","viewof prior_probability","odds_to_prob"],F),e.variable(t("partial_match_weight_bound")).define("partial_match_weight_bound",["bind2","Inputs","viewof partial_match_weight"],k),e.variable(t("bayes_factor")).define("bayes_factor",["bind2","Inputs","pmw_to_bf","viewof partial_match_weight","pow2","log2"],q),e.variable(t("narrative")).define("narrative",["rlju","prior_probability","partial_match_weight","bayes_factor","md"],M),e.variable(t("chart")).define("chart",["embed","spec"],S),e.variable(t("data_for_chart")).define("data_for_chart",["rlju","prior_probability","partial_match_weight"],W),e.variable(t("viewof prior_probability")).define("viewof prior_probability",["Inputs"],P),e.variable(t("prior_probability")).define("prior_probability",["Generators","viewof prior_probability"],(r,o)=>r.input(o)),e.variable(t("viewof partial_match_weight")).define("viewof partial_match_weight",["Inputs"],B),e.variable(t("partial_match_weight")).define("partial_match_weight",["Generators","viewof partial_match_weight"],(r,o)=>r.input(o)),e.variable(t("log2")).define("log2",j),e.variable(t("pow2")).define("pow2",["rlju"],E),e.variable(t("set")).define("set",["get"],z),e.variable(t("get")).define("get",T),e.variable(t("bind2")).define("bind2",["disposal","eventof","set","Event"],A),e.variable(t("eventof")).define("eventof",$),e.variable(t("disposal")).define("disposal",["MutationObserver"],I),e.variable(t("embed")).define("embed",["require"],L),e.variable(t("spec")).define("spec",["bf_movement_spec_json","data_for_chart","rlju","partial_match_weight"],N),e.variable(t("bf_movement_spec_json")).define("bf_movement_spec_json",O),e}export{D as default};
