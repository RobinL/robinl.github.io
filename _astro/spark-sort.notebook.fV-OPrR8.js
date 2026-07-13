const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/spark-ui.CY2TPVOx.js","_astro/NotebookCellProvider.CYO8crXj.js","_astro/preload-helper.zoZ8CRZ9.js","_astro/index.CBFZI7UH.js","_astro/step.BThr63Mb.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./preload-helper.zoZ8CRZ9.js";function d(a,e=()=>null){const t=a.module();d.FileAttachment&&t.variable().define("FileAttachment",[],()=>d.FileAttachment);for(const n of d.cells){const s=n.inputs??[],o=n.output;if(n.outputs?.length){const i=`cell ${n.id}`;t.variable(e(null)).define(i,s,n.body);for(const r of n.outputs)t.variable(!0).define(r,[i],l=>l[r])}else if(o)if(n.autoview){const i=o.slice(7),r=`viewof ${i}`;t.variable(e(r)).define(r,s,n.body),t.variable(e(i)).define(i,["Generators",r],(l,u)=>l.input(u))}else t.variable(e(o)).define(o,s,n.body);else t.variable(e(null)).define(s,n.body)}return t}Object.assign(d,{title:"Understanding the Spark UI by example: sorting data",FileAttachment:void 0,cells:[{id:1,mode:"js",body:async()=>{const{sortHtml:a,renderSparkJobs:e,renderSparkPlan:t,renderSparkMetadata:n,sparkStyles:s}=await p(()=>import("./spark-ui.CY2TPVOx.js"),__vite__mapDeps([0,1,2,3,4])).then(o=>{if(!("sortHtml"in o))throw new SyntaxError("export 'sortHtml' not found");if(!("renderSparkJobs"in o))throw new SyntaxError("export 'renderSparkJobs' not found");if(!("renderSparkPlan"in o))throw new SyntaxError("export 'renderSparkPlan' not found");if(!("renderSparkMetadata"in o))throw new SyntaxError("export 'renderSparkMetadata' not found");if(!("sparkStyles"in o))throw new SyntaxError("export 'sparkStyles' not found");return o});return{sortHtml:a,renderSparkJobs:e,renderSparkPlan:t,renderSparkMetadata:n,sparkStyles:s}},inputs:[],outputs:["sortHtml","renderSparkJobs","renderSparkPlan","renderSparkMetadata","sparkStyles"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:2,mode:"js",body:(a,e)=>(a(e`# Understanding the Spark UI by example: sorting data`),{title:null}),inputs:["display","md"],outputs:["title"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:3,mode:"js",body:(a,e)=>(a(e`

### Introduction 

This post uses the output of the Spark UI to explain what happens when you ask Spark to sort a large(ish) dataset. 

For more information about the Spark UI and the dataset we're using, see the [first post](https://robinl.github.io/robinlinacre/left_join/) in this series.  

We're going to execute the following 

\`\`\`sql
SELECT distance, origin, dest
FROM flights
ORDER BY distance DESC
\`\`\`

against the \`flights\` table, which has 123,534,969 records.

You can see the script [here](https://github.com/RobinL/understanding_spark_ui/blob/master/04-sort.ipynb)

### Interactive Spark UI

The following is the contents of the SQL tab in the Spark UI.  I've added additional details to the tooltips to help explain what's going on:



`),{intro:null}),inputs:["display","md"],outputs:["intro"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:4,mode:"js",body:(a,e,t)=>(a(e(t)),{jobs:null}),inputs:["display","renderSparkJobs","sortHtml"],outputs:["jobs"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:5,mode:"js",body:()=>({annotations:{node_3:`Shuffle the data using rangepartitioning.  To sort a large dataset in parallel across \`n\` worker nodes, it wouldn't be particularly useful to randomly assign data to different worker nodes.   Instead, we need a strategy where each worker node can sort the data, and this results in a globally sorted dataset. This is what a range partitioner does: it tries to partition your dataset into \`spark.sql.shuffle.partition\` partitions of roughly equal ranges.

Each partition will have a min and max row, relative to the given ordering. All rows that are in between min and max in this ordering will reside in the partition. 

This explains why two scans of data are needed, and this SQL plan consists of two jobs (remember each job corresponds to an RDD action).  The first scan is needed to determine the min and max of each partition.  Spark samples (using reservoir sampling, see [here](https://github.com/eBay/Spark/blob/master/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)) the whole dataset to determine min and max values for each partition that should roughly equally split the data.  In the second job, these values are used to shuffle the data.

The actual number of partitions created by the RangePartitioner might not be the same as the partitions parameter, in the case where the number of sampled records is less than the value of partitions.
`,node_6:"Read in the original data.  Note that the 'number of output rows' is 247m, twice the input data size of 123.5m rows.  This gives us a clue that the data has been scanned twice. See the tooltip for the 'exchange' node for more details. "}}),inputs:[],outputs:["annotations"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:6,mode:"js",body:(a,e,t,n)=>(a(e(t,n)),{plan:null}),inputs:["display","renderSparkPlan","sortHtml","annotations"],outputs:["plan"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:7,mode:"js",body:(a,e)=>(a(e`## Observations

The most interesting performance-related clues we see from the UI are:

- There are two jobs, despite the job appearing to correspond to a single action.  See the notes on the 'exchange' node to see why there are in fact two actions, and therefore two jobs.
- We can see from the 'scan parquet' node that the data is scanned twice.  See the notes on the 'exchange' node for an explanation.
`),{observations:null}),inputs:["display","md"],outputs:["observations"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:10,mode:"js",body:(a,e)=>(a(e`## References and useful resources:

[Stackoverflow: How does Spark achieve sort order](https://stackoverflow.com/questions/32887595/how-does-spark-achieve-sort-order/32888236#32888236)

[Stackoverflow: Number of dataframe partitions after sorting?](https://stackoverflow.com/questions/53786188/number-of-dataframe-partitions-after-sorting)

[The determineBounds method that the range partitioner uses](https://github.com/apache/spark/blob/3da71f2da192276af041024b73e85e0acaac66a4/core/src/main/scala/org/apache/spark/Partitioner.scala#L322)

[The sampling method that the range partitioner uses](https://github.com/apache/spark/blob/16f1b23d75c0b44aac61111bfb2ae9bb0f3fab68/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)

`),{references:null}),inputs:["display","md"],outputs:["references"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:11,mode:"js",body:(a,e)=>(a(e()),{mystyles:null}),inputs:["display","sparkStyles"],outputs:["mystyles"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]},{id:12,mode:"js",body:(a,e,t)=>(a(e(t)),{metadata:null}),inputs:["display","renderSparkMetadata","sortHtml"],outputs:["metadata"],output:void 0,display:!0,autodisplay:!1,autoview:void 0,files:[]}]});export{d as default};
