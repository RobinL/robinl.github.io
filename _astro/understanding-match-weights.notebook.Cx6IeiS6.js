const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/archived-match-weights.B2bQ-TIw.js","_astro/NotebookCellProvider.D6sqgwCc.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/step.BThr63Mb.js","_astro/vega-embed.module.DiVocoQ4.js","_astro/_commonjsHelpers.DaWZu8wl.js","_astro/feature.DXDMwmIR.js","_astro/observable-vega-embed.Ca3N63KR.js","_astro/charts.Dm-LFNDN.js","_astro/model.J3o_o32z.js","_astro/conversions.Bfww4GX_.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./preload-helper.zoZ8CRZ9.js";function l(a,e=()=>null){const t=a.module();l.FileAttachment&&t.variable().define("FileAttachment",[],()=>l.FileAttachment);for(const o of l.cells){const i=o.inputs??[],n=o.output;if(o.outputs?.length){const r=`cell ${o.id}`;t.variable(e(null)).define(r,i,o.body);for(const s of o.outputs)t.variable(!0).define(s,[r],d=>d[s])}else if(n)if(o.autoview){const r=n.slice(7),s=`viewof ${r}`;t.variable(e(s)).define(s,i,o.body),t.variable(e(r)).define(r,["Generators",s],(d,u)=>d.input(u))}else t.variable(e(n)).define(n,i,o.body);else t.variable(e(null)).define(i,o.body)}return t}Object.assign(l,{title:"Understanding match weights",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{inputs:a,default_splink_settings:e,get_m_u_chart:t,get_bayes_factor_chart:o,get_waterfall_chart:i,get_match_probability_components:n,comparisonRow:r}=await p(()=>import("./archived-match-weights.B2bQ-TIw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(s=>{if(!("inputs"in s))throw new SyntaxError("export 'inputs' not found");if(!("default_splink_settings"in s))throw new SyntaxError("export 'default_splink_settings' not found");if(!("get_m_u_chart"in s))throw new SyntaxError("export 'get_m_u_chart' not found");if(!("get_bayes_factor_chart"in s))throw new SyntaxError("export 'get_bayes_factor_chart' not found");if(!("get_waterfall_chart"in s))throw new SyntaxError("export 'get_waterfall_chart' not found");if(!("get_match_probability_components"in s))throw new SyntaxError("export 'get_match_probability_components' not found");if(!("comparisonRow"in s))throw new SyntaxError("export 'comparisonRow' not found");return s});return{inputs:a,default_splink_settings:e,get_m_u_chart:t,get_bayes_factor_chart:o,get_waterfall_chart:i,get_match_probability_components:n,comparisonRow:r}},inputs:[],outputs:["inputs","default_splink_settings","get_m_u_chart","get_bayes_factor_chart","get_waterfall_chart","get_match_probability_components","comparisonRow"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:(a,e)=>{const t=a`# Understanding match weights`;return e(t),{title:t}},inputs:["md","display"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:6,mode:"js",body:(a,e)=>{const t=a`Some columns are more important than others to the calculation of overall match probability.  For example, a match on date of birth provides stronger evidence in favour of a match than a match on gender.

The relative importance of columns is quantified in a model's _match weights_.

In this article, we explore the concept of match weights, using visualisations to help build intuition for how they work.

The annex to this article presents the maths for how our implementation of the Fellegi Sunter model can be decomposed into a series of match weights.

`;return e(t),{para_1:t}},inputs:["md","display"],outputs:["para_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:7,mode:"js",body:(a,e,t)=>{const o=a`## Match weights

A single comparison column provides evidence in favour or against a match, but this evidence is rarely conclusive.  The ambiguity arises because any observation on the comparison column is consistent with two possibilities.



- **A match on a column is consistent with the possibility that the entities match, but could also be due to two different entities sharing the same information (a 'collision').**

  The comparative likelihood of these two possibilities is a measure of the amount of evidence in favour of a match.  That is, we want to compare:

  ${e`\operatorname{Pr}(\text{column matches}|\text{records match})`} vs. ${e`\operatorname{Pr}(\text{column matches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${e`m_\text{col, level 1}`} vs. ${e`u_\text{col, level 1}`}.


- **A non-match on a column is consistent with the possibility the entities differ, but could also be due to typos or other variations in how information has been recorded about the same entity.**

   The comparative likelihood of these two possibilities is a measure of the amount of evidence against a match.

    ${e`\operatorname{Pr}(\text{column mismatches}|\text{records match})`} vs. ${e`\operatorname{Pr}(\text{column mismatches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${e`m_\text{col, level 0}`} vs. ${e`u_\text{col, level 0}`}.

We use the ratio of these values to compare their magnitude.  This ratio is known as a Bayes Factor.

`;return t(o),{para_2:o}},inputs:["md","tex","display"],outputs:["para_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:8,mode:"js",body:(a,e,t,o)=>{const i=a`## Bayes Factors

Mathematically we can define the [Bayes Factor](https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/) for a given comparison column as:

${e`K_\text{col, level} =  \frac{m_\text{col, level}}{u_\text{col, level}}= \frac{\operatorname{Pr}(\gamma_\text{col,level}|\text{records match})}{\operatorname{Pr}(\gamma_\text{col,level}|\text{records do not match})}`}


Bayes factors can be explained in words.  For example, a Bayes Factor of 20 for a given column means that an overall match is now 20 times more probable.  A Bayes Factor of ${t`\frac{1}{10}`} for a given column means an overall match is 10 times less probable.

In this sense, a Bayes Factor is are similar to the concept of odds.  Odds of 4 mean that an even happens four out of five times, or in some sense it is four times more likely for the even to happen than not happen.

However, Bayes Factors differ from odds in that they are only meaningful in the context of a prior.  A Bayes Factor is an adjustment - it tells us something is more or less likely.  But we need a starting value - otherwise there's nothing to apply the adjustment to.

Let's see how this works:


`;return o(i),{para_3:i}},inputs:["md","texd","tex","display"],outputs:["para_3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:9,mode:"js",body:(a,e)=>({prior:a(e.range([0,1],{step:.01,label:"prior probability =",value:.5}))}),inputs:["view","inputs"],outputs:["prior"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:10,mode:"js",body:(a,e,t)=>({m:a(e.range([0,1],{step:.01,label:t`m_\text{col, level} =`,value:.8}))}),inputs:["view","inputs","tex"],outputs:["m"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:11,mode:"js",body:(a,e,t)=>({u:a(e.range([0,1],{step:.01,label:t`u_\text{col, level} =`,value:.2}))}),inputs:["view","inputs","tex"],outputs:["u"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:12,mode:"js",body:(a,e,t,o)=>{const i=a`\text{Bayes Factor} = \frac{m_\text{col, level}}{u_\text{col, level}} = \frac{${e}}{${t}} = ${(e/t).toPrecision(4)} `;return o(i),{bf:i}},inputs:["tex","m","u","display"],outputs:["bf"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:13,mode:"js",body:(a,e,t,o,i)=>{const n=a`\text{posterior} = \frac{\text{prior}\times m}{\text{prior}\times m + (1-\text{prior})\times u}= ${(e*t/(e*t+(1-e)*o)).toPrecision(4)}`;return i(n),{post:n}},inputs:["tex","prior","m","u","display"],outputs:["post"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:14,mode:"js",body:(a,e)=>{const t=a`## Match weights`;return e(t),{subhead_1:t}},inputs:["md","display"],outputs:["subhead_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:15,mode:"js",body:(a,e,t)=>{const o=a`Finally, it can be convenient to take the logarithm of Bayes Factors because this [enables match weights to be added together](https://math.stackexchange.com/questions/965500/intuitive-understanding-of-logarithms) rather than being multiplied.

${e`\text{match weight for dob} =  \log(K_\text{col, level})`}

This transformation is also useful for visualising match weights.  Bayes factors are difficult to represent on a single scale becuse they represent ratios, which can be very large or very tiny, whereas log bayes factors can easily be viewed and compared on a single scale.
`;return t(o),{para_4:o}},inputs:["md","texd","display"],outputs:["para_4"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:16,mode:"js",body:(a,e,t,o)=>{const i=a`## Determinants of match weights

### Column matches

Where a column matches, the key determinant of match weight is the cardinality of the column (the number of unique values).

For example, imagine we are linking a dataset of children, and consider the date of birth field.

The Bayes Factor is ${e`\frac{m_\text{dob, level 1}}{u_\text{dob, level 1}}`}

The numerator is the probability that date of birth matches amongst records which truly match.

This is likely to be high.  With good data quality it will approach 1.0, and even with poor data quality it's likely to be above 0.8.

The term ${e`u_\text{dob, level 1}`} is the probability that date of birth matches amongst records which do not match.


This is likely to be very small.  If the children are aged below 18, then there will be ${e`18 \times 365`} = ${6570 .toLocaleString()} different dates of birth.  We can therefore estimate that:

${t`u_\text{dob, level 1} = \frac{1}{${6570}} = ${.00015220700152207003.toPrecision(4)}`}

Let's assume that the numerator is 0.9.  The Bayes Factor would be ${e`\frac{0.9}{${.00015220700152207003.toPrecision(4)}}`} = ${5913}  i.e. very strong evidence in favour of a match.

The denominator drives this result - the precise value of the numerator does not matter much.

### Column does not match

Where a column does not match, the key deterinant of match weight is the probability of mismatches among records that truly match.  This could be due to typos, transcription errors, or other reasons for variation in data (e.g. change of address).  Loosely speaking, this is a measure of data quality.

For example, imagine we are linking a large dataset of people, and consider the gender field.  Imagine this is recorded with high precision, and for the sake of this example, suppose no-one in the dataset has changed their gender.

The Bayes Factor is ${e`\frac{m_\text{gender, level 0}}{u_\text{gender, level 0}}`}

The numerator tells us how often we observe a mismatch on gender amongst truly matching records.  Since data is entered with high precision, this number is low.  Let's say the rate of error is one in a thousand.

The denominator tells us how often we observe a mismatch on gender among truly non-matching records.  For gender this is likely to be around 0.5.  Note that the denominator would generally be a high number (almost always in the range 0.5 - 1.0) irrespective of the column type.

The Bayes Factor would be ${e`\frac{0.001}{0.5}`} = ${.002}  .  This is very strong evidence against a match.

The numerator drives this result - the precise value of the denominator does not matter.


`;return o(i),{para_5:i}},inputs:["md","tex","texd","display"],outputs:["para_5"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:17,mode:"js",body:(a,e)=>{const t=a`## Visualising match weights`;return e(t),{subhead_2:t}},inputs:["md","display"],outputs:["subhead_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:18,mode:"js",body:(a,e)=>{const t=a`These concepts allow us to succinctly summarise the m and u values and match weights of a Fellegi Sunter model graphically.  For instance, consider the following model: (*You may adjust the m and u values*):`;return e(t),{para_6:t}},inputs:["md","display"],outputs:["para_6"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:19,mode:"js",body:(a,e)=>{const t=a`This allows a succinct visualisation of the match weights for a Fellegi Sunter model as follows.  You may edit these values to see how they affect the charts.`;return e(t),{para_7:t}},inputs:["md","display"],outputs:["para_7"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:20,mode:"js",body:(a,e,t)=>({splink_settings:a(e.textarea({value:t,rows:26,spellcheck:!1}))}),inputs:["view","inputs","default_splink_settings"],outputs:["splink_settings"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:21,mode:"js",body:(a,e)=>{const t=a`The m and u probabilities can be shown in the following chart:`;return e(t),{para_8:t}},inputs:["md","display"],outputs:["para_8"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:22,mode:"js",body:async(a,e,t)=>{const o=await a(JSON.parse(e));return t(o),{chart_1:o}},inputs:["get_m_u_chart","splink_settings","display"],outputs:["chart_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:23,mode:"js",body:(a,e)=>{const t=a`And the Bayes Factors can be visualised as follows:`;return e(t),{para_9:t}},inputs:["md","display"],outputs:["para_9"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:24,mode:"js",body:async(a,e,t)=>{const o=await a(JSON.parse(e));return t(o),{chart_2:o}},inputs:["get_bayes_factor_chart","splink_settings","display"],outputs:["chart_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:25,mode:"js",body:(a,e)=>{const t=a`## Waterfall chart

Finally, for given values of the comparison columns, we can use the log 2 Bayes Factors to plot a chart that shows the calculation of the final probability.  The log 2 Bayes Factor is on the right hand access, and the probability is shown on the right hand axis.  Hover over the bars for more information.`;return e(t),{para_10:t}},inputs:["md","display"],outputs:["para_10"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:26,mode:"js",body:(a,e)=>({fname_radio:a(e.radio(["Values do not match","Values match"],{label:"Comparison of fname column",value:"Values match"}))}),inputs:["view","inputs"],outputs:["fname_radio"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:27,mode:"js",body:(a,e)=>({sname_radio:a(e.radio(["Values do not match","Values match"],{label:"Comparison of sname column",value:"Values match"}))}),inputs:["view","inputs"],outputs:["sname_radio"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:28,mode:"js",body:(a,e)=>({dob_radio:a(e.radio(["Values do not match","Values match"],{label:"Comparison of dob column",value:"Values match"}))}),inputs:["view","inputs"],outputs:["dob_radio"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:29,mode:"js",body:(a,e)=>({town_radio:a(e.radio(["Values do not match","Values match"],{label:"Comparison of town column",value:"Values do not match"}))}),inputs:["view","inputs"],outputs:["town_radio"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:30,mode:"js",body:async(a,e,t,o)=>{const i=await a(e,JSON.parse(t),{height:300},!1);return o(i),{chart_3:i}},inputs:["get_waterfall_chart","row","splink_settings","display"],outputs:["chart_3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:31,mode:"js",body:(a,e,t,o,i)=>{const n=a`Final match probability:
${e(t,JSON.parse(o)).match_probability.toPrecision(4)}`;return i(n),{para_11:n}},inputs:["md","get_match_probability_components","row","splink_settings","display"],outputs:["para_11"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:32,mode:"js",body:(a,e)=>{const t=a`## Mathematical annex: Rewriting the Fellegi Sunter formula in terms of odds, and Bayes Factors`;return e(t),{annex:t}},inputs:["md","display"],outputs:["annex"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:33,mode:"js",body:(a,e,t)=>{const o=a`In this section, we show why it is possible to compute match probabilities by adding together log2 Bayes Factors.

Start with our equation for match probability:

${e`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{2\ell} \ldots u_{K\ell}}\tag{1.1} `}

And note that we could similarly define:

${e`
\operatorname{Pr}(\text{records do not match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{2\ell} \ldots u_{K\ell}}\tag{1.2} `}

`;return t(o),{para_12:o}},inputs:["md","texd","display"],outputs:["para_12"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:34,mode:"js",body:(a,e,t)=>{const o=a`Now we introduce the [formula for odds](https://en.wikipedia.org/wiki/Odds#Statistical_usage):

${e`\text{odds} = \frac{p}{1-p}`}
where p is probability.


For example odds of 4 mean that this event happens 4 out of 5 times, which correponds to a probability of 80%.

Dividing (1.1) by (1.2) we see that:

${e`
\text{odds}(\text{records  match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}\tag{1.3} `}

Also recall that the Bayes Factor for column i can be defined as:
${e`b_{i\ell}=\frac{m_{i\ell}}{u_{i\ell}}`}
so we can write the odds that records match as :

${e`
\text{odds of match} = \frac{\lambda }{(1-\lambda) } b_{1\ell}b_{2\ell}\ldots b_{K\ell}\tag{1.4} `}


Which can then be converted into a probability using:

${e`p = \frac{\text{odds}}{1+\text{odds}}`}

Sometimes it can also be convenient to use log odds, because these can be computed with addition rather than multiplication:

${e`
\text{log odds of match} = \log{(\frac{\lambda }{(1-\lambda) })} \log({b_{1\ell}})+\log({b_{2\ell}})+\ldots +\log({b_{K\ell})}\tag{1.5} `}

This final representation is what is used in the waterfall chart to represent the computation of match probability
`;return t(o),{para_13:o}},inputs:["md","texd","display"],outputs:["para_13"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:35,mode:"js",body:a=>({texd:a.options({displayMode:!0,fleqn:!0})}),inputs:["tex"],outputs:["texd"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:36,mode:"js",body:(a,e)=>{const t=a`<style>
.katex-display>.katex { font-size: 1em}
.katex-display {
    max-width: None;
}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`;return e(t),{css_styles:t}},inputs:["html","display"],outputs:["css_styles"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:37,mode:"js",body:(a,e,t,o,i)=>({row:a(e,t,o,i)}),inputs:["comparisonRow","fname_radio","sname_radio","dob_radio","town_radio"],outputs:["row"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{l as default};
