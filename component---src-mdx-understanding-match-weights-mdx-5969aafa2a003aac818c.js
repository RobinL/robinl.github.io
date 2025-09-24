"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[7640],{7118:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Ka},default:function(){return Va},output_order:function(){return Oa}});var o=a(7294),r=a(7848),n=a(7825);function i(e){return e`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function l(e){return e`Import Arquero and extend it to print HTML tables in Observable:`}async function s(e,t,a,o){const r=await e(`arquero@${t}`);return(await Promise.all(a.map((t=>e(t))))).forEach((e=>r.addPackage(e))),r.addTableMethod("view",o,{override:!0}),r}function m(){return"4.2.0"}function c(){return[]}function u(e){return e`Export a global reference to Arquero operations:`}function d(e){return e.op}function _(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function f(e){return e`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function p(e){return e`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function b(e){return e`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function h(e){return e`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function v(e){return e.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function g(e){return e`Sorted differences between Seattle and Chicago:`}function y(e,t){return e.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function w(e){return e`Is Seattle more correlated with San Francisco or Chicago?`}function x(e,t){return e.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function k(e){return e`Summary statistics per city, as output objects:`}function q(e,t,a){return e.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:e=>a.min(e.sun),max:e=>a.max(e.sun),avg:e=>a.average(e.sun),med:e=>a.median(e.sun),skew:({sun:e})=>(a.mean(e)-a.median(e))/a.stdev(e)||0}).objects()}function $(e){return e`<hr>
## Utilities
`}function T(e){const t=e=>`<span style="color: #999;">${e}</span>`;return function(a,o={}){"number"==typeof o&&(o={limit:o});const r={...o.color};if("function"==typeof o.color)a.columnNames().forEach((e=>r[e]=o.color));else for(const e in r){const t=r[e];r[e]="function"==typeof t?t:()=>t}const n=(e,t,a)=>`padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; max-width: ${+o.maxCellWidth||300}px;`+(r[e]?` background-color: ${r[e](t,a)};`:""),i=`max-height: ${+(o={limit:100,null:t,...o,style:{table:"margin: 0; border-collapse: collapse; width: initial;",td:n,th:n}}).height||270}px`,l=e`<div style="${`${i}; overflow-x: auto; overflow-y: auto;`}">${a.toHTML(o)}</div>`;return l.value=a,l}}function P(e,t){const a=e.module();return a.variable(t()).define(["md"],i),a.variable(t()).define(["md"],l),a.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],s),a.variable(t("aq_version")).define("aq_version",m),a.variable(t("aq_packages")).define("aq_packages",c),a.variable(t()).define(["md"],u),a.variable(t("op")).define("op",["aq"],d),a.variable(t()).define(["md"],_),a.variable(t()).define(["md"],f),a.variable(t()).define(["md"],p),a.variable(t()).define(["md"],b),a.variable(t()).define(["md"],h),a.variable(t("dt")).define("dt",["aq"],v),a.variable(t()).define(["md"],g),a.variable(t()).define(["dt","op"],y),a.variable(t()).define(["md"],w),a.variable(t()).define(["dt","op"],x),a.variable(t()).define(["md"],k),a.variable(t()).define(["dt","aq","op"],q),a.variable(t()).define(["md"],$),a.variable(t("toView")).define("toView",["html"],T),a}function E(e){return e`# Record Utilities`}function F(e){return class{constructor(e){this.record_dict=e}as_dict(){return this.record_dict}as_aq(){return e.from([this.record_dict])}display(){return this.as_aq().view()}}}function S(e){return class{constructor(e,t){this.record_l=e,this.record_r=t}as_long(){let t=[this.record_l.as_dict(),this.record_r.as_dict()];return e.from(t)}as_wide(){let e=this.record_l.as_aq(),t=this.record_r.as_aq(),a=e.join(t,((e,t)=>!0),null,{suffix:["_l","_r"]}),o=e.columnNames(),r=[];return o.forEach((e=>{r.push(e+"_l"),r.push(e+"_r")})),a=a.select(r),a}display(e="long"){return"long"==e?this.as_long().view():"wide"==e?this.as_wide().view():void 0}}}function B(e,t){const a=e.module();a.variable(t()).define(["md"],E),a.variable(t("Record")).define("Record",["aq"],F),a.variable(t("RecordComparison")).define("RecordComparison",["aq"],S);const o=e.module(P);return a.import("aq",o),a.import("op",o),a}function A(e){return e`# Waterfall chart`}function C(e){return e`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`}function N(e){return e`## Example`}function j(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]}]}}function W(){return{first_name_l:"John",first_name_r:"John","𝛾_first_name":1,surname_l:"Smith",surname_r:"Smith","𝛾_surname":1,date_of_birth_l:"1992-04-01",date_of_birth_l:"1992-04-02","𝛾_date_of_birth":0,other:"hi"}}function M(){return{height:200}}function I(e,t,a,o){return e(t,a,o,!0)}function L(e,t,a,o){return e(t,a,o,!1)}function J(e){return e`## Code`}function K(e,t,a){return function(o,r,n,i,l={}){let s=e(o,r,l);return t(a(s,n,i))}}function O(){return function(e){let t={};return e.comparison_columns.forEach((e=>{let a=e.col_name;t[a]=e})),t}}function R(e,t,a){return function(o,r,n={}){let i=e(r),l=t(o,r,n),s=[i].concat(l),m=a(r),c=s.reduce(((e,t)=>e+t.log2_bayes_factor),0);return m.bayes_factor=2**c,m.log2_bayes_factor=c,s.concat([m])}}function V(e,t){return function(a,o,r,n){let i,l,s=a,m=o[s],c=s.replace("𝛾_",""),u=e(r)[c],d=o[c+"_l"],_=o[c+"_r"];if(-1==m)i=.5,l=.5;else if(i=u.u_probabilities[m],l=u.m_probabilities[m],d==_&&c in n){i=n[c][d]||i}let f=l/i;return{bayes_factor:f,column_name:c,gamma_column_name:"𝛾_"+c,gamma_index:m,level_name:"level_"+m,log2_bayes_factor:t(f),m_probability:l,num_levels:null,u_probability:i,value_l:d,value_r:_}}}function D(e,t){return function(a){return{bayes_factor:e(a.proportion_of_matches),column_name:"Prior",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:t(a.proportion_of_matches),m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function H(e){return function(t,a,o){let r=Object.keys(t);return r=r.filter((e=>e.includes("𝛾_"))),r.map((r=>e(r,t,a,o)))}}function U(){return function(e){return{bayes_factor:null,column_name:"Final score",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:null,m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function G(e){return function(t,a,o=!1){let r=JSON.parse(JSON.stringify(e));r.data.values=t;let n={...r,...a};if(o){n.layer[1].encoding.y.axis=!1,n.layer[0].layer[2].encoding.text={type:"nominal",field:"up_down_emoji"},n.layer[0].layer[2].encoding.opacity={condition:{value:0,test:"datum.column_name == 'Final score' || datum.column_name == 'Prior'"}};let e="format(1 / (1 + pow(2, -1*datum.value)), '.2r')";n.layer[0].layer[1].encoding.y.axis.labelExpr=e,n.layer[0].layer[1].encoding.y.axis.title="probability",n.layer[0].layer[1].encoding.tooltip=[{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}]}return n}}function z(){return{config:{view:{continuousHeight:300,continuousWidth:400}},title:{text:"Bayes factor intuition chart",subtitle:"How each comparison column contributes to the final match score"},transform:[{filter:"(datum.bayes_factor !== 1.0)"},{window:[{op:"sum",field:"log2_bayes_factor",as:"sum"},{op:"lead",field:"column_name",as:"lead"}],frame:[null,0]},{calculate:'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',as:"sum"},{calculate:"datum.lead === null ? datum.column_name : datum.lead",as:"lead"},{calculate:'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',as:"previous_sum"},{calculate:'datum.sum > datum.previous_sum ? datum.column_name : ""',as:"top_label"},{calculate:'datum.sum < datum.previous_sum ? datum.column_name : ""',as:"bottom_label"},{calculate:"datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_top"},{calculate:"datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_bottom"},{calculate:"(datum.sum + datum.previous_sum) / 2",as:"center"},{calculate:'(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',as:"text_log2_bayes_factor"},{calculate:"datum.sum < datum.previous_sum ? 4 : -4",as:"dy"},{calculate:'datum.sum < datum.previous_sum ? "top" : "bottom"',as:"baseline"},{calculate:"1. / (1 + pow(2, -1.*datum.sum))",as:"prob"},{calculate:"0*datum.sum",as:"zero"},{calculate:'datum.sum > datum.previous_sum ? "↑" : "↓"',as:"up_down_emoji"}],layer:[{layer:[{mark:"rule",encoding:{y:{field:"zero",type:"quantitative"},size:{value:.5},color:{value:"black"}}},{mark:{type:"bar",width:60},encoding:{color:{condition:{value:"red",test:"(datum.log2_bayes_factor < 0)"},value:"green"},opacity:{condition:{value:1,test:"datum.column_name == 'Prior' || datum.column_name == 'Final score'"},value:.5},tooltip:[{type:"nominal",field:"column_name",title:"Comparison column"},{type:"nominal",field:"value_l",title:"Value (L)"},{type:"nominal",field:"value_r",title:"Value (R)"},{type:"nominal",field:"gamma_index",title:"Gamma level"},{type:"quantitative",field:"bayes_factor",format:".3r",title:"Bayes factor"},{type:"quantitative",field:"log2_bayes_factor",format:".3r",title:"log2(Bayes factor)"},{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}],x:{type:"nominal",axis:{labelExpr:"datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",labelAlign:"center",labelPadding:10,title:"Column",grid:!0,tickBand:"extent"},field:"column_name",sort:null},y:{type:"quantitative",axis:{grid:!1,orient:"left",title:"log2(Bayes factor)"},field:"previous_sum"},y2:{field:"sum"}}},{mark:{type:"text",fontWeight:"bold"},encoding:{color:{value:"white"},text:{condition:{type:"nominal",field:"log2_bayes_factor",format:".2f",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",axis:{orient:"left"},field:"center"}}},{mark:{type:"text",baseline:"bottom",dy:-5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"top_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_top"}}},{mark:{type:"text",baseline:"top",dy:5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"bottom_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_bottom"}}}]},{mark:{type:"rule",color:"black",strokeWidth:2,x2Offset:30,xOffset:-30},encoding:{x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},x2:{field:"lead"},y:{type:"quantitative",axis:{labelExpr:"format(1 / (1 + pow(2, -1*datum.value)), '.2r')",orient:"right",title:"Probability"},field:"sum",scale:{zero:!1}}}}],height:450,resolve:{axis:{y:"independent"}},width:{step:75},$schema:"https://vega.github.io/schema/vega-lite/v4.8.1.json",data:{values:null}}}function Z(e){return e("vega-embed@6")}function Y(){return function(e){return e/(e+1)}}function Q(){return Math.log2}function X(){return function(e){return e/(1-e)}}function ee(e,t){return function(a){return e(t(a))}}function te(e){return function(t){return e(2**t)}}function ae(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function oe(e){return{first_name:e}}function re(e,t){const a=e.module();return a.variable(t()).define(["md"],A),a.variable(t()).define(["md"],C),a.variable(t()).define(["md"],N),a.variable(t("splink_settings")).define("splink_settings",j),a.variable(t("row")).define("row",W),a.variable(t("overrides")).define("overrides",M),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],I),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],L),a.variable(t()).define(["md"],J),a.variable(t("get_waterfall_chart")).define("get_waterfall_chart",["get_waterfall_chart_data","embed","get_chart_spec"],K),a.variable(t("get_comparison_column_lookup")).define("get_comparison_column_lookup",O),a.variable(t("get_waterfall_chart_data")).define("get_waterfall_chart_data",["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"],R),a.variable(t("get_waterfall_row_gamma")).define("get_waterfall_row_gamma",["get_comparison_column_lookup","log2"],V),a.variable(t("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row",["prob_to_bayes_factor","prob_to_log2_bayes_factor"],D),a.variable(t("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows",["get_waterfall_row_gamma"],H),a.variable(t("get_waterfall_data_final_row")).define("get_waterfall_data_final_row",U),a.variable(t("get_chart_spec")).define("get_chart_spec",["base_spec"],G),a.variable(t("base_spec")).define("base_spec",z),a.variable(t("embed")).define("embed",["require"],Z),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Y),a.variable(t("log2")).define("log2",Q),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",X),a.variable(t("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor",["log2","prob_to_bayes_factor"],ee),a.variable(t("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob",["bayes_factor_to_prob"],te),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],ae),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup"],oe),a}function ne(e){return e`# Fellegi Sunter utils`}function ie(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function le(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function se(e,t){return e.from(t)}function me(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function ce(e,t,a){return e(t,a)}function ue(e){return e.view()}function de(e,t,a){return e(t,a)}function _e(e){return e.view()}function fe(e,t,a,o){return e(t,a,o).view()}function pe(e,t){return function(a,o,r={}){let n=a.objects().map((function(t){return t.match_probability=e(t,o,r),t})),i=t.from(n);return i=i.relocate(["match_probability"],{after:"uid_r"}),i}}function be(e,t){return function(a,o,r={}){let n=o.comparison_columns,i=e(o.proportion_of_matches),l=n.reduce(((e,t)=>{let o="𝛾_"+t.col_name,n=a[o];if(-1==n)return e;let i=t.m_probabilities[n],l=t.u_probabilities[n],s=a[t.col_name+"_l"].toLowerCase(),m=a[t.col_name+"_r"].toLowerCase();if(s==m&&t.col_name in r){let e=r[t.col_name],a=e[s]||0,o=e[m]||0,n=Math.max(a,o);n>0&&(l=n)}return e+Math.log2(i/l)}),i);return t(l)}}function he(e,t){return function(a,o,r){null==r&&(r=o.comparison_columns.length);let n=o.comparison_columns.slice(0,r),i=e(o.proportion_of_matches),l={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:o.proportion_of_matches};n.forEach((e=>{let t="𝛾_"+e.col_name,o=a[t],r=e.m_probabilities[o],n=e.u_probabilities[o],i=e.col_name.replace("_","\\_");l.comparison_vector.push(o),l.gamma_symbols.push(`\\gamma_\\text{${i}}`),l.col_names.push(t),l.m_values.push(r),l.m_symbols.push(`m_{\\text{${i}},${o}}`),l.u_values.push(n),l.u_symbols.push(`u_{\\text{${i}},${o}}`),l.bayes_factors.push(r/n),l.log2_bayes_factors.push(Math.log2(r/n))}));let s=l.log2_bayes_factors.reduce(((e,t)=>e+t),i);l.match_probability=t(s);let m=o.proportion_of_matches;return l.size_of_match_portion=m*l.m_values.reduce(((e,t)=>e*t),1),l.size_of_non_match_portion=(1-m)*l.u_values.reduce(((e,t)=>e*t),1),l}}function ve(e){return function(t,a,o){let r=e(t,a,o),n=r.m_values.map((e=>e.toPrecision(3))),i=r.u_values.map((e=>e.toPrecision(3))),l=r.lam.toPrecision(3),s=[l].concat(n),m=[`(1 - ${l})`].concat(i),c=s.join(" \\times "),u=m.join(" \\times "),d=r.match_probability.toPrecision(3),_=r.size_of_match_portion.toPrecision(3);return`\\frac{${c}}{(${c}) + (${u})}  \\newline[10pt] = \\frac{${_}}{${_} + ${r.size_of_non_match_portion.toPrecision(3)}}  \\newline[10pt] = ${d}`}}function ge(e){return function(t,a){let o=e(t,a),r=o.m_symbols,n=o.u_symbols,i=(o.lam,["\\lambda"].concat(r)),l=["(1 - \\lambda)"].concat(n),s=i.join(" ");return`\\frac{${s}}{${s}) + ${l.join(" ")}}`}}function ye(e,t,a,o){return e`${t(a.objects()[0],o)}
`}function we(e){return function(t,a,o){let r=e(t,a,o);return`\\bm{\\gamma} = [${r.gamma_symbols.join(", ")}]= [${r.comparison_vector.join(", ")}]`}}function xe(e,t,a,o){return e`${t(a.objects()[0],o)}
`}function ke(e){return e`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function qe(e,t,a,o){return e`${t(a.objects()[0],o)}`}function $e(e,t,a){return e(t.objects()[0],a)}function Te(e){return function(t,a){let o=e.from(t),r=e.from(a),n=o.join(r,((e,t)=>!0),null,{suffix:["_l","_r"]}),i=o.columnNames(),l=[];return i.forEach((e=>{l.push(e+"_l"),l.push(e+"_r")})),n=n.select(l),n}}function Pe(e){return function(t,a){let o=a.comparison_columns,r=t.objects();o.forEach((function(e){r.forEach((function(t){t["𝛾_"+e.col_name]=e.case_expression(t)}))})),r=e.from(r);let n=["uid_l","uid_r"];return o.forEach((e=>{n.push(e.col_name+"_l"),n.push(e.col_name+"_r"),n.push("𝛾_"+e.col_name)})),r=r.select(n),r}}function Ee(){return function(e){return e/(e+1)}}function Fe(e){return function(t){return e(2**t)}}function Se(){return function(e){return e/(1-e)}}function Be(e){return function(t){return Math.log2(e(t))}}function Ae(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function Ce(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.surname]=e.freq})),t}))}function Ne(e,t){return{fname:e,sname:t}}function je(e){return e.fname.joshua}function We(e){return e.sname.linacre}function Me(e,t){const a=e.module();a.variable(t()).define(["md"],ne),a.variable(t("records_l")).define("records_l",ie),a.variable(t("records_r")).define("records_r",le),a.variable(t("df_r")).define("df_r",["aq","records_r"],se),a.variable(t("splink_settings")).define("splink_settings",me),a.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],ce),a.variable(t()).define(["df_comparison"],ue),a.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],de),a.variable(t()).define(["df_gammas"],_e),a.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],fe),a.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],pe),a.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],be),a.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],he),a.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],ve),a.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],ge),a.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],ye),a.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],we),a.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],xe),a.variable(t()).define(["tex"],ke),a.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],qe),a.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],$e),a.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],Te),a.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],Pe),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Ee),a.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],Fe),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",Se),a.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],Be);const o=e.module(P);return a.import("aq",o),a.import("op",o),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],Ae),a.variable(t("surname_lookup")).define("surname_lookup",["d3"],Ce),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Ne),a.variable(t()).define(["term_freqs"],je),a.variable(t()).define(["term_freqs"],We),a}function Ie(e){return e`# Charts and Figures (Introduction)`}function Le(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bristol"})}function Je(e){return new e({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bath"})}function Ke(e,t,a){return new e(t,a)}function Oe(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.9,.1],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7]}]}}function Re(e,t){let a=e.as_wide().objects()[0];return Object.keys(t.as_dict()).forEach((e=>{a[e+"_l"]==a[e+"_r"]?a["𝛾_"+e]=1:a["𝛾_"+e]=0})),a}function Ve(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}}function De(e,t,a,o){return e(t,a,o,!0)}function He(e){return e`# Charts and Figures (Mathematical Model)`}function Ue(){return function(e){const t=[],a={"unique id":"uid","first name":"fname",surname:"sname","date of birth":"dob",town:"town"};e.querySelectorAll("tr").forEach(((e,a)=>{let o=e.cells,r=[];for(let t of o){let e=t.innerText;e=e.trim(),e=e.toLowerCase(),""==e&&(e=null),r.push(e)}t.push(r)}));return t.reduce(((e,t,o)=>{if(0==o)t=t.map((e=>a[e])),e.properties=t;else{const a={};e.properties.forEach(((e,o)=>{a[e]=t[o]})),e.push(a)}return e}),[])}}function Ge(e,t,a){return e.observe((e=>{const o=o=>e(t(a));return a.addEventListener("input",o,!1),e(t(a)),()=>window.removeEventListener("input",o)}))}function ze(e){return e`
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
`}function Ze(e){return e`
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
`}function Ye(e,t,a){return e.observe((e=>{const o=o=>e(t(a));return a.addEventListener("input",o,!1),e(t(a)),()=>window.removeEventListener("input",o)}))}function Qe(e,t){return e.from(t)}function Xe(e,t){return e.from(t)}function et(e,t,a){return e(t,a)}function tt(e,t,a){return e(t,a)}function at(e){let t=e.columnNames();return t=t.filter((e=>e.includes("𝛾_"))),t=["uid_l","uid_r"].concat(t),e.select(t)}function ot(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function rt(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"July"})}function nt(e){return new e({first_name:"Tom",surname:"Hanks",month_of_birth:"June"})}function it(e,t,a){return new e(t,a)}function lt(e,t){const a=e.module();a.variable(t()).define(["md"],Ie);const o=e.module(B);a.import("Record",o),a.import("RecordComparison",o);const r=e.module(re);a.import("get_waterfall_chart",r),a.variable(t("example_record_1_l")).define("example_record_1_l",["Record"],Le),a.variable(t("example_record_1_r")).define("example_record_1_r",["Record"],Je),a.variable(t("example_1_comparison")).define("example_1_comparison",["RecordComparison","example_record_1_l","example_record_1_r"],Ke),a.variable(t("splink_settings")).define("splink_settings",Oe),a.variable(t("example_1_row_with_gammas")).define("example_1_row_with_gammas",["example_1_comparison","example_record_1_l"],Re),a.variable(t("overrides")).define("overrides",Ve),a.variable(t("intro_simple_waterfall")).define("intro_simple_waterfall",["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"],De),a.variable(t()).define(["md"],He);const n=e.module(Me);a.import("get_df_comparison",n),a.import("get_df_gammas",n),a.variable(t("parseTableData")).define("parseTableData",Ue),a.variable(t("records_l")).define("records_l",["Generators","parseTableData","table_l"],Ge),a.variable(t("table_l")).define("table_l",["html"],ze),a.variable(t("table_r")).define("table_r",["html"],Ze),a.variable(t("records_r")).define("records_r",["Generators","parseTableData","table_r"],Ye),a.variable(t("df_1_l")).define("df_1_l",["aq","records_l"],Qe),a.variable(t("df_1_r")).define("df_1_r",["aq","records_r"],Xe),a.variable(t("df_comparisons_1")).define("df_comparisons_1",["get_df_comparison","records_l","records_r"],et),a.variable(t("df_gammas_1")).define("df_gammas_1",["get_df_gammas","df_comparisons_1","splink_settings_1"],tt),a.variable(t("df_gammas_only_1")).define("df_gammas_only_1",["df_gammas_1"],at),a.variable(t("splink_settings_1")).define("splink_settings_1",ot),a.variable(t("example_record_2_l")).define("example_record_2_l",["Record"],rt),a.variable(t("example_record_2_r")).define("example_record_2_r",["Record"],nt),a.variable(t("example_2_comparison")).define("example_2_comparison",["RecordComparison","example_record_2_l","example_record_2_r"],it);const i=e.module(P);return a.import("aq",i),a.import("op",i),a}function st(e){return e`# Match Weights Charts`}function mt(e){return{config:{view:{width:e/3,height:300},title:{anchor:"middle",offset:10},header:{title:null}},hconcat:[{mark:"bar",title:{text:"Non-matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},x:{type:"quantitative",field:"u_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"u_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"red"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter2 due to vega lite issue 4680')"}],height:50},{mark:"bar",title:{text:"Matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labels:!1}},x:{type:"quantitative",field:"m_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"green"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter due to vega lite issue 4680')"}],height:50}],data:{values:null},transform:[],title:{text:"Probability distributions of non-matches and matches ",subtitle:"Estimated proportion of matches λ = "},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function ct(e){return{config:{view:{width:e/1.5,height:300},mark:{tooltip:null},title:{anchor:"middle"},header:{title:null}},data:{values:null},mark:{type:"bar",clip:!0},selection:{selector076:{type:"interval",bind:"scales",encodings:["x"]}},encoding:{color:{type:"quantitative",field:"log2_bayes_factor",scale:{range:["red","orange","green"],domain:[-10,0,10]}},row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",title:"log2(Bayes factor, K = m/u)",format:".4f"}],x:{type:"quantitative",axis:{title:"log2(Bayes factor, K = m/u)",values:[-10,-5,0,5,10]},field:"log2_bayes_factor",scale:{domain:[-10,10]}},y:{type:"nominal",field:"level_name",axis:{title:null}}},height:50,resolve:{scale:{y:"independent"}},title:{text:"Influence of comparison vector values on match probability",subtitle:"Use mousewheeel to zoom"},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function ut(e){return JSON.parse(e)}function dt(e){return function(t){let a=[];return t.comparison_columns.forEach((t=>{var o,r;(o=t.m_probabilities,r=t.u_probabilities,o.map(((e,t)=>[e,r[t]]))).forEach(((o,r)=>{let n=e(o,t,r);a.push(n)}))})),a}}function _t(e,t,a){return function(o){let r=JSON.parse(JSON.stringify(e)),n=o.proportion_of_matches;return r.data.values=t(o),r.title.subtitle=`Estimated proportion of matches λ = ${n}`,a(r)}}function ft(e,t){return e(t)}function pt(e,t,a){return function(o){let r=JSON.parse(JSON.stringify(e)),n=o.proportion_of_matches;return r.data.values=t(o),r.title.subtitle=`Estimated proportion of matches λ = ${n.toPrecision(4)}`,a(r)}}function bt(e,t){return e(t)}function ht(){return function(e,t,a){let o={},r=t;return o.m_probability=e[0],o.u_probability=e[1],o.bayes_factor=e[0]/e[1],o.column_name=r.col_name,o.log2_bayes_factor=Math.log2(o.bayes_factor),o.gamma_index=a,o.gamma_column_name="gamma_"+r.col_name,o.level_name="level_"+a,o.max_gamma_index=r.m_probabilities.length-1,o.num_levels=r.m_probabilities.length,o}}function vt(){return'{\n    "proportion_of_matches": 0.001,\n    "comparison_columns": [\n      {\n        "col_name": "fname",\n        "u_probabilities": [0.8, 0.2],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "sname",\n        "u_probabilities": [0.9, 0.1],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "dob",\n        "u_probabilities": [0.99, 0.01],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "town",\n        "u_probabilities": [0.7, 0.3],\n        "m_probabilities": [0.3, 0.7]\n      }\n    ]\n  \n  }'}function gt(e){return e("vega-embed@6")}function yt(e,t){const a=e.module();return a.variable(t()).define(["md"],st),a.variable(t("base_spec_m_u")).define("base_spec_m_u",["width"],mt),a.variable(t("base_spec_bayes_factors")).define("base_spec_bayes_factors",["width"],ct),a.variable(t("settings_example")).define("settings_example",["default_splink_settings"],ut),a.variable(t("chart_data_from_splink_settings")).define("chart_data_from_splink_settings",["get_chart_row"],dt),a.variable(t("get_m_u_chart")).define("get_m_u_chart",["base_spec_m_u","chart_data_from_splink_settings","embed"],_t),a.variable(t()).define(["get_m_u_chart","settings_example"],ft),a.variable(t("get_bayes_factor_chart")).define("get_bayes_factor_chart",["base_spec_bayes_factors","chart_data_from_splink_settings","embed"],pt),a.variable(t()).define(["get_bayes_factor_chart","settings_example"],bt),a.variable(t("get_chart_row")).define("get_chart_row",ht),a.variable(t("default_splink_settings")).define("default_splink_settings",vt),a.variable(t("embed")).define("embed",["require"],gt),a}function wt(e){return e`# The mathematics of the Fellegi Sunter model`}function xt(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`}function kt(e){return e`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`}function qt(e){return e`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`}function $t(e){return e`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`}function Tt(e){return e}function Pt(e){return e`### Dataset 2`}function Et(e){return e}function Ft(e,t){return e`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${t.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`}function St(e,t,a,o,r,n){return e`## Comparing columns

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

${o`${r(t.slice(0,1).objects()[0],n)}`}
 `}function Bt(e){return e`## Scoring comparisons`}function At(e){return e`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`}function Ct(e,t){return e`### m and u probabilities 

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


`}function Nt(e,t,a){return e`We can generalise this formula by using  ${t`\gamma`} to indicate the value of the comparison, the index ${t`k`} to designate the comparison column, and ${t`\ell`} to designate the observed comparison level, we can write:

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

`}function jt(e){return e`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`}function Wt(e){return e`## Example`}function Mt(e){return e`
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

`}function It(e,t){return e.textarea({value:t,rows:26,spellcheck:!1})}function Lt(e){return e`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`}function Jt(e,t){return e.range([1,t.numRows()],{value:1,label:"Choose record comparison",step:1})}function Kt(e,t,a){return e`${t.slice(a-1,a).toMarkdown()}`}function Ot(e,t,a,o,r,n){return e`The comparison vector is given by:

${t`${a(o.slice(r-1,r).objects()[0],n)}`}

`}function Rt(e){return e`The formula for match probability is:`}function Vt(e,t,a,o,r){return e`${t(a.slice(o-1,o).objects()[0],r)}`}function Dt(e){return e`And substituting in numbers using our specified parameters we get: `}function Ht(e,t,a,o,r){return e`${t(a.slice(o-1,o).objects()[0],r)}`}function Ut(e,t,a,o,r,n){return e`i.e. the ${t`\text{estimated match probability} = 

${a(o.slice(r-1,r).objects()[0],n).match_probability.toPrecision(4)}

`}

`}function Gt(e){return e`<br><br>`}function zt(e,t,a){return e`## Annex:  Bayes Theorem

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
`}function Zt(e){return e`## Calculations and code`}function Yt(e){return e.options({displayMode:!0,fleqn:!0})}function Qt(){return'{\n    "proportion_of_matches": 0.01,\n    "comparison_columns": [\n      {\n        "col_name": "fname",\n        "u_probabilities": [0.8, 0.2],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "sname",\n        "u_probabilities": [0.9, 0.1],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "dob",\n        "u_probabilities": [0.99, 0.01],\n        "m_probabilities": [0.2, 0.8]\n      },\n      {\n        "col_name": "town",\n        "u_probabilities": [0.7, 0.3],\n        "m_probabilities": [0.3, 0.7]\n      }\n    ]\n  \n  }'}function Xt(e){return JSON.parse(e)}function ea(e){return e`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function ta(e){return e("@observablehq/inputs")}function aa(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],wt),a.variable(t()).define(["md"],xt),a.variable(t("para_1")).define("para_1",["md"],kt),a.variable(t("para_2")).define("para_2",["md"],qt),a.variable(t("para_3")).define("para_3",["md"],$t),a.variable(t("table_l1")).define("table_l1",["table_l"],Tt),a.variable(t("ds2_head")).define("ds2_head",["md"],Pt),a.variable(t("table_r1")).define("table_r1",["table_r"],Et),a.variable(t("rec_comparisons")).define("rec_comparisons",["md","df_comparisons_1"],Ft),a.variable(t("para_4")).define("para_4",["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"],St),a.variable(t("subhead_1")).define("subhead_1",["md"],Bt),a.variable(t("para_5")).define("para_5",["md"],At),a.variable(t("para_6")).define("para_6",["md","texd"],Ct),a.variable(t("para_7")).define("para_7",["md","tex","texd"],Nt),a.variable(t("para_8")).define("para_8",["md"],jt),a.variable(t("subhead_2")).define("subhead_2",["md"],Wt),a.variable(t("para_10")).define("para_10",["md"],Mt),a.variable(t("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],It),a.variable(t("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],((e,t)=>e.input(t))),a.variable(t("para_11")).define("para_11",["md"],Lt),a.variable(t("viewof row_index")).define("viewof row_index",["inputs","df_gammas_1"],Jt),a.variable(t("row_index")).define("row_index",["Generators","viewof row_index"],((e,t)=>e.input(t))),a.variable(t("this_row")).define("this_row",["md","df_comparisons_1","row_index"],Kt),a.variable(t("para_12")).define("para_12",["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"],Ot),a.variable(t("para_13")).define("para_13",["md"],Rt),a.variable(t("para_14")).define("para_14",["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"],Vt),a.variable(t("para_15")).define("para_15",["md"],Dt),a.variable(t("para_16")).define("para_16",["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"],Ht),a.variable(t("para_17")).define("para_17",["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"],Ut),a.variable(t("para_18")).define("para_18",["md"],Gt),a.variable(t("para_19")).define("para_19",["md","texd","tex"],zt),a.variable(t()).define(["md"],Zt);const o=e.module(lt);a.import("example_2_comparison",o),a.import("intro_simple_waterfall",o),a.import("table_l",o),a.import("table_r",o),a.import("df_1_l",o),a.import("df_1_r",o),a.import("df_comparisons_1",o),a.import("df_gammas_1",o),a.import("df_gammas_only_1",o);const r=e.module(Me);return a.import("get_m_u_formula_symbols",r),a.import("get_m_u_formula_numbers",r),a.import("get_comparison_vector_symbols_and_numbers",r),a.import("get_match_probability_components",r),a.variable(t("texd")).define("texd",["tex"],Yt),a.variable(t("default_splink_settings")).define("default_splink_settings",Qt),a.variable(t("settings")).define("settings",["splink_settings"],Xt),a.variable(t("css_styles")).define("css_styles",["html"],ea),a.variable(t("inputs")).define("inputs",["require"],ta),a}function oa(e){return e`# Understanding match weights`}function ra(e){return e`Some columns are more important than others to the calculation of overall match probability.  For example, a match on date of birth provides stronger evidence in favour of a match than a match on gender.

The relative importance of columns is quantified in a model's _match weights_.

In this article, we explore the concept of match weights, using visualisations to help build intuition for how they work.  

The annex to this article presents the maths for how our implementation of the Fellegi Sunter model can be decomposed into a series of match weights.

`}function na(e,t){return e`## Match weights 

A single comparison column provides evidence in favour or against a match, but this evidence is rarely conclusive.  The ambiguity arises because any observation on the comparison column is consistent with two possibilities.



- **A match on a column is consistent with the possibility that the entities match, but could also be due to two different entities sharing the same information (a 'collision').**

  The comparative likelihood of these two possibilities is a measure of the amount of evidence in favour of a match.  That is, we want to compare:
  
  ${t`\operatorname{Pr}(\text{column matches}|\text{records match})`} vs. ${t`\operatorname{Pr}(\text{column matches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${t`m_\text{col, level 1}`} vs. ${t`u_\text{col, level 1}`}.


- **A non-match on a column is consistent with the possibility the entities differ, but could also be due to typos or other variations in how information has been recorded about the same entity.**
  
   The comparative likelihood of these two possibilities is a measure of the amount of evidence against a match.  
  
    ${t`\operatorname{Pr}(\text{column mismatches}|\text{records match})`} vs. ${t`\operatorname{Pr}(\text{column mismatches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${t`m_\text{col, level 0}`} vs. ${t`u_\text{col, level 0}`}.

We use the ratio of these values to compare their magnitude.  This ratio is known as a Bayes Factor.

`}function ia(e,t,a){return e`## Bayes Factors

Mathematically we can define the [Bayes Factor](https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/) for a given comparison column as:

${t`K_\text{col, level} =  \frac{m_\text{col, level}}{u_\text{col, level}}= \frac{\operatorname{Pr}(\gamma_\text{col,level}|\text{records match})}{\operatorname{Pr}(\gamma_\text{col,level}|\text{records do not match})}`}


Bayes factors can be explained in words.  For example, a Bayes Factor of 20 for a given column means that an overall match is now 20 times more probable.  A Bayes Factor of ${a`\frac{1}{10}`} for a given column means an overall match is 10 times less probable.

In this sense, a Bayes Factor is are similar to the concept of odds.  Odds of 4 mean that an even happens four out of five times, or in some sense it is four times more likely for the even to happen than not happen.

However, Bayes Factors differ from odds in that they are only meaningful in the context of a prior.  A Bayes Factor is an adjustment - it tells us something is more or less likely.  But we need a starting value - otherwise there's nothing to apply the adjustment to.

Let's see how this works:


`}function la(e){return e.range([0,1],{step:.01,label:"prior probability =",value:.5})}function sa(e,t){return e.range([0,1],{step:.01,label:t`m_\text{col, level} =`,value:.8})}function ma(e,t){return e.range([0,1],{step:.01,label:t`u_\text{col, level} =`,value:.2})}function ca(e,t,a){return e`\text{Bayes Factor} = \frac{m_\text{col, level}}{u_\text{col, level}} = \frac{${t}}{${a}} = ${(t/a).toPrecision(4)} `}function ua(e,t,a,o){return e`\text{posterior} = \frac{\text{prior}\times m}{\text{prior}\times m + (1-\text{prior})\times u}= ${(t*a/(t*a+(1-t)*o)).toPrecision(4)}`}function da(e){return e`## Match weights`}function _a(e,t){return e`Finally, it can be convenient to take the logarithm of Bayes Factors because this [enables match weights to be added together](https://math.stackexchange.com/questions/965500/intuitive-understanding-of-logarithms) rather than being multiplied.

${t`\text{match weight for dob} =  \log(K_\text{col, level})`}

This transformation is also useful for visualising match weights.  Bayes factors are difficult to represent on a single scale becuse they represent ratios, which can be very large or very tiny, whereas log bayes factors can easily be viewed and compared on a single scale.
`}function fa(e,t,a){return e`## Determinants of match weights

### Column matches

Where a column matches, the key determinant of match weight is the cardinality of the column (the number of unique values).  

For example, imagine we are linking a dataset of children, and consider the date of birth field.

The Bayes Factor is ${t`\frac{m_\text{dob, level 1}}{u_\text{dob, level 1}}`}  

The numerator is the probability that date of birth matches amongst records which truly match.

This is likely to be high.  With good data quality it will approach 1.0, and even with poor data quality it's likely to be above 0.8.

The term ${t`u_\text{dob, level 1}`} is the probability that date of birth matches amongst records which do not match.  


This is likely to be very small.  If the children are aged below 18, then there will be ${t`18 \times 365`} = ${6570..toLocaleString()} different dates of birth.  We can therefore estimate that:

${a`u_\text{dob, level 1} = \frac{1}{${6570}} = ${(1/6570).toPrecision(4)}`}

Let's assume that the numerator is 0.9.  The Bayes Factor would be ${t`\frac{0.9}{${(1/6570).toPrecision(4)}}`} = ${5913}  i.e. very strong evidence in favour of a match.    

The denominator drives this result - the precise value of the numerator does not matter much.

### Column does not match

Where a column does not match, the key deterinant of match weight is the probability of mismatches among records that truly match.  This could be due to typos, transcription errors, or other reasons for variation in data (e.g. change of address).  Loosely speaking, this is a measure of data quality.

For example, imagine we are linking a large dataset of people, and consider the gender field.  Imagine this is recorded with high precision, and for the sake of this example, suppose no-one in the dataset has changed their gender.

The Bayes Factor is ${t`\frac{m_\text{gender, level 0}}{u_\text{gender, level 0}}`}  

The numerator tells us how often we observe a mismatch on gender amongst truly matching records.  Since data is entered with high precision, this number is low.  Let's say the rate of error is one in a thousand.

The denominator tells us how often we observe a mismatch on gender among truly non-matching records.  For gender this is likely to be around 0.5.  Note that the denominator would generally be a high number (almost always in the range 0.5 - 1.0) irrespective of the column type.

The Bayes Factor would be ${t`\frac{0.001}{0.5}`} = ${.002}  .  This is very strong evidence against a match.

The numerator drives this result - the precise value of the denominator does not matter.


`}function pa(e){return e`## Visualising match weights`}function ba(e){return e`These concepts allow us to succinctly summarise the m and u values and match weights of a Fellegi Sunter model graphically.  For instance, consider the following model: (*You may adjust the m and u values*):`}function ha(e){return e`This allows a succinct visualisation of the match weights for a Fellegi Sunter model as follows.  You may edit these values to see how they affect the charts.`}function va(e,t){return e.textarea({value:t,rows:26,spellcheck:!1})}function ga(e){return e`The m and u probabilities can be shown in the following chart:`}function ya(e,t){return e(JSON.parse(t))}function wa(e){return e`And the Bayes Factors can be visualised as follows:`}function xa(e,t){return e(JSON.parse(t))}function ka(e){return e`## Waterfall chart

Finally, for given values of the comparison columns, we can use the log 2 Bayes Factors to plot a chart that shows the calculation of the final probability.  The log 2 Bayes Factor is on the right hand access, and the probability is shown on the right hand axis.  Hover over the bars for more information.`}function qa(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of fname column",value:"Values match"})}function $a(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of sname column",value:"Values match"})}function Ta(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of dob column",value:"Values match"})}function Pa(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of town column",value:"Values do not match"})}function Ea(e,t,a){return e(t,JSON.parse(a),{height:300},!1)}function Fa(e,t,a,o){return e`Final match probability:
${t(a,JSON.parse(o)).match_probability.toPrecision(4)}`}function Sa(e){return e`## Mathematical annex: Rewriting the Fellegi Sunter formula in terms of odds, and Bayes Factors`}function Ba(e,t){return e`In this section, we show why it is possible to compute match probabilities by adding together log2 Bayes Factors.

Start with our equation for match probability:

${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.1} `}

And note that we could similarly define:

${t`
\operatorname{Pr}(\text{records do not match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.2} `}

`}function Aa(e,t){return e`Now we introduce the [formula for odds](https://en.wikipedia.org/wiki/Odds#Statistical_usage): 

${t`\text{odds} = \frac{p}{1-p}`} 
where p is probability.


For example odds of 4 mean that this event happens 4 out of 5 times, which correponds to a probability of 80%.

Dividing (1.1) by (1.2) we see that:

${t`
\text{odds}(\text{records  match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}\tag{1.3} `}

Also recall that the Bayes Factor for column i can be defined as:
${t`b_{i\ell}=\frac{m_{i\ell}}{u_{i\ell}}`} 
so we can write the odds that records match as :

${t`
\text{odds of match} = \frac{\lambda }{(1-\lambda) } b_{1\ell}b_{2\ell}\ldots b_{K\ell}\tag{1.4} `}


Which can then be converted into a probability using:

${t`p = \frac{\text{odds}}{1+\text{odds}}`}

Sometimes it can also be convenient to use log odds, because these can be computed with addition rather than multiplication:

${t`
\text{log odds of match} = \log{(\frac{\lambda }{(1-\lambda) })} \log({b_{1\ell}})+\log({b_{2\ell}})+\ldots +\log({b_{K\ell})}\tag{1.5} `}

This final representation is what is used in the waterfall chart to represent the computation of match probability
`}function Ca(e){return e.options({displayMode:!0,fleqn:!0})}function Na(e){return e`<style>
.katex-display>.katex { font-size: 1em}
.katex-display {
    max-width: None;
}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function ja(e,t,a,o){let r={};return r["𝛾_fname"]="Values match"==e?1:0,r["𝛾_sname"]="Values match"==t?1:0,r["𝛾_dob"]="Values match"==a?1:0,r["𝛾_town"]="Values match"==o?1:0,r}function Wa(e){return e("@observablehq/inputs@0.8.0")}function Ma(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],oa),a.variable(t("para_1")).define("para_1",["md"],ra),a.variable(t("para_2")).define("para_2",["md","tex"],na),a.variable(t("para_3")).define("para_3",["md","texd","tex"],ia),a.variable(t("viewof prior")).define("viewof prior",["inputs"],la),a.variable(t("prior")).define("prior",["Generators","viewof prior"],((e,t)=>e.input(t))),a.variable(t("viewof m")).define("viewof m",["inputs","tex"],sa),a.variable(t("m")).define("m",["Generators","viewof m"],((e,t)=>e.input(t))),a.variable(t("viewof u")).define("viewof u",["inputs","tex"],ma),a.variable(t("u")).define("u",["Generators","viewof u"],((e,t)=>e.input(t))),a.variable(t("bf")).define("bf",["tex","m","u"],ca),a.variable(t("post")).define("post",["tex","prior","m","u"],ua),a.variable(t("subhead_1")).define("subhead_1",["md"],da),a.variable(t("para_4")).define("para_4",["md","texd"],_a),a.variable(t("para_5")).define("para_5",["md","tex","texd"],fa),a.variable(t("subhead_2")).define("subhead_2",["md"],pa),a.variable(t("para_6")).define("para_6",["md"],ba),a.variable(t("para_7")).define("para_7",["md"],ha),a.variable(t("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],va),a.variable(t("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],((e,t)=>e.input(t))),a.variable(t("para_8")).define("para_8",["md"],ga),a.variable(t("chart_1")).define("chart_1",["get_m_u_chart","splink_settings"],ya),a.variable(t("para_9")).define("para_9",["md"],wa),a.variable(t("chart_2")).define("chart_2",["get_bayes_factor_chart","splink_settings"],xa),a.variable(t("para_10")).define("para_10",["md"],ka),a.variable(t("viewof fname_radio")).define("viewof fname_radio",["inputs"],qa),a.variable(t("fname_radio")).define("fname_radio",["Generators","viewof fname_radio"],((e,t)=>e.input(t))),a.variable(t("viewof sname_radio")).define("viewof sname_radio",["inputs"],$a),a.variable(t("sname_radio")).define("sname_radio",["Generators","viewof sname_radio"],((e,t)=>e.input(t))),a.variable(t("viewof dob_radio")).define("viewof dob_radio",["inputs"],Ta),a.variable(t("dob_radio")).define("dob_radio",["Generators","viewof dob_radio"],((e,t)=>e.input(t))),a.variable(t("viewof town_radio")).define("viewof town_radio",["inputs"],Pa),a.variable(t("town_radio")).define("town_radio",["Generators","viewof town_radio"],((e,t)=>e.input(t))),a.variable(t("chart_3")).define("chart_3",["get_waterfall_chart","row","splink_settings"],Ea),a.variable(t("para_11")).define("para_11",["md","get_match_probability_components","row","splink_settings"],Fa),a.variable(t("annex")).define("annex",["md"],Sa),a.variable(t("para_12")).define("para_12",["md","texd"],Ba),a.variable(t("para_13")).define("para_13",["md","texd"],Aa),a.variable(t("texd")).define("texd",["tex"],Ca),a.variable(t("css_styles")).define("css_styles",["html"],Na);const o=e.module(lt);a.import("intro_simple_waterfall",o);const r=e.module(yt);a.import("get_m_u_chart",r),a.import("get_bayes_factor_chart",r),a.import("default_splink_settings",r);const n=e.module(re);a.import("get_waterfall_chart",n),a.variable(t("row")).define("row",["fname_radio","sname_radio","dob_radio","town_radio"],ja);const i=e.module(aa);return a.import("get_match_probability_components",i),a.variable(t("inputs")).define("inputs",["require"],Wa),a}var Ia=a(5860),La=a(2692),Ja=a(6702);const Ka=e=>o.createElement(n.H,{frontmatter:e.pageContext.frontmatter}),Oa=["title","para_1","para_2","para_3","viewof prior","viewof m","viewof u","bf","post","subhead_1","para_4","para_5","subhead_2","para_6","para_7","viewof splink_settings","para_8","chart_1","para_9","chart_2","para_10","viewof fname_radio","viewof sname_radio","viewof dob_radio","viewof town_radio","chart_3","para_11","annex","para_12","para_13","css_styles"];function Ra(e){return o.createElement(o.Fragment,null,o.createElement(Ja.Z,{frontmatter:e.pageContext.frontmatter}),"\n",o.createElement(Ia.Z,{notebook:Ma,cells:Oa}),"\n",o.createElement(La.Z,{frontmatter:e.pageContext.frontmatter}))}var Va=function(e){return void 0===e&&(e={}),o.createElement(r.fE,e,o.createElement(Ra,e))}},6702:function(e,t,a){var o=a(7294),r=a(4160);t.Z=e=>{var t,a,n,i,l,s;let{frontmatter:m}=e;const{tutorial_number:c}=m,u=(0,r.K2)("4236107564"),d=u.allMdx.edges.map((e=>e.node.frontmatter.tutorial_number)),_=d.includes(c-1),f=d.includes(c+1),p=null===(t=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c-1)))||void 0===t||null===(a=t.node)||void 0===a||null===(n=a.fields)||void 0===n?void 0:n.slug,b=null===(i=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c+1)))||void 0===i||null===(l=i.node)||void 0===l||null===(s=l.fields)||void 0===s?void 0:s.slug;return o.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},o.createElement("div",{className:"flex justify-between"},o.createElement("div",{className:"w-1/3 text-left"},_&&o.createElement(r.rU,{to:p,className:"text-blue-500 hover:underline"},"← Previous article")),o.createElement("div",{className:"w-1/3 text-center"},o.createElement("span",null,"This is part ",c," of the"," ",o.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"tutorial"))),o.createElement("div",{className:"w-1/3 text-right"},f&&o.createElement(r.rU,{to:b,className:"text-blue-500 hover:underline"},"Next article →"))))}},5860:function(e,t,a){var o=a(7294),r=a(6493);const n="mdx-container-div",i=new r.Zu,l=Object.assign({},i,{width:function(){return i.Generators.observe((e=>{let t=e(document.getElementById(n).clientWidth);function a(){let a=document.getElementById(n).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}});t.Z=function(e){let{notebook:t,cells:a,customClassName:n}=e;const i=(0,o.useRef)(a.map((()=>o.createRef())));return(0,o.useEffect)((()=>{const e=new r.r_(l);return e.module(t,(e=>{const t=a.indexOf(e);if(-1!==t)return new r.lj(i.current[t].current)})),()=>e.dispose()}),[t,a]),o.createElement("div",{className:n},i.current.map(((e,t)=>o.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,a){a.d(t,{H:function(){return n}});var o=a(7294),r=a(4160);const n=e=>{let{frontmatter:t}=e;const{title:a,description:n,image:i,siteUrl:l,twitterUsername:s}=(0,r.K2)("1865044719").site.siteMetadata,m={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||n,image:`${l}${(null==t?void 0:t.image)||i}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:s,...t},c=null==t?void 0:t.stylesheet;return o.createElement(o.Fragment,null,o.createElement("title",null,m.title),o.createElement("meta",{name:"description",content:m.description}),o.createElement("meta",{name:"image",content:m.image}),c&&o.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${c}`}))}},2692:function(e,t,a){var o=a(7294),r=a(4160);t.Z=e=>{let{frontmatter:t}=e;const{tutorial_number:a,title:n}=t,i=(0,r.K2)("1842021157").allMdx.edges.sort(((e,t)=>e.node.frontmatter.tutorial_number-t.node.frontmatter.tutorial_number));return o.createElement("div",{className:"bg-blue-100  p-4 mt-8  mb-4 rounded-lg "},o.createElement("div",{className:"container mx-auto"},o.createElement("div",{className:"text-blue-800 font-semibold text-base mb-2"},o.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"Probabilistic Linkage Tutorial Navigation:")),o.createElement("ol",{className:"space-y-2 text-sm"},i.map((e=>o.createElement("li",{key:e.node.frontmatter.tutorial_number,className:"text-blue-600 text-sm"},a===e.node.frontmatter.tutorial_number?o.createElement("span",{className:"font-bold text-sm"},e.node.frontmatter.title):o.createElement(r.rU,{to:e.node.fields.slug,className:"hover:underline"},e.node.frontmatter.title)))))))}}}]);
//# sourceMappingURL=component---src-mdx-understanding-match-weights-mdx-5969aafa2a003aac818c.js.map