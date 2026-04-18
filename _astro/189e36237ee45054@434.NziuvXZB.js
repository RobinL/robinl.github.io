function _(e){return e`# Interactive Bayes Factor, Probability and Match Weight`}function w(e,t,a){let i=JSON.parse(e);return i.datasets.mydata=t,i.vconcat.forEach(r=>{r.hasOwnProperty("width")&&(r.width=a-190)}),i}function F(e,t){return e(t)}function v(e,t,a,i){const r=e(t,4);return a`${i`\text{Partial Match Weight} = \omega = ${r}`}`}function x(e,t,a,i,r,o){const l=e(t(a),4);i(a).toFixed(4);const c=e(a,4);return r`${o`\text{Bayes Factor} = K = 2^{\omega} = 2^{{${c}}} = ${l}`}`}function M(e,t,a,i,r){const o=e(t).toFixed(4),l=a(t,4);return i`${r`\text{Probability} = p = \frac{K}{1 + K} = \frac{2^{{${l}}}}{1 + 2^{{${l}}}} = ${o}`}`}function P(e,t){return e`${t`\text{Bayes Factor} = K = \frac{p}{1-p}`}`}function B(e,t,a,i){const o=e(t).toFixed(4);return a`${i`\text{Probability} = p = ${o}`}`}function W(e,t,a,i,r,o){const l=e(t),c=l.toFixed(4),m=a(i(l),4);return r`${o`\text{Bayes Factor} = K = \frac{p}{1-p} = \frac{${c}}{1 - ${c}} = ${m}`}`}function $(e,t,a,i,r,o){const l=e(t),c=a(l,4),m=a(i(l),4);return r`${o`\text{Partial Match Weight} = \omega = \log_{2} K = \log_{2} {${c}} = ${m}`}`}function q(e){return e.range([0,1],{label:"Prior probability"})}function k(e){return e.range([5,40],{label:"Max match weight",step:5,value:10})}function T(e,t,a,i,r,o,l,c){const m=e(t),p=a(m),n=p+i,f=r(n);let s=`With a prior probability of ${t.toFixed(4)}, applying a partial match weight of ${o(i,4)} would result in: `;return l`${s} ${c`
  \begin{aligned}
  \text{Prior as probability} &= p_{\text{prior}} &= ${o(t,4)}\\
  \text{Prior as Bayes Factor} &= K = \frac{p_{\text{prior}}}{1 - p_{\text{prior}}} &= ${o(m,4)} \\
  \text{Prior as Match Weight} &= \omega_{\text{prior}} = \log_{2}(K) &= ${o(p,4)} \\
  \text{Selected Partial Match Weight} &= v &= ${o(i,4)} \\
  \text{Posterior Match Weight} &= \omega_{\text{posterior}} = \omega_{\text{prior}} + v &= ${o(n,4)} \\
  \text{Posterior Probability} &= p_{\text{posterior}} = \frac{2^{\omega_{\text{posterior}}}}{1 + 2^{\omega_{\text{posterior}}}} &= ${o(f,4)}
  \end{aligned}
`}`}function D(){return(function(t){return Math.pow(2,t)})}function S(){return(function(t){return Math.pow(2,t)/(1+Math.pow(2,t))})}function A(){return(function(t){return Math.pow(2,t)/(1+Math.pow(2,t))})}function L(){return(function(t){return Math.log2(t)})}function K(){return(function(t){return t/(1-t)})}function E(){return(function(t,a){if(t===0)return 0;const i=Math.floor(Math.log10(Math.abs(t))),r=Math.pow(10,a-i-1);return Math.round(t*r)/r})}function I(e){return e("vega-embed@6")}function j(e,t){return e(t,"param_7")}function z(e){return e.mw[0]}function G(e){return(function(a,i){return e.observe(function(r){const o=(l,c)=>r(c);return a.addSignalListener(i,o),r(a.signal(i)),()=>a.removeSignalListener(i,o)})})}function V(){return(function(t){return t!==1?t/(1-t):1/0})}function C(e){return(function(a){const i=e(a),r=Math.log2(i),o=8;return Math.round(r*Math.pow(10,o))/Math.pow(10,o)})}function H(){return(function(t){return Math.pow(2,t)})}function J(){return(function(t){return t/(1+t)})}function N(){return(function(t,a){if(t>=1e3)return t.toLocaleString(void 0,{maximumFractionDigits:0});if(t>=100)return t.toLocaleString(void 0,{maximumFractionDigits:1});if(t>=10)return t.toLocaleString(void 0,{maximumFractionDigits:2});if(t>=1)return t.toLocaleString(void 0,{maximumFractionDigits:3}).replace(/\.?0+$/,"");{const i=Math.abs(a),o=4+Math.floor(i/5);return t.toLocaleString(void 0,{minimumFractionDigits:o}).replace(/\.?0+$/,"")}})}function O(e,t,a,i,r,o){const l=-e,c=-1*l,m=5;let p=Array.from({length:(c-l)*m+1},(n,f)=>t(a((f+l*m)/m)));return p=p.map(n=>({prob:n,bf:i(n),mw:r(n)})),p=p.map(n=>{const f=Math.abs(n.mw),h=4+Math.floor(f/5),b=n.prob.toLocaleString(void 0,{minimumFractionDigits:h}).replace(/\.?0+$/,""),g=o(n.bf,n.mw),y=n.mw.toLocaleString(void 0,{maximumFractionDigits:1});let u;if(n.prob>.5){const d=n.bf;d>100?u=`${d.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}x more likely`:u=`${d.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\.?0+$/,"")}x more likely`}else if(n.prob<.5){const d=1/n.bf;d>100?u=`${d.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}x less likely`:u=`${d.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\.?0+$/,"")}x less likely`}else u="no more or less likely";return{...n,prob_fmt:b,bf_fmt:g,mw_fmt:y,int_fmt:u}}),p}function Q(e){return e.options({displayMode:!0,fleqn:!0})}function R(){return`
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
                "title": "⬅️  times less likely                    Intuitive interpretation                    times more likely  ➡️"
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
}`}function U(e,t){const a=e.module();return a.variable(t()).define(["md"],_),a.variable(t("spec")).define("spec",["spec_json","chart_data","width"],w),a.variable(t("viewof chart")).define("viewof chart",["embed","spec"],F),a.variable(t("chart")).define("chart",["Generators","viewof chart"],(i,r)=>i.input(r)),a.variable(t("mw_1")).define("mw_1",["roundToSignificantFigures","selected_val","html","tex"],v),a.variable(t("bf_1")).define("bf_1",["roundToSignificantFigures","calcBayesFactorFromPartialMatchWeight","selected_val","calcProbabilityFromPartialMatchWeight","html","tex"],x),a.variable(t("p_1")).define("p_1",["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","html","tex"],M),a.variable(t()).define(["html","tex"],P),a.variable(t("p_2")).define("p_2",["calcProbabilityFromPartialMatchWeight","selected_val","html","tex"],B),a.variable(t("bf_2")).define("bf_2",["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcBayesFactorFromProbability","html","tex"],W),a.variable(t("mw_2")).define("mw_2",["calcBayesFactorFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcPartialMatchWeightFromBayesFactor","html","tex"],$),a.variable(t("viewof prior_probabability")).define("viewof prior_probabability",["Inputs"],q),a.variable(t("prior_probabability")).define("prior_probabability",["Generators","viewof prior_probabability"],(i,r)=>i.input(r)),a.variable(t("viewof max_match_weight")).define("viewof max_match_weight",["Inputs"],k),a.variable(t("max_match_weight")).define("max_match_weight",["Generators","viewof max_match_weight"],(i,r)=>i.input(r)),a.variable(t()).define(["calcBayesFactorFromProbability","prior_probabability","calcPartialMatchWeightFromBayesFactor","selected_val","calcProbabilityFromPartialMatchWeight","roundToSignificantFigures","html","tex"],T),a.variable(t("calcBayesFactorFromPartialMatchWeight")).define("calcBayesFactorFromPartialMatchWeight",D),a.variable(t("calcProbabilityFromPartialMatchWeight")).define("calcProbabilityFromPartialMatchWeight",S),a.variable(t("computeProbabilityFromPartialMatchWeight")).define("computeProbabilityFromPartialMatchWeight",A),a.variable(t("calcPartialMatchWeightFromBayesFactor")).define("calcPartialMatchWeightFromBayesFactor",L),a.variable(t("calcBayesFactorFromProbability")).define("calcBayesFactorFromProbability",K),a.variable(t("roundToSignificantFigures")).define("roundToSignificantFigures",E),a.variable(t("embed")).define("embed",["require"],I),a.variable(t("observed_param")).define("observed_param",["observe_chart_data","chart"],j),a.variable(t("selected_val")).define("selected_val",["observed_param"],z),a.variable(t("observe_chart_data")).define("observe_chart_data",["Generators"],G),a.variable(t("probToBayesFactor")).define("probToBayesFactor",V),a.variable(t("probToMatchWeight")).define("probToMatchWeight",["probToBayesFactor"],C),a.variable(t("matchWeightToBayesFactor")).define("matchWeightToBayesFactor",H),a.variable(t("bayesFactorToProb")).define("bayesFactorToProb",J),a.variable(t("formatBf")).define("formatBf",N),a.variable(t("chart_data")).define("chart_data",["max_match_weight","bayesFactorToProb","matchWeightToBayesFactor","probToBayesFactor","probToMatchWeight","formatBf"],O),a.variable(t("texd")).define("texd",["tex"],Q),a.variable(t("spec_json")).define("spec_json",R),a}export{U as default};
