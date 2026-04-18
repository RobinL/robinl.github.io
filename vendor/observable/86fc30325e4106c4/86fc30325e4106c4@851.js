import define1 from "./ea6530af059f37be@231.js";
import define2 from "./d25176b0fe784ad0@488.js";

function _title(md){return(
md`# The mathematics of the Fellegi Sunter model`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`
)}

function _para_1(md){return(
md`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`
)}

function _para_2(md){return(
md`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`
)}

function _para_3(md){return(
md`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`
)}

function _table_l1(table_l){return(
table_l
)}

function _ds2_head(md){return(
md`### Dataset 2`
)}

function _table_r1(table_r){return(
table_r
)}

function _rec_comparisons(md,df_comparisons_1){return(
md`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${df_comparisons_1.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`
)}

function _para_4(md,df_gammas_1,df_gammas_only_1,texd,get_comparison_vector_symbols_and_numbers,settings){return(
md`## Comparing columns

We need a mathematical way of evaluating these pairwise comparisons - a function that takes the comparisons as an input, and outputs match probabilities.  

The FS model solves this problem by comparing the records column by column, and assigning each comparison to two or more 'similarity levels'.

A simple example of a two-level comparison rule for a column may be:

- If the values in the column exactly match, assign the comparison to similarity level 1
- Otherwise assign the comparison to similarity level 0

In the following table, we apply this simple rule to every column. The comparisons are denoted with the prefix \`𝛾_\` because the mathematical symbol gamma is often used in the literate to represent comparisons.

${df_gammas_1.view()}

<br>

Now that we have a numeric representation of the comparisons, the model makes no further use of the raw data, instead using only the values in the 𝛾 columns: 

${df_gammas_only_1.view()}   
<br>
For each row in this table, the set of gamma values is known as the 'comparison vector'.  For example, the comparison vector for the first row in the table is:

${texd`${get_comparison_vector_symbols_and_numbers(
  df_gammas_1.slice(1 - 1, 1).objects()[0],
  settings
)}`}
 `
)}

function _subhead_1(md){return(
md`## Scoring comparisons`
)}

function _para_5(md){return(
md`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`
)}

function _para_6(md,texd){return(
md`### m and u probabilities 

How much should we increase our estimate of match probability if we observe a match on first name? How about a match on gender? And what about if we observe a mismatch on these fields?  

We are interested in evaluating statements like: 

${texd`\operatorname{Pr}(\text{records match}|\text{first name matches})`} 

This can be quantified using the m and u probabilities for each column, combined with Bayes Theorem (see annex for a refresher).

Consider the first name column.  We have defined two similarity levels:  level 1 if the first name exactly matches, and level 0 otherwise.

#### m probabilities
The m probabilities for the first name column are:

${texd`m_\text{first name,level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{record match})`}


${texd`m_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records match})`}


That is, amongst record comparisons which are true matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how often mispellings, nicknames or aliases occur in the first name field.

#### u probabilities

The u probabilities for the first name column are:

${texd`u_\text{first name, level\_0} = \operatorname{Pr}(\text{first name does not match}|\text{records do not match})`}


${texd`u_\text{first name, level\_1} = \operatorname{Pr}(\text{first name matches}|\text{records do not match})`}



That is, amongst record comparisons which are true non-matches, what proportion have a match on first name, and what proportion mismatch on first name?

This is a measure of how likely 'collisions' are likely to occur. For instance, it would be common for two different people to have the same gender, but less likely for two different people to have the same date of birth.

#### The overall proportion of matches

Let us also define:

${texd`\operatorname{Pr}(\text{records match}) = \lambda`} 

This is our prior - our estimate for the probability that a randomly-chosen pairwise record comparison is a match.

### Bayes Theorem

We can now use Bayes Theorem  to write:

${texd`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{\operatorname{Pr}(\text{first name matches}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\text{first name matches})}}`}

which, in our notation is:

${texd`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline [10pt] = \frac{m_\text{first name, level\_1}\lambda}{m_\text{first name, level\_1}\lambda + u_\text{first name, level\_1}(1-\lambda)}`}


`
)}

function _para_7(md,tex,texd){return(
md`We can generalise this formula by using  ${tex`\gamma`} to indicate the value of the comparison, the index ${tex`k`} to designate the comparison column, and ${tex`\ell`} to designate the observed comparison level, we can write:

${texd`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline [10pt] = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline [10pt] = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`
)}

function _para_8(md){return(
md`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`
)}

function _subhead_2(md){return(
md`## Example`
)}

function _para_10(md){return(
md`
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

`
)}

function _splink_settings(inputs,default_splink_settings){return(
inputs.textarea({
  value: default_splink_settings,
  rows: 26,
  spellcheck: false
})
)}

function _para_11(md){return(
md`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`
)}

function _row_index(inputs,df_gammas_1){return(
inputs.range([1, df_gammas_1.numRows()], {
  value: 1,
  label: "Choose record comparison",
  step: 1
})
)}

function _this_row(md,df_comparisons_1,row_index){return(
md`${df_comparisons_1.slice(row_index - 1, row_index).toMarkdown()}`
)}

function _para_12(md,texd,get_comparison_vector_symbols_and_numbers,df_gammas_1,row_index,settings){return(
md`The comparison vector is given by:

${texd`${get_comparison_vector_symbols_and_numbers(
  df_gammas_1.slice(row_index - 1, row_index).objects()[0],
  settings
)}`}

`
)}

function _para_13(md){return(
md`The formula for match probability is:`
)}

function _para_14(texd,get_m_u_formula_symbols,df_gammas_1,row_index,settings){return(
texd`${get_m_u_formula_symbols(
  df_gammas_1.slice(row_index - 1, row_index).objects()[0],
  settings
)}`
)}

function _para_15(md){return(
md`And substituting in numbers using our specified parameters we get: `
)}

function _para_16(texd,get_m_u_formula_numbers,df_gammas_1,row_index,settings){return(
texd`${get_m_u_formula_numbers(
  df_gammas_1.slice(row_index - 1, row_index).objects()[0],
  settings
)}`
)}

function _para_17(md,tex,get_match_probability_components,df_gammas_1,row_index,settings){return(
md`i.e. the ${tex`\text{estimated match probability} = 

${get_match_probability_components(
  df_gammas_1.slice(row_index - 1, row_index).objects()[0],
  settings
)["match_probability"].toPrecision(4)}

`}

`
)}

function _para_18(md){return(
md`<br><br>`
)}

function _para_19(md,texd,tex){return(
md`## Annex:  Bayes Theorem

Recall that Bayes Theorem is given by:

${texd`
\operatorname{Pr}(a|b) = {\frac{\operatorname{Pr}(b|a)\operatorname{Pr}(a)}{\operatorname{Pr}{(b)}}}`} 


or , in words: 

${texd`
\text{posterior} = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}`}

In the context of record linkage, we can describe these parts as:

**Prior**:
The overall proportion of comparisons which are matches ${tex`\operatorname{Pr}(\text{match})`}.

**Evidence**: We have observed that e.g. first name matches, ${tex`\operatorname{Pr}(\text{first name matches})`}.

**Likelihood**: The probability that first name matches amongst matches, given by ${tex`\operatorname{Pr}(\text{first name matches}|\text{records match})`}.  

So Bayes' formuls is:

${texd`
\operatorname{Pr}(\text{match}|\text{first name matches}) = \frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}{(\text{first name matches})}}`}

Which can also be written:

${texd` 
\frac{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match})}{\operatorname{Pr}(\text{first name matches}|\text{match})\operatorname{Pr}(\text{match}) + \operatorname{Pr}(\text{first name matches}|\text{non match})\operatorname{Pr}(\text{non match})}`}

giving us:

${texd`
\operatorname{Pr}(\text{match}|\text{first name matches}) = 
\frac{m_1\lambda}{m_1\lambda + u_1(1-\lambda)}`}

Which is the same as Equation 1.
`
)}

function _30(md){return(
md`## Calculations and code`
)}

function _texd(tex){return(
tex.options({
  displayMode: true,
  fleqn: true
})
)}

function _default_splink_settings()
{
  return `{
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
  
  }`;
}


function _settings(splink_settings){return(
JSON.parse(splink_settings)
)}

function _css_styles(html){return(
html`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("para_2")).define("para_2", ["md"], _para_2);
  main.variable(observer("para_3")).define("para_3", ["md"], _para_3);
  main.variable(observer("table_l1")).define("table_l1", ["table_l"], _table_l1);
  main.variable(observer("ds2_head")).define("ds2_head", ["md"], _ds2_head);
  main.variable(observer("table_r1")).define("table_r1", ["table_r"], _table_r1);
  main.variable(observer("rec_comparisons")).define("rec_comparisons", ["md","df_comparisons_1"], _rec_comparisons);
  main.variable(observer("para_4")).define("para_4", ["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"], _para_4);
  main.variable(observer("subhead_1")).define("subhead_1", ["md"], _subhead_1);
  main.variable(observer("para_5")).define("para_5", ["md"], _para_5);
  main.variable(observer("para_6")).define("para_6", ["md","texd"], _para_6);
  main.variable(observer("para_7")).define("para_7", ["md","tex","texd"], _para_7);
  main.variable(observer("para_8")).define("para_8", ["md"], _para_8);
  main.variable(observer("subhead_2")).define("subhead_2", ["md"], _subhead_2);
  main.variable(observer("para_10")).define("para_10", ["md"], _para_10);
  main.variable(observer("viewof splink_settings")).define("viewof splink_settings", ["inputs","default_splink_settings"], _splink_settings);
  main.variable(observer("splink_settings")).define("splink_settings", ["Generators", "viewof splink_settings"], (G, _) => G.input(_));
  main.variable(observer("para_11")).define("para_11", ["md"], _para_11);
  main.variable(observer("viewof row_index")).define("viewof row_index", ["inputs","df_gammas_1"], _row_index);
  main.variable(observer("row_index")).define("row_index", ["Generators", "viewof row_index"], (G, _) => G.input(_));
  main.variable(observer("this_row")).define("this_row", ["md","df_comparisons_1","row_index"], _this_row);
  main.variable(observer("para_12")).define("para_12", ["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"], _para_12);
  main.variable(observer("para_13")).define("para_13", ["md"], _para_13);
  main.variable(observer("para_14")).define("para_14", ["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"], _para_14);
  main.variable(observer("para_15")).define("para_15", ["md"], _para_15);
  main.variable(observer("para_16")).define("para_16", ["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"], _para_16);
  main.variable(observer("para_17")).define("para_17", ["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"], _para_17);
  main.variable(observer("para_18")).define("para_18", ["md"], _para_18);
  main.variable(observer("para_19")).define("para_19", ["md","texd","tex"], _para_19);
  main.variable(observer()).define(["md"], _30);
  const child1 = runtime.module(define1);
  main.import("example_2_comparison", child1);
  main.import("intro_simple_waterfall", child1);
  main.import("table_l", child1);
  main.import("table_r", child1);
  main.import("df_1_l", child1);
  main.import("df_1_r", child1);
  main.import("df_comparisons_1", child1);
  main.import("df_gammas_1", child1);
  main.import("df_gammas_only_1", child1);
  const child2 = runtime.module(define2);
  main.import("get_m_u_formula_symbols", child2);
  main.import("get_m_u_formula_numbers", child2);
  main.import("get_comparison_vector_symbols_and_numbers", child2);
  main.import("get_match_probability_components", child2);
  main.variable(observer("texd")).define("texd", ["tex"], _texd);
  main.variable(observer("default_splink_settings")).define("default_splink_settings", _default_splink_settings);
  main.variable(observer("settings")).define("settings", ["splink_settings"], _settings);
  main.variable(observer("css_styles")).define("css_styles", ["html"], _css_styles);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  return main;
}
