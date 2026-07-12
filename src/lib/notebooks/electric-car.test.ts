import {describe, expect, it} from 'vitest';
import {calculateElectricCar, type ElectricCarInputs} from './electric-car';

const defaults: ElectricCarInputs = {
  iceLifetime: {distance: 100, units: 'miles'},
  electricLifetime: {distance: 100, units: 'miles'},
  iceProduction: 9,
  electricProduction: 14,
  iceUse: {emissions: 40, units: 'mpg'},
  iceUplift: 50,
  electricUse: {efficiency: 4, units: 'miles_per_kWh'},
  carbonIntensity: 250,
  remainingIce: {distance: 30, units: 'miles'},
};

describe('electric-car lifecycle calculations', () => {
  it('preserves the published default comparison', () => {
    const result = calculateElectricCar(defaults);
    expect(result.totalIceKm).toBeCloseTo(160934.4, 1);
    expect(result.totalIce).toBeGreaterThan(result.totalElectric);
    expect(result.marginalIce).toBeGreaterThan(result.marginalElectric);
    expect(result.breakEvenDistance).toBeGreaterThan(0);
  });

  it('responds to the electricity carbon-intensity assumption', () => {
    const defaultResult = calculateElectricCar(defaults);
    const dirtierGrid = calculateElectricCar({...defaults, carbonIntensity: 500});
    expect(dirtierGrid.totalElectric).toBeGreaterThan(defaultResult.totalElectric);
    expect(dirtierGrid.breakEvenDistance).toBeGreaterThan(defaultResult.breakEvenDistance);
  });
});
