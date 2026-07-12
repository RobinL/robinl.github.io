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
