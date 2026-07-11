function y(u){let e,t,a,o=!1;const r=u(i=>{a=i,e?(e(i),e=t=void 0):o=!0});return{async next(){return{done:!1,value:await(o?(o=!1,a):new Promise((i,l)=>(e=i,t=l)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,r?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function v(u){let e;return Object.defineProperty(y(t=>{e=t,u!==void 0&&t(u)}),"value",{get:()=>u,set:t=>(u=t,e?.(u))})}function g(u){const e=v(u);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function c(u,e=()=>null){const t=u.module();c.FileAttachment&&t.variable().define("FileAttachment",[],()=>c.FileAttachment);for(const a of c.cells){const o=a.inputs??[],r=a.output;if(a.outputs?.length){const i=`cell ${a.id}`;t.variable(e(null)).define(i,o,a.body);for(const l of a.outputs)t.variable(!0).define(l,[i],n=>n[l])}else if(r)if(a.autoview){const i=r.slice(7),l=`viewof ${i}`;t.variable(e(l)).define(l,o,a.body),t.variable(e(i)).define(i,["Generators",l],(n,s)=>n.input(s))}else if(a.automutable){const i=r.slice(8),l=`cell ${a.id}`;t.define(r,o,a.body),t.define(l,[r],g),t.variable(e(i)).define(i,[l],([n])=>n),t.variable(!0).define(`mutable$${i}`,[l],([,n])=>n)}else t.variable(e(r)).define(r,o,a.body);else t.variable(e(null)).define(o,a.body)}return t}Object.assign(c,{title:"@robinl/bf-prior-calc: 695eee6aed606401@287.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(u){return u`# BF prior calc`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(e){return e("@robinl/record_linkage_javascript_utilities@0.0.7")},inputs:["require"],outputs:void 0,output:"rlju",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(e){return e.convertMatchScoreMetrics.calcPartialMatchWeightFromBayesFactor},inputs:["rlju"],outputs:void 0,output:"bf_to_pmw",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(e){return(function(t){return e.convertMatchScoreMetrics.roundToSignificantFigures(t/(1-t),8)})},inputs:["rlju"],outputs:void 0,output:"prob_to_odds",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(){return(function(t){return t/(1+t)})},inputs:[],outputs:void 0,output:"odds_to_prob",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e){return e.convertMatchScoreMetrics.calcBayesFactorFromPartialMatchWeight},inputs:["rlju"],outputs:void 0,output:"pmw_to_bf",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e,t,a){return e(t.range([0,1],{label:"Prior probability",value:.2,step:.01}),a,o=>o,o=>o)},inputs:["bind2","Inputs","viewof$prior_probability"],outputs:void 0,output:"prior_probability_bound",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,a,o,r){return e(t.number([0,a(.999)],{label:"Equivalent prior odds",value:a(.2)}),o,a,r)},inputs:["bind2","Inputs","prob_to_odds","viewof$prior_probability","odds_to_prob"],outputs:void 0,output:"prior_odds_bound",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e,t,a){return e(t.range([-10,10],{label:"Partial match weight",value:2}),a,o=>o,o=>o)},inputs:["bind2","Inputs","viewof$partial_match_weight"],outputs:void 0,output:"partial_match_weight_bound",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t,a,o,r,i){return e(t.number([a(-10),a(10)],{label:"Equivalent Bayes Factor",value:2}),o,r,i)},inputs:["bind2","Inputs","pmw_to_bf","viewof$partial_match_weight","pow2","log2"],outputs:void 0,output:"bayes_factor",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t,a,o,r){let i=e.convertMatchScoreMetrics,l=4;i.roundToSignificantFigures(t,l);let n=i.roundToSignificantFigures(a,l),s=i.roundToSignificantFigures(o.value,l);function f(b){return b>1?`${i.roundToSignificantFigures(b,l)} times more likely`:`${i.roundToSignificantFigures(1/b,l)} times less likely`}let d=i.calcPartialMatchWeightFromProbability(t)+a,m=i.calcProbabilityFromPartialMatchWeight(d),h=i.roundToSignificantFigures(m,l);return r`

The partial match weight of ${n} is equivalent a Bayes Factor of ${s}.  

This means after updating the prior, the records are ${f(o.value)} to be a match.

Our updated (posterior) belief about the probability of a match is ${h}.


`},inputs:["rlju","prior_probability","partial_match_weight","bayes_factor","md"],outputs:void 0,output:"narrative",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t){return e(t)},inputs:["embed","spec"],outputs:void 0,output:"chart",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e,t,a){function o(d){return parseFloat(d).toFixed(2)}let r=e.convertMatchScoreMetrics,i=r.calcPartialMatchWeightFromProbability(t),l=i+a,n=r.calcBayesFactorFromPartialMatchWeight(i),s=r.calcBayesFactorFromPartialMatchWeight(l),f=r.calcProbabilityFromPartialMatchWeight(i),p=r.calcProbabilityFromPartialMatchWeight(l);return[{prior_match_weight:i,posterior_match_weight:l,prior_match_weight_fmt:o(i),posterior_match_weight_fmt:o(l),prior_bayes_factor_fmt:o(n),posterior_bayes_factor_fmt:o(s),prior_prob_fmt:o(f),posterior_prob_fmt:o(p),prior_text:"prior",posterior_text:"posterior"}]},inputs:["rlju","prior_probability","partial_match_weight"],outputs:void 0,output:"data_for_chart",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e){return e.input(.25)},inputs:["Inputs"],outputs:void 0,output:"viewof$prior_probability",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e){return e.input(6)},inputs:["Inputs"],outputs:void 0,output:"viewof$partial_match_weight",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(){return(e=>Math.log2(e))},inputs:[],outputs:void 0,output:"log2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return(t=>e.convertMatchScoreMetrics.roundToSignificantFigures(Math.pow(2,t),8))},inputs:["rlju"],outputs:void 0,output:"pow2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e){return(function(a,o,r){let i=e(o);switch(r&&(i=r(i)),a.type){case"range":case"number":a.valueAsNumber=i;break;case"date":a.valueAsDate=i;break;case"checkbox":a.checked=i;break;case"file":a.multiple?a.files=i:a.files=[i];break;default:a.value=i;break}})},inputs:["get"],outputs:void 0,output:"set",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(){return(function(t){switch(t.type){case"range":case"number":return t.valueAsNumber;case"date":return t.valueAsDate;case"checkbox":return t.checked;case"file":return t.multiple?t.files:t.files[0];default:return t.value}})},inputs:[],outputs:void 0,output:"get",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e,t,a,o){return(function(i,l,n,s,f=e(i)){const p=t(l),d=()=>a(i,l,n),m=()=>{a(l,i,s),l.dispatchEvent(new o(p,{bubbles:!0}))};return d(),i.addEventListener(t(i),m),l.addEventListener(p,d),f.then(()=>l.removeEventListener(p,d)),i})},inputs:["disposal","eventof","set","Event"],outputs:void 0,output:"bind2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(){return(function(t){switch(t.type){case"button":case"submit":return"click";case"file":return"change";default:return"input"}})},inputs:[],outputs:void 0,output:"eventof",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e){return(function(a){return new Promise(o=>{requestAnimationFrame(()=>{const r=a.closest(".observablehq");if(!r)return o();const i=new e(()=>{r.contains(a)||(i.disconnect(),o())});i.observe(r,{childList:!0})})})})},inputs:["MutationObserver"],outputs:void 0,output:"disposal",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){return e("vega-embed@6")},inputs:["require"],outputs:void 0,output:"embed",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e,t,a,o){let r=JSON.parse(e);r.datasets.mydata=t;let i=t[0].prior_prob_fmt;return t[0].partial_match_weight_fmt,r.title=`Updating a prior probability of ${i} with a partial match weight of ${a.roundToSignificantFigures(o,3)}`,r},inputs:["bf_movement_spec_json","data_for_chart","rlju","partial_match_weight"],outputs:void 0,output:"spec",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(){return`{
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
}`},inputs:[],outputs:void 0,output:"bf_movement_spec_json",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{c as default};
