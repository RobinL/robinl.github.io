// https://observablehq.com/@robinl/understanding-match-weights@644
import define1 from "./ea6530af059f37be@231.js";
import define2 from "./817db6818ab226c0@104.js";
import define3 from "./843cb6e82d7c3d9b@474.js";
import define4 from "./86fc30325e4106c4@853.js";

function _title(md){return(
md`# Understanding match weights`
)}

function _para_1(md){return(
md`Some columns are more important than others to the calculation of overall match probability.  For example, a match on date of birth provides stronger evidence in favour of a match than a match on gender.

The relative importance of columns is quantified in a model's _match weights_.

In this article, we explore the concept of match weights, using visualisations to help build intuition for how they work.  

The annex to this article presents the maths for how our implementation of the Fellegi Sunter model can be decomposed into a series of match weights.

`
)}

function _para_2(md,tex){return(
md`## Match weights 

A single comparison column provides evidence in favour or against a match, but this evidence is rarely conclusive.  The ambiguity arises because any observation on the comparison column is consistent with two possibilities.



- **A match on a column is consistent with the possibility that the entities match, but could also be due to two different entities sharing the same information (a 'collision').**

  The comparative likelihood of these two possibilities is a measure of the amount of evidence in favour of a match.  That is, we want to compare:
  
  ${tex`\operatorname{Pr}(\text{column matches}|\text{records match})`} vs. ${tex`\operatorname{Pr}(\text{column matches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${tex`m_\text{col, level 1}`} vs. ${tex`u_\text{col, level 1}`}.


- **A non-match on a column is consistent with the possibility the entities differ, but could also be due to typos or other variations in how information has been recorded about the same entity.**
  
   The comparative likelihood of these two possibilities is a measure of the amount of evidence against a match.  
  
    ${tex`\operatorname{Pr}(\text{column mismatches}|\text{records match})`} vs. ${tex`\operatorname{Pr}(\text{column mismatches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${tex`m_\text{col, level 0}`} vs. ${tex`u_\text{col, level 0}`}.

We use the ratio of these values to compare their magnitude.  This ratio is known as a Bayes Factor.

`
)}

function _para_3(md,texd,tex){return(
md`## Bayes Factors

Mathematically we can define the [Bayes Factor](https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/) for a given comparison column as:

${texd`K_\text{col, level} =  \frac{m_\text{col, level}}{u_\text{col, level}}= \frac{\operatorname{Pr}(\gamma_\text{col,level}|\text{records match})}{\operatorname{Pr}(\gamma_\text{col,level}|\text{records do not match})}`}


Bayes factors can be explained in words.  For example, a Bayes Factor of 20 for a given column means that an overall match is now 20 times more probable.  A Bayes Factor of ${tex`\frac{1}{10}`} for a given column means an overall match is 10 times less probable.

In this sense, a Bayes Factor is are similar to the concept of odds.  Odds of 4 mean that an even happens four out of five times, or in some sense it is four times more likely for the even to happen than not happen.

However, Bayes Factors differ from odds in that they are only meaningful in the context of a prior.  A Bayes Factor is an adjustment - it tells us something is more or less likely.  But we need a starting value - otherwise there's nothing to apply the adjustment to.

Let's see how this works:


`
)}

function _prior(inputs){return(
inputs.range([0, 1], {
  step: 0.01,
  label: `prior probability =`,
  value: 0.5
})
)}

function _m(inputs,tex){return(
inputs.range([0, 1], {
  step: 0.01,
  label: tex`m_\text{col, level} =`,
  value: 0.8
})
)}

function _u(inputs,tex){return(
inputs.range([0, 1], {
  step: 0.01,
  label: tex`u_\text{col, level} =`,
  value: 0.2
})
)}

function _bf(tex,m,u){return(
tex`\text{Bayes Factor} = \frac{m_\text{col, level}}{u_\text{col, level}} = \frac{${m}}{${u}} = ${(
  m / u
).toPrecision(4)} `
)}

function _post(tex,prior,m,u){return(
tex`\text{posterior} = \frac{\text{prior}\times m}{\text{prior}\times m + (1-\text{prior})\times u}= ${(
  (prior * m) /
  (prior * m + (1 - prior) * u)
).toPrecision(4)}`
)}

function _subhead_1(md){return(
md`## Match weights`
)}

function _para_4(md,texd){return(
md`Finally, it can be convenient to take the logarithm of Bayes Factors because this [enables match weights to be added together](https://math.stackexchange.com/questions/965500/intuitive-understanding-of-logarithms) rather than being multiplied.

${texd`\text{match weight for dob} =  \log(K_\text{col, level})`}

This transformation is also useful for visualising match weights.  Bayes factors are difficult to represent on a single scale becuse they represent ratios, which can be very large or very tiny, whereas log bayes factors can easily be viewed and compared on a single scale.
`
)}

function _para_5(md,tex,texd){return(
md`## Determinants of match weights

### Column matches

Where a column matches, the key determinant of match weight is the cardinality of the column (the number of unique values).  

For example, imagine we are linking a dataset of children, and consider the date of birth field.

The Bayes Factor is ${tex`\frac{m_\text{dob, level 1}}{u_\text{dob, level 1}}`}  

The numerator is the probability that date of birth matches amongst records which truly match.

This is likely to be high.  With good data quality it will approach 1.0, and even with poor data quality it's likely to be above 0.8.

The term ${tex`u_\text{dob, level 1}`} is the probability that date of birth matches amongst records which do not match.  


This is likely to be very small.  If the children are aged below 18, then there will be ${tex`18 \times 365`} = ${(
  18 * 365
).toLocaleString()} different dates of birth.  We can therefore estimate that:

${texd`u_\text{dob, level 1} = \frac{1}{${18 * 365}} = ${(
  1 /
  (18 * 365)
).toPrecision(4)}`}

Let's assume that the numerator is 0.9.  The Bayes Factor would be ${tex`\frac{0.9}{${(
  1 /
  (18 * 365)
).toPrecision(4)}}`} = ${
  0.9 * 18 * 365
}  i.e. very strong evidence in favour of a match.    

The denominator drives this result - the precise value of the numerator does not matter much.

### Column does not match

Where a column does not match, the key deterinant of match weight is the probability of mismatches among records that truly match.  This could be due to typos, transcription errors, or other reasons for variation in data (e.g. change of address).  Loosely speaking, this is a measure of data quality.

For example, imagine we are linking a large dataset of people, and consider the gender field.  Imagine this is recorded with high precision, and for the sake of this example, suppose no-one in the dataset has changed their gender.

The Bayes Factor is ${tex`\frac{m_\text{gender, level 0}}{u_\text{gender, level 0}}`}  

The numerator tells us how often we observe a mismatch on gender amongst truly matching records.  Since data is entered with high precision, this number is low.  Let's say the rate of error is one in a thousand.

The denominator tells us how often we observe a mismatch on gender among truly non-matching records.  For gender this is likely to be around 0.5.  Note that the denominator would generally be a high number (almost always in the range 0.5 - 1.0) irrespective of the column type.

The Bayes Factor would be ${tex`\frac{0.001}{0.5}`} = ${
  0.001 / 0.5
}  .  This is very strong evidence against a match.

The numerator drives this result - the precise value of the denominator does not matter.


`
)}

function _subhead_2(md){return(
md`## Visualising match weights`
)}

function _para_6(md){return(
md`These concepts allow us to succinctly summarise the m and u values and match weights of a Fellegi Sunter model graphically.  For instance, consider the following model: (*You may adjust the m and u values*):`
)}

function _para_7(md){return(
md`This allows a succinct visualisation of the match weights for a Fellegi Sunter model as follows.  You may edit these values to see how they affect the charts.`
)}

function _splink_settings(inputs,default_splink_settings){return(
inputs.textarea({
  value: default_splink_settings,
  rows: 26,
  spellcheck: false
})
)}

function _para_8(md){return(
md`The m and u probabilities can be shown in the following chart:`
)}

function _chart_1(get_m_u_chart,splink_settings){return(
get_m_u_chart(JSON.parse(splink_settings))
)}

function _para_9(md){return(
md`And the Bayes Factors can be visualised as follows:`
)}

function _chart_2(get_bayes_factor_chart,splink_settings){return(
get_bayes_factor_chart(JSON.parse(splink_settings))
)}

function _para_10(md){return(
md`## Waterfall chart

Finally, for given values of the comparison columns, we can use the log 2 Bayes Factors to plot a chart that shows the calculation of the final probability.  The log 2 Bayes Factor is on the right hand access, and the probability is shown on the right hand axis.  Hover over the bars for more information.`
)}

function _fname_radio(inputs){return(
inputs.radio(["Values do not match", "Values match"], {
  label: "Comparison of fname column",
  value: "Values match"
})
)}

function _sname_radio(inputs){return(
inputs.radio(["Values do not match", "Values match"], {
  label: "Comparison of sname column",
  value: "Values match"
})
)}

function _dob_radio(inputs){return(
inputs.radio(["Values do not match", "Values match"], {
  label: "Comparison of dob column",
  value: "Values match"
})
)}

function _town_radio(inputs){return(
inputs.radio(["Values do not match", "Values match"], {
  label: "Comparison of town column",
  value: "Values do not match"
})
)}

function _chart_3(get_waterfall_chart,row,splink_settings){return(
get_waterfall_chart(row, JSON.parse(splink_settings), { height: 300 }, false)
)}

function _para_11(md,get_match_probability_components,row,splink_settings){return(
md`Final match probability:
${get_match_probability_components(row, JSON.parse(splink_settings))[
  "match_probability"
].toPrecision(4)}`
)}

function _annex(md){return(
md`## Mathematical annex: Rewriting the Fellegi Sunter formula in terms of odds, and Bayes Factors`
)}

function _para_12(md,texd){return(
md`In this section, we show why it is possible to compute match probabilities by adding together log2 Bayes Factors.

Start with our equation for match probability:

${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.1} `}

And note that we could similarly define:

${texd`
\operatorname{Pr}(\text{records do not match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.2} `}

`
)}

function _para_13(md,texd){return(
md`Now we introduce the [formula for odds](https://en.wikipedia.org/wiki/Odds#Statistical_usage): 

${texd`\text{odds} = \frac{p}{1-p}`} 
where p is probability.


For example odds of 4 mean that this event happens 4 out of 5 times, which correponds to a probability of 80%.

Dividing (1.1) by (1.2) we see that:

${texd`
\text{odds}(\text{records  match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}\tag{1.3} `}

Also recall that the Bayes Factor for column i can be defined as:
${texd`b_{i\ell}=\frac{m_{i\ell}}{u_{i\ell}}`} 
so we can write the odds that records match as :

${texd`
\text{odds of match} = \frac{\lambda }{(1-\lambda) } b_{1\ell}b_{2\ell}\ldots b_{K\ell}\tag{1.4} `}


Which can then be converted into a probability using:

${texd`p = \frac{\text{odds}}{1+\text{odds}}`}

Sometimes it can also be convenient to use log odds, because these can be computed with addition rather than multiplication:

${texd`
\text{log odds of match} = \log{(\frac{\lambda }{(1-\lambda) })} \log({b_{1\ell}})+\log({b_{2\ell}})+\ldots +\log({b_{K\ell})}\tag{1.5} `}

This final representation is what is used in the waterfall chart to represent the computation of match probability
`
)}

function _texd(tex){return(
tex.options({
  displayMode: true,
  fleqn: true
})
)}

function _css_styles(html){return(
html`<style>
.katex-display>.katex { font-size: 1em}
.katex-display {
    max-width: None;
}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`
)}

function _row(fname_radio,sname_radio,dob_radio,town_radio)
{
  let row = {};

  if (fname_radio == "Values match") {
    row["𝛾_fname"] = 1;
  } else {
    row["𝛾_fname"] = 0;
  }

  if (sname_radio == "Values match") {
    row["𝛾_sname"] = 1;
  } else {
    row["𝛾_sname"] = 0;
  }

  if (dob_radio == "Values match") {
    row["𝛾_dob"] = 1;
  } else {
    row["𝛾_dob"] = 0;
  }

  if (town_radio == "Values match") {
    row["𝛾_town"] = 1;
  } else {
    row["𝛾_town"] = 0;
  }
  return row;
}


function _inputs(require){return(
require("@observablehq/inputs@0.8.0")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("para_2")).define("para_2", ["md","tex"], _para_2);
  main.variable(observer("para_3")).define("para_3", ["md","texd","tex"], _para_3);
  main.variable(observer("viewof prior")).define("viewof prior", ["inputs"], _prior);
  main.variable(observer("prior")).define("prior", ["Generators", "viewof prior"], (G, _) => G.input(_));
  main.variable(observer("viewof m")).define("viewof m", ["inputs","tex"], _m);
  main.variable(observer("m")).define("m", ["Generators", "viewof m"], (G, _) => G.input(_));
  main.variable(observer("viewof u")).define("viewof u", ["inputs","tex"], _u);
  main.variable(observer("u")).define("u", ["Generators", "viewof u"], (G, _) => G.input(_));
  main.variable(observer("bf")).define("bf", ["tex","m","u"], _bf);
  main.variable(observer("post")).define("post", ["tex","prior","m","u"], _post);
  main.variable(observer("subhead_1")).define("subhead_1", ["md"], _subhead_1);
  main.variable(observer("para_4")).define("para_4", ["md","texd"], _para_4);
  main.variable(observer("para_5")).define("para_5", ["md","tex","texd"], _para_5);
  main.variable(observer("subhead_2")).define("subhead_2", ["md"], _subhead_2);
  main.variable(observer("para_6")).define("para_6", ["md"], _para_6);
  main.variable(observer("para_7")).define("para_7", ["md"], _para_7);
  main.variable(observer("viewof splink_settings")).define("viewof splink_settings", ["inputs","default_splink_settings"], _splink_settings);
  main.variable(observer("splink_settings")).define("splink_settings", ["Generators", "viewof splink_settings"], (G, _) => G.input(_));
  main.variable(observer("para_8")).define("para_8", ["md"], _para_8);
  main.variable(observer("chart_1")).define("chart_1", ["get_m_u_chart","splink_settings"], _chart_1);
  main.variable(observer("para_9")).define("para_9", ["md"], _para_9);
  main.variable(observer("chart_2")).define("chart_2", ["get_bayes_factor_chart","splink_settings"], _chart_2);
  main.variable(observer("para_10")).define("para_10", ["md"], _para_10);
  main.variable(observer("viewof fname_radio")).define("viewof fname_radio", ["inputs"], _fname_radio);
  main.variable(observer("fname_radio")).define("fname_radio", ["Generators", "viewof fname_radio"], (G, _) => G.input(_));
  main.variable(observer("viewof sname_radio")).define("viewof sname_radio", ["inputs"], _sname_radio);
  main.variable(observer("sname_radio")).define("sname_radio", ["Generators", "viewof sname_radio"], (G, _) => G.input(_));
  main.variable(observer("viewof dob_radio")).define("viewof dob_radio", ["inputs"], _dob_radio);
  main.variable(observer("dob_radio")).define("dob_radio", ["Generators", "viewof dob_radio"], (G, _) => G.input(_));
  main.variable(observer("viewof town_radio")).define("viewof town_radio", ["inputs"], _town_radio);
  main.variable(observer("town_radio")).define("town_radio", ["Generators", "viewof town_radio"], (G, _) => G.input(_));
  main.variable(observer("chart_3")).define("chart_3", ["get_waterfall_chart","row","splink_settings"], _chart_3);
  main.variable(observer("para_11")).define("para_11", ["md","get_match_probability_components","row","splink_settings"], _para_11);
  main.variable(observer("annex")).define("annex", ["md"], _annex);
  main.variable(observer("para_12")).define("para_12", ["md","texd"], _para_12);
  main.variable(observer("para_13")).define("para_13", ["md","texd"], _para_13);
  main.variable(observer("texd")).define("texd", ["tex"], _texd);
  main.variable(observer("css_styles")).define("css_styles", ["html"], _css_styles);
  const child1 = runtime.module(define1);
  main.import("intro_simple_waterfall", child1);
  const child2 = runtime.module(define2);
  main.import("get_m_u_chart", child2);
  main.import("get_bayes_factor_chart", child2);
  main.import("default_splink_settings", child2);
  const child3 = runtime.module(define3);
  main.import("get_waterfall_chart", child3);
  main.variable(observer("row")).define("row", ["fname_radio","sname_radio","dob_radio","town_radio"], _row);
  const child4 = runtime.module(define4);
  main.import("get_match_probability_components", child4);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  return main;
}
