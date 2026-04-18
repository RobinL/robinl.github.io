function _1(md){return(
md`# Match weight calculator`
)}

function _form_values(Inputs){return(
Inputs.form([
  Inputs.number({
    label: "Numeric Input:",
    placeholder: "Enter a value",
    min: 0,
    required: true,
    value: 5.1,
    width: "100%" // Adjusts to fit the form layout nicely
  }),
  Inputs.select(
    [
      "Match Weight",
      "Probability (e.g., 0.5 for 50%)",
      "Bayes Factor",

      "Reciprocal Bayes Factor"
    ],
    {
      label: "Value type:",
      value: "Match Weight",
      width: "100%"
    }
  )
])
)}

function _3(form_values){return(
form_values
)}

function _numericValue(form_values){return(
form_values[0]
)}

function _selectedOption(form_values){return(
form_values[1]
)}

function _probability(selectedOption,numericValue,conversionUtils)
{
  switch (selectedOption) {
    case "Probability (e.g., 0.5 for 50%)":
      return numericValue;
    case "Bayes Factor":
      return conversionUtils.bayesFactorToProbability(numericValue);
    case "Match Weight":
      return conversionUtils.partialMatchWeightToProbability(numericValue);
    case "Reciprocal Bayes Factor":
      const reciprocalK = 1 / numericValue;
      return conversionUtils.bayesFactorToProbability(reciprocalK);
  }
}


function _bayesFactor(selectedOption,conversionUtils,numericValue)
{
  switch (selectedOption) {
    case "Probability (e.g., 0.5 for 50%)":
      return conversionUtils.probabilityToBayesFactor(numericValue);
    case "Bayes Factor":
      return numericValue;
    case "Match Weight":
      return conversionUtils.partialMatchWeightToBayesFactor(numericValue);
    case "Reciprocal Bayes Factor":
      return 1 / numericValue;
  }
}


function _partialMatchWeight(selectedOption,conversionUtils,numericValue)
{
  switch (selectedOption) {
    case "Probability (e.g., 0.5 for 50%)":
      return conversionUtils.probabilityToPartialMatchWeight(numericValue);
    case "Bayes Factor":
      return conversionUtils.bayesFactorToPartialMatchWeight(numericValue);
    case "Match Weight":
      return numericValue;
    case "Reciprocal Bayes Factor":
      const reciprocalK = 1 / numericValue;
      return conversionUtils.bayesFactorToPartialMatchWeight(reciprocalK);
  }
}


function _interpretation(bayesFactor)
{
  // Step 1: Calculate the multiple
  let multiple;
  if (bayesFactor > 1) {
    multiple = bayesFactor;
  } else if (bayesFactor < 1) {
    multiple = 1 / bayesFactor;
  } else {
    multiple = 1; // For bayesFactor == 1
  }

  // Step 2: Format the multiple
  const formattedMultiple =
    multiple < 100 ? multiple.toFixed(2) : multiple.toFixed(0);

  // Step 3: Determine whether it's "more likely" or "less likely"
  if (bayesFactor > 1) {
    return `${formattedMultiple} times more likely`;
  } else if (bayesFactor < 1) {
    return `${formattedMultiple} times less likely`;
  } else {
    return "no more or less likely";
  }
}


function _absoluteInterpretation(probability){return(
1 / (1 - probability)
)}

function _formattedProbability(partialMatchWeight,probability)
{
  const maxFractionDigits = Math.max(
    5,
    Math.round(Math.abs(partialMatchWeight) / 2)
  );
  return probability.toLocaleString(undefined, {
    maximumFractionDigits: maxFractionDigits
  });
}


function _formattedBayesFactor(bayesFactor)
{
  return bayesFactor.toLocaleString(undefined, { maximumFractionDigits: 2 }); // Use thousand separators and fixed notation
}


function _formattedPartialMatchWeight(partialMatchWeight){return(
partialMatchWeight.toFixed(2)
)}

function _formattedAbsoluteInterpretation(absoluteInterpretation)
{
  if (absoluteInterpretation < 2) {
    return absoluteInterpretation.toLocaleString(undefined, {
      maximumFractionDigits: 5
    });
  } else {
    return absoluteInterpretation.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
  }
}


function _calculated_values(md,formattedPartialMatchWeight,formattedProbability,formattedBayesFactor,interpretation,formattedAbsoluteInterpretation){return(
md`

**Match Weight:** ${formattedPartialMatchWeight}

**Probability:** ${formattedProbability}

**Bayes Factor:** ${formattedBayesFactor}

**Relative interpretation:** ${interpretation}

**Absolute interpretation:** One error in each ${formattedAbsoluteInterpretation} predictions
  
`
)}

function _conversion_formulas(md,texd){return(
md`
### Conversion Formulas:

${texd`\text{Partial Match Weight} = \omega`} 

${texd`\text{Bayes Factor} = K`} 

${texd`\text{Probability} = p`} 

${texd`K = 2^{\omega}`} 

${texd`p = \frac{K}{1 + K} = \frac{2^{\omega}}{1 + 2^{\omega}}`} 



${texd`K = \frac{p}{1 - p}`} 


${texd`\omega = \log_{2}(K) = \log_{2}\left(\frac{p}{1 - p}\right)`} 
`
)}

function _texd(tex){return(
tex.options({
  displayMode: true,
  fleqn: true
})
)}

function _18(form_values){return(
form_values
)}

function _conversionUtils()
{
  return {
    partialMatchWeightToBayesFactor: (omega) => Math.pow(2, omega),

    bayesFactorToProbability: (K) => K / (1 + K),

    partialMatchWeightToProbability: function (omega) {
      const K = this.partialMatchWeightToBayesFactor(omega);
      return this.bayesFactorToProbability(K);
    },

    probabilityToBayesFactor: (p) => {
      if (p === 1) return Infinity; // Handle the edge case where p = 1
      if (p === 0) return 0; // Handle the edge case where p = 0
      return p / (1 - p);
    },

    bayesFactorToPartialMatchWeight: (K) => Math.log2(K),

    probabilityToPartialMatchWeight: function (p) {
      const K = this.probabilityToBayesFactor(p);
      return this.bayesFactorToPartialMatchWeight(K);
    }
  };
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof form_values")).define("viewof form_values", ["Inputs"], _form_values);
  main.variable(observer("form_values")).define("form_values", ["Generators", "viewof form_values"], (G, _) => G.input(_));
  main.variable(observer()).define(["form_values"], _3);
  main.variable(observer("numericValue")).define("numericValue", ["form_values"], _numericValue);
  main.variable(observer("selectedOption")).define("selectedOption", ["form_values"], _selectedOption);
  main.variable(observer("probability")).define("probability", ["selectedOption","numericValue","conversionUtils"], _probability);
  main.variable(observer("bayesFactor")).define("bayesFactor", ["selectedOption","conversionUtils","numericValue"], _bayesFactor);
  main.variable(observer("partialMatchWeight")).define("partialMatchWeight", ["selectedOption","conversionUtils","numericValue"], _partialMatchWeight);
  main.variable(observer("interpretation")).define("interpretation", ["bayesFactor"], _interpretation);
  main.variable(observer("absoluteInterpretation")).define("absoluteInterpretation", ["probability"], _absoluteInterpretation);
  main.variable(observer("formattedProbability")).define("formattedProbability", ["partialMatchWeight","probability"], _formattedProbability);
  main.variable(observer("formattedBayesFactor")).define("formattedBayesFactor", ["bayesFactor"], _formattedBayesFactor);
  main.variable(observer("formattedPartialMatchWeight")).define("formattedPartialMatchWeight", ["partialMatchWeight"], _formattedPartialMatchWeight);
  main.variable(observer("formattedAbsoluteInterpretation")).define("formattedAbsoluteInterpretation", ["absoluteInterpretation"], _formattedAbsoluteInterpretation);
  main.variable(observer("calculated_values")).define("calculated_values", ["md","formattedPartialMatchWeight","formattedProbability","formattedBayesFactor","interpretation","formattedAbsoluteInterpretation"], _calculated_values);
  main.variable(observer("conversion_formulas")).define("conversion_formulas", ["md","texd"], _conversion_formulas);
  main.variable(observer("texd")).define("texd", ["tex"], _texd);
  main.variable(observer()).define(["form_values"], _18);
  main.variable(observer("conversionUtils")).define("conversionUtils", _conversionUtils);
  return main;
}
