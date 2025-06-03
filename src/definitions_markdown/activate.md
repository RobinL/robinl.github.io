---
term: 'activate'
---

A scenario is 'activated' when it is conditions are met for the pairwise record comparison at hand.

For example, consider the pairwise comparison of first name of 'Robyn' vs 'Robin'.

The following scenarios may be defined for the `first_name` column:

-   one or more side of the comparison is null
-   else exact match,
-   else jaro winkler match < 0.9
-   else everything else

In this example, the activated scenario is `jaro winkler match < 0.9`
