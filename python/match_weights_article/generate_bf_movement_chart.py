import altair as alt
import pandas as pd
import json

from splink.misc import (
    match_weight_to_bayes_factor,
    bayes_factor_to_prob,
    prob_to_bayes_factor,
    prob_to_match_weight,
)


def format_to_2sf(number):
    return "{:g}".format(float(f"{number:.2g}"))


pr_mw = -2
po_mw = 3.5

pr_bf = match_weight_to_bayes_factor(pr_mw)
po_bf = match_weight_to_bayes_factor(po_mw)

pr_prob = bayes_factor_to_prob(pr_bf)
po_prob = bayes_factor_to_prob(po_bf)

data = [
    {
        "prior_match_weight": pr_mw,
        "posterior_match_weight": po_mw,
        "prior_match_weight_fmt": format_to_2sf(pr_mw),
        "posterior_match_weight_fmt": format_to_2sf(po_mw),
        "prior_bayes_factor_fmt": format_to_2sf(pr_bf),
        "posterior_bayes_factor_fmt": format_to_2sf(po_bf),
        "prior_prob_fmt": format_to_2sf(pr_prob),
        "posterior_prob_fmt": format_to_2sf(po_prob),
    }
]

data_df = pd.DataFrame(data)


data = pd.DataFrame(data)


bf = "pow(2, datum.value)"
axis1 = alt.Axis(title="Probability", labelExpr=f"format({bf}/(1+ {bf}), ',.3f')")

mark_text_args = {
    "baseline": "middle",
    "fontWeight": "bold",
    "fontSize": 16,
}

line_height = 30
text1a = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis1),
        text="prior_match_weight:Q",
    )
)

text1b = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("posterior_match_weight:Q", axis=axis1),
        text="posterior_match_weight:Q",
    )
)

# LN2
# format(datum.value/(1-datum.value), ',.1f')
axis2 = alt.Axis(title="Partial Match Weight", labelExpr=f"datum.value")


text2 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis2),
        text="prior_match_weight:Q",
    )
)

axis3 = alt.Axis(
    title="Bayes Factor (odds)",
    labelExpr="datum.value < 1 ? format(pow(2, datum.value),',.3f') : format(pow(2, datum.value),',.0f') ",
)

text3 = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis3),
        text="bf_fmt:Q",
    )
)


bar = (
    alt.Chart(data)
    .mark_bar(opacity=0.5)
    .encode(
        x=alt.X("prior_match_weight:Q", scale=alt.Scale(domain=[-10, 10])),
        x2=alt.X2("posterior_match_weight:Q"),
    )
)


c1 = alt.layer(bar, text1a, text1b).properties(width=450, height=line_height)

c2 = alt.layer(
    bar,
    text2,
).properties(width=450, height=line_height)

c3 = alt.layer(
    bar,
    text3,
).properties(width=450, height=line_height)


final_chart = (
    alt.vconcat(c1, c2, c3)
    .properties(
        title="Updating a prior probability of x with a partial match weight of y"
    )
    .configure_title(anchor="middle")
)
# # get spec as dict
# final_chart_spec = final_chart.to_dict()


# # Save final_chart_spec to json pretty
# with open("../../src/mdx/m_and_u_probabilities/spec.json", "w") as f:
#     json.dump(final_chart_spec, f, indent=4)
final_chart
