const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/archived-fs-maths.CggQU3f7.js","_astro/NotebookCellProvider.D6sqgwCc.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/step.BThr63Mb.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./preload-helper.zoZ8CRZ9.js";function u(a,t=()=>null){const e=a.module();u.FileAttachment&&e.variable().define("FileAttachment",[],()=>u.FileAttachment);for(const o of u.cells){const i=o.inputs??[],r=o.output;if(o.outputs?.length){const s=`cell ${o.id}`;e.variable(t(null)).define(s,i,o.body);for(const n of o.outputs)e.variable(!0).define(n,[s],d=>d[n])}else if(r)if(o.autoview){const s=r.slice(7),n=`viewof ${s}`;e.variable(t(n)).define(n,i,o.body),e.variable(t(s)).define(s,["Generators",n],(d,m)=>d.input(m))}else e.variable(t(r)).define(r,i,o.body);else e.variable(t(null)).define(i,o.body)}return e}Object.assign(u,{title:"The mathematics of the Fellegi Sunter model",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{inputs:a,example_2_comparison:t,intro_simple_waterfall:e,table_l:o,table_r:i,df_comparisons_1:r,df_gammas_1:s,df_gammas_only_1:n,default_splink_settings:d,get_m_u_formula_symbols:m,get_m_u_formula_numbers:p,get_comparison_vector_symbols_and_numbers:c,get_match_probability_components:f}=await h(()=>import("./archived-fs-maths.CggQU3f7.js"),__vite__mapDeps([0,1,2,3,4])).then(l=>{if(!("inputs"in l))throw new SyntaxError("export 'inputs' not found");if(!("example_2_comparison"in l))throw new SyntaxError("export 'example_2_comparison' not found");if(!("intro_simple_waterfall"in l))throw new SyntaxError("export 'intro_simple_waterfall' not found");if(!("table_l"in l))throw new SyntaxError("export 'table_l' not found");if(!("table_r"in l))throw new SyntaxError("export 'table_r' not found");if(!("df_comparisons_1"in l))throw new SyntaxError("export 'df_comparisons_1' not found");if(!("df_gammas_1"in l))throw new SyntaxError("export 'df_gammas_1' not found");if(!("df_gammas_only_1"in l))throw new SyntaxError("export 'df_gammas_only_1' not found");if(!("default_splink_settings"in l))throw new SyntaxError("export 'default_splink_settings' not found");if(!("get_m_u_formula_symbols"in l))throw new SyntaxError("export 'get_m_u_formula_symbols' not found");if(!("get_m_u_formula_numbers"in l))throw new SyntaxError("export 'get_m_u_formula_numbers' not found");if(!("get_comparison_vector_symbols_and_numbers"in l))throw new SyntaxError("export 'get_comparison_vector_symbols_and_numbers' not found");if(!("get_match_probability_components"in l))throw new SyntaxError("export 'get_match_probability_components' not found");return l});return{inputs:a,example_2_comparison:t,intro_simple_waterfall:e,table_l:o,table_r:i,df_comparisons_1:r,df_gammas_1:s,df_gammas_only_1:n,default_splink_settings:d,get_m_u_formula_symbols:m,get_m_u_formula_numbers:p,get_comparison_vector_symbols_and_numbers:c,get_match_probability_components:f}},inputs:[],outputs:["inputs","example_2_comparison","intro_simple_waterfall","table_l","table_r","df_comparisons_1","df_gammas_1","df_gammas_only_1","default_splink_settings","get_m_u_formula_symbols","get_m_u_formula_numbers","get_comparison_vector_symbols_and_numbers","get_match_probability_components"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:3,mode:"js",body:a=>({title:a`# The mathematics of the Fellegi Sunter model`}),inputs:["md"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:(a,t)=>{const e=a`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known.

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`;return t(e),{para_1:e}},inputs:["md","display"],outputs:["para_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:6,mode:"js",body:(a,t)=>{const e=a`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`;return t(e),{para_2:e}},inputs:["md","display"],outputs:["para_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:7,mode:"js",body:(a,t)=>{const e=a`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`;return t(e),{para_3:e}},inputs:["md","display"],outputs:["para_3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:8,mode:"js",body:(a,t)=>{const e=a;return t(e),{table_l1:e}},inputs:["table_l","display"],outputs:["table_l1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:9,mode:"js",body:(a,t)=>{const e=a`### Dataset 2`;return t(e),{ds2_head:e}},inputs:["md","display"],outputs:["ds2_head"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:10,mode:"js",body:(a,t)=>{const e=a;return t(e),{table_r1:e}},inputs:["table_r","display"],outputs:["table_r1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:11,mode:"js",body:(a,t,e)=>{const o=a`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${t.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.
`;return e(o),{rec_comparisons:o}},inputs:["md","df_comparisons_1","display"],outputs:["rec_comparisons"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:12,mode:"js",body:(a,t,e,o,i,r,s)=>{const n=a`## Comparing columns

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

${o`${i(t.slice(0,1).objects()[0],r)}`}
 `;return s(n),{para_4:n}},inputs:["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings","display"],outputs:["para_4"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:13,mode:"js",body:(a,t)=>{const e=a`## Scoring comparisons`;return t(e),{subhead_1:e}},inputs:["md","display"],outputs:["subhead_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:14,mode:"js",body:(a,t)=>{const e=a`We now need a way of recombining these individual column comparisons into an overall match probability.

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`;return t(e),{para_5:e}},inputs:["md","display"],outputs:["para_5"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:15,mode:"js",body:(a,t,e)=>{const o=a`### m and u probabilities

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
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline = \frac{\operatorname{Pr}(\text{first name matches}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\text{first name matches})}}`}

which, in our notation is:

${t`
\text{posterior} = \operatorname{Pr}(\text{records match}|\text{first name matches}) \newline = \frac{m_\text{first name, level\_1}\lambda}{m_\text{first name, level\_1}\lambda + u_\text{first name, level\_1}(1-\lambda)}`}


`;return e(o),{para_6:o}},inputs:["md","texd","display"],outputs:["para_6"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:16,mode:"js",body:(a,t,e,o)=>{const i=a`We can generalise this formula by using  ${t`\gamma`} to indicate the value of the comparison, the index ${t`k`} to designate the comparison column, and ${t`\ell`} to designate the observed comparison level, we can write:

${e`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{2\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`;return o(i),{para_7:i}},inputs:["md","tex","texd","display"],outputs:["para_7"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:17,mode:"js",body:(a,t)=>{const e=a`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.

We finish this article with a worked example of the probability calculation.`;return t(e),{para_8:e}},inputs:["md","display"],outputs:["para_8"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:18,mode:"js",body:(a,t)=>{const e=a`## Example`;return t(e),{subhead_2:e}},inputs:["md","display"],outputs:["subhead_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:19,mode:"js",body:(a,t)=>{const e=a`
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

`;return t(e),{para_10:e}},inputs:["md","display"],outputs:["para_10"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:20,mode:"js",body:(a,t,e)=>({splink_settings:a(t.textarea({value:e,rows:26,spellcheck:!1}))}),inputs:["view","inputs","default_splink_settings"],outputs:["splink_settings"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:21,mode:"js",body:(a,t)=>{const e=a`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`;return t(e),{para_11:e}},inputs:["md","display"],outputs:["para_11"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:22,mode:"js",body:(a,t,e)=>({row_index:a(t.range([1,e.numRows()],{value:1,label:"Choose record comparison",step:1}))}),inputs:["view","inputs","df_gammas_1"],outputs:["row_index"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:23,mode:"js",body:(a,t,e,o)=>{const i=a`${t.slice(e-1,e).toMarkdown()}`;return o(i),{this_row:i}},inputs:["md","df_comparisons_1","row_index","display"],outputs:["this_row"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:24,mode:"js",body:(a,t,e,o,i,r,s)=>{const n=a`The comparison vector is given by:

${t`${e(o.slice(i-1,i).objects()[0],r)}`}

`;return s(n),{para_12:n}},inputs:["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings","display"],outputs:["para_12"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:25,mode:"js",body:(a,t)=>{const e=a`The formula for match probability is:`;return t(e),{para_13:e}},inputs:["md","display"],outputs:["para_13"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:26,mode:"js",body:(a,t,e,o,i,r)=>{const s=a`${t(e.slice(o-1,o).objects()[0],i)}`;return r(s),{para_14:s}},inputs:["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings","display"],outputs:["para_14"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:27,mode:"js",body:(a,t)=>{const e=a`And substituting in numbers using our specified parameters we get: `;return t(e),{para_15:e}},inputs:["md","display"],outputs:["para_15"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:28,mode:"js",body:(a,t,e,o,i,r)=>{const s=a`${t(e.slice(o-1,o).objects()[0],i)}`;return r(s),{para_16:s}},inputs:["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings","display"],outputs:["para_16"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:29,mode:"js",body:(a,t,e,o,i,r,s)=>{const n=a`i.e. the ${t`\text{estimated match probability} =

${e(o.slice(i-1,i).objects()[0],r).match_probability.toPrecision(4)}

`}

`;return s(n),{para_17:n}},inputs:["md","tex","get_match_probability_components","df_gammas_1","row_index","settings","display"],outputs:["para_17"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:30,mode:"js",body:(a,t)=>{const e=a`<br><br>`;return t(e),{para_18:e}},inputs:["md","display"],outputs:["para_18"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:31,mode:"js",body:(a,t,e,o)=>{const i=a`## Annex:  Bayes Theorem

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
`;return o(i),{para_19:i}},inputs:["md","texd","tex","display"],outputs:["para_19"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:33,mode:"js",body:a=>({texd:a.options({displayMode:!0,fleqn:!0})}),inputs:["tex"],outputs:["texd"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:35,mode:"js",body:a=>({settings:JSON.parse(a)}),inputs:["splink_settings"],outputs:["settings"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:36,mode:"js",body:(a,t)=>{const e=a`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`;return t(e),{css_styles:e}},inputs:["html","display"],outputs:["css_styles"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{u as default};
