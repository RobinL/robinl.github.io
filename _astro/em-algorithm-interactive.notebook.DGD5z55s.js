const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/em-algorithm.CbhRE-e6.js","_astro/NotebookCellProvider.D6sqgwCc.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/step.BThr63Mb.js","_astro/levenshtein.D_lFiBy5.js","_astro/_commonjsHelpers.DaWZu8wl.js","_astro/vega-embed.module.DiVocoQ4.js","_astro/feature.DXDMwmIR.js","_astro/observable-vega-embed.Ca3N63KR.js"])))=>i.map(i=>d[i]);
import{_ as T}from"./preload-helper.zoZ8CRZ9.js";function c(i,t=()=>null){const e=i.module();c.FileAttachment&&e.variable().define("FileAttachment",[],()=>c.FileAttachment);for(const a of c.cells){const o=a.inputs??[],s=a.output;if(a.outputs?.length){const n=`cell ${a.id}`;e.variable(t(null)).define(n,o,a.body);for(const d of a.outputs)e.variable(!0).define(d,[n],l=>l[d])}else if(s)if(a.autoview){const n=s.slice(7),d=`viewof ${n}`;e.variable(t(d)).define(d,o,a.body),e.variable(t(n)).define(n,["Generators",d],(l,m)=>l.input(m))}else e.variable(t(s)).define(s,o,a.body);else e.variable(t(null)).define(o,a.body)}return e}Object.assign(c,{title:"Unsupervised probabilistic data matching using the Expectation Maximisation algorithm",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{data_left_template:i,data_right_template:t,match_pairs_template:e,textarea:a,slider:o,computeEmState:s,comparisonVector:n,estimatedMatchProbability:d,renderTable:l,renderLikelihoodHistory:m,renderPiChart:_}=await T(()=>import("./em-algorithm.CbhRE-e6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(r=>{if(!("data_left_template"in r))throw new SyntaxError("export 'data_left_template' not found");if(!("data_right_template"in r))throw new SyntaxError("export 'data_right_template' not found");if(!("match_pairs_template"in r))throw new SyntaxError("export 'match_pairs_template' not found");if(!("textarea"in r))throw new SyntaxError("export 'textarea' not found");if(!("slider"in r))throw new SyntaxError("export 'slider' not found");if(!("computeEmState"in r))throw new SyntaxError("export 'computeEmState' not found");if(!("comparisonVector"in r))throw new SyntaxError("export 'comparisonVector' not found");if(!("estimatedMatchProbability"in r))throw new SyntaxError("export 'estimatedMatchProbability' not found");if(!("renderTable"in r))throw new SyntaxError("export 'renderTable' not found");if(!("renderLikelihoodHistory"in r))throw new SyntaxError("export 'renderLikelihoodHistory' not found");if(!("renderPiChart"in r))throw new SyntaxError("export 'renderPiChart' not found");return r});return{data_left_template:i,data_right_template:t,match_pairs_template:e,textarea:a,slider:o,computeEmState:s,comparisonVector:n,estimatedMatchProbability:d,renderTable:l,renderLikelihoodHistory:m,renderPiChart:_}},inputs:[],outputs:["data_left_template","data_right_template","match_pairs_template","textarea","slider","computeEmState","comparisonVector","estimatedMatchProbability","renderTable","renderLikelihoodHistory","renderPiChart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:3,mode:"js",body:(i,t)=>{const e=i`# Unsupervised probabalistic data matching using the Expectation Maximisation algorithm`;return t(e),{title:e}},inputs:["md","display"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:4,mode:"js",body:(i,t)=>{const e=i`This notebook is an interactive implementation of the Fellegi-Sunter model of record linkage, with record linkage probabilities estimated using the Expectation Maximisation (EM) algorithm.

This is an unsupervised approach to finding matching records, which seems like magic to me - so hopefully this notebook helps demystify how this is possible.
`;return t(e),{out_1:e}},inputs:["md","display"],outputs:["out_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:(i,t)=>{const e=i`## Input data

Consider two tables, which we are trying to match to one another.   \`mob\` stands for month of birth.
**Note**: You can edit this data so long as you keep the column names the same.

`;return t(e),{out_2:e}},inputs:["md","display"],outputs:["out_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:6,mode:"js",body:(i,t)=>{const e=i`**Left table:**`;return t(e),{out_3:e}},inputs:["md","display"],outputs:["out_3"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:7,mode:"js",body:(i,t,e)=>({left_table_csv:i(t({value:e,rows:6,width:"100%"}))}),inputs:["view","textarea","data_left_template"],outputs:["left_table_csv"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:8,mode:"js",body:(i,t,e,a)=>{const o=i`${t(e)}`;return a(o),{out_4:o}},inputs:["md","table","data_left","display"],outputs:["out_4"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:9,mode:"js",body:(i,t)=>{const e=i`**Right table:**`;return t(e),{out_5:e}},inputs:["md","display"],outputs:["out_5"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:10,mode:"js",body:(i,t,e)=>({right_table_csv:i(t({value:e,rows:6,width:"100%"}))}),inputs:["view","textarea","data_right_template"],outputs:["right_table_csv"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:11,mode:"js",body:(i,t,e,a)=>{const o=i`

${t(e)}


`;return a(o),{out_6:o}},inputs:["md","table","data_right","display"],outputs:["out_6"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:12,mode:"js",body:(i,t)=>{const e=i`**Real matches**

These are the records which match in reality. You only need to include records which match, i.e. where label = 1.  These are the unknowns the model is trying to estimate
`;return t(e),{out_7:e}},inputs:["md","display"],outputs:["out_7"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:13,mode:"js",body:(i,t,e)=>({match_pairs_csv:i(t({value:e,rows:6,width:"100%"}))}),inputs:["view","textarea","match_pairs_template"],outputs:["match_pairs_csv"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:14,mode:"js",body:(i,t,e,a,o,s)=>{const n=i`${t`<br>`}

${e(a)}



Finally, here are all the possible record comparisons:

${e(o)}`;return s(n),{out_8:n}},inputs:["md","html","table","match_pairs","combinations","display"],outputs:["out_8"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:15,mode:"js",body:(i,t,e,a,o)=>{const s=i`To set this up as a maximum likelihood estimation problem, we need to make some assumptions about the structure of the problem, and choose some parameters to estimate.

First, we will designate λ the proportion of comparisons which are matches.  This is an unknown parameter to be estimated.  In the case of this data, the true λ is ${t(e)}.

Next, we will create the concept of a _comparison vector_, which is a way of encoding record comparisons into a vector.

In this simple example our comparison vector, ${a`\gamma`} will be of length ${a`k=2`} , i.e. ${a`\gamma = [\gamma_1, \gamma_2]`} and will encode the following two rules:

- If \`mob\` matches,  ${a`\gamma_1 = 1`} else ${a`\gamma_1 = 0`}
- If \`surname\` matches exactly  ${a`\gamma_2 = 1`}. If it is similar ${a`\gamma_2 = 0.5`}.  Otherwise ${a`\gamma_2 = 0`}


We will then assume that element ${a`i`} of the comparison vector is a draw from one of two discrete distributions:

${a`\pi_{i,m=1}`}, the discrete distribution of ${a`\gamma_i`} when the records match

and


${a`\pi_{i,m=0}`}, the discrete distribution of ${a`\gamma_i`} when the records do not match

`;return o(s),{out_9:s}},inputs:["md","num_fmt","true_lambda","tex","display"],outputs:["out_9"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:16,mode:"js",body:(i,t,e,a)=>{const o=i` Here are the comparison vectors for this data:

${t(e)}

Each row represents the comparison vector, which has two elements [𝛾1, 𝛾2].

`;return a(o),{out_10:o}},inputs:["md","table","comparison_vectors","display"],outputs:["out_10"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:17,mode:"js",body:(i,t,e)=>{const a=i`These assumptions are all we need to define the equation for the likelihood.  The equation looks quite complicated (see page 356 [here](https://imai.fas.harvard.edu/research/files/linkage.pdf)):

${t`\prod_{i=1}^{N_{\mathcal{A}}} \prod_{j=1}^{N_{\mathcal{B}}}\left\{\sum_{m=0}^{1} \lambda^{m}(1-\lambda)^{1-m} \prod_{k=1}^{K}\left(\prod_{\ell=0}^{L_{k}-1} \pi_{k m \ell}^{1\left\{\gamma_{k}(i, j)=\ell\right\}}\right)^{1-\delta_{k}(i, j)}\right\}`}

But expressed in words it's quite simple - approximately:

- For each element of the comparison vector, the probability of the observed outcome is ${t`\lambda (\pi_{i,m=1}|\gamma_i)  + (1-\lambda) (\pi_{i,m=0}|\gamma_i)`}
- Compute this probability for each of the ${t`k`} elements of the comparison vector in the row, and multiply together.  This represents the likelihood of the row
- Compute this for each row, and multiply together

`;return e(a),{out_11:a}},inputs:["md","tex","display"],outputs:["out_11"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:18,mode:"js",body:(i,t,e)=>{const a=i`To estimate which record comparisons are matches, we need to estimate the unknown parameters, which are ${t`\lambda`} and the parameters of the four discrete distributions ${t`\pi_{i,m}`}.

There's an algorithm called the Expectation Maximisation algorithm which can solve this problem iteratively.

In this notebook, rather than implement this algorithm, we will simply let you choose the parameters to try and maximise the log likelihood manually.

## Estimating matches`;return e(a),{out_12:a}},inputs:["md","tex","display"],outputs:["out_12"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:19,mode:"js",body:(i,t)=>({lambda:i(t({title:"Choose λ, the proportion of combinations which are matches",min:0,max:1,step:.01,value:.5}))}),inputs:["view","slider"],outputs:["lambda"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:20,mode:"js",body:(i,t)=>({pi1_1_m1:i(t({title:"Month of birth comparison, probability month of birth matches given m=1",min:0,max:1,step:.01,value:.5}))}),inputs:["view","slider"],outputs:["pi1_1_m1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:21,mode:"js",body:(i,t)=>({pi1_1_m0:i(t({title:"Month of birth comparison, probability month of birth matches given records DO NOT match",min:0,max:1,step:.01,value:.5}))}),inputs:["view","slider"],outputs:["pi1_1_m0"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:22,mode:"js",body:(i,t)=>({pi2_1_m1:i(t({title:"Surname comparison, probability field exactly matches given records match",min:0,max:1,step:.01,value:.3}))}),inputs:["view","slider"],outputs:["pi2_1_m1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:23,mode:"js",body:(i,t)=>({pi2_05_m1:i(t({title:"Surname comparison, probability fields similar given records match",min:0,max:1,step:.01,value:.3}))}),inputs:["view","slider"],outputs:["pi2_05_m1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:24,mode:"js",body:(i,t)=>({pi2_1_m0:i(t({title:"Surname comparison, probability field exactly matches given records DO NOT match",min:0,max:1,step:.01,value:.3}))}),inputs:["view","slider"],outputs:["pi2_1_m0"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:25,mode:"js",body:(i,t)=>({pi2_05_m0:i(t({title:"Surname comparison, probability fields similar given records DO NOT match",min:0,max:1,step:.01,value:.3}))}),inputs:["view","slider"],outputs:["pi2_05_m0"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:26,mode:"js",body:(i,t,e,a)=>{const o=i`The log likelihood given these parameters is ${t(e)}`;return a(o),{out_13:o}},inputs:["md","num_fmt","log_likelihood","display"],outputs:["out_13"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:27,mode:"js",body:(i,t)=>{const e=i`Here's a history of the values of log likelihood as you've been adjusting the sliders:`;return t(e),{out_14:e}},inputs:["md","display"],outputs:["out_14"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:28,mode:"js",body:async(i,t,e)=>(i(await t(e)),{ll_chart:null}),inputs:["display","renderLikelihoodHistory","history_ll"],outputs:["ll_chart"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:29,mode:"js",body:(i,t,e)=>{const a=i`This chart shows ${t`\pi_{1,m=0}`} and ${t`\pi_{1,m=1}`}, the discrete distributions that you've chosen for ${t`\gamma_1`}, the \`mob\` comparison vector.`;return e(a),{out_15:a}},inputs:["md","tex","display"],outputs:["out_15"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:30,mode:"js",body:async(i,t,e,a)=>(i(await t([{gamma:"1",probability:e,match:"Records match"},{gamma:"0",probability:1-e,match:"Records match"},{gamma:"1",probability:a,match:"Records do not match"},{gamma:"0",probability:1-a,match:"Records do not match"}],"Month of birth comparison distributions")),{pi_chart_1:null}),inputs:["display","renderPiChart","pi1_1_m1","pi1_1_m0"],outputs:["pi_chart_1"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:31,mode:"js",body:(i,t,e)=>{const a=i`This chart shows ${t`\pi_{2,m=0}`} and ${t`\pi_{2,m=1}`}, the discrete distributions you've chosen for ${t`\gamma_2`}, the \`surname\` comparison vector.`;return e(a),{out_16:a}},inputs:["md","tex","display"],outputs:["out_16"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:32,mode:"js",body:async(i,t,e,a,o,s)=>(i(await t([{gamma:"1",probability:e,match:"Records match"},{gamma:"0.5",probability:a,match:"Records match"},{gamma:"0",probability:1-e-a,match:"Records match"},{gamma:"1",probability:o,match:"Records do not match"},{gamma:"0.5",probability:s,match:"Records do not match"},{gamma:"0",probability:1-o-s,match:"Records do not match"}],"Surname comparison distributions")),{pi_chart_2:null}),inputs:["display","renderPiChart","pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0"],outputs:["pi_chart_2"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:33,mode:"js",body:(i,t,e,a)=>{const o=i`Given the parameter values you've selected, we can now compute the probability that we have a match for each record comparison, ${t`P(m)`}.

We can write the probabilities of observing ${t`\gamma_i`} given our parameters, and whether the record is a match:

${t`p1 = \lambda P(\gamma_1|\pi_{1,m=1})`}

${e`<br>`}

${t`p2 = \lambda P(\gamma_2|\pi_{2,m=1}) `}

${e`<br>`}

${t`n1 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}

${e`<br>`}

${t`n2 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}


The probability of a given record being a match is then:

${t`\frac{p1 p2}{p1 p2 + n1 n2} = \frac{1}{1 + \frac{n1 n2}{p1 p2}}`}.
`;return a(o),{out_17:o}},inputs:["md","tex","html","display"],outputs:["out_17"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:34,mode:"js",body:(i,t,e)=>(i(t(e.estimates)),{out_18:null}),inputs:["display","renderTable","emState"],outputs:["out_18"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:35,mode:"js",body:(i,t)=>{const e=i`## Annex: Code

This is the code I used to compute the log likelihood:

\`\`\`javascript
{
 function log_probability_of_element_of_gamma(elem, pi) {
    let prob =  lambda * pi["1"][elem] + (1-lambda) * pi["0"][elem]
    return Math.log(prob)
  }

  function log_probability_of_comparison(comparison_vector) {
    let elem = comparison_vector["𝛾1"]
    let ln_prob_1 = log_probability_of_element_of_gamma(elem, pi_mob)

    elem = comparison_vector["𝛾2"]
    let ln_prob_2 = log_probability_of_element_of_gamma(elem, pi_surname)

    return ln_prob_1 + ln_prob_2
  }

  let log_probs_of_rows = comparison_vectors.map(cv => log_probability_of_comparison(cv))

  return log_probs_of_rows.reduce((a,b) => a + b)
}
\`\`\`

and the code to compute the probability of a match:


\`\`\`javascript
get_estimated_match_probability = function(comparison_vector) {
  let gamma1 = comparison_vector["𝛾1"]
  let gamma2 = comparison_vector["𝛾2"]

  let prob_match_1 = lambda * pi_mob["1"][gamma1]
  let prob_no_match_1 = (1-lambda) * pi_mob["0"][gamma1]
  let sum_1 = prob_match_1 + prob_no_match_1


  let prob_match_2 = lambda * pi_surname["1"][gamma1]
  let prob_no_match_2 = (1-lambda) * pi_surname["0"][gamma1]
  let sum_2 = prob_match_2 + prob_no_match_2

  // Is the following calculation correct?
  let lr = (prob_match_1 * prob_match_2) / (prob_match_1*prob_match_2 + prob_no_match_1*prob_no_match_2)

  return lr

}
\`\`\`

`;return t(e),{out_19:e}},inputs:["md","display"],outputs:["out_19"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:100,mode:"js",body:(i,t,e,a,o,s,n,d,l,m,_,r,f,b,y)=>{const h={lambda:i,pi1_1_m1:t,pi1_1_m0:e,pi2_1_m1:a,pi2_05_m1:o,pi2_1_m0:s,pi2_05_m0:n},u=d(l,m,_,h),w=u.left,v=u.right,g=u.matches,$=u.combinations,j=u.comparisonVectors,k=u.trueLambda,x=u.likelihood,S=u.history;return{parameters:h,emState:u,data_left:w,data_right:v,match_pairs:g,combinations:$,comparison_vectors:j,true_lambda:k,log_likelihood:x,history_ll:S,table:r,num_fmt:p=>Number(p).toLocaleString(void 0,{maximumFractionDigits:3}),get_comparison_vector:f,deepcopy:p=>b(p),get_estimated_match_probability:p=>y(p,h)}},inputs:["lambda","pi1_1_m1","pi1_1_m0","pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0","computeEmState","left_table_csv","right_table_csv","match_pairs_csv","renderTable","comparisonVector","structuredClone","estimatedMatchProbability"],outputs:["parameters","emState","data_left","data_right","match_pairs","combinations","comparison_vectors","true_lambda","log_likelihood","history_ll","table","num_fmt","get_comparison_vector","deepcopy","get_estimated_match_probability"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{c as default};
