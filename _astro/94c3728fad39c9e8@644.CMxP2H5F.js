function $(a){return a`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function q(a){return a`Import Arquero and extend it to print HTML tables in Observable:`}async function T(a,e,t,o){const i=await a(`arquero@${e}`);return(await Promise.all(t.map(n=>a(n)))).forEach(n=>i.addPackage(n)),i.addTableMethod("view",o,{override:!0}),i}function P(){return"4.2.0"}function F(){return[]}function S(a){return a`Export a global reference to Arquero operations:`}function B(a){return a.op}function A(a){return a`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function j(a){return a`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function C(a){return a`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function E(a){return a`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function W(a){return a`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function L(a){return a.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function I(a){return a`Sorted differences between Seattle and Chicago:`}function R(a,e){return a.derive({month:t=>e.row_number(),diff:t=>t.Seattle-t.Chicago}).select("month","diff").orderby("month").view({height:400})}function J(a){return a`Is Seattle more correlated with San Francisco or Chicago?`}function N(a,e){return a.rollup({corr_sf:e.corr("Seattle","San Francisco"),corr_chi:e.corr("Seattle","Chicago")}).view()}function M(a){return a`Summary statistics per city, as output objects:`}function O(a,e,t){return a.fold(e.all(),{as:["city","sun"]}).groupby("city").rollup({min:o=>t.min(o.sun),max:o=>t.max(o.sun),avg:o=>t.average(o.sun),med:o=>t.median(o.sun),skew:({sun:o})=>(t.mean(o)-t.median(o))/t.stdev(o)||0}).objects()}function V(a){return a`<hr>
## Utilities
`}function D(a){const t=n=>`<span style="color: #999;">${n}</span>`,o="margin: 0; border-collapse: collapse; width: initial;",i="padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums;";return function(n,l={}){typeof l=="number"&&(l={limit:l});const r={...l.color};if(typeof l.color=="function")n.columnNames().forEach(u=>r[u]=l.color);else for(const u in r){const d=r[u];r[u]=typeof d=="function"?d:()=>d}const s=`${o}`,m=(u,d,p)=>`${i} max-width: ${+l.maxCellWidth||300}px;`+(r[u]?` background-color: ${r[u](d,p)};`:"");l={limit:100,null:t,...l,style:{table:s,td:m,th:m}};const c=`${`max-height: ${+l.height||270}px`}; overflow-x: auto; overflow-y: auto;`,f=a`<div style="${c}">${n.toHTML(l)}</div>`;return f.value=n,f}}function b(a,e){const t=a.module();return t.variable(e()).define(["md"],$),t.variable(e()).define(["md"],q),t.variable(e("aq")).define("aq",["require","aq_version","aq_packages","toView"],T),t.variable(e("aq_version")).define("aq_version",P),t.variable(e("aq_packages")).define("aq_packages",F),t.variable(e()).define(["md"],S),t.variable(e("op")).define("op",["aq"],B),t.variable(e()).define(["md"],A),t.variable(e()).define(["md"],j),t.variable(e()).define(["md"],C),t.variable(e()).define(["md"],E),t.variable(e()).define(["md"],W),t.variable(e("dt")).define("dt",["aq"],L),t.variable(e()).define(["md"],I),t.variable(e()).define(["dt","op"],R),t.variable(e()).define(["md"],J),t.variable(e()).define(["dt","op"],N),t.variable(e()).define(["md"],M),t.variable(e()).define(["dt","aq","op"],O),t.variable(e()).define(["md"],V),t.variable(e("toView")).define("toView",["html"],D),t}function K(a){return a`# Record Utilities`}function z(a){return class{constructor(t){this.record_dict=t}as_dict(){return this.record_dict}as_aq(){return a.from([this.record_dict])}display(){return this.as_aq().view()}}}function G(a){return class{constructor(t,o){this.record_l=t,this.record_r=o}as_long(){let t=[this.record_l.as_dict(),this.record_r.as_dict()];return a.from(t)}as_wide(){let t=this.record_l.as_aq(),o=this.record_r.as_aq(),i=t.join(o,(r,s)=>!0,null,{suffix:["_l","_r"]}),n=t.columnNames(),l=[];return n.forEach(r=>{l.push(r+"_l"),l.push(r+"_r")}),i=i.select(l),i}display(t="long"){if(t=="long")return this.as_long().view();if(t=="wide")return this.as_wide().view()}}}function H(a,e){const t=a.module();t.variable(e()).define(["md"],K),t.variable(e("Record")).define("Record",["aq"],z),t.variable(e("RecordComparison")).define("RecordComparison",["aq"],G);const o=a.module(b);return t.import("aq",o),t.import("op",o),t}function U(a){return a`# Waterfall chart`}function Y(a){return a`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`}function Q(a){return a`## Example`}function X(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]}]}}function Z(){return{first_name_l:"John",first_name_r:"John","𝛾_first_name":1,surname_l:"Smith",surname_r:"Smith","𝛾_surname":1,date_of_birth_l:"1992-04-01",date_of_birth_l:"1992-04-02","𝛾_date_of_birth":0,other:"hi"}}function ee(){return{height:200}}function te(a,e,t,o){return a(e,t,o,!0)}function ae(a,e,t,o){return a(e,t,o,!1)}function oe(a){return a`## Code`}function ie(a,e,t){return(function(o,i,n,l,r={}){let s=a(o,i,r);return e(t(s,n,l))})}function ne(){return(function(e){let t={};return e.comparison_columns.forEach(o=>{let i=o.col_name;t[i]=o}),t})}function re(a,e,t){return(function(i,n,l={}){let r=a(n),s=e(i,n,l),m=[r].concat(s),_=t(n),c=m.reduce((f,u)=>f+u.log2_bayes_factor,0);return _.bayes_factor=2**c,_.log2_bayes_factor=c,m.concat([_])})}function le(a,e){return(function(o,i,n,l){let r=o,s=i[r],m=r.replace("𝛾_",""),c=a(n)[m],f=i[m+"_l"],u=i[m+"_r"],d,p;s==-1?(d=.5,p=.5):(d=c.u_probabilities[s],p=c.m_probabilities[s],f==u&&m in l&&(d=l[m][f]||d));let h=p/d;return{bayes_factor:h,column_name:m,gamma_column_name:"𝛾_"+m,gamma_index:s,level_name:"level_"+s,log2_bayes_factor:e(h),m_probability:p,num_levels:null,u_probability:d,value_l:f,value_r:u}})}function se(a,e){return(function(t){return{bayes_factor:a(t.proportion_of_matches),column_name:"Prior",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:e(t.proportion_of_matches),m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}})}function me(a){return(function(e,t,o){let i=Object.keys(e);return i=i.filter(n=>n.includes("𝛾_")),i.map(n=>a(n,e,t,o))})}function _e(){return(function(a){return{bayes_factor:null,column_name:"Final score",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:null,m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}})}function ce(a){return(function(e,t,o=!1){let i=JSON.parse(JSON.stringify(a));i.data.values=e;let n={...i,...t};if(o){n.layer[1].encoding.y.axis=!1,n.layer[0].layer[2].encoding.text={type:"nominal",field:"up_down_emoji"},n.layer[0].layer[2].encoding.opacity={condition:{value:0,test:"datum.column_name == 'Final score' || datum.column_name == 'Prior'"}};let l="format(1 / (1 + pow(2, -1*datum.value)), '.2r')";n.layer[0].layer[1].encoding.y.axis.labelExpr=l,n.layer[0].layer[1].encoding.y.axis.title="probability",n.layer[0].layer[1].encoding.tooltip=[{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}]}return n})}function ue(){return{config:{view:{continuousHeight:300,continuousWidth:400}},title:{text:"Bayes factor intuition chart",subtitle:"How each comparison column contributes to the final match score"},transform:[{filter:"(datum.bayes_factor !== 1.0)"},{window:[{op:"sum",field:"log2_bayes_factor",as:"sum"},{op:"lead",field:"column_name",as:"lead"}],frame:[null,0]},{calculate:'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',as:"sum"},{calculate:"datum.lead === null ? datum.column_name : datum.lead",as:"lead"},{calculate:'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',as:"previous_sum"},{calculate:'datum.sum > datum.previous_sum ? datum.column_name : ""',as:"top_label"},{calculate:'datum.sum < datum.previous_sum ? datum.column_name : ""',as:"bottom_label"},{calculate:"datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_top"},{calculate:"datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_bottom"},{calculate:"(datum.sum + datum.previous_sum) / 2",as:"center"},{calculate:'(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',as:"text_log2_bayes_factor"},{calculate:"datum.sum < datum.previous_sum ? 4 : -4",as:"dy"},{calculate:'datum.sum < datum.previous_sum ? "top" : "bottom"',as:"baseline"},{calculate:"1. / (1 + pow(2, -1.*datum.sum))",as:"prob"},{calculate:"0*datum.sum",as:"zero"},{calculate:'datum.sum > datum.previous_sum ? "↑" : "↓"',as:"up_down_emoji"}],layer:[{layer:[{mark:"rule",encoding:{y:{field:"zero",type:"quantitative"},size:{value:.5},color:{value:"black"}}},{mark:{type:"bar",width:60},encoding:{color:{condition:{value:"red",test:"(datum.log2_bayes_factor < 0)"},value:"green"},opacity:{condition:{value:1,test:"datum.column_name == 'Prior' || datum.column_name == 'Final score'"},value:.5},tooltip:[{type:"nominal",field:"column_name",title:"Comparison column"},{type:"nominal",field:"value_l",title:"Value (L)"},{type:"nominal",field:"value_r",title:"Value (R)"},{type:"nominal",field:"gamma_index",title:"Gamma level"},{type:"quantitative",field:"bayes_factor",format:".3r",title:"Bayes factor"},{type:"quantitative",field:"log2_bayes_factor",format:".3r",title:"log2(Bayes factor)"},{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}],x:{type:"nominal",axis:{labelExpr:"datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",labelAlign:"center",labelPadding:10,title:"Column",grid:!0,tickBand:"extent"},field:"column_name",sort:null},y:{type:"quantitative",axis:{grid:!1,orient:"left",title:"log2(Bayes factor)"},field:"previous_sum"},y2:{field:"sum"}}},{mark:{type:"text",fontWeight:"bold"},encoding:{color:{value:"white"},text:{condition:{type:"nominal",field:"log2_bayes_factor",format:".2f",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",axis:{orient:"left"},field:"center"}}},{mark:{type:"text",baseline:"bottom",dy:-5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"top_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_top"}}},{mark:{type:"text",baseline:"top",dy:5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"bottom_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_bottom"}}}]},{mark:{type:"rule",color:"black",strokeWidth:2,x2Offset:30,xOffset:-30},encoding:{x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},x2:{field:"lead"},y:{type:"quantitative",axis:{labelExpr:"format(1 / (1 + pow(2, -1*datum.value)), '.2r')",orient:"right",title:"Probability"},field:"sum",scale:{zero:!1}}}}],height:450,resolve:{axis:{y:"independent"}},width:{step:75},$schema:"https://vega.github.io/schema/vega-lite/v4.8.1.json",data:{values:null}}}function de(a){return a("vega-embed@6")}function fe(){return(function(e){return e/(e+1)})}function pe(){return Math.log2}function he(){return(function(e){return e/(1-e)})}function be(a,e){return(function(o){return a(e(o))})}function ge(a){return(function(t){return a(2**t)})}function ye(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",a.autoType).then(e=>{let t={};return e.forEach(o=>{t[o.firstname]=o.freq}),t})}function we(a){return{first_name:a}}function w(a,e){const t=a.module();return t.variable(e()).define(["md"],U),t.variable(e()).define(["md"],Y),t.variable(e()).define(["md"],Q),t.variable(e("splink_settings")).define("splink_settings",X),t.variable(e("row")).define("row",Z),t.variable(e("overrides")).define("overrides",ee),t.variable(e()).define(["get_waterfall_chart","row","splink_settings","overrides"],te),t.variable(e()).define(["get_waterfall_chart","row","splink_settings","overrides"],ae),t.variable(e()).define(["md"],oe),t.variable(e("get_waterfall_chart")).define("get_waterfall_chart",["get_waterfall_chart_data","embed","get_chart_spec"],ie),t.variable(e("get_comparison_column_lookup")).define("get_comparison_column_lookup",ne),t.variable(e("get_waterfall_chart_data")).define("get_waterfall_chart_data",["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"],re),t.variable(e("get_waterfall_row_gamma")).define("get_waterfall_row_gamma",["get_comparison_column_lookup","log2"],le),t.variable(e("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row",["prob_to_bayes_factor","prob_to_log2_bayes_factor"],se),t.variable(e("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows",["get_waterfall_row_gamma"],me),t.variable(e("get_waterfall_data_final_row")).define("get_waterfall_data_final_row",_e),t.variable(e("get_chart_spec")).define("get_chart_spec",["base_spec"],ce),t.variable(e("base_spec")).define("base_spec",ue),t.variable(e("embed")).define("embed",["require"],de),t.variable(e("bayes_factor_to_prob")).define("bayes_factor_to_prob",fe),t.variable(e("log2")).define("log2",pe),t.variable(e("prob_to_bayes_factor")).define("prob_to_bayes_factor",he),t.variable(e("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor",["log2","prob_to_bayes_factor"],be),t.variable(e("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob",["bayes_factor_to_prob"],ge),t.variable(e("first_name_lookup")).define("first_name_lookup",["d3"],ye),t.variable(e("term_freqs")).define("term_freqs",["first_name_lookup"],we),t}function ve(a){return a`# Fellegi Sunter utils`}function xe(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function ke(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function $e(a,e){return a.from(e)}function qe(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:a=>a.fname_l==a.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:a=>a.sname_l==a.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:a=>a.dob_l==a.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:a=>a.town_l==a.town_r?1:0}]}}function Te(a,e,t){return a(e,t)}function Pe(a){return a.view()}function Fe(a,e,t){return a(e,t)}function Se(a){return a.view()}function Be(a,e,t,o){return a(e,t,o).view()}function Ae(a,e){return(function(o,i,n={}){let l=o.objects().map(function(s){return s.match_probability=a(s,i,n),s}),r=e.from(l);return r=r.relocate(["match_probability"],{after:"uid_r"}),r})}function je(a,e){return(function(t,o,i={}){let n=o.comparison_columns,l=a(o.proportion_of_matches),r=n.reduce((s,m)=>{let _="𝛾_"+m.col_name,c=t[_];if(c==-1)return s;let f=m.m_probabilities[c],u=m.u_probabilities[c],d=t[m.col_name+"_l"].toLowerCase(),p=t[m.col_name+"_r"].toLowerCase();if(d==p&&m.col_name in i){let h=i[m.col_name],g=h[d]||0,k=h[p]||0,y=Math.max(g,k);y>0&&(u=y)}return s+Math.log2(f/u)},l);return e(r)})}function Ce(a,e){return(function(t,o,i){i==null&&(i=o.comparison_columns.length);let n=o.comparison_columns.slice(0,i),l=a(o.proportion_of_matches),r={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:o.proportion_of_matches};n.forEach(_=>{let c="𝛾_"+_.col_name,f=t[c],u=_.m_probabilities[f],d=_.u_probabilities[f],p=_.col_name.replace("_","\\_");r.comparison_vector.push(f),r.gamma_symbols.push(`\\gamma_\\text{${p}}`),r.col_names.push(c),r.m_values.push(u),r.m_symbols.push(`m_{\\text{${p}},${f}}`),r.u_values.push(d),r.u_symbols.push(`u_{\\text{${p}},${f}}`),r.bayes_factors.push(u/d),r.log2_bayes_factors.push(Math.log2(u/d))});let s=r.log2_bayes_factors.reduce((_,c)=>_+c,l);r.match_probability=e(s);let m=o.proportion_of_matches;return r.size_of_match_portion=m*r.m_values.reduce((_,c)=>_*c,1),r.size_of_non_match_portion=(1-m)*r.u_values.reduce((_,c)=>_*c,1),r})}function Ee(a){return(function(e,t,o){let i=a(e,t,o),n=i.m_values.map(p=>p.toPrecision(3)),l=i.u_values.map(p=>p.toPrecision(3)),r=i.lam.toPrecision(3),s=[r].concat(n),m=[`(1 - ${r})`].concat(l),_=s.join(" \\times "),c=m.join(" \\times "),f=i.match_probability.toPrecision(3),u=i.size_of_match_portion.toPrecision(3),d=i.size_of_non_match_portion.toPrecision(3);return`\\frac{${_}}{(${_}) + (${c})}  \\newline[10pt] = \\frac{${u}}{${u} + ${d}}  \\newline[10pt] = ${f}`})}function We(a){return(function(e,t){let o=a(e,t),i=o.m_symbols,n=o.u_symbols;o.lam;let l=["\\lambda"].concat(i),r=["(1 - \\lambda)"].concat(n),s=l.join(" "),m=r.join(" ");return`\\frac{${s}}{${s}) + ${m}}`})}function Le(a,e,t,o){return a`${e(t.objects()[0],o)}
`}function Ie(a){return(function(e,t,o){let i=a(e,t,o),n=i.gamma_symbols.join(", "),l=i.comparison_vector.join(", ");return`\\bm{\\gamma} = [${n}]= [${l}]`})}function Re(a,e,t,o){return a`${e(t.objects()[0],o)}
`}function Je(a){return a`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function Ne(a,e,t,o){return a`${e(t.objects()[0],o)}`}function Me(a,e,t){return a(e.objects()[0],t)}function Oe(a){return(function(e,t){let o=a.from(e),i=a.from(t),n=o.join(i,(s,m)=>!0,null,{suffix:["_l","_r"]}),l=o.columnNames(),r=[];return l.forEach(s=>{r.push(s+"_l"),r.push(s+"_r")}),n=n.select(r),n})}function Ve(a){return(function(t,o){let i=o.comparison_columns,n=t.objects();i.forEach(function(r){n.forEach(function(s){s["𝛾_"+r.col_name]=r.case_expression(s)})}),n=a.from(n);let l=["uid_l","uid_r"];return i.forEach(r=>{l.push(r.col_name+"_l"),l.push(r.col_name+"_r"),l.push("𝛾_"+r.col_name)}),n=n.select(l),n})}function De(){return(function(e){return e/(e+1)})}function Ke(a){return(function(t){return a(2**t)})}function ze(){return(function(e){return e/(1-e)})}function Ge(a){return(function(t){return Math.log2(a(t))})}function He(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",a.autoType).then(e=>{let t={};return e.forEach(o=>{t[o.firstname]=o.freq}),t})}function Ue(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",a.autoType).then(e=>{let t={};return e.forEach(o=>{t[o.surname]=o.freq}),t})}function Ye(a,e){return{fname:a,sname:e}}function Qe(a){return a.fname.joshua}function Xe(a){return a.sname.linacre}function v(a,e){const t=a.module();t.variable(e()).define(["md"],ve),t.variable(e("records_l")).define("records_l",xe),t.variable(e("records_r")).define("records_r",ke),t.variable(e("df_r")).define("df_r",["aq","records_r"],$e),t.variable(e("splink_settings")).define("splink_settings",qe),t.variable(e("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],Te),t.variable(e()).define(["df_comparison"],Pe),t.variable(e("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],Fe),t.variable(e()).define(["df_gammas"],Se),t.variable(e()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],Be),t.variable(e("get_df_e")).define("get_df_e",["get_match_probability","aq"],Ae),t.variable(e("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],je),t.variable(e("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],Ce),t.variable(e("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],Ee),t.variable(e("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],We),t.variable(e()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],Le),t.variable(e("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],Ie),t.variable(e()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],Re),t.variable(e()).define(["tex"],Je),t.variable(e()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],Ne),t.variable(e()).define(["get_match_probability_components","df_gammas","splink_settings"],Me),t.variable(e("get_df_comparison")).define("get_df_comparison",["aq"],Oe),t.variable(e("get_df_gammas")).define("get_df_gammas",["aq"],Ve),t.variable(e("bayes_factor_to_prob")).define("bayes_factor_to_prob",De),t.variable(e("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],Ke),t.variable(e("prob_to_bayes_factor")).define("prob_to_bayes_factor",ze),t.variable(e("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],Ge);const o=a.module(b);return t.import("aq",o),t.import("op",o),t.variable(e("first_name_lookup")).define("first_name_lookup",["d3"],He),t.variable(e("surname_lookup")).define("surname_lookup",["d3"],Ue),t.variable(e("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Ye),t.variable(e()).define(["term_freqs"],Qe),t.variable(e()).define(["term_freqs"],Xe),t}function Ze(a){return a`# Charts and Figures (Introduction)`}function et(a){return new a({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bristol"})}function tt(a){return new a({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bath"})}function at(a,e,t){return new a(e,t)}function ot(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.9,.1],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7]}]}}function it(a,e){let t=a.as_wide().objects()[0];return Object.keys(e.as_dict()).forEach(o=>{t[o+"_l"]==t[o+"_r"]?t["𝛾_"+o]=1:t["𝛾_"+o]=0}),t}function nt(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}}function rt(a,e,t,o){return a(e,t,o,!0)}function lt(a){return a`# Charts and Figures (Mathematical Model)`}function st(){return(function(e){const t=[],o={"unique id":"uid","first name":"fname",surname:"sname","date of birth":"dob",town:"town"};return e.querySelectorAll("tr").forEach((n,l)=>{let r=n.cells,s=[];for(let m of r){let _=m.innerText;_=_.trim(),_=_.toLowerCase(),_==""&&(_=null),s.push(_)}t.push(s)}),t.reduce((n,l,r)=>{if(r==0)l=l.map(s=>o[s]),n.properties=l;else{const s={};n.properties.forEach((m,_)=>{s[m]=l[_]}),n.push(s)}return n},[])})}function mt(a,e,t){return a.observe(o=>{const i=n=>o(e(t));return t.addEventListener("input",i,!1),o(e(t)),()=>window.removeEventListener("input",i)})}function _t(a){return a`
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
`}function ct(a){return a`
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
`}function ut(a,e,t){return a.observe(o=>{const i=n=>o(e(t));return t.addEventListener("input",i,!1),o(e(t)),()=>window.removeEventListener("input",i)})}function dt(a,e){return a.from(e)}function ft(a,e){return a.from(e)}function pt(a,e,t){return a(e,t)}function ht(a,e,t){return a(e,t)}function bt(a){let e=["uid_l","uid_r"],t=a.columnNames();return t=t.filter(o=>o.includes("𝛾_")),t=e.concat(t),a.select(t)}function gt(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:a=>a.fname_l==a.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:a=>a.sname_l==a.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:a=>a.dob_l==a.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:a=>a.town_l==a.town_r?1:0}]}}function yt(a){return new a({first_name:"Tom",surname:"Hanks",month_of_birth:"July"})}function wt(a){return new a({first_name:"Tom",surname:"Hanks",month_of_birth:"June"})}function vt(a,e,t){return new a(e,t)}function x(a,e){const t=a.module();t.variable(e()).define(["md"],Ze);const o=a.module(H);t.import("Record",o),t.import("RecordComparison",o);const i=a.module(w);t.import("get_waterfall_chart",i),t.variable(e("example_record_1_l")).define("example_record_1_l",["Record"],et),t.variable(e("example_record_1_r")).define("example_record_1_r",["Record"],tt),t.variable(e("example_1_comparison")).define("example_1_comparison",["RecordComparison","example_record_1_l","example_record_1_r"],at),t.variable(e("splink_settings")).define("splink_settings",ot),t.variable(e("example_1_row_with_gammas")).define("example_1_row_with_gammas",["example_1_comparison","example_record_1_l"],it),t.variable(e("overrides")).define("overrides",nt),t.variable(e("intro_simple_waterfall")).define("intro_simple_waterfall",["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"],rt),t.variable(e()).define(["md"],lt);const n=a.module(v);t.import("get_df_comparison",n),t.import("get_df_gammas",n),t.variable(e("parseTableData")).define("parseTableData",st),t.variable(e("records_l")).define("records_l",["Generators","parseTableData","table_l"],mt),t.variable(e("table_l")).define("table_l",["html"],_t),t.variable(e("table_r")).define("table_r",["html"],ct),t.variable(e("records_r")).define("records_r",["Generators","parseTableData","table_r"],ut),t.variable(e("df_1_l")).define("df_1_l",["aq","records_l"],dt),t.variable(e("df_1_r")).define("df_1_r",["aq","records_r"],ft),t.variable(e("df_comparisons_1")).define("df_comparisons_1",["get_df_comparison","records_l","records_r"],pt),t.variable(e("df_gammas_1")).define("df_gammas_1",["get_df_gammas","df_comparisons_1","splink_settings_1"],ht),t.variable(e("df_gammas_only_1")).define("df_gammas_only_1",["df_gammas_1"],bt),t.variable(e("splink_settings_1")).define("splink_settings_1",gt),t.variable(e("example_record_2_l")).define("example_record_2_l",["Record"],yt),t.variable(e("example_record_2_r")).define("example_record_2_r",["Record"],wt),t.variable(e("example_2_comparison")).define("example_2_comparison",["RecordComparison","example_record_2_l","example_record_2_r"],vt);const l=a.module(b);return t.import("aq",l),t.import("op",l),t}function xt(a){return a`# Match Weights Charts`}function kt(a){return{config:{view:{width:a/3,height:300},title:{anchor:"middle",offset:10},header:{title:null}},hconcat:[{mark:"bar",title:{text:"Non-matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},x:{type:"quantitative",field:"u_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"u_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"red"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter2 due to vega lite issue 4680')"}],height:50},{mark:"bar",title:{text:"Matches",fontWeight:"normal"},encoding:{row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labels:!1}},x:{type:"quantitative",field:"m_probability",axis:{title:"proportion"}},y:{type:"nominal",axis:{title:null},field:"level_name"},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",format:".4f"}],color:{value:"green"}},resolve:{scale:{y:"independent"}},transform:[{filter:"(datum.bayes_factor != 'unnecessary filter due to vega lite issue 4680')"}],height:50}],data:{values:null},transform:[],title:{text:"Probability distributions of non-matches and matches ",subtitle:"Estimated proportion of matches λ = "},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function $t(a){return{config:{view:{width:a/1.5,height:300},mark:{tooltip:null},title:{anchor:"middle"},header:{title:null}},data:{values:null},mark:{type:"bar",clip:!0},selection:{selector076:{type:"interval",bind:"scales",encodings:["x"]}},encoding:{color:{type:"quantitative",field:"log2_bayes_factor",scale:{range:["red","orange","green"],domain:[-10,0,10]}},row:{type:"nominal",field:"column_name",sort:{field:"gamma_index"},header:{labelAngle:0,labelAnchor:"middle",labelAlign:"left"}},tooltip:[{type:"nominal",field:"column_name"},{type:"ordinal",field:"level_name"},{type:"quantitative",field:"m_probability",format:".4f"},{type:"quantitative",field:"bayes_factor",format:".4f"},{type:"nominal",field:"level_proportion",title:"Percentage of record comparisons in this level",format:".2%"},{type:"quantitative",field:"log2_bayes_factor",title:"log2(Bayes factor, K = m/u)",format:".4f"}],x:{type:"quantitative",axis:{title:"log2(Bayes factor, K = m/u)",values:[-10,-5,0,5,10]},field:"log2_bayes_factor",scale:{domain:[-10,10]}},y:{type:"nominal",field:"level_name",axis:{title:null}}},height:50,resolve:{scale:{y:"independent"}},title:{text:"Influence of comparison vector values on match probability",subtitle:"Use mousewheeel to zoom"},$schema:"https://vega.github.io/schema/vega-lite/v4.json"}}function qt(a){return JSON.parse(a)}function Tt(a){return(function(t){let o=[];const i=(n,l)=>n.map((r,s)=>[r,l[s]]);return t.comparison_columns.forEach(n=>{i(n.m_probabilities,n.u_probabilities).forEach((r,s)=>{let m=a(r,n,s);o.push(m)})}),o})}function Pt(a,e,t){return(function(i){let n=JSON.parse(JSON.stringify(a)),l=i.proportion_of_matches;return n.data.values=e(i),n.title.subtitle=`Estimated proportion of matches λ = ${l}`,t(n)})}function Ft(a,e){return a(e)}function St(a,e,t){return(function(i){let n=JSON.parse(JSON.stringify(a)),l=i.proportion_of_matches;return n.data.values=e(i),n.title.subtitle=`Estimated proportion of matches λ = ${l.toPrecision(4)}`,t(n)})}function Bt(a,e){return a(e)}function At(){return(function(e,t,o){let i={},n=t;return i.m_probability=e[0],i.u_probability=e[1],i.bayes_factor=e[0]/e[1],i.column_name=n.col_name,i.log2_bayes_factor=Math.log2(i.bayes_factor),i.gamma_index=o,i.gamma_column_name="gamma_"+n.col_name,i.level_name="level_"+o,i.max_gamma_index=n.m_probabilities.length-1,i.num_levels=n.m_probabilities.length,i})}function jt(){return`{
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
  
  }`}function Ct(a){return a("vega-embed@6")}function Et(a,e){const t=a.module();return t.variable(e()).define(["md"],xt),t.variable(e("base_spec_m_u")).define("base_spec_m_u",["width"],kt),t.variable(e("base_spec_bayes_factors")).define("base_spec_bayes_factors",["width"],$t),t.variable(e("settings_example")).define("settings_example",["default_splink_settings"],qt),t.variable(e("chart_data_from_splink_settings")).define("chart_data_from_splink_settings",["get_chart_row"],Tt),t.variable(e("get_m_u_chart")).define("get_m_u_chart",["base_spec_m_u","chart_data_from_splink_settings","embed"],Pt),t.variable(e()).define(["get_m_u_chart","settings_example"],Ft),t.variable(e("get_bayes_factor_chart")).define("get_bayes_factor_chart",["base_spec_bayes_factors","chart_data_from_splink_settings","embed"],St),t.variable(e()).define(["get_bayes_factor_chart","settings_example"],Bt),t.variable(e("get_chart_row")).define("get_chart_row",At),t.variable(e("default_splink_settings")).define("default_splink_settings",jt),t.variable(e("embed")).define("embed",["require"],Ct),t}function Wt(a){return a`# The mathematics of the Fellegi Sunter model`}function Lt(a){return a`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`}function It(a){return a`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`}function Rt(a){return a`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`}function Jt(a){return a`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`}function Nt(a){return a}function Mt(a){return a`### Dataset 2`}function Ot(a){return a}function Vt(a,e){return a`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${e.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`}function Dt(a,e,t,o,i,n){return a`## Comparing columns

We need a mathematical way of evaluating these pairwise comparisons - a function that takes the comparisons as an input, and outputs match probabilities.  

The FS model solves this problem by comparing the records column by column, and assigning each comparison to two or more 'similarity levels'.

A simple example of a two-level comparison rule for a column may be:

- If the values in the column exactly match, assign the comparison to similarity level 1
- Otherwise assign the comparison to similarity level 0

In the following table, we apply this simple rule to every column. The comparisons are denoted with the prefix \`𝛾_\` because the mathematical symbol gamma is often used in the literate to represent comparisons.

${e.view()}

<br>

Now that we have a numeric representation of the comparisons, the model makes no further use of the raw data, instead using only the values in the 𝛾 columns: 

${t.view()}   
<br>
For each row in this table, the set of gamma values is known as the 'comparison vector'.  For example, the comparison vector for the first row in the table is:

${o`${i(e.slice(0,1).objects()[0],n)}`}
 `}function Kt(a){return a`## Scoring comparisons`}function zt(a){return a`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`}function Gt(a,e){return a`### m and u probabilities 

How much should we increase our estimate of match probability if we observe a match on first name? How about a match on gender? And what about if we observe a mismatch on these fields?  

We are interested in evaluating statements like: 

${e`\operatorname{Pr}(\text{records match}|\text{first name matches})`} 

This can be quantified using the m and u probabilities for each column, combined with Bayes Theorem (see annex for a refresher).

Consider the first name column.  We have defined two similarity levels:  level 1 if the first name exactly matches, and level 0 otherwise.

#### m probabilities
The m probabilities for the first name column are:

${e`m_\text{first name,level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{record match})`}


${e`m_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records match})`}


That is, amongst record comparisons which are true matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how often mispellings, nicknames or aliases occur in the first name field.

#### u probabilities

The u probabilities for the first name column are:

${e`u_\text{first name, level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{records do not match})`}


${e`u_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records do not match})`}



That is, amongst record comparisons which are true non-matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how likely 'collisions' are likely to occur. For instance, it would be common for two different people to have the same gender, but less likely for two different people to have the same date of birth.

#### The overall proportion of matches

Let us also define:

${e`\operatorname{Pr}(\text{records match}) = \lambda`} 

This is our prior - our estimate for the probability that a randomly-chosen pairwise record comparison is a match.

### Bayes Theorem

We can now use Bayes Theorem  to write:

${e`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{\operatorname{Pr}(\text{first name matches}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\text{first name matches})}}`}

which, in our notation is:

${e`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{m_\text{first name, level\_1}\lambda}{m_\text{first name, level\_1}\lambda + u_\text{first name, level\_1}(1-\lambda)}`}


`}function Ht(a,e,t){return a`We can generalise this formula by using  ${e`\gamma`} to indicate the value of the comparison, the index ${e`k`} to designate the comparison column, and ${e`\ell`} to designate the observed comparison level, we can write:

${t`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline [10pt] = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline [10pt] = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`}function Ut(a){return a`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`}function Yt(a){return a`## Example`}function Qt(a){return a`
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

`}function Xt(a,e){return a.textarea({value:e,rows:26,spellcheck:!1})}function Zt(a){return a`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`}function ea(a,e){return a.range([1,e.numRows()],{value:1,label:"Choose record comparison",step:1})}function ta(a,e,t){return a`${e.slice(t-1,t).toMarkdown()}`}function aa(a,e,t,o,i,n){return a`The comparison vector is given by:

${e`${t(o.slice(i-1,i).objects()[0],n)}`}

`}function oa(a){return a`The formula for match probability is:`}function ia(a,e,t,o,i){return a`${e(t.slice(o-1,o).objects()[0],i)}`}function na(a){return a`And substituting in numbers using our specified parameters we get: `}function ra(a,e,t,o,i){return a`${e(t.slice(o-1,o).objects()[0],i)}`}function la(a,e,t,o,i,n){return a`i.e. the ${e`\text{estimated match probability} = 

${t(o.slice(i-1,i).objects()[0],n).match_probability.toPrecision(4)}

`}

`}function sa(a){return a`<br><br>`}function ma(a,e,t){return a`## Annex:  Bayes Theorem

Recall that Bayes Theorem is given by:

${e`
\operatorname{Pr}(a|b) = {\frac{\operatorname{Pr}(b|a)\operatorname{Pr}(a)}{\operatorname{Pr}{(b)}}}`} 


or , in words: 

${e`
\text{posterior} = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}`}

In the context of record linkage, we can describe these parts as:

**Prior**:
The overall proportion of comparisons which are matches ${t`\operatorname{Pr}(\text{match})`}.

**Evidence**: We have observed that e.g. first name matches, ${t`\operatorname{Pr}(\text{first name matches})`}.

**Likelihood**: The probability that first name matches amongst matches, given by ${t`\operatorname{Pr}(\text{first name matches}|\text{records match})`}.  

So Bayes' formuls is:

${e`
\operatorname{Pr}(\text{match}|\text{first name matches}) = \frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}{(\text{first name matches})}}`}

Which can also be written:

${e` 
\frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match}) + \operatorname{Pr}(\text{first name matches}|\text{non match})\operatorname{Pr}(\text{non match})}`}

giving us:

${e`
\operatorname{Pr}(\text{match}|\text{first name matches}) = 
\frac{m_1\lambda}{m_1\lambda + u_1(1-\lambda)}`}

Which is the same as Equation 1.
`}function _a(a){return a`## Calculations and code`}function ca(a){return a.options({displayMode:!0,fleqn:!0})}function ua(){return`{
    "proportion_of_matches": 0.01,
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
  
  }`}function da(a){return JSON.parse(a)}function fa(a){return a`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function pa(a){return a("@observablehq/inputs")}function ha(a,e){const t=a.module();t.variable(e("title")).define("title",["md"],Wt),t.variable(e()).define(["md"],Lt),t.variable(e("para_1")).define("para_1",["md"],It),t.variable(e("para_2")).define("para_2",["md"],Rt),t.variable(e("para_3")).define("para_3",["md"],Jt),t.variable(e("table_l1")).define("table_l1",["table_l"],Nt),t.variable(e("ds2_head")).define("ds2_head",["md"],Mt),t.variable(e("table_r1")).define("table_r1",["table_r"],Ot),t.variable(e("rec_comparisons")).define("rec_comparisons",["md","df_comparisons_1"],Vt),t.variable(e("para_4")).define("para_4",["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"],Dt),t.variable(e("subhead_1")).define("subhead_1",["md"],Kt),t.variable(e("para_5")).define("para_5",["md"],zt),t.variable(e("para_6")).define("para_6",["md","texd"],Gt),t.variable(e("para_7")).define("para_7",["md","tex","texd"],Ht),t.variable(e("para_8")).define("para_8",["md"],Ut),t.variable(e("subhead_2")).define("subhead_2",["md"],Yt),t.variable(e("para_10")).define("para_10",["md"],Qt),t.variable(e("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],Xt),t.variable(e("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],(n,l)=>n.input(l)),t.variable(e("para_11")).define("para_11",["md"],Zt),t.variable(e("viewof row_index")).define("viewof row_index",["inputs","df_gammas_1"],ea),t.variable(e("row_index")).define("row_index",["Generators","viewof row_index"],(n,l)=>n.input(l)),t.variable(e("this_row")).define("this_row",["md","df_comparisons_1","row_index"],ta),t.variable(e("para_12")).define("para_12",["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"],aa),t.variable(e("para_13")).define("para_13",["md"],oa),t.variable(e("para_14")).define("para_14",["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"],ia),t.variable(e("para_15")).define("para_15",["md"],na),t.variable(e("para_16")).define("para_16",["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"],ra),t.variable(e("para_17")).define("para_17",["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"],la),t.variable(e("para_18")).define("para_18",["md"],sa),t.variable(e("para_19")).define("para_19",["md","texd","tex"],ma),t.variable(e()).define(["md"],_a);const o=a.module(x);t.import("example_2_comparison",o),t.import("intro_simple_waterfall",o),t.import("table_l",o),t.import("table_r",o),t.import("df_1_l",o),t.import("df_1_r",o),t.import("df_comparisons_1",o),t.import("df_gammas_1",o),t.import("df_gammas_only_1",o);const i=a.module(v);return t.import("get_m_u_formula_symbols",i),t.import("get_m_u_formula_numbers",i),t.import("get_comparison_vector_symbols_and_numbers",i),t.import("get_match_probability_components",i),t.variable(e("texd")).define("texd",["tex"],ca),t.variable(e("default_splink_settings")).define("default_splink_settings",ua),t.variable(e("settings")).define("settings",["splink_settings"],da),t.variable(e("css_styles")).define("css_styles",["html"],fa),t.variable(e("inputs")).define("inputs",["require"],pa),t}function ba(a){return a`# Understanding match weights`}function ga(a){return a`Some columns are more important than others to the calculation of overall match probability.  For example, a match on date of birth provides stronger evidence in favour of a match than a match on gender.

The relative importance of columns is quantified in a model's _match weights_.

In this article, we explore the concept of match weights, using visualisations to help build intuition for how they work.  

The annex to this article presents the maths for how our implementation of the Fellegi Sunter model can be decomposed into a series of match weights.

`}function ya(a,e){return a`## Match weights 

A single comparison column provides evidence in favour or against a match, but this evidence is rarely conclusive.  The ambiguity arises because any observation on the comparison column is consistent with two possibilities.



- **A match on a column is consistent with the possibility that the entities match, but could also be due to two different entities sharing the same information (a 'collision').**

  The comparative likelihood of these two possibilities is a measure of the amount of evidence in favour of a match.  That is, we want to compare:
  
  ${e`\operatorname{Pr}(\text{column matches}|\text{records match})`} vs. ${e`\operatorname{Pr}(\text{column matches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${e`m_\text{col, level 1}`} vs. ${e`u_\text{col, level 1}`}.


- **A non-match on a column is consistent with the possibility the entities differ, but could also be due to typos or other variations in how information has been recorded about the same entity.**
  
   The comparative likelihood of these two possibilities is a measure of the amount of evidence against a match.  
  
    ${e`\operatorname{Pr}(\text{column mismatches}|\text{records match})`} vs. ${e`\operatorname{Pr}(\text{column mismatches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${e`m_\text{col, level 0}`} vs. ${e`u_\text{col, level 0}`}.

We use the ratio of these values to compare their magnitude.  This ratio is known as a Bayes Factor.

`}function wa(a,e,t){return a`## Bayes Factors

Mathematically we can define the [Bayes Factor](https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/) for a given comparison column as:

${e`K_\text{col, level} =  \frac{m_\text{col, level}}{u_\text{col, level}}= \frac{\operatorname{Pr}(\gamma_\text{col,level}|\text{records match})}{\operatorname{Pr}(\gamma_\text{col,level}|\text{records do not match})}`}


Bayes factors can be explained in words.  For example, a Bayes Factor of 20 for a given column means that an overall match is now 20 times more probable.  A Bayes Factor of ${t`\frac{1}{10}`} for a given column means an overall match is 10 times less probable.

In this sense, a Bayes Factor is are similar to the concept of odds.  Odds of 4 mean that an even happens four out of five times, or in some sense it is four times more likely for the even to happen than not happen.

However, Bayes Factors differ from odds in that they are only meaningful in the context of a prior.  A Bayes Factor is an adjustment - it tells us something is more or less likely.  But we need a starting value - otherwise there's nothing to apply the adjustment to.

Let's see how this works:


`}function va(a){return a.range([0,1],{step:.01,label:"prior probability =",value:.5})}function xa(a,e){return a.range([0,1],{step:.01,label:e`m_\text{col, level} =`,value:.8})}function ka(a,e){return a.range([0,1],{step:.01,label:e`u_\text{col, level} =`,value:.2})}function $a(a,e,t){return a`\text{Bayes Factor} = \frac{m_\text{col, level}}{u_\text{col, level}} = \frac{${e}}{${t}} = ${(e/t).toPrecision(4)} `}function qa(a,e,t,o){return a`\text{posterior} = \frac{\text{prior}\times m}{\text{prior}\times m + (1-\text{prior})\times u}= ${(e*t/(e*t+(1-e)*o)).toPrecision(4)}`}function Ta(a){return a`## Match weights`}function Pa(a,e){return a`Finally, it can be convenient to take the logarithm of Bayes Factors because this [enables match weights to be added together](https://math.stackexchange.com/questions/965500/intuitive-understanding-of-logarithms) rather than being multiplied.

${e`\text{match weight for dob} =  \log(K_\text{col, level})`}

This transformation is also useful for visualising match weights.  Bayes factors are difficult to represent on a single scale becuse they represent ratios, which can be very large or very tiny, whereas log bayes factors can easily be viewed and compared on a single scale.
`}function Fa(a,e,t){return a`## Determinants of match weights

### Column matches

Where a column matches, the key determinant of match weight is the cardinality of the column (the number of unique values).  

For example, imagine we are linking a dataset of children, and consider the date of birth field.

The Bayes Factor is ${e`\frac{m_\text{dob, level 1}}{u_\text{dob, level 1}}`}  

The numerator is the probability that date of birth matches amongst records which truly match.

This is likely to be high.  With good data quality it will approach 1.0, and even with poor data quality it's likely to be above 0.8.

The term ${e`u_\text{dob, level 1}`} is the probability that date of birth matches amongst records which do not match.  


This is likely to be very small.  If the children are aged below 18, then there will be ${e`18 \times 365`} = ${(18*365).toLocaleString()} different dates of birth.  We can therefore estimate that:

${t`u_\text{dob, level 1} = \frac{1}{${18*365}} = ${(1/(18*365)).toPrecision(4)}`}

Let's assume that the numerator is 0.9.  The Bayes Factor would be ${e`\frac{0.9}{${(1/(18*365)).toPrecision(4)}}`} = ${.9*18*365}  i.e. very strong evidence in favour of a match.    

The denominator drives this result - the precise value of the numerator does not matter much.

### Column does not match

Where a column does not match, the key deterinant of match weight is the probability of mismatches among records that truly match.  This could be due to typos, transcription errors, or other reasons for variation in data (e.g. change of address).  Loosely speaking, this is a measure of data quality.

For example, imagine we are linking a large dataset of people, and consider the gender field.  Imagine this is recorded with high precision, and for the sake of this example, suppose no-one in the dataset has changed their gender.

The Bayes Factor is ${e`\frac{m_\text{gender, level 0}}{u_\text{gender, level 0}}`}  

The numerator tells us how often we observe a mismatch on gender amongst truly matching records.  Since data is entered with high precision, this number is low.  Let's say the rate of error is one in a thousand.

The denominator tells us how often we observe a mismatch on gender among truly non-matching records.  For gender this is likely to be around 0.5.  Note that the denominator would generally be a high number (almost always in the range 0.5 - 1.0) irrespective of the column type.

The Bayes Factor would be ${e`\frac{0.001}{0.5}`} = ${.001/.5}  .  This is very strong evidence against a match.

The numerator drives this result - the precise value of the denominator does not matter.


`}function Sa(a){return a`## Visualising match weights`}function Ba(a){return a`These concepts allow us to succinctly summarise the m and u values and match weights of a Fellegi Sunter model graphically.  For instance, consider the following model: (*You may adjust the m and u values*):`}function Aa(a){return a`This allows a succinct visualisation of the match weights for a Fellegi Sunter model as follows.  You may edit these values to see how they affect the charts.`}function ja(a,e){return a.textarea({value:e,rows:26,spellcheck:!1})}function Ca(a){return a`The m and u probabilities can be shown in the following chart:`}function Ea(a,e){return a(JSON.parse(e))}function Wa(a){return a`And the Bayes Factors can be visualised as follows:`}function La(a,e){return a(JSON.parse(e))}function Ia(a){return a`## Waterfall chart

Finally, for given values of the comparison columns, we can use the log 2 Bayes Factors to plot a chart that shows the calculation of the final probability.  The log 2 Bayes Factor is on the right hand access, and the probability is shown on the right hand axis.  Hover over the bars for more information.`}function Ra(a){return a.radio(["Values do not match","Values match"],{label:"Comparison of fname column",value:"Values match"})}function Ja(a){return a.radio(["Values do not match","Values match"],{label:"Comparison of sname column",value:"Values match"})}function Na(a){return a.radio(["Values do not match","Values match"],{label:"Comparison of dob column",value:"Values match"})}function Ma(a){return a.radio(["Values do not match","Values match"],{label:"Comparison of town column",value:"Values do not match"})}function Oa(a,e,t){return a(e,JSON.parse(t),{height:300},!1)}function Va(a,e,t,o){return a`Final match probability:
${e(t,JSON.parse(o)).match_probability.toPrecision(4)}`}function Da(a){return a`## Mathematical annex: Rewriting the Fellegi Sunter formula in terms of odds, and Bayes Factors`}function Ka(a,e){return a`In this section, we show why it is possible to compute match probabilities by adding together log2 Bayes Factors.

Start with our equation for match probability:

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.1} `}

And note that we could similarly define:

${e`
\operatorname{Pr}(\text{records do not match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.2} `}

`}function za(a,e){return a`Now we introduce the [formula for odds](https://en.wikipedia.org/wiki/Odds#Statistical_usage): 

${e`\text{odds} = \frac{p}{1-p}`} 
where p is probability.


For example odds of 4 mean that this event happens 4 out of 5 times, which correponds to a probability of 80%.

Dividing (1.1) by (1.2) we see that:

${e`
\text{odds}(\text{records  match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}\tag{1.3} `}

Also recall that the Bayes Factor for column i can be defined as:
${e`b_{i\ell}=\frac{m_{i\ell}}{u_{i\ell}}`} 
so we can write the odds that records match as :

${e`
\text{odds of match} = \frac{\lambda }{(1-\lambda) } b_{1\ell}b_{2\ell}\ldots b_{K\ell}\tag{1.4} `}


Which can then be converted into a probability using:

${e`p = \frac{\text{odds}}{1+\text{odds}}`}

Sometimes it can also be convenient to use log odds, because these can be computed with addition rather than multiplication:

${e`
\text{log odds of match} = \log{(\frac{\lambda }{(1-\lambda) })} \log({b_{1\ell}})+\log({b_{2\ell}})+\ldots +\log({b_{K\ell})}\tag{1.5} `}

This final representation is what is used in the waterfall chart to represent the computation of match probability
`}function Ga(a){return a.options({displayMode:!0,fleqn:!0})}function Ha(a){return a`<style>
.katex-display>.katex { font-size: 1em}
.katex-display {
    max-width: None;
}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function Ua(a,e,t,o){let i={};return a=="Values match"?i["𝛾_fname"]=1:i["𝛾_fname"]=0,e=="Values match"?i["𝛾_sname"]=1:i["𝛾_sname"]=0,t=="Values match"?i["𝛾_dob"]=1:i["𝛾_dob"]=0,o=="Values match"?i["𝛾_town"]=1:i["𝛾_town"]=0,i}function Ya(a){return a("@observablehq/inputs@0.8.0")}function Za(a,e){const t=a.module();t.variable(e("title")).define("title",["md"],ba),t.variable(e("para_1")).define("para_1",["md"],ga),t.variable(e("para_2")).define("para_2",["md","tex"],ya),t.variable(e("para_3")).define("para_3",["md","texd","tex"],wa),t.variable(e("viewof prior")).define("viewof prior",["inputs"],va),t.variable(e("prior")).define("prior",["Generators","viewof prior"],(r,s)=>r.input(s)),t.variable(e("viewof m")).define("viewof m",["inputs","tex"],xa),t.variable(e("m")).define("m",["Generators","viewof m"],(r,s)=>r.input(s)),t.variable(e("viewof u")).define("viewof u",["inputs","tex"],ka),t.variable(e("u")).define("u",["Generators","viewof u"],(r,s)=>r.input(s)),t.variable(e("bf")).define("bf",["tex","m","u"],$a),t.variable(e("post")).define("post",["tex","prior","m","u"],qa),t.variable(e("subhead_1")).define("subhead_1",["md"],Ta),t.variable(e("para_4")).define("para_4",["md","texd"],Pa),t.variable(e("para_5")).define("para_5",["md","tex","texd"],Fa),t.variable(e("subhead_2")).define("subhead_2",["md"],Sa),t.variable(e("para_6")).define("para_6",["md"],Ba),t.variable(e("para_7")).define("para_7",["md"],Aa),t.variable(e("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],ja),t.variable(e("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],(r,s)=>r.input(s)),t.variable(e("para_8")).define("para_8",["md"],Ca),t.variable(e("chart_1")).define("chart_1",["get_m_u_chart","splink_settings"],Ea),t.variable(e("para_9")).define("para_9",["md"],Wa),t.variable(e("chart_2")).define("chart_2",["get_bayes_factor_chart","splink_settings"],La),t.variable(e("para_10")).define("para_10",["md"],Ia),t.variable(e("viewof fname_radio")).define("viewof fname_radio",["inputs"],Ra),t.variable(e("fname_radio")).define("fname_radio",["Generators","viewof fname_radio"],(r,s)=>r.input(s)),t.variable(e("viewof sname_radio")).define("viewof sname_radio",["inputs"],Ja),t.variable(e("sname_radio")).define("sname_radio",["Generators","viewof sname_radio"],(r,s)=>r.input(s)),t.variable(e("viewof dob_radio")).define("viewof dob_radio",["inputs"],Na),t.variable(e("dob_radio")).define("dob_radio",["Generators","viewof dob_radio"],(r,s)=>r.input(s)),t.variable(e("viewof town_radio")).define("viewof town_radio",["inputs"],Ma),t.variable(e("town_radio")).define("town_radio",["Generators","viewof town_radio"],(r,s)=>r.input(s)),t.variable(e("chart_3")).define("chart_3",["get_waterfall_chart","row","splink_settings"],Oa),t.variable(e("para_11")).define("para_11",["md","get_match_probability_components","row","splink_settings"],Va),t.variable(e("annex")).define("annex",["md"],Da),t.variable(e("para_12")).define("para_12",["md","texd"],Ka),t.variable(e("para_13")).define("para_13",["md","texd"],za),t.variable(e("texd")).define("texd",["tex"],Ga),t.variable(e("css_styles")).define("css_styles",["html"],Ha);const o=a.module(x);t.import("intro_simple_waterfall",o);const i=a.module(Et);t.import("get_m_u_chart",i),t.import("get_bayes_factor_chart",i),t.import("default_splink_settings",i);const n=a.module(w);t.import("get_waterfall_chart",n),t.variable(e("row")).define("row",["fname_radio","sname_radio","dob_radio","town_radio"],Ua);const l=a.module(ha);return t.import("get_match_probability_components",l),t.variable(e("inputs")).define("inputs",["require"],Ya),t}export{Za as default};
