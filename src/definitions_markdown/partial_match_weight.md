---
term: 'partial_match_weight'
---

The partial match weights are paramters of the Fellegi Sunter model which quantify the importance of different pieces of information in the input records.

For example, a match on date of birth is more important than a match on gender.

They are defined as the ` log_2(m/u)`, where `m` and `u`represent the `m`and`u` probabilities respectively.
