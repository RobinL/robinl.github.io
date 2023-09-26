from splink.misc import (
    match_weight_to_bayes_factor,
    bayes_factor_to_prob,
    prob_to_bayes_factor,
    prob_to_match_weight,
)
import altair as alt
import pandas as pd
import json


start = -10
end = -1 * start
subdivisions = 5
data = [
    bayes_factor_to_prob(match_weight_to_bayes_factor(x / subdivisions))
    for x in range(start * subdivisions, end * subdivisions)
]

data = [
    {"prob": x, "bf": prob_to_bayes_factor(x), "mw": prob_to_match_weight(x)}
    for x in data
]

for d in data:
    d["prob_fmt"] = "{:,.4f}".format(d["prob"]).rstrip("0")
    d["bf_fmt"] = "{:,.3g}".format(d["bf"]).rstrip("0").rstrip(".")
    d["mw_fmt"] = "{:,.1f}".format(d["mw"])
    if d["prob"] > 0.5:
        d["int_fmt"] = f"{d['bf']:,.4g}x more likely"
    elif d["prob"] < 0.5:
        d["int_fmt"] = f"{(1/d['bf']):,.4g}x less likely"
    else:
        d["int_fmt"] = "no more or less likely"

data = pd.DataFrame(data)
data

nearest = alt.selection_point(
    name="param_7",
    nearest=True,
    on="mouseover",
    fields=["mw"],
    empty=False,
    value=[{"mw": 0}],
)

# Transparent selectors across the chart. This is what tells us
# the x-value of the cursor
selectors = (
    alt.Chart(data)
    .mark_point()
    .encode(
        x="mw:Q",
        opacity=alt.value(0),
    )
    .add_params(nearest)
)


bf = "pow(2, datum.value)"
axis1 = alt.Axis(title="Probability", labelExpr=f"format({bf}/(1+ {bf}), ',.3f')")

mark_text_args = {
    "baseline": "middle",
    "fontWeight": "bold",
    "fontSize": 16,
    "color": "darkred",
}

line_height = 30
text1 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("mw:Q", axis=axis1),
        text="prob_fmt:Q",
        opacity=alt.condition(nearest, alt.value(1), alt.value(0)),
    )
)

# LN2
# format(datum.value/(1-datum.value), ',.1f')
axis2 = alt.Axis(title="Match weight", labelExpr=f"datum.value")


text2 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("mw:Q", axis=axis2),
        text="mw_fmt:Q",
        opacity=alt.condition(nearest, alt.value(1), alt.value(0)),
    )
)

axis3 = alt.Axis(
    title="Bayes Factor (odds)",
    labelExpr="if(pow(2, datum.value) >=1, pow(2, datum.value), '1/' + (1/pow(2, datum.value)))",
)

text3 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("mw:Q", axis=axis3),
        text="bf_fmt:Q",
        opacity=alt.condition(nearest, alt.value(1), alt.value(0)),
    )
)

spaces = " " * 20
axis4 = alt.Axis(
    title=f"⬅️  times less likely{spaces}Intuitive interpretation{spaces}times more likely  ➡️",
    labelExpr="if(pow(2, datum.value) >=1, pow(2, datum.value), (1/pow(2, datum.value)))",
)

text4 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("mw:Q", axis=axis4),
        text="int_fmt:N",
        opacity=alt.condition(nearest, alt.value(1), alt.value(0)),
    )
)


rules = (
    alt.Chart(data)
    .mark_rule(color="#FFAAAA")
    .encode(
        x="mw:Q",
    )
    .transform_filter(nearest)
)

bar = (
    alt.Chart(data)
    .mark_bar(color="#bbdffd")
    .encode(
        x="mw:Q",
    )
    .transform_filter(nearest)
)


c1 = alt.layer(
    bar,
    rules,
    text1,
    selectors,
).properties(width=800, height=line_height)

c2 = alt.layer(
    bar,
    rules,
    text2,
    selectors,
).properties(width=800, height=line_height)

c3 = alt.layer(
    bar,
    rules,
    text3,
    selectors,
).properties(width=800, height=line_height)

c4 = alt.layer(
    bar,
    rules,
    text4,
    selectors,
).properties(width=800, height=line_height)

final_chart = (
    alt.vconcat(c1, c2, c3, c4)
    .properties(
        title="Correspondence between probability, match weight, and Bayes factor"
    )
    .configure_title(anchor="middle")
)
# get spec as dict
final_chart_spec = final_chart.to_dict()

final_chart_spec["data"] = {"name": "mydata"}
final_chart_spec["datasets"] = {"mydata": []}

# Save final_chart_spec to json pretty
with open("spec.json", "w") as f:
    json.dump(final_chart_spec, f, indent=4)
