import define1 from "./79750b3b8e929d9d@209.js";

function _1(md){return(
md`# Fellegi Sunter utils`
)}

function _records_l(){return(
[
  {
    uid: "1_l",
    fname: "John",
    sname: "Smith",
    dob: "1989-03-02",
    town: "Bristol"
  },
  {
    uid: "2_l",
    fname: "Tom",
    sname: "Hanks",
    dob: "1956-07-09",
    town: "Concord"
  },
  {
    uid: "3_l",
    fname: "David",
    sname: "Smith",
    dob: "1981-08-21",
    town: "London"
  }
]
)}

function _records_r(){return(
[
  {
    uid: "1_r",
    fname: "Jonathan",
    sname: "Smith",
    dob: "1989-03-02",
    town: "Bristol"
  },
  {
    uid: "2_r",
    fname: "David",
    sname: "Smith",
    dob: "1981-08-21",
    town: "Peckham"
  }
]
)}

function _df_r(aq,records_r){return(
aq.from(records_r)
)}

function _splink_settings()
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


function _df_comparison(get_df_comparison,records_l,records_r){return(
get_df_comparison(records_l, records_r)
)}

function _7(df_comparison){return(
df_comparison.view()
)}

function _df_gammas(get_df_gammas,df_comparison,splink_settings){return(
get_df_gammas(df_comparison, splink_settings)
)}

function _9(df_gammas){return(
df_gammas.view()
)}

function _10(get_df_e,df_gammas,splink_settings,term_freqs){return(
get_df_e(df_gammas, splink_settings, term_freqs).view()
)}

function _get_df_e(get_match_probability,aq){return(
function get_df_e(df_gammas, splink_settings, term_freqs = {}) {
  let df_e = df_gammas.objects().map(function (row) {
    row["match_probability"] = get_match_probability(
      row,
      splink_settings,
      term_freqs
    );
    return row;
  });
  let df = aq.from(df_e);
  df = df.relocate(["match_probability"], { after: "uid_r" });
  return df;
}
)}

function _get_match_probability(prob_to_log2_bf,log2_bf_to_prob){return(
function (row, settings, term_freqs = {}) {
  let comparison_columns = settings.comparison_columns;
  let prior_log2_bg = prob_to_log2_bf(settings.proportion_of_matches);

  let log2_bayes = comparison_columns.reduce((a, cc) => {
    let gamma_col_name = "𝛾_" + cc.col_name;
    let gamma = row[gamma_col_name];

    // gamma = -1 means one side of the comparison is null
    if (gamma == -1) {
      return a;
    }

    let m = cc["m_probabilities"][gamma];
    let u = cc["u_probabilities"][gamma];

    // If TF lookup provided, attempt to use to overwrite u
    let l_val = row[cc.col_name + "_l"].toLowerCase();
    let r_val = row[cc.col_name + "_r"].toLowerCase();

    if (l_val == r_val) {
      if (cc.col_name in term_freqs) {
        let tfs = term_freqs[cc.col_name];

        let u_l = tfs[l_val] || 0;
        let u_r = tfs[r_val] || 0;
        let u_new = Math.max(u_l, u_r);
        if (u_new > 0) {
          u = u_new;
        }
      }
    }

    return a + Math.log2(m / u);
  }, prior_log2_bg);

  return log2_bf_to_prob(log2_bayes);
}
)}

function _get_match_probability_components(prob_to_log2_bf,log2_bf_to_prob){return(
function (row, settings, num_columns) {
  if (num_columns == undefined) {
    num_columns = settings.comparison_columns.length;
  }
  let comparison_columns = settings.comparison_columns.slice(0, num_columns);
  let prior_log2_bg = prob_to_log2_bf(settings.proportion_of_matches);

  let d = {
    comparison_vector: [],
    gamma_symbols: [],
    m_values: [],
    u_values: [],
    m_symbols: [],
    u_symbols: [],

    bayes_factors: [],
    log2_bayes_factors: [],
    col_names: [],
    match_probability: null,
    lam: settings.proportion_of_matches
  };

  comparison_columns.forEach((cc) => {
    let col_name = "𝛾_" + cc.col_name;
    let gamma = row[col_name];
    let m = cc["m_probabilities"][gamma];
    let u = cc["u_probabilities"][gamma];
    let col_name_escaped = cc.col_name.replace("_", "\\_");

    d["comparison_vector"].push(gamma);
    d["gamma_symbols"].push(`\\gamma_\\text{${col_name_escaped}}`);
    d["col_names"].push(col_name);
    d["m_values"].push(m);
    d["m_symbols"].push(`m_{\\text{${col_name_escaped}},${gamma}}`);
    d["u_values"].push(u);
    d["u_symbols"].push(`u_{\\text{${col_name_escaped}},${gamma}}`);
    d["bayes_factors"].push(m / u);
    d["log2_bayes_factors"].push(Math.log2(m / u));
  });

  let log2_bayes = d["log2_bayes_factors"].reduce((a, bf) => {
    return a + bf;
  }, prior_log2_bg);

  d["match_probability"] = log2_bf_to_prob(log2_bayes);
  let lam = settings.proportion_of_matches;
  d["size_of_match_portion"] = lam * d["m_values"].reduce((a, b) => a * b, 1);
  d["size_of_non_match_portion"] =
    (1 - lam) * d["u_values"].reduce((a, b) => a * b, 1);
  return d;
}
)}

function _get_m_u_formula_numbers(get_match_probability_components){return(
function(row, settings, num_columns) {
  let d = get_match_probability_components(row, settings, num_columns);
  let m = d["m_values"].map(d => d.toPrecision(3));
  let u = d["u_values"].map(d => d.toPrecision(3));
  let lam = d["lam"].toPrecision(3);
  let lam_m = [lam].concat(m);
  let lam_u = [`(1 - ${lam})`].concat(u);

  let m_tex = lam_m.join(" \\times ");
  let u_tex = lam_u.join(" \\times ");

  let p = d["match_probability"].toPrecision(3);
  let m_part = d["size_of_match_portion"].toPrecision(3);
  let u_part = d["size_of_non_match_portion"].toPrecision(3);
  return `\\frac{${m_tex}}{(${m_tex}) + (${u_tex})}  \\newline\[10pt] = \\frac{${m_part}}{${m_part} + ${u_part}}  \\newline\[10pt] = ${p}`;
}
)}

function _get_m_u_formula_symbols(get_match_probability_components){return(
function(row, settings) {
  let d = get_match_probability_components(row, settings);
  let m = d["m_symbols"];
  let u = d["u_symbols"];
  let lam = d["lam"];
  let lam_m = ["\\lambda"].concat(m);
  let lam_u = [`(1 - \\lambda)`].concat(u);
  let m_tex = lam_m.join(" ");
  let u_tex = lam_u.join(" ");

  return `\\frac{${m_tex}}{${m_tex}) + ${u_tex}}`;
}
)}

function _16(tex,get_m_u_formula_symbols,df_gammas,splink_settings){return(
tex`${get_m_u_formula_symbols(df_gammas.objects()[0], splink_settings)}
`
)}

function _get_comparison_vector_symbols_and_numbers(get_match_probability_components){return(
function (
  row,
  settings,
  num_columns
) {
  let d = get_match_probability_components(row, settings, num_columns);
  let joined = d["gamma_symbols"].join(", ");
  let joined2 = d["comparison_vector"].join(", ");
  return `\\bm{\\gamma} = [${joined}]= [${joined2}]`;
}
)}

function _18(tex,get_comparison_vector_symbols_and_numbers,df_gammas,splink_settings){return(
tex`${get_comparison_vector_symbols_and_numbers(
  df_gammas.objects()[0],
  splink_settings
)}
`
)}

function _19(tex){return(
tex`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`
)}

function _20(tex,get_m_u_formula_numbers,df_gammas,splink_settings){return(
tex`${get_m_u_formula_numbers(df_gammas.objects()[0], splink_settings)}`
)}

function _21(get_match_probability_components,df_gammas,splink_settings)
{
  return get_match_probability_components(
    df_gammas.objects()[0],
    splink_settings
  );
}


function _get_df_comparison(aq){return(
function (records_as_dict_l, records_as_dict_r) {
  let df_l = aq.from(records_as_dict_l);
  let df_r = aq.from(records_as_dict_r);
  let df_comparison = df_l.join(df_r, (a, b) => true, null, {
    suffix: ["_l", "_r"]
  });

  // Group columns
  let colname_no_suffix = df_l.columnNames();

  let cols_ordered = [];
  colname_no_suffix.forEach((d) => {
    cols_ordered.push(d + "_l");
    cols_ordered.push(d + "_r");
  });

  df_comparison = df_comparison.select(cols_ordered);

  return df_comparison;
}
)}

function _get_df_gammas(aq){return(
function get_df_gammas(df_comparison, splink_settings) {
  let comparison_columns = splink_settings["comparison_columns"];
  // let df_gammas = df_comparison;
  // let derivation = {};
  // comparison_columns.forEach(function (cc) {
  //   derivation["𝛾_" + cc.col_name] = cc.case_expression;
  // });

  // df_gammas = df_gammas.derive(derivation);

  // Since we want function calls like double metaphone in our comparison columns, we need to
  // roundtrip from aq -> object -> aq

  let df_gammas = df_comparison.objects();

  comparison_columns.forEach(function (cc) {
    df_gammas.forEach(function (row) {
      row["𝛾_" + cc.col_name] = cc.case_expression(row);
    });
  });

  df_gammas = aq.from(df_gammas);

  // Put columns in order
  let col_order = ["uid_l", "uid_r"];
  comparison_columns.forEach((cc) => {
    col_order.push(cc.col_name + "_l");
    col_order.push(cc.col_name + "_r");
    col_order.push("𝛾_" + cc.col_name);
  });

  df_gammas = df_gammas.select(col_order);

  return df_gammas;
}
)}

function _bayes_factor_to_prob(){return(
function bayes_factor_to_prob(b) {
  return b / (b + 1);
}
)}

function _log2_bf_to_prob(bayes_factor_to_prob){return(
function log2_bf_to_prob(b) {
  return bayes_factor_to_prob(2 ** b);
}
)}

function _prob_to_bayes_factor(){return(
function prob_to_bayes_factor(p) {
  return p / (1 - p);
}
)}

function _prob_to_log2_bf(prob_to_bayes_factor){return(
function prob_to_log2_bf(p) {
  return Math.log2(prob_to_bayes_factor(p));
}
)}

function _first_name_lookup(d3)
{
  return d3
    .csv(
      "https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",
      d3.autoType
    )
    .then((csv_file) => {
      let lookup = {};
      csv_file.forEach((row) => {
        lookup[row.firstname] = row.freq;
      });
      return lookup;
    });
}


function _surname_lookup(d3)
{
  return d3
    .csv(
      "https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",
      d3.autoType
    )
    .then((csv_file) => {
      let lookup = {};
      csv_file.forEach((row) => {
        lookup[row.surname] = row.freq;
      });
      return lookup;
    });
}


function _term_freqs(first_name_lookup,surname_lookup)
{
  return {
    fname: first_name_lookup,
    sname: surname_lookup
  };
}


function _32(term_freqs){return(
term_freqs.fname["joshua"]
)}

function _33(term_freqs){return(
term_freqs.sname["linacre"]
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("records_l")).define("records_l", _records_l);
  main.variable(observer("records_r")).define("records_r", _records_r);
  main.variable(observer("df_r")).define("df_r", ["aq","records_r"], _df_r);
  main.variable(observer("splink_settings")).define("splink_settings", _splink_settings);
  main.variable(observer("df_comparison")).define("df_comparison", ["get_df_comparison","records_l","records_r"], _df_comparison);
  main.variable(observer()).define(["df_comparison"], _7);
  main.variable(observer("df_gammas")).define("df_gammas", ["get_df_gammas","df_comparison","splink_settings"], _df_gammas);
  main.variable(observer()).define(["df_gammas"], _9);
  main.variable(observer()).define(["get_df_e","df_gammas","splink_settings","term_freqs"], _10);
  main.variable(observer("get_df_e")).define("get_df_e", ["get_match_probability","aq"], _get_df_e);
  main.variable(observer("get_match_probability")).define("get_match_probability", ["prob_to_log2_bf","log2_bf_to_prob"], _get_match_probability);
  main.variable(observer("get_match_probability_components")).define("get_match_probability_components", ["prob_to_log2_bf","log2_bf_to_prob"], _get_match_probability_components);
  main.variable(observer("get_m_u_formula_numbers")).define("get_m_u_formula_numbers", ["get_match_probability_components"], _get_m_u_formula_numbers);
  main.variable(observer("get_m_u_formula_symbols")).define("get_m_u_formula_symbols", ["get_match_probability_components"], _get_m_u_formula_symbols);
  main.variable(observer()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"], _16);
  main.variable(observer("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers", ["get_match_probability_components"], _get_comparison_vector_symbols_and_numbers);
  main.variable(observer()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"], _18);
  main.variable(observer()).define(["tex"], _19);
  main.variable(observer()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"], _20);
  main.variable(observer()).define(["get_match_probability_components","df_gammas","splink_settings"], _21);
  main.variable(observer("get_df_comparison")).define("get_df_comparison", ["aq"], _get_df_comparison);
  main.variable(observer("get_df_gammas")).define("get_df_gammas", ["aq"], _get_df_gammas);
  main.variable(observer("bayes_factor_to_prob")).define("bayes_factor_to_prob", _bayes_factor_to_prob);
  main.variable(observer("log2_bf_to_prob")).define("log2_bf_to_prob", ["bayes_factor_to_prob"], _log2_bf_to_prob);
  main.variable(observer("prob_to_bayes_factor")).define("prob_to_bayes_factor", _prob_to_bayes_factor);
  main.variable(observer("prob_to_log2_bf")).define("prob_to_log2_bf", ["prob_to_bayes_factor"], _prob_to_log2_bf);
  const child1 = runtime.module(define1);
  main.import("aq", child1);
  main.import("op", child1);
  main.variable(observer("first_name_lookup")).define("first_name_lookup", ["d3"], _first_name_lookup);
  main.variable(observer("surname_lookup")).define("surname_lookup", ["d3"], _surname_lookup);
  main.variable(observer("term_freqs")).define("term_freqs", ["first_name_lookup","surname_lookup"], _term_freqs);
  main.variable(observer()).define(["term_freqs"], _32);
  main.variable(observer()).define(["term_freqs"], _33);
  return main;
}
