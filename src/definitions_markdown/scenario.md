---
term: 'scenario'
---

A scenario defines a category of similarity for a subset of information in the input records, often a column.

For example, for the first name column, the following (mutually exclusive) scenarios may be defined:

-   one or more side of the comparison is null
-   else exact match,
-   else jaro winkler match < 0.9
-   else everything else

In Splink, these are known as a `comparison_levels` and each comparison level represents a branch of a SQL case expression. They are specified in order of evaluation, each with a sql_condition that represents the branch of a case expression
