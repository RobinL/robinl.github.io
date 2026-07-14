import{I as s}from"./NotebookCellProvider.BvOhHDPU.js";import m from"./vega-embed.module.DiVocoQ4.js";import{c as _}from"./observable-vega-embed.Ca3N63KR.js";import{renderWaterfallChart as p}from"./charts.Dm-LFNDN.js";import{settingsToWaterfall as b}from"./model.J3o_o32z.js";const u=`{
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
}`;function k(t,e,i,a){return{"𝛾_fname":+(t==="Values match"),"𝛾_sname":+(e==="Values match"),"𝛾_dob":+(i==="Values match"),"𝛾_town":+(a==="Values match")}}function l(t){return t.comparison_columns.flatMap(e=>e.m_probabilities.map((i,a)=>{const o=e.u_probabilities[a];return{column_name:e.col_name,level_name:`level_${a}`,gamma_index:a,m_probability:i,u_probability:o,bayes_factor:i/o,log2_bayes_factor:Math.log2(i/o)}}))}async function c(t){return _(m)(t)}function f(t){const e=l(t);return c({$schema:"https://vega.github.io/schema/vega-lite/v5.json",data:{values:e},title:{text:"Probability distributions of non-matches and matches",subtitle:`Estimated proportion of matches λ = ${t.proportion_of_matches}`},hconcat:[{title:"Non-matches",mark:{type:"bar",color:"red"},encoding:{row:{field:"column_name",type:"nominal"},x:{field:"u_probability",type:"quantitative",title:"proportion"},y:{field:"level_name",type:"nominal",title:null}}},{title:"Matches",mark:{type:"bar",color:"green"},encoding:{row:{field:"column_name",type:"nominal"},x:{field:"m_probability",type:"quantitative",title:"proportion"},y:{field:"level_name",type:"nominal",title:null}}}]})}function h(t){return c({$schema:"https://vega.github.io/schema/vega-lite/v5.json",data:{values:l(t)},title:{text:"Influence of comparison vector values on match probability",subtitle:`Estimated proportion of matches λ = ${t.proportion_of_matches.toPrecision(4)}`},mark:"bar",encoding:{row:{field:"column_name",type:"nominal"},x:{field:"log2_bayes_factor",type:"quantitative",title:"log2(Bayes factor, K = m/u)",scale:{domain:[-10,10]}},y:{field:"level_name",type:"nominal",title:null},color:{field:"log2_bayes_factor",type:"quantitative",scale:{domain:[-10,0,10],range:["red","orange","green"]}}}})}function d(t,e){const i=e.proportion_of_matches/(1-e.proportion_of_matches),a=[{label:"Prior",weight:Math.log2(i),order:0}];return e.comparison_columns.forEach((o,r)=>{const n=t[`𝛾_${o.col_name}`]??0;a.push({label:o.col_name,weight:Math.log2(o.m_probabilities[n]/o.u_probabilities[n]),order:r+1})}),a}function y(t,e){const a=2**d(t,e).reduce((o,r)=>o+r.weight,0);return a/(1+a)}function g(t,e){const i={link_type:"dedupe_only",probability_two_random_records_match:e.proportion_of_matches,comparisons:e.comparison_columns.map(o=>({output_column_name:o.col_name,comparison_description:`Match versus non-match for ${o.col_name}`,comparison_levels:[1,0].map(r=>({sql_condition:r?"Values match":"Values do not match",label_for_charts:r?"Values match":"Values do not match",m_probability:o.m_probabilities[r],u_probability:o.u_probabilities[r]}))}))},a=Object.fromEntries(Object.entries(t).map(([o,r])=>[o.replace("𝛾_","γ_"),r]));return p(b(i,a),!1)}const q=s,x=u,E=f,N=h,j=(t,e)=>g(t,e),O=(t,e)=>({match_probability:y(t,e)});export{s as Inputs,k as comparisonRow,u as defaultSplinkSettings,x as default_splink_settings,N as get_bayes_factor_chart,E as get_m_u_chart,O as get_match_probability_components,j as get_waterfall_chart,q as inputs,y as matchProbability,h as renderBayesFactorChart,f as renderMandUChart,g as renderWaterfall,d as waterfallData};
