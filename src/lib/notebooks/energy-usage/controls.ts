import type {
  DrivingInput,
  EatingInput,
  ElectricityInput,
  FlyingInput,
  HeatingInput,
  PetsInput,
  ShowerBathInput,
  StuffInput,
} from './calculations';

type ValueElement<T> = HTMLElement & { value: T };
type InputsApi = {
  number(options: { value: number; width?: string }): ValueElement<number>;
  select<T extends string>(
    values: readonly T[],
    options: { value: T; width?: string; format?: (value: T) => string }
  ): ValueElement<T>;
  form<T extends Record<string, unknown>>(
    inputs: { [K in keyof T]: ValueElement<T[K]> },
    options: {
      template(inputs: { [K in keyof T]: ValueElement<T[K]> }): HTMLElement;
    }
  ): ValueElement<T>;
};

type SentencePart = string | HTMLElement;

function appendSentence(document: Document, root: HTMLElement, parts: SentencePart[]): void {
  const paragraph = document.createElement('p');
  for (const part of parts) paragraph.append(part);
  root.append(paragraph);
}

function decorateControl<T>(control: ValueElement<T>): ValueElement<T> {
  control.classList.add('energy-inline-control');
  return control;
}

function number(Inputs: InputsApi, value: number, width: string): ValueElement<number> {
  return decorateControl(Inputs.number({ value, width }));
}

function select<T extends string>(
  Inputs: InputsApi,
  values: readonly T[],
  value: T,
  width?: string,
  format?: (value: T) => string
): ValueElement<T> {
  return decorateControl(Inputs.select(values, { value, width, format }));
}

function sentenceForm<T extends Record<string, unknown>>(
  Inputs: InputsApi,
  fields: { [K in keyof T]: ValueElement<T[K]> },
  render: (root: HTMLElement, fields: { [K in keyof T]: ValueElement<T[K]> }) => void,
  document: Document
): ValueElement<T> {
  return Inputs.form(fields, {
    template(controls) {
      const root = document.createElement('div');
      root.className = 'energy-sentence-form';
      render(root, controls);
      return root;
    },
  });
}

const periods = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'] as const;

export function createDrivingControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<DrivingInput> {
  return sentenceForm<DrivingInput>(
    Inputs,
    {
      miles: number(Inputs, 10_000, '5rem'),
      period: select(Inputs, periods, 'years', '5rem'),
      milesPerGallon: number(Inputs, 45, '4rem'),
    },
    (root, fields) =>
      appendSentence(document, root, [
        'You drive an average ',
        fields.miles,
        ' miles per ',
        fields.period,
        ' in a vehicle that gets an average of ',
        fields.milesPerGallon,
        ' miles per imperial gallon.',
      ]),
    document
  );
}

export function createFlyingControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<FlyingInput> {
  return sentenceForm<FlyingInput>(
    Inputs,
    {
      miles: number(Inputs, 12_000, '5rem'),
      period: select(Inputs, periods, 'years', '5rem'),
    },
    (root, fields) =>
      appendSentence(document, root, [
        'You fly an average of ',
        fields.miles,
        ' miles per ',
        fields.period,
        ' in economy class. (Business class or first class would probably be double this or more.)',
      ]),
    document
  );
}

export function createHeatingControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<HeatingInput> {
  const gasUnits = ['kwh', 'imperial_gas_units', 'metric_gas_units'] as const;
  const labels: Record<(typeof gasUnits)[number], string> = {
    kwh: 'kwh',
    imperial_gas_units: 'Imperial units (100s of cubic feet)',
    metric_gas_units: 'Metric units',
  };
  const unitControl = select(Inputs, gasUnits, 'metric_gas_units', '15rem', (unit) => labels[unit]);

  return sentenceForm<HeatingInput>(
    Inputs,
    {
      annualUsage: number(Inputs, 597, '5rem'),
      units: unitControl,
      occupants: number(Inputs, 2, '4rem'),
    },
    (root, fields) =>
      appendSentence(document, root, [
        'Your energy bill says you use ',
        fields.annualUsage,
        ' ',
        fields.units,
        ' per year and there are ',
        fields.occupants,
        ' people in your household.',
      ]),
    document
  );
}

export function createShowerBathControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<ShowerBathInput> {
  return sentenceForm<ShowerBathInput>(
    Inputs,
    {
      showersPerDay: number(Inputs, 2, '3rem'),
      showerMinutes: number(Inputs, 4, '3rem'),
      showerFlowMillilitresPerSecond: number(Inputs, 135, '4rem'),
      bathsPerDay: number(Inputs, 0, '3rem'),
      bathLitres: number(Inputs, 150, '4rem'),
    },
    (root, fields) => {
      appendSentence(document, root, [
        'You take ',
        fields.showersPerDay,
        ' shower(s) a day averaging ',
        fields.showerMinutes,
        ' minutes with water flow of ',
        fields.showerFlowMillilitresPerSecond,
        ' ml per second.',
      ]);
      appendSentence(document, root, [
        'You have ',
        fields.bathsPerDay,
        ' bath(s) a day, each one of which contains ',
        fields.bathLitres,
        ' litres of water.',
      ]);
    },
    document
  );
}

export function createElectricityControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<ElectricityInput> {
  return sentenceForm<ElectricityInput>(
    Inputs,
    {
      annualKwh: number(Inputs, 1_800, '5rem'),
      occupants: number(Inputs, 2, '4rem'),
    },
    (root, fields) =>
      appendSentence(document, root, [
        'Your energy bill says you use ',
        fields.annualKwh,
        ' kwh of electricity per year and there are ',
        fields.occupants,
        ' people in your household.',
      ]),
    document
  );
}

export function createStuffControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<StuffInput> {
  return sentenceForm<StuffInput>(
    Inputs,
    {
      spending: number(Inputs, 500, '5rem'),
      period: select(Inputs, periods, 'months', '5rem'),
    },
    (root, fields) => {
      appendSentence(document, root, [
        'You spend an average of £',
        fields.spending,
        ' per ',
        fields.period,
        " on 'stuff'.",
      ]);
      appendSentence(document, root, [
        "('Stuff' includes things like clothes, electronics, white goods and cars, but excludes items otherwise accounted for such as food, petrol and flights.)",
      ]);
    },
    document
  );
}

export function createEatingControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<EatingInput> {
  const activityLevels = ['sedentary_light', 'moderately_active', 'vigorous'] as const;
  const diets = ['omnivore', 'vegetarian', 'vegan'] as const;
  const activity = select(Inputs, activityLevels, 'moderately_active', '11rem');
  const diet = select(Inputs, diets, 'omnivore', '7rem');
  const activityLabels = ['Sedentary/lightly active', 'Moderately active', 'Vigorous'];
  const dietLabels = ['Omnivore', 'Vegetarian', 'Vegan'];

  const activitySelect = activity.querySelector('select');
  const dietSelect = diet.querySelector('select');
  activitySelect?.querySelectorAll('option').forEach((option, index) => {
    option.textContent = activityLabels[index];
  });
  dietSelect?.querySelectorAll('option').forEach((option, index) => {
    option.textContent = dietLabels[index];
  });

  return sentenceForm<EatingInput>(
    Inputs,
    { activityLevel: activity, dietType: diet },
    (root, fields) =>
      appendSentence(document, root, [
        'You have a ',
        fields.activityLevel,
        ' lifestyle, and your diet type is ',
        fields.dietType,
        '.',
      ]),
    document
  );
}

export function createPetsControls(
  Inputs: InputsApi,
  document: Document = globalThis.document
): ValueElement<PetsInput> {
  return sentenceForm<PetsInput>(
    Inputs,
    {
      numberOfDogs: number(Inputs, 1, '3rem'),
      averageWeightKg: number(Inputs, 15, '4rem'),
    },
    (root, fields) =>
      appendSentence(document, root, [
        'You have ',
        fields.numberOfDogs,
        ' dog(s) who weigh ',
        fields.averageWeightKg,
        ' kg each on average.',
      ]),
    document
  );
}
