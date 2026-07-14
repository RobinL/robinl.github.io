- In 'energy_usage/' The 'heating' dropdown where you select the unit per year allows you to select but you can't see the text.

- in http://localhost:4321/partial_match_weights/, Under '### Example: Defining comparison levels for a first name column'

Add a simple markdown table of the data:
first_name surname postcode gender
Robin Linacre W1A 1AA
Female
Robyn Linacre W1A 1AA
Male


robinl.github.io/src/content/posts/m_and_u_values.mdx

- in robinl.github.io/src/content/posts/m_and_u_values.mdx add a DefinitionToolTip for the word cardinality in 'implying high cardinality.' and to cardinality in 'coincidences, which is driven by the cardinality of the data.'


- double check wehther the maths here is correct:So after observing that the month of birth matches, the odds of the records being a match would be 1 in 10, or a probability of approximately 9.1%.

- In the posterior calculator, get rid of the input for equivalent prior odds


In http://localhost:4321/computing_fellegi_sunter/

- In the table that follows the text 'We wish to predict which of these pairwise record comparisons represent the same entity (i.e. which records match).', we want the same new padding settings as the editable table above.  And in all the subsequent tables

- the table with column and scenario after the text'For example, we may choose to define our scenarios as follows:' needs changing: it previous was coloured nicely, but it isn't any more.  the m and u probability in the header should be lower case m and u.  the probabilities should use nice number formatting. the 'column' column should be titled 'Comparison' 'scenario' column should be called 'Comparison Level'

- In this table, include a row for the prior, coloured the same blue that is used for the prior in http://localhost:4321/partial_match_weights/

- For all the columns referring to the prior, shade using the same blue using the same opacity etc that used for the other columns. i.e. make it blue, but with consistent visual presentation


- in 'We then proceed by computing which comparison level is <DefinitionToolTip term="activate" />d for each pairwise record comparison, and representing this using the comparison vector value.  We use the gamma symbol (γ) to refer to the comparison vector value.' add DefinitionToolTip for the text comparison and comparison level

- In the table after the text 'We use the gamma symbol (γ) to refer to the comparison vector value.', we want the gamma columns to immediately follow their respective text columns so like firts_name_l, first_name_r, γ_first_name, surname_l and so on

- In the table that's currently just:
γ_first_name	γ_surname	γ_postcode	γ_gender
1	2	2	1
0	0	0	0
0	0	0	0
2	2	2	1
0	0	0	0
0	2	0	1


I want each cell to have the corresponding match weight so like in the γ_first_name columns it should be:
 γ = 1  (ω_first_name = 5.6)
 with the bit in brackets in subtle font colour - specifically, use the full opacity column colour for the (ω_first_name = 5.6) bit so it's subtle

 The in the next table (below expressed as a partial match weight, and the sum of the match weights:) you can remove the gamma columns like γ_first_name, γ_surname etc.

- I swear in one of these articles i got the indices wrong, or perhaps the column names wrong (prefixes or suffixes) in one of the formulas or visualisation but i can't fine it .  My memory was that i had _l vs _l not _l vs _r somewhere, but i can't remember where


http://localhost:4321/fault_tolerant_trie/

The visualisations are totally messed up.  Go back in git history to the pre-migrated notebook (when it was loaded from a vendored notebook) and fix the migrated code so it works the same as the vendored notebook.




