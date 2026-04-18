function q(a){return a`# Treemap for Bayes Intuition`}function T(a,t){return a.textarea({value:t,rows:29})}function S(a,t){let e=a.comparison_columns.length;return t.range([0,e],{step:1,label:"How many columns to take account of?"})}function j(a){return a`In the following diagram, the outermost rectangle represents the space all pairwise record comparisons.  

This can then be recursively split into subsets, beginning with spliting between record pairs that match and those that do not match, then further splitting these rectangles based on comparisons of the values in columns.
`}function A(a,t,e){return a(t,e,600)}function E(a,t,e,n,i,r,o){return(function(l,_,m){const d=a(l),f=t(d,m),u=e`<div class="treemap_container">`,c=n.select(u).append("div").attr("class","svg-tooltip").style("position","absolute").style("display","inline-block").style("visibility","hidden").attr("pointer-events","none"),p=n.select(u).append("svg").attr("height",m).attr("width",i);let b=n.filter(f,s=>s.depth<=_+1);b=n.group(b,s=>s.height);const g=p.selectAll("g").data(b).join("g").selectAll("g").data(s=>s[1]).join("g").attr("transform",s=>`translate(${s.x0},${s.y0})`);return g.append("rect").attr("id",s=>(s.nodeUid=r.uid("node")).id).attr("width",s=>s.x1-s.x0).attr("height",s=>s.y1-s.y0).attr("stroke-width","1px").attr("stroke","black").attr("fill",s=>{if(s.depth==_+1)return n.rgb(s.data.colour);{let h=n.rgb(s.data.colour);return h.hex()!="#ffffff"&&(s.depth==1?h.opacity=.3:h.opacity=0),h}}),g.append("foreignObject").attr("pointer-events","none").attr("width",s=>s.x1-s.x0).attr("height",s=>s.y1-s.y0).attr("xmlns","http://www.w3.org/1999/xhtml").append("xhtml:div").attr("class","wrap-info").append("div").html(s=>o(s,_)),g.filter(s=>s.children).selectAll("tspan").attr("dx",3).attr("y",13),g.filter(s=>!s.children).selectAll("tspan").attr("x",3).attr("y",(s,h,v)=>`${(h===v.length-1)*.3+1.1+h*.9}em`),p.selectAll("rect").on("mouseover",function(s){return c.style("visibility","visible")}).on("mousemove",function(s){let h=n.select(this).datum(),v=o(h,_);c.html(v);let y,w;c.node().getBoundingClientRect().height;let x=c.node().getBoundingClientRect().width;y=s.offsetY+10+"px",i-s.layerX>x?w=s.offsetX+10+"px":w=s.offsetX-x-10+"px";let $="visible";return v==""&&($="hidden"),c.style("top",y).style("left",w).style("visibility",$)}).on("click",function(s){console.log(`height: ${m}`),console.log(`event.layerY: ${s.layerY}`)}).on("mouseout",function(){return c.style("visibility","hidden")}),u})}function P(a){return(function t(e,n,i){if("children"in e)e.children.forEach(r=>{t(r,n,i)});else{let r=a(n,e,i);e.children=r}delete e.value})}function F(a,t,e){return(function(i,r,o){let l=[],_,m;return o?(_=i.m_probabilities,m=a):(_=i.u_probabilities,m=t),_.forEach((d,f)=>{let u="gamma_"+i.col_name+" = "+f,c={name:u,name_list:r.name_list.concat(u),value:r.value*d,prob:d,prob_list:r.prob_list.concat(d)};i.gamma_value==f&&r.colour==m?c.colour=m:c.colour=e.rgb(255,255,255),l.push(c)}),l})}function C(a,t,e,n){return(function(i){let r=i.proportion_of_matches,o={name:"All comparisons",name_list:[],prob_list:[],prob:1,colour:a.rgb(255,255,255),children:[{name:"matches",name_list:["match"],prob_list:[r],prob:r,value:r,colour:t},{name:"non-match",name_list:["non-match"],prob_list:[1-r],prob:1-r,value:1-r,colour:e}]},l=o.children[0],_=o.children[1];return i.comparison_columns.forEach((m,d)=>{n(l,m,!0),n(_,m,!1)}),o})}function L(a,t){return(function(n,i){let r=n.data.name_list,o=n.data.prob_list,m=r.map((u,c)=>[u,o[c]]).map(u=>`<p>${u[0]} (${a(u[1])})`).join(" and "),d=o.reduce((u,c)=>u*c,1);m=m+`<p>Proportion of all comparisons: ${a(d)}`;let f=t`${m}`;return n.depth==i+1?f.innerHTML:""})}function B(a){return JSON.parse(a)}function I(a){return JSON.stringify(a)}function M(a){return a`
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
</style>`}function z(a,t){return((e,n)=>a.treemap().tile(a.treemapSquarify).size([t,n]).paddingOuter(5).paddingTop(5).paddingInner(5).round(!0)(a.hierarchy(e).sum(i=>i.value).sort((i,r)=>r.value-i.value)))}function O(){return`{
    "proportion_of_matches": 0.4,
    "comparison_columns": [
        {
            "col_name": "fname",
            "m_probabilities": [0.25, 0.75],
            "u_probabilities": [0.7,  0.3],
            "gamma_value": 1
        },
        {
            "col_name": "sname",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 0
        },
        {
            "col_name": "dob",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        },
        {
            "col_name": "town",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        }
    ]
}`}function W(a){return a.format(".1%")}function G(a){return a.scaleOrdinal(a.schemeCategory10)}function D(a,t){return a.rgb(t(2)).brighter(2.5)}function H(a,t){return a.rgb(t(1)).brighter(1.5)}function J(a){return a("d3@6")}function R(a){return a("@observablehq/inputs")}function U(){return`Links:

x times more likely: 
https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/
https://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1740-9713.2006.00204.x

Odds are not quite the same as bayes factors:  https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/MIT18_05S14_Reading12b.pdf

https://cran.r-project.org/web/packages/BayesFactor/vignettes/odds_probs.html#:~:text=The%20Bayes%20factor%20represents%20the,are%20what%20are%20being%20changed.&text=Further%2C%20these%20odds%20can%20be,models%20sum%20to%20known%20probability.
The Bayes factor represents the relative evidence between two models – that is, the change in the model odds due to the data – but the odds are what are being changed. 


https://bookdown.org/kevin_davisross/bayesian-reasoning-and-methods/bayes-factor.html
Representing bayes theorem using bf

`}function V(a,t){return a(t)}function k(a,t){const e=a.module();return e.variable(t()).define(["md"],q),e.variable(t("viewof settings_raw")).define("viewof settings_raw",["inputs","default_settings"],T),e.variable(t("settings_raw")).define("settings_raw",["Generators","viewof settings_raw"],(n,i)=>n.input(i)),e.variable(t("viewof max_depth_1")).define("viewof max_depth_1",["settings","inputs"],S),e.variable(t("max_depth_1")).define("max_depth_1",["Generators","viewof max_depth_1"],(n,i)=>n.input(i)),e.variable(t()).define(["md"],j),e.variable(t()).define(["plot_treemap","settings","max_depth_1"],A),e.variable(t("plot_treemap")).define("plot_treemap",["generate_treemap_data","treemap","html","d3","width","DOM","box_html"],E),e.variable(t("add_children_from_column")).define("add_children_from_column",["children_to_add"],P),e.variable(t("children_to_add")).define("children_to_add",["color_match","color_non_match","d3"],F),e.variable(t("generate_treemap_data")).define("generate_treemap_data",["d3","color_match","color_non_match","add_children_from_column"],C),e.variable(t("box_html")).define("box_html",["format_perc","html"],L),e.variable(t("settings")).define("settings",["settings_raw"],B),e.variable(t()).define(["settings"],I),e.variable(t("styles")).define("styles",["html"],M),e.variable(t("treemap")).define("treemap",["d3","width"],z),e.variable(t("default_settings")).define("default_settings",O),e.variable(t("format_perc")).define("format_perc",["d3"],W),e.variable(t("colours")).define("colours",["d3"],G),e.variable(t("color_match")).define("color_match",["d3","colours"],D),e.variable(t("color_non_match")).define("color_non_match",["d3","colours"],H),e.variable(t("d3")).define("d3",["require"],J),e.variable(t("inputs")).define("inputs",["require"],R),e.variable(t()).define(U),e.variable(t()).define(["generate_treemap_data","settings"],V),e}function N(a){return a`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function K(a){return a`Import Arquero and extend it to print HTML tables in Observable:`}async function Y(a,t,e,n){const i=await a(`arquero@${t}`);return(await Promise.all(e.map(r=>a(r)))).forEach(r=>i.addPackage(r)),i.addTableMethod("view",n,{override:!0}),i}function X(){return"4.2.0"}function Z(){return[]}function Q(a){return a`Export a global reference to Arquero operations:`}function ee(a){return a.op}function ae(a){return a`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function te(a){return a`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function ne(a){return a`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function ie(a){return a`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function oe(a){return a`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function re(a){return a.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function le(a){return a`Sorted differences between Seattle and Chicago:`}function _e(a,t){return a.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function me(a){return a`Is Seattle more correlated with San Francisco or Chicago?`}function se(a,t){return a.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function ue(a){return a`Summary statistics per city, as output objects:`}function ce(a,t,e){return a.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:n=>e.min(n.sun),max:n=>e.max(n.sun),avg:n=>e.average(n.sun),med:n=>e.median(n.sun),skew:({sun:n})=>(e.mean(n)-e.median(n))/e.stdev(n)||0}).objects()}function de(a){return a`<hr>
## Utilities
`}function fe(a){const e=r=>`<span style="color: #999;">${r}</span>`,n="margin: 0; border-collapse: collapse; width: initial;",i="padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums;";return function(r,o={}){typeof o=="number"&&(o={limit:o});const l={...o.color};if(typeof o.color=="function")r.columnNames().forEach(c=>l[c]=o.color);else for(const c in l){const p=l[c];l[c]=typeof p=="function"?p:()=>p}const _=`${n}`,m=(c,p,b)=>`${i} max-width: ${+o.maxCellWidth||300}px;`+(l[c]?` background-color: ${l[c](p,b)};`:"");o={limit:100,null:e,...o,style:{table:_,td:m,th:m}};const f=`${`max-height: ${+o.height||270}px`}; overflow-x: auto; overflow-y: auto;`,u=a`<div style="${f}">${r.toHTML(o)}</div>`;return u.value=r,u}}function pe(a,t){const e=a.module();return e.variable(t()).define(["md"],N),e.variable(t()).define(["md"],K),e.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],Y),e.variable(t("aq_version")).define("aq_version",X),e.variable(t("aq_packages")).define("aq_packages",Z),e.variable(t()).define(["md"],Q),e.variable(t("op")).define("op",["aq"],ee),e.variable(t()).define(["md"],ae),e.variable(t()).define(["md"],te),e.variable(t()).define(["md"],ne),e.variable(t()).define(["md"],ie),e.variable(t()).define(["md"],oe),e.variable(t("dt")).define("dt",["aq"],re),e.variable(t()).define(["md"],le),e.variable(t()).define(["dt","op"],_e),e.variable(t()).define(["md"],me),e.variable(t()).define(["dt","op"],se),e.variable(t()).define(["md"],ue),e.variable(t()).define(["dt","aq","op"],ce),e.variable(t()).define(["md"],de),e.variable(t("toView")).define("toView",["html"],fe),e}function be(a){return a`# Fellegi Sunter utils`}function he(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function ge(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function ve(a,t){return a.from(t)}function we(){return{proportion_of_matches:1/100,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:a=>a.fname_l==a.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:a=>a.sname_l==a.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:a=>a.dob_l==a.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:a=>a.town_l==a.town_r?1:0}]}}function ye(a,t,e){return a(t,e)}function xe(a){return a.view()}function $e(a,t,e){return a(t,e)}function ke(a){return a.view()}function qe(a,t,e,n){return a(t,e,n).view()}function Te(a,t){return(function(n,i,r={}){let o=n.objects().map(function(_){return _.match_probability=a(_,i,r),_}),l=t.from(o);return l=l.relocate(["match_probability"],{after:"uid_r"}),l})}function Se(a,t){return(function(e,n,i={}){let r=n.comparison_columns,o=a(n.proportion_of_matches),l=r.reduce((_,m)=>{let d="𝛾_"+m.col_name,f=e[d];if(f==-1)return _;let u=m.m_probabilities[f],c=m.u_probabilities[f],p=e[m.col_name+"_l"].toLowerCase(),b=e[m.col_name+"_r"].toLowerCase();if(p==b&&m.col_name in i){let g=i[m.col_name],s=g[p]||0,h=g[b]||0,v=Math.max(s,h);v>0&&(c=v)}return _+Math.log2(u/c)},o);return t(l)})}function je(a,t){return(function(e,n,i){i==null&&(i=n.comparison_columns.length);let r=n.comparison_columns.slice(0,i),o=a(n.proportion_of_matches),l={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:n.proportion_of_matches};r.forEach(d=>{let f="𝛾_"+d.col_name,u=e[f],c=d.m_probabilities[u],p=d.u_probabilities[u],b=d.col_name.replace("_","\\_");l.comparison_vector.push(u),l.gamma_symbols.push(`\\gamma_\\text{${b}}`),l.col_names.push(f),l.m_values.push(c),l.m_symbols.push(`m_{\\text{${b}},${u}}`),l.u_values.push(p),l.u_symbols.push(`u_{\\text{${b}},${u}}`),l.bayes_factors.push(c/p),l.log2_bayes_factors.push(Math.log2(c/p))});let _=l.log2_bayes_factors.reduce((d,f)=>d+f,o);l.match_probability=t(_);let m=n.proportion_of_matches;return l.size_of_match_portion=m*l.m_values.reduce((d,f)=>d*f,1),l.size_of_non_match_portion=(1-m)*l.u_values.reduce((d,f)=>d*f,1),l})}function Ae(a){return(function(t,e,n){let i=a(t,e,n),r=i.m_values.map(b=>b.toPrecision(3)),o=i.u_values.map(b=>b.toPrecision(3)),l=i.lam.toPrecision(3),_=[l].concat(r),m=[`(1 - ${l})`].concat(o),d=_.join(" \\times "),f=m.join(" \\times "),u=i.match_probability.toPrecision(3),c=i.size_of_match_portion.toPrecision(3),p=i.size_of_non_match_portion.toPrecision(3);return`\\frac{${d}}{(${d}) + (${f})}  \\newline[10pt] = \\frac{${c}}{${c} + ${p}}  \\newline[10pt] = ${u}`})}function Ee(a){return(function(t,e){let n=a(t,e),i=n.m_symbols,r=n.u_symbols;n.lam;let o=["\\lambda"].concat(i),l=["(1 - \\lambda)"].concat(r),_=o.join(" "),m=l.join(" ");return`\\frac{${_}}{${_}) + ${m}}`})}function Pe(a,t,e,n){return a`${t(e.objects()[0],n)}
`}function Fe(a){return(function(t,e,n){let i=a(t,e,n),r=i.gamma_symbols.join(", "),o=i.comparison_vector.join(", ");return`\\bm{\\gamma} = [${r}]= [${o}]`})}function Ce(a,t,e,n){return a`${t(e.objects()[0],n)}
`}function Le(a){return a`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function Be(a,t,e,n){return a`${t(e.objects()[0],n)}`}function Ie(a,t,e){return a(t.objects()[0],e)}function Me(a){return(function(t,e){let n=a.from(t),i=a.from(e),r=n.join(i,(_,m)=>!0,null,{suffix:["_l","_r"]}),o=n.columnNames(),l=[];return o.forEach(_=>{l.push(_+"_l"),l.push(_+"_r")}),r=r.select(l),r})}function ze(a){return(function(e,n){let i=n.comparison_columns,r=e.objects();i.forEach(function(l){r.forEach(function(_){_["𝛾_"+l.col_name]=l.case_expression(_)})}),r=a.from(r);let o=["uid_l","uid_r"];return i.forEach(l=>{o.push(l.col_name+"_l"),o.push(l.col_name+"_r"),o.push("𝛾_"+l.col_name)}),r=r.select(o),r})}function Oe(){return(function(t){return t/(t+1)})}function We(a){return(function(e){return a(2**e)})}function Ge(){return(function(t){return t/(1-t)})}function De(a){return(function(e){return Math.log2(a(e))})}function He(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",a.autoType).then(t=>{let e={};return t.forEach(n=>{e[n.firstname]=n.freq}),e})}function Je(a){return a.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",a.autoType).then(t=>{let e={};return t.forEach(n=>{e[n.surname]=n.freq}),e})}function Re(a,t){return{fname:a,sname:t}}function Ue(a){return a.fname.joshua}function Ve(a){return a.sname.linacre}function Ne(a,t){const e=a.module();e.variable(t()).define(["md"],be),e.variable(t("records_l")).define("records_l",he),e.variable(t("records_r")).define("records_r",ge),e.variable(t("df_r")).define("df_r",["aq","records_r"],ve),e.variable(t("splink_settings")).define("splink_settings",we),e.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],ye),e.variable(t()).define(["df_comparison"],xe),e.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],$e),e.variable(t()).define(["df_gammas"],ke),e.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],qe),e.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],Te),e.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],Se),e.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],je),e.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],Ae),e.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],Ee),e.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],Pe),e.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],Fe),e.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],Ce),e.variable(t()).define(["tex"],Le),e.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],Be),e.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],Ie),e.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],Me),e.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],ze),e.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Oe),e.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],We),e.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",Ge),e.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],De);const n=a.module(pe);return e.import("aq",n),e.import("op",n),e.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],He),e.variable(t("surname_lookup")).define("surname_lookup",["d3"],Je),e.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],Re),e.variable(t()).define(["term_freqs"],Ue),e.variable(t()).define(["term_freqs"],Ve),e}function Ke(a){return a`# Fellegi-Sunter visualisation interface`}function Ye(a,t,e){return(function(i){let r=i.gamma_value==1?"match":"mismatch";const o=a.radio(["match","mismatch"],{label:`Comparison of ${i.col_name} is a:`,value:r}),l=a.range([0,1],{label:t`u_\text{${i.col_name},level\_0}`,value:i.u_probabilities[0]}),_=a.range([0,1],{label:t`u_\text{${i.col_name},level\_1}`,value:i.u_probabilities[1]}),m=a.range([0,1],{label:t`m_\text{${i.col_name},level\_0}`,value:i.m_probabilities[0]}),d=a.range([0,1],{label:t`m_\text{${i.col_name},level\_1}`,value:i.m_probabilities[1]}),f=e`
    <h4>Choose value and parameters for ${i.col_name}</h4>
    ${o}
    <div class="container">
      <div class="item-0">${l}${m}</div>
      <div class="item-1">${_}${d}</div>
    </div>
  `;let u=()=>({col_name:i.col_name,gamma_value:o.querySelector("input").checked?1:0,u_probabilities:[l.value,_.value],m_probabilities:[m.value,d.value]});return o.onclick=()=>{console.log(o.value),f.value=u()},l.oninput=()=>{_.value=1-l.value,f.value=u()},_.oninput=()=>{l.value=1-_.value,f.value=u()},m.oninput=()=>{d.value=1-m.value,f.value=u()},d.oninput=()=>{m.value=1-d.value,f.value=u()},f.value=u(),f})}function Xe(a){return a({col_name:"fname",gamma_value:1,m_probabilities:[.3,.7],u_probabilities:[.75,.25]})}function Ze(a){return a}function Qe(a){return a({col_name:"sname",gamma_value:0,m_probabilities:[.2,.8],u_probabilities:[.85,.15]})}function ea(a){return a({col_name:"dob",gamma_value:1,m_probabilities:[.2,.8],u_probabilities:[.8,.2]})}function aa(a){return a({col_name:"town",gamma_value:1,m_probabilities:[.3,.7],u_probabilities:[.9,.1]})}function ta(a,t){return a.range([0,1],{label:t`\lambda`,value:.3})}function na(a,t,e,n,i){return{proportion_of_matches:a,comparison_columns:[t,e,n,i]}}function ia(a){return a`<style>.container {
  display: flex;
flex-wrap: wrap;
  gap: 12px;
}
</style>
`}function oa(a){return a("@observablehq/inputs")}function ra(a,t){const e=a.module();return e.variable(t()).define(["md"],Ke),e.variable(t("my_interface")).define("my_interface",["inputs","tex","html"],Ye),e.variable(t("viewof fname_val")).define("viewof fname_val",["my_interface"],Xe),e.variable(t("fname_val")).define("fname_val",["Generators","viewof fname_val"],(n,i)=>n.input(i)),e.variable(t()).define(["fname_val"],Ze),e.variable(t("viewof sname_val")).define("viewof sname_val",["my_interface"],Qe),e.variable(t("sname_val")).define("sname_val",["Generators","viewof sname_val"],(n,i)=>n.input(i)),e.variable(t("viewof dob_val")).define("viewof dob_val",["my_interface"],ea),e.variable(t("dob_val")).define("dob_val",["Generators","viewof dob_val"],(n,i)=>n.input(i)),e.variable(t("viewof town_val")).define("viewof town_val",["my_interface"],aa),e.variable(t("town_val")).define("town_val",["Generators","viewof town_val"],(n,i)=>n.input(i)),e.variable(t("viewof lam")).define("viewof lam",["inputs","tex"],ta),e.variable(t("lam")).define("lam",["Generators","viewof lam"],(n,i)=>n.input(i)),e.variable(t("splink_settings")).define("splink_settings",["lam","fname_val","sname_val","dob_val","town_val"],na),e.variable(t("form_styles")).define("form_styles",["html"],ia),e.variable(t("inputs")).define("inputs",["require"],oa),e}function la(a){return a`# Visualising the Fellegi Sunter model `}function _a(a){return a`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/visualising_fellegi_sunter/).*`}function ma(a,t){return a`The [previous article](https://www.robinlinacre.com/maths_of_fellegi_sunter/) presented an implementation of the Fellegi Sunter model.  We showed that match probability could be represented by Equation 1 - which is reproduced below:
${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}

`}function sa(a){return a`This article presents a way to understand and visualise this formula.`}function ua(a){return a`In our visualisation, we are going to take each piece of evidence into account in turn. This is possible due to our assumption of conditional independence of comparison columns given the match status.

The means Equation 1 is equivalent to a repeated application of Bayes' Theorem (see annex). See [here](https://www.youtube.com/watch?v=HZGCoVF3YvM) is more in depth video about Bayes Theorem.
`}function ca(a){return a`## Example

We are going to compute match probability for a record comparison with the following comparison columns:

- \`fname\` (first name)
- \`sname\` (surname)
- \`dob\` (date of birth)
- \`town\` 


The default parameter values are a bit unrealistic, but help make sure the diagrams are legible.
`}function da(a){return a`## Step 1`}function fa(a,t,e,n){return a`We begin by visualising the space of all pairwise record comparisons, splitting the overall comparison space into ${t`matches`} and ${e`non-matches`} using our prior, ${n`\operatorname{Pr}(\text{records match}) =  \lambda`}`}function pa(a){return a}function ba(a,t){return a(t,0,300)}function ha(a,t,e,n,i){return a`Using only this information, our estimate of match probability is just the prior:

${t`\text{match probability} =  \frac{\lambda }{\lambda + (1-\lambda)}  \newline [10pt] = \frac{\colorbox{${e.hex()}}{\text{yellow area}}}{\colorbox{${e.hex()}}{\text{yellow area}} + \colorbox{${n.hex()}}{\text{blue area}} }= ${i.proportion_of_matches.toPrecision(4)} `}

`}function ga(a){return a`## Step 2 - First name`}function va(a){return a`We will now choose the parameters of the model for the first name field, and then take this information into account in the diagram.`}function wa(a){return a}function ya(a,t,e,n,i,r,o,l,_){return a` ${t("fname",e)}
An example of the data would be:
${n(i(1))}

According to the model parameters you've chosen:


- ${r("fname",o(1),e,"m")}
- ${r("fname",o(1),e,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${_`blue`} part of the following diagram:
`}function xa(a,t){return a(t,1,300)}function $a(a,t,e,n,i,r,o,l,_){return a` What's the probability we're in the ${t`yellow`} area?  This must be:

${e`\text{match probability} = \frac{\colorbox{${n.hex()}}{\text{yellow area}}}{\colorbox{${n.hex()}}{\text{yellow area}} + \colorbox{${i.hex()}}{\text{blue area}} } `}

From this diagram we can see that the ${r`\colorbox{${n.hex()}}{$\text{yellow area} = \lambda m_{1\ell}$}`} and the 
${r`\colorbox{${i.hex()}}{$\text{blue area} = (1-\lambda) u_{1\ell}$}`}.

So:

${e`\text{match probability} =  \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

Which, in numbers is:

${r`${o(l(2),_,1)}`}
`}function ka(a){return a`## Step 3 - Surname`}function qa(a){return a`Let's also choose parameters for \`sname\`, the surname field:`}function Ta(a){return a}function Sa(a,t,e,n,i,r,o,l,_){return a`${t("sname",e)}
An example of the data would be:
${n(i(2))}

According to the model parameters you've chosen:


- ${r("sname",o(2),e,"m")}
- ${r("sname",o(2),e,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${_`blue`} part of the following diagram:`}function ja(a,t){return a(t,2,300)}function Aa(a,t,e,n,i,r,o){return a`We now have:

${t`\text{match probability} = \frac{\colorbox{${e.hex()}}{\text{yellow area}}}{\colorbox{${e.hex()}}{\text{yellow area}} + \colorbox{${n.hex()}}{\text{blue area}} } `}

${t`= \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}}`}

Which, in numbers is:

${t`${i(r(2),o,2)}`}
`}function Ea(a){return a`## Step 4 - Date of birth`}function Pa(a){return a}function Fa(a,t,e,n,i,r,o,l,_){return a` ${t("dob",e)}
An example of the data would be:
${n(i(3))}

According to the model parameters you've chosen:


- ${r("dob",o(3),e,"m")}
- ${r("dob",o(3),e,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${_`blue`} part of the following diagram:
`}function Ca(a,t){return a(t,3,300)}function La(a,t,e,n,i){return a`We now have:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}}`}

${t`${e(n(3),i,3)}`}
`}function Ba(a){return a`## Step 5: Town`}function Ia(a){return a}function Ma(a,t,e,n,i,r,o,l,_){return a`The final column is town.

${t("town",e)}
An example of the final data would be:
${n(i(4))}

According to the model parameters you've chosen:


- ${r("town",o(4),e,"m")}
- ${r("town",o(4),e,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${l`yellow`} or ${_`blue`} part of the following diagram:
`}function za(a,t){return a(t,4,300)}function Oa(a,t,e,n,i,r){return a`The final match probability is therefore:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}u_{4\ell}}`}

Which, in numbers is:


${e`${n(i(4),r)}`}
`}function Wa(a,t,e){return a`## Annex:  Mathematical representation

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

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{1\ell}} \tag{2.1}`}

We start by applying Bayes Theorem once, accounting for the first comparison column:

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1}) = t = \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

This posterior, ${t`t`}, becomes the new prior, which we now use instead of lambda:
${e`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{t m_{2\ell}}{t m_{2\ell}+ (1-t)u_{2\ell}}\tag{2.2}`}

Note that:

${e`
1- t = 1 - \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell} - \lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{(1-\lambda)u_{1\ell} }{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}\tag{2.3}`}

But ${t`(2.3)`} shows that  the term ${t`(\lambda m_{1\ell}+ (1-\lambda)u_{1\ell})`} appears on both top and bottom of ${t`(2.2)`} and therefore cancels, leaving ${t`(2.1)`}  as desired.

`}function Ga(a){return a.options({displayMode:!0,fleqn:!0})}function Da(a,t,e){return a`<style>
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
background-color: ${e.hex()};
display:inline-block;
}

</style>`}function Ha(a){return(function(e){let n={},i={fname:[{fname_l:"John",fname_r:"Tom"},{fname_l:"John",fname_r:"John"}],sname:[{sname_l:"Smith",sname_r:"Hanks"},{sname_l:"Smith",sname_r:"Smith"}],dob:[{dob_l:"1989-03-02",dob_r:"1981-08-21"},{dob_l:"1989-03-02",dob_r:"1989-03-02"}],town:[{town_l:"Bristol",town_r:"Peckham"},{town_l:"Bristol",town_r:"Bristol"}]};return a.comparison_columns.slice(0,e).forEach(o=>{let l=i[o.col_name][o.gamma_value];n={...n,...l};let _="𝛾_"+o.col_name;n[_]=o.gamma_value}),n})}function Ja(a){return(function(e){let n=a(e),i=Object.keys(n).filter(o=>!o.includes("𝛾_")),r={};return i.forEach(o=>{r[o]=n[o]}),r})}function Ra(a){return(function(e){let n=Object.keys(e).join(" | "),i=Object.keys(e).map(o=>"-").join(" | "),r=Object.values(e).join(" | ");return a`${n} \n ${i} \n ${r} \n`})}function Ua(a){return a}function Va(a){return(function(e){return a`<span class="hl_nm">${e}</span>`})}function Na(a){return(function(e){return a`<span class="hl_m">${e}</span>`})}function Ka(a){return a}function Ya(a,t,e){return(function(i,r,o,l){let _=o.comparison_columns.filter(p=>p.col_name==i)[0],m=r["𝛾_"+i],d;m==1?d="matches":m==0&&(d="does not match"),i.replace("_","\\_");let f=`The column \`${i}\` ${d}`,u=_[`${l}_probabilities`][m]*100;u=parseFloat(u).toFixed(0)+"%";let c;return l=="m"?c=a`matching records`:c=t`non-matching records`,e`${f} in ${u} of ${c}`})}function Xa(a,t){return(function(n,i){let r;i.comparison_columns.forEach(_=>{_.col_name==n&&(r=_)});let o,l=r.gamma_value;return l==0?o="does not match":o="matches",a`You have chosen that the column \`${n}\` ${o}, i.e. that ${t`\gamma_\text{${n}}`} = ${l}.`})}function Za(a){return a("@observablehq/inputs")}function Qa(a,t){const e=a.module();e.variable(t("title")).define("title",["md"],la),e.variable(t()).define(["md"],_a),e.variable(t("para_1")).define("para_1",["md","texd"],ma),e.variable(t("para_2")).define("para_2",["md"],sa),e.variable(t("para_3")).define("para_3",["md"],ua),e.variable(t("para_4")).define("para_4",["md"],ca),e.variable(t("subhead_1")).define("subhead_1",["md"],da),e.variable(t("para_5")).define("para_5",["md","m","nm","tex"],fa),e.variable(t("lam_view")).define("lam_view",["viewof lam"],pa),e.variable(t("treemap_1")).define("treemap_1",["plot_treemap","splink_settings"],ba),e.variable(t("para_6")).define("para_6",["md","texd","color_match","color_non_match","splink_settings"],ha),e.variable(t("subhead_2")).define("subhead_2",["md"],ga),e.variable(t("para_7")).define("para_7",["md"],va),e.variable(t("fname_view")).define("fname_view",["viewof fname_val"],wa),e.variable(t("para_8")).define("para_8",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],ya),e.variable(t("treemap_2")).define("treemap_2",["plot_treemap","splink_settings"],xa),e.variable(t("para_9")).define("para_9",["md","m","texd","color_match","color_non_match","tex","get_m_u_formula_numbers","get_row","splink_settings"],$a),e.variable(t("subhead_3")).define("subhead_3",["md"],ka),e.variable(t("para_10")).define("para_10",["md"],qa),e.variable(t("sname_view")).define("sname_view",["viewof sname_val"],Ta),e.variable(t("para_11")).define("para_11",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],Sa),e.variable(t("treemap_3")).define("treemap_3",["plot_treemap","splink_settings"],ja),e.variable(t("para_12")).define("para_12",["md","texd","color_match","color_non_match","get_m_u_formula_numbers","get_row","splink_settings"],Aa),e.variable(t("subhead_4")).define("subhead_4",["md"],Ea),e.variable(t("dob_view")).define("dob_view",["viewof dob_val"],Pa),e.variable(t("para_13")).define("para_13",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],Fa),e.variable(t("treemap_4")).define("treemap_4",["plot_treemap","splink_settings"],Ca),e.variable(t("para_14")).define("para_14",["md","texd","get_m_u_formula_numbers","get_row","splink_settings"],La),e.variable(t("subhead_5")).define("subhead_5",["md"],Ba),e.variable(t("town_view")).define("town_view",["viewof town_val"],Ia),e.variable(t("para_15")).define("para_15",["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],Ma),e.variable(t("treemap_5")).define("treemap_5",["plot_treemap","splink_settings"],za),e.variable(t("para_16")).define("para_16",["md","texd","tex","get_m_u_formula_numbers","get_row","splink_settings"],Oa),e.variable(t("annex")).define("annex",["md","tex","texd"],Wa),e.variable(t("texd")).define("texd",["tex"],Ga),e.variable(t("css_styles")).define("css_styles",["html","color_match","color_non_match"],Da);const n=a.module(k);e.import("default_settings",n),e.variable(t("get_row")).define("get_row",["splink_settings"],Ha),e.variable(t("get_row_no_gammas")).define("get_row_no_gammas",["get_row"],Ja);const i=a.module(Ne);e.import("get_m_u_formula_symbols",i),e.import("get_m_u_formula_numbers",i),e.import("get_comparison_vector_symbols_and_numbers",i),e.import("get_match_probability_components",i),e.variable(t("dict_as_md_table_row")).define("dict_as_md_table_row",["md"],Ra);const r=a.module(k);e.import("styles",r),e.import("plot_treemap",r),e.import("color_match",r),e.import("color_non_match",r),e.variable(t("additional_styles")).define("additional_styles",["styles"],Ua),e.variable(t("nm")).define("nm",["html"],Va),e.variable(t("m")).define("m",["html"],Na);const o=a.module(ra);return e.import("splink_settings",o),e.import("viewof lam",o),e.import("lam",o),e.import("viewof fname_val",o),e.import("fname_val",o),e.import("viewof sname_val",o),e.import("sname_val",o),e.import("viewof dob_val",o),e.import("dob_val",o),e.import("viewof town_val",o),e.import("town_val",o),e.import("form_styles",o),e.variable(t("styles2")).define("styles2",["form_styles"],Ka),e.variable(t("get_m_u_text")).define("get_m_u_text",["m","nm","md"],Ya),e.variable(t("choice_text")).define("choice_text",["md","tex"],Xa),e.variable(t("inputs")).define("inputs",["require"],Za),e}export{Qa as default};
