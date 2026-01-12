"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[122],{5897:function(e,t,a){a.r(t),a.d(t,{Head:function(){return zt},default:function(){return Gt},output_order:function(){return Kt}});var r=a(1151),n=a(7294),o=a(6965),i=a(7825);function l(e){return e`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function s(e){return e`Import Arquero and extend it to print HTML tables in Observable:`}async function m(e,t,a,r){const n=await e(`arquero@${t}`);return(await Promise.all(a.map((t=>e(t))))).forEach((e=>n.addPackage(e))),n.addTableMethod("view",r,{override:!0}),n}function c(){return"4.2.0"}function u(){return[]}function _(e){return e`Export a global reference to Arquero operations:`}function d(e){return e.op}function f(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function b(e){return e`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function p(e){return e`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function h(e){return e`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function v(e){return e`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function g(e){return e.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function w(e){return e`Sorted differences between Seattle and Chicago:`}function y(e,t){return e.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function x(e){return e`Is Seattle more correlated with San Francisco or Chicago?`}function k(e,t){return e.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function q(e){return e`Summary statistics per city, as output objects:`}function E(e,t,a){return e.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:e=>a.min(e.sun),max:e=>a.max(e.sun),avg:e=>a.average(e.sun),med:e=>a.median(e.sun),skew:({sun:e})=>(a.mean(e)-a.median(e))/a.stdev(e)||0}).objects()}function $(e){return e`<hr>
## Utilities
`}function P(e){const t=e=>`<span style="color: #999;">${e}</span>`;return function(a,r={}){"number"==typeof r&&(r={limit:r});const n={...r.color};if("function"==typeof r.color)a.columnNames().forEach((e=>n[e]=r.color));else for(const e in n){const t=n[e];n[e]="function"==typeof t?t:()=>t}const o=(e,t,a)=>`padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; max-width: ${+r.maxCellWidth||300}px;`+(n[e]?` background-color: ${n[e](t,a)};`:""),i=`max-height: ${+(r={limit:100,null:t,...r,style:{table:"margin: 0; border-collapse: collapse; width: initial;",td:o,th:o}}).height||270}px`,l=e`<div style="${`${i}; overflow-x: auto; overflow-y: auto;`}">${a.toHTML(r)}</div>`;return l.value=a,l}}function T(e,t){const a=e.module();return a.variable(t()).define(["md"],l),a.variable(t()).define(["md"],s),a.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],m),a.variable(t("aq_version")).define("aq_version",c),a.variable(t("aq_packages")).define("aq_packages",u),a.variable(t()).define(["md"],_),a.variable(t("op")).define("op",["aq"],d),a.variable(t()).define(["md"],f),a.variable(t()).define(["md"],b),a.variable(t()).define(["md"],p),a.variable(t()).define(["md"],h),a.variable(t()).define(["md"],v),a.variable(t("dt")).define("dt",["aq"],g),a.variable(t()).define(["md"],w),a.variable(t()).define(["dt","op"],y),a.variable(t()).define(["md"],x),a.variable(t()).define(["dt","op"],k),a.variable(t()).define(["md"],q),a.variable(t()).define(["dt","aq","op"],E),a.variable(t()).define(["md"],$),a.variable(t("toView")).define("toView",["html"],P),a}function S(e){return e`# Record Utilities`}function F(e){return class{constructor(e){this.record_dict=e}as_dict(){return this.record_dict}as_aq(){return e.from([this.record_dict])}display(){return this.as_aq().view()}}}function j(e){return class{constructor(e,t){this.record_l=e,this.record_r=t}as_long(){let t=[this.record_l.as_dict(),this.record_r.as_dict()];return e.from(t)}as_wide(){let e=this.record_l.as_aq(),t=this.record_r.as_aq(),a=e.join(t,((e,t)=>!0),null,{suffix:["_l","_r"]}),r=e.columnNames(),n=[];return r.forEach((e=>{n.push(e+"_l"),n.push(e+"_r")})),a=a.select(n),a}display(e="long"){return"long"==e?this.as_long().view():"wide"==e?this.as_wide().view():void 0}}}function C(e,t){const a=e.module();a.variable(t()).define(["md"],S),a.variable(t("Record")).define("Record",["aq"],F),a.variable(t("RecordComparison")).define("RecordComparison",["aq"],j);const r=e.module(T);return a.import("aq",r),a.import("op",r),a}function A(e){return e`# Waterfall chart`}function N(e){return e`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`}function B(e){return e`## Example`}function R(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]}]}}function W(){return{first_name_l:"John",first_name_r:"John","𝛾_first_name":1,surname_l:"Smith",surname_r:"Smith","𝛾_surname":1,date_of_birth_l:"1992-04-01",date_of_birth_l:"1992-04-02","𝛾_date_of_birth":0,other:"hi"}}function L(){return{height:200}}function I(e,t,a,r){return e(t,a,r,!0)}function M(e,t,a,r){return e(t,a,r,!1)}function D(e){return e`## Code`}function J(e,t,a){return function(r,n,o,i,l={}){let s=e(r,n,l);return t(a(s,o,i))}}function O(){return function(e){let t={};return e.comparison_columns.forEach((e=>{let a=e.col_name;t[a]=e})),t}}function H(e,t,a){return function(r,n,o={}){let i=e(n),l=t(r,n,o),s=[i].concat(l),m=a(n),c=s.reduce(((e,t)=>e+t.log2_bayes_factor),0);return m.bayes_factor=2**c,m.log2_bayes_factor=c,s.concat([m])}}function U(e,t){return function(a,r,n,o){let i,l,s=a,m=r[s],c=s.replace("𝛾_",""),u=e(n)[c],_=r[c+"_l"],d=r[c+"_r"];if(-1==m)i=.5,l=.5;else if(i=u.u_probabilities[m],l=u.m_probabilities[m],_==d&&c in o){i=o[c][_]||i}let f=l/i;return{bayes_factor:f,column_name:c,gamma_column_name:"𝛾_"+c,gamma_index:m,level_name:"level_"+m,log2_bayes_factor:t(f),m_probability:l,num_levels:null,u_probability:i,value_l:_,value_r:d}}}function z(e,t){return function(a){return{bayes_factor:e(a.proportion_of_matches),column_name:"Prior",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:t(a.proportion_of_matches),m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function K(e){return function(t,a,r){let n=Object.keys(t);return n=n.filter((e=>e.includes("𝛾_"))),n.map((n=>e(n,t,a,r)))}}function Z(){return function(e){return{bayes_factor:null,column_name:"Final score",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:null,m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function G(e){return function(t,a,r=!1){let n=JSON.parse(JSON.stringify(e));n.data.values=t;let o={...n,...a};if(r){o.layer[1].encoding.y.axis=!1,o.layer[0].layer[2].encoding.text={type:"nominal",field:"up_down_emoji"},o.layer[0].layer[2].encoding.opacity={condition:{value:0,test:"datum.column_name == 'Final score' || datum.column_name == 'Prior'"}};let e="format(1 / (1 + pow(2, -1*datum.value)), '.2r')";o.layer[0].layer[1].encoding.y.axis.labelExpr=e,o.layer[0].layer[1].encoding.y.axis.title="probability",o.layer[0].layer[1].encoding.tooltip=[{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}]}return o}}function V(){return{config:{view:{continuousHeight:300,continuousWidth:400}},title:{text:"Bayes factor intuition chart",subtitle:"How each comparison column contributes to the final match score"},transform:[{filter:"(datum.bayes_factor !== 1.0)"},{window:[{op:"sum",field:"log2_bayes_factor",as:"sum"},{op:"lead",field:"column_name",as:"lead"}],frame:[null,0]},{calculate:'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',as:"sum"},{calculate:"datum.lead === null ? datum.column_name : datum.lead",as:"lead"},{calculate:'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',as:"previous_sum"},{calculate:'datum.sum > datum.previous_sum ? datum.column_name : ""',as:"top_label"},{calculate:'datum.sum < datum.previous_sum ? datum.column_name : ""',as:"bottom_label"},{calculate:"datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_top"},{calculate:"datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_bottom"},{calculate:"(datum.sum + datum.previous_sum) / 2",as:"center"},{calculate:'(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',as:"text_log2_bayes_factor"},{calculate:"datum.sum < datum.previous_sum ? 4 : -4",as:"dy"},{calculate:'datum.sum < datum.previous_sum ? "top" : "bottom"',as:"baseline"},{calculate:"1. / (1 + pow(2, -1.*datum.sum))",as:"prob"},{calculate:"0*datum.sum",as:"zero"},{calculate:'datum.sum > datum.previous_sum ? "↑" : "↓"',as:"up_down_emoji"}],layer:[{layer:[{mark:"rule",encoding:{y:{field:"zero",type:"quantitative"},size:{value:.5},color:{value:"black"}}},{mark:{type:"bar",width:60},encoding:{color:{condition:{value:"red",test:"(datum.log2_bayes_factor < 0)"},value:"green"},opacity:{condition:{value:1,test:"datum.column_name == 'Prior' || datum.column_name == 'Final score'"},value:.5},tooltip:[{type:"nominal",field:"column_name",title:"Comparison column"},{type:"nominal",field:"value_l",title:"Value (L)"},{type:"nominal",field:"value_r",title:"Value (R)"},{type:"nominal",field:"gamma_index",title:"Gamma level"},{type:"quantitative",field:"bayes_factor",format:".3r",title:"Bayes factor"},{type:"quantitative",field:"log2_bayes_factor",format:".3r",title:"log2(Bayes factor)"},{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}],x:{type:"nominal",axis:{labelExpr:"datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",labelAlign:"center",labelPadding:10,title:"Column",grid:!0,tickBand:"extent"},field:"column_name",sort:null},y:{type:"quantitative",axis:{grid:!1,orient:"left",title:"log2(Bayes factor)"},field:"previous_sum"},y2:{field:"sum"}}},{mark:{type:"text",fontWeight:"bold"},encoding:{color:{value:"white"},text:{condition:{type:"nominal",field:"log2_bayes_factor",format:".2f",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",axis:{orient:"left"},field:"center"}}},{mark:{type:"text",baseline:"bottom",dy:-5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"top_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_top"}}},{mark:{type:"text",baseline:"top",dy:5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"bottom_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_bottom"}}}]},{mark:{type:"rule",color:"black",strokeWidth:2,x2Offset:30,xOffset:-30},encoding:{x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},x2:{field:"lead"},y:{type:"quantitative",axis:{labelExpr:"format(1 / (1 + pow(2, -1*datum.value)), '.2r')",orient:"right",title:"Probability"},field:"sum",scale:{zero:!1}}}}],height:450,resolve:{axis:{y:"independent"}},width:{step:75},$schema:"https://vega.github.io/schema/vega-lite/v4.8.1.json",data:{values:null}}}function Y(e){return e("vega-embed@6")}function Q(){return function(e){return e/(e+1)}}function X(){return Math.log2}function ee(){return function(e){return e/(1-e)}}function te(e,t){return function(a){return e(t(a))}}function ae(e){return function(t){return e(2**t)}}function re(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function ne(e){return{first_name:e}}function oe(e,t){const a=e.module();return a.variable(t()).define(["md"],A),a.variable(t()).define(["md"],N),a.variable(t()).define(["md"],B),a.variable(t("splink_settings")).define("splink_settings",R),a.variable(t("row")).define("row",W),a.variable(t("overrides")).define("overrides",L),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],I),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],M),a.variable(t()).define(["md"],D),a.variable(t("get_waterfall_chart")).define("get_waterfall_chart",["get_waterfall_chart_data","embed","get_chart_spec"],J),a.variable(t("get_comparison_column_lookup")).define("get_comparison_column_lookup",O),a.variable(t("get_waterfall_chart_data")).define("get_waterfall_chart_data",["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"],H),a.variable(t("get_waterfall_row_gamma")).define("get_waterfall_row_gamma",["get_comparison_column_lookup","log2"],U),a.variable(t("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row",["prob_to_bayes_factor","prob_to_log2_bayes_factor"],z),a.variable(t("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows",["get_waterfall_row_gamma"],K),a.variable(t("get_waterfall_data_final_row")).define("get_waterfall_data_final_row",Z),a.variable(t("get_chart_spec")).define("get_chart_spec",["base_spec"],G),a.variable(t("base_spec")).define("base_spec",V),a.variable(t("embed")).define("embed",["require"],Y),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Q),a.variable(t("log2")).define("log2",X),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",ee),a.variable(t("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor",["log2","prob_to_bayes_factor"],te),a.variable(t("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob",["bayes_factor_to_prob"],ae),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],re),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup"],ne),a}function ie(e){return e`# Fellegi Sunter utils`}function le(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function se(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function me(e,t){return e.from(t)}function ce(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function ue(e,t,a){return e(t,a)}function _e(e){return e.view()}function de(e,t,a){return e(t,a)}function fe(e){return e.view()}function be(e,t,a,r){return e(t,a,r).view()}function pe(e,t){return function(a,r,n={}){let o=a.objects().map((function(t){return t.match_probability=e(t,r,n),t})),i=t.from(o);return i=i.relocate(["match_probability"],{after:"uid_r"}),i}}function he(e,t){return function(a,r,n={}){let o=r.comparison_columns,i=e(r.proportion_of_matches),l=o.reduce(((e,t)=>{let r="𝛾_"+t.col_name,o=a[r];if(-1==o)return e;let i=t.m_probabilities[o],l=t.u_probabilities[o],s=a[t.col_name+"_l"].toLowerCase(),m=a[t.col_name+"_r"].toLowerCase();if(s==m&&t.col_name in n){let e=n[t.col_name],a=e[s]||0,r=e[m]||0,o=Math.max(a,r);o>0&&(l=o)}return e+Math.log2(i/l)}),i);return t(l)}}function ve(e,t){return function(a,r,n){null==n&&(n=r.comparison_columns.length);let o=r.comparison_columns.slice(0,n),i=e(r.proportion_of_matches),l={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:r.proportion_of_matches};o.forEach((e=>{let t="𝛾_"+e.col_name,r=a[t],n=e.m_probabilities[r],o=e.u_probabilities[r],i=e.col_name.replace("_","\\_");l.comparison_vector.push(r),l.gamma_symbols.push(`\\gamma_\\text{${i}}`),l.col_names.push(t),l.m_values.push(n),l.m_symbols.push(`m_{\\text{${i}},${r}}`),l.u_values.push(o),l.u_symbols.push(`u_{\\text{${i}},${r}}`),l.bayes_factors.push(n/o),l.log2_bayes_factors.push(Math.log2(n/o))}));let s=l.log2_bayes_factors.reduce(((e,t)=>e+t),i);l.match_probability=t(s);let m=r.proportion_of_matches;return l.size_of_match_portion=m*l.m_values.reduce(((e,t)=>e*t),1),l.size_of_non_match_portion=(1-m)*l.u_values.reduce(((e,t)=>e*t),1),l}}function ge(e){return function(t,a,r){let n=e(t,a,r),o=n.m_values.map((e=>e.toPrecision(3))),i=n.u_values.map((e=>e.toPrecision(3))),l=n.lam.toPrecision(3),s=[l].concat(o),m=[`(1 - ${l})`].concat(i),c=s.join(" \\times "),u=m.join(" \\times "),_=n.match_probability.toPrecision(3),d=n.size_of_match_portion.toPrecision(3);return`\\frac{${c}}{(${c}) + (${u})}  \\newline[10pt] = \\frac{${d}}{${d} + ${n.size_of_non_match_portion.toPrecision(3)}}  \\newline[10pt] = ${_}`}}function we(e){return function(t,a){let r=e(t,a),n=r.m_symbols,o=r.u_symbols,i=(r.lam,["\\lambda"].concat(n)),l=["(1 - \\lambda)"].concat(o),s=i.join(" ");return`\\frac{${s}}{${s}) + ${l.join(" ")}}`}}function ye(e,t,a,r){return e`${t(a.objects()[0],r)}
`}function xe(e){return function(t,a,r){let n=e(t,a,r);return`\\bm{\\gamma} = [${n.gamma_symbols.join(", ")}]= [${n.comparison_vector.join(", ")}]`}}function ke(e,t,a,r){return e`${t(a.objects()[0],r)}
`}function qe(e){return e`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function Ee(e,t,a,r){return e`${t(a.objects()[0],r)}`}function $e(e,t,a){return e(t.objects()[0],a)}function Pe(e){return function(t,a){let r=e.from(t),n=e.from(a),o=r.join(n,((e,t)=>!0),null,{suffix:["_l","_r"]}),i=r.columnNames(),l=[];return i.forEach((e=>{l.push(e+"_l"),l.push(e+"_r")})),o=o.select(l),o}}function Te(e){return function(t,a){let r=a.comparison_columns,n=t.objects();r.forEach((function(e){n.forEach((function(t){t["𝛾_"+e.col_name]=e.case_expression(t)}))})),n=e.from(n);let o=["uid_l","uid_r"];return r.forEach((e=>{o.push(e.col_name+"_l"),o.push(e.col_name+"_r"),o.push("𝛾_"+e.col_name)})),n=n.select(o),n}}function Se(){return function(e){return e/(e+1)}}function Fe(e){return function(t){return e(2**t)}}function je(){return function(e){return e/(1-e)}}function Ce(e){return function(t){return Math.log2(e(t))}}function Ae(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function Ne(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.surname]=e.freq})),t}))}function Be(e,t){return{fname:e,sname:t}}function Re(e){return e.fname.joshua}function We(e){return e.sname.linacre}function Le(e,t){const a=e.module();a.variable(t()).define(["md"],ie),a.variable(t("records_l")).define("records_l",le),a.variable(t("records_r")).define("records_r",se),a.variable(t("df_r")).define("df_r",["aq","records_r"],me),a.variable(t("splink_settings")).define("splink_settings",ce),a.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],ue),a.variable(t()).define(["df_comparison"],_e),a.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],de),a.variable(t()).define(["df_gammas"],fe),a.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],be),a.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],pe),a.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],he),a.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],ve),a.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],ge),a.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],we),a.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],ye),a.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],xe),a.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],ke),a.variable(t()).define(["tex"],qe),a.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],Ee),a.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],$e),a.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],Pe),a.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],Te),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Se),a.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],Fe),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",je),a.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],Ce);const r=e.module(T);return a.import("aq",r),a.import("op",r),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],Ae),a.variable(t("surname_lookup")).define("surname_lookup",["d3"],Ne),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Be),a.variable(t()).define(["term_freqs"],Re),a.variable(t()).define(["term_freqs"],We),a}function Ie(e){return e`# Charts and Figures (Introduction)`}function Me(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bristol"})}function De(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bath"})}function Je(e,t,a){return new e(t,a)}function Oe(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.9,.1],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7]}]}}function He(e,t){let a=e.as_wide().objects()[0];return Object.keys(t.as_dict()).forEach((e=>{a[e+"_l"]==a[e+"_r"]?a["𝛾_"+e]=1:a["𝛾_"+e]=0})),a}function Ue(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}}function ze(e,t,a,r){return e(t,a,r,!0)}function Ke(e){return e`# Charts and Figures (Mathematical Model)`}function Ze(){return function(e){const t=[],a={"unique id":"uid","first name":"fname",surname:"sname","date of birth":"dob",town:"town"};e.querySelectorAll("tr").forEach(((e,a)=>{let r=e.cells,n=[];for(let t of r){let e=t.innerText;e=e.trim(),e=e.toLowerCase(),""==e&&(e=null),n.push(e)}t.push(n)}));return t.reduce(((e,t,r)=>{if(0==r)t=t.map((e=>a[e])),e.properties=t;else{const a={};e.properties.forEach(((e,r)=>{a[e]=t[r]})),e.push(a)}return e}),[])}}function Ge(e,t,a){return e.observe((e=>{const r=r=>e(t(a));return a.addEventListener("input",r,!1),e(t(a)),()=>window.removeEventListener("input",r)}))}function Ve(e){return e`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_l</td>
<td contenteditable>John</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_l</td>
<td contenteditable>Emma</td>

<td contenteditable>Jones</td>
<td contenteditable>1956-07-09</td>
<td contenteditable>Hull</td>

</tr>


<tr>
<td>3_l</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>London</td>

</tr>


</table>
`}function Ye(e){return e`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_r</td>
<td contenteditable>Jonathan</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_r</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>Peckham</td>

</tr>



</table>
`}function Qe(e,t,a){return e.observe((e=>{const r=r=>e(t(a));return a.addEventListener("input",r,!1),e(t(a)),()=>window.removeEventListener("input",r)}))}function Xe(e,t){return e.from(t)}function et(e,t){return e.from(t)}function tt(e,t,a){return e(t,a)}function at(e,t,a){return e(t,a)}function rt(e){let t=e.columnNames();return t=t.filter((e=>e.includes("𝛾_"))),t=["uid_l","uid_r"].concat(t),e.select(t)}function nt(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function ot(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"July"})}function it(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"June"})}function lt(e,t,a){return new e(t,a)}function st(e,t){const a=e.module();a.variable(t()).define(["md"],Ie);const r=e.module(C);a.import("Record",r),a.import("RecordComparison",r);const n=e.module(oe);a.import("get_waterfall_chart",n),a.variable(t("example_record_1_l")).define("example_record_1_l",["Record"],Me),a.variable(t("example_record_1_r")).define("example_record_1_r",["Record"],De),a.variable(t("example_1_comparison")).define("example_1_comparison",["RecordComparison","example_record_1_l","example_record_1_r"],Je),a.variable(t("splink_settings")).define("splink_settings",Oe),a.variable(t("example_1_row_with_gammas")).define("example_1_row_with_gammas",["example_1_comparison","example_record_1_l"],He),a.variable(t("overrides")).define("overrides",Ue),a.variable(t("intro_simple_waterfall")).define("intro_simple_waterfall",["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"],ze),a.variable(t()).define(["md"],Ke);const o=e.module(Le);a.import("get_df_comparison",o),a.import("get_df_gammas",o),a.variable(t("parseTableData")).define("parseTableData",Ze),a.variable(t("records_l")).define("records_l",["Generators","parseTableData","table_l"],Ge),a.variable(t("table_l")).define("table_l",["html"],Ve),a.variable(t("table_r")).define("table_r",["html"],Ye),a.variable(t("records_r")).define("records_r",["Generators","parseTableData","table_r"],Qe),a.variable(t("df_1_l")).define("df_1_l",["aq","records_l"],Xe),a.variable(t("df_1_r")).define("df_1_r",["aq","records_r"],et),a.variable(t("df_comparisons_1")).define("df_comparisons_1",["get_df_comparison","records_l","records_r"],tt),a.variable(t("df_gammas_1")).define("df_gammas_1",["get_df_gammas","df_comparisons_1","splink_settings_1"],at),a.variable(t("df_gammas_only_1")).define("df_gammas_only_1",["df_gammas_1"],rt),a.variable(t("splink_settings_1")).define("splink_settings_1",nt),a.variable(t("example_record_2_l")).define("example_record_2_l",["Record"],ot),a.variable(t("example_record_2_r")).define("example_record_2_r",["Record"],it),a.variable(t("example_2_comparison")).define("example_2_comparison",["RecordComparison","example_record_2_l","example_record_2_r"],lt);const i=e.module(T);return a.import("aq",i),a.import("op",i),a}function mt(e){return e`# The mathematics of the Fellegi Sunter model`}function ct(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`}function ut(e){return e`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`}function _t(e){return e`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`}function dt(e){return e`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`}function ft(e){return e}function bt(e){return e`### Dataset 2`}function pt(e){return e}function ht(e,t){return e`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${t.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`}function vt(e,t,a,r,n,o){return e`## Comparing columns

We need a mathematical way of evaluating these pairwise comparisons - a function that takes the comparisons as an input, and outputs match probabilities.  

The FS model solves this problem by comparing the records column by column, and assigning each comparison to two or more 'similarity levels'.

A simple example of a two-level comparison rule for a column may be:

- If the values in the column exactly match, assign the comparison to similarity level 1
- Otherwise assign the comparison to similarity level 0

In the following table, we apply this simple rule to every column. The comparisons are denoted with the prefix \`𝛾_\` because the mathematical symbol gamma is often used in the literate to represent comparisons.

${t.view()}

<br>

Now that we have a numeric representation of the comparisons, the model makes no further use of the raw data, instead using only the values in the 𝛾 columns: 

${a.view()}   
<br>
For each row in this table, the set of gamma values is known as the 'comparison vector'.  For example, the comparison vector for the first row in the table is:

${r`${n(t.slice(0,1).objects()[0],o)}`}
 `}function gt(e){return e`## Scoring comparisons`}function wt(e){return e`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`}function yt(e,t){return e`### m and u probabilities 

How much should we increase our estimate of match probability if we observe a match on first name? How about a match on gender? And what about if we observe a mismatch on these fields?  

We are interested in evaluating statements like: 

${t`\operatorname{Pr}(\text{records match}|\text{first name matches})`} 

This can be quantified using the m and u probabilities for each column, combined with Bayes Theorem (see annex for a refresher).

Consider the first name column.  We have defined two similarity levels:  level 1 if the first name exactly matches, and level 0 otherwise.

#### m probabilities
The m probabilities for the first name column are:

${t`m_\text{first name,level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{record match})`}


${t`m_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records match})`}


That is, amongst record comparisons which are true matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how often mispellings, nicknames or aliases occur in the first name field.

#### u probabilities

The u probabilities for the first name column are:

${t`u_\text{first name, level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{records do not match})`}


${t`u_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records do not match})`}



That is, amongst record comparisons which are true non-matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how likely 'collisions' are likely to occur. For instance, it would be common for two different people to have the same gender, but less likely for two different people to have the same date of birth.

#### The overall proportion of matches

Let us also define:

${t`\operatorname{Pr}(\text{records match}) = \lambda`} 

This is our prior - our estimate for the probability that a randomly-chosen pairwise record comparison is a match.

### Bayes Theorem

We can now use Bayes Theorem  to write:

${t`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{\operatorname{Pr}(\text{first name matches}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\text{first name matches})}}`}

which, in our notation is:

${t`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{m_\text{first name, level\_1}\lambda}{m_\text{first name, level\_1}\lambda + u_\text{first name, level\_1}(1-\lambda)}`}


`}function xt(e,t,a){return e`We can generalise this formula by using  ${t`\gamma`} to indicate the value of the comparison, the index ${t`k`} to designate the comparison column, and ${t`\ell`} to designate the observed comparison level, we can write:

${a`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline [10pt] = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${a`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline [10pt] = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${a`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`}function kt(e){return e`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`}function qt(e){return e`## Example`}function Et(e){return e`
In order to present an example calculation we need to choose values for the parameters of the model - the m and u values.

We can represent the m and u values for a comparison column succinctly as follows:

\`\`\`
{
  "col_name": "fname",
  "m_probabilities": [0.2,0.8],
  "u_probabilities": [0.9,0.1],
}
\`\`\`

The position (index) of the arrays corresponds to the comparison level.  

For example, \`"m_probabilities": [0.2,0.8]\` means that amongst matching records, 20% have a disagreement on the first name (e.g. "John" vs. "Jonathan"), and 80% match (e.g. "David" vs. "David")

Using this notation, parameters we will choose for our model are as follows.  ✨<span style="background-color:yellow">You may edit these values to see how they affect the calculation.</span>✨

`}function $t(e,t){return e.textarea({value:t,rows:26,spellcheck:!1})}function Pt(e){return e`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`}function Tt(e,t){return e.range([1,t.numRows()],{value:1,label:"Choose record comparison",step:1})}function St(e,t,a){return e`${t.slice(a-1,a).toMarkdown()}`}function Ft(e,t,a,r,n,o){return e`The comparison vector is given by:

${t`${a(r.slice(n-1,n).objects()[0],o)}`}

`}function jt(e){return e`The formula for match probability is:`}function Ct(e,t,a,r,n){return e`${t(a.slice(r-1,r).objects()[0],n)}`}function At(e){return e`And substituting in numbers using our specified parameters we get: `}function Nt(e,t,a,r,n){return e`${t(a.slice(r-1,r).objects()[0],n)}`}function Bt(e,t,a,r,n,o){return e`i.e. the ${t`\text{estimated match probability} = 

${a(r.slice(n-1,n).objects()[0],o).match_probability.toPrecision(4)}

`}

`}function Rt(e){return e`<br><br>`}function Wt(e,t,a){return e`## Annex:  Bayes Theorem

Recall that Bayes Theorem is given by:

${t`
\operatorname{Pr}(a|b) = {\frac{\operatorname{Pr}(b|a)\operatorname{Pr}(a)}{\operatorname{Pr}{(b)}}}`} 


or , in words: 

${t`
\text{posterior} = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}`}

In the context of record linkage, we can describe these parts as:

**Prior**:
The overall proportion of comparisons which are matches ${a`\operatorname{Pr}(\text{match})`}.

**Evidence**: We have observed that e.g. first name matches, ${a`\operatorname{Pr}(\text{first name matches})`}.

**Likelihood**: The probability that first name matches amongst matches, given by ${a`\operatorname{Pr}(\text{first name matches}|\text{records match})`}.  

So Bayes' formuls is:

${t`
\operatorname{Pr}(\text{match}|\text{first name matches}) = \frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}{(\text{first name matches})}}`}

Which can also be written:

${t` 
\frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match}) + \operatorname{Pr}(\text{first name matches}|\text{non match})\operatorname{Pr}(\text{non match})}`}

giving us:

${t`
\operatorname{Pr}(\text{match}|\text{first name matches}) = 
\frac{m_1\lambda}{m_1\lambda + u_1(1-\lambda)}`}

Which is the same as Equation 1.
`}function Lt(e){return e`## Calculations and code`}function It(e){return e.options({displayMode:!0,fleqn:!0})}function Mt(){return'{\n    "proportion_of_matches": 0.01,\n    "comparison_columns": [\n      {\n        "col_name": "fname",\n        "u_probabilities": [0.8, 0.2],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "sname",\n        "u_probabilities": [0.9, 0.1],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "dob",\n        "u_probabilities": [0.99, 0.01],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "town",\n        "u_probabilities": [0.7, 0.3],\n        "m_probabilities": [0.3, 0.7]\n      }\n    ]\n  \n  }'}function Dt(e){return JSON.parse(e)}function Jt(e){return e`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function Ot(e){return e("@observablehq/inputs")}function Ht(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],mt),a.variable(t()).define(["md"],ct),a.variable(t("para_1")).define("para_1",["md"],ut),a.variable(t("para_2")).define("para_2",["md"],_t),a.variable(t("para_3")).define("para_3",["md"],dt),a.variable(t("table_l1")).define("table_l1",["table_l"],ft),a.variable(t("ds2_head")).define("ds2_head",["md"],bt),a.variable(t("table_r1")).define("table_r1",["table_r"],pt),a.variable(t("rec_comparisons")).define("rec_comparisons",["md","df_comparisons_1"],ht),a.variable(t("para_4")).define("para_4",["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"],vt),a.variable(t("subhead_1")).define("subhead_1",["md"],gt),a.variable(t("para_5")).define("para_5",["md"],wt),a.variable(t("para_6")).define("para_6",["md","texd"],yt),a.variable(t("para_7")).define("para_7",["md","tex","texd"],xt),a.variable(t("para_8")).define("para_8",["md"],kt),a.variable(t("subhead_2")).define("subhead_2",["md"],qt),a.variable(t("para_10")).define("para_10",["md"],Et),a.variable(t("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],$t),a.variable(t("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],((e,t)=>e.input(t))),a.variable(t("para_11")).define("para_11",["md"],Pt),a.variable(t("viewof row_index")).define("viewof row_index",["inputs","df_gammas_1"],Tt),a.variable(t("row_index")).define("row_index",["Generators","viewof row_index"],((e,t)=>e.input(t))),a.variable(t("this_row")).define("this_row",["md","df_comparisons_1","row_index"],St),a.variable(t("para_12")).define("para_12",["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"],Ft),a.variable(t("para_13")).define("para_13",["md"],jt),a.variable(t("para_14")).define("para_14",["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"],Ct),a.variable(t("para_15")).define("para_15",["md"],At),a.variable(t("para_16")).define("para_16",["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"],Nt),a.variable(t("para_17")).define("para_17",["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"],Bt),a.variable(t("para_18")).define("para_18",["md"],Rt),a.variable(t("para_19")).define("para_19",["md","texd","tex"],Wt),a.variable(t()).define(["md"],Lt);const r=e.module(st);a.import("example_2_comparison",r),a.import("intro_simple_waterfall",r),a.import("table_l",r),a.import("table_r",r),a.import("df_1_l",r),a.import("df_1_r",r),a.import("df_comparisons_1",r),a.import("df_gammas_1",r),a.import("df_gammas_only_1",r);const n=e.module(Le);return a.import("get_m_u_formula_symbols",n),a.import("get_m_u_formula_numbers",n),a.import("get_comparison_vector_symbols_and_numbers",n),a.import("get_match_probability_components",n),a.variable(t("texd")).define("texd",["tex"],It),a.variable(t("default_splink_settings")).define("default_splink_settings",Mt),a.variable(t("settings")).define("settings",["splink_settings"],Dt),a.variable(t("css_styles")).define("css_styles",["html"],Jt),a.variable(t("inputs")).define("inputs",["require"],Ot),a}var Ut=a(5860);a(2692),a(6702);const zt=e=>n.createElement(i.H,{frontmatter:e.pageContext.frontmatter}),Kt=["para_1","para_2","para_3","table_l1","ds2_head","table_r1","rec_comparisons","para_4","subhead_1","para_5","para_6","para_7","para_8","subhead_2","para_10","viewof splink_settings","para_11","viewof row_index","this_row","para_12","para_13","para_14","para_15","para_16","para_17","para_18","para_19","css_styles"];function Zt(e){const t=Object.assign({h1:"h1"},(0,r.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"Maths of Fellegi Sunter model (old version)"),"\n",n.createElement(Ut.Z,{notebook:Ht,cells:Kt}))}var Gt=function(e){return void 0===e&&(e={}),n.createElement(o.B,e,n.createElement(Zt,e))}},6702:function(e,t,a){var r=a(7294),n=a(4160);t.Z=e=>{var t,a,o,i,l,s;let{frontmatter:m}=e;const{tutorial_number:c}=m,u=(0,n.K2)("4236107564"),_=u.allMdx.edges.map((e=>e.node.frontmatter.tutorial_number)),d=_.includes(c-1),f=_.includes(c+1),b=null===(t=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c-1)))||void 0===t||null===(a=t.node)||void 0===a||null===(o=a.fields)||void 0===o?void 0:o.slug,p=null===(i=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c+1)))||void 0===i||null===(l=i.node)||void 0===l||null===(s=l.fields)||void 0===s?void 0:s.slug;return r.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},r.createElement("div",{className:"flex justify-between"},r.createElement("div",{className:"w-1/3 text-left"},d&&r.createElement(n.rU,{to:b,className:"text-blue-500 hover:underline"},"← Previous article")),r.createElement("div",{className:"w-1/3 text-center"},r.createElement("span",null,"This is part ",c," of the"," ",r.createElement(n.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"tutorial"))),r.createElement("div",{className:"w-1/3 text-right"},f&&r.createElement(n.rU,{to:p,className:"text-blue-500 hover:underline"},"Next article →"))))}},5860:function(e,t,a){var r=a(7294),n=a(6493);const o="mdx-container-div",i=new n.Zu,l=Object.assign({},i,{width:function(){return i.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function a(){let a=document.getElementById(o).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}});t.Z=function(e){let{notebook:t,cells:a,customClassName:o}=e;const i=(0,r.useRef)(a.map((()=>r.createRef())));return(0,r.useEffect)((()=>{const e=new n.r_(l);return e.module(t,(e=>{const t=a.indexOf(e);if(-1!==t)return new n.lj(i.current[t].current)})),()=>e.dispose()}),[t,a]),r.createElement("div",{className:o},i.current.map(((e,t)=>r.createElement("div",{key:t,ref:e}))))}},6965:function(e,t,a){a.d(t,{B:function(){return l}});var r=a(7294),n=a(7848),o=a(2692),i=a(6702);function l(e){let{children:t,pageContext:a}=e;const{frontmatter:l}=a,s=()=>r.createElement("div",null,r.createElement(i.Z,{frontmatter:l}),t,r.createElement(o.Z,{frontmatter:l}));return r.createElement(n.ZP,{pageContext:a},r.createElement(s,null))}},7825:function(e,t,a){a.d(t,{H:function(){return o}});var r=a(7294),n=a(4160);const o=e=>{let{frontmatter:t}=e;const{title:a,description:o,image:i,siteUrl:l,twitterUsername:s}=(0,n.K2)("1865044719").site.siteMetadata,m={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||o,image:`${l}${(null==t?void 0:t.image)||i}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:s,...t},c=null==t?void 0:t.stylesheet;return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"image",content:m.image}),c&&r.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${c}`}))}},2692:function(e,t,a){var r=a(7294),n=a(4160);t.Z=e=>{let{frontmatter:t}=e;const{tutorial_number:a,title:o}=t,i=(0,n.K2)("1842021157").allMdx.edges.sort(((e,t)=>e.node.frontmatter.tutorial_number-t.node.frontmatter.tutorial_number));return r.createElement("div",{className:"bg-blue-100  p-4 mt-8  mb-4 rounded-lg "},r.createElement("div",{className:"container mx-auto"},r.createElement("div",{className:"text-blue-800 font-semibold text-base mb-2"},r.createElement(n.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"Probabilistic Linkage Tutorial Navigation:")),r.createElement("ol",{className:"space-y-2 text-sm"},i.map((e=>r.createElement("li",{key:e.node.frontmatter.tutorial_number,className:"text-blue-600 text-sm"},a===e.node.frontmatter.tutorial_number?r.createElement("span",{className:"font-bold text-sm"},e.node.frontmatter.title):r.createElement(n.rU,{to:e.node.fields.slug,className:"hover:underline"},e.node.frontmatter.title)))))))}}}]);
//# sourceMappingURL=component---src-mdx-archived-maths-fellegi-sunter-mdx-22806fbc35f274156341.js.map