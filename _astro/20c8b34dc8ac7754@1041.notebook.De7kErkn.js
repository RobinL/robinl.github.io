import{_ as p}from"./preload-helper.zoZ8CRZ9.js";function c(a){let e,t,o,i=!1;const u=a(s=>{o=s,e?(e(s),e=t=void 0):i=!0});return{async next(){return{done:!1,value:await(i?(i=!1,o):new Promise((s,n)=>(e=s,t=n)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,u?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function _(a){let e;return Object.defineProperty(c(t=>{e=t,a!==void 0&&t(a)}),"value",{get:()=>a,set:t=>(a=t,e?.(a))})}function b(a){const e=_(a);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function m(a,e=()=>null){const t=a.module();m.FileAttachment&&t.variable().define("FileAttachment",[],()=>m.FileAttachment);for(const o of m.cells){const i=o.inputs??[],u=o.output;if(o.outputs?.length){const s=`cell ${o.id}`;t.variable(e(null)).define(s,i,o.body);for(const n of o.outputs)t.variable(!0).define(n,[s],l=>l[n])}else if(u)if(o.autoview){const s=u.slice(7),n=`viewof ${s}`;t.variable(e(n)).define(n,i,o.body),t.variable(e(s)).define(s,["Generators",n],(l,r)=>l.input(r))}else if(o.automutable){const s=u.slice(8),n=`cell ${o.id}`;t.define(u,i,o.body),t.define(n,[u],b),t.variable(e(s)).define(s,[n],([l])=>l),t.variable(!0).define(`mutable$${s}`,[n],([,l])=>l)}else t.variable(e(u)).define(u,i,o.body);else t.variable(e(null)).define(i,o.body)}return t}Object.assign(m,{title:"@robinl/unsupervised-probabalistic-data-matching-using-the-expec: 20c8b34dc8ac7754@1041.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async a=>{const{slider:e,textarea:t}=await p(()=>import("./146f352f1166f0d1@2202.notebook.DVp32B6A.js"),[]).then(o=>{const i=a._module._runtime.module(o.default),u=new Map(Array.from(a._outputs,s=>[s._name,s]));return u.get("slider")?.import("slider",i),u.get("textarea")?.import("textarea",i),{}});return{slider:e,textarea:t}},inputs:["@variable"],outputs:["slider","textarea"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"js",body:async a=>{const{vl:e}=await p(()=>import("./7764a40fe6b83ca1@437.notebook.Cbi1nUN_.js"),[]).then(t=>{const o=a._module._runtime.module(t.default);return new Map(Array.from(a._outputs,u=>[u._name,u])).get("vl")?.import("vl",o),{}});return{vl:e}},inputs:["@variable"],outputs:["vl"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:3,mode:"ojs",body:function(e){return e`# Unsupervised probabalistic data matching using the Expectation Maximisation algorithm`},inputs:["md"],outputs:void 0,output:"title",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(e){return e`This notebook is an interactive implementation of the Fellegi-Sunter model of record linkage, with record linkage probabilities estimated using the Expectation Maximisation (EM) algorithm.  

This is an unsupervised approach to finding matching records, which seems like magic to me - so hopefully this notebook helps demystify how this is possible.
`},inputs:["md"],outputs:void 0,output:"out_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(e){return e`## Input data

Consider two tables, which we are trying to match to one another.   \`mob\` stands for month of birth.
**Note**: You can edit this data so long as you keep the column names the same.

`},inputs:["md"],outputs:void 0,output:"out_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e){return e`**Left table:**`},inputs:["md"],outputs:void 0,output:"out_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e,t){return e({value:t,rows:6,width:"100%"})},inputs:["textarea","data_left_template"],outputs:void 0,output:"viewof$left_table_csv",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,o){return e`${t(o)}`},inputs:["md","table","data_left"],outputs:void 0,output:"out_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e){return e`**Right table:**`},inputs:["md"],outputs:void 0,output:"out_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t){return e({value:t,rows:6,width:"100%"})},inputs:["textarea","data_right_template"],outputs:void 0,output:"viewof$right_table_csv",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t,o){return e`

${t(o)}


`},inputs:["md","table","data_right"],outputs:void 0,output:"out_6",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e){return e`**Real matches**

These are the records which match in reality. You only need to include records which match, i.e. where label = 1.  These are the unknowns the model is trying to estimate 
`},inputs:["md"],outputs:void 0,output:"out_7",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e,t){return e({value:t,rows:6,width:"100%"})},inputs:["textarea","match_pairs_template"],outputs:void 0,output:"viewof$match_pairs_csv",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e,t,o,i,u){return e`${t`<br>`}

${o(i)}



Finally, here are all the possible record comparisons:

${o(u)}`},inputs:["md","html","table","match_pairs","combinations"],outputs:void 0,output:"out_8",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t,o,i){return e`To set this up as a maximum likelihood estimation problem, we need to make some assumptions about the structure of the problem, and choose some parameters to estimate.

First, we will designate λ the proportion of comparisons which are matches.  This is an unknown parameter to be estimated.  In the case of this data, the true λ is ${t(o)}.

Next, we will create the concept of a _comparison vector_, which is a way of encoding record comparisons into a vector.  

In this simple example our comparison vector, ${i`\gamma`} will be of length ${i`k=2`} , i.e. ${i`\gamma = [\gamma_1, \gamma_2]`} and will encode the following two rules:

- If \`mob\` matches,  ${i`\gamma_1 = 1`} else ${i`\gamma_1 = 0`}
- If \`surname\` matches exactly  ${i`\gamma_2 = 1`}. If it is similar ${i`\gamma_2 = 0.5`}.  Otherwise ${i`\gamma_2 = 0`}


We will then assume that element ${i`i`} of the comparison vector is a draw from one of two discrete distributions:

${i`\pi_{i,m=1}`}, the discrete distribution of ${i`\gamma_i`} when the records match

and 


${i`\pi_{i,m=0}`}, the discrete distribution of ${i`\gamma_i`} when the records do not match

`},inputs:["md","num_fmt","true_lambda","tex"],outputs:void 0,output:"out_9",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e,t,o){return e` Here are the comparison vectors for this data:

${t(o)}

Each row represents the comparison vector, which has two elements [𝛾1, 𝛾2].  

`},inputs:["md","table","comparison_vectors"],outputs:void 0,output:"out_10",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e,t){return e`These assumptions are all we need to define the equation for the likelihood.  The equation looks quite complicated (see page 356 [here](https://imai.fas.harvard.edu/research/files/linkage.pdf)):

${t`\prod_{i=1}^{N_{\mathcal{A}}} \prod_{j=1}^{N_{\mathcal{B}}}\left\{\sum_{m=0}^{1} \lambda^{m}(1-\lambda)^{1-m} \prod_{k=1}^{K}\left(\prod_{\ell=0}^{L_{k}-1} \pi_{k m \ell}^{1\left\{\gamma_{k}(i, j)=\ell\right\}}\right)^{1-\delta_{k}(i, j)}\right\}`}

But expressed in words it's quite simple - approximately:

- For each element of the comparison vector, the probability of the observed outcome is ${t`\lambda (\pi_{i,m=1}|\gamma_i)  + (1-\lambda) (\pi_{i,m=0}|\gamma_i)`}
- Compute this probability for each of the ${t`k`} elements of the comparison vector in the row, and multiply together.  This represents the likelihood of the row
- Compute this for each row, and multiply together

`},inputs:["md","tex"],outputs:void 0,output:"out_11",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e,t){return e`To estimate which record comparisons are matches, we need to estimate the unknown parameters, which are ${t`\lambda`} and the parameters of the four discrete distributions ${t`\pi_{i,m}`}.

There's an algorithm called the Expectation Maximisation algorithm which can solve this problem iteratively.

In this notebook, rather than implement this algorithm, we will simply let you choose the parameters to try and maximise the log likelihood manually.  

## Estimating matches`},inputs:["md","tex"],outputs:void 0,output:"out_12",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e){return e({title:"Choose λ, the proportion of combinations which are matches",min:0,max:1,step:.01,value:.5})},inputs:["slider"],outputs:void 0,output:"viewof$lambda",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e){return e({title:"Month of birth comparison, probability month of birth matches given m=1",min:0,max:1,step:.01,value:.5})},inputs:["slider"],outputs:void 0,output:"viewof$pi1_1_m1",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e){return e({title:"Month of birth comparison, probability month of birth matches given records DO NOT match",min:0,max:1,step:.01,value:.5})},inputs:["slider"],outputs:void 0,output:"viewof$pi1_1_m0",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e){return e({title:"Surname comparison, probability field exactly matches given records match",min:0,max:1,step:.01,value:.3})},inputs:["slider"],outputs:void 0,output:"viewof$pi2_1_m1",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){return e({title:"Surname comparison, probability fields similar given records match",min:0,max:1,step:.01,value:.3})},inputs:["slider"],outputs:void 0,output:"viewof$pi2_05_m1",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e){return e({title:"Surname comparison, probability field exactly matches given records DO NOT match",min:0,max:1,step:.01,value:.3})},inputs:["slider"],outputs:void 0,output:"viewof$pi2_1_m0",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e){return e({title:"Surname comparison, probability fields similar given records DO NOT match",min:0,max:1,step:.01,value:.3})},inputs:["slider"],outputs:void 0,output:"viewof$pi2_05_m0",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e,t,o){return e`The log likelihood given these parameters is ${t(o)}`},inputs:["md","num_fmt","log_likelihood"],outputs:void 0,output:"out_13",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(e){return e`Here's a history of the values of log likelihood as you've been adjusting the sliders:`},inputs:["md"],outputs:void 0,output:"out_14",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(e,t,o){let i=t.map((u,s)=>({log_likelihood:u.log_likelihood,i:s}));return i=i.filter(u=>u.log_likelihood>-1e6),o.markLine().data(i).encode(o.y().field("log_likelihood").type("quantitative").scale({zero:!1}),o.x().field("i").type("quantitative")).height(200).render()},inputs:["log_likelihood","history_ll","vl"],outputs:void 0,output:"ll_chart",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:29,mode:"ojs",body:function(e,t){return e`This chart shows ${t`\pi_{1,m=0}`} and ${t`\pi_{1,m=1}`}, the discrete distributions that you've chosen for ${t`\gamma_1`}, the \`mob\` comparison vector.`},inputs:["md","tex"],outputs:void 0,output:"out_15",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:30,mode:"ojs",body:function(e,t,o){let i=[{"𝛾_val":"1",probability:e,m:1,rule:"mob"},{"𝛾_val":"0",probability:1-e,m:1,rule:"mob"},{"𝛾_val":"1",probability:t,m:0,rule:"mob"},{"𝛾_val":"0",probability:1-t,m:0,rule:"mob"}];return o.markBar().data(i).encode(o.y().field("𝛾_val").type("nominal"),o.x().field("probability").type("quantitative"),o.column().fieldN("m").title(null),o.color().fieldN("m")).height(30).width(100).render()},inputs:["pi1_1_m1","pi1_1_m0","vl"],outputs:void 0,output:"pi_chart_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:31,mode:"ojs",body:function(e,t){return e`This chart shows ${t`\pi_{2,m=0}`} and ${t`\pi_{2,m=1}`}, the discrete distributions you've chosen for ${t`\gamma_2`}, the \`surname\` comparison vector.`},inputs:["md","tex"],outputs:void 0,output:"out_16",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:32,mode:"ojs",body:function(e,t,o,i,u){let s=[{"𝛾_val":"1",probability:e,m:1,rule:"surname"},{"𝛾_val":"0.5",probability:t,m:1,rule:"surname"},{"𝛾_val":"0",probability:1-e-t,m:1,rule:"surname"},{"𝛾_val":"1",probability:o,m:0,rule:"surname"},{"𝛾_val":"0.5",probability:i,m:0,rule:"surname"},{"𝛾_val":"0",probability:1-o-i,m:0,rule:"surname"}];return u.markBar().data(s).encode(u.y().field("𝛾_val").type("nominal"),u.x().field("probability").type("quantitative"),u.column().fieldN("m").title(null),u.color().fieldN("m")).height(30).width(100).render()},inputs:["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0","vl"],outputs:void 0,output:"pi_chart_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:33,mode:"ojs",body:function(e,t,o){return e`Given the parameter values you've selected, we can now compute the probability that we have a match for each record comparison, ${t`P(m)`}.

We can write the probabilities of observing ${t`\gamma_i`} given our parameters, and whether the record is a match:

${t`p1 = \lambda P(\gamma_1|\pi_{1,m=1})`}

${o`<br>`}

${t`p2 = \lambda P(\gamma_2|\pi_{2,m=1}) `}

${o`<br>`}

${t`n1 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}

${o`<br>`}

${t`n2 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}


The probability of a given record being a match is then:

${t`\frac{p1 p2}{p1 p2 + n1 n2} = \frac{1}{1 + \frac{n1 n2}{p1 p2}}`}.
`},inputs:["md","tex","html"],outputs:void 0,output:"out_17",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:34,mode:"ojs",body:function(e,t,o,i,u,s){let n=e.map(function(l){let r=t(l);return l=o(l),l["𝛾1"]=r["𝛾1"],l["𝛾2"]=r["𝛾2"],l.prob_match=i(u(l)),l});return n.columns=Object.keys(n[0]),s(n)},inputs:["combinations","get_comparison_vector","deepcopy","num_fmt","get_estimated_match_probability","table"],outputs:void 0,output:"out_18",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:35,mode:"ojs",body:function(e){return e`## Annex: Code

This is the code I used to compute the log likelihood:

\`\`\`javascript
{
 function log_probability_of_element_of_gamma(elem, pi) {
    let prob =  lambda * pi["1"][elem] + (1-lambda) * pi["0"][elem]
    return Math.log(prob)
  }
  
  function log_probability_of_comparison(comparison_vector) {
    let elem = comparison_vector["𝛾1"]
    let ln_prob_1 = log_probability_of_element_of_gamma(elem, pi_mob)
    
    elem = comparison_vector["𝛾2"]
    let ln_prob_2 = log_probability_of_element_of_gamma(elem, pi_surname)
    
    return ln_prob_1 + ln_prob_2
  }
  
  let log_probs_of_rows = comparison_vectors.map(cv => log_probability_of_comparison(cv))
  
  return log_probs_of_rows.reduce((a,b) => a + b)
}
\`\`\`

and the code to compute the probability of a match:


\`\`\`javascript 
get_estimated_match_probability = function(comparison_vector) {
  let gamma1 = comparison_vector["𝛾1"]
  let gamma2 = comparison_vector["𝛾2"]
  
  let prob_match_1 = lambda * pi_mob["1"][gamma1]
  let prob_no_match_1 = (1-lambda) * pi_mob["0"][gamma1]
  let sum_1 = prob_match_1 + prob_no_match_1

  
  let prob_match_2 = lambda * pi_surname["1"][gamma1] 
  let prob_no_match_2 = (1-lambda) * pi_surname["0"][gamma1]
  let sum_2 = prob_match_2 + prob_no_match_2
  
  // Is the following calculation correct?
  let lr = (prob_match_1 * prob_match_2) / (prob_match_1*prob_match_2 + prob_no_match_1*prob_no_match_2)  
  
  return lr
 
}
\`\`\`

`},inputs:["md"],outputs:void 0,output:"out_19",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:36,mode:"ojs",body:function(){return`row_id_l,mob_l,surname_l
1,10,Linacre
2,7,Smith
`},inputs:[],outputs:void 0,output:"data_left_template",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:37,mode:"ojs",body:function(){return`row_id_r,mob_r,surname_r
1,10,Linacer
2,8,Jones
3,7,Smith
`},inputs:[],outputs:void 0,output:"data_right_template",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:38,mode:"ojs",body:function(e,t,o){return e.value=[],t.csvParse(o)},inputs:["mutable$history_ll","d3","left_table_csv"],outputs:void 0,output:"data_left",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:39,mode:"ojs",body:function(e,t,o){return e.value=[],t.csvParse(o)},inputs:["mutable$history_ll","d3","right_table_csv"],outputs:void 0,output:"data_right",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:40,mode:"ojs",body:function(){return`row_id_l,row_id_r,label
1,1,1
2,3,1
`},inputs:[],outputs:void 0,output:"match_pairs_template",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:41,mode:"ojs",body:function(e,t,o){return e.value=[],t.csvParse(o)},inputs:["mutable$history_ll","d3","match_pairs_csv"],outputs:void 0,output:"matches",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:42,mode:"ojs",body:function(e,t,o){t("DROP TABLE if exists combinations");let i=t(`select * from df_l
  cross join df_r
  left join matches as m
  on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
  `);return i=i.map(function(u){return u.label||(u.label="0"),u}),t("CREATE TABLE combinations"),t.tables.combinations.data=i,o(`
  select * from combinations

`)},inputs:["db","alasql","sql_with_cols"],outputs:void 0,output:"combinations",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:43,mode:"ojs",body:function(a){return a`### Annex 2:  Computation of comparison vectors`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:44,mode:"ojs",body:function(e,t){return(function(i){return{"𝛾1":e(i),"𝛾2":t(i)}})},inputs:["month_of_birth","surname"],outputs:void 0,output:"get_comparison_vector",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:45,mode:"ojs",body:function(){return(function(t){return+(t.mob_l==t.mob_r)})},inputs:[],outputs:void 0,output:"month_of_birth",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:46,mode:"ojs",body:function(e){return(function(o){return o.surname_l==o.surname_r?1:e.get(o.surname_l,o.surname_r)<3?.5:0})},inputs:["levenshtein"],outputs:void 0,output:"surname",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:47,mode:"ojs",body:function(e,t){let o=e.map(i=>t(i));return o.columns=Object.keys(o[0]),o},inputs:["combinations","get_comparison_vector"],outputs:void 0,output:"comparison_vectors",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:48,mode:"ojs",body:function(e,t){return t(`

select df_l.row_id_l, df_r.row_id_r 
from df_l
  cross join df_r
  left join matches as m
on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
where m.label = '1'

`)},inputs:["db","sql_with_cols"],outputs:void 0,output:"match_pairs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:49,mode:"ojs",body:function(e){return e.filter(t=>t.match==1).map(t=>(delete t.match,t))},inputs:["matches"],outputs:void 0,output:"real_matches",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:50,mode:"ojs",body:function(a){return a`### Annex 3:  Likelihood and probability calculations`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:51,mode:"ojs",body:function(e,t){let o=t(`
 select count(*) as count_match
from combinations
 where label = '1' 
`),i=t(`
select count(*) from combinations
`);return o/i},inputs:["combinations","sql_return_scalar"],outputs:void 0,output:"true_lambda",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:52,mode:"ojs",body:function(e,t,o,i){let u={1:e,"0.5":t,0:1-e-t},s={1:o,"0.5":i,0:1-o-i};return{1:u,0:s}},inputs:["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0"],outputs:void 0,output:"pi_surname",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:53,mode:"ojs",body:function(e,t){let o={1:e,0:1-e},i={1:t,0:1-t};return{1:o,0:i}},inputs:["pi1_1_m1","pi1_1_m0"],outputs:void 0,output:"pi_mob",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:54,mode:"ojs",body:function(e,t,o){return(function(i){let u=i["𝛾1"];i["𝛾2"];let s=e*t[1][u],n=(1-e)*t[0][u],l=e*o[1][u],r=(1-e)*o[0][u];return s*l/(s*l+n*r)})},inputs:["lambda","pi_mob","pi_surname"],outputs:void 0,output:"get_estimated_match_probability",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:55,mode:"ojs",body:function(e,t,o,i){function u(l,r){let d=e*r[1][l]+(1-e)*r[0][l];return Math.log(d)}function s(l){let r=l["𝛾1"],d=u(r,t);r=l["𝛾2"];let f=u(r,o);return d+f}return i.map(l=>s(l)).reduce((l,r)=>l+r)},inputs:["lambda","pi_mob","pi_surname","comparison_vectors"],outputs:void 0,output:"log_likelihood",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:56,mode:"ojs",body:function(a){return a`### Annex 4: Other functions`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:57,mode:"ojs",body:function(){return[]},inputs:[],outputs:void 0,output:"mutable history_ll",display:!1,autodisplay:!0,autoview:!1,automutable:!0,files:[]},{id:58,mode:"ojs",body:function(a,e){a.push({log_likelihood:e})},inputs:["history_ll","log_likelihood"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:59,mode:"ojs",body:function(e,t,o,i){let u=e("DROP TABLE if exists df_l");return e("CREATE TABLE df_l"),e("DROP TABLE if exists df_r"),e("CREATE TABLE df_r"),e("DROP TABLE if exists matches"),e("CREATE TABLE matches"),e.tables.df_l.data=t,e.tables.df_r.data=o,e.tables.matches.data=i,u},inputs:["alasql","data_left","data_right","matches"],outputs:void 0,output:"db",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:60,mode:"ojs",body:function(a){return a`### Generic utility libraries and functions`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:61,mode:"ojs",body:function(e){return(function(t){let o=e(t);return o.columns=Object.keys(o[0]),o})},inputs:["alasql"],outputs:void 0,output:"sql_with_cols",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:62,mode:"ojs",body:function(e){return(function(o){return e`
<table>
<thead>
<tr>
${o.columns.map(i=>e`<th>${i}`)}
<tbody>
${o.map(i=>e`<tr>
  ${Object.keys(i).map(u=>e`<td>${i[u]}`)}
`)}
`})},inputs:["html"],outputs:void 0,output:"table",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:63,mode:"ojs",body:function(e){return e("alasql")},inputs:["require"],outputs:void 0,output:"alasql",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:64,mode:"ojs",body:function(e){return(function(t){let o=e(t);return o=o[0],o[Object.keys(o)[0]]})},inputs:["alasql"],outputs:void 0,output:"sql_return_scalar",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:65,mode:"ojs",body:function(e){return e("d3")},inputs:["require"],outputs:void 0,output:"d3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:66,mode:"ojs",body:function(e){return e.format(",.3f")},inputs:["d3"],outputs:void 0,output:"num_fmt",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:67,mode:"ojs",body:function(e){return e("fast-levenshtein@2.0.6")},inputs:["require"],outputs:void 0,output:"levenshtein",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:68,mode:"ojs",body:function(e){return e("@observablehq/vega-lite@0.2")},inputs:["require"],outputs:void 0,output:"vegalite",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:69,mode:"ojs",body:function(){return(function(e){return JSON.parse(JSON.stringify(e))})},inputs:[],outputs:void 0,output:"deepcopy",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{m as default};
