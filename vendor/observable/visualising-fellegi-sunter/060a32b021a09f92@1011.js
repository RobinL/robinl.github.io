// https://observablehq.com/@robinl/visualising-fellegi-sunter@1011
import define1 from "./379dba93f4bb9357@1129.js";
import define2 from "./d25176b0fe784ad0@488.js";
import define3 from "./ecf81050a24329e5@163.js";

function _title(md){return(
md`# Visualising the Fellegi Sunter model `
)}

function _2(md){return(
md`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/visualising_fellegi_sunter/).*`
)}

function _para_1(md,texd){return(
md`The [previous article](https://www.robinlinacre.com/maths_of_fellegi_sunter/) presented an implementation of the Fellegi Sunter model.  We showed that match probability could be represented by Equation 1 - which is reproduced below:
${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline [10pt] = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}

`
)}

function _para_2(md){return(
md`This article presents a way to understand and visualise this formula.`
)}

function _para_3(md){return(
md`In our visualisation, we are going to take each piece of evidence into account in turn. This is possible due to our assumption of conditional independence of comparison columns given the match status.

The means Equation 1 is equivalent to a repeated application of Bayes' Theorem (see annex). See [here](https://www.youtube.com/watch?v=HZGCoVF3YvM) is more in depth video about Bayes Theorem.
`
)}

function _para_4(md){return(
md`## Example

We are going to compute match probability for a record comparison with the following comparison columns:

- \`fname\` (first name)
- \`sname\` (surname)
- \`dob\` (date of birth)
- \`town\` 


The default parameter values are a bit unrealistic, but help make sure the diagrams are legible.
`
)}

function _subhead_1(md){return(
md`## Step 1`
)}

function _para_5(md,m,nm,tex){return(
md`We begin by visualising the space of all pairwise record comparisons, splitting the overall comparison space into ${m`matches`} and ${nm`non-matches`} using our prior, ${tex`\operatorname{Pr}(\text{records match}) =  \lambda`}`
)}

function _lam_view($0){return(
$0
)}

function _treemap_1(plot_treemap,splink_settings){return(
plot_treemap(splink_settings, 0, 300)
)}

function _para_6(md,texd,color_match,color_non_match,splink_settings){return(
md`Using only this information, our estimate of match probability is just the prior:

${texd`\text{match probability} =  \frac{\lambda }{\lambda + (1-\lambda)}  \newline [10pt] = \frac{\colorbox{${color_match.hex()}}{\text{yellow area}}}{\colorbox{${color_match.hex()}}{\text{yellow area}} + \colorbox{${color_non_match.hex()}}{\text{blue area}} }= ${splink_settings[
  "proportion_of_matches"
].toPrecision(4)} `}

`
)}

function _subhead_2(md){return(
md`## Step 2 - First name`
)}

function _para_7(md){return(
md`We will now choose the parameters of the model for the first name field, and then take this information into account in the diagram.`
)}

function _fname_view($0){return(
$0
)}

function _para_8(md,choice_text,splink_settings,dict_as_md_table_row,get_row_no_gammas,get_m_u_text,get_row,m,nm){return(
md` ${choice_text("fname", splink_settings)}
An example of the data would be:
${dict_as_md_table_row(get_row_no_gammas(1))}

According to the model parameters you've chosen:


- ${get_m_u_text("fname", get_row(1), splink_settings, "m")}
- ${get_m_u_text("fname", get_row(1), splink_settings, "u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${m`yellow`} or ${nm`blue`} part of the following diagram:
`
)}

function _treemap_2(plot_treemap,splink_settings){return(
plot_treemap(splink_settings, 1, 300)
)}

function _para_9(md,m,texd,color_match,color_non_match,tex,get_m_u_formula_numbers,get_row,splink_settings){return(
md` What's the probability we're in the ${m`yellow`} area?  This must be:

${texd`\text{match probability} = \frac{\colorbox{${color_match.hex()}}{\text{yellow area}}}{\colorbox{${color_match.hex()}}{\text{yellow area}} + \colorbox{${color_non_match.hex()}}{\text{blue area}} } `}

From this diagram we can see that the ${tex`\colorbox{${color_match.hex()}}{$\text{yellow area} = \lambda m_{1\ell}$}`} and the 
${tex`\colorbox{${color_non_match.hex()}}{$\text{blue area} = (1-\lambda) u_{1\ell}$}`}.

So:

${texd`\text{match probability} =  \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

Which, in numbers is:

${tex`${get_m_u_formula_numbers(get_row(2), splink_settings, 1)}`}
`
)}

function _subhead_3(md){return(
md`## Step 3 - Surname`
)}

function _para_10(md){return(
md`Let's also choose parameters for \`sname\`, the surname field:`
)}

function _sname_view($0){return(
$0
)}

function _para_11(md,choice_text,splink_settings,dict_as_md_table_row,get_row_no_gammas,get_m_u_text,get_row,m,nm){return(
md`${choice_text("sname", splink_settings)}
An example of the data would be:
${dict_as_md_table_row(get_row_no_gammas(2))}

According to the model parameters you've chosen:


- ${get_m_u_text("sname", get_row(2), splink_settings, "m")}
- ${get_m_u_text("sname", get_row(2), splink_settings, "u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${m`yellow`} or ${nm`blue`} part of the following diagram:`
)}

function _treemap_3(plot_treemap,splink_settings){return(
plot_treemap(splink_settings, 2, 300)
)}

function _para_12(md,texd,color_match,color_non_match,get_m_u_formula_numbers,get_row,splink_settings){return(
md`We now have:

${texd`\text{match probability} = \frac{\colorbox{${color_match.hex()}}{\text{yellow area}}}{\colorbox{${color_match.hex()}}{\text{yellow area}} + \colorbox{${color_non_match.hex()}}{\text{blue area}} } `}

${texd`= \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}}`}

Which, in numbers is:

${texd`${get_m_u_formula_numbers(get_row(2), splink_settings, 2)}`}
`
)}

function _subhead_4(md){return(
md`## Step 4 - Date of birth`
)}

function _dob_view($0){return(
$0
)}

function _para_13(md,choice_text,splink_settings,dict_as_md_table_row,get_row_no_gammas,get_m_u_text,get_row,m,nm){return(
md` ${choice_text("dob", splink_settings)}
An example of the data would be:
${dict_as_md_table_row(get_row_no_gammas(3))}

According to the model parameters you've chosen:


- ${get_m_u_text("dob", get_row(3), splink_settings, "m")}
- ${get_m_u_text("dob", get_row(3), splink_settings, "u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${m`yellow`} or ${nm`blue`} part of the following diagram:
`
)}

function _treemap_4(plot_treemap,splink_settings){return(
plot_treemap(splink_settings, 3, 300)
)}

function _para_14(md,texd,get_m_u_formula_numbers,get_row,splink_settings){return(
md`We now have:

${texd`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}}`}

${texd`${get_m_u_formula_numbers(get_row(3), splink_settings, 3)}`}
`
)}

function _subhead_5(md){return(
md`## Step 5: Town`
)}

function _town_view($0){return(
$0
)}

function _para_15(md,choice_text,splink_settings,dict_as_md_table_row,get_row_no_gammas,get_m_u_text,get_row,m,nm){return(
md`The final column is town.

${choice_text("town", splink_settings)}
An example of the final data would be:
${dict_as_md_table_row(get_row_no_gammas(4))}

According to the model parameters you've chosen:


- ${get_m_u_text("town", get_row(4), splink_settings, "m")}
- ${get_m_u_text("town", get_row(4), splink_settings, "u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${m`yellow`} or ${nm`blue`} part of the following diagram:
`
)}

function _treemap_5(plot_treemap,splink_settings){return(
plot_treemap(splink_settings, 4, 300)
)}

function _para_16(md,texd,tex,get_m_u_formula_numbers,get_row,splink_settings){return(
md`The final match probability is therefore:

${texd`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}u_{4\ell}}`}

Which, in numbers is:


${tex`${get_m_u_formula_numbers(get_row(4), splink_settings)}`}
`
)}

function _annex(md,tex,texd){return(
md`## Annex:  Mathematical representation

This annex shows why it's possible to represent the calculation of match probability as a step-by-step computation.  

In particular, we will show that we can calculate match probability using a repeated application of Bayes Theorem.  In pseudocode, our algorithm will be:

\`\`\`
prior = lambda
for col in compaison_columns:
  posterior = bayes(col, prior)
  prior = posterior
\`\`\`


Where the final value of the posterior is equal to ${tex`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})`}.

To demonstrate why this works, consider equation 1, for the case of two columns:

${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{1\ell}} \tag{2.1}`}

We start by applying Bayes Theorem once, accounting for the first comparison column:

${texd`
\operatorname{Pr}(\text{records match}|\gamma_{1}) = t = \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

This posterior, ${tex`t`}, becomes the new prior, which we now use instead of lambda:
${texd`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{t m_{2\ell}}{t m_{2\ell}+ (1-t)u_{2\ell}}\tag{2.2}`}

Note that:

${texd`
1- t = 1 - \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell} - \lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{(1-\lambda)u_{1\ell} }{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}\tag{2.3}`}

But ${tex`(2.3)`} shows that  the term ${tex`(\lambda m_{1\ell}+ (1-\lambda)u_{1\ell})`} appears on both top and bottom of ${tex`(2.2)`} and therefore cancels, leaving ${tex`(2.1)`}  as desired.

`
)}

function _texd(tex){return(
tex.options({
  displayMode: true,
  fleqn: true
})
)}

function _css_styles(html,color_match,color_non_match){return(
html`<style>
.katex-display>.katex { font-size: 1em}


textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}

.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}

.hl_m {
background-color: ${color_match.hex()};
display:inline-block;
}

.hl_nm {
background-color: ${color_non_match.hex()};
display:inline-block;
}

</style>`
)}

function _get_row(splink_settings){return(
function get_row(depth) {
  let row = {};

  let lookup = {
    fname: [
      { fname_l: "John", fname_r: "Tom" },
      { fname_l: "John", fname_r: "John" }
    ],
    sname: [
      { sname_l: "Smith", sname_r: "Hanks" },
      { sname_l: "Smith", sname_r: "Smith" }
    ],
    dob: [
      { dob_l: "1989-03-02", dob_r: "1981-08-21" },
      { dob_l: "1989-03-02", dob_r: "1989-03-02" }
    ],
    town: [
      { town_l: "Bristol", town_r: "Peckham" },
      { town_l: "Bristol", town_r: "Bristol" }
    ]
  };
  let ccs = splink_settings.comparison_columns.slice(0, depth);
  ccs.forEach((cc) => {
    let values = lookup[cc.col_name][cc.gamma_value];
    row = { ...row, ...values };
    let gamma_name = "𝛾_" + cc.col_name;
    row[gamma_name] = cc.gamma_value;
  });
  return row;
}
)}

function _get_row_no_gammas(get_row){return(
function get_row_no_gammas(depth) {
  let row = get_row(depth);
  let keys = Object.keys(row).filter((d) => !d.includes("𝛾_"));
  let new_object = {};

  keys.forEach((k) => {
    new_object[k] = row[k];
  });
  return new_object;
}
)}

function _dict_as_md_table_row(md){return(
function dict_as_md_table_row(dict) {
  let row1 = Object.keys(dict).join(" | ");
  let row2 = Object.keys(dict)
    .map((d) => "-")
    .join(" | ");
  let row3 = Object.values(dict).join(" | ");
  return md`${row1} \n ${row2} \n ${row3} \n`;
}
)}

function _additional_styles(styles){return(
styles
)}

function _nm(html){return(
function nm(text) {
  return html`<span class="hl_nm">${text}</span>`;
}
)}

function _m(html){return(
function m(text) {
  return html`<span class="hl_m">${text}</span>`;
}
)}

function _styles2(form_styles){return(
form_styles
)}

function _get_m_u_text(m,nm,md){return(
function get_m_u_text(colname, row, settings, m_or_u) {
  let cc = settings.comparison_columns.filter(
    (cc) => cc.col_name == colname
  )[0];

  let gamma_value = row["𝛾_" + colname];

  let matches_text;
  if (gamma_value == 1) {
    matches_text = "matches";
  } else if (gamma_value == 0) {
    matches_text = "does not match";
  }

  let col_name_escaped = colname.replace("_", "\\_");
  let gamma_tex = `The column \`${colname}\` ${matches_text}`;
  let percentage = cc[`${m_or_u}_probabilities`][gamma_value] * 100;
  percentage = parseFloat(percentage).toFixed(0) + "%";
  let match_or_non_match;
  if (m_or_u == "m") {
    match_or_non_match = m`matching records`;
  } else {
    match_or_non_match = nm`non-matching records`;
  }
  return md`${gamma_tex} in ${percentage} of ${match_or_non_match}`;
}
)}

function _choice_text(md,tex){return(
function choice_text(col_name, splink_settings) {
  let cc;
  splink_settings.comparison_columns.forEach((d) => {
    if (d.col_name == col_name) {
      cc = d;
    }
  });
  let matches_text;
  let gamma_value = cc["gamma_value"];
  if (gamma_value == 0) {
    matches_text = "does not match";
  } else {
    matches_text = "matches";
  }
  return md`You have chosen that the column \`${col_name}\` ${matches_text}, i.e. that ${tex`\gamma_\text{${col_name}}`} = ${gamma_value}.`;
}
)}

function _inputs(require){return(
require("@observablehq/inputs")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("title")).define("title", ["md"], _title);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("para_1")).define("para_1", ["md","texd"], _para_1);
  main.variable(observer("para_2")).define("para_2", ["md"], _para_2);
  main.variable(observer("para_3")).define("para_3", ["md"], _para_3);
  main.variable(observer("para_4")).define("para_4", ["md"], _para_4);
  main.variable(observer("subhead_1")).define("subhead_1", ["md"], _subhead_1);
  main.variable(observer("para_5")).define("para_5", ["md","m","nm","tex"], _para_5);
  main.variable(observer("lam_view")).define("lam_view", ["viewof lam"], _lam_view);
  main.variable(observer("treemap_1")).define("treemap_1", ["plot_treemap","splink_settings"], _treemap_1);
  main.variable(observer("para_6")).define("para_6", ["md","texd","color_match","color_non_match","splink_settings"], _para_6);
  main.variable(observer("subhead_2")).define("subhead_2", ["md"], _subhead_2);
  main.variable(observer("para_7")).define("para_7", ["md"], _para_7);
  main.variable(observer("fname_view")).define("fname_view", ["viewof fname_val"], _fname_view);
  main.variable(observer("para_8")).define("para_8", ["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"], _para_8);
  main.variable(observer("treemap_2")).define("treemap_2", ["plot_treemap","splink_settings"], _treemap_2);
  main.variable(observer("para_9")).define("para_9", ["md","m","texd","color_match","color_non_match","tex","get_m_u_formula_numbers","get_row","splink_settings"], _para_9);
  main.variable(observer("subhead_3")).define("subhead_3", ["md"], _subhead_3);
  main.variable(observer("para_10")).define("para_10", ["md"], _para_10);
  main.variable(observer("sname_view")).define("sname_view", ["viewof sname_val"], _sname_view);
  main.variable(observer("para_11")).define("para_11", ["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"], _para_11);
  main.variable(observer("treemap_3")).define("treemap_3", ["plot_treemap","splink_settings"], _treemap_3);
  main.variable(observer("para_12")).define("para_12", ["md","texd","color_match","color_non_match","get_m_u_formula_numbers","get_row","splink_settings"], _para_12);
  main.variable(observer("subhead_4")).define("subhead_4", ["md"], _subhead_4);
  main.variable(observer("dob_view")).define("dob_view", ["viewof dob_val"], _dob_view);
  main.variable(observer("para_13")).define("para_13", ["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"], _para_13);
  main.variable(observer("treemap_4")).define("treemap_4", ["plot_treemap","splink_settings"], _treemap_4);
  main.variable(observer("para_14")).define("para_14", ["md","texd","get_m_u_formula_numbers","get_row","splink_settings"], _para_14);
  main.variable(observer("subhead_5")).define("subhead_5", ["md"], _subhead_5);
  main.variable(observer("town_view")).define("town_view", ["viewof town_val"], _town_view);
  main.variable(observer("para_15")).define("para_15", ["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"], _para_15);
  main.variable(observer("treemap_5")).define("treemap_5", ["plot_treemap","splink_settings"], _treemap_5);
  main.variable(observer("para_16")).define("para_16", ["md","texd","tex","get_m_u_formula_numbers","get_row","splink_settings"], _para_16);
  main.variable(observer("annex")).define("annex", ["md","tex","texd"], _annex);
  main.variable(observer("texd")).define("texd", ["tex"], _texd);
  main.variable(observer("css_styles")).define("css_styles", ["html","color_match","color_non_match"], _css_styles);
  const child1 = runtime.module(define1);
  main.import("default_settings", child1);
  main.variable(observer("get_row")).define("get_row", ["splink_settings"], _get_row);
  main.variable(observer("get_row_no_gammas")).define("get_row_no_gammas", ["get_row"], _get_row_no_gammas);
  const child2 = runtime.module(define2);
  main.import("get_m_u_formula_symbols", child2);
  main.import("get_m_u_formula_numbers", child2);
  main.import("get_comparison_vector_symbols_and_numbers", child2);
  main.import("get_match_probability_components", child2);
  main.variable(observer("dict_as_md_table_row")).define("dict_as_md_table_row", ["md"], _dict_as_md_table_row);
  const child3 = runtime.module(define1);
  main.import("styles", child3);
  main.import("plot_treemap", child3);
  main.import("color_match", child3);
  main.import("color_non_match", child3);
  main.variable(observer("additional_styles")).define("additional_styles", ["styles"], _additional_styles);
  main.variable(observer("nm")).define("nm", ["html"], _nm);
  main.variable(observer("m")).define("m", ["html"], _m);
  const child4 = runtime.module(define3);
  main.import("splink_settings", child4);
  main.import("viewof lam", child4);
  main.import("lam", child4);
  main.import("viewof fname_val", child4);
  main.import("fname_val", child4);
  main.import("viewof sname_val", child4);
  main.import("sname_val", child4);
  main.import("viewof dob_val", child4);
  main.import("dob_val", child4);
  main.import("viewof town_val", child4);
  main.import("town_val", child4);
  main.import("form_styles", child4);
  main.variable(observer("styles2")).define("styles2", ["form_styles"], _styles2);
  main.variable(observer("get_m_u_text")).define("get_m_u_text", ["m","nm","md"], _get_m_u_text);
  main.variable(observer("choice_text")).define("choice_text", ["md","tex"], _choice_text);
  main.variable(observer("inputs")).define("inputs", ["require"], _inputs);
  return main;
}
