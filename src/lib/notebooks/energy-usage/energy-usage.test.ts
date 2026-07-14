import { JSDOM } from 'jsdom';
import { describe, expect, it, vi } from 'vitest';
import * as Inputs from '@observablehq/inputs';
import {
  calculateBathKwh,
  calculateDrivingKwh,
  calculateEatingKwh,
  calculateElectricityKwh,
  calculateFlyingKwh,
  calculateHeatingKwh,
  calculatePetsKwh,
  calculateShowerKwh,
  calculateStuffKwh,
} from './calculations';
import { renderBreakdownChart, renderSummaryText, renderTreemap, renderUnitChart } from './charts';
import { createHeatingControls } from './controls';

describe('energy usage calculations', () => {
  it('preserves the published defaults for travel', () => {
    expect(
      calculateDrivingKwh({ miles: 10_000, period: 'years', milesPerGallon: 45 })
    ).toBeCloseTo(26.2939756469, 10);
    expect(calculateFlyingKwh({ miles: 12_000, period: 'years' })).toBeCloseTo(
      13.4258638356,
      10
    );
  });

  it('preserves the published household and consumption calculations', () => {
    const showerBathInput = {
      showersPerDay: 2,
      showerMinutes: 4,
      showerFlowMillilitresPerSecond: 135,
      bathsPerDay: 0,
      bathLitres: 150,
    };
    const showerKwh = calculateShowerKwh(showerBathInput);
    const bathKwh = calculateBathKwh(showerBathInput);

    expect(showerKwh).toBeCloseTo(2.5104, 8);
    expect(bathKwh).toBe(0);
    expect(
      calculateHeatingKwh(
        { annualUsage: 597, units: 'metric_gas_units', occupants: 2 },
        showerKwh,
        bathKwh
      )
    ).toBeCloseTo(3.9462317134, 8);
    expect(calculateElectricityKwh({ annualKwh: 1_800, occupants: 2 })).toBeCloseTo(
      2.4640657084,
      8
    );
    expect(calculateStuffKwh({ spending: 500, period: 'months' })).toBeCloseTo(
      31.7977138704,
      8
    );
    expect(
      calculateEatingKwh({ activityLevel: 'moderately_active', dietType: 'omnivore' })
    ).toBeCloseTo(21.6246320889, 8);
    expect(calculatePetsKwh({ numberOfDogs: 1, averageWeightKg: 15 })).toBeCloseTo(
      8.8673060237,
      8
    );
  });

  it('responds predictably to changed inputs', () => {
    const annual = calculateDrivingKwh({ miles: 10_000, period: 'years', milesPerGallon: 45 });
    const doubled = calculateDrivingKwh({ miles: 20_000, period: 'years', milesPerGallon: 45 });
    const vegetarian = calculateEatingKwh({
      activityLevel: 'moderately_active',
      dietType: 'vegetarian',
    });
    const omnivore = calculateEatingKwh({
      activityLevel: 'moderately_active',
      dietType: 'omnivore',
    });

    expect(doubled).toBeCloseTo(annual * 2, 10);
    expect(vegetarian).toBeLessThan(omnivore);
  });
});

describe('energy usage rendering', () => {
  const data = [
    { name: 'Driving', value: 2.5 },
    { name: 'Flying', value: 1.25 },
  ];

  it('renders unit and grouped square charts as SVG', () => {
    const document = new JSDOM().window.document;
    const unit = renderUnitChart(data, 640, document);
    const breakdown = renderBreakdownChart(data, 640, document);

    expect(unit.getAttribute('width')).toBe('640');
    expect(unit.querySelectorAll('rect')).toHaveLength(10);
    expect(unit.textContent).toContain('3.8 kwh/day');
    expect(breakdown.querySelectorAll('text')).toHaveLength(2);
  });

  it('renders the reactive summary and treemap using semantic DOM', () => {
    const document = new JSDOM().window.document;
    const summary = renderSummaryText(data, document);
    const treemap = renderTreemap(data, 640, document);

    expect(summary.querySelector('strong')?.textContent).toContain('kilowatt hours');
    expect(summary.textContent).toContain('average power consumption');
    expect(treemap.querySelectorAll('rect')).toHaveLength(2);
    expect(treemap.querySelectorAll('title')).toHaveLength(2);
  });
});

describe('energy usage controls', () => {
  it('shows readable heating-unit labels', () => {
    const window = new JSDOM().window;
    vi.stubGlobal('document', window.document);
    vi.stubGlobal('Node', window.Node);
    vi.stubGlobal('NodeList', window.NodeList);
    vi.stubGlobal('HTMLCollection', window.HTMLCollection);

    try {
      const control = createHeatingControls(
        Inputs as unknown as Parameters<typeof createHeatingControls>[0],
        window.document
      );
      const options = Array.from(control.querySelectorAll('option')).map((option) => option.textContent);

      expect(options).toEqual([
        'kwh',
        'Imperial units (100s of cubic feet)',
        'Metric units',
      ]);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
