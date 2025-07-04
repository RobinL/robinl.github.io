from splink.duckdb.linker import DuckDBLinker
import splink.duckdb.comparison_library as cl
from splink.duckdb.blocking_rule_library import block_on
import json

import duckdb
import altair as alt

con = duckdb.connect(database=":memory:", read_only=False)
sql = """
CREATE TABLE df AS
SELECT *, postcode_fake as postcode FROM read_parquet('synthetic_1m_clean.parquet')
WHERE REGEXP_MATCHES(unique_id, '^Q[0-9]+-([0-5])$')
AND NOT RIGHT(dob, 5) = '01-01';
"""

con.execute(sql)
sql = """
select *
from df
limit 10
"""
con.execute(sql).df()


# df = pd.read_parquet("synthetic_1m_clean.parquet")

settings = {
    "link_type": "dedupe_only",
    "comparisons": [
        cl.jaro_at_thresholds("first_name", 0.9),
        cl.jaro_at_thresholds("surname", 0.9),
        cl.levenshtein_at_thresholds("postcode", 1),
        cl.exact_match("gender"),
    ],
    "blocking_rules_to_generate_predictions": [block_on(["first_name", "surname"])],
    "retain_matching_columns": True,
    "retain_intermediate_calculation_columns": True,
}

linker = DuckDBLinker("df", settings, connection=con)

# linker = DuckDBLinker(df, settings)


linker.estimate_u_using_random_sampling(max_pairs=2e6)
linker.estimate_m_from_label_column("cluster")

linker._settings_obj._probability_two_random_records_match = 1 / 1e6

fname = linker._settings_obj._get_comparison_by_output_column_name("first_name")
fname.comparison_levels[1].m_probability = 0.85
fname.comparison_levels[2].m_probability = 0.05
fname.comparison_levels[3].m_probability = 0.1


fname = linker._settings_obj._get_comparison_by_output_column_name("surname")
fname.comparison_levels[1].m_probability = 0.8
fname.comparison_levels[2].m_probability = 0.15
fname.comparison_levels[3].m_probability = 0.05

fname = linker._settings_obj._get_comparison_by_output_column_name("postcode")
fname.comparison_levels[1].m_probability = 0.3
fname.comparison_levels[2].m_probability = 0.3
fname.comparison_levels[3].m_probability = 0.4

fname = linker._settings_obj._get_comparison_by_output_column_name("gender")
fname.comparison_levels[1].m_probability = 0.995
fname.comparison_levels[2].m_probability = 0.005

linker.save_model_to_json("settings_for_js.json", overwrite=True)

chart = linker.match_weights_chart()


chart = chart.properties(title="Partial match weights")

chart.config.view.continuousWidth = 400
chart_dict = chart.to_dict()


def recursive_del(d, keys_to_remove):
    if isinstance(d, dict):
        for key in list(d.keys()):
            if key in keys_to_remove:
                del d[key]
            else:
                recursive_del(d[key], keys_to_remove)
    elif isinstance(d, list):
        for item in d:
            recursive_del(item, keys_to_remove)


keys_to_remove = ["gridDash", "gridWidth", "gridColor"]
recursive_del(chart_dict, keys_to_remove)

old_key = chart_dict["data"]["name"]
chart_dict["data"]["name"] = "mydata"

chart_dict["datasets"]["mydata"] = chart_dict["datasets"].pop(old_key)
chart_dict["vconcat"][0]["encoding"]["color"]["legend"] = None

updated_chart = alt.Chart.from_dict(chart_dict)
updated_chart.save("../../src/mdx/partial_match_weights/partial_match_weights.json")
updated_chart.save("partial_match_weights_chart_for_js.json")


# Chart just for first_name
with open("../../src/mdx/partial_match_weights/partial_match_weights.json") as f:
    chart_dict = json.load(f)

data_name = chart_dict["data"]["name"]

new_data = []
for item in chart_dict["datasets"][data_name]:
    if "comparison_name" in item:
        if item["comparison_name"] == "first_name":
            new_data.append(item)


chart_dict["vconcat"].pop(0)

chart_dict["vconcat"][0]["encoding"]["color"]["legend"] = None
chart_dict["vconcat"][0]["encoding"]["x"]["axis"]["title"] = "Partial match"

chart_dict["datasets"][data_name] = new_data
chart_dict["title"] = "Partial match weights for first name"

with open(
    "../../src/mdx/partial_match_weights/partial_match_weights_first_name.json", "w"
) as f:
    json.dump(chart_dict, f)

alt.Chart.from_dict(chart_dict)

# Waterfall chart
df_predict = linker.predict()
records_to_view = df_predict.as_record_dict(limit=1)
chart = linker.waterfall_chart(records_to_view, filter_nulls=False)
chart_dict = chart.to_dict()

old_key = chart_dict["data"]["name"]
chart_dict["data"]["name"] = "mydata"

chart_dict["datasets"]["mydata"] = chart_dict["datasets"].pop(old_key)


del chart_dict["params"]
chart_dict["transform"].pop(0)

with open("waterfall_example_for_js.json", "w") as f:
    json.dump(chart_dict, f)
