import embed from 'vega-embed';
import {per} from './energy-conversion.js';
import {createObservableVegaEmbed} from './observable-vega-embed';

export type DistanceUnit = 'kilometers' | 'miles';
export type IceEmissionUnit = 'mpg' | 'gCO2km';
export type ElectricEfficiencyUnit = 'miles_per_kWh' | 'km_per_kWh';

export type ElectricCarInputs = {
  iceLifetime: {distance: number; units: DistanceUnit};
  electricLifetime: {distance: number; units: DistanceUnit};
  iceProduction: number;
  electricProduction: number;
  iceUse: {emissions: number; units: IceEmissionUnit};
  iceUplift: number;
  electricUse: {efficiency: number; units: ElectricEfficiencyUnit};
  carbonIntensity: number;
  remainingIce: {distance: number; units: DistanceUnit};
};

export type ElectricCarAssumptions = Omit<ElectricCarInputs, 'remainingIce'>;

type ValueForm<T> = HTMLFormElement & {readonly value: T};

function numberControl(
  documentRef: Document,
  label: string,
  value: number,
  suffix?: string
) {
  const row = documentRef.createElement('label');
  row.style.display = 'block';
  row.style.margin = '0.5rem 0';
  row.append(`${label}: `);
  const input = documentRef.createElement('input');
  input.type = 'number';
  input.value = String(value);
  input.style.width = '4rem';
  row.append(input);
  if (suffix) row.append(` ${suffix}`);
  return {row, input};
}

function selectControl<T extends string>(
  documentRef: Document,
  values: ReadonlyArray<{value: T; label: string}>,
  selected: T
) {
  const select = documentRef.createElement('select');
  for (const option of values) {
    const element = documentRef.createElement('option');
    element.value = option.value;
    element.textContent = option.label;
    select.append(element);
  }
  select.value = selected;
  return select;
}

const distanceUnits = [
  {value: 'kilometers' as const, label: 'kilometers'},
  {value: 'miles' as const, label: 'miles'},
];

/** Builds the assumption form; lifecycle calculations remain in calculateElectricCar. */
export function createElectricCarAssumptionsControls(
  documentRef: Document = document
): ValueForm<ElectricCarAssumptions> {
  const form = documentRef.createElement('form') as ValueForm<ElectricCarAssumptions>;
  const iceLifetime = numberControl(documentRef, 'Total expected lifetime mileage of ICE vehicle', 100, 'thousand');
  const iceLifetimeUnits = selectControl(documentRef, distanceUnits, 'miles');
  iceLifetime.row.append(' ', iceLifetimeUnits);
  const electricLifetime = numberControl(documentRef, 'Total expected lifetime mileage of electric vehicle', 100, 'thousand');
  const electricLifetimeUnits = selectControl(documentRef, distanceUnits, 'miles');
  electricLifetime.row.append(' ', electricLifetimeUnits);
  const iceProduction = numberControl(documentRef, 'Total emissions for ICE vehicle manufacture', 9, 'tonnes CO₂ equivalent');
  const electricProduction = numberControl(documentRef, 'Total emissions for electric vehicle manufacture', 14, 'tonnes CO₂ equivalent');
  const iceUse = numberControl(documentRef, 'ICE vehicle emissions', 40);
  const iceUseUnits = selectControl(documentRef, [
    {value: 'mpg' as const, label: 'miles per gallon'},
    {value: 'gCO2km' as const, label: 'gCO₂/km'},
  ], 'mpg');
  iceUse.row.append(' ', iceUseUnits);
  const iceUplift = numberControl(documentRef, 'ICE uplift for the fuel production cycle', 50, '%');
  const electricUse = numberControl(documentRef, 'Electric vehicle energy usage', 4);
  const electricUseUnits = selectControl(documentRef, [
    {value: 'miles_per_kWh' as const, label: 'miles/kWh'},
    {value: 'km_per_kWh' as const, label: 'km/kWh'},
  ], 'miles_per_kWh');
  electricUse.row.append(' ', electricUseUnits);
  const carbonIntensity = numberControl(documentRef, 'Carbon intensity of electricity production', 250, 'gCO₂/kWh');
  form.append(
    iceLifetime.row,
    electricLifetime.row,
    iceProduction.row,
    electricProduction.row,
    iceUse.row,
    iceUplift.row,
    electricUse.row,
    carbonIntensity.row
  );
  Object.defineProperty(form, 'value', {get: (): ElectricCarAssumptions => ({
    iceLifetime: {distance: iceLifetime.input.valueAsNumber, units: iceLifetimeUnits.value as DistanceUnit},
    electricLifetime: {distance: electricLifetime.input.valueAsNumber, units: electricLifetimeUnits.value as DistanceUnit},
    iceProduction: iceProduction.input.valueAsNumber,
    electricProduction: electricProduction.input.valueAsNumber,
    iceUse: {emissions: iceUse.input.valueAsNumber, units: iceUseUnits.value as IceEmissionUnit},
    iceUplift: iceUplift.input.valueAsNumber,
    electricUse: {efficiency: electricUse.input.valueAsNumber, units: electricUseUnits.value as ElectricEfficiencyUnit},
    carbonIntensity: carbonIntensity.input.valueAsNumber,
  })});
  return form;
}

export function createRemainingIceControl(
  documentRef: Document = document
): ValueForm<ElectricCarInputs['remainingIce']> {
  const form = documentRef.createElement('form') as ValueForm<ElectricCarInputs['remainingIce']>;
  const distance = numberControl(documentRef, 'Remaining ICE mileage', 30, 'thousand');
  const units = selectControl(documentRef, distanceUnits, 'miles');
  distance.row.append(' ', units);
  form.append(distance.row);
  Object.defineProperty(form, 'value', {get: () => ({
    distance: distance.input.valueAsNumber,
    units: units.value as DistanceUnit,
  })});
  return form;
}

export function calculateElectricCar(input: ElectricCarInputs) {
  const totalIceKm = per(`kilometers/${input.iceLifetime.units}`) * input.iceLifetime.distance * 1000;
  const totalElectricKm = per(`kilometers/${input.electricLifetime.units}`) * input.electricLifetime.distance * 1000;
  const directIce = input.iceUse.units === 'mpg'
    ? (per('kg_co2_from_petrol/imperial_gallons_petrol') / input.iceUse.emissions) * per('miles/kilometers') * 1000
    : input.iceUse.emissions;
  const marginalIce = directIce * (1 + input.iceUplift / 100);
  const distanceUnits = input.electricUse.units === 'miles_per_kWh' ? 'miles' : 'kilometers';
  const marginalElectric = input.carbonIntensity / (input.electricUse.efficiency * per(`kilometers/${distanceUnits}`));
  const iceUseEmissions = marginalIce * totalIceKm / 1e6;
  const electricUseEmissions = marginalElectric * totalElectricKm / 1e6;
  const totalIce = iceUseEmissions + input.iceProduction;
  const totalElectric = electricUseEmissions + input.electricProduction;
  const averageIce = totalIce / totalIceKm * 1e6;
  const averageElectric = totalElectric / totalElectricKm * 1e6;
  const remainingKm = per(`kilometers/${input.remainingIce.units}`) * input.remainingIce.distance * 1000;
  const immediateSwitchSaving = remainingKm * (marginalIce - averageElectric) / 1e6;
  const breakEvenDistance = 1e6 * (input.electricProduction - input.iceProduction) / (marginalIce - marginalElectric);
  return {totalIceKm, totalElectricKm, marginalIce, marginalElectric, iceUseEmissions, electricUseEmissions,
    totalIce, totalElectric, averageIce, averageElectric, immediateSwitchSaving, breakEvenDistance,
    additionalIce: totalIce - totalElectric};
}

export async function renderLifetimeChart(input: ElectricCarInputs, result: ReturnType<typeof calculateElectricCar>) {
  const values = [
    {stage: 'Production', vehicle: 'Electric', emissions: input.electricProduction},
    {stage: 'Use', vehicle: 'Electric', emissions: result.electricUseEmissions},
    {stage: 'Use', vehicle: 'ICE', emissions: result.iceUseEmissions},
    {stage: 'Production', vehicle: 'ICE', emissions: input.iceProduction},
  ];
  return createObservableVegaEmbed(embed)({$schema: 'https://vega.github.io/schema/vega-lite/v5.json', width: 200,
    data: {values}, transform: [{aggregate: [{op: 'sum', field: 'emissions', as: 'emissions'}], groupby: ['stage', 'vehicle']},
      {stack: 'emissions', groupby: ['vehicle'], sort: [{field: 'stage', order: 'ascending'}], as: ['start', 'end']},
      {calculate: '(datum.start + datum.end) / 2', as: 'middle'}],
    layer: [{mark: 'bar', encoding: {x: {field: 'vehicle', type: 'nominal', title: 'Vehicle Type'}, y: {field: 'start', type: 'quantitative', title: 'Tonnes CO2'}, y2: {field: 'end'}, color: {field: 'stage', type: 'nominal', title: 'Lifecycle Stage'}}},
      {mark: 'text', encoding: {x: {field: 'vehicle', type: 'nominal'}, y: {field: 'middle', type: 'quantitative'}, text: {field: 'emissions', format: ',.1f'}}}]});
}

export async function renderBreakEvenChart(input: ElectricCarInputs, result: ReturnType<typeof calculateElectricCar>, width: number) {
  const values = [
    {id: 0, distance: 0, emissions: 0, vehicle: 'ICE'},
    {id: 1, distance: 0, emissions: input.iceProduction, vehicle: 'ICE'},
    {id: 2, distance: result.totalIceKm, emissions: result.totalIce, vehicle: 'ICE'},
    {id: 0, distance: 0, emissions: 0, vehicle: 'Electric'},
    {id: 1, distance: 0, emissions: input.electricProduction, vehicle: 'Electric'},
    {id: 2, distance: result.totalIceKm, emissions: input.electricProduction + result.electricUseEmissions, vehicle: 'Electric'},
  ];
  return createObservableVegaEmbed(embed)({$schema: 'https://vega.github.io/schema/vega-lite/v5.json', width: Math.max(300, width - 200),
    title: 'Break even distance', layer: [
      {data: {values}, mark: 'line', encoding: {x: {field: 'distance', type: 'quantitative', title: 'Distance (km)'}, y: {field: 'emissions', type: 'quantitative', title: 'Tonnes CO2'}, color: {field: 'vehicle', type: 'nominal'}, order: {field: 'id', type: 'ordinal'}}},
      {data: {values: [{distance: result.breakEvenDistance}]}, mark: {type: 'rule', color: 'red', strokeDash: [4, 4]}, encoding: {x: {field: 'distance', type: 'quantitative'}}},
      {data: {values: [{distance: result.breakEvenDistance, emissions: result.totalIce / 2, label: `${result.breakEvenDistance.toLocaleString('en-US', {maximumFractionDigits: 0})} km`}]}, mark: {type: 'text', angle: -90, dx: -10, dy: -20}, encoding: {x: {field: 'distance', type: 'quantitative'}, y: {field: 'emissions', type: 'quantitative'}, text: {field: 'label'}}},
    ]});
}
