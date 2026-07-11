var u=Object.freeze,m=Object.defineProperty;var c=(e,t)=>u(m(e,"raw",{value:u(t||e.slice())}));function g(e){let t,a,i,s=!1;const l=e(o=>{i=o,t?(t(o),t=a=void 0):s=!0});return{async next(){return{done:!1,value:await(s?(s=!1,i):new Promise((o,n)=>(t=o,a=n)))}},async return(){return a?.(new Error("Generator returned")),t=a=void 0,l?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function h(e){let t;return Object.defineProperty(g(a=>{t=a,e!==void 0&&a(e)}),"value",{get:()=>e,set:a=>(e=a,t?.(e))})}function b(e){const t=h(e);return[t,{get value(){return t.value},set value(a){t.value=a}}]}function r(e,t=()=>null){const a=e.module();r.FileAttachment&&a.variable().define("FileAttachment",[],()=>r.FileAttachment);for(const i of r.cells){const s=i.inputs??[],l=i.output;if(i.outputs?.length){const o=`cell ${i.id}`;a.variable(t(null)).define(o,s,i.body);for(const n of i.outputs)a.variable(!0).define(n,[o],d=>d[n])}else if(l)if(i.autoview){const o=l.slice(7),n=`viewof ${o}`;a.variable(t(n)).define(n,s,i.body),a.variable(t(o)).define(o,["Generators",n],(d,p)=>d.input(p))}else if(i.automutable){const o=l.slice(8),n=`cell ${i.id}`;a.define(l,s,i.body),a.define(n,[l],b),a.variable(t(o)).define(o,[n],([d])=>d),a.variable(!0).define(`mutable$${o}`,[n],([,d])=>d)}else a.variable(t(l)).define(l,s,i.body);else a.variable(t(null)).define(s,i.body)}return a}var f;Object.assign(r,{title:"@robinl/unsupervised-probabalistic-data-matching-using-the-expec: 7764a40fe6b83ca1@437.js",FileAttachment:void 0,cells:[{id:1,mode:"ojs",body:function(e){return e`# Vega-Lite API v4`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:2,mode:"ojs",body:function(e){return e`The [Vega-Lite JavaScript API](https://github.com/vega/vega-lite-api/) provides a convenient way to write [Vega-Lite](https://vega.github.io/vega-lite) specifications in a programmatic fashion. Scroll down for some usage examples, or browse the [Vega-Lite API example collection](https://observablehq.com/collection/@vega/vega-lite-api)!

This notebook uses **version 4** of Vega-Lite and the corresponding Vega-Lite API 4.0. _To use the more recent Vega-Lite version 5, see the [Vega-Lite API v5 notebook](https://observablehq.com/@vega/vega-lite-api-v5) instead._

Want to learn more about data visualization and how to use the Vega-Lite API? Read the [introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite) and the [data visualization curriculum](https://observablehq.com/@uwdata/data-visualization-curriculum?collection=@uwdata/visualization-curriculum).`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:3,mode:"ojs",body:function(e){return e`
The cell below imports the Vega-Lite API and registers the desired versions of Vega and Vega-Lite, along with default [Vega View options](https://vega.github.io/vega/docs/api/view/#view) and [Vega-Lite configuration](https://vega.github.io/vega-lite/docs/config.html):
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:4,mode:"ojs",body:async function(t){const[a,i,s,l]=await Promise.all(["vega@5.23.0","vega-lite@4.17.0","vega-lite-api@4.0.0","vega-tooltip@0.25.1"].map(n=>t(n))),o={config:{config:{view:{continuousWidth:400,continuousHeight:300},mark:{tooltip:null}}},init:n=>{n.tooltip(new l.Handler().call),n.container()&&(n.container().style["overflow-x"]="auto")},view:{loader:a.loader({baseURL:"https://cdn.jsdelivr.net/npm/vega-datasets@2/"}),renderer:"canvas"}};return s.register(a,i,o)},inputs:["require"],outputs:void 0,output:"vl",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:5,mode:"ojs",body:function(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import {vl} from '@vega/vega-lite-api'
~~~
To use the API outside of Observable, see the [stand-alone usage instructions](#standalone_use) below.
`},inputs:["md"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:6,mode:"ojs",body:function(t){return t`## Zip Codes

A dot for each zip code in the United States, colored by the first digit.
`},inputs:["md"],outputs:void 0,output:"zip_codes",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:7,mode:"ojs",body:function(e,t){return e.markSquare({size:2,opacity:1}).data("data/zipcodes.csv").transform(e.calculate("substring(datum.zip_code, 0, 1)").as("digit")).project(e.projection("albersUsa")).encode(e.longitude().fieldQ("longitude"),e.latitude().fieldQ("latitude"),e.color().fieldN("digit")).width(t).height(Math.floor(t/1.75)).autosize({type:"fit-x",contains:"padding"}).config({view:{stroke:null}}).render()},inputs:["vl","width"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:8,mode:"ojs",body:function(t){return t`## Interactive Seattle Weather 2012-2015

A scatter plot and summary histogram with linked \`selections\` between plots to perform cross-filtering and configure conditional color encodings.
`},inputs:["md"],outputs:void 0,output:"interactive_weather",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:9,mode:"ojs",body:function(e,t){const a=e.selectInterval().encodings("x"),i=e.selectMulti().encodings("color"),s={domain:["sun","fog","drizzle","rain","snow"],range:["#e7ba52","#a7a7a7","#aec7e8","#1f77b4","#9467bd"]},l=e.markPoint({filled:!0}).encode(e.color().value("lightgray").if(a,e.color().fieldN("weather").scale(s).title("Weather")),e.size().fieldQ("precipitation").scale({domain:[-1,50],range:[10,500]}).title("Precipitation"),e.order().fieldQ("precipitation").sort("descending"),e.x().timeMD("date").axis({title:"Date",format:"%b"}),e.y().fieldQ("temp_max").scale({domain:[-5,40]}).axis({title:"Maximum Daily Temperature (°C)"})).width(t).height(300).select(a).transform(e.filter(i)),o=e.markBar().encode(e.color().value("lightgray").if(i,e.color().fieldN("weather").scale(s).title("Weather")),e.x().count(),e.y().fieldN("weather").scale({domain:s.domain}).title("Weather")).width(t).select(i).transform(e.filter(a));return e.vconcat(l,o).data("data/seattle-weather.csv").autosize({type:"fit-x",contains:"padding"}).render()},inputs:["vl","width"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:10,mode:"ojs",body:function(t){return t`## Parallel Coordinates

A [parallel coordinates plot](https://en.wikipedia.org/wiki/Parallel_coordinates) that uses \`window\` and \`fold\` transforms to convert the four dimensions of penguin measurements into normalized coordinates that can be visualized as \`line\` marks. The graphic includes an additional layer with custom \`text\` mark labels for the parallel axis grid lines. We render the plot as SVG by passing \`{renderer:'svg'}\` to the \`render\` method.
`},inputs:["md"],outputs:void 0,output:"parallel_coordinats",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:11,mode:"ojs",body:function(e,t){const a=["Beak Length (mm)","Beak Depth (mm)","Flipper Length (mm)","Body Mass (g)"],i={type:"point",padding:0},s={domain:!1,ticks:!1,title:!1,grid:!0,gridColor:"#888",labelAngle:0,labelPadding:8,labelFontWeight:"bold"},l=e.markLine({strokeWidth:1.5,opacity:.5}).encode(e.color().fieldN("Species").sort("descending"),e.detail().fieldN("index"),e.x().fieldO("key").scale(i).axis(s),e.y().fieldQ("fraction").axis(null)),o=e.markText({dx:-2,align:"right",baseline:"middle"}).transform(e.groupby("key").aggregate(e.min("value").as("min"),e.max("value").as("max")),e.fold("min","max").as("op","value"),e.groupby("key").window(e.percent_rank("value").as("fraction"))).encode(e.x().fieldN("key"),e.y().fieldQ("fraction").axis(null),e.text().field("value").format(","));return e.layer(l,o).data("data/penguins.json").transform(e.filter('datum["Beak Length (mm)"] != null'),e.window(e.row_number().as("index")),e.fold(a).as("key","value"),e.groupby("key").join(e.min("value").as("min"),e.max("value").as("max")),e.calculate("(datum.value - datum.min) / (datum.max - datum.min)").as("fraction")).width(t).height(300).autosize({type:"fit-x",contains:"padding"}).render({renderer:"svg"})},inputs:["vl","width"],outputs:void 0,output:void 0,display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]},{id:12,mode:"ojs",body:function(t){return t(f||(f=c([`<hr/>
## Stand-Alone Usage in a Web Browser

To use the Vega-Lite API in the browser outside of Observable, you need to include all the dependencies, set the default configuration, and then register the Vega libraries. Here is some starting code to build from:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/vega@5"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite-api@4"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-tooltip"><\/script>
  </head>
  <body>
    <div id="view"></div>

    <script>
      // setup API options
      const options = {
        config: {
          // Vega-Lite default configuration
        },
        init: (view) => {
          // initialize tooltip handler
          view.tooltip(new vegaTooltip.Handler().call);
        },
        view: {
          // view constructor options
          // remove the loader if you don't want to default to vega-datasets!
          loader: vega.loader({
            baseURL: "https://cdn.jsdelivr.net/npm/vega-datasets@2/",
          }),
          renderer: "canvas",
        },
      };

      // register vega and vega-lite with the API
      vl.register(vega, vegaLite, options);

      // now you can use the API!
      vl.markBar({ tooltip: true })
        .data([
          { a: "A", b: 28 }, { a: "B", b: 55 }, { a: "C", b: 43 },
          { a: "D", b: 91 }, { a: "E", b: 81 }, { a: "F", b: 53 },
          { a: "G", b: 19 }, { a: "H", b: 87 }, { a: "I", b: 52 },
        ])
        .encode(
          vl.x().fieldQ("b"),
          vl.y().fieldN("a"),
          vl.tooltip([vl.fieldQ("b"), vl.fieldN("a")])
        )
        .render()
        .then(viewElement => {
          // render returns a promise to a DOM element containing the chart
          // viewElement.value contains the Vega View object instance
          document.getElementById('view').appendChild(viewElement);
        });
    <\/script>
  </body>
</html>

~~~`])))},inputs:["md"],outputs:void 0,output:"standalone_use",display:!1,autodisplay:!0,autoview:!1,automutable:!1,files:[]}]});export{r as default};
