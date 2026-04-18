// https://observablehq.com/@robinl/dependencies-between-match-weights@158
import define1 from "./34fd4ef09fb0509a@2296.js";
import define2 from "./817db6818ab226c0@104.js";

function _title(md){return(
md`# Dependencies between match weights`
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/match_weight_dependencies/).*`
)}

function _para_1(md){return(
md`The values of a column's match weights are interdependent:  Only certain combinations of values are possible.  

Some types of data also result in maximum and minimum match weights.

Understanding why these constraints occur can help you build better models, because it can help you find ways to extract more information from your comparison columns.

This article tries to build an intuition for why these constraints occur and why they matter.
`
)}

function _para_2(md,tex){return(
md`## Example of a maximum match weight:  Gender
Consider a column for gender, and let's assume there's an equal split of males and females in our data.

A match on gender does not provide strong evidence in favour of a match because it's common to observe a match on gender amongst non-matching records.

This suggests there is an upper bound on the Bayes Factor for gender.  It turns out that, for this data, the maximum Bayes Factor is 2.0.

 Let's explore what this looks like visually, which will reveal the constraint.  Note that:

- Amongst non-matching records, the gender field is just as likely to match as to mismatch, i.e.  ${tex`u_\text{gender, level 0} = 0.5`} and ${tex`u_\text{gender, level 1} = 0.5`}.

-  ✨You can drag within the rectangles of the following diagram to see the effect of different m and u values on match weights✨
`
)}

function _gen(reset_gender,m_u_input_control,width,settings_gender)
{
  reset_gender;
  return m_u_input_control(width, 400, settings_gender, 0, 1);
}


function _reset_gender(inputs){return(
inputs.button("Reset gender values")
)}

function _bf_chart_gender(get_bayes_factor_chart,input_control_data_to_splink_settings,gen){return(
get_bayes_factor_chart(
  input_control_data_to_splink_settings(gen)
)
)}

function _para_3(md){return(
md`### Observations

Two important findings emerge from this example:

- There is a maximum bound of 2 on the match weight associated with a match on gender.  This is intuitive:  a match weight of two means that, if we observe a match on gender, it's now twice as likely that the records are a match - reflecting the equal split of genders.

- There is no minimum bound of the match weight associated with a mismatch on gender.  This is also intuitive.  If gender is recorded with very high accuracy, then a mismatch on gender represents very strong evidence against a match.
`
)}

function _para_4(md){return(
md`## Example of a minimum match weights:  Forename

Consider a forename column.  Let's assume that nicknames, diminutives are common in this dataset.  For example, it may be common for someone called 'Jonathan' to appear variously as 'Jonathan', 'John' or 'Jonny'.  As such, it will be common that, amongst matches, the forename does not exactly match.

Consider the following chart, which models this column with two comparison levels:
- Level 1: Forename matches exactly
- Level 0: Forname mismatches 

In this scenario, the observation of a mismatch on forename does not provide strong evidence against a match, because it is so common to observe a mismatch amongst matching records.  
`
)}

function _fn1(reset_fn1,m_u_input_control,width,settings_forename_1)
{
  reset_fn1;
  return m_u_input_control(width, 400, settings_forename_1, 0, 3);
}


function _reset_fn1(inputs){return(
inputs.button("Reset forename values")
)}

function _bf_chart_fn_1(get_bayes_factor_chart,input_control_data_to_splink_settings,fn1){return(
get_bayes_factor_chart(input_control_data_to_splink_settings(fn1))
)}

function _para_5(md){return(
md`Using a more sophisticted modelling approach, we can do better.

Let's assume that we can capture the vast majority of nicknames and diminutives using a fuzzy matching function.  This allows us to draw a distinction between two scenarios:
- Values do not match, but are similar
- Values do not match, and are completely different.

We now set up our levels as follows:
- Level 2: Exact match on forename
- Level 1: Fuzzy match on forename
- Level 0: Forename mismatches


`
)}

function _fn2(reset_fn2,m_u_input_control,width,settings_forename_2)
{
  reset_fn2;
  return m_u_input_control(width, 400, settings_forename_2, 0, 3);
}


function _reset_fn2(inputs){return(
inputs.button("Reset forename values")
)}

function _bf_chart_fn_2(get_bayes_factor_chart,input_control_data_to_splink_settings,fn2){return(
get_bayes_factor_chart(
  input_control_data_to_splink_settings(fn2)
)
)}

function _para_6(md){return(
md`## Observations

- When we modelled two levels, two names that fuzzy matched (John vs Jonny) would have been assigned the same negative match weight as two names which were completely different (John vs Robin).  We therefore lost information
- When we model three levels, a much stronger negative weight on a mismatch is possible.  This is because the lowest level (level_0) now contains only names which are completely different, rather than being a mix of fuzzy matching names, and names which are competely different.

Modelling three levels thereby allows us to extract substantially more information from the data.
`
)}

function _settings_gender(){return(
{
  proportion_of_matches: 0.3,
  comparison_columns: [
    {
      col_name: "gender",
      m_probabilities: [0.1, 0.9],
      u_probabilities: [0.5, 0.5]
    }
  ],
  level_names: ["Gender mismatches", "Gender matches"]
}
)}

function _settings_forename_1(){return(
{
  proportion_of_matches: 0.3,
  comparison_columns: [
    {
      col_name: "gender",
      m_probabilities: [0.3, 0.7],
      u_probabilities: [0.9, 0.1]
    }
  ],
  level_names: ["Forname mismatches", "Forename matches exactly"]
}
)}

function _settings_forename_2(){return(
{
  proportion_of_matches: 0.3,
  comparison_columns: [
    {
      col_name: "gender",
      m_probabilities: [0.05, 0.25, 0.7],
      u_probabilities: [0.75, 0.15, 0.1]
    }
  ],
  level_names: [
    "Forname mismatches",
    "Forename fuzzy matches",
    "Forename matches"
  ]
}
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("para_1")).define("para_1", ["md"], _para_1);
  main.variable(observer("para_2")).define("para_2", ["md","tex"], _para_2);
  main.variable(observer("viewof gen")).define("viewof gen", ["reset_gender","m_u_input_control","width","settings_gender"], _gen);
  main.variable(observer("gen")).define("gen", ["Generators", "viewof gen"], (G, _) => G.input(_));
  main.variable(observer("viewof reset_gender")).define("viewof reset_gender", ["inputs"], _reset_gender);
  main.variable(observer("reset_gender")).define("reset_gender", ["Generators", "viewof reset_gender"], (G, _) => G.input(_));
  main.variable(observer("bf_chart_gender")).define("bf_chart_gender", ["get_bayes_factor_chart","input_control_data_to_splink_settings","gen"], _bf_chart_gender);
  main.variable(observer("para_3")).define("para_3", ["md"], _para_3);
  main.variable(observer("para_4")).define("para_4", ["md"], _para_4);
  main.variable(observer("viewof fn1")).define("viewof fn1", ["reset_fn1","m_u_input_control","width","settings_forename_1"], _fn1);
  main.variable(observer("fn1")).define("fn1", ["Generators", "viewof fn1"], (G, _) => G.input(_));
  main.variable(observer("viewof reset_fn1")).define("viewof reset_fn1", ["inputs"], _reset_fn1);
  main.variable(observer("reset_fn1")).define("reset_fn1", ["Generators", "viewof reset_fn1"], (G, _) => G.input(_));
  main.variable(observer("bf_chart_fn_1")).define("bf_chart_fn_1", ["get_bayes_factor_chart","input_control_data_to_splink_settings","fn1"], _bf_chart_fn_1);
  main.variable(observer("para_5")).define("para_5", ["md"], _para_5);
  main.variable(observer("viewof fn2")).define("viewof fn2", ["reset_fn2","m_u_input_control","width","settings_forename_2"], _fn2);
  main.variable(observer("fn2")).define("fn2", ["Generators", "viewof fn2"], (G, _) => G.input(_));
  main.variable(observer("viewof reset_fn2")).define("viewof reset_fn2", ["inputs"], _reset_fn2);
  main.variable(observer("reset_fn2")).define("reset_fn2", ["Generators", "viewof reset_fn2"], (G, _) => G.input(_));
  main.variable(observer("bf_chart_fn_2")).define("bf_chart_fn_2", ["get_bayes_factor_chart","input_control_data_to_splink_settings","fn2"], _bf_chart_fn_2);
  main.variable(observer("para_6")).define("para_6", ["md"], _para_6);
  main.variable(observer("settings_gender")).define("settings_gender", _settings_gender);
  main.variable(observer("settings_forename_1")).define("settings_forename_1", _settings_forename_1);
  main.variable(observer("settings_forename_2")).define("settings_forename_2", _settings_forename_2);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  const child1 = runtime.module(define1);
  main.import("m_u_input_control", child1);
  main.import("input_control_data_to_splink_settings", child1);
  const child2 = runtime.module(define2);
  main.import("get_m_u_chart", child2);
  main.import("get_bayes_factor_chart", child2);
  return main;
}
