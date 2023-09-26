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
    return "{:g}".format(float(f"{number:.3g}"))


pr_mw = 2
po_mw = -5.5

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
        "prior_text": "prior",
        "posterior_text": "posterior",
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

text_arrow = (
    alt.Chart(data)
    .mark_text(baseline="middle", fontWeight="bold", dx=0, fontSize=30, color="white")
    .transform_calculate(
        midpoint="(datum.prior_match_weight + datum.posterior_match_weight) / 2"
    )
    .encode(
        x=alt.X("midpoint:Q"),
        text=alt.condition(
            "datum.prior_match_weight < datum.posterior_match_weight",
            alt.value("→"),
            alt.value("←"),
        ),
    )
)


line_height = 30


text1a = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis1),
        text="prior_prob_fmt:Q",
    )
)

text1b = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("posterior_match_weight:Q", axis=axis1),
        text="posterior_prob_fmt:Q",
    )
)


axis2 = alt.Axis(title="Partial Match Weight", labelExpr=f"datum.value")


text2a = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis2),
        text="prior_match_weight_fmt:Q",
    )
)

text2b = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("posterior_match_weight:Q", axis=axis2),
        text="posterior_match_weight_fmt:Q",
    )
)

text2c = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis2),
        text=alt.value("prior"),
    )
)

text2d = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("posterior_match_weight:Q", axis=axis2),
        text=alt.value("posterior"),
    )
)


axis3 = alt.Axis(
    title="Bayes Factor (odds)",
    labelExpr="datum.value < 1 ? format(pow(2, datum.value),',.3f') : format(pow(2, datum.value),',.0f') ",
)

text3a = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("prior_match_weight:Q", axis=axis3),
        text="prior_bayes_factor_fmt:Q",
    )
)

text3b = (
    alt.Chart(data)
    .mark_text(**mark_text_args)
    .encode(
        x=alt.X("posterior_match_weight:Q", axis=axis3),
        text="posterior_bayes_factor_fmt:Q",
    )
)


bar = (
    alt.Chart(data)
    .mark_bar()
    .encode(
        x=alt.X("prior_match_weight:Q", scale=alt.Scale(domain=[-10, 10])),
        x2=alt.X2("posterior_match_weight:Q"),
        color=alt.value("#4FABF5"),
    )
)


c1 = alt.layer(bar, text1a, text1b, text_arrow).properties(
    width=450, height=line_height
)
c1b = alt.layer(bar, text2c, text2d, text_arrow).properties(
    width=450, height=line_height
)

c2 = alt.layer(bar, text2a, text2b, text_arrow).properties(
    width=450, height=line_height
)

c3 = alt.layer(bar, text3a, text3b, text_arrow).properties(
    width=450, height=line_height
)


final_chart = (
    alt.vconcat(c1b, c2, c3, c1)
    .properties(
        title="Updating a prior probability of x with a partial match weight of y"
    )
    .configure_title(anchor="middle")
)


final_chart_spec = final_chart.to_dict()


# Save final_chart_spec to json pretty
with open("../../src/mdx/m_and_u_probabilities/bf_movement_spec.json", "w") as f:
    json.dump(final_chart_spec, f, indent=4)
final_chart_spec
