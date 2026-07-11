function k(i){let e,t,l,n=!1;const s=i(o=>{l=o,e?(e(o),e=t=void 0):n=!0});return{async next(){return{done:!1,value:await(n?(n=!1,l):new Promise((o,u)=>(e=o,t=u)))}},async return(){return t?.(new Error("Generator returned")),e=t=void 0,s?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function O(i){let e;return Object.defineProperty(k(t=>{e=t,i!==void 0&&t(i)}),"value",{get:()=>i,set:t=>(i=t,e?.(i))})}function z(i){const e=O(i);return[e,{get value(){return e.value},set value(t){e.value=t}}]}function g(i,e=()=>null){const t=i.module();g.FileAttachment&&t.variable().define("FileAttachment",[],()=>g.FileAttachment);for(const l of g.cells){const n=l.inputs??[],s=l.output;if(l.outputs?.length){const o=`cell ${l.id}`;t.variable(e(null)).define(o,n,l.body);for(const u of l.outputs)t.variable(!0).define(u,[o],r=>r[u])}else if(s)if(l.autoview){const o=s.slice(7),u=`viewof ${o}`;t.variable(e(u)).define(u,n,l.body),t.variable(e(o)).define(o,["Generators",u],(r,p)=>r.input(p))}else if(l.automutable){const o=s.slice(8),u=`cell ${l.id}`;t.define(s,n,l.body),t.define(u,[s],z),t.variable(e(o)).define(o,[u],([r])=>r),t.variable(!0).define(`mutable$${o}`,[u],([,r])=>r)}else t.variable(e(s)).define(s,n,l.body);else t.variable(e(null)).define(n,l.body)}return t}Object.assign(g,{title:"@robinl/visualising-fellegi-sunter: 379dba93f4bb9357@1129.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(i){return i`# Treemap for Bayes Intuition`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(e,t){return e.textarea({value:t,rows:29})},inputs:["inputs","default_settings"],outputs:void 0,output:"viewof$settings_raw",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(e,t){let l=e.comparison_columns.length;return t.range([0,l],{step:1,label:"How many columns to take account of?"})},inputs:["settings","inputs"],outputs:void 0,output:"viewof$max_depth_1",display:!1,autodisplay:!0,autoview:!0,automutable:!1,files:[]},{id:4,mode:"ojs",body:function(i){return i`In the following diagram, the outermost rectangle represents the space all pairwise record comparisons.  

This can then be recursively split into subsets, beginning with spliting between record pairs that match and those that do not match, then further splitting these rectangles based on comparisons of the values in columns.
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(i,e,t){return i(e,t,600)},inputs:["plot_treemap","settings","max_depth_1"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(e,t,l,n,s,o,u){return(function(r,p,d){const b=e(r),h=t(b,d),m=l`<div class="treemap_container">`,f=n.select(m).append("div").attr("class","svg-tooltip").style("position","absolute").style("display","inline-block").style("visibility","hidden").attr("pointer-events","none"),j=n.select(m).append("svg").attr("height",d).attr("width",s);let v=n.filter(h,a=>a.depth<=p+1);v=n.group(v,a=>a.height);const y=j.selectAll("g").data(v).join("g").selectAll("g").data(a=>a[1]).join("g").attr("transform",a=>`translate(${a.x0},${a.y0})`);return y.append("rect").attr("id",a=>(a.nodeUid=o.uid("node")).id).attr("width",a=>a.x1-a.x0).attr("height",a=>a.y1-a.y0).attr("stroke-width","1px").attr("stroke","black").attr("fill",a=>{if(a.depth==p+1)return n.rgb(a.data.colour);{let c=n.rgb(a.data.colour);return c.hex()!="#ffffff"&&(a.depth==1?c.opacity=.3:c.opacity=0),c}}),y.append("foreignObject").attr("pointer-events","none").attr("width",a=>a.x1-a.x0).attr("height",a=>a.y1-a.y0).attr("xmlns","http://www.w3.org/1999/xhtml").append("xhtml:div").attr("class","wrap-info").append("div").html(a=>u(a,p)),y.filter(a=>a.children).selectAll("tspan").attr("dx",3).attr("y",13),y.filter(a=>!a.children).selectAll("tspan").attr("x",3).attr("y",(a,c,_)=>`${(c===_.length-1)*.3+1.1+c*.9}em`),j.selectAll("rect").on("mouseover",function(a){return f.style("visibility","visible")}).on("mousemove",function(a){let c=n.select(this).datum(),_=u(c,p);f.html(_);let x,w;f.node().getBoundingClientRect().height;let $=f.node().getBoundingClientRect().width;x=a.offsetY+10+"px",s-a.layerX>$?w=a.offsetX+10+"px":w=a.offsetX-$-10+"px";let A="visible";return _==""&&(A="hidden"),f.style("top",x).style("left",w).style("visibility",A)}).on("click",function(a){console.log(`height: ${d}`),console.log(`event.layerY: ${a.layerY}`)}).on("mouseout",function(){return f.style("visibility","hidden")}),m})},inputs:["generate_treemap_data","treemap","html","d3","width","DOM","box_html"],outputs:void 0,output:"plot_treemap",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e){return(function t(l,n,s){if("children"in l)l.children.forEach(o=>{t(o,n,s)});else{let o=e(n,l,s);l.children=o}delete l.value})},inputs:["children_to_add"],outputs:void 0,output:"add_children_from_column",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(e,t,l){return(function(s,o,u){let r=[],p,d;return u?(p=s.m_probabilities,d=e):(p=s.u_probabilities,d=t),p.forEach((b,h)=>{let m="gamma_"+s.col_name+" = "+h,f={name:m,name_list:o.name_list.concat(m),value:o.value*b,prob:b,prob_list:o.prob_list.concat(b)};s.gamma_value==h&&o.colour==d?f.colour=d:f.colour=l.rgb(255,255,255),r.push(f)}),r})},inputs:["color_match","color_non_match","d3"],outputs:void 0,output:"children_to_add",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e,t,l,n){return(function(s){let o=s.proportion_of_matches,u={name:"All comparisons",name_list:[],prob_list:[],prob:1,colour:e.rgb(255,255,255),children:[{name:"matches",name_list:["match"],prob_list:[o],prob:o,value:o,colour:t},{name:"non-match",name_list:["non-match"],prob_list:[1-o],prob:1-o,value:1-o,colour:l}]},r=u.children[0],p=u.children[1];return s.comparison_columns.forEach((d,b)=>{n(r,d,!0),n(p,d,!1)}),u})},inputs:["d3","color_match","color_non_match","add_children_from_column"],outputs:void 0,output:"generate_treemap_data",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(e,t){return(function(n,s){let o=n.data.name_list,u=n.data.prob_list,d=o.map((m,f)=>[m,u[f]]).map(m=>`<p>${m[0]} (${e(m[1])})`).join(" and "),b=u.reduce((m,f)=>m*f,1);d=d+`<p>Proportion of all comparisons: ${e(b)}`;let h=t`${d}`;return n.depth==s+1?h.innerHTML:""})},inputs:["format_perc","html"],outputs:void 0,output:"box_html",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e){return JSON.parse(e)},inputs:["settings_raw"],outputs:void 0,output:"settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(i){return JSON.stringify(i)},inputs:["settings"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:13,mode:"ojs",body:function(e){return e`
<style>
.wrap-info {
  padding: 5px;
  font-family: monospace;
  font-size: 0.6em;
  line-height: 1.3em;
}
.wrap-info p {
  margin-top: 0px;
  margin-bottom: 0.1rem;
  
}
textarea {
    max-height: 1000em !important
}

.svg-tooltip {

    background: rgba(69,77,93,.9);
    border-radius: .1rem;
    color: #fff;
    display: inline-block;
    max-width: 500px;
    padding: .2rem .4rem;
    position: absolute;
    text-overflow: ellipsis;
    white-space: pre;
    z-index: 300;
    visibility: hidden;
  }

.svg-tooltip p {
font-family: sans-serif;
    padding: 0;
    margin: 0.2rem;
      font-size: 0.8em;
    line-height: 1.0em;
  }
</style>`},inputs:["html"],outputs:void 0,output:"styles",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:14,mode:"ojs",body:function(e,t){return((l,n)=>e.treemap().tile(e.treemapSquarify).size([t,n]).paddingOuter(5).paddingTop(5).paddingInner(5).round(!0)(e.hierarchy(l).sum(s=>s.value).sort((s,o)=>o.value-s.value)))},inputs:["d3","width"],outputs:void 0,output:"treemap",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:15,mode:"ojs",body:function(){return`{
    "proportion_of_matches": 0.4,
    "comparison_columns": [
        {
            "col_name": "fname",
            "m_probabilities": [0.25, 0.75],
            "u_probabilities": [0.7,  0.3],
            "gamma_value": 1
        },
        {
            "col_name": "sname",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 0
        },
        {
            "col_name": "dob",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        },
        {
            "col_name": "town",
            "m_probabilities": [0.2, 0.8],
            "u_probabilities": [0.8,  0.2],
            "gamma_value": 1
        }
    ]
}`},inputs:[],outputs:void 0,output:"default_settings",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:16,mode:"ojs",body:function(e){return e.format(".1%")},inputs:["d3"],outputs:void 0,output:"format_perc",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:17,mode:"ojs",body:function(e){return e.scaleOrdinal(e.schemeCategory10)},inputs:["d3"],outputs:void 0,output:"colours",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:18,mode:"ojs",body:function(e,t){return e.rgb(t(2)).brighter(2.5)},inputs:["d3","colours"],outputs:void 0,output:"color_match",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:19,mode:"ojs",body:function(e,t){return e.rgb(t(1)).brighter(1.5)},inputs:["d3","colours"],outputs:void 0,output:"color_non_match",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:20,mode:"ojs",body:function(e){return e("d3@6")},inputs:["require"],outputs:void 0,output:"d3",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:21,mode:"ojs",body:function(e){return e("@observablehq/inputs")},inputs:["require"],outputs:void 0,output:"inputs",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:22,mode:"ojs",body:function(i,e){return i(e)},inputs:["generate_treemap_data","settings"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{g as default};
