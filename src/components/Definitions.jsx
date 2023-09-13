import React from 'react';
import DefinitionTooltip from './DefinitionToolTip';

export const prior = (
    <DefinitionTooltip
        term="prior"
        definition="A prior is a probability that represents our beliefs about the value of a parameter before we have seen any data."
    />
);

export const partial_match_weight = (
    <DefinitionTooltip
        term="partial match weight"
        definition="The partial match weights represent the relative importance of different pieces of information in determining whether two records are a match. For example, a match on date of birth is more important than a match on gender.  They are defined as the log 2 (m/u), where m and u represent the m and u probabilities respectively."
    />
);
