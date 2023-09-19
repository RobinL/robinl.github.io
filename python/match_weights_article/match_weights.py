from splink.duckdb.linker import DuckDBLinker
import splink.duckdb.comparison_library as cl
from splink.duckdb.blocking_rule_library import block_on
import json

import duckdb
import altair as alt

con = duckdb.connect(database=':memory:', read_only=False)
sql = """
CREATE TABLE df AS
SELECT * FROM read_parquet('synthetic_1m_clean.parquet')
WHERE REGEXP_MATCHES(unique_id, '^Q[0-9]+-([0-7])$')
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
        cl.levenshtein_at_thresholds("dob", 1),
        cl.exact_match("gender"),

    ],
    "blocking_rules_to_generate_predictions": [
        block_on(["first_name", "surname"])
    ],
    "retain_matching_columns": True,
    "retain_intermediate_calculation_columns": True,
}

linker = DuckDBLinker("df", settings, connection=con)

# linker = DuckDBLinker(df, settings)


linker.estimate_u_using_random_sampling(max_pairs=2e6)
linker.estimate_m_from_label_column("cluster")


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

keys_to_remove = ['gridDash', 'gridWidth', 'gridColor']
recursive_del(chart_dict, keys_to_remove)
updated_chart = alt.Chart.from_dict(chart_dict)
updated_chart.save("../../src/mdx/partial_match_weights/partial_match_weights.json")


# Chart just for first_name
with open('../../src/mdx/partial_match_weights/partial_match_weights.json') as f:
    chart_dict = json.load(f)

data_name = chart_dict['data']['name']

new_data = []
for item in chart_dict['datasets'][data_name]:
    if 'comparison_name' in item:
        if item['comparison_name'] == 'first_name':
            new_data.append(item)

# Remove prior
chart_dict["vconcat"].pop(0)
del chart_dict["vconcat"][0]['transform']
del chart_dict["vconcat"][0]['resolve']
chart_dict["vconcat"][0]['encoding']['color']['legend'] = None
chart_dict["vconcat"][0]['encoding']['x']['axis']["title"] = "Partial match weight"

chart_dict['datasets'][data_name] = new_data
chart_dict['title'] = "Partial match weights for first name"

with open('../../src/mdx/partial_match_weights/partial_match_weights_first_name.json', 'w') as f:
    json.dump(chart_dict, f)

c = alt.Chart.from_dict(chart_dict)

c.save("delete.html")


# TODO:

# - Get rid of key
# - Get rid of prior
# - Fix css on tooltip to make wider/more legible
# - Overwrite some partial match weights to help commentary?
# - Use this same trained model for the first page of the tutorial