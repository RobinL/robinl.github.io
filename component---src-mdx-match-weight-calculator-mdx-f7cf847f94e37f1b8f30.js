"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[4454],{515:function(e,t,a){a.r(t),a.d(t,{Head:function(){return $},default:function(){return N}});var r=a(1151),i=a(7294),n=a(6038);function o(e){return e`# Match weight calculator`}function l(e){return e.form([e.number({label:"Numeric Input:",placeholder:"Enter a value",min:0,required:!0,value:5.1,width:"100%"}),e.select(["Match Weight","Probability (e.g., 0.5 for 50%)","Bayes Factor","Reciprocal Bayes Factor"],{label:"Value type:",value:"Match Weight",width:"100%"})])}function c(e){return e}function s(e){return e[0]}function u(e){return e[1]}function m(e,t,a){switch(e){case"Probability (e.g., 0.5 for 50%)":return t;case"Bayes Factor":return a.bayesFactorToProbability(t);case"Match Weight":return a.partialMatchWeightToProbability(t);case"Reciprocal Bayes Factor":const e=1/t;return a.bayesFactorToProbability(e)}}function f(e,t,a){switch(e){case"Probability (e.g., 0.5 for 50%)":return t.probabilityToBayesFactor(a);case"Bayes Factor":return a;case"Match Weight":return t.partialMatchWeightToBayesFactor(a);case"Reciprocal Bayes Factor":return 1/a}}function b(e,t,a){switch(e){case"Probability (e.g., 0.5 for 50%)":return t.probabilityToPartialMatchWeight(a);case"Bayes Factor":return t.bayesFactorToPartialMatchWeight(a);case"Match Weight":return a;case"Reciprocal Bayes Factor":const e=1/a;return t.bayesFactorToPartialMatchWeight(e)}}function d(e){let t;t=e>1?e:e<1?1/e:1;const a=t<100?t.toFixed(2):t.toFixed(0);return e>1?`${a} times more likely`:e<1?`${a} times less likely`:"no more or less likely"}function h(e){return 1/(1-e)}function v(e,t){const a=Math.max(5,Math.round(Math.abs(e)/2));return t.toLocaleString(void 0,{maximumFractionDigits:a})}function p(e){return e.toLocaleString(void 0,{maximumFractionDigits:2})}function y(e){return e.toFixed(2)}function g(e){return e<2?e.toLocaleString(void 0,{maximumFractionDigits:5}):e.toLocaleString(void 0,{maximumFractionDigits:2})}function E(e,t,a,r,i,n){return e`

**Match Weight:** ${t}

**Probability:** ${a}

**Bayes Factor:** ${r}

**Relative interpretation:** ${i}

**Absolute interpretation:** One error in each ${n} predictions
  
`}function F(e,t){return e`
### Conversion Formulas:

${t`\text{Partial Match Weight} = \omega`} 

${t`\text{Bayes Factor} = K`} 

${t`\text{Probability} = p`} 

${t`K = 2^{\omega}`} 

${t`p = \frac{K}{1 + K} = \frac{2^{\omega}}{1 + 2^{\omega}}`} 



${t`K = \frac{p}{1 - p}`} 


${t`\omega = \log_{2}(K) = \log_{2}\left(\frac{p}{1 - p}\right)`} 
`}function M(e){return e.options({displayMode:!0,fleqn:!0})}function w(e){return e}function x(){return{partialMatchWeightToBayesFactor:e=>Math.pow(2,e),bayesFactorToProbability:e=>e/(1+e),partialMatchWeightToProbability:function(e){const t=this.partialMatchWeightToBayesFactor(e);return this.bayesFactorToProbability(t)},probabilityToBayesFactor:e=>1===e?1/0:0===e?0:e/(1-e),bayesFactorToPartialMatchWeight:e=>Math.log2(e),probabilityToPartialMatchWeight:function(e){const t=this.probabilityToBayesFactor(e);return this.bayesFactorToPartialMatchWeight(t)}}}function W(e,t){const a=e.module();return a.variable(t()).define(["md"],o),a.variable(t("viewof form_values")).define("viewof form_values",["Inputs"],l),a.variable(t("form_values")).define("form_values",["Generators","viewof form_values"],((e,t)=>e.input(t))),a.variable(t()).define(["form_values"],c),a.variable(t("numericValue")).define("numericValue",["form_values"],s),a.variable(t("selectedOption")).define("selectedOption",["form_values"],u),a.variable(t("probability")).define("probability",["selectedOption","numericValue","conversionUtils"],m),a.variable(t("bayesFactor")).define("bayesFactor",["selectedOption","conversionUtils","numericValue"],f),a.variable(t("partialMatchWeight")).define("partialMatchWeight",["selectedOption","conversionUtils","numericValue"],b),a.variable(t("interpretation")).define("interpretation",["bayesFactor"],d),a.variable(t("absoluteInterpretation")).define("absoluteInterpretation",["probability"],h),a.variable(t("formattedProbability")).define("formattedProbability",["partialMatchWeight","probability"],v),a.variable(t("formattedBayesFactor")).define("formattedBayesFactor",["bayesFactor"],p),a.variable(t("formattedPartialMatchWeight")).define("formattedPartialMatchWeight",["partialMatchWeight"],y),a.variable(t("formattedAbsoluteInterpretation")).define("formattedAbsoluteInterpretation",["absoluteInterpretation"],g),a.variable(t("calculated_values")).define("calculated_values",["md","formattedPartialMatchWeight","formattedProbability","formattedBayesFactor","interpretation","formattedAbsoluteInterpretation"],E),a.variable(t("conversion_formulas")).define("conversion_formulas",["md","texd"],F),a.variable(t("texd")).define("texd",["tex"],M),a.variable(t()).define(["form_values"],w),a.variable(t("conversionUtils")).define("conversionUtils",x),a}var P=a(8316),_=a(8342),B=(a(1237),a(7825)),T=a(4160);const $=e=>i.createElement(B.H,{frontmatter:e.pageContext.frontmatter});function k(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,r.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(P.Z),"\n",i.createElement(t.h1,null,"Match weight calculator"),"\n",i.createElement(_.A5,{notebook:W},i.createElement(_.Gc,{cellName:"viewof form_values"}),i.createElement("br"),i.createElement(_.Gc,{cellName:"calculated_values"}),i.createElement("br"),i.createElement(_.Gc,{cellName:"conversion_formulas"})),"\n",i.createElement(t.h2,null,"Additional resources"),"\n",i.createElement(t.p,null,"Also check the ",i.createElement(T.rU,{to:"/prob_bf_mw/"},"interactive visualization")," for a graphical representation of how these values correspond to each other."),"\n",i.createElement(P.Z))}var N=function(e){return void 0===e&&(e={}),i.createElement(n.fE,e,i.createElement(k,e))}},1237:function(e,t,a){var r=a(7294),i=a(9583);t.Z=e=>{let{children:t}=e;return r.createElement("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 py-2 px-4 mb-4",role:"alert"},r.createElement("div",{className:"flex"},r.createElement("div",null,r.createElement(i.hWE,{className:"text-yellow-400 mr-4"})),r.createElement("div",null,r.createElement("p",{className:"mb-0"},t))))}},8342:function(e,t,a){a.d(t,{A5:function(){return m},Gc:function(){return u}});var r=a(7294),i=a(6493);const n=(0,r.createContext)(null),o="mdx-container-div",l=new i.Zu;Object.assign({},l,{width:c});function c(){return l.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function a(){let a=document.getElementById(o).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}function s(e){let{notebook:t,children:a}=e;const{0:o,1:l}=(0,r.useState)({}),s=new i.r_(Object.assign({},new i.Zu,{width:c}));return(0,r.useEffect)((()=>(s.module(t,(e=>{if(o[e])return new i.lj(o[e])})),()=>s.dispose())),[s,o,t]),r.createElement(n.Provider,{value:{setSharedRefs:l}},a)}function u(e){let{cellName:t,styles:a,className:i}=e;const o=(0,r.useRef)(null),{setSharedRefs:l}=(0,r.useContext)(n);return(0,r.useEffect)((()=>{l((e=>({...e,[t]:o.current})))}),[t,l]),r.createElement("div",{ref:o,style:a,className:i})}function m(e){let{notebook:t,children:a}=e;return r.createElement(s,{notebook:t},a)}},8316:function(e,t,a){var r=a(7294),i=a(4160);t.Z=()=>r.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},r.createElement("div",{className:"flex justify-center items-center"},r.createElement("div",{className:"text-center"},r.createElement("span",null,"This article is part of the ",r.createElement(i.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"probabilistic linkage training materials")))))},7825:function(e,t,a){a.d(t,{H:function(){return n}});var r=a(7294),i=a(4160);const n=e=>{let{frontmatter:t}=e;const{title:a,description:n,image:o,siteUrl:l,twitterUsername:c}=(0,i.K2)("1865044719").site.siteMetadata,s={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||n,image:`${l}${(null==t?void 0:t.image)||o}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:c,...t},u=null==t?void 0:t.stylesheet;return r.createElement(r.Fragment,null,r.createElement("title",null,s.title),r.createElement("meta",{name:"description",content:s.description}),r.createElement("meta",{name:"image",content:s.image}),u&&r.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${u}`}))}}}]);
//# sourceMappingURL=component---src-mdx-match-weight-calculator-mdx-f7cf847f94e37f1b8f30.js.map