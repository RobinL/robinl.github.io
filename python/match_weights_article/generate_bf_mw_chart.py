import json

import altair as alt
import pandas as pd
from splink.misc import (
    bayes_factor_to_prob,
    match_weight_to_bayes_factor,
    prob_to_bayes_factor,
    prob_to_match_weight,
)

start = -10
end = -1 * start
subdivisions = 5
data = [
    bayes_factor_to_prob(match_weight_to_bayes_factor(x / subdivisions))
    for x in range(start * subdivisions, end * subdivisions + 1)
]

data = [
    {"prob": x, "bf": prob_to_bayes_factor(x), "mw": prob_to_match_weight(x)}
    for x in data
]
def format_bf(bf):
    if bf >= 1000:
        return "{:,.0f}".format(bf)
    elif bf >= 100:
        return "{:,.1f}".format(bf)
    elif bf >= 10:
        return "{:,.2f}".format(bf)
    elif bf >= 1:
        return "{:,.3f}".format(bf).rstrip("0").rstrip(".")
    else:
        return "{:,.3g}".format(bf).rstrip("0").rstrip(".")

for d in data:
    d["prob_fmt"] = "{:,.4f}".format(d["prob"]).rstrip("0")
    d["bf_fmt"] = format_bf(d["bf"])
    d["mw_fmt"] = "{:,.1f}".format(d["mw"])
    if d["prob"] > 0.5:
        bf_value = d["bf"]
        if bf_value >= 100:
            d["int_fmt"] = f"{bf_value:,.0f}x more likely"
        else:
            d["int_fmt"] = f"{bf_value:,.2f}".rstrip("0").rstrip(".") + "x more likely"
    elif d["prob"] < 0.5:
        bf_value = 1 / d["bf"]
        if bf_value >= 100:
            d["int_fmt"] = f"{bf_value:,.0f}x less likely"
        else:
            d["int_fmt"] = f"{bf_value:,.2f}".rstrip("0").rstrip(".") + "x less likely"
    else:
        d["int_fmt"] = "no more or less likely"


data = pd.DataFrame(data)
data



c = alt.Color(
    "mw:Q",
    scale=alt.Scale(
        domain=[-10, 0, 10],
        range=["#4B0000", "#222222", "#003300"],
        interpolate="lab",
    ),
    legend=None,
)
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
axis2 = alt.Axis(title="Partial Match Weight", labelExpr="datum.value")


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
        text="bf_fmt:N",
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
    .mark_bar(opacity=0.5)
    .encode(
        x="mw:Q",
        color=alt.Color(
            "mw:Q",
            scale=alt.Scale(
                domain=[-10, 0, 10],
                range=["red", "#bbbbbb", "green"],
                interpolate="lab",
            ),
            title="Match weight",
            legend=None,
        ),
    )
    .transform_filter(nearest)
)


c1 = alt.layer(
    bar,
    rules,
    text1,
    selectors,
).properties(width=450, height=line_height)

c2 = alt.layer(
    bar,
    rules,
    text2,
    selectors,
).properties(width=450, height=line_height)

c3 = alt.layer(
    bar,
    rules,
    text3,
    selectors,
).properties(width=450, height=line_height)

c4 = alt.layer(
    bar,
    rules,
    text4,
    selectors,
).properties(width=450, height=line_height)

final_chart = (
    alt.vconcat(c2, c3, c4)
    .properties(title="Correspondence between partial match weight and Bayes factor")
    .configure_title(anchor="middle")
)
# get spec as dict
final_chart_spec = final_chart.to_dict()


# Save final_chart_spec to json pretty
with open("../../src/mdx/m_and_u_probabilities/spec.json", "w") as f:
    json.dump(final_chart_spec, f, indent=4)
final_chart
