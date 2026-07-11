const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ea6530af059f37be@231.notebook.Bp9dG5HC.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/d25176b0fe784ad0@488.notebook.BSCAsC4S.js","_astro/index.BXWY-sTu.js","_astro/NotebookCellProvider.BwccWe4F.js","_astro/vega-embed.module.CqX21S21.js","_astro/NotebookCellProvider.BmMInUOO.css","_astro/first-names.DcFeF8Dk.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper.zoZ8CRZ9.js";function _(a){let e,t,o,i=!1;const n=a(s=>{o=s,e?(e(s),e=t=void 0):i=!0});return{async next(){return{done:!1,value:await(i?(i=!1,o):new Promise((s,r)=>(e=s,t=r)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,n?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function b(a){let e;return Object.defineProperty(_(t=>{e=t,a!==void 0&&t(a)}),"value",{get:()=>a,set:t=>(a=t,e?.(a))})}function y(a){const e=b(a);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function d(a,e=()=>null){const t=a.module();d.FileAttachment&&t.variable().define("FileAttachment",[],()=>d.FileAttachment);for(const o of d.cells){const i=o.inputs??[],n=o.output;if(o.outputs?.length){const s=`cell ${o.id}`;t.variable(e(null)).define(s,i,o.body);for(const r of o.outputs)t.variable(!0).define(r,[s],l=>l[r])}else if(n)if(o.autoview){const s=n.slice(7),r=`viewof ${s}`;t.variable(e(r)).define(r,i,o.body),t.variable(e(s)).define(s,["Generators",r],(l,p)=>l.input(p))}else if(o.automutable){const s=n.slice(8),r=`cell ${o.id}`;t.define(n,i,o.body),t.define(r,[n],y),t.variable(e(s)).define(s,[r],([l])=>l),t.variable(!0).define(`mutable$${s}`,[r],([,l])=>l)}else t.variable(e(n)).define(n,i,o.body);else t.variable(e(null)).define(i,o.body)}return t}Object.assign(d,{title:"@robinl/understanding-match-weights: 86fc30325e4106c4@853.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async a=>{const{example_2_comparison:e,intro_simple_waterfall:t,table_l:o,table_r:i,df_1_l:n,df_1_r:s,df_comparisons_1:r,df_gammas_1:l,df_gammas_only_1:p}=await c(()=>import("./ea6530af059f37be@231.notebook.Bp9dG5HC.js"),__vite__mapDeps([0,1,2])).then(h=>{const u=a._module._runtime.module(h.default),m=new Map(Array.from(a._outputs,f=>[f._name,f]));return m.get("example_2_comparison")?.import("example_2_comparison",u),m.get("intro_simple_waterfall")?.import("intro_simple_waterfall",u),m.get("table_l")?.import("table_l",u),m.get("table_r")?.import("table_r",u),m.get("df_1_l")?.import("df_1_l",u),m.get("df_1_r")?.import("df_1_r",u),m.get("df_comparisons_1")?.import("df_comparisons_1",u),m.get("df_gammas_1")?.import("df_gammas_1",u),m.get("df_gammas_only_1")?.import("df_gammas_only_1",u),{}});return{example_2_comparison:e,intro_simple_waterfall:t,table_l:o,table_r:i,df_1_l:n,df_1_r:s,df_comparisons_1:r,df_gammas_1:l,df_gammas_only_1:p}},inputs:["@variable"],outputs:["example_2_comparison","intro_simple_waterfall","table_l","table_r","df_1_l","df_1_r","df_comparisons_1","df_gammas_1","df_gammas_only_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"js",body:async a=>{const{get_m_u_formula_symbols:e,get_m_u_formula_numbers:t,get_comparison_vector_symbols_and_numbers:o,get_match_probability_components:i}=await c(()=>import("./d25176b0fe784ad0@488.notebook.BSCAsC4S.js"),__vite__mapDeps([3,1,2,4,5,6,7,8])).then(n=>{const s=a._module._runtime.module(n.default),r=new Map(Array.from(a._outputs,l=>[l._name,l]));return r.get("get_m_u_formula_symbols")?.import("get_m_u_formula_symbols",s),r.get("get_m_u_formula_numbers")?.import("get_m_u_formula_numbers",s),r.get("get_comparison_vector_symbols_and_numbers")?.import("get_comparison_vector_symbols_and_numbers",s),r.get("get_match_probability_components")?.import("get_match_probability_components",s),{}});return{get_m_u_formula_symbols:e,get_m_u_formula_numbers:t,get_comparison_vector_symbols_and_numbers:o,get_match_probability_components:i}},inputs:["@variable"],outputs:["get_m_u_formula_symbols","get_m_u_formula_numbers","get_comparison_vector_symbols_and_numbers","get_match_probability_components"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:3,mode:"ojs",body:function(e){return e`# The mathematics of the Fellegi Sunter model`},inputs:["md"],outputs:void 0,output:"title",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(a){return a`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/maths_of_fellegi_sunter/).*`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(e){return e`In this article, we present an implementation of [Fellegi and Sunter's model of probabilistic record linkage](https://courses.cs.washington.edu/courses/cse590q/04au/papers/Felligi69.pdf) (1969).  

We build up a simple Fellegi Sunter (FS) model piece by piece, demonstrating how it can be used to compute match probabilities. In this article, we assume parameters of the model are known. 

A more technical treatment is given in [AP	Enamorado, T., Fifield, B., & Imai, K. (2019)](https://imai.fas.harvard.edu/research/files/linkage.pdf), which contains a generalised form of the model.`},inputs:["md"],outputs:void 0,output:"para_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e){return e`## Objective of the Model

The input to the FS model is a dataset of pairwise record comparisons.

The aim of the model is to estimate a 'match probability' for each pairwsie comparison, which quantifies the likelihood the two records  represent the same entity.`},inputs:["md"],outputs:void 0,output:"para_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e){return e`## Set up

The FS model can be used to link and/or deduplicate one or more datasests. In what follows, let's assume we have two datasets we wish to link:

✨<span style="background-color:yellow">You can edit the records in the tables, and all of the subsequent calculations will update accordingly.</span>✨

### Dataset 1

`},inputs:["md"],outputs:void 0,output:"para_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e){return e},inputs:["table_l"],outputs:void 0,output:"table_l1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e){return e`### Dataset 2`},inputs:["md"],outputs:void 0,output:"ds2_head",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e){return e},inputs:["table_r"],outputs:void 0,output:"table_r1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t){return e`

To be compatible with the FS model, the input data must be converted into pairwise comparisons as follows:

### Record comparisons

${t.view()}
<br>
This table compares every row in dataset 1 to every row in dataset 2.  
`},inputs:["md","df_comparisons_1"],outputs:void 0,output:"rec_comparisons",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t,o,i,n,s){return e`## Comparing columns

We need a mathematical way of evaluating these pairwise comparisons - a function that takes the comparisons as an input, and outputs match probabilities.  

The FS model solves this problem by comparing the records column by column, and assigning each comparison to two or more 'similarity levels'.

A simple example of a two-level comparison rule for a column may be:

- If the values in the column exactly match, assign the comparison to similarity level 1
- Otherwise assign the comparison to similarity level 0

In the following table, we apply this simple rule to every column. The comparisons are denoted with the prefix \`𝛾_\` because the mathematical symbol gamma is often used in the literate to represent comparisons.

${t.view()}

<br>

Now that we have a numeric representation of the comparisons, the model makes no further use of the raw data, instead using only the values in the 𝛾 columns: 

${o.view()}   
<br>
For each row in this table, the set of gamma values is known as the 'comparison vector'.  For example, the comparison vector for the first row in the table is:

${i`${n(t.slice(0,1).objects()[0],s)}`}
 `},inputs:["md","df_gammas_1","df_gammas_only_1","texd","get_comparison_vector_symbols_and_numbers","settings"],outputs:void 0,output:"para_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e){return e`## Scoring comparisons`},inputs:["md"],outputs:void 0,output:"subhead_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e){return e`We now need a way of recombining these individual column comparisons into an overall match probability.  

We will want this approach to account for the differing importance of columns.  For example, a match on gender is less informative than a match on date of birth.

The FS model approaches this problem by estimating match weights for each individual column and combining these match weights.  

By assuming mutual independence of the features, each column can be accounted for separately, dramatically simplifying the maths.  

In particular, this assumption makes the model equivalent to a [Naïve Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) classifier.  This allows the match probability to be expressed as a repeated multiplication of conditional probabilities. Further mathmetical details can be found [here](https://en.wikipedia.org/wiki/Naive_Bayes_classifier#Probabilistic_model).

In our case, 'mutual independence of features' means that linkage variables must be independent given the match status.  

This would be violated if amongst matching records, a typo on first name was correlated with a typo on surname.  Another  violation often occurs with addresses if they are separated into multiple columns: Amongst matching records, a match on postcode typically implies a match on town.  

To further understand how we account for each comparison column in the computation of match probability, we need to introduce the concept of \`m\` and \`u\` probabilities.
`},inputs:["md"],outputs:void 0,output:"para_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t){return e`### m and u probabilities 

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


`},inputs:["md","texd"],outputs:void 0,output:"para_6",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e,t,o){return e`We can generalise this formula by using  ${t`\gamma`} to indicate the value of the comparison, the index ${t`k`} to designate the comparison column, and ${t`\ell`} to designate the observed comparison level, we can write:

${o`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{k}) \newline = \frac{\lambda m_{k\ell}}{\lambda m_{k\ell}+ u_{k\ell}(1-\lambda)}`}

Finally, by assuming conditional independence among linkage variables given the match status, we can account for more than one comparison column.  For instance, in the case of two comparison columns

${o`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) \newline = \frac{\operatorname{Pr}(\gamma_{1}|\text{records match})\operatorname{Pr}(\gamma_{2}|\text{records match})\operatorname{Pr}(\text{records match})}{\operatorname{Pr}{(\gamma_{1},\gamma_{2})}}`}

Leading to the following formula that takes into account all column comparisons:

#### Equation 1:
${o`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}


This equation provides the output of the Fellegi Sunter model - an estimate of the probability that two records match given the information contained

`},inputs:["md","tex","texd"],outputs:void 0,output:"para_7",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return e`In subsequent articles, we use the concepts of m and u probabilities to discuss the intuition behind match weights, and present graphical ways of interpreting the values.  

We finish this article with a worked example of the probability calculation.`},inputs:["md"],outputs:void 0,output:"para_8",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e){return e`## Example`},inputs:["md"],outputs:void 0,output:"subhead_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e){return e`
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

`},inputs:["md"],outputs:void 0,output:"para_10",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e,t){return e.textarea({value:t,rows:26,spellcheck:!1})},inputs:["inputs","default_splink_settings"],outputs:void 0,output:"viewof$splink_settings",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e){return e`We will now present a worked example of the calculation of match probability for the following pairwise record comparison.  


✨<span style="background-color:yellow">You may change the record comparison using the control below</span>✨
`},inputs:["md"],outputs:void 0,output:"para_11",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e,t){return e.range([1,t.numRows()],{value:1,label:"Choose record comparison",step:1})},inputs:["inputs","df_gammas_1"],outputs:void 0,output:"viewof$row_index",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e,t,o){return e`${t.slice(o-1,o).toMarkdown()}`},inputs:["md","df_comparisons_1","row_index"],outputs:void 0,output:"this_row",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e,t,o,i,n,s){return e`The comparison vector is given by:

${t`${o(i.slice(n-1,n).objects()[0],s)}`}

`},inputs:["md","texd","get_comparison_vector_symbols_and_numbers","df_gammas_1","row_index","settings"],outputs:void 0,output:"para_12",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e){return e`The formula for match probability is:`},inputs:["md"],outputs:void 0,output:"para_13",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e,t,o,i,n){return e`${t(o.slice(i-1,i).objects()[0],n)}`},inputs:["texd","get_m_u_formula_symbols","df_gammas_1","row_index","settings"],outputs:void 0,output:"para_14",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(e){return e`And substituting in numbers using our specified parameters we get: `},inputs:["md"],outputs:void 0,output:"para_15",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(e,t,o,i,n){return e`${t(o.slice(i-1,i).objects()[0],n)}`},inputs:["texd","get_m_u_formula_numbers","df_gammas_1","row_index","settings"],outputs:void 0,output:"para_16",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:29,mode:"ojs",body:function(e,t,o,i,n,s){return e`i.e. the ${t`\text{estimated match probability} = 

${o(i.slice(n-1,n).objects()[0],s).match_probability.toPrecision(4)}

`}

`},inputs:["md","tex","get_match_probability_components","df_gammas_1","row_index","settings"],outputs:void 0,output:"para_17",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:30,mode:"ojs",body:function(e){return e`<br><br>`},inputs:["md"],outputs:void 0,output:"para_18",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:31,mode:"ojs",body:function(e,t,o){return e`## Annex:  Bayes Theorem

Recall that Bayes Theorem is given by:

${t`
\operatorname{Pr}(a|b) = {\frac{\operatorname{Pr}(b|a)\operatorname{Pr}(a)}{\operatorname{Pr}{(b)}}}`} 


or , in words: 

${t`
\text{posterior} = \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}`}

In the context of record linkage, we can describe these parts as:

**Prior**:
The overall proportion of comparisons which are matches ${o`\operatorname{Pr}(\text{match})`}.

**Evidence**: We have observed that e.g. first name matches, ${o`\operatorname{Pr}(\text{first name matches})`}.

**Likelihood**: The probability that first name matches amongst matches, given by ${o`\operatorname{Pr}(\text{first name matches}|\text{records match})`}.  

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
`},inputs:["md","texd","tex"],outputs:void 0,output:"para_19",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:32,mode:"ojs",body:function(a){return a`## Calculations and code`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:33,mode:"ojs",body:function(e){return e.options({displayMode:!0,fleqn:!0})},inputs:["tex"],outputs:void 0,output:"texd",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:34,mode:"ojs",body:function(){return`{
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
  
  }`},inputs:[],outputs:void 0,output:"default_splink_settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:35,mode:"ojs",body:function(e){return JSON.parse(e)},inputs:["splink_settings"],outputs:void 0,output:"settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:36,mode:"ojs",body:function(e){return e`<style>
.katex-display>.katex { font-size: 1em}
.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`},inputs:["html"],outputs:void 0,output:"css_styles",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:37,mode:"ojs",body:function(e){return e("@observablehq/inputs")},inputs:["require"],outputs:void 0,output:"inputs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{d as default};
