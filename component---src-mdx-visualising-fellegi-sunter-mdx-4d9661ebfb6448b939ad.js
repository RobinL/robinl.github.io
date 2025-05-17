"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[1394],{3919:function(e,t,a){a.r(t),a.d(t,{default:function(){return Gt},output_order:function(){return Ot}});var n=a(7294),r=a(7848),o=a(8316);function i(e){return e`# Treemap for Bayes Intuition`}function l(e,t){return e.textarea({value:t,rows:29})}function s(e,t){let a=e.comparison_columns.length;return t.range([0,a],{step:1,label:"How many columns to take account of?"})}function m(e){return e`In the following diagram, the outermost rectangle represents the space all pairwise record comparisons.  

This can then be recursively split into subsets, beginning with spliting between record pairs that match and those that do not match, then further splitting these rectangles based on comparisons of the values in columns.
`}function u(e,t,a){return e(t,a,600)}function c(e,t,a,n,r,o,i){return function(l,s,m){const u=e(l),c=t(u,m),_=a`<div class="treemap_container">`,d=n.select(_).append("div").attr("class","svg-tooltip").style("position","absolute").style("display","inline-block").style("visibility","hidden").attr("pointer-events","none"),f=n.select(_).append("svg").attr("height",m).attr("width",r);let b=n.filter(c,(e=>e.depth<=s+1));b=n.group(b,(e=>e.height));const p=f.selectAll("g").data(b).join("g").selectAll("g").data((e=>e[1])).join("g").attr("transform",(e=>`translate(${e.x0},${e.y0})`));return p.append("rect").attr("id",(e=>(e.nodeUid=o.uid("node")).id)).attr("width",(e=>e.x1-e.x0)).attr("height",(e=>e.y1-e.y0)).attr("stroke-width","1px").attr("stroke","black").attr("fill",(e=>{if(e.depth==s+1)return n.rgb(e.data.colour);{let t=n.rgb(e.data.colour);return"#ffffff"!=t.hex()&&(1==e.depth?t.opacity=.3:t.opacity=0),t}})),p.append("foreignObject").attr("pointer-events","none").attr("width",(e=>e.x1-e.x0)).attr("height",(e=>e.y1-e.y0)).attr("xmlns","http://www.w3.org/1999/xhtml").append("xhtml:div").attr("class","wrap-info").append("div").html((e=>i(e,s))),p.filter((e=>e.children)).selectAll("tspan").attr("dx",3).attr("y",13),p.filter((e=>!e.children)).selectAll("tspan").attr("x",3).attr("y",((e,t,a)=>.3*(t===a.length-1)+1.1+.9*t+"em")),f.selectAll("rect").on("mouseover",(function(e){return d.style("visibility","visible")})).on("mousemove",(function(e){let t,a,o=n.select(this).datum(),l=i(o,s);d.html(l);d.node().getBoundingClientRect().height;let m=d.node().getBoundingClientRect().width;t=e.offsetY+10+"px",a=r-e.layerX>m?e.offsetX+10+"px":e.offsetX-m-10+"px";let u="visible";return""==l&&(u="hidden"),d.style("top",t).style("left",a).style("visibility",u)})).on("click",(function(e){console.log(`height: ${m}`),console.log(`event.layerY: ${e.layerY}`)})).on("mouseout",(function(){return d.style("visibility","hidden")})),_}}function _(e){return function t(a,n,r){if("children"in a)a.children.forEach((e=>{t(e,n,r)}));else{let t=e(n,a,r);a.children=t}delete a.value}}function d(e,t,a){return function(n,r,o){let i,l,s=[];return o?(i=n.m_probabilities,l=e):(i=n.u_probabilities,l=t),i.forEach(((e,t)=>{let o="gamma_"+n.col_name+" = "+t,i={name:o,name_list:r.name_list.concat(o),value:r.value*e,prob:e,prob_list:r.prob_list.concat(e)};n.gamma_value==t&&r.colour==l?i.colour=l:i.colour=a.rgb(255,255,255),s.push(i)})),s}}function f(e,t,a,n){return function(r){let o=r.proportion_of_matches,i={name:"All comparisons",name_list:[],prob_list:[],prob:1,colour:e.rgb(255,255,255),children:[{name:"matches",name_list:["match"],prob_list:[o],prob:o,value:o,colour:t},{name:"non-match",name_list:["non-match"],prob_list:[1-o],prob:1-o,value:1-o,colour:a}]},l=i.children[0],s=i.children[1];return r.comparison_columns.forEach(((e,t)=>{n(l,e,!0),n(s,e,!1)})),i}}function b(e,t){return function(a,n){let r=a.data.name_list,o=a.data.prob_list,i=r.map(((e,t)=>[e,o[t]])).map((t=>`<p>${t[0]} (${e(t[1])})`)),l=i.join(" and "),s=o.reduce(((e,t)=>e*t),1);l+=`<p>Proportion of all comparisons: ${e(s)}`;let m=t`${l}`;return a.depth==n+1?m.innerHTML:""}}function p(e){return JSON.parse(e)}function h(e){return JSON.stringify(e)}function v(e){return e`
<style>
.wrap-info {
  padding: 5px;
  font-family: monospace;
  font-size: 0.6em;
  line-height: 1.3em;
}
.wrap-info p {
  margin-top: 0px;
  margin-bottom: 0.1rem;
  
}
textarea {
    max-height: 1000em !important
}

.svg-tooltip {

    background: rgba(69,77,93,.9);
    border-radius: .1rem;
    color: #fff;
    display: inline-block;
    max-width: 500px;
    padding: .2rem .4rem;
    position: absolute;
    text-overflow: ellipsis;
    white-space: pre;
    z-index: 300;
    visibility: hidden;
  }

.svg-tooltip p {
font-family: sans-serif;
    padding: 0;
    margin: 0.2rem;
      font-size: 0.8em;
    line-height: 1.0em;
  }
</style>`}function g(e,t){return(a,n)=>e.treemap().tile(e.treemapSquarify).size([t,n]).paddingOuter(5).paddingTop(5).paddingInner(5).round(!0)(e.hierarchy(a).sum((e=>e.value)).sort(((e,t)=>t.value-e.value)))}function w(){return'{\n    "proportion_of_matches": 0.4,\n    "comparison_columns": [\n        {\n            "col_name": "fname",\n            "m_probabilities": [0.25, 0.75],\n            "u_probabilities": [0.7,  0.3],\n            "gamma_value": 1\n        },\n        {\n            "col_name": "sname",\n            "m_probabilities": [0.2, 0.8],\n            "u_probabilities": [0.8,  0.2],\n            "gamma_value": 0\n        },\n        {\n            "col_name": "dob",\n            "m_probabilities": [0.2, 0.8],\n            "u_probabilities": [0.8,  0.2],\n            "gamma_value": 1\n        },\n        {\n            "col_name": "town",\n            "m_probabilities": [0.2, 0.8],\n            "u_probabilities": [0.8,  0.2],\n            "gamma_value": 1\n        }\n    ]\n}'}function y(e){return e.format(".1%")}function x(e){return e.scaleOrdinal(e.schemeCategory10)}function $(e,t){return e.rgb(t(2)).brighter(2.5)}function k(e,t){return e.rgb(t(1)).brighter(1.5)}function q(e){return e("d3@6")}function E(e){return e("@observablehq/inputs")}function T(){return"Links:\n\nx times more likely: \nhttps://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/\nhttps://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1740-9713.2006.00204.x\n\nOdds are not quite the same as bayes factors:  https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/MIT18_05S14_Reading12b.pdf\n\nhttps://cran.r-project.org/web/packages/BayesFactor/vignettes/odds_probs.html#:~:text=The%20Bayes%20factor%20represents%20the,are%20what%20are%20being%20changed.&text=Further%2C%20these%20odds%20can%20be,models%20sum%20to%20known%20probability.\nThe Bayes factor represents the relative evidence between two models – that is, the change in the model odds due to the data – but the odds are what are being changed. \n\n\nhttps://bookdown.org/kevin_davisross/bayesian-reasoning-and-methods/bayes-factor.html\nRepresenting bayes theorem using bf\n\n"}function j(e,t){return e(t)}function S(e,t){const a=e.module();return a.variable(t()).define(["md"],i),a.variable(t("viewof settings_raw")).define("viewof settings_raw",["inputs","default_settings"],l),a.variable(t("settings_raw")).define("settings_raw",["Generators","viewof settings_raw"],((e,t)=>e.input(t))),a.variable(t("viewof max_depth_1")).define("viewof max_depth_1",["settings","inputs"],s),a.variable(t("max_depth_1")).define("max_depth_1",["Generators","viewof max_depth_1"],((e,t)=>e.input(t))),a.variable(t()).define(["md"],m),a.variable(t()).define(["plot_treemap","settings","max_depth_1"],u),a.variable(t("plot_treemap")).define("plot_treemap",["generate_treemap_data","treemap","html","d3","width","DOM","box_html"],c),a.variable(t("add_children_from_column")).define("add_children_from_column",["children_to_add"],_),a.variable(t("children_to_add")).define("children_to_add",["color_match","color_non_match","d3"],d),a.variable(t("generate_treemap_data")).define("generate_treemap_data",["d3","color_match","color_non_match","add_children_from_column"],f),a.variable(t("box_html")).define("box_html",["format_perc","html"],b),a.variable(t("settings")).define("settings",["settings_raw"],p),a.variable(t()).define(["settings"],h),a.variable(t("styles")).define("styles",["html"],v),a.variable(t("treemap")).define("treemap",["d3","width"],g),a.variable(t("default_settings")).define("default_settings",w),a.variable(t("format_perc")).define("format_perc",["d3"],y),a.variable(t("colours")).define("colours",["d3"],x),a.variable(t("color_match")).define("color_match",["d3","colours"],$),a.variable(t("color_non_match")).define("color_non_match",["d3","colours"],k),a.variable(t("d3")).define("d3",["require"],q),a.variable(t("inputs")).define("inputs",["require"],E),a.variable(t()).define(T),a.variable(t()).define(["generate_treemap_data","settings"],j),a}function A(e){return e`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function N(e){return e`Import Arquero and extend it to print HTML tables in Observable:`}async function P(e,t,a,n){const r=await e(`arquero@${t}`);return(await Promise.all(a.map((t=>e(t))))).forEach((e=>r.addPackage(e))),r.addTableMethod("view",n,{override:!0}),r}function C(){return"4.2.0"}function B(){return[]}function M(e){return e`Export a global reference to Arquero operations:`}function F(e){return e.op}function O(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function W(e){return e`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function G(e){return e`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function I(e){return e`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function L(e){return e`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function z(e){return e.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function R(e){return e`Sorted differences between Seattle and Chicago:`}function U(e,t){return e.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function Z(e){return e`Is Seattle more correlated with San Francisco or Chicago?`}function H(e,t){return e.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function J(e){return e`Summary statistics per city, as output objects:`}function K(e,t,a){return e.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:e=>a.min(e.sun),max:e=>a.max(e.sun),avg:e=>a.average(e.sun),med:e=>a.median(e.sun),skew:({sun:e})=>(a.mean(e)-a.median(e))/a.stdev(e)||0}).objects()}function V(e){return e`<hr>
## Utilities
`}function Y(e){const t=e=>`<span style="color: #999;">${e}</span>`;return function(a,n={}){"number"==typeof n&&(n={limit:n});const r={...n.color};if("function"==typeof n.color)a.columnNames().forEach((e=>r[e]=n.color));else for(const e in r){const t=r[e];r[e]="function"==typeof t?t:()=>t}const o=(e,t,a)=>`padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; max-width: ${+n.maxCellWidth||300}px;`+(r[e]?` background-color: ${r[e](t,a)};`:""),i=`max-height: ${+(n={limit:100,null:t,...n,style:{table:"margin: 0; border-collapse: collapse; width: initial;",td:o,th:o}}).height||270}px`,l=e`<div style="${`${i}; overflow-x: auto; overflow-y: auto;`}">${a.toHTML(n)}</div>`;return l.value=a,l}}function D(e,t){const a=e.module();return a.variable(t()).define(["md"],A),a.variable(t()).define(["md"],N),a.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],P),a.variable(t("aq_version")).define("aq_version",C),a.variable(t("aq_packages")).define("aq_packages",B),a.variable(t()).define(["md"],M),a.variable(t("op")).define("op",["aq"],F),a.variable(t()).define(["md"],O),a.variable(t()).define(["md"],W),a.variable(t()).define(["md"],G),a.variable(t()).define(["md"],I),a.variable(t()).define(["md"],L),a.variable(t("dt")).define("dt",["aq"],z),a.variable(t()).define(["md"],R),a.variable(t()).define(["dt","op"],U),a.variable(t()).define(["md"],Z),a.variable(t()).define(["dt","op"],H),a.variable(t()).define(["md"],J),a.variable(t()).define(["dt","aq","op"],K),a.variable(t()).define(["md"],V),a.variable(t("toView")).define("toView",["html"],Y),a}function X(e){return e`# Fellegi Sunter utils`}function Q(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function ee(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function te(e,t){return e.from(t)}function ae(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function ne(e,t,a){return e(t,a)}function re(e){return e.view()}function oe(e,t,a){return e(t,a)}function ie(e){return e.view()}function le(e,t,a,n){return e(t,a,n).view()}function se(e,t){return function(a,n,r={}){let o=a.objects().map((function(t){return t.match_probability=e(t,n,r),t})),i=t.from(o);return i=i.relocate(["match_probability"],{after:"uid_r"}),i}}function me(e,t){return function(a,n,r={}){let o=n.comparison_columns,i=e(n.proportion_of_matches),l=o.reduce(((e,t)=>{let n="𝛾_"+t.col_name,o=a[n];if(-1==o)return e;let i=t.m_probabilities[o],l=t.u_probabilities[o],s=a[t.col_name+"_l"].toLowerCase(),m=a[t.col_name+"_r"].toLowerCase();if(s==m&&t.col_name in r){let e=r[t.col_name],a=e[s]||0,n=e[m]||0,o=Math.max(a,n);o>0&&(l=o)}return e+Math.log2(i/l)}),i);return t(l)}}function ue(e,t){return function(a,n,r){null==r&&(r=n.comparison_columns.length);let o=n.comparison_columns.slice(0,r),i=e(n.proportion_of_matches),l={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:n.proportion_of_matches};o.forEach((e=>{let t="𝛾_"+e.col_name,n=a[t],r=e.m_probabilities[n],o=e.u_probabilities[n],i=e.col_name.replace("_","\\_");l.comparison_vector.push(n),l.gamma_symbols.push(`\\gamma_\\text{${i}}`),l.col_names.push(t),l.m_values.push(r),l.m_symbols.push(`m_{\\text{${i}},${n}}`),l.u_values.push(o),l.u_symbols.push(`u_{\\text{${i}},${n}}`),l.bayes_factors.push(r/o),l.log2_bayes_factors.push(Math.log2(r/o))}));let s=l.log2_bayes_factors.reduce(((e,t)=>e+t),i);l.match_probability=t(s);let m=n.proportion_of_matches;return l.size_of_match_portion=m*l.m_values.reduce(((e,t)=>e*t),1),l.size_of_non_match_portion=(1-m)*l.u_values.reduce(((e,t)=>e*t),1),l}}function ce(e){return function(t,a,n){let r=e(t,a,n),o=r.m_values.map((e=>e.toPrecision(3))),i=r.u_values.map((e=>e.toPrecision(3))),l=r.lam.toPrecision(3),s=[l].concat(o),m=[`(1 - ${l})`].concat(i),u=s.join(" \\times "),c=m.join(" \\times "),_=r.match_probability.toPrecision(3),d=r.size_of_match_portion.toPrecision(3);return`\\frac{${u}}{(${u}) + (${c})}  \\newline[10pt] = \\frac{${d}}{${d} + ${r.size_of_non_match_portion.toPrecision(3)}}  \\newline[10pt] = ${_}`}}function _e(e){return function(t,a){let n=e(t,a),r=n.m_symbols,o=n.u_symbols,i=(n.lam,["\\lambda"].concat(r)),l=["(1 - \\lambda)"].concat(o),s=i.join(" ");return`\\frac{${s}}{${s}) + ${l.join(" ")}}`}}function de(e,t,a,n){return e`${t(a.objects()[0],n)}
`}function fe(e){return function(t,a,n){let r=e(t,a,n);return`\\bm{\\gamma} = [${r.gamma_symbols.join(", ")}]= [${r.comparison_vector.join(", ")}]`}}function be(e,t,a,n){return e`${t(a.objects()[0],n)}
`}function pe(e){return e`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function he(e,t,a,n){return e`${t(a.objects()[0],n)}`}function ve(e,t,a){return e(t.objects()[0],a)}function ge(e){return function(t,a){let n=e.from(t),r=e.from(a),o=n.join(r,((e,t)=>!0),null,{suffix:["_l","_r"]}),i=n.columnNames(),l=[];return i.forEach((e=>{l.push(e+"_l"),l.push(e+"_r")})),o=o.select(l),o}}function we(e){return function(t,a){let n=a.comparison_columns,r=t.objects();n.forEach((function(e){r.forEach((function(t){t["𝛾_"+e.col_name]=e.case_expression(t)}))})),r=e.from(r);let o=["uid_l","uid_r"];return n.forEach((e=>{o.push(e.col_name+"_l"),o.push(e.col_name+"_r"),o.push("𝛾_"+e.col_name)})),r=r.select(o),r}}function ye(){return function(e){return e/(e+1)}}function xe(e){return function(t){return e(2**t)}}function $e(){return function(e){return e/(1-e)}}function ke(e){return function(t){return Math.log2(e(t))}}function qe(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function Ee(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.surname]=e.freq})),t}))}function Te(e,t){return{fname:e,sname:t}}function je(e){return e.fname.joshua}function Se(e){return e.sname.linacre}function Ae(e,t){const a=e.module();a.variable(t()).define(["md"],X),a.variable(t("records_l")).define("records_l",Q),a.variable(t("records_r")).define("records_r",ee),a.variable(t("df_r")).define("df_r",["aq","records_r"],te),a.variable(t("splink_settings")).define("splink_settings",ae),a.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],ne),a.variable(t()).define(["df_comparison"],re),a.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],oe),a.variable(t()).define(["df_gammas"],ie),a.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],le),a.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],se),a.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],me),a.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],ue),a.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],ce),a.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],_e),a.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],de),a.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],fe),a.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],be),a.variable(t()).define(["tex"],pe),a.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],he),a.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],ve),a.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],ge),a.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],we),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",ye),a.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],xe),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",$e),a.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],ke);const n=e.module(D);return a.import("aq",n),a.import("op",n),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],qe),a.variable(t("surname_lookup")).define("surname_lookup",["d3"],Ee),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Te),a.variable(t()).define(["term_freqs"],je),a.variable(t()).define(["term_freqs"],Se),a}function Ne(e){return e`# Fellegi-Sunter visualisation interface`}function Pe(e,t,a){return function(n){let r=1==n.gamma_value?"match":"mismatch";const o=e.radio(["match","mismatch"],{label:`Comparison of ${n.col_name} is a:`,value:r}),i=e.range([0,1],{label:t`u_\text{${n.col_name},level\_0}`,value:n.u_probabilities[0]}),l=e.range([0,1],{label:t`u_\text{${n.col_name},level\_1}`,value:n.u_probabilities[1]}),s=e.range([0,1],{label:t`m_\text{${n.col_name},level\_0}`,value:n.m_probabilities[0]}),m=e.range([0,1],{label:t`m_\text{${n.col_name},level\_1}`,value:n.m_probabilities[1]}),u=a`
    <h4>Choose value and parameters for ${n.col_name}</h4>
    ${o}
    <div class="container">
      <div class="item-0">${i}${s}</div>
      <div class="item-1">${l}${m}</div>
    </div>
  `;let c=()=>({col_name:n.col_name,gamma_value:o.querySelector("input").checked?1:0,u_probabilities:[i.value,l.value],m_probabilities:[s.value,m.value]});return o.onclick=()=>{console.log(o.value),u.value=c()},i.oninput=()=>{l.value=1-i.value,u.value=c()},l.oninput=()=>{i.value=1-l.value,u.value=c()},s.oninput=()=>{m.value=1-s.value,u.value=c()},m.oninput=()=>{s.value=1-m.value,u.value=c()},u.value=c(),u}}function Ce(e){return e({col_name:"fname",gamma_value:1,m_probabilities:[.3,.7],u_probabilities:[.75,.25]})}function Be(e){return e}function Me(e){return e({col_name:"sname",gamma_value:0,m_probabilities:[.2,.8],u_probabilities:[.85,.15]})}function Fe(e){return e({col_name:"dob",gamma_value:1,m_probabilities:[.2,.8],u_probabilities:[.8,.2]})}function Oe(e){return e({col_name:"town",gamma_value:1,m_probabilities:[.3,.7],u_probabilities:[.9,.1]})}function We(e,t){return e.range([0,1],{label:t`\lambda`,value:.3})}function Ge(e,t,a,n,r){return{proportion_of_matches:e,comparison_columns:[t,a,n,r]}}function Ie(e){return e`<style>.container {
  display: flex;
flex-wrap: wrap;
  gap: 12px;
}
</style>
`}function Le(e){return e("@observablehq/inputs")}function ze(e,t){const a=e.module();return a.variable(t()).define(["md"],Ne),a.variable(t("my_interface")).define("my_interface",["inputs","tex","html"],Pe),a.variable(t("viewof fname_val")).define("viewof fname_val",["my_interface"],Ce),a.variable(t("fname_val")).define("fname_val",["Generators","viewof fname_val"],((e,t)=>e.input(t))),a.variable(t()).define(["fname_val"],Be),a.variable(t("viewof sname_val")).define("viewof sname_val",["my_interface"],Me),a.variable(t("sname_val")).define("sname_val",["Generators","viewof sname_val"],((e,t)=>e.input(t))),a.variable(t("viewof dob_val")).define("viewof dob_val",["my_interface"],Fe),a.variable(t("dob_val")).define("dob_val",["Generators","viewof dob_val"],((e,t)=>e.input(t))),a.variable(t("viewof town_val")).define("viewof town_val",["my_interface"],Oe),a.variable(t("town_val")).define("town_val",["Generators","viewof town_val"],((e,t)=>e.input(t))),a.variable(t("viewof lam")).define("viewof lam",["inputs","tex"],We),a.variable(t("lam")).define("lam",["Generators","viewof lam"],((e,t)=>e.input(t))),a.variable(t("splink_settings")).define("splink_settings",["lam","fname_val","sname_val","dob_val","town_val"],Ge),a.variable(t("form_styles")).define("form_styles",["html"],Ie),a.variable(t("inputs")).define("inputs",["require"],Le),a}function Re(e){return e`# Visualising the Fellegi Sunter model `}function Ue(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/visualising_fellegi_sunter/).*`}function Ze(e,t){return e`The [previous article](https://www.robinlinacre.com/maths_of_fellegi_sunter/) presented an implementation of the Fellegi Sunter model.  We showed that match probability could be represented by Equation 1 - which is reproduced below:
${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}

`}function He(e){return e`This article presents a way to understand and visualise this formula.`}function Je(e){return e`In our visualisation, we are going to take each piece of evidence into account in turn. This is possible due to our assumption of conditional independence of comparison columns given the match status.

The means Equation 1 is equivalent to a repeated application of Bayes' Theorem (see annex). See [here](https://www.youtube.com/watch?v=HZGCoVF3YvM) is more in depth video about Bayes Theorem.
`}function Ke(e){return e`## Example

We are going to compute match probability for a record comparison with the following comparison columns:

- \`fname\` (first name)
- \`sname\` (surname)
- \`dob\` (date of birth)
- \`town\` 


The default parameter values are a bit unrealistic, but help make sure the diagrams are legible.
`}function Ve(e){return e`## Step 1`}function Ye(e,t,a,n){return e`We begin by visualising the space of all pairwise record comparisons, splitting the overall comparison space into ${t`matches`} and ${a`non-matches`} using our prior, ${n`\operatorname{Pr}(\text{records match}) =  \lambda`}`}function De(e){return e}function Xe(e,t){return e(t,0,300)}function Qe(e,t,a,n,r){return e`Using only this information, our estimate of match probability is just the prior:

${t`\text{match probability} =  \frac{\lambda }{\lambda + (1-\lambda)}  \newline [10pt] = \frac{\colorbox{${a.hex()}}{\text{yellow area}}}{\colorbox{${a.hex()}}{\text{yellow area}} + \colorbox{${n.hex()}}{\text{blue area}} }= ${r.proportion_of_matches.toPrecision(4)} `}

`}function et(e){return e`## Step 2 - First name`}function tt(e){return e`We will now choose the parameters of the model for the first name field, and then take this information into account in the diagram.`}function at(e){return e}function nt(e,t,a,n,r,o,i,l,s){return e` ${t("fname",a)}
An example of the data would be:
${n(r(1))}

According to the model parameters you've chosen:


- ${o("fname",i(1),a,"m")}
- ${o("fname",i(1),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${s`blue`} part of the following diagram:
`}function rt(e,t){return e(t,1,300)}function ot(e,t,a,n,r,o,i,l,s){return e` What's the probability we're in the ${t`yellow`} area?  This must be:

${a`\text{match probability} = \frac{\colorbox{${n.hex()}}{\text{yellow area}}}{\colorbox{${n.hex()}}{\text{yellow area}} + \colorbox{${r.hex()}}{\text{blue area}} } `}

From this diagram we can see that the ${o`\colorbox{${n.hex()}}{$\text{yellow area} = \lambda m_{1\ell}$}`} and the 
${o`\colorbox{${r.hex()}}{$\text{blue area} = (1-\lambda) u_{1\ell}$}`}.

So:

${a`\text{match probability} =  \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

Which, in numbers is:

${o`${i(l(2),s,1)}`}
`}function it(e){return e`## Step 3 - Surname`}function lt(e){return e`Let's also choose parameters for \`sname\`, the surname field:`}function st(e){return e}function mt(e,t,a,n,r,o,i,l,s){return e`${t("sname",a)}
An example of the data would be:
${n(r(2))}

According to the model parameters you've chosen:


- ${o("sname",i(2),a,"m")}
- ${o("sname",i(2),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${s`blue`} part of the following diagram:`}function ut(e,t){return e(t,2,300)}function ct(e,t,a,n,r,o,i){return e`We now have:

${t`\text{match probability} = \frac{\colorbox{${a.hex()}}{\text{yellow area}}}{\colorbox{${a.hex()}}{\text{yellow area}} + \colorbox{${n.hex()}}{\text{blue area}} } `}

${t`= \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}}`}

Which, in numbers is:

${t`${r(o(2),i,2)}`}
`}function _t(e){return e`## Step 4 - Date of birth`}function dt(e){return e}function ft(e,t,a,n,r,o,i,l,s){return e` ${t("dob",a)}
An example of the data would be:
${n(r(3))}

According to the model parameters you've chosen:


- ${o("dob",i(3),a,"m")}
- ${o("dob",i(3),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${s`blue`} part of the following diagram:
`}function bt(e,t){return e(t,3,300)}function pt(e,t,a,n,r){return e`We now have:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}}`}

${t`${a(n(3),r,3)}`}
`}function ht(e){return e`## Step 5: Town`}function vt(e){return e}function gt(e,t,a,n,r,o,i,l,s){return e`The final column is town.

${t("town",a)}
An example of the final data would be:
${n(r(4))}

According to the model parameters you've chosen:


- ${o("town",i(4),a,"m")}
- ${o("town",i(4),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${s`blue`} part of the following diagram:
`}function wt(e,t){return e(t,4,300)}function yt(e,t,a,n,r,o){return e`The final match probability is therefore:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}u_{4\ell}}`}

Which, in numbers is:


${a`${n(r(4),o)}`}
`}function xt(e,t,a){return e`## Annex:  Mathematical representation

This annex shows why it's possible to represent the calculation of match probability as a step-by-step computation.  

In particular, we will show that we can calculate match probability using a repeated application of Bayes Theorem.  In pseudocode, our algorithm will be:

\`\`\`
prior = lambda
for col in compaison_columns:
  posterior = bayes(col, prior)
  prior = posterior
\`\`\`


Where the final value of the posterior is equal to ${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})`}.

To demonstrate why this works, consider equation 1, for the case of two columns:

${a`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{1\ell}} \tag{2.1}`}

We start by applying Bayes Theorem once, accounting for the first comparison column:

${a`
\operatorname{Pr}(\text{records match}|\gamma_{1}) = t = \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

This posterior, ${t`t`}, becomes the new prior, which we now use instead of lambda:
${a`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{t m_{2\ell}}{t m_{2\ell}+ (1-t)u_{2\ell}}\tag{2.2}`}

Note that:

${a`
1- t = 1 - \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell} - \lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{(1-\lambda)u_{1\ell} }{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}\tag{2.3}`}

But ${t`(2.3)`} shows that  the term ${t`(\lambda m_{1\ell}+ (1-\lambda)u_{1\ell})`} appears on both top and bottom of ${t`(2.2)`} and therefore cancels, leaving ${t`(2.1)`}  as desired.

`}function $t(e){return e.options({displayMode:!0,fleqn:!0})}function kt(e,t,a){return e`<style>
.katex-display>.katex { font-size: 1em}


textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}

.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}

.hl_m {
background-color: ${t.hex()};
display:inline-block;
}

.hl_nm {
background-color: ${a.hex()};
display:inline-block;
}

</style>`}function qt(e){return function(t){let a={},n={fname:[{fname_l:"John",fname_r:"Tom"},{fname_l:"John",fname_r:"John"}],sname:[{sname_l:"Smith",sname_r:"Hanks"},{sname_l:"Smith",sname_r:"Smith"}],dob:[{dob_l:"1989-03-02",dob_r:"1981-08-21"},{dob_l:"1989-03-02",dob_r:"1989-03-02"}],town:[{town_l:"Bristol",town_r:"Peckham"},{town_l:"Bristol",town_r:"Bristol"}]};return e.comparison_columns.slice(0,t).forEach((e=>{let t=n[e.col_name][e.gamma_value];a={...a,...t};let r="𝛾_"+e.col_name;a[r]=e.gamma_value})),a}}function Et(e){return function(t){let a=e(t),n=Object.keys(a).filter((e=>!e.includes("𝛾_"))),r={};return n.forEach((e=>{r[e]=a[e]})),r}}function Tt(e){return function(t){let a=Object.keys(t).join(" | "),n=Object.keys(t).map((e=>"-")).join(" | "),r=Object.values(t).join(" | ");return e`${a} \n ${n} \n ${r} \n`}}function jt(e){return e}function St(e){return function(t){return e`<span class="hl_nm">${t}</span>`}}function At(e){return function(t){return e`<span class="hl_m">${t}</span>`}}function Nt(e){return e}function Pt(e,t,a){return function(n,r,o,i){let l,s=o.comparison_columns.filter((e=>e.col_name==n))[0],m=r["𝛾_"+n];1==m?l="matches":0==m&&(l="does not match");n.replace("_","\\_");let u,c=`The column \`${n}\` ${l}`,_=100*s[`${i}_probabilities`][m];return _=parseFloat(_).toFixed(0)+"%",u="m"==i?e`matching records`:t`non-matching records`,a`${c} in ${_} of ${u}`}}function Ct(e,t){return function(a,n){let r,o;n.comparison_columns.forEach((e=>{e.col_name==a&&(r=e)}));let i=r.gamma_value;return o=0==i?"does not match":"matches",e`You have chosen that the column \`${a}\` ${o}, i.e. that ${t`\gamma_\text{${a}}`} = ${i}.`}}function Bt(e){return e("@observablehq/inputs")}function Mt(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],Re),a.variable(t()).define(["md"],Ue),a.variable(t("para_1")).define("para_1",["md","texd"],Ze),a.variable(t("para_2")).define("para_2",["md"],He),a.variable(t("para_3")).define("para_3",["md"],Je),a.variable(t("para_4")).define("para_4",["md"],Ke),a.variable(t("subhead_1")).define("subhead_1",["md"],Ve),a.variable(t("para_5")).define("para_5",["md","m","nm","tex"],Ye),a.variable(t("lam_view")).define("lam_view",["viewof lam"],De),a.variable(t("treemap_1")).define("treemap_1",["plot_treemap","splink_settings"],Xe),a.variable(t("para_6")).define("para_6",["md","texd","color_match","color_non_match","splink_settings"],Qe),a.variable(t("subhead_2")).define("subhead_2",["md"],et),a.variable(t("para_7")).define("para_7",["md"],tt),a.variable(t("fname_view")).define("fname_view",["viewof fname_val"],at),a.variable(t("para_8")).define("para_8",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],nt),a.variable(t("treemap_2")).define("treemap_2",["plot_treemap","splink_settings"],rt),a.variable(t("para_9")).define("para_9",["md","m","texd","color_match","color_non_match","tex","get_m_u_formula_numbers","get_row","splink_settings"],ot),a.variable(t("subhead_3")).define("subhead_3",["md"],it),a.variable(t("para_10")).define("para_10",["md"],lt),a.variable(t("sname_view")).define("sname_view",["viewof sname_val"],st),a.variable(t("para_11")).define("para_11",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],mt),a.variable(t("treemap_3")).define("treemap_3",["plot_treemap","splink_settings"],ut),a.variable(t("para_12")).define("para_12",["md","texd","color_match","color_non_match","get_m_u_formula_numbers","get_row","splink_settings"],ct),a.variable(t("subhead_4")).define("subhead_4",["md"],_t),a.variable(t("dob_view")).define("dob_view",["viewof dob_val"],dt),a.variable(t("para_13")).define("para_13",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],ft),a.variable(t("treemap_4")).define("treemap_4",["plot_treemap","splink_settings"],bt),a.variable(t("para_14")).define("para_14",["md","texd","get_m_u_formula_numbers","get_row","splink_settings"],pt),a.variable(t("subhead_5")).define("subhead_5",["md"],ht),a.variable(t("town_view")).define("town_view",["viewof town_val"],vt),a.variable(t("para_15")).define("para_15",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],gt),a.variable(t("treemap_5")).define("treemap_5",["plot_treemap","splink_settings"],wt),a.variable(t("para_16")).define("para_16",["md","texd","tex","get_m_u_formula_numbers","get_row","splink_settings"],yt),a.variable(t("annex")).define("annex",["md","tex","texd"],xt),a.variable(t("texd")).define("texd",["tex"],$t),a.variable(t("css_styles")).define("css_styles",["html","color_match","color_non_match"],kt);const n=e.module(S);a.import("default_settings",n),a.variable(t("get_row")).define("get_row",["splink_settings"],qt),a.variable(t("get_row_no_gammas")).define("get_row_no_gammas",["get_row"],Et);const r=e.module(Ae);a.import("get_m_u_formula_symbols",r),a.import("get_m_u_formula_numbers",r),a.import("get_comparison_vector_symbols_and_numbers",r),a.import("get_match_probability_components",r),a.variable(t("dict_as_md_table_row")).define("dict_as_md_table_row",["md"],Tt);const o=e.module(S);a.import("styles",o),a.import("plot_treemap",o),a.import("color_match",o),a.import("color_non_match",o),a.variable(t("additional_styles")).define("additional_styles",["styles"],jt),a.variable(t("nm")).define("nm",["html"],St),a.variable(t("m")).define("m",["html"],At);const i=e.module(ze);return a.import("splink_settings",i),a.import("viewof lam",i),a.import("lam",i),a.import("viewof fname_val",i),a.import("fname_val",i),a.import("viewof sname_val",i),a.import("sname_val",i),a.import("viewof dob_val",i),a.import("dob_val",i),a.import("viewof town_val",i),a.import("town_val",i),a.import("form_styles",i),a.variable(t("styles2")).define("styles2",["form_styles"],Nt),a.variable(t("get_m_u_text")).define("get_m_u_text",["m","nm","md"],Pt),a.variable(t("choice_text")).define("choice_text",["md","tex"],Ct),a.variable(t("inputs")).define("inputs",["require"],Bt),a}var Ft=a(5860);a(2692),a(6702);const Ot=["additional_styles","title","para_1","para_2","para_3","para_4","subhead_1","para_5","lam_view","treemap_1","para_6","subhead_2","para_7","fname_view","para_8","treemap_2","para_9","subhead_3","para_10","sname_view","para_11","treemap_3","para_12","subhead_4","dob_view","para_13","treemap_4","para_14","subhead_5","town_view","para_15","treemap_5","para_16","annex","additional_styles","styles2","css_styles"];function Wt(e){return n.createElement(n.Fragment,null,n.createElement(o.Z),"\n",n.createElement(Ft.Z,{notebook:Mt,cells:Ot}),"\n",n.createElement(o.Z))}var Gt=function(e){return void 0===e&&(e={}),n.createElement(r.pY,e,n.createElement(Wt,e))}},6702:function(e,t,a){var n=a(7294),r=a(4160);t.Z=e=>{var t,a,o,i,l,s;let{frontmatter:m}=e;const{tutorial_number:u}=m,c=(0,r.K2)("4236107564"),_=c.allMdx.edges.map((e=>e.node.frontmatter.tutorial_number)),d=_.includes(u-1),f=_.includes(u+1),b=null===(t=c.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===u-1)))||void 0===t||null===(a=t.node)||void 0===a||null===(o=a.fields)||void 0===o?void 0:o.slug,p=null===(i=c.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===u+1)))||void 0===i||null===(l=i.node)||void 0===l||null===(s=l.fields)||void 0===s?void 0:s.slug;return n.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},n.createElement("div",{className:"flex justify-between"},n.createElement("div",{className:"w-1/3 text-left"},d&&n.createElement(r.rU,{to:b,className:"text-blue-500 hover:underline"},"← Previous article")),n.createElement("div",{className:"w-1/3 text-center"},n.createElement("span",null,"This is part ",u," of the"," ",n.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"tutorial"))),n.createElement("div",{className:"w-1/3 text-right"},f&&n.createElement(r.rU,{to:p,className:"text-blue-500 hover:underline"},"Next article →"))))}},5860:function(e,t,a){var n=a(7294),r=a(6493);const o="mdx-container-div",i=new r.Zu,l=Object.assign({},i,{width:function(){return i.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function a(){let a=document.getElementById(o).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}});t.Z=function(e){let{notebook:t,cells:a,customClassName:o}=e;const i=(0,n.useRef)(a.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new r.r_(l);return e.module(t,(e=>{const t=a.indexOf(e);if(-1!==t)return new r.lj(i.current[t].current)})),()=>e.dispose()}),[t,a]),n.createElement("div",{className:o},i.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},8316:function(e,t,a){var n=a(7294),r=a(4160);t.Z=()=>n.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},n.createElement("div",{className:"flex justify-center items-center"},n.createElement("div",{className:"text-center"},n.createElement("span",null,"This article is part of the ",n.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"probabilistic linkage training materials")))))},2692:function(e,t,a){var n=a(7294),r=a(4160);t.Z=e=>{let{frontmatter:t}=e;const{tutorial_number:a,title:o}=t,i=(0,r.K2)("1842021157").allMdx.edges.sort(((e,t)=>e.node.frontmatter.tutorial_number-t.node.frontmatter.tutorial_number));return n.createElement("div",{className:"bg-blue-100  p-4 mt-8  mb-4 rounded-lg "},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-blue-800 font-semibold text-base mb-2"},n.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"Probabilistic Linkage Tutorial Navigation:")),n.createElement("ol",{className:"space-y-2 text-sm"},i.map((e=>n.createElement("li",{key:e.node.frontmatter.tutorial_number,className:"text-blue-600 text-sm"},a===e.node.frontmatter.tutorial_number?n.createElement("span",{className:"font-bold text-sm"},e.node.frontmatter.title):n.createElement(r.rU,{to:e.node.fields.slug,className:"hover:underline"},e.node.frontmatter.title)))))))}}}]);
//# sourceMappingURL=component---src-mdx-visualising-fellegi-sunter-mdx-4d9661ebfb6448b939ad.js.map