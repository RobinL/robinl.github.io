function _1(md){return(
md`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`
)}

function _2(md){return(
md`Import Arquero and extend it to print HTML tables in Observable:`
)}

async function _aq(require,aq_version,aq_packages,toView)
{
  const aq = await require(`arquero@${aq_version}`);

  // load and install any additional packages
  (await Promise.all(aq_packages.map(pkg => require(pkg))))
    .forEach(pkg => aq.addPackage(pkg));

  // Add HTML table view method to tables
  aq.addTableMethod('view', toView, { override: true });

  return aq;
}


function _aq_version(){return(
'4.2.0'
)}

function _aq_packages(){return(
[]
)}

function _6(md){return(
md`Export a global reference to Arquero operations:`
)}

function _op(aq){return(
aq.op
)}

function _8(md){return(
md`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`
)}

function _9(md){return(
md`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`
)}

function _10(md){return(
md`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`
)}

function _11(md){return(
md`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`
)}

function _12(md){return(
md`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`
)}

function _dt(aq){return(
aq.table({
  'Seattle': [69, 108, 178, 207, 253, 268, 312, 281, 221, 142, 72, 52],
  'Chicago': [135, 136, 187, 215, 281, 311, 318, 283, 226, 193, 113, 106],
  'San Francisco': [165, 182, 251, 281, 314, 330, 300, 272, 267, 243, 189, 156]
})
)}

function _14(md){return(
md`Sorted differences between Seattle and Chicago:`
)}

function _15(dt,op){return(
dt.derive({
    month: d => op.row_number(),
    diff:  d => d.Seattle - d.Chicago
  })
  .select('month', 'diff')
  .orderby('month')
  .view({ height: 400 })
)}

function _16(md){return(
md`Is Seattle more correlated with San Francisco or Chicago?`
)}

function _17(dt,op){return(
dt.rollup({
    corr_sf:  op.corr('Seattle', 'San Francisco'),
    corr_chi: op.corr('Seattle', 'Chicago')
  })
  .view()
)}

function _18(md){return(
md`Summary statistics per city, as output objects:`
)}

function _19(dt,aq,op){return(
dt.fold(aq.all(), { as: ['city', 'sun'] })
  .groupby('city')
  .rollup({
    min:  d => op.min(d.sun), // functional form of op.min('sun')
    max:  d => op.max(d.sun),
    avg:  d => op.average(d.sun),
    med:  d => op.median(d.sun),
    // functional forms permit flexible table expressions
    skew: ({sun: s}) => (op.mean(s) - op.median(s)) / op.stdev(s) || 0
  })
  .objects()
)}

function _20(md){return(
md`<hr>
## Utilities
`
)}

function _toView(html)
{
  const DEFAULT_LIMIT = 100;
  const DEFAULT_NULL = value => `<span style="color: #999;">${value}</span>`;
  const tableStyle = 'margin: 0; border-collapse: collapse; width: initial;';
  const cellStyle = 'padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums;';

  // extend table prototype to provide an HTML table view
  return function(dt, opt = {}) {
    // permit shorthand for limit
    if (typeof opt === 'number') opt = { limit: opt };
    
    // marshal cell color options
    const color = { ...opt.color };
    if (typeof opt.color === 'function') {
      // if function, apply to all columns
      dt.columnNames().forEach(name => color[name] = opt.color);
    } else {
      // otherwise, gather per-column color options
      for (const key in color) {
        const value = color[key];
        color[key] = typeof value === 'function' ? value : () => value;
      }
    }

    // marshal CSS styles as toHTML() options
    const table = `${tableStyle}`;
    const td = (name, index, row) => {
      return `${cellStyle} max-width: ${+opt.maxCellWidth || 300}px;`
        + (color[name] ? ` background-color: ${color[name](index, row)};` : '');
    };

    opt = {
      limit: DEFAULT_LIMIT,
      null: DEFAULT_NULL,
      ...opt,
      style: { table, td, th: td }
    };

    // return container div, bind table value to support viewof operator
    const size = `max-height: ${+opt.height || 270}px`;
    const style = `${size}; overflow-x: auto; overflow-y: auto;`;
    const view = html`<div style="${style}">${dt.toHTML(opt)}</div>`;
    view.value = dt;
    return view;
  };
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("aq")).define("aq", ["require","aq_version","aq_packages","toView"], _aq);
  main.variable(observer("aq_version")).define("aq_version", _aq_version);
  main.variable(observer("aq_packages")).define("aq_packages", _aq_packages);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("op")).define("op", ["aq"], _op);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer("dt")).define("dt", ["aq"], _dt);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["dt","op"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["dt","op"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["dt","aq","op"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("toView")).define("toView", ["html"], _toView);
  return main;
}
