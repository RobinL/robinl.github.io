function n(t){return t`# Match weight calculator`}function l(t){return t.form([t.number({label:"Numeric Input:",placeholder:"Enter a value",min:0,required:!0,value:5.1,width:"100%"}),t.select(["Match Weight","Probability (e.g., 0.5 for 50%)","Bayes Factor","Reciprocal Bayes Factor"],{label:"Value type:",value:"Match Weight",width:"100%"})])}function c(t){return t}function u(t){return t[0]}function f(t){return t[1]}function s(t,a,e){switch(t){case"Probability (e.g., 0.5 for 50%)":return a;case"Bayes Factor":return e.bayesFactorToProbability(a);case"Match Weight":return e.partialMatchWeightToProbability(a);case"Reciprocal Bayes Factor":const i=1/a;return e.bayesFactorToProbability(i)}}function h(t,a,e){switch(t){case"Probability (e.g., 0.5 for 50%)":return a.probabilityToBayesFactor(e);case"Bayes Factor":return e;case"Match Weight":return a.partialMatchWeightToBayesFactor(e);case"Reciprocal Bayes Factor":return 1/e}}function b(t,a,e){switch(t){case"Probability (e.g., 0.5 for 50%)":return a.probabilityToPartialMatchWeight(e);case"Bayes Factor":return a.bayesFactorToPartialMatchWeight(e);case"Match Weight":return e;case"Reciprocal Bayes Factor":const i=1/e;return a.bayesFactorToPartialMatchWeight(i)}}function d(t){let a;t>1?a=t:t<1?a=1/t:a=1;const e=a<100?a.toFixed(2):a.toFixed(0);return t>1?`${e} times more likely`:t<1?`${e} times less likely`:"no more or less likely"}function m(t){return 1/(1-t)}function y(t,a){const e=Math.max(5,Math.round(Math.abs(t)/2));return a.toLocaleString(void 0,{maximumFractionDigits:e})}function p(t){return t.toLocaleString(void 0,{maximumFractionDigits:2})}function g(t){return t.toFixed(2)}function F(t){return t<2?t.toLocaleString(void 0,{maximumFractionDigits:5}):t.toLocaleString(void 0,{maximumFractionDigits:2})}function _(t,a,e,i,r,o){return t`

**Match Weight:** ${a}

**Probability:** ${e}

**Bayes Factor:** ${i}

**Relative interpretation:** ${r}

**Absolute interpretation:** One error in each ${o} predictions
  
`}function M(t,a){return t`
### Conversion Formulas:

${a`\text{Partial Match Weight} = \omega`} 

${a`\text{Bayes Factor} = K`} 

${a`\text{Probability} = p`} 

${a`K = 2^{\omega}`} 

${a`p = \frac{K}{1 + K} = \frac{2^{\omega}}{1 + 2^{\omega}}`} 



${a`K = \frac{p}{1 - p}`} 


${a`\omega = \log_{2}(K) = \log_{2}\left(\frac{p}{1 - p}\right)`} 
`}function P(t){return t.options({displayMode:!0,fleqn:!0})}function W(t){return t}function v(){return{partialMatchWeightToBayesFactor:t=>Math.pow(2,t),bayesFactorToProbability:t=>t/(1+t),partialMatchWeightToProbability:function(t){const a=this.partialMatchWeightToBayesFactor(t);return this.bayesFactorToProbability(a)},probabilityToBayesFactor:t=>t===1?1/0:t===0?0:t/(1-t),bayesFactorToPartialMatchWeight:t=>Math.log2(t),probabilityToPartialMatchWeight:function(t){const a=this.probabilityToBayesFactor(t);return this.bayesFactorToPartialMatchWeight(a)}}}function B(t,a){const e=t.module();return e.variable(a()).define(["md"],n),e.variable(a("viewof form_values")).define("viewof form_values",["Inputs"],l),e.variable(a("form_values")).define("form_values",["Generators","viewof form_values"],(i,r)=>i.input(r)),e.variable(a()).define(["form_values"],c),e.variable(a("numericValue")).define("numericValue",["form_values"],u),e.variable(a("selectedOption")).define("selectedOption",["form_values"],f),e.variable(a("probability")).define("probability",["selectedOption","numericValue","conversionUtils"],s),e.variable(a("bayesFactor")).define("bayesFactor",["selectedOption","conversionUtils","numericValue"],h),e.variable(a("partialMatchWeight")).define("partialMatchWeight",["selectedOption","conversionUtils","numericValue"],b),e.variable(a("interpretation")).define("interpretation",["bayesFactor"],d),e.variable(a("absoluteInterpretation")).define("absoluteInterpretation",["probability"],m),e.variable(a("formattedProbability")).define("formattedProbability",["partialMatchWeight","probability"],y),e.variable(a("formattedBayesFactor")).define("formattedBayesFactor",["bayesFactor"],p),e.variable(a("formattedPartialMatchWeight")).define("formattedPartialMatchWeight",["partialMatchWeight"],g),e.variable(a("formattedAbsoluteInterpretation")).define("formattedAbsoluteInterpretation",["absoluteInterpretation"],F),e.variable(a("calculated_values")).define("calculated_values",["md","formattedPartialMatchWeight","formattedProbability","formattedBayesFactor","interpretation","formattedAbsoluteInterpretation"],_),e.variable(a("conversion_formulas")).define("conversion_formulas",["md","texd"],M),e.variable(a("texd")).define("texd",["tex"],P),e.variable(a()).define(["form_values"],W),e.variable(a("conversionUtils")).define("conversionUtils",v),e}export{B as default};
