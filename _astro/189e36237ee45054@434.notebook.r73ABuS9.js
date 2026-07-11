function w(i){let e,t,a,n=!1;const o=i(l=>{a=l,e?(e(l),e=t=void 0):n=!0});return{async next(){return{done:!1,value:await(n?(n=!1,a):new Promise((l,u)=>(e=l,t=u)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,o?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function _(i){let e;return Object.defineProperty(w(t=>{e=t,i!==void 0&&t(i)}),"value",{get:()=>i,set:t=>(i=t,e?.(i))})}function F(i){const e=_(i);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function y(i,e=()=>null){const t=i.module();y.FileAttachment&&t.variable().define("FileAttachment",[],()=>y.FileAttachment);for(const a of y.cells){const n=a.inputs??[],o=a.output;if(a.outputs?.length){const l=`cell ${a.id}`;t.variable(e(null)).define(l,n,a.body);for(const u of a.outputs)t.variable(!0).define(u,[l],r=>r[u])}else if(o)if(a.autoview){const l=o.slice(7),u=`viewof ${l}`;t.variable(e(u)).define(u,n,a.body),t.variable(e(l)).define(l,["Generators",u],(r,d)=>r.input(d))}else if(a.automutable){const l=o.slice(8),u=`cell ${a.id}`;t.define(o,n,a.body),t.define(u,[o],F),t.variable(e(l)).define(l,[u],([r])=>r),t.variable(!0).define(`mutable$${l}`,[u],([,r])=>r)}else t.variable(e(o)).define(o,n,a.body);else t.variable(e(null)).define(n,a.body)}return t}Object.assign(y,{title:"@robinl/interactive-bayes-factor-probability-and-match-weight: 189e36237ee45054@434.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(i){return i`# Interactive Bayes Factor, Probability and Match Weight`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(e,t,a){let n=JSON.parse(e);return n.datasets.mydata=t,n.vconcat.forEach(o=>{o.hasOwnProperty("width")&&(o.width=a-190)}),n},inputs:["spec_json","chart_data","width"],outputs:void 0,output:"spec",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(e,t){return e(t)},inputs:["embed","spec"],outputs:void 0,output:"viewof$chart",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(e,t,a,n){const o=e(t,4);return a`${n`\text{Partial Match Weight} = \omega = ${o}`}`},inputs:["roundToSignificantFigures","selected_val","html","tex"],outputs:void 0,output:"mw_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(e,t,a,n,o,l){const u=e(t(a),4);n(a).toFixed(4);const r=e(a,4);return o`${l`\text{Bayes Factor} = K = 2^{\omega} = 2^{{${r}}} = ${u}`}`},inputs:["roundToSignificantFigures","calcBayesFactorFromPartialMatchWeight","selected_val","calcProbabilityFromPartialMatchWeight","html","tex"],outputs:void 0,output:"bf_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e,t,a,n,o){const l=e(t).toFixed(4),u=a(t,4);return n`${o`\text{Probability} = p = \frac{K}{1 + K} = \frac{2^{{${u}}}}{1 + 2^{{${u}}}} = ${l}`}`},inputs:["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","html","tex"],outputs:void 0,output:"p_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(i,e){return i`${e`\text{Bayes Factor} = K = \frac{p}{1-p}`}`},inputs:["html","tex"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,a,n){const l=e(t).toFixed(4);return a`${n`\text{Probability} = p = ${l}`}`},inputs:["calcProbabilityFromPartialMatchWeight","selected_val","html","tex"],outputs:void 0,output:"p_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e,t,a,n,o,l){const u=e(t),r=u.toFixed(4),d=a(n(u),4);return o`${l`\text{Bayes Factor} = K = \frac{p}{1-p} = \frac{${r}}{1 - ${r}} = ${d}`}`},inputs:["calcProbabilityFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcBayesFactorFromProbability","html","tex"],outputs:void 0,output:"bf_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t,a,n,o,l){const u=e(t),r=a(u,4),d=a(n(u),4);return o`${l`\text{Partial Match Weight} = \omega = \log_{2} K = \log_{2} {${r}} = ${d}`}`},inputs:["calcBayesFactorFromPartialMatchWeight","selected_val","roundToSignificantFigures","calcPartialMatchWeightFromBayesFactor","html","tex"],outputs:void 0,output:"mw_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e){return e.range([0,1],{label:"Prior probability"})},inputs:["Inputs"],outputs:void 0,output:"viewof$prior_probabability",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e){return e.range([5,40],{label:"Max match weight",step:5,value:10})},inputs:["Inputs"],outputs:void 0,output:"viewof$max_match_weight",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(i,e,t,a,n,o,l,u){const r=i(e),d=t(r),c=d+a,s=n(c);let m=`With a prior probability of ${e.toFixed(4)}, applying a partial match weight of ${o(a,4)} would result in: `;return l`${m} ${u`
  \begin{aligned}
  \text{Prior as probability} &= p_{\text{prior}} &= ${o(e,4)}\\
  \text{Prior as Bayes Factor} &= K = \frac{p_{\text{prior}}}{1 - p_{\text{prior}}} &= ${o(r,4)} \\
  \text{Prior as Match Weight} &= \omega_{\text{prior}} = \log_{2}(K) &= ${o(d,4)} \\
  \text{Selected Partial Match Weight} &= v &= ${o(a,4)} \\
  \text{Posterior Match Weight} &= \omega_{\text{posterior}} = \omega_{\text{prior}} + v &= ${o(c,4)} \\
  \text{Posterior Probability} &= p_{\text{posterior}} = \frac{2^{\omega_{\text{posterior}}}}{1 + 2^{\omega_{\text{posterior}}}} &= ${o(s,4)}
  \end{aligned}
`}`},inputs:["calcBayesFactorFromProbability","prior_probabability","calcPartialMatchWeightFromBayesFactor","selected_val","calcProbabilityFromPartialMatchWeight","roundToSignificantFigures","html","tex"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(){return(function(t){return Math.pow(2,t)})},inputs:[],outputs:void 0,output:"calcBayesFactorFromPartialMatchWeight",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(){return(function(t){return Math.pow(2,t)/(1+Math.pow(2,t))})},inputs:[],outputs:void 0,output:"calcProbabilityFromPartialMatchWeight",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(){return(function(t){return Math.pow(2,t)/(1+Math.pow(2,t))})},inputs:[],outputs:void 0,output:"computeProbabilityFromPartialMatchWeight",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(){return(function(t){return Math.log2(t)})},inputs:[],outputs:void 0,output:"calcPartialMatchWeightFromBayesFactor",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(){return(function(t){return t/(1-t)})},inputs:[],outputs:void 0,output:"calcBayesFactorFromProbability",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(){return(function(t,a){if(t===0)return 0;const n=Math.floor(Math.log10(Math.abs(t))),o=Math.pow(10,a-n-1);return Math.round(t*o)/o})},inputs:[],outputs:void 0,output:"roundToSignificantFigures",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e){return e("vega-embed@6")},inputs:["require"],outputs:void 0,output:"embed",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e,t){return e(t,"param_7")},inputs:["observe_chart_data","chart"],outputs:void 0,output:"observed_param",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e){return e.mw[0]},inputs:["observed_param"],outputs:void 0,output:"selected_val",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){return(function(a,n){return e.observe(function(o){const l=(u,r)=>o(r);return a.addSignalListener(n,l),o(a.signal(n)),()=>a.removeSignalListener(n,l)})})},inputs:["Generators"],outputs:void 0,output:"observe_chart_data",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(){return(function(t){return t!==1?t/(1-t):1/0})},inputs:[],outputs:void 0,output:"probToBayesFactor",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e){return(function(a){const n=e(a),o=Math.log2(n),l=8;return Math.round(o*Math.pow(10,l))/Math.pow(10,l)})},inputs:["probToBayesFactor"],outputs:void 0,output:"probToMatchWeight",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(){return(function(t){return Math.pow(2,t)})},inputs:[],outputs:void 0,output:"matchWeightToBayesFactor",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(){return(function(t){return t/(1+t)})},inputs:[],outputs:void 0,output:"bayesFactorToProb",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(){return(function(t,a){if(t>=1e3)return t.toLocaleString(void 0,{maximumFractionDigits:0});if(t>=100)return t.toLocaleString(void 0,{maximumFractionDigits:1});if(t>=10)return t.toLocaleString(void 0,{maximumFractionDigits:2});if(t>=1)return t.toLocaleString(void 0,{maximumFractionDigits:3}).replace(/\.?0+$/,"");{const n=Math.abs(a),l=4+Math.floor(n/5);return t.toLocaleString(void 0,{minimumFractionDigits:l}).replace(/\.?0+$/,"")}})},inputs:[],outputs:void 0,output:"formatBf",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:29,mode:"ojs",body:function(e,t,a,n,o,l){const u=-e,r=-1*u,d=5;let c=Array.from({length:(r-u)*d+1},(s,m)=>t(a((m+u*d)/d)));return c=c.map(s=>({prob:s,bf:n(s),mw:o(s)})),c=c.map(s=>{const m=Math.abs(s.mw),b=4+Math.floor(m/5),h=s.prob.toLocaleString(void 0,{minimumFractionDigits:b}).replace(/\.?0+$/,""),g=l(s.bf,s.mw),v=s.mw.toLocaleString(void 0,{maximumFractionDigits:1});let f;if(s.prob>.5){const p=s.bf;p>100?f=`${p.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}x more likely`:f=`${p.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\.?0+$/,"")}x more likely`}else if(s.prob<.5){const p=1/s.bf;p>100?f=`${p.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}x less likely`:f=`${p.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\.?0+$/,"")}x less likely`}else f="no more or less likely";return{...s,prob_fmt:h,bf_fmt:g,mw_fmt:v,int_fmt:f}}),c},inputs:["max_match_weight","bayesFactorToProb","matchWeightToBayesFactor","probToBayesFactor","probToMatchWeight","formatBf"],outputs:void 0,output:"chart_data",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:30,mode:"ojs",body:function(e){return e.options({displayMode:!0,fleqn:!0})},inputs:["tex"],outputs:void 0,output:"texd",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:31,mode:"ojs",body:function(){return`
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
}`},inputs:[],outputs:void 0,output:"spec_json",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{y as default};
