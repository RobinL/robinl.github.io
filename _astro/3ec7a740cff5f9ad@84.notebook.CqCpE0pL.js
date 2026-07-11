function f(a){let t,e,i,u=!1;const s=a(o=>{i=o,t?(t(o),t=e=void 0):u=!0});return{async next(){return{done:!1,value:await(u?(u=!1,i):new Promise((o,n)=>(t=o,e=n)))}},async return(){return e?.(new Error("Generator returned")),t=e=void 0,s?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function p(a){let t;return Object.defineProperty(f(e=>{t=e,a!==void 0&&e(a)}),"value",{get:()=>a,set:e=>(a=e,t?.(a))})}function c(a){const t=p(a);return[t,{get value(){return t.value},set value(e){t.value=e}}]}function r(a,t=()=>null){const e=a.module();r.FileAttachment&&e.variable().define("FileAttachment",[],()=>r.FileAttachment);for(const i of r.cells){const u=i.inputs??[],s=i.output;if(i.outputs?.length){const o=`cell ${i.id}`;e.variable(t(null)).define(o,u,i.body);for(const n of i.outputs)e.variable(!0).define(n,[o],l=>l[n])}else if(s)if(i.autoview){const o=s.slice(7),n=`viewof ${o}`;e.variable(t(n)).define(n,u,i.body),e.variable(t(o)).define(o,["Generators",n],(l,d)=>l.input(d))}else if(i.automutable){const o=s.slice(8),n=`cell ${i.id}`;e.define(s,u,i.body),e.define(n,[s],c),e.variable(t(o)).define(o,[n],([l])=>l),e.variable(!0).define(`mutable$${o}`,[n],([,l])=>l)}else e.variable(t(s)).define(s,u,i.body);else e.variable(t(null)).define(u,i.body)}return e}Object.assign(r,{title:"@robinl/intro-prob-linkage: 3ec7a740cff5f9ad@84.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(a){return a`# intro prob linkage`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(t){return t`
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
  </table>`},inputs:["html"],outputs:void 0,output:"input_table",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(t,e,i,u){let s=t.settingsToWaterfall(e,i[0]),o=t.charts.waterfall_chart(s,!1);return u(o)},inputs:["rlju","tutorial_settings","comparison_vector","embed"],outputs:void 0,output:"waterfall_chart",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(t,e,i,u){let o=t.settingsToWaterfall(e,i[0]).pop(),n=t.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(o.log2_bayes_factor);return n=(n*100).toFixed(1)+"%",u`<div><mark>The estimated probability these two records match is ${n}.</mark></div>`},inputs:["rlju","tutorial_settings","comparison_vector","html"],outputs:void 0,output:"estimated_probability",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(a){return a.convertMatchScoreMetrics.calcPartialMatchWeightFromProbability(1/1e7)},inputs:["rlju"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(a){return a.convertMatchScoreMetrics.calcProbabilityFromPartialMatchWeight(6)},inputs:["rlju"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(t){return t.tutorial_partial_match_weights_settings},inputs:["rlju"],outputs:void 0,output:"tutorial_settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(t,e){return t.settingsToPartialMatchWeightsData(e)},inputs:["rlju","tutorial_settings"],outputs:void 0,output:"partial_match_weight_chart_data_raw",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(t,e,i){return t.setBarIsActive(e,i[0])},inputs:["rlju","partial_match_weight_chart_data_raw","comparison_vector"],outputs:void 0,output:"partial_match_weight_chart_data_raw_with_barisactive",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(t,e,i){return t.applyComparisonFunctions(e,i)},inputs:["rlju","comparison_pairs","comparison_functions"],outputs:void 0,output:"comparison_vector",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(t,e){return t.createComparisonRows(e)},inputs:["rlju","tableData"],outputs:void 0,output:"comparison_pairs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(t,e,i){return t.observe(u=>{const s=o=>u(e.parseTableData(i));return i.addEventListener("input",s,!1),u(e.parseTableData(i)),()=>window.removeEventListener("input",s)})},inputs:["Generators","rlju","input_table"],outputs:void 0,output:"tableData",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(t){return{first_name:t.jaroWinklerComparison,surname:t.jaroWinklerComparison,postcode:t.levenshteinComparison,gender:t.exactMatchComparison}},inputs:["rlju"],outputs:void 0,output:"comparison_functions",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(t){return t("vega-embed@6")},inputs:["require"],outputs:void 0,output:"embed",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(t){return t("@robinl/record_linkage_javascript_utilities@0.0.7")},inputs:["require"],outputs:void 0,output:"rlju",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(t){return t.button("refresh splink_vis_utils javascript lib")},inputs:["Inputs"],outputs:void 0,output:"viewof$refresh",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]}]});export{r as default};
