const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ea6530af059f37be@231.notebook.BNzXBGLr.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/843cb6e82d7c3d9b@474.notebook.BC1-Bcux.js","_astro/index.BDtHx5Iu.js","_astro/NotebookCellProvider.DFvcJ7k9.js","_astro/vega-embed.module.CqX21S21.js","_astro/first-names.DcFeF8Dk.js","_astro/86fc30325e4106c4@853.notebook.CIPy3U_K.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./preload-helper.zoZ8CRZ9.js";function f(a){let e,t,o,s=!1;const i=a(u=>{o=u,e?(e(u),e=t=void 0):s=!0});return{async next(){return{done:!1,value:await(s?(s=!1,o):new Promise((u,l)=>(e=u,t=l)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,i?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function c(a){let e;return Object.defineProperty(f(t=>{e=t,a!==void 0&&t(a)}),"value",{get:()=>a,set:t=>(a=t,e?.(a))})}function p(a){const e=c(a);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function d(a,e=()=>null){const t=a.module();d.FileAttachment&&t.variable().define("FileAttachment",[],()=>d.FileAttachment);for(const o of d.cells){const s=o.inputs??[],i=o.output;if(o.outputs?.length){const u=`cell ${o.id}`;t.variable(e(null)).define(u,s,o.body);for(const l of o.outputs)t.variable(!0).define(l,[u],n=>n[l])}else if(i)if(o.autoview){const u=i.slice(7),l=`viewof ${u}`;t.variable(e(l)).define(l,s,o.body),t.variable(e(u)).define(u,["Generators",l],(n,m)=>n.input(m))}else if(o.automutable){const u=i.slice(8),l=`cell ${o.id}`;t.define(i,s,o.body),t.define(l,[i],p),t.variable(e(u)).define(u,[l],([n])=>n),t.variable(!0).define(`mutable$${u}`,[l],([,n])=>n)}else t.variable(e(i)).define(i,s,o.body);else t.variable(e(null)).define(s,o.body)}return t}Object.assign(d,{title:"@robinl/understanding-match-weights: 94c3728fad39c9e8@644.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async a=>{const{intro_simple_waterfall:e}=await r(()=>import("./ea6530af059f37be@231.notebook.BNzXBGLr.js"),__vite__mapDeps([0,1,2])).then(t=>{const o=a._module._runtime.module(t.default);return new Map(Array.from(a._outputs,i=>[i._name,i])).get("intro_simple_waterfall")?.import("intro_simple_waterfall",o),{}});return{intro_simple_waterfall:e}},inputs:["@variable"],outputs:["intro_simple_waterfall"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"js",body:async a=>{const{get_m_u_chart:e,get_bayes_factor_chart:t,default_splink_settings:o}=await r(()=>import("./817db6818ab226c0@104.notebook.Fz3PI6mS.js"),[]).then(s=>{const i=a._module._runtime.module(s.default),u=new Map(Array.from(a._outputs,l=>[l._name,l]));return u.get("get_m_u_chart")?.import("get_m_u_chart",i),u.get("get_bayes_factor_chart")?.import("get_bayes_factor_chart",i),u.get("default_splink_settings")?.import("default_splink_settings",i),{}});return{get_m_u_chart:e,get_bayes_factor_chart:t,default_splink_settings:o}},inputs:["@variable"],outputs:["get_m_u_chart","get_bayes_factor_chart","default_splink_settings"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:3,mode:"js",body:async a=>{const{get_waterfall_chart:e}=await r(()=>import("./843cb6e82d7c3d9b@474.notebook.BC1-Bcux.js"),__vite__mapDeps([3,4,5,1,2,6,7])).then(t=>{const o=a._module._runtime.module(t.default);return new Map(Array.from(a._outputs,i=>[i._name,i])).get("get_waterfall_chart")?.import("get_waterfall_chart",o),{}});return{get_waterfall_chart:e}},inputs:["@variable"],outputs:["get_waterfall_chart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:4,mode:"js",body:async a=>{const{get_match_probability_components:e}=await r(()=>import("./86fc30325e4106c4@853.notebook.CIPy3U_K.js"),__vite__mapDeps([8,1,2])).then(t=>{const o=a._module._runtime.module(t.default);return new Map(Array.from(a._outputs,i=>[i._name,i])).get("get_match_probability_components")?.import("get_match_probability_components",o),{}});return{get_match_probability_components:e}},inputs:["@variable"],outputs:["get_match_probability_components"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:5,mode:"ojs",body:function(e){return e`# Understanding match weights`},inputs:["md"],outputs:void 0,output:"title",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e){return e`Some columns are more important than others to the calculation of overall match probability.  For example, a match on date of birth provides stronger evidence in favour of a match than a match on gender.

The relative importance of columns is quantified in a model's _match weights_.

In this article, we explore the concept of match weights, using visualisations to help build intuition for how they work.  

The annex to this article presents the maths for how our implementation of the Fellegi Sunter model can be decomposed into a series of match weights.

`},inputs:["md"],outputs:void 0,output:"para_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e,t){return e`## Match weights 

A single comparison column provides evidence in favour or against a match, but this evidence is rarely conclusive.  The ambiguity arises because any observation on the comparison column is consistent with two possibilities.



- **A match on a column is consistent with the possibility that the entities match, but could also be due to two different entities sharing the same information (a 'collision').**

  The comparative likelihood of these two possibilities is a measure of the amount of evidence in favour of a match.  That is, we want to compare:
  
  ${t`\operatorname{Pr}(\text{column matches}|\text{records match})`} vs. ${t`\operatorname{Pr}(\text{column matches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${t`m_\text{col, level 1}`} vs. ${t`u_\text{col, level 1}`}.


- **A non-match on a column is consistent with the possibility the entities differ, but could also be due to typos or other variations in how information has been recorded about the same entity.**
  
   The comparative likelihood of these two possibilities is a measure of the amount of evidence against a match.  
  
    ${t`\operatorname{Pr}(\text{column mismatches}|\text{records match})`} vs. ${t`\operatorname{Pr}(\text{column mismatches}|\text{records do not match})`}

  or, using the more succinct notation of m and u probabilities:

  ${t`m_\text{col, level 0}`} vs. ${t`u_\text{col, level 0}`}.

We use the ratio of these values to compare their magnitude.  This ratio is known as a Bayes Factor.

`},inputs:["md","tex"],outputs:void 0,output:"para_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,o){return e`## Bayes Factors

Mathematically we can define the [Bayes Factor](https://betterexplained.com/articles/understanding-bayes-theorem-with-ratios/) for a given comparison column as:

${t`K_\text{col, level} =  \frac{m_\text{col, level}}{u_\text{col, level}}= \frac{\operatorname{Pr}(\gamma_\text{col,level}|\text{records match})}{\operatorname{Pr}(\gamma_\text{col,level}|\text{records do not match})}`}


Bayes factors can be explained in words.  For example, a Bayes Factor of 20 for a given column means that an overall match is now 20 times more probable.  A Bayes Factor of ${o`\frac{1}{10}`} for a given column means an overall match is 10 times less probable.

In this sense, a Bayes Factor is are similar to the concept of odds.  Odds of 4 mean that an even happens four out of five times, or in some sense it is four times more likely for the even to happen than not happen.

However, Bayes Factors differ from odds in that they are only meaningful in the context of a prior.  A Bayes Factor is an adjustment - it tells us something is more or less likely.  But we need a starting value - otherwise there's nothing to apply the adjustment to.

Let's see how this works:


`},inputs:["md","texd","tex"],outputs:void 0,output:"para_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e){return e.range([0,1],{step:.01,label:"prior probability =",value:.5})},inputs:["inputs"],outputs:void 0,output:"viewof$prior",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t){return e.range([0,1],{step:.01,label:t`m_\text{col, level} =`,value:.8})},inputs:["inputs","tex"],outputs:void 0,output:"viewof$m",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t){return e.range([0,1],{step:.01,label:t`u_\text{col, level} =`,value:.2})},inputs:["inputs","tex"],outputs:void 0,output:"viewof$u",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t,o){return e`\text{Bayes Factor} = \frac{m_\text{col, level}}{u_\text{col, level}} = \frac{${t}}{${o}} = ${(t/o).toPrecision(4)} `},inputs:["tex","m","u"],outputs:void 0,output:"bf",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e,t,o,s){return e`\text{posterior} = \frac{\text{prior}\times m}{\text{prior}\times m + (1-\text{prior})\times u}= ${(t*o/(t*o+(1-t)*s)).toPrecision(4)}`},inputs:["tex","prior","m","u"],outputs:void 0,output:"post",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e){return e`## Match weights`},inputs:["md"],outputs:void 0,output:"subhead_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t){return e`Finally, it can be convenient to take the logarithm of Bayes Factors because this [enables match weights to be added together](https://math.stackexchange.com/questions/965500/intuitive-understanding-of-logarithms) rather than being multiplied.

${t`\text{match weight for dob} =  \log(K_\text{col, level})`}

This transformation is also useful for visualising match weights.  Bayes factors are difficult to represent on a single scale becuse they represent ratios, which can be very large or very tiny, whereas log bayes factors can easily be viewed and compared on a single scale.
`},inputs:["md","texd"],outputs:void 0,output:"para_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e,t,o){return e`## Determinants of match weights

### Column matches

Where a column matches, the key determinant of match weight is the cardinality of the column (the number of unique values).  

For example, imagine we are linking a dataset of children, and consider the date of birth field.

The Bayes Factor is ${t`\frac{m_\text{dob, level 1}}{u_\text{dob, level 1}}`}  

The numerator is the probability that date of birth matches amongst records which truly match.

This is likely to be high.  With good data quality it will approach 1.0, and even with poor data quality it's likely to be above 0.8.

The term ${t`u_\text{dob, level 1}`} is the probability that date of birth matches amongst records which do not match.  


This is likely to be very small.  If the children are aged below 18, then there will be ${t`18 \times 365`} = ${(18*365).toLocaleString()} different dates of birth.  We can therefore estimate that:

${o`u_\text{dob, level 1} = \frac{1}{${18*365}} = ${(1/(18*365)).toPrecision(4)}`}

Let's assume that the numerator is 0.9.  The Bayes Factor would be ${t`\frac{0.9}{${(1/(18*365)).toPrecision(4)}}`} = ${.9*18*365}  i.e. very strong evidence in favour of a match.    

The denominator drives this result - the precise value of the numerator does not matter much.

### Column does not match

Where a column does not match, the key deterinant of match weight is the probability of mismatches among records that truly match.  This could be due to typos, transcription errors, or other reasons for variation in data (e.g. change of address).  Loosely speaking, this is a measure of data quality.

For example, imagine we are linking a large dataset of people, and consider the gender field.  Imagine this is recorded with high precision, and for the sake of this example, suppose no-one in the dataset has changed their gender.

The Bayes Factor is ${t`\frac{m_\text{gender, level 0}}{u_\text{gender, level 0}}`}  

The numerator tells us how often we observe a mismatch on gender amongst truly matching records.  Since data is entered with high precision, this number is low.  Let's say the rate of error is one in a thousand.

The denominator tells us how often we observe a mismatch on gender among truly non-matching records.  For gender this is likely to be around 0.5.  Note that the denominator would generally be a high number (almost always in the range 0.5 - 1.0) irrespective of the column type.

The Bayes Factor would be ${t`\frac{0.001}{0.5}`} = ${.001/.5}  .  This is very strong evidence against a match.

The numerator drives this result - the precise value of the denominator does not matter.


`},inputs:["md","tex","texd"],outputs:void 0,output:"para_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return e`## Visualising match weights`},inputs:["md"],outputs:void 0,output:"subhead_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e){return e`These concepts allow us to succinctly summarise the m and u values and match weights of a Fellegi Sunter model graphically.  For instance, consider the following model: (*You may adjust the m and u values*):`},inputs:["md"],outputs:void 0,output:"para_6",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e){return e`This allows a succinct visualisation of the match weights for a Fellegi Sunter model as follows.  You may edit these values to see how they affect the charts.`},inputs:["md"],outputs:void 0,output:"para_7",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e,t){return e.textarea({value:t,rows:26,spellcheck:!1})},inputs:["inputs","default_splink_settings"],outputs:void 0,output:"viewof$splink_settings",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e){return e`The m and u probabilities can be shown in the following chart:`},inputs:["md"],outputs:void 0,output:"para_8",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e,t){return e(JSON.parse(t))},inputs:["get_m_u_chart","splink_settings"],outputs:void 0,output:"chart_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){return e`And the Bayes Factors can be visualised as follows:`},inputs:["md"],outputs:void 0,output:"para_9",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e,t){return e(JSON.parse(t))},inputs:["get_bayes_factor_chart","splink_settings"],outputs:void 0,output:"chart_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e){return e`## Waterfall chart

Finally, for given values of the comparison columns, we can use the log 2 Bayes Factors to plot a chart that shows the calculation of the final probability.  The log 2 Bayes Factor is on the right hand access, and the probability is shown on the right hand axis.  Hover over the bars for more information.`},inputs:["md"],outputs:void 0,output:"para_10",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of fname column",value:"Values match"})},inputs:["inputs"],outputs:void 0,output:"viewof$fname_radio",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of sname column",value:"Values match"})},inputs:["inputs"],outputs:void 0,output:"viewof$sname_radio",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of dob column",value:"Values match"})},inputs:["inputs"],outputs:void 0,output:"viewof$dob_radio",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:29,mode:"ojs",body:function(e){return e.radio(["Values do not match","Values match"],{label:"Comparison of town column",value:"Values do not match"})},inputs:["inputs"],outputs:void 0,output:"viewof$town_radio",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:30,mode:"ojs",body:function(e,t,o){return e(t,JSON.parse(o),{height:300},!1)},inputs:["get_waterfall_chart","row","splink_settings"],outputs:void 0,output:"chart_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:31,mode:"ojs",body:function(e,t,o,s){return e`Final match probability:
${t(o,JSON.parse(s)).match_probability.toPrecision(4)}`},inputs:["md","get_match_probability_components","row","splink_settings"],outputs:void 0,output:"para_11",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:32,mode:"ojs",body:function(e){return e`## Mathematical annex: Rewriting the Fellegi Sunter formula in terms of odds, and Bayes Factors`},inputs:["md"],outputs:void 0,output:"annex",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:33,mode:"ojs",body:function(e,t){return e`In this section, we show why it is possible to compute match probabilities by adding together log2 Bayes Factors.

Start with our equation for match probability:

${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.1} `}

And note that we could similarly define:

${t`
\operatorname{Pr}(\text{records do not match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}}\tag{1.2} `}

`},inputs:["md","texd"],outputs:void 0,output:"para_12",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:34,mode:"ojs",body:function(e,t){return e`Now we introduce the [formula for odds](https://en.wikipedia.org/wiki/Odds#Statistical_usage): 

${t`\text{odds} = \frac{p}{1-p}`} 
where p is probability.


For example odds of 4 mean that this event happens 4 out of 5 times, which correponds to a probability of 80%.

Dividing (1.1) by (1.2) we see that:

${t`
\text{odds}(\text{records  match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K}) = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{(1-\lambda) u_{1\ell}u_{2\ell}\ldots u_{K\ell}}\tag{1.3} `}

Also recall that the Bayes Factor for column i can be defined as:
${t`b_{i\ell}=\frac{m_{i\ell}}{u_{i\ell}}`} 
so we can write the odds that records match as :

${t`
\text{odds of match} = \frac{\lambda }{(1-\lambda) } b_{1\ell}b_{2\ell}\ldots b_{K\ell}\tag{1.4} `}


Which can then be converted into a probability using:

${t`p = \frac{\text{odds}}{1+\text{odds}}`}

Sometimes it can also be convenient to use log odds, because these can be computed with addition rather than multiplication:

${t`
\text{log odds of match} = \log{(\frac{\lambda }{(1-\lambda) })} \log({b_{1\ell}})+\log({b_{2\ell}})+\ldots +\log({b_{K\ell})}\tag{1.5} `}

This final representation is what is used in the waterfall chart to represent the computation of match probability
`},inputs:["md","texd"],outputs:void 0,output:"para_13",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:35,mode:"ojs",body:function(e){return e.options({displayMode:!0,fleqn:!0})},inputs:["tex"],outputs:void 0,output:"texd",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:36,mode:"ojs",body:function(e){return e`<style>
.katex-display>.katex { font-size: 1em}
.katex-display {
    max-width: None;
}
textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}
</style>`},inputs:["html"],outputs:void 0,output:"css_styles",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:37,mode:"ojs",body:function(e,t,o,s){let i={};return e=="Values match"?i["𝛾_fname"]=1:i["𝛾_fname"]=0,t=="Values match"?i["𝛾_sname"]=1:i["𝛾_sname"]=0,o=="Values match"?i["𝛾_dob"]=1:i["𝛾_dob"]=0,s=="Values match"?i["𝛾_town"]=1:i["𝛾_town"]=0,i},inputs:["fname_radio","sname_radio","dob_radio","town_radio"],outputs:void 0,output:"row",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:38,mode:"ojs",body:function(e){return e("@observablehq/inputs@0.8.0")},inputs:["require"],outputs:void 0,output:"inputs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{d as default};
