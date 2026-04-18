// https://observablehq.com/@robinl/unsupervised-probabalistic-data-matching-using-the-expec@1041
import define1 from "./146f352f1166f0d1@2202.js";
import define2 from "./7764a40fe6b83ca1@437.js";

function _title(md){return(
md`# Unsupervised probabalistic data matching using the Expectation Maximisation algorithm`
)}

function _out_1(md){return(
md`This notebook is an interactive implementation of the Fellegi-Sunter model of record linkage, with record linkage probabilities estimated using the Expectation Maximisation (EM) algorithm.  

This is an unsupervised approach to finding matching records, which seems like magic to me - so hopefully this notebook helps demystify how this is possible.
`
)}

function _out_2(md){return(
md`## Input data

Consider two tables, which we are trying to match to one another.   \`mob\` stands for month of birth.
**Note**: You can edit this data so long as you keep the column names the same.

`
)}

function _out_3(md){return(
md`**Left table:**`
)}

function _left_table_csv(textarea,data_left_template){return(
textarea({"value":data_left_template, "rows": 6, width: "100%"})
)}

function _out_4(md,table,data_left){return(
md`${table(data_left)}`
)}

function _out_5(md){return(
md`**Right table:**`
)}

function _right_table_csv(textarea,data_right_template){return(
textarea({"value":data_right_template, "rows": 6, width: "100%"})
)}

function _out_6(md,table,data_right){return(
md`

${table(data_right)}


`
)}

function _out_7(md){return(
md`**Real matches**

These are the records which match in reality. You only need to include records which match, i.e. where label = 1.  These are the unknowns the model is trying to estimate 
`
)}

function _match_pairs_csv(textarea,match_pairs_template){return(
textarea({"value":match_pairs_template, "rows": 6, width: "100%"})
)}

function _out_8(md,html,table,match_pairs,combinations){return(
md`${html`<br>`}

${table(match_pairs)}



Finally, here are all the possible record comparisons:

${table(combinations)}`
)}

function _out_9(md,num_fmt,true_lambda,tex){return(
md`To set this up as a maximum likelihood estimation problem, we need to make some assumptions about the structure of the problem, and choose some parameters to estimate.

First, we will designate λ the proportion of comparisons which are matches.  This is an unknown parameter to be estimated.  In the case of this data, the true λ is ${num_fmt(true_lambda)}.

Next, we will create the concept of a _comparison vector_, which is a way of encoding record comparisons into a vector.  

In this simple example our comparison vector, ${tex`\gamma`} will be of length ${tex`k=2`} , i.e. ${tex`\gamma = [\gamma_1, \gamma_2]`} and will encode the following two rules:

- If \`mob\` matches,  ${tex`\gamma_1 = 1`} else ${tex`\gamma_1 = 0`}
- If \`surname\` matches exactly  ${tex`\gamma_2 = 1`}. If it is similar ${tex`\gamma_2 = 0.5`}.  Otherwise ${tex`\gamma_2 = 0`}


We will then assume that element ${tex`i`} of the comparison vector is a draw from one of two discrete distributions:

${tex`\pi_{i,m=1}`}, the discrete distribution of ${tex`\gamma_i`} when the records match

and 


${tex`\pi_{i,m=0}`}, the discrete distribution of ${tex`\gamma_i`} when the records do not match

`
)}

function _out_10(md,table,comparison_vectors){return(
md` Here are the comparison vectors for this data:

${table(comparison_vectors)}

Each row represents the comparison vector, which has two elements [𝛾1, 𝛾2].  

`
)}

function _out_11(md,tex){return(
md`These assumptions are all we need to define the equation for the likelihood.  The equation looks quite complicated (see page 356 [here](https://imai.fas.harvard.edu/research/files/linkage.pdf)):

${tex`\prod_{i=1}^{N_{\mathcal{A}}} \prod_{j=1}^{N_{\mathcal{B}}}\left\{\sum_{m=0}^{1} \lambda^{m}(1-\lambda)^{1-m} \prod_{k=1}^{K}\left(\prod_{\ell=0}^{L_{k}-1} \pi_{k m \ell}^{1\left\{\gamma_{k}(i, j)=\ell\right\}}\right)^{1-\delta_{k}(i, j)}\right\}`}

But expressed in words it's quite simple - approximately:

- For each element of the comparison vector, the probability of the observed outcome is ${tex`\lambda (\pi_{i,m=1}|\gamma_i)  + (1-\lambda) (\pi_{i,m=0}|\gamma_i)`}
- Compute this probability for each of the ${tex`k`} elements of the comparison vector in the row, and multiply together.  This represents the likelihood of the row
- Compute this for each row, and multiply together

`
)}

function _out_12(md,tex){return(
md`To estimate which record comparisons are matches, we need to estimate the unknown parameters, which are ${tex`\lambda`} and the parameters of the four discrete distributions ${tex`\pi_{i,m}`}.

There's an algorithm called the Expectation Maximisation algorithm which can solve this problem iteratively.

In this notebook, rather than implement this algorithm, we will simply let you choose the parameters to try and maximise the log likelihood manually.  

## Estimating matches`
)}

function _lambda(slider){return(
slider({
  title: "Choose λ, the proportion of combinations which are matches",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.5
})
)}

function _pi1_1_m1(slider){return(
slider({
  title: "Month of birth comparison, probability month of birth matches given m=1",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.5
})
)}

function _pi1_1_m0(slider){return(
slider({
  title: "Month of birth comparison, probability month of birth matches given records DO NOT match",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.5
})
)}

function _pi2_1_m1(slider){return(
slider({
  title: "Surname comparison, probability field exactly matches given records match",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.3
})
)}

function _pi2_05_m1(slider){return(
slider({
  title: "Surname comparison, probability fields similar given records match",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.3
})
)}

function _pi2_1_m0(slider){return(
slider({
  title: "Surname comparison, probability field exactly matches given records DO NOT match",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.3
})
)}

function _pi2_05_m0(slider){return(
slider({
  title: "Surname comparison, probability fields similar given records DO NOT match",
  min: 0,
  max: 1,
  step: 0.01,
  value: 0.3
})
)}

function _out_13(md,num_fmt,log_likelihood){return(
md`The log likelihood given these parameters is ${num_fmt(log_likelihood)}`
)}

function _out_14(md){return(
md`Here's a history of the values of log likelihood as you've been adjusting the sliders:`
)}

function _ll_chart(log_likelihood,history_ll,vl)
{
  let a = log_likelihood
  let data = history_ll.map((d,i)=> { return {"log_likelihood":d["log_likelihood"], "i":i}} )
   data = data.filter(d => d["log_likelihood"] > -1000000)

  
 return vl.markLine()
  .data(data)
  .encode(
    vl.y().field('log_likelihood').type('quantitative').scale({"zero":false}),
    vl.x().field('i').type('quantitative'),


  )
  .height(200)

  .render()  
  
}


function _out_15(md,tex){return(
md`This chart shows ${tex`\pi_{1,m=0}`} and ${tex`\pi_{1,m=1}`}, the discrete distributions that you've chosen for ${tex`\gamma_1`}, the \`mob\` comparison vector.`
)}

function _pi_chart_1(pi1_1_m1,pi1_1_m0,vl)
{
 
  let data = [
           {"𝛾_val":"1", "probability": pi1_1_m1, "m":1, "rule": "mob"},
           {"𝛾_val":"0", "probability": 1-pi1_1_m1, "m":1, "rule": "mob"},
           {"𝛾_val":"1", "probability": pi1_1_m0, "m":0, "rule": "mob"},
           {"𝛾_val":"0", "probability": 1-pi1_1_m0, "m":0, "rule": "mob"}
          ]
  
    return vl.markBar()
  .data(data)
  .encode(
    vl.y().field('𝛾_val').type('nominal'),
    vl.x().field('probability').type('quantitative'),
    vl.column().fieldN('m').title(null),
    vl.color().fieldN('m')
  )
  .height(30)
  .width(100)
  .render()
  

  
}


function _out_16(md,tex){return(
md`This chart shows ${tex`\pi_{2,m=0}`} and ${tex`\pi_{2,m=1}`}, the discrete distributions you've chosen for ${tex`\gamma_2`}, the \`surname\` comparison vector.`
)}

function _pi_chart_2(pi2_1_m1,pi2_05_m1,pi2_1_m0,pi2_05_m0,vl)
{
 
  let data = [{"𝛾_val":"1", "probability": pi2_1_m1, "m":1, "rule": "surname"},
           {"𝛾_val":"0.5", "probability": pi2_05_m1, "m":1, "rule": "surname"},
           {"𝛾_val":"0", "probability": 1-pi2_1_m1-pi2_05_m1, "m":1, "rule": "surname"},
           {"𝛾_val":"1", "probability": pi2_1_m0, "m":0, "rule": "surname"},
           {"𝛾_val":"0.5", "probability": pi2_05_m0, "m":0, "rule": "surname"},
           {"𝛾_val":"0", "probability": 1-pi2_1_m0-pi2_05_m0, "m":0, "rule": "surname"}
          ]
  
  return vl.markBar()
  .data(data)
  .encode(
    vl.y().field('𝛾_val').type('nominal'),
    vl.x().field('probability').type('quantitative'),
    vl.column().fieldN('m').title(null),
    vl.color().fieldN('m')
  )
  .height(30)
  .width(100)
  .render()
  
  

  
}


function _out_17(md,tex,html){return(
md`Given the parameter values you've selected, we can now compute the probability that we have a match for each record comparison, ${tex`P(m)`}.

We can write the probabilities of observing ${tex`\gamma_i`} given our parameters, and whether the record is a match:

${tex`p1 = \lambda P(\gamma_1|\pi_{1,m=1})`}

${html`<br>`}

${tex`p2 = \lambda P(\gamma_2|\pi_{2,m=1}) `}

${html`<br>`}

${tex`n1 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}

${html`<br>`}

${tex`n2 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}


The probability of a given record being a match is then:

${tex`\frac{p1 p2}{p1 p2 + n1 n2} = \frac{1}{1 + \frac{n1 n2}{p1 p2}}`}.
`
)}

function _out_18(combinations,get_comparison_vector,deepcopy,num_fmt,get_estimated_match_probability,table)
{
  
  let c = combinations.map(function(d) {
     let cv = get_comparison_vector(d)
     d = deepcopy(d)
     d["𝛾1"] = cv["𝛾1"]
     d["𝛾2"] = cv["𝛾2"]
     d["prob_match"] = num_fmt(get_estimated_match_probability(d))
     return d
  })
  
  c.columns = Object.keys(c[0])
  
  return table(c)
  
}


function _out_19(md){return(
md`## Annex: Code

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

`
)}

function _data_left_template(){return(
`row_id_l,mob_l,surname_l
1,10,Linacre
2,7,Smith
`
)}

function _data_right_template(){return(
`row_id_r,mob_r,surname_r
1,10,Linacer
2,8,Jones
3,7,Smith
`
)}

function _data_left($0,d3,left_table_csv)
{
  $0.value = []
  return d3.csvParse(left_table_csv)
}


function _data_right($0,d3,right_table_csv)
{
  $0.value = []
  return d3.csvParse(right_table_csv)
}


function _match_pairs_template(){return(
`row_id_l,row_id_r,label
1,1,1
2,3,1
`
)}

function _matches($0,d3,match_pairs_csv)
{

  $0.value = []
  
  return d3.csvParse(match_pairs_csv)
  
}


function _combinations(db,alasql,sql_with_cols)
{
  let a = db;
  
  alasql("DROP TABLE if exists combinations");
  
  let combinations_data = alasql(`select * from df_l
  cross join df_r
  left join matches as m
  on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
  `);
  
  // Set label = 0 if left join returned null
  combinations_data = combinations_data.map(function(d) {
    if (!(d["label"])) {
      d["label"] = "0"
    }
  
    
    return d
  })
  
  alasql("CREATE TABLE combinations");
  alasql.tables.combinations.data = combinations_data
  
  
  return sql_with_cols(`
  select * from combinations

`)
}


function _41(md){return(
md`### Annex 2:  Computation of comparison vectors`
)}

function _get_comparison_vector(month_of_birth,surname){return(
function get_comparison_vector(row) {

  return {"𝛾1": month_of_birth(row), "𝛾2": surname(row)}
  
}
)}

function _month_of_birth(){return(
function month_of_birth(row) {
  return +(row.mob_l == row.mob_r)
}
)}

function _surname(levenshtein){return(
function surname(row) {
 if (row.surname_l == row.surname_r) {return 1}
 if (levenshtein.get(row.surname_l, row.surname_r) < 3) {return 0.5}
 return 0
}
)}

function _comparison_vectors(combinations,get_comparison_vector)
{
  let cvs = combinations.map(row => get_comparison_vector(row))
  cvs.columns = Object.keys(cvs[0])
  return cvs
}


function _match_pairs(db,sql_with_cols)
{
  let a = db;
  return sql_with_cols(`

select df_l.row_id_l, df_r.row_id_r 
from df_l
  cross join df_r
  left join matches as m
on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
where m.label = '1'

`)
}


function _real_matches(matches){return(
matches.filter(d =>
  d.match == 1
).map(d => {delete d.match; return d})
)}

function _48(md){return(
md`### Annex 3:  Likelihood and probability calculations`
)}

function _true_lambda(combinations,sql_return_scalar)
{
  let c = combinations
  let count_match =  sql_return_scalar(`
 select count(*) as count_match
from combinations
 where label = '1' 
`);
  
  let total_count = sql_return_scalar(`
select count(*) from combinations
`)
  
  return count_match/total_count
}


function _pi_surname(pi2_1_m1,pi2_05_m1,pi2_1_m0,pi2_05_m0)
{
  
  let m1 = {
      "1":pi2_1_m1,
      "0.5":pi2_05_m1,
      "0":1 - pi2_1_m1 - pi2_05_m1
    }
  
  let m0 = {
      "1":pi2_1_m0,
      "0.5":pi2_05_m0,
      "0":1-pi2_1_m0-pi2_05_m0
    }
 
  return {
    "1": m1,
    "0": m0
  }
}


function _pi_mob(pi1_1_m1,pi1_1_m0)
{
  let m1 = {
      "1":pi1_1_m1,
      "0":1 - pi1_1_m1 
    }
  
  let m0 = {
      "1":pi1_1_m0,
      "0":1-pi1_1_m0
    }
 
  return {
    "1": m1,
    "0": m0
  }
}


function _get_estimated_match_probability(lambda,pi_mob,pi_surname){return(
function(comparison_vector) {
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
)}

function _log_likelihood(lambda,pi_mob,pi_surname,comparison_vectors)
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


function _54(md){return(
md`### Annex 4: Other functions`
)}

function _history_ll(){return(
[]
)}

function _56(history_ll,log_likelihood)
{
 history_ll.push({"log_likelihood":log_likelihood}) 
}


function _db(alasql,data_left,data_right,matches)
{
 let db = alasql("DROP TABLE if exists df_l");
 alasql("CREATE TABLE df_l");
  
 alasql("DROP TABLE if exists df_r");
 alasql("CREATE TABLE df_r");
  
 alasql("DROP TABLE if exists matches");
 alasql("CREATE TABLE matches");

  alasql.tables.df_l.data = data_left
  alasql.tables.df_r.data = data_right
  alasql.tables.matches.data = matches
  
  return db
}


function _58(md){return(
md`### Generic utility libraries and functions`
)}

function _sql_with_cols(alasql){return(
function(sql) {
  let tab = alasql(sql)
  tab.columns = Object.keys(tab[0])
  return tab
  
}
)}

function _table(html){return(
function table(data) {
 return html`
<table>
<thead>
<tr>
${data.columns.map(d => html`<th>${d}`)}
<tbody>
${data.map(row => html`<tr>
  ${Object.keys(row).map(key => html`<td>${row[key]}`)}
`)}
`
}
)}

function _alasql(require){return(
require("alasql")
)}

function _sql_return_scalar(alasql){return(
function(sql) {
  let result = alasql(sql) 
  result = result[0]
  return result[Object.keys(result)[0]]
}
)}

function _d3(require){return(
require("d3")
)}

function _num_fmt(d3){return(
d3.format(",.3f")
)}

function _levenshtein(require){return(
require('fast-levenshtein@2.0.6')
)}

function _vegalite(require){return(
require("@observablehq/vega-lite@0.2")
)}

function _deepcopy(){return(
function(d) {
return JSON.parse(JSON.stringify(d) )
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("out_1")).define("out_1", ["md"], _out_1);
  main.variable(observer("out_2")).define("out_2", ["md"], _out_2);
  main.variable(observer("out_3")).define("out_3", ["md"], _out_3);
  main.variable(observer("viewof left_table_csv")).define("viewof left_table_csv", ["textarea","data_left_template"], _left_table_csv);
  main.variable(observer("left_table_csv")).define("left_table_csv", ["Generators", "viewof left_table_csv"], (G, _) => G.input(_));
  main.variable(observer("out_4")).define("out_4", ["md","table","data_left"], _out_4);
  main.variable(observer("out_5")).define("out_5", ["md"], _out_5);
  main.variable(observer("viewof right_table_csv")).define("viewof right_table_csv", ["textarea","data_right_template"], _right_table_csv);
  main.variable(observer("right_table_csv")).define("right_table_csv", ["Generators", "viewof right_table_csv"], (G, _) => G.input(_));
  main.variable(observer("out_6")).define("out_6", ["md","table","data_right"], _out_6);
  main.variable(observer("out_7")).define("out_7", ["md"], _out_7);
  main.variable(observer("viewof match_pairs_csv")).define("viewof match_pairs_csv", ["textarea","match_pairs_template"], _match_pairs_csv);
  main.variable(observer("match_pairs_csv")).define("match_pairs_csv", ["Generators", "viewof match_pairs_csv"], (G, _) => G.input(_));
  main.variable(observer("out_8")).define("out_8", ["md","html","table","match_pairs","combinations"], _out_8);
  main.variable(observer("out_9")).define("out_9", ["md","num_fmt","true_lambda","tex"], _out_9);
  main.variable(observer("out_10")).define("out_10", ["md","table","comparison_vectors"], _out_10);
  main.variable(observer("out_11")).define("out_11", ["md","tex"], _out_11);
  main.variable(observer("out_12")).define("out_12", ["md","tex"], _out_12);
  main.variable(observer("viewof lambda")).define("viewof lambda", ["slider"], _lambda);
  main.variable(observer("lambda")).define("lambda", ["Generators", "viewof lambda"], (G, _) => G.input(_));
  main.variable(observer("viewof pi1_1_m1")).define("viewof pi1_1_m1", ["slider"], _pi1_1_m1);
  main.variable(observer("pi1_1_m1")).define("pi1_1_m1", ["Generators", "viewof pi1_1_m1"], (G, _) => G.input(_));
  main.variable(observer("viewof pi1_1_m0")).define("viewof pi1_1_m0", ["slider"], _pi1_1_m0);
  main.variable(observer("pi1_1_m0")).define("pi1_1_m0", ["Generators", "viewof pi1_1_m0"], (G, _) => G.input(_));
  main.variable(observer("viewof pi2_1_m1")).define("viewof pi2_1_m1", ["slider"], _pi2_1_m1);
  main.variable(observer("pi2_1_m1")).define("pi2_1_m1", ["Generators", "viewof pi2_1_m1"], (G, _) => G.input(_));
  main.variable(observer("viewof pi2_05_m1")).define("viewof pi2_05_m1", ["slider"], _pi2_05_m1);
  main.variable(observer("pi2_05_m1")).define("pi2_05_m1", ["Generators", "viewof pi2_05_m1"], (G, _) => G.input(_));
  main.variable(observer("viewof pi2_1_m0")).define("viewof pi2_1_m0", ["slider"], _pi2_1_m0);
  main.variable(observer("pi2_1_m0")).define("pi2_1_m0", ["Generators", "viewof pi2_1_m0"], (G, _) => G.input(_));
  main.variable(observer("viewof pi2_05_m0")).define("viewof pi2_05_m0", ["slider"], _pi2_05_m0);
  main.variable(observer("pi2_05_m0")).define("pi2_05_m0", ["Generators", "viewof pi2_05_m0"], (G, _) => G.input(_));
  main.variable(observer("out_13")).define("out_13", ["md","num_fmt","log_likelihood"], _out_13);
  main.variable(observer("out_14")).define("out_14", ["md"], _out_14);
  main.variable(observer("ll_chart")).define("ll_chart", ["log_likelihood","history_ll","vl"], _ll_chart);
  main.variable(observer("out_15")).define("out_15", ["md","tex"], _out_15);
  main.variable(observer("pi_chart_1")).define("pi_chart_1", ["pi1_1_m1","pi1_1_m0","vl"], _pi_chart_1);
  main.variable(observer("out_16")).define("out_16", ["md","tex"], _out_16);
  main.variable(observer("pi_chart_2")).define("pi_chart_2", ["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0","vl"], _pi_chart_2);
  main.variable(observer("out_17")).define("out_17", ["md","tex","html"], _out_17);
  main.variable(observer("out_18")).define("out_18", ["combinations","get_comparison_vector","deepcopy","num_fmt","get_estimated_match_probability","table"], _out_18);
  main.variable(observer("out_19")).define("out_19", ["md"], _out_19);
  main.variable(observer("data_left_template")).define("data_left_template", _data_left_template);
  main.variable(observer("data_right_template")).define("data_right_template", _data_right_template);
  main.variable(observer("data_left")).define("data_left", ["mutable history_ll","d3","left_table_csv"], _data_left);
  main.variable(observer("data_right")).define("data_right", ["mutable history_ll","d3","right_table_csv"], _data_right);
  main.variable(observer("match_pairs_template")).define("match_pairs_template", _match_pairs_template);
  main.variable(observer("matches")).define("matches", ["mutable history_ll","d3","match_pairs_csv"], _matches);
  main.variable(observer("combinations")).define("combinations", ["db","alasql","sql_with_cols"], _combinations);
  main.variable(observer()).define(["md"], _41);
  main.variable(observer("get_comparison_vector")).define("get_comparison_vector", ["month_of_birth","surname"], _get_comparison_vector);
  main.variable(observer("month_of_birth")).define("month_of_birth", _month_of_birth);
  main.variable(observer("surname")).define("surname", ["levenshtein"], _surname);
  main.variable(observer("comparison_vectors")).define("comparison_vectors", ["combinations","get_comparison_vector"], _comparison_vectors);
  main.variable(observer("match_pairs")).define("match_pairs", ["db","sql_with_cols"], _match_pairs);
  main.variable(observer("real_matches")).define("real_matches", ["matches"], _real_matches);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer("true_lambda")).define("true_lambda", ["combinations","sql_return_scalar"], _true_lambda);
  main.variable(observer("pi_surname")).define("pi_surname", ["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0"], _pi_surname);
  main.variable(observer("pi_mob")).define("pi_mob", ["pi1_1_m1","pi1_1_m0"], _pi_mob);
  main.variable(observer("get_estimated_match_probability")).define("get_estimated_match_probability", ["lambda","pi_mob","pi_surname"], _get_estimated_match_probability);
  main.variable(observer("log_likelihood")).define("log_likelihood", ["lambda","pi_mob","pi_surname","comparison_vectors"], _log_likelihood);
  main.variable(observer()).define(["md"], _54);
  main.define("initial history_ll", _history_ll);
  main.variable(observer("mutable history_ll")).define("mutable history_ll", ["Mutable", "initial history_ll"], (M, _) => new M(_));
  main.variable(observer("history_ll")).define("history_ll", ["mutable history_ll"], _ => _.generator);
  main.variable(observer()).define(["history_ll","log_likelihood"], _56);
  main.variable(observer("db")).define("db", ["alasql","data_left","data_right","matches"], _db);
  main.variable(observer()).define(["md"], _58);
  main.variable(observer("sql_with_cols")).define("sql_with_cols", ["alasql"], _sql_with_cols);
  main.variable(observer("table")).define("table", ["html"], _table);
  main.variable(observer("alasql")).define("alasql", ["require"], _alasql);
  main.variable(observer("sql_return_scalar")).define("sql_return_scalar", ["alasql"], _sql_return_scalar);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("num_fmt")).define("num_fmt", ["d3"], _num_fmt);
  main.variable(observer("levenshtein")).define("levenshtein", ["require"], _levenshtein);
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("textarea", child1);
  const child2 = runtime.module(define2);
  main.import("vl", child2);
  main.variable(observer("vegalite")).define("vegalite", ["require"], _vegalite);
  main.variable(observer("deepcopy")).define("deepcopy", _deepcopy);
  return main;
}
