"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[25],{2203:function(e,t,n){n.r(t),n.d(t,{Head:function(){return W},default:function(){return S}});var a=n(1151),r=n(7294),i=n(6965),l=n(7825),o=n(1508);function c(e){return e`# intro prob linkage`}function s(e){return e`
  <table id="data-table">
    <tr>
      <th>first_name</th>
      <th>surname</th>
      <th>postcode</th>
      <th>gender</th>
    </tr>
    <tr contenteditable>
      <td>Robin</td>
      <td>Linacre</td>
      <td>W1A 1AA</td>
      <td>
        <select>
          <option value="male">Male</option>
          <option value="female" selected>Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
    <tr contenteditable>
      <td>Robyn</td>
      <td>Linacre</td>
      <td>W1A 1AA</td>
      <td>
        <select>
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Non-binary</option>
        </select>
      </td>
    </tr>
  </table>`}function m(e,t,n,a){let r=e.settingsToWaterfall(t,n[0]);return a(e.charts.waterfall_chart(r,!1))}function u(e,t,n,a){let r=e.settingsToWaterfall(t,n[0]).pop(),i=e.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(r.log2_bayes_factor);return i=(100*i).toFixed(1)+"%",a`<div><mark>The estimated probability these two records match is ${i}.</mark></div>`}function d(e){return e.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(1e-7)}function h(e){return e.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(6)}function f(e){return e.tutorial_partial_match_weights_settings}function p(e,t){return e.settingsToPartialMatchWeightsData(t)}function b(e,t,n){return e.setBarIsActive(t,n[0])}function v(e,t,n){return e.applyComparisonFunctions(t,n)}function g(e,t){return e.createComparisonRows(t)}function E(e,t,n){return e.observe((e=>{const a=a=>e(t.parseTableData(n));return n.addEventListener("input",a,!1),e(t.parseTableData(n)),()=>window.removeEventListener("input",a)}))}function _(e){return{first_name:e.jaroWinklerComparison,surname:e.jaroWinklerComparison,postcode:e.levenshteinComparison,gender:e.exactMatchComparison}}function w(e){return e("vega-embed@6")}function y(){return"http://127.0.0.1:8889/bundle.js"}function k(e,t,n){return e(`${t}?${n}${Date.now()}`)}function x(e){return e("@robinl/record_linkage_javascript_utilities@0.0.7")}function N(e){return e.button("refresh splink_vis_utils javascript lib")}function j(e,t){const n=e.module();return n.variable(t()).define(["md"],c),n.variable(t("input_table")).define("input_table",["html"],s),n.variable(t("waterfall_chart")).define("waterfall_chart",["rlju","tutorial_settings","comparison_vector","embed"],m),n.variable(t("estimated_probability")).define("estimated_probability",["rlju","tutorial_settings","comparison_vector","html"],u),n.variable(t()).define(["rlju"],d),n.variable(t()).define(["rlju"],h),n.variable(t("tutorial_settings")).define("tutorial_settings",["rlju"],f),n.variable(t("partial_match_weight_chart_data_raw")).define("partial_match_weight_chart_data_raw",["rlju","tutorial_settings"],p),n.variable(t("partial_match_weight_chart_data_raw_with_barisactive")).define("partial_match_weight_chart_data_raw_with_barisactive",["rlju","partial_match_weight_chart_data_raw","comparison_vector"],b),n.variable(t("comparison_vector")).define("comparison_vector",["rlju","comparison_pairs","comparison_functions"],v),n.variable(t("comparison_pairs")).define("comparison_pairs",["rlju","tableData"],g),n.variable(t("tableData")).define("tableData",["Generators","rlju","input_table"],E),n.variable(t("comparison_functions")).define("comparison_functions",["rlju"],_),n.variable(t("embed")).define("embed",["require"],w),n.variable(t("localUrl")).define("localUrl",y),n.variable(t("rlju2")).define("rlju2",["require","localUrl","refresh"],k),n.variable(t("rlju")).define("rlju",["require"],x),n.variable(t("viewof refresh")).define("viewof refresh",["Inputs"],N),n.variable(t("refresh")).define("refresh",["Generators","viewof refresh"],((e,t)=>e.input(t))),n}var M=n(1237),T=n(8342);n(2692),n(6702);const W=e=>r.createElement(l.H,{frontmatter:e.pageContext.frontmatter});function F(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",sup:"sup",code:"code",section:"section",ol:"ol",li:"li"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"An Interactive Introduction to the Fellegi-Sunter Model for Data Linkage/Deduplication"),"\n",r.createElement(t.h2,null,"Aims"),"\n",r.createElement(t.p,null,"This is part one of a series of interactive articles that aim to provide an introduction to the theory of probabilistic record linkage and deduplication."),"\n",r.createElement(t.p,null,"In this article I provide a high-level introduction to the ",r.createElement(o.Z,{term:"fellegi-sunter",text:"Fellegi-Sunter"})," framework and an interactive example of a linkage model."),"\n",r.createElement(t.p,null,"Subsequent articles explore the theory in more depth."),"\n",r.createElement(t.p,null,"These materials align closely to the probabilistic model used by ",r.createElement(t.a,{href:"http://github.com/moj-analytical-services/splink"},"Splink"),", a free software package for record linkage at scale."),"\n",r.createElement(t.p,null,"These articles cover the theory only.  For practical model building using Splink, see ",r.createElement(t.a,{href:"https://moj-analytical-services.github.io/splink/demos/tutorials/00_Tutorial_Introduction.html"},"the tutorial in the Splink docs"),"."),"\n",r.createElement(t.h2,null,"What is probabilistic record linkage?"),"\n",r.createElement(t.p,null,"Probablistic record linkage is a technique used to link together records that lack unique identifiers."),"\n",r.createElement(t.p,null,"In the absence of a unique identifier such as a National Insurance number, we can use a combination of individually non-unique variables such as name, gender and date of birth to identify individuals."),"\n",r.createElement(t.p,null,"Record linkage can be done within datasets (deduplication), between datasets (linkage), or both",r.createElement(t.sup,null,r.createElement(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"1")),"."),"\n",r.createElement(t.p,null,"Linkage is 'probabilistic' in the sense that it subject to uncertainty and relies on the balance of evidence. For instance, in a large dataset, observing that two records match on the full name ",r.createElement(t.code,null,"John Smith")," provides some evidence that these two records may refer to the same person, but this evidence is inconclusive because it's possible there are two different ",r.createElement(t.code,null,"John Smith"),"s."),"\n",r.createElement(t.p,null,"More broadly,  it is often impossible to classify pairs of records as matches or non-matches beyond any doubt. Instead, the aim of probabilisitic record linkage is to quantify the probability that a pair of records refer to the same entity by considering evidence in favour and against a match and weighting it appropriately."),"\n",r.createElement(t.p,null,"The most common type of probabilistic record linkage model is called the Fellegi-Sunter model."),"\n",r.createElement(t.p,null,"We start with a ",r.createElement(o.Z,{term:"prior"}),", which represents the probability that two records drawn at random are a match. We then compare the two records, increasing the match probability where information in the record matches, and decreasing it when information differs."),"\n",r.createElement(t.p,null,"The amount we increase and decrease the match probability is determined by the '",r.createElement(o.Z,{term:"partial_match_weight"}),"s' of the model."),"\n",r.createElement(t.p,null,"For example, a match on postcode gives us more evidence in favour of a match on gender, since the latter is much more likely to occur by chance."),"\n",r.createElement(t.p,null,"The final prediction is a simple calculation:  we sum up ",r.createElement(o.Z,{term:"partial_match_weight"}),"s to compute a final match weight, which is then converted into a probability."),"\n",r.createElement(t.h2,null,"Example"),"\n",r.createElement(t.p,null,"Let's take a look at an example of a simple Fellegi-Sunter model to calculate match probability interactively. This model will compare the two records in the table, and assess whether they refer to the same person, or different people."),"\n",r.createElement(M.Z,null,"You may edit the values in the table to see how the match probability changes."),"\n",r.createElement(T.A5,{notebook:j},r.createElement(T.Gc,{cellName:"input_table"}),r.createElement(T.Gc,{cellName:"estimated_probability"}),r.createElement(t.p,null,"We can decompose this calculation into the sum of the ",r.createElement(o.Z,{term:"partial_match_weight"}),"s using a waterfall chart, which is read from left to right. We start with the prior, and take each column into account in turn.  The size of the bar corresponds to the ",r.createElement(o.Z,{term:"partial_match_weight"}),"."),r.createElement(t.p,null,"You can hover over the bars to see how the probability changes as each subsequent field is taken into account."),r.createElement(t.p,null,"The final estimated match probability is shown in the rightmost bar.  Note that the y axis on the right converts match weight into probability."),r.createElement(T.Gc,{cellName:"waterfall_chart"}),r.createElement(t.p,null,"In the next article, we will look at partial match weights in great depth.")),"\n",r.createElement(t.section,{"data-footnotes":!0,className:"footnotes"},r.createElement(t.h2,{className:"sr-only",id:"footnote-label"},"Footnotes"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,{id:"user-content-fn-1"},"\n",r.createElement(t.p,null,"Record linkage and deduplication are equivalent problems.  The only difference is that linkage involves finding matching entities across datasets and deduplication involves finding matches within datasets. ",r.createElement(t.a,{href:"#user-content-fnref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n"),"\n"))}var S=function(e){return void 0===e&&(e={}),r.createElement(i.B,e,r.createElement(F,e))}},6702:function(e,t,n){var a=n(7294),r=n(4160);t.Z=e=>{var t,n,i,l,o,c;let{frontmatter:s}=e;const{tutorial_number:m}=s,u=(0,r.K2)("4236107564"),d=u.allMdx.edges.map((e=>e.node.frontmatter.tutorial_number)),h=d.includes(m-1),f=d.includes(m+1),p=null===(t=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===m-1)))||void 0===t||null===(n=t.node)||void 0===n||null===(i=n.fields)||void 0===i?void 0:i.slug,b=null===(l=u.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===m+1)))||void 0===l||null===(o=l.node)||void 0===o||null===(c=o.fields)||void 0===c?void 0:c.slug;return a.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},a.createElement("div",{className:"flex justify-between"},a.createElement("div",{className:"w-1/3 text-left"},h&&a.createElement(r.rU,{to:p,className:"text-blue-500 hover:underline"},"← Previous article")),a.createElement("div",{className:"w-1/3 text-center"},a.createElement("span",null,"This is part ",m," of the"," ",a.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"tutorial"))),a.createElement("div",{className:"w-1/3 text-right"},f&&a.createElement(r.rU,{to:b,className:"text-blue-500 hover:underline"},"Next article →"))))}},1237:function(e,t,n){var a=n(7294),r=n(9583);t.Z=e=>{let{children:t}=e;return a.createElement("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 py-2 px-4 mb-4",role:"alert"},a.createElement("div",{className:"flex"},a.createElement("div",null,a.createElement(r.hWE,{className:"text-yellow-400 mr-4"})),a.createElement("div",null,a.createElement("p",{className:"mb-0"},t))))}},8342:function(e,t,n){n.d(t,{A5:function(){return u},Gc:function(){return m}});var a=n(7294),r=n(6493);const i=(0,a.createContext)(null),l="mdx-container-div",o=new r.Zu;Object.assign({},o,{width:c});function c(){return o.Generators.observe((e=>{let t=e(document.getElementById(l).clientWidth);function n(){let n=document.getElementById(l).clientWidth;n!==t&&e(t=n)}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}))}function s(e){let{notebook:t,children:n}=e;const{0:l,1:o}=(0,a.useState)({}),s=new r.r_(Object.assign({},new r.Zu,{width:c}));return(0,a.useEffect)((()=>(s.module(t,(e=>{if(l[e])return new r.lj(l[e])})),()=>s.dispose())),[s,l,t]),a.createElement(i.Provider,{value:{setSharedRefs:o}},n)}function m(e){let{cellName:t,styles:n,className:r}=e;const l=(0,a.useRef)(null),{setSharedRefs:o}=(0,a.useContext)(i);return(0,a.useEffect)((()=>{o((e=>({...e,[t]:l.current})))}),[t,o]),a.createElement("div",{ref:l,style:n,className:r})}function u(e){let{notebook:t,children:n}=e;return a.createElement(s,{notebook:t},n)}},6965:function(e,t,n){n.d(t,{B:function(){return o}});var a=n(7294),r=n(6038),i=n(2692),l=n(6702);function o(e){let{children:t,pageContext:n}=e;const{frontmatter:o}=n,c=()=>a.createElement("div",null,a.createElement(l.Z,{frontmatter:o}),t,a.createElement(i.Z,{frontmatter:o}));return a.createElement(r.ZP,{pageContext:n},a.createElement(c,null))}},7825:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(7294),r=n(4160);const i=e=>{let{frontmatter:t}=e;const{title:n,description:i,image:l,siteUrl:o,twitterUsername:c}=(0,r.K2)("1865044719").site.siteMetadata,s={title:(null==t?void 0:t.title)||n,description:(null==t?void 0:t.description)||i,image:`${o}${(null==t?void 0:t.image)||l}`,url:`${o}${(null==t?void 0:t.pathname)||""}`,twitterUsername:c,...t},m=null==t?void 0:t.stylesheet;return a.createElement(a.Fragment,null,a.createElement("title",null,s.title),a.createElement("meta",{name:"description",content:s.description}),a.createElement("meta",{name:"image",content:s.image}),m&&a.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${m}`}))}},2692:function(e,t,n){var a=n(7294),r=n(4160);t.Z=e=>{let{frontmatter:t}=e;const{tutorial_number:n,title:i}=t,l=(0,r.K2)("1842021157").allMdx.edges.sort(((e,t)=>e.node.frontmatter.tutorial_number-t.node.frontmatter.tutorial_number));return a.createElement("div",{className:"bg-blue-100  p-4 mt-8  mb-4 rounded-lg "},a.createElement("div",{className:"container mx-auto"},a.createElement("div",{className:"text-blue-800 font-semibold text-base mb-2"},a.createElement(r.rU,{to:"/probabilistic_linkage",className:"text-blue-500 hover:underline"},"Probabilistic Linkage Tutorial Navigation:")),a.createElement("ol",{className:"space-y-2 text-sm"},l.map((e=>a.createElement("li",{key:e.node.frontmatter.tutorial_number,className:"text-blue-600 text-sm"},n===e.node.frontmatter.tutorial_number?a.createElement("span",{className:"font-bold text-sm"},e.node.frontmatter.title):a.createElement(r.rU,{to:e.node.fields.slug,className:"hover:underline"},e.node.frontmatter.title)))))))}}}]);
//# sourceMappingURL=component---src-mdx-intro-to-probabilistic-linkage-mdx-598f9774cf264c911539.js.map