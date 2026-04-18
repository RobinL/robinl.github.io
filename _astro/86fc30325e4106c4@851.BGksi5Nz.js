function x(a){return a`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function k(a){return a`Import Arquero and extend it to print HTML tables in Observable:`}async function $(a,t,e,o){const n=await a(`arquero@${t}`);return(await Promise.all(e.map(i=>a(i)))).forEach(i=>n.addPackage(i)),n.addTableMethod("view",o,{override:!0}),n}function q(){return"4.2.0"}function T(){return[]}function P(a){return a`Export a global reference to Arquero operations:`}function S(a){return a.op}function F(a){return a`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function j(a){return a`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function A(a){return a`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function E(a){return a`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function C(a){return a`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function L(a){return a.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function R(a){return a`Sorted differences between Seattle and Chicago:`}function B(a,t){return a.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function I(a){return a`Is Seattle more correlated with San Francisco or Chicago?`}function D(a,t){return a.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function W(a){return a`Summary statistics per city, as output objects:`}function J(a,t,e){return a.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:o=>e.min(o.sun),max:o=>e.max(o.sun),avg:o=>e.average(o.sun),med:o=>e.median(o.sun),skew:({sun:o})=>(e.mean(o)-e.median(o))/e.stdev(o)||0}).objects()}function M(a){return a`<hr>
## Utilities
`}function O(a){const e=i=>`<span style="color: #999;">${i}</span>`,o="margin: 0; border-collapse: collapse; width: initial;",n="padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums;";return function(i,l={}){typeof l=="number"&&(l={limit:l});const r={...l.color};if(typeof l.color=="function")i.columnNames().forEach(u=>r[u]=l.color);else for(const u in r){const d=r[u];r[u]=typeof d=="function"?d:()=>d}const _=`${o}`,s=(u,d,p)=>`${n} max-width: ${+l.maxCellWidth||300}px;`+(r[u]?` background-color: ${r[u](d,p)};`:"");l={limit:100,null:e,...l,style:{table:_,td:s,th:s}};const c=`${`max-height: ${+l.height||270}px`}; overflow-x: auto; overflow-y: auto;`,f=a`<div style="${c}">${i.toHTML(l)}</div>`;return f.value=i,f}}function h(a,t){const e=a.module();return e.variable(t()).define(["md"],x),e.variable(t()).define(["md"],k),e.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],$),e.variable(t("aq_version")).define("aq_version",q),e.variable(t("aq_packages")).define("aq_packages",T),e.variable(t()).define(["md"],P),e.variable(t("op")).define("op",["aq"],S),e.variable(t()).define(["md"],F),e.variable(t()).define(["md"],j),e.variable(t()).define(["md"],A),e.variable(t()).define(["md"],E),e.variable(t()).define(["md"],C),e.variable(t("dt")).define("dt",["aq"],L),e.variable(t()).define(["md"],R),e.variable(t()).define(["dt","op"],B),e.variable(t()).define(["md"],I),e.variable(t()).define(["dt","op"],D),e.variable(t()).define(["md"],W),e.variable(t()).define(["dt","aq","op"],J),e.variable(t()).define(["md"],M),e.variable(t("toView")).define("toView",["html"],O),e}function N(a){return a`# Record Utilities`}function z(a){return class{constructor(e){this.record_dict=e}as_dict(){return this.record_dict}as_aq(){return a.from([this.record_dict])}display(){return this.as_aq().view()}}}function H(a){return class{constructor(e,o){this.record_l=e,this.record_r=o}as_long(){let e=[this.record_l.as_dict(),this.record_r.as_dict()];return a.from(e)}as_wide(){let e=this.record_l.as_aq(),o=this.record_r.as_aq(),n=e.join(o,(r,_)=>!0,null,{suffix:["_l","_r"]}),i=e.columnNames(),l=[];return i.forEach(r=>{l.push(r+"_l"),l.push(r+"_r")}),n=n.select(l),n}display(e="long"){if(e=="long")return this.as_long().view();if(e=="wide")return this.as_wide().view()}}}function U(a,t){const e=a.module();e.variable(t()).define(["md"],N),e.variable(t("Record")).define("Record",["aq"],z),e.variable(t("RecordComparison")).define("RecordComparison",["aq"],H);const o=a.module(h);return e.import("aq",o),e.import("op",o),e}function V(a){return a`# Waterfall chart`}function G(a){return a`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`}function K(a){return a`## Example`}function Y(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]}]}}function Q(){return{first_name_l:"John",first_name_r:"John","𝛾_first_name":1,surname_l:"Smith",surname_r:"Smith","𝛾_surname":1,date_of_birth_l:"1992-04-01",date_of_birth_l:"1992-04-02","𝛾_date_of_birth":0,other:"hi"}}function X(){return{height:200}}function Z(a,t,e,o){return a(t,e,o,!0)}function ee(a,t,e,o){return a(t,e,o,!1)}function te(a){return a`## Code`}function ae(a,t,e){return(function(o,n,i,l,r={}){let _=a(o,n,r);return t(e(_,i,l))})}function oe(){return(function(t){let e={};return t.comparison_columns.forEach(o=>{let n=o.col_name;e[n]=o}),e})}function ne(a,t,e){return(function(n,i,l={}){let r=a(i),_=t(n,i,l),s=[r].concat(_),m=e(i),c=s.reduce((f,u)=>f+u.log2_bayes_factor,0);return m.bayes_factor=2**c,m.log2_bayes_factor=c,s.concat([m])})}function ie(a,t){return(function(o,n,i,l){let r=o,_=n[r],s=r.replace("𝛾_",""),c=a(i)[s],f=n[s+"_l"],u=n[s+"_r"],d,p;_==-1?(d=.5,p=.5):(d=c.u_probabilities[_],p=c.m_probabilities[_],f==u&&s in l&&(d=l[s][f]||d));let b=p/d;return{bayes_factor:b,column_name:s,gamma_column_name:"𝛾_"+s,gamma_index:_,level_name:"level_"+_,log2_bayes_factor:t(b),m_probability:p,num_levels:null,u_probability:d,value_l:f,value_r:u}})}function re(a,t){return(function(e){return{bayes_factor:a(e.proportion_of_matches),column_name:"Prior",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:t(e.proportion_of_matches),m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}})}function le(a){return(function(t,e,o){let n=Object.keys(t);return n=n.filter(i=>i.includes("𝛾_")),n.map(i=>a(i,t,e,o))})}function _e(){return(function(a){return{bayes_factor:null,column_name:"Final score",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:null,m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}})}function se(a){return(function(t,e,o=!1){let n=JSON.parse(JSON.stringify(a));n.data.values=t;let i={...n,...e};if(o){i.layer[1].encoding.y.axis=!1,i.layer[0].layer[2].encoding.text={type:"nominal",field:"up_down_emoji"},i.layer[0].layer[2].encoding.opacity={condition:{value:0,test:"datum.column_name == 'Final score' || datum.column_name == 'Prior'"}};let l="format(1 / (1 + pow(2, -1*datum.value)), '.2r')";i.layer[0].layer[1].encoding.y.axis.labelExpr=l,i.layer[0].layer[1].encoding.y.axis.title="probability",i.layer[0].layer[1].encoding.tooltip=[{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}]}return i})}function me(){return{config:{view:{continuousHeight:300,continuousWidth:400}},title:{text:"Bayes factor intuition chart",subtitle:"How each comparison column contributes to the final match score"},transform:[{filter:"(datum.bayes_factor !== 1.0)"},{window:[{op:"sum",field:"log2_bayes_factor",as:"sum"},{op:"lead",field:"column_name",as:"lead"}],frame:[null,0]},{calculate:'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',as:"sum"},{calculate:"datum.lead === null ? datum.column_name : datum.lead",as:"lead"},{calculate:'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',as:"previous_sum"},{calculate:'datum.sum > datum.previous_sum ? datum.column_name : ""',as:"top_label"},{calculate:'datum.sum < datum.previous_sum ? datum.column_name : ""',as:"bottom_label"},{calculate:"datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_top"},{calculate:"datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_bottom"},{calculate:"(datum.sum + datum.previous_sum) / 2",as:"center"},{calculate:'(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',as:"text_log2_bayes_factor"},{calculate:"datum.sum < datum.previous_sum ? 4 : -4",as:"dy"},{calculate:'datum.sum < datum.previous_sum ? "top" : "bottom"',as:"baseline"},{calculate:"1. / (1 + pow(2, -1.*datum.sum))",as:"prob"},{calculate:"0*datum.sum",as:"zero"},{calculate:'datum.sum > datum.previous_sum ? "↑" : "↓"',as:"up_down_emoji"}],layer:[{layer:[{mark:"rule",encoding:{y:{field:"zero",type:"quantitative"},size:{value:.5},color:{value:"black"}}},{mark:{type:"bar",width:60},encoding:{color:{condition:{value:"red",test:"(datum.log2_bayes_factor < 0)"},value:"green"},opacity:{condition:{value:1,test:"datum.column_name == 'Prior' || datum.column_name == 'Final score'"},value:.5},tooltip:[{type:"nominal",field:"column_name",title:"Comparison column"},{type:"nominal",field:"value_l",title:"Value (L)"},{type:"nominal",field:"value_r",title:"Value (R)"},{type:"nominal",field:"gamma_index",title:"Gamma level"},{type:"quantitative",field:"bayes_factor",format:".3r",title:"Bayes factor"},{type:"quantitative",field:"log2_bayes_factor",format:".3r",title:"log2(Bayes factor)"},{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}],x:{type:"nominal",axis:{labelExpr:"datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",labelAlign:"center",labelPadding:10,title:"Column",grid:!0,tickBand:"extent"},field:"column_name",sort:null},y:{type:"quantitative",axis:{grid:!1,orient:"left",title:"log2(Bayes factor)"},field:"previous_sum"},y2:{field:"sum"}}},{mark:{type:"text",fontWeight:"bold"},encoding:{color:{value:"white"},text:{condition:{type:"nominal",field:"log2_bayes_factor",format:".2f",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",axis:{orient:"left"},field:"center"}}},{mark:{type:"text",baseline:"bottom",dy:-5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"top_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_top"}}},{mark:{type:"text",baseline:"top",dy:5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"bottom_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_bottom"}}}]},{mark:{type:"rule",color:"black",strokeWidth:2,x2Offset:30,xOffset:-30},encoding:{x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},x2:{field:"lead"},y:{type:"quantitative",axis:{labelExpr:"format(1 / (1 + pow(2, -1*datum.value)), '.2r')",orient:"right",title:"Probability"},field:"sum",scale:{zero:!1}}}}],height:450,resolve:{axis:{y:"independent"}},width:{step:75},$schema:"https://vega.github.io/schema/vega-lite/v4.8.1.json",data:{values:null}}}function ce(a){return a("vega-embed@6")}function ue(){return(function(t){return t/(t+1)})}function de(){return Math.log2}function fe(){return(function(t){return t/(1-t)})}function pe(a,t){return(function(o){return a(t(o))})}function be(a){return(function(e){return a(2**e)})}function he(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",a.autoType).then(t=>{let e={};return t.forEach(o=>{e[o.firstname]=o.freq}),e})}function ge(a){return{first_name:a}}function ye(a,t){const e=a.module();return e.variable(t()).define(["md"],V),e.variable(t()).define(["md"],G),e.variable(t()).define(["md"],K),e.variable(t("splink_settings")).define("splink_settings",Y),e.variable(t("row")).define("row",Q),e.variable(t("overrides")).define("overrides",X),e.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],Z),e.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],ee),e.variable(t()).define(["md"],te),e.variable(t("get_waterfall_chart")).define("get_waterfall_chart",["get_waterfall_chart_data","embed","get_chart_spec"],ae),e.variable(t("get_comparison_column_lookup")).define("get_comparison_column_lookup",oe),e.variable(t("get_waterfall_chart_data")).define("get_waterfall_chart_data",["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"],ne),e.variable(t("get_waterfall_row_gamma")).define("get_waterfall_row_gamma",["get_comparison_column_lookup","log2"],ie),e.variable(t("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row",["prob_to_bayes_factor","prob_to_log2_bayes_factor"],re),e.variable(t("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows",["get_waterfall_row_gamma"],le),e.variable(t("get_waterfall_data_final_row")).define("get_waterfall_data_final_row",_e),e.variable(t("get_chart_spec")).define("get_chart_spec",["base_spec"],se),e.variable(t("base_spec")).define("base_spec",me),e.variable(t("embed")).define("embed",["require"],ce),e.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",ue),e.variable(t("log2")).define("log2",de),e.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",fe),e.variable(t("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor",["log2","prob_to_bayes_factor"],pe),e.variable(t("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob",["bayes_factor_to_prob"],be),e.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],he),e.variable(t("term_freqs")).define("term_freqs",["first_name_lookup"],ge),e}function we(a){return a`# Fellegi Sunter utils`}function ve(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function xe(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function ke(a,t){return a.from(t)}function $e(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:a=>a.fname_l==a.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:a=>a.sname_l==a.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:a=>a.dob_l==a.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:a=>a.town_l==a.town_r?1:0}]}}function qe(a,t,e){return a(t,e)}function Te(a){return a.view()}function Pe(a,t,e){return a(t,e)}function Se(a){return a.view()}function Fe(a,t,e,o){return a(t,e,o).view()}function je(a,t){return(function(o,n,i={}){let l=o.objects().map(function(_){return _.match_probability=a(_,n,i),_}),r=t.from(l);return r=r.relocate(["match_probability"],{after:"uid_r"}),r})}function Ae(a,t){return(function(e,o,n={}){let i=o.comparison_columns,l=a(o.proportion_of_matches),r=i.reduce((_,s)=>{let m="𝛾_"+s.col_name,c=e[m];if(c==-1)return _;let f=s.m_probabilities[c],u=s.u_probabilities[c],d=e[s.col_name+"_l"].toLowerCase(),p=e[s.col_name+"_r"].toLowerCase();if(d==p&&s.col_name in n){let b=n[s.col_name],g=b[d]||0,v=b[p]||0,y=Math.max(g,v);y>0&&(u=y)}return _+Math.log2(f/u)},l);return t(r)})}function Ee(a,t){return(function(e,o,n){n==null&&(n=o.comparison_columns.length);let i=o.comparison_columns.slice(0,n),l=a(o.proportion_of_matches),r={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:o.proportion_of_matches};i.forEach(m=>{let c="𝛾_"+m.col_name,f=e[c],u=m.m_probabilities[f],d=m.u_probabilities[f],p=m.col_name.replace("_","\\_");r.comparison_vector.push(f),r.gamma_symbols.push(`\\gamma_\\text{${p}}`),r.col_names.push(c),r.m_values.push(u),r.m_symbols.push(`m_{\\text{${p}},${f}}`),r.u_values.push(d),r.u_symbols.push(`u_{\\text{${p}},${f}}`),r.bayes_factors.push(u/d),r.log2_bayes_factors.push(Math.log2(u/d))});let _=r.log2_bayes_factors.reduce((m,c)=>m+c,l);r.match_probability=t(_);let s=o.proportion_of_matches;return r.size_of_match_portion=s*r.m_values.reduce((m,c)=>m*c,1),r.size_of_non_match_portion=(1-s)*r.u_values.reduce((m,c)=>m*c,1),r})}function Ce(a){return(function(t,e,o){let n=a(t,e,o),i=n.m_values.map(p=>p.toPrecision(3)),l=n.u_values.map(p=>p.toPrecision(3)),r=n.lam.toPrecision(3),_=[r].concat(i),s=[`(1 - ${r})`].concat(l),m=_.join(" \\times "),c=s.join(" \\times "),f=n.match_probability.toPrecision(3),u=n.size_of_match_portion.toPrecision(3),d=n.size_of_non_match_portion.toPrecision(3);return`\\frac{${m}}{(${m}) + (${c})}  \\newline[10pt] = \\frac{${u}}{${u} + ${d}}  \\newline[10pt] = ${f}`})}function Le(a){return(function(t,e){let o=a(t,e),n=o.m_symbols,i=o.u_symbols;o.lam;let l=["\\lambda"].concat(n),r=["(1 - \\lambda)"].concat(i),_=l.join(" "),s=r.join(" ");return`\\frac{${_}}{${_}) + ${s}}`})}function Re(a,t,e,o){return a`${t(e.objects()[0],o)}
`}function Be(a){return(function(t,e,o){let n=a(t,e,o),i=n.gamma_symbols.join(", "),l=n.comparison_vector.join(", ");return`\\bm{\\gamma} = [${i}]= [${l}]`})}function Ie(a,t,e,o){return a`${t(e.objects()[0],o)}
`}function De(a){return a`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function We(a,t,e,o){return a`${t(e.objects()[0],o)}`}function Je(a,t,e){return a(t.objects()[0],e)}function Me(a){return(function(t,e){let o=a.from(t),n=a.from(e),i=o.join(n,(_,s)=>!0,null,{suffix:["_l","_r"]}),l=o.columnNames(),r=[];return l.forEach(_=>{r.push(_+"_l"),r.push(_+"_r")}),i=i.select(r),i})}function Oe(a){return(function(e,o){let n=o.comparison_columns,i=e.objects();n.forEach(function(r){i.forEach(function(_){_["𝛾_"+r.col_name]=r.case_expression(_)})}),i=a.from(i);let l=["uid_l","uid_r"];return n.forEach(r=>{l.push(r.col_name+"_l"),l.push(r.col_name+"_r"),l.push("𝛾_"+r.col_name)}),i=i.select(l),i})}function Ne(){return(function(t){return t/(t+1)})}function ze(a){return(function(e){return a(2**e)})}function He(){return(function(t){return t/(1-t)})}function Ue(a){return(function(e){return Math.log2(a(e))})}function Ve(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",a.autoType).then(t=>{let e={};return t.forEach(o=>{e[o.firstname]=o.freq}),e})}function Ge(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",a.autoType).then(t=>{let e={};return t.forEach(o=>{e[o.surname]=o.freq}),e})}function Ke(a,t){return{fname:a,sname:t}}function Ye(a){return a.fname.joshua}function Qe(a){return a.sname.linacre}function w(a,t){const e=a.module();e.variable(t()).define(["md"],we),e.variable(t("records_l")).define("records_l",ve),e.variable(t("records_r")).define("records_r",xe),e.variable(t("df_r")).define("df_r",["aq","records_r"],ke),e.variable(t("splink_settings")).define("splink_settings",$e),e.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],qe),e.variable(t()).define(["df_comparison"],Te),e.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],Pe),e.variable(t()).define(["df_gammas"],Se),e.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],Fe),e.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],je),e.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],Ae),e.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],Ee),e.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],Ce),e.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],Le),e.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],Re),e.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],Be),e.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],Ie),e.variable(t()).define(["tex"],De),e.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],We),e.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],Je),e.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],Me),e.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],Oe),e.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Ne),e.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],ze),e.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",He),e.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],Ue);const o=a.module(h);return e.import("aq",o),e.import("op",o),e.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],Ve),e.variable(t("surname_lookup")).define("surname_lookup",["d3"],Ge),e.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Ke),e.variable(t()).define(["term_freqs"],Ye),e.variable(t()).define(["term_freqs"],Qe),e}function Xe(a){return a`# Charts and Figures (Introduction)`}function Ze(a){return new a({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bristol"})}function et(a){return new a({first_name:"John",surname:"Smith",date_of_birth:"1989-03-02",town:"Bath"})}function tt(a,t,e){return new a(t,e)}function at(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.9,.1],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7]}]}}function ot(a,t){let e=a.as_wide().objects()[0];return Object.keys(t.as_dict()).forEach(o=>{e[o+"_l"]==e[o+"_r"]?e["𝛾_"+o]=1:e["𝛾_"+o]=0}),e}function nt(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}}function it(a,t,e,o){return a(t,e,o,!0)}function rt(a){return a`# Charts and Figures (Mathematical Model)`}function lt(){return(function(t){const e=[],o={"unique id":"uid","first name":"fname",surname:"sname","date of birth":"dob",town:"town"};return t.querySelectorAll("tr").forEach((i,l)=>{let r=i.cells,_=[];for(let s of r){let m=s.innerText;m=m.trim(),m=m.toLowerCase(),m==""&&(m=null),_.push(m)}e.push(_)}),e.reduce((i,l,r)=>{if(r==0)l=l.map(_=>o[_]),i.properties=l;else{const _={};i.properties.forEach((s,m)=>{_[s]=l[m]}),i.push(_)}return i},[])})}function _t(a,t,e){return a.observe(o=>{const n=i=>o(t(e));return e.addEventListener("input",n,!1),o(t(e)),()=>window.removeEventListener("input",n)})}function st(a){return a`
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
`}function mt(a){return a`
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
`}function ct(a,t,e){return a.observe(o=>{const n=i=>o(t(e));return e.addEventListener("input",n,!1),o(t(e)),()=>window.removeEventListener("input",n)})}function ut(a,t){return a.from(t)}function dt(a,t){return a.from(t)}function ft(a,t,e){return a(t,e)}function pt(a,t,e){return a(t,e)}function bt(a){let t=["uid_l","uid_r"],e=a.columnNames();return e=e.filter(o=>o.includes("𝛾_")),e=t.concat(e),a.select(e)}function ht(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:a=>a.fname_l==a.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:a=>a.sname_l==a.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:a=>a.dob_l==a.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:a=>a.town_l==a.town_r?1:0}]}}function gt(a){return new a({first_name:"Tom",surname:"Hanks",month_of_birth:"July"})}function yt(a){return new a({first_name:"Tom",surname:"Hanks",month_of_birth:"June"})}function wt(a,t,e){return new a(t,e)}function vt(a,t){const e=a.module();e.variable(t()).define(["md"],Xe);const o=a.module(U);e.import("Record",o),e.import("RecordComparison",o);const n=a.module(ye);e.import("get_waterfall_chart",n),e.variable(t("example_record_1_l")).define("example_record_1_l",["Record"],Ze),e.variable(t("example_record_1_r")).define("example_record_1_r",["Record"],et),e.variable(t("example_1_comparison")).define("example_1_comparison",["RecordComparison","example_record_1_l","example_record_1_r"],tt),e.variable(t("splink_settings")).define("splink_settings",at),e.variable(t("example_1_row_with_gammas")).define("example_1_row_with_gammas",["example_1_comparison","example_record_1_l"],ot),e.variable(t("overrides")).define("overrides",nt),e.variable(t("intro_simple_waterfall")).define("intro_simple_waterfall",["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"],it),e.variable(t()).define(["md"],rt);const i=a.module(w);e.import("get_df_comparison",i),e.import("get_df_gammas",i),e.variable(t("parseTableData")).define("parseTableData",lt),e.variable(t("records_l")).define("records_l",["Generators","parseTableData","table_l"],_t),e.variable(t("table_l")).define("table_l",["html"],st),e.variable(t("table_r")).define("table_r",["html"],mt),e.variable(t("records_r")).define("records_r",["Generators","parseTableData","table_r"],ct),e.variable(t("df_1_l")).define("df_1_l",["aq","records_l"],ut),e.variable(t("df_1_r")).define("df_1_r",["aq","records_r"],dt),e.variable(t("df_comparisons_1")).define("df_comparisons_1",["get_df_comparison","records_l","records_r"],ft),e.variable(t("df_gammas_1")).define("df_gammas_1",["get_df_gammas","df_comparisons_1","splink_settings_1"],pt),e.variable(t("df_gammas_only_1")).define("df_gammas_only_1",["df_gammas_1"],bt),e.variable(t("splink_settings_1")).define("splink_settings_1",ht),e.variable(t("example_record_2_l")).define("example_record_2_l",["Record"],gt),e.variable(t("example_record_2_r")).define("example_record_2_r",["Record"],yt),e.variable(t("example_2_comparison")).define("example_2_comparison",["RecordComparison","example_record_2_l","example_record_2_r"],wt);const l=a.module(h);return e.import("aq",l),e.import("op",l),e}function xt(a){return a`# The mathematics of the Fellegi Sunter model`}function kt(a){return a`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`}function $t(a){return a`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`}function qt(a){return a`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`}function Tt(a){return a`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`}function Pt(a){return a}function St(a){return a`### Dataset 2`}function Ft(a){return a}function jt(a,t){return a`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${t.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`}function At(a,t,e,o,n,i){return a`## Comparing columns

We need a mathematical way of evaluating these pairwise comparisons - a function that takes the comparisons as an input, and outputs match probabilities.  

The FS model solves this problem by comparing the records column by column, and assigning each comparison to two or more 'similarity levels'.

A simple example of a two-level comparison rule for a column may be:

- If the values in the column exactly match, assign the comparison to similarity level 1
- Otherwise assign the comparison to similarity level 0

In the following table, we apply this simple rule to every column. The comparisons are denoted with the prefix \`𝛾_\` because the mathematical symbol gamma is often used in the literate to represent comparisons.

${t.view()}

<br>

Now that we have a numeric representation of the comparisons, the model makes no further use of the raw data, instead using only the values in the 𝛾 columns: 

${e.view()}   
<br>
For each row in this table, the set of gamma values is known as the 'comparison vector'.  For example, the comparison vector for the first row in the table is:

${o`${n(t.slice(0,1).objects()[0],i)}`}
 `}function Et(a){return a`## Scoring comparisons`}function Ct(a){return a`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`}function Lt(a,t){return a`### m and u probabilities 

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


`}function Rt(a,t,e){return a`We can generalise this formula by using  ${t`\gamma`} to indicate the value of the comparison, the index ${t`k`} to designate the comparison column, and ${t`\ell`} to designate the observed comparison level, we can write:

${e`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline [10pt] = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline [10pt] = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`}function Bt(a){return a`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`}function It(a){return a`## Example`}function Dt(a){return a`
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

`}function Wt(a,t){return a.textarea({value:t,rows:26,spellcheck:!1})}function Jt(a){return a`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`}function Mt(a,t){return a.range([1,t.numRows()],{value:1,label:"Choose record comparison",step:1})}function Ot(a,t,e){return a`${t.slice(e-1,e).toMarkdown()}`}function Nt(a,t,e,o,n,i){return a`The comparison vector is given by:

${t`${e(o.slice(n-1,n).objects()[0],i)}`}

`}function zt(a){return a`The formula for match probability is:`}function Ht(a,t,e,o,n){return a`${t(e.slice(o-1,o).objects()[0],n)}`}function Ut(a){return a`And substituting in numbers using our specified parameters we get: `}function Vt(a,t,e,o,n){return a`${t(e.slice(o-1,o).objects()[0],n)}`}function Gt(a,t,e,o,n,i){return a`i.e. the ${t`\text{estimated match probability} = 

${e(o.slice(n-1,n).objects()[0],i).match_probability.toPrecision(4)}

`}

`}function Kt(a){return a`<br><br>`}function Yt(a,t,e){return a`## Annex:  Bayes Theorem

Recall that Bayes Theorem is given by:

${t`
\operatorname{Pr}(a|b) = {\frac{\operatorname{Pr}(b|a)\operatorname{Pr}(a)}{\operatorname{Pr}{(b)}}}`} 


or , in words: 

${t`
\text{posterior} = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}`}

In the context of record linkage, we can describe these parts as:

**Prior**:
The overall proportion of comparisons which are matches ${e`\operatorname{Pr}(\text{match})`}.

**Evidence**: We have observed that e.g. first name matches, ${e`\operatorname{Pr}(\text{first name matches})`}.

**Likelihood**: The probability that first name matches amongst matches, given by ${e`\operatorname{Pr}(\text{first name matches}|\text{records match})`}.  

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
`}function Qt(a){return a`## Calculations and code`}function Xt(a){return a.options({displayMode:!0,fleqn:!0})}function Zt(){return`{
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
  
  }`}function ea(a){return JSON.parse(a)}function ta(a){return a`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`}function aa(a){return a("@observablehq/inputs")}function ia(a,t){const e=a.module();e.variable(t("title")).define("title",["md"],xt),e.variable(t()).define(["md"],kt),e.variable(t("para_1")).define("para_1",["md"],$t),e.variable(t("para_2")).define("para_2",["md"],qt),e.variable(t("para_3")).define("para_3",["md"],Tt),e.variable(t("table_l1")).define("table_l1",["table_l"],Pt),e.variable(t("ds2_head")).define("ds2_head",["md"],St),e.variable(t("table_r1")).define("table_r1",["table_r"],Ft),e.variable(t("rec_comparisons")).define("rec_comparisons",["md","df_comparisons_1"],jt),e.variable(t("para_4")).define("para_4",["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"],At),e.variable(t("subhead_1")).define("subhead_1",["md"],Et),e.variable(t("para_5")).define("para_5",["md"],Ct),e.variable(t("para_6")).define("para_6",["md","texd"],Lt),e.variable(t("para_7")).define("para_7",["md","tex","texd"],Rt),e.variable(t("para_8")).define("para_8",["md"],Bt),e.variable(t("subhead_2")).define("subhead_2",["md"],It),e.variable(t("para_10")).define("para_10",["md"],Dt),e.variable(t("viewof splink_settings")).define("viewof splink_settings",["inputs","default_splink_settings"],Wt),e.variable(t("splink_settings")).define("splink_settings",["Generators","viewof splink_settings"],(i,l)=>i.input(l)),e.variable(t("para_11")).define("para_11",["md"],Jt),e.variable(t("viewof row_index")).define("viewof row_index",["inputs","df_gammas_1"],Mt),e.variable(t("row_index")).define("row_index",["Generators","viewof row_index"],(i,l)=>i.input(l)),e.variable(t("this_row")).define("this_row",["md","df_comparisons_1","row_index"],Ot),e.variable(t("para_12")).define("para_12",["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"],Nt),e.variable(t("para_13")).define("para_13",["md"],zt),e.variable(t("para_14")).define("para_14",["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"],Ht),e.variable(t("para_15")).define("para_15",["md"],Ut),e.variable(t("para_16")).define("para_16",["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"],Vt),e.variable(t("para_17")).define("para_17",["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"],Gt),e.variable(t("para_18")).define("para_18",["md"],Kt),e.variable(t("para_19")).define("para_19",["md","texd","tex"],Yt),e.variable(t()).define(["md"],Qt);const o=a.module(vt);e.import("example_2_comparison",o),e.import("intro_simple_waterfall",o),e.import("table_l",o),e.import("table_r",o),e.import("df_1_l",o),e.import("df_1_r",o),e.import("df_comparisons_1",o),e.import("df_gammas_1",o),e.import("df_gammas_only_1",o);const n=a.module(w);return e.import("get_m_u_formula_symbols",n),e.import("get_m_u_formula_numbers",n),e.import("get_comparison_vector_symbols_and_numbers",n),e.import("get_match_probability_components",n),e.variable(t("texd")).define("texd",["tex"],Xt),e.variable(t("default_splink_settings")).define("default_splink_settings",Zt),e.variable(t("settings")).define("settings",["splink_settings"],ea),e.variable(t("css_styles")).define("css_styles",["html"],ta),e.variable(t("inputs")).define("inputs",["require"],aa),e}export{ia as default};
