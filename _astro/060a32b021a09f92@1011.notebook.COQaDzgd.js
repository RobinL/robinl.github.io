const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/d25176b0fe784ad0@488.notebook.BLCI3prZ.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/index.BDtHx5Iu.js","_astro/NotebookCellProvider.DFvcJ7k9.js","_astro/vega-embed.module.CqX21S21.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper.zoZ8CRZ9.js";function h(o){let e,t,a,s=!1;const i=o(l=>{a=l,e?(e(l),e=t=void 0):s=!0});return{async next(){return{done:!1,value:await(s?(s=!1,a):new Promise((l,u)=>(e=l,t=u)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,i?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function v(o){let e;return Object.defineProperty(h(t=>{e=t,o!==void 0&&t(o)}),"value",{get:()=>o,set:t=>(o=t,e?.(o))})}function g(o){const e=v(o);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function b(o,e=()=>null){const t=o.module();b.FileAttachment&&t.variable().define("FileAttachment",[],()=>b.FileAttachment);for(const a of b.cells){const s=a.inputs??[],i=a.output;if(a.outputs?.length){const l=`cell ${a.id}`;t.variable(e(null)).define(l,s,a.body);for(const u of a.outputs)t.variable(!0).define(u,[l],n=>n[u])}else if(i)if(a.autoview){const l=i.slice(7),u=`viewof ${l}`;t.variable(e(u)).define(u,s,a.body),t.variable(e(l)).define(l,["Generators",u],(n,r)=>n.input(r))}else if(a.automutable){const l=i.slice(8),u=`cell ${a.id}`;t.define(i,s,a.body),t.define(u,[i],g),t.variable(e(l)).define(l,[u],([n])=>n),t.variable(!0).define(`mutable$${l}`,[u],([,n])=>n)}else t.variable(e(i)).define(i,s,a.body);else t.variable(e(null)).define(s,a.body)}return t}Object.assign(b,{title:"@robinl/visualising-fellegi-sunter: 060a32b021a09f92@1011.js",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async o=>{const{default_settings:e}=await c(()=>import("./379dba93f4bb9357@1129.notebook.CMP6JCAP.js"),[]).then(t=>{const a=o._module._runtime.module(t.default);return new Map(Array.from(o._outputs,i=>[i._name,i])).get("default_settings")?.import("default_settings",a),{}});return{default_settings:e}},inputs:["@variable"],outputs:["default_settings"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:2,mode:"js",body:async o=>{const{get_m_u_formula_symbols:e,get_m_u_formula_numbers:t,get_comparison_vector_symbols_and_numbers:a,get_match_probability_components:s}=await c(()=>import("./d25176b0fe784ad0@488.notebook.BLCI3prZ.js"),__vite__mapDeps([0,1,2,3,4,5])).then(i=>{const l=o._module._runtime.module(i.default),u=new Map(Array.from(o._outputs,n=>[n._name,n]));return u.get("get_m_u_formula_symbols")?.import("get_m_u_formula_symbols",l),u.get("get_m_u_formula_numbers")?.import("get_m_u_formula_numbers",l),u.get("get_comparison_vector_symbols_and_numbers")?.import("get_comparison_vector_symbols_and_numbers",l),u.get("get_match_probability_components")?.import("get_match_probability_components",l),{}});return{get_m_u_formula_symbols:e,get_m_u_formula_numbers:t,get_comparison_vector_symbols_and_numbers:a,get_match_probability_components:s}},inputs:["@variable"],outputs:["get_m_u_formula_symbols","get_m_u_formula_numbers","get_comparison_vector_symbols_and_numbers","get_match_probability_components"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:3,mode:"js",body:async o=>{const{styles:e,plot_treemap:t,color_match:a,color_non_match:s}=await c(()=>import("./379dba93f4bb9357@1129.notebook.CMP6JCAP.js"),[]).then(i=>{const l=o._module._runtime.module(i.default),u=new Map(Array.from(o._outputs,n=>[n._name,n]));return u.get("styles")?.import("styles",l),u.get("plot_treemap")?.import("plot_treemap",l),u.get("color_match")?.import("color_match",l),u.get("color_non_match")?.import("color_non_match",l),{}});return{styles:e,plot_treemap:t,color_match:a,color_non_match:s}},inputs:["@variable"],outputs:["styles","plot_treemap","color_match","color_non_match"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:4,mode:"js",body:async o=>{const{splink_settings:e,"viewof lam":t,lam:a,"viewof fname_val":s,fname_val:i,"viewof sname_val":l,sname_val:u,"viewof dob_val":n,dob_val:r,"viewof town_val":f,town_val:p,form_styles:y}=await c(()=>import("./ecf81050a24329e5@163.notebook.BKP77W5A.js"),[]).then(_=>{const m=o._module._runtime.module(_.default),d=new Map(Array.from(o._outputs,w=>[w._name,w]));return d.get("splink_settings")?.import("splink_settings",m),d.get("viewof$lam")?.import('"viewof lam"',"viewof$lam",m),d.get("lam")?.import("lam",m),d.get("viewof$fname_val")?.import('"viewof fname_val"',"viewof$fname_val",m),d.get("fname_val")?.import("fname_val",m),d.get("viewof$sname_val")?.import('"viewof sname_val"',"viewof$sname_val",m),d.get("sname_val")?.import("sname_val",m),d.get("viewof$dob_val")?.import('"viewof dob_val"',"viewof$dob_val",m),d.get("dob_val")?.import("dob_val",m),d.get("viewof$town_val")?.import('"viewof town_val"',"viewof$town_val",m),d.get("town_val")?.import("town_val",m),d.get("form_styles")?.import("form_styles",m),{}});return{splink_settings:e,viewof$lam:t,lam:a,viewof$fname_val:s,fname_val:i,viewof$sname_val:l,sname_val:u,viewof$dob_val:n,dob_val:r,viewof$town_val:f,town_val:p,form_styles:y}},inputs:["@variable"],outputs:["splink_settings","viewof$lam","lam","viewof$fname_val","fname_val","viewof$sname_val","sname_val","viewof$dob_val","dob_val","viewof$town_val","town_val","form_styles"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,automutable:void 0,files:[]},{id:5,mode:"ojs",body:function(e){return e`# Visualising the Fellegi Sunter model `},inputs:["md"],outputs:void 0,output:"title",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(o){return o`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/visualising_fellegi_sunter/).*`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e,t){return e`The [previous article](https://www.robinlinacre.com/maths_of_fellegi_sunter/) presented an implementation of the Fellegi Sunter model.  We showed that match probability could be represented by Equation 1 - which is reproduced below:
${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})  \newline = \frac{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}}{\lambda m_{1\ell}m_{2\ell}\ldots m_{K\ell}+ (1-\lambda)u_{1\ell}u_{1\ell} \ldots u_{K\ell}} `}

`},inputs:["md","texd"],outputs:void 0,output:"para_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e){return e`This article presents a way to understand and visualise this formula.`},inputs:["md"],outputs:void 0,output:"para_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e){return e`In our visualisation, we are going to take each piece of evidence into account in turn. This is possible due to our assumption of conditional independence of comparison columns given the match status.

The means Equation 1 is equivalent to a repeated application of Bayes' Theorem (see annex). See [here](https://www.youtube.com/watch?v=HZGCoVF3YvM) is more in depth video about Bayes Theorem.
`},inputs:["md"],outputs:void 0,output:"para_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e){return e`## Example

We are going to compute match probability for a record comparison with the following comparison columns:

- \`fname\` (first name)
- \`sname\` (surname)
- \`dob\` (date of birth)
- \`town\` 


The default parameter values are a bit unrealistic, but help make sure the diagrams are legible.
`},inputs:["md"],outputs:void 0,output:"para_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e){return e`## Step 1`},inputs:["md"],outputs:void 0,output:"subhead_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(e,t,a,s){return e`We begin by visualising the space of all pairwise record comparisons, splitting the overall comparison space into ${t`matches`} and ${a`non-matches`} using our prior, ${s`\operatorname{Pr}(\text{records match}) =  \lambda`}`},inputs:["md","m","nm","tex"],outputs:void 0,output:"para_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e){return e},inputs:["viewof$lam"],outputs:void 0,output:"lam_view",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e,t){return e(t,0,300)},inputs:["plot_treemap","splink_settings"],outputs:void 0,output:"treemap_1",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(e,t,a,s,i){return e`Using only this information, our estimate of match probability is just the prior:

${t`\text{match probability} =  \frac{\lambda }{\lambda + (1-\lambda)}  \newline = \frac{\colorbox{${a.hex()}}{\text{yellow area}}}{\colorbox{${a.hex()}}{\text{yellow area}} + \colorbox{${s.hex()}}{\text{blue area}} }= ${i.proportion_of_matches.toPrecision(4)} `}

`},inputs:["md","texd","color_match","color_non_match","splink_settings"],outputs:void 0,output:"para_6",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e){return e`## Step 2 - First name`},inputs:["md"],outputs:void 0,output:"subhead_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return e`We will now choose the parameters of the model for the first name field, and then take this information into account in the diagram.`},inputs:["md"],outputs:void 0,output:"para_7",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e){return e},inputs:["viewof$fname_val"],outputs:void 0,output:"fname_view",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e,t,a,s,i,l,u,n,r){return e` ${t("fname",a)}
An example of the data would be:
${s(i(1))}

According to the model parameters you've chosen:


- ${l("fname",u(1),a,"m")}
- ${l("fname",u(1),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${n`yellow`} or ${r`blue`} part of the following diagram:
`},inputs:["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],outputs:void 0,output:"para_8",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e,t){return e(t,1,300)},inputs:["plot_treemap","splink_settings"],outputs:void 0,output:"treemap_2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e,t,a,s,i,l,u,n,r){return e` What's the probability we're in the ${t`yellow`} area?  This must be:

${a`\text{match probability} = \frac{\colorbox{${s.hex()}}{\text{yellow area}}}{\colorbox{${s.hex()}}{\text{yellow area}} + \colorbox{${i.hex()}}{\text{blue area}} } `}

From this diagram we can see that the ${l`\colorbox{${s.hex()}}{$\text{yellow area} = \lambda m_{1\ell}$}`} and the 
${l`\colorbox{${i.hex()}}{$\text{blue area} = (1-\lambda) u_{1\ell}$}`}.

So:

${a`\text{match probability} =  \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

Which, in numbers is:

${l`${u(n(2),r,1)}`}
`},inputs:["md","m","texd","color_match","color_non_match","tex","get_m_u_formula_numbers","get_row","splink_settings"],outputs:void 0,output:"para_9",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(e){return e`## Step 3 - Surname`},inputs:["md"],outputs:void 0,output:"subhead_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:23,mode:"ojs",body:function(e){return e`Let's also choose parameters for \`sname\`, the surname field:`},inputs:["md"],outputs:void 0,output:"para_10",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:24,mode:"ojs",body:function(e){return e},inputs:["viewof$sname_val"],outputs:void 0,output:"sname_view",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:25,mode:"ojs",body:function(e,t,a,s,i,l,u,n,r){return e`${t("sname",a)}
An example of the data would be:
${s(i(2))}

According to the model parameters you've chosen:


- ${l("sname",u(2),a,"m")}
- ${l("sname",u(2),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${n`yellow`} or ${r`blue`} part of the following diagram:`},inputs:["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],outputs:void 0,output:"para_11",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:26,mode:"ojs",body:function(e,t){return e(t,2,300)},inputs:["plot_treemap","splink_settings"],outputs:void 0,output:"treemap_3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:27,mode:"ojs",body:function(e,t,a,s,i,l,u){return e`We now have:

${t`\text{match probability} = \frac{\colorbox{${a.hex()}}{\text{yellow area}}}{\colorbox{${a.hex()}}{\text{yellow area}} + \colorbox{${s.hex()}}{\text{blue area}} } `}

${t`= \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}}`}

Which, in numbers is:

${t`${i(l(2),u,2)}`}
`},inputs:["md","texd","color_match","color_non_match","get_m_u_formula_numbers","get_row","splink_settings"],outputs:void 0,output:"para_12",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:28,mode:"ojs",body:function(e){return e`## Step 4 - Date of birth`},inputs:["md"],outputs:void 0,output:"subhead_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:29,mode:"ojs",body:function(e){return e},inputs:["viewof$dob_val"],outputs:void 0,output:"dob_view",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:30,mode:"ojs",body:function(e,t,a,s,i,l,u,n,r){return e` ${t("dob",a)}
An example of the data would be:
${s(i(3))}

According to the model parameters you've chosen:


- ${l("dob",u(3),a,"m")}
- ${l("dob",u(3),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${n`yellow`} or ${r`blue`} part of the following diagram:
`},inputs:["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],outputs:void 0,output:"para_13",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:31,mode:"ojs",body:function(e,t){return e(t,3,300)},inputs:["plot_treemap","splink_settings"],outputs:void 0,output:"treemap_4",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:32,mode:"ojs",body:function(e,t,a,s,i){return e`We now have:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}}`}

${t`${a(s(3),i,3)}`}
`},inputs:["md","texd","get_m_u_formula_numbers","get_row","splink_settings"],outputs:void 0,output:"para_14",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:33,mode:"ojs",body:function(e){return e`## Step 5: Town`},inputs:["md"],outputs:void 0,output:"subhead_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:34,mode:"ojs",body:function(e){return e},inputs:["viewof$town_val"],outputs:void 0,output:"town_view",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:35,mode:"ojs",body:function(e,t,a,s,i,l,u,n,r){return e`The final column is town.

${t("town",a)}
An example of the final data would be:
${s(i(4))}

According to the model parameters you've chosen:


- ${l("town",u(4),a,"m")}
- ${l("town",u(4),a,"u")}



Given this observation, we can subdivide the comparison space, and we know we must be in the ${n`yellow`} or ${r`blue`} part of the following diagram:
`},inputs:["md","choice_text","splink_settings","dict_as_md_table_row","get_row_no_gammas","get_m_u_text","get_row","m","nm"],outputs:void 0,output:"para_15",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:36,mode:"ojs",body:function(e,t){return e(t,4,300)},inputs:["plot_treemap","splink_settings"],outputs:void 0,output:"treemap_5",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:37,mode:"ojs",body:function(e,t,a,s,i,l){return e`The final match probability is therefore:

${t`\text{match probability} =  \frac{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}}{\lambda m_{1\ell}m_{2\ell}m_{3\ell}m_{4\ell}+ (1-\lambda)u_{1\ell}u_{2\ell}u_{3\ell}u_{4\ell}}`}

Which, in numbers is:


${a`${s(i(4),l)}`}
`},inputs:["md","texd","tex","get_m_u_formula_numbers","get_row","splink_settings"],outputs:void 0,output:"para_16",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:38,mode:"ojs",body:function(e,t,a){return e`## Annex:  Mathematical representation

This annex shows why it's possible to represent the calculation of match probability as a step-by-step computation.  

In particular, we will show that we can calculate match probability using a repeated application of Bayes Theorem.  In pseudocode, our algorithm will be:

\`\`\`
prior = lambda
for col in compaison_columns:
  posterior = bayes(col, prior)
  prior = posterior
\`\`\`


Where the final value of the posterior is equal to ${t`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2},\ldots,\gamma_{K})`}.

To demonstrate why this works, consider equation 1, for the case of two columns:

${a`
\operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{\lambda m_{1\ell}m_{2\ell}}{\lambda m_{1\ell}m_{2\ell}+ (1-\lambda)u_{1\ell}u_{1\ell}} \tag{2.1}`}

We start by applying Bayes Theorem once, accounting for the first comparison column:

${a`
\operatorname{Pr}(\text{records match}|\gamma_{1}) = t = \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}`}

This posterior, ${t`t`}, becomes the new prior, which we now use instead of lambda:
${a`
\text{posterior} = \operatorname{Pr}(\text{records match}|\gamma_{1},\gamma_{2}) = \frac{t m_{2\ell}}{t m_{2\ell}+ (1-t)u_{2\ell}}\tag{2.2}`}

Note that:

${a`
1- t = 1 - \frac{\lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell} - \lambda m_{1\ell}}{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}} = \frac{(1-\lambda)u_{1\ell} }{\lambda m_{1\ell}+ (1-\lambda)u_{1\ell}}\tag{2.3}`}

But ${t`(2.3)`} shows that  the term ${t`(\lambda m_{1\ell}+ (1-\lambda)u_{1\ell})`} appears on both top and bottom of ${t`(2.2)`} and therefore cancels, leaving ${t`(2.1)`}  as desired.

`},inputs:["md","tex","texd"],outputs:void 0,output:"annex",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:39,mode:"ojs",body:function(e){return e.options({displayMode:!0,fleqn:!0})},inputs:["tex"],outputs:void 0,output:"texd",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:40,mode:"ojs",body:function(e,t,a){return e`<style>
.katex-display>.katex { font-size: 1em}


textarea {
    max-height: 1000em !important;
    font-family: monospace !important;
}

.katex-display>.katex>.katex-html>.tag {right: unset; padding-left:4em}

.hl_m {
background-color: ${t.hex()};
display:inline-block;
}

.hl_nm {
background-color: ${a.hex()};
display:inline-block;
}

</style>`},inputs:["html","color_match","color_non_match"],outputs:void 0,output:"css_styles",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:41,mode:"ojs",body:function(e){return(function(a){let s={},i={fname:[{fname_l:"John",fname_r:"Tom"},{fname_l:"John",fname_r:"John"}],sname:[{sname_l:"Smith",sname_r:"Hanks"},{sname_l:"Smith",sname_r:"Smith"}],dob:[{dob_l:"1989-03-02",dob_r:"1981-08-21"},{dob_l:"1989-03-02",dob_r:"1989-03-02"}],town:[{town_l:"Bristol",town_r:"Peckham"},{town_l:"Bristol",town_r:"Bristol"}]};return e.comparison_columns.slice(0,a).forEach(u=>{let n=i[u.col_name][u.gamma_value];s={...s,...n};let r="𝛾_"+u.col_name;s[r]=u.gamma_value}),s})},inputs:["splink_settings"],outputs:void 0,output:"get_row",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:42,mode:"ojs",body:function(e){return(function(a){let s=e(a),i=Object.keys(s).filter(u=>!u.includes("𝛾_")),l={};return i.forEach(u=>{l[u]=s[u]}),l})},inputs:["get_row"],outputs:void 0,output:"get_row_no_gammas",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:43,mode:"ojs",body:function(e){return(function(a){let s=Object.keys(a).join(" | "),i=Object.keys(a).map(u=>"-").join(" | "),l=Object.values(a).join(" | ");return e`${s} \n ${i} \n ${l} \n`})},inputs:["md"],outputs:void 0,output:"dict_as_md_table_row",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:44,mode:"ojs",body:function(e){return e},inputs:["styles"],outputs:void 0,output:"additional_styles",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:45,mode:"ojs",body:function(e){return(function(a){return e`<span class="hl_nm">${a}</span>`})},inputs:["html"],outputs:void 0,output:"nm",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:46,mode:"ojs",body:function(e){return(function(a){return e`<span class="hl_m">${a}</span>`})},inputs:["html"],outputs:void 0,output:"m",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:47,mode:"ojs",body:function(e){return e},inputs:["form_styles"],outputs:void 0,output:"styles2",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:48,mode:"ojs",body:function(e,t,a){return(function(i,l,u,n){let r=u.comparison_columns.filter(d=>d.col_name==i)[0],f=l["𝛾_"+i],p;f==1?p="matches":f==0&&(p="does not match"),i.replace("_","\\_");let y=`The column \`${i}\` ${p}`,_=r[`${n}_probabilities`][f]*100;_=parseFloat(_).toFixed(0)+"%";let m;return n=="m"?m=e`matching records`:m=t`non-matching records`,a`${y} in ${_} of ${m}`})},inputs:["m","nm","md"],outputs:void 0,output:"get_m_u_text",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:49,mode:"ojs",body:function(e,t){return(function(s,i){let l;i.comparison_columns.forEach(r=>{r.col_name==s&&(l=r)});let u,n=l.gamma_value;return n==0?u="does not match":u="matches",e`You have chosen that the column \`${s}\` ${u}, i.e. that ${t`\gamma_\text{${s}}`} = ${n}.`})},inputs:["md","tex"],outputs:void 0,output:"choice_text",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:50,mode:"ojs",body:function(e){return e("@observablehq/inputs")},inputs:["require"],outputs:void 0,output:"inputs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{b as default};
