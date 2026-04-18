import define1 from "./ef62bc8f8c0d577e@90.js";
import define2 from "./843cb6e82d7c3d9b@474.js";
import define3 from "./d25176b0fe784ad0@488.js";
import define4 from "./79750b3b8e929d9d@209.js";

function _1(md){return(
md`# Charts and Figures (Introduction)`
)}

function _example_record_1_l(Record){return(
new Record({
  first_name: "John",
  surname: "Smith",
  date_of_birth: "1989-03-02",
  town: "Bristol"
})
)}

function _example_record_1_r(Record){return(
new Record({
  first_name: "John",
  surname: "Smith",
  date_of_birth: "1989-03-02",
  town: "Bath"
})
)}

function _example_1_comparison(RecordComparison,example_record_1_l,example_record_1_r){return(
new RecordComparison(
  example_record_1_l,
  example_record_1_r
)
)}

function _splink_settings()
{
  return {
    proportion_of_matches: 1 / 100,
    comparison_columns: [
      {
        num_levels: 3,
        col_name: "first_name",
        u_probabilities: [0.8, 0.2],
        m_probabilities: [0.2, 0.8]
      },
      {
        num_levels: 3,
        col_name: "surname",
        u_probabilities: [0.9, 0.1],
        m_probabilities: [0.2, 0.8]
      },
      {
        col_name: "date_of_birth",
        u_probabilities: [0.99, 0.01],
        m_probabilities: [0.2, 0.8]
      },
      {
        col_name: "town",
        u_probabilities: [0.7, 0.3],
        m_probabilities: [0.3, 0.7]
      }
    ]
  };
}


function _example_1_row_with_gammas(example_1_comparison,example_record_1_l)
{
  let row = example_1_comparison.as_wide().objects()[0];

  Object.keys(example_record_1_l.as_dict()).forEach((k) => {
    if (row[k + "_l"] == row[k + "_r"]) {
      row["𝛾_" + k] = 1;
    } else {
      row["𝛾_" + k] = 0;
    }
  });
  return row;
}


function _overrides()
{
  return {
    title: {
      text:
        "Match weights and their cumulative contribution to match probability",
      subtitle: ""
    },
    height: 200
  };
}


function _intro_simple_waterfall(get_waterfall_chart,example_1_row_with_gammas,splink_settings,overrides){return(
get_waterfall_chart(
  example_1_row_with_gammas,
  splink_settings,
  overrides,
  true
)
)}

function _11(md){return(
md`# Charts and Figures (Mathematical Model)`
)}

function _parseTableData(){return(
function parseTableData(table) {
  const data = [];

  const replace_lookup = {
    "unique id": "uid",
    "first name": "fname",
    surname: "sname",
    "date of birth": "dob",
    town: "town"
  };

  table.querySelectorAll("tr").forEach((row, i) => {
    let cells = row.cells;
    let row_data = [];

    for (let cell of cells) {
      let value = cell.innerText;
      value = value.trim();
      value = value.toLowerCase();
      if (value == "") {
        value = null;
      }
      row_data.push(value);
    }
    data.push(row_data);
  });

  const formattedData = data.reduce((accumulator, row, i) => {
    if (i == 0) {
      row = row.map((d) => replace_lookup[d]);
      accumulator.properties = row;
    } else {
      const rowObject = {};

      accumulator.properties.forEach((key, i) => {
        rowObject[key] = row[i];
      });
      accumulator.push(rowObject);
    }
    return accumulator;
  }, []);
  return formattedData;
}
)}

function _records_l(Generators,parseTableData,table_l){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(parseTableData(table_l));
  table_l.addEventListener("input", keyinput, false);
  notify(parseTableData(table_l));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _table_l(html){return(
html`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_l</td>
<td contenteditable>John</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_l</td>
<td contenteditable>Emma</td>

<td contenteditable>Jones</td>
<td contenteditable>1956-07-09</td>
<td contenteditable>Hull</td>

</tr>


<tr>
<td>3_l</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>London</td>

</tr>


</table>
`
)}

function _table_r(html){return(
html`
<table id="data-table" >

<tr>

<th>Unique ID</th>
<th>First name</th>
<th>Surname</th>
<th>Date of Birth</th>
<th>Town</th>

</tr>

<tr>
<td>1_r</td>
<td contenteditable>Jonathan</td>

<td contenteditable>Smith</td>
<td contenteditable>1989-03-02</td>
<td contenteditable>Bristol</td>

</tr>


<tr>
<td>2_r</td>
<td contenteditable>David</td>

<td contenteditable>Smith</td>
<td contenteditable>1981-08-21</td>
<td contenteditable>Peckham</td>

</tr>



</table>
`
)}

function _records_r(Generators,parseTableData,table_r){return(
Generators.observe((notify) => {
  const keyinput = (event) => notify(parseTableData(table_r));
  table_r.addEventListener("input", keyinput, false);
  notify(parseTableData(table_r));
  return () => window.removeEventListener("input", keyinput);
})
)}

function _df_1_l(aq,records_l){return(
aq.from(records_l)
)}

function _df_1_r(aq,records_r){return(
aq.from(records_r)
)}

function _df_comparisons_1(get_df_comparison,records_l,records_r){return(
get_df_comparison(records_l, records_r)
)}

function _df_gammas_1(get_df_gammas,df_comparisons_1,splink_settings_1){return(
get_df_gammas(df_comparisons_1, splink_settings_1)
)}

function _df_gammas_only_1(df_gammas_1)
{
  let uids = ["uid_l", "uid_r"];
  let colnames = df_gammas_1.columnNames();
  colnames = colnames.filter((d) => d.includes("𝛾_"));
  colnames = uids.concat(colnames);
  return df_gammas_1.select(colnames);
}


function _splink_settings_1()
{
  return {
    proportion_of_matches: 1 / 100,
    comparison_columns: [
      {
        num_levels: 3,
        col_name: "fname",
        u_probabilities: [0.8, 0.2],
        m_probabilities: [0.2, 0.8],
        case_expression: (row) => {
          if (row.fname_l == row.fname_r) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      {
        num_levels: 3,
        col_name: "sname",
        u_probabilities: [0.9, 0.1],
        m_probabilities: [0.2, 0.8],
        case_expression: (row) => {
          if (row.sname_l == row.sname_r) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      {
        col_name: "dob",
        u_probabilities: [0.99, 0.01],
        m_probabilities: [0.2, 0.8],
        case_expression: (row) => {
          if (row.dob_l == row.dob_r) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      {
        col_name: "town",
        u_probabilities: [0.7, 0.3],
        m_probabilities: [0.3, 0.7],
        case_expression: (row) => {
          if (row.town_l == row.town_r) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    ]
  };
}


function _example_record_2_l(Record){return(
new Record({
  first_name: "Tom",
  surname: "Hanks",
  month_of_birth: "July"
})
)}

function _example_record_2_r(Record){return(
new Record({
  first_name: "Tom",
  surname: "Hanks",
  month_of_birth: "June"
})
)}

function _example_2_comparison(RecordComparison,example_record_2_l,example_record_2_r){return(
new RecordComparison(
  example_record_2_l,
  example_record_2_r
)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("Record", child1);
  main.import("RecordComparison", child1);
  const child2 = runtime.module(define2);
  main.import("get_waterfall_chart", child2);
  main.variable(observer("example_record_1_l")).define("example_record_1_l", ["Record"], _example_record_1_l);
  main.variable(observer("example_record_1_r")).define("example_record_1_r", ["Record"], _example_record_1_r);
  main.variable(observer("example_1_comparison")).define("example_1_comparison", ["RecordComparison","example_record_1_l","example_record_1_r"], _example_1_comparison);
  main.variable(observer("splink_settings")).define("splink_settings", _splink_settings);
  main.variable(observer("example_1_row_with_gammas")).define("example_1_row_with_gammas", ["example_1_comparison","example_record_1_l"], _example_1_row_with_gammas);
  main.variable(observer("overrides")).define("overrides", _overrides);
  main.variable(observer("intro_simple_waterfall")).define("intro_simple_waterfall", ["get_waterfall_chart","example_1_row_with_gammas","splink_settings","overrides"], _intro_simple_waterfall);
  main.variable(observer()).define(["md"], _11);
  const child3 = runtime.module(define3);
  main.import("get_df_comparison", child3);
  main.import("get_df_gammas", child3);
  main.variable(observer("parseTableData")).define("parseTableData", _parseTableData);
  main.variable(observer("records_l")).define("records_l", ["Generators","parseTableData","table_l"], _records_l);
  main.variable(observer("table_l")).define("table_l", ["html"], _table_l);
  main.variable(observer("table_r")).define("table_r", ["html"], _table_r);
  main.variable(observer("records_r")).define("records_r", ["Generators","parseTableData","table_r"], _records_r);
  main.variable(observer("df_1_l")).define("df_1_l", ["aq","records_l"], _df_1_l);
  main.variable(observer("df_1_r")).define("df_1_r", ["aq","records_r"], _df_1_r);
  main.variable(observer("df_comparisons_1")).define("df_comparisons_1", ["get_df_comparison","records_l","records_r"], _df_comparisons_1);
  main.variable(observer("df_gammas_1")).define("df_gammas_1", ["get_df_gammas","df_comparisons_1","splink_settings_1"], _df_gammas_1);
  main.variable(observer("df_gammas_only_1")).define("df_gammas_only_1", ["df_gammas_1"], _df_gammas_only_1);
  main.variable(observer("splink_settings_1")).define("splink_settings_1", _splink_settings_1);
  main.variable(observer("example_record_2_l")).define("example_record_2_l", ["Record"], _example_record_2_l);
  main.variable(observer("example_record_2_r")).define("example_record_2_r", ["Record"], _example_record_2_r);
  main.variable(observer("example_2_comparison")).define("example_2_comparison", ["RecordComparison","example_record_2_l","example_record_2_r"], _example_2_comparison);
  const child4 = runtime.module(define4);
  main.import("aq", child4);
  main.import("op", child4);
  return main;
}
