import define1 from "./79750b3b8e929d9d@209.js";

function _1(md){return(
md`# Record Utilities`
)}

function _Record(aq){return(
class Record {
  constructor(record_dict) {
    this.record_dict = record_dict;
  }

  as_dict() {
    return this.record_dict
  }

  as_aq() {
    return aq.from([this.record_dict]);
  }

  display() {
    return this.as_aq().view();
  }
}
)}

function _RecordComparison(aq){return(
class RecordComparison {
  constructor(record_l, record_r) {
    this.record_l = record_l;
    this.record_r = record_r;
  }

  as_long() {
    let records = [this.record_l.as_dict(), this.record_r.as_dict()];
    return aq.from(records);
  }

  as_wide() {
    let t_l = this.record_l.as_aq();
    let t_r = this.record_r.as_aq();

    let comparison = t_l.join(t_r, (a, b) => true, null, {
      suffix: ["_l", "_r"]
    });

    // Group columns
    let colname_no_suffix = t_l.columnNames();

    let cols_ordered = [];
    colname_no_suffix.forEach((d) => {
      cols_ordered.push(d + "_l");
      cols_ordered.push(d + "_r");
    });

    comparison = comparison.select(cols_ordered);
    return comparison;
  }

  display(wide_or_long = "long") {
    if (wide_or_long == "long") {
      return this.as_long().view();
    } else if (wide_or_long == "wide") {
      return this.as_wide().view();
    }
  }
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("Record")).define("Record", ["aq"], _Record);
  main.variable(observer("RecordComparison")).define("RecordComparison", ["aq"], _RecordComparison);
  const child1 = runtime.module(define1);
  main.import("aq", child1);
  main.import("op", child1);
  return main;
}
