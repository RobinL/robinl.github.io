export const timePeriods = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'] as const;

export type TimePeriod = (typeof timePeriods)[number];
export type GasUnit = 'kwh' | 'imperial_gas_units' | 'metric_gas_units';
export type ActivityLevel = 'sedentary_light' | 'moderately_active' | 'vigorous';
export type DietType = 'omnivore' | 'vegetarian' | 'vegan';

export type DrivingInput = {
  miles: number;
  period: TimePeriod;
  milesPerGallon: number;
};

export type FlyingInput = {
  miles: number;
  period: TimePeriod;
};

export type HeatingInput = {
  annualUsage: number;
  units: GasUnit;
  occupants: number;
};

export type ShowerBathInput = {
  showersPerDay: number;
  showerMinutes: number;
  showerFlowMillilitresPerSecond: number;
  bathsPerDay: number;
  bathLitres: number;
};

export type ElectricityInput = {
  annualKwh: number;
  occupants: number;
};

export type StuffInput = {
  spending: number;
  period: TimePeriod;
};

export type EatingInput = {
  activityLevel: ActivityLevel;
  dietType: DietType;
};

export type PetsInput = {
  numberOfDogs: number;
  averageWeightKg: number;
};

export type EnergyDatum = {
  name: string;
  value: number;
};

const DAYS_PER_YEAR = 365.25;
const JOULES_PER_KWH = 3_600_000;
const JOULES_PER_KILOCALORIE = 4_184;
const LITRES_PER_IMPERIAL_GALLON = 4.54609;
const JOULES_PER_LITRE_OF_PETROL = 34_200_000;
const KWH_PER_LITRE_OF_JET_FUEL = 35_000_000 / JOULES_PER_KWH;
const KWH_PER_METRIC_GAS_UNIT = 39_500_000 / JOULES_PER_KWH;
const METRIC_UNITS_PER_IMPERIAL_GAS_UNIT = 2.83;
const WATER_SPECIFIC_HEAT_CAPACITY = 4_184;

const daysPerPeriod: Record<TimePeriod, number> = {
  minutes: 1 / (24 * 60),
  hours: 1 / 24,
  days: 1,
  weeks: 7,
  months: DAYS_PER_YEAR / 12,
  years: DAYS_PER_YEAR,
};

// Driving and flying used version 0.0.22 of the historical package. These values retain
// that version's time conversion, including its unusual month conversion.
const legacyDaysPerPeriod: Record<TimePeriod, number> = {
  minutes: 1 / (24 * 60),
  hours: 1 / 24,
  days: 1,
  weeks: 7,
  months: 365 / 30,
  years: 365,
};

function perDay(value: number, period: TimePeriod): number {
  return value / daysPerPeriod[period];
}

function legacyPerDay(value: number, period: TimePeriod): number {
  return value / legacyDaysPerPeriod[period];
}

export function calculateDrivingKwh({
  miles,
  period,
  milesPerGallon,
}: DrivingInput): number {
  const imperialGallonsPerDay = legacyPerDay(miles, period) / milesPerGallon;
  return (
    (imperialGallonsPerDay * LITRES_PER_IMPERIAL_GALLON * JOULES_PER_LITRE_OF_PETROL) /
    JOULES_PER_KWH
  );
}

export function calculateFlyingKwh({ miles, period }: FlyingInput): number {
  const kilometresPerMile = 1.60934;
  const litresPerMile = (2.61 / 100) * kilometresPerMile;
  return legacyPerDay(miles, period) * litresPerMile * KWH_PER_LITRE_OF_JET_FUEL;
}

export function calculateShowerKwh({
  showersPerDay,
  showerMinutes,
  showerFlowMillilitresPerSecond,
}: ShowerBathInput): number {
  const litresPerDay =
    showersPerDay * showerMinutes * showerFlowMillilitresPerSecond * (60 / 1_000);
  const boilerEfficiency = 0.9;
  const temperatureDifferenceCentigrade = 30;
  const joules =
    (litresPerDay * WATER_SPECIFIC_HEAT_CAPACITY * temperatureDifferenceCentigrade) /
    boilerEfficiency;
  return joules / JOULES_PER_KWH;
}

export function calculateBathKwh({ bathsPerDay, bathLitres }: ShowerBathInput): number {
  const boilerEfficiency = 0.9;
  const temperatureDifferenceCentigrade = 30;
  const joules =
    (bathLitres * bathsPerDay * WATER_SPECIFIC_HEAT_CAPACITY *
      temperatureDifferenceCentigrade) /
    boilerEfficiency;
  return joules / JOULES_PER_KWH;
}

function annualHeatingKwh(annualUsage: number, units: GasUnit): number {
  switch (units) {
    case 'kwh':
      return annualUsage;
    case 'metric_gas_units':
      return annualUsage * KWH_PER_METRIC_GAS_UNIT;
    case 'imperial_gas_units':
      return annualUsage * METRIC_UNITS_PER_IMPERIAL_GAS_UNIT * KWH_PER_METRIC_GAS_UNIT;
  }
}

export function calculateHeatingKwh(
  { annualUsage, units, occupants }: HeatingInput,
  showerKwh: number,
  bathKwh: number
): number {
  const heatingAndHotWaterPerPerson = annualHeatingKwh(annualUsage, units) / DAYS_PER_YEAR / occupants;

  // This deliberately preserves the adjustment used by the published calculator.
  return heatingAndHotWaterPerPerson - (showerKwh - bathKwh) * occupants;
}

export function calculateElectricityKwh({ annualKwh, occupants }: ElectricityInput): number {
  return annualKwh / DAYS_PER_YEAR / occupants;
}

const stuffEstimates = [
  { kwhPerPound: 0.6 / 0.5, weight: 0.5 },
  { kwhPerPound: 1_800 / 1_000, weight: 1 },
  { kwhPerPound: 1.4 / 1.5, weight: 0.5 },
  { kwhPerPound: (10 * 0.2) / 2, weight: 1 },
  { kwhPerPound: (33_097 + 46_431 + 76_000) / 3 / 17_500, weight: 2 },
  { kwhPerPound: (1_000 * 1_000_000) / JOULES_PER_KWH / 250, weight: 1 },
  { kwhPerPound: (4_500 * 1_000_000) / JOULES_PER_KWH / 1_500, weight: 1 },
  { kwhPerPound: (3_900 * 1_000_000) / JOULES_PER_KWH / 450, weight: 1 },
  { kwhPerPound: (5_900 * 1_000_000) / JOULES_PER_KWH / 500, weight: 1 },
] as const;

export function averageStuffKwhPerPound(): number {
  const totalWeight = stuffEstimates.reduce((total, estimate) => total + estimate.weight, 0);
  return stuffEstimates.reduce(
    (total, estimate) => total + (estimate.weight / totalWeight) * estimate.kwhPerPound,
    0
  );
}

export function calculateStuffKwh({ spending, period }: StuffInput): number {
  return perDay(spending * averageStuffKwhPerPound(), period);
}

function basalMetabolicRate(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  gender: 'male' | 'female'
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return gender === 'male' ? base + 5 : base - 161;
}

export function calculateEatingKwh({ activityLevel, dietType }: EatingInput): number {
  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary_light: 1.53,
    moderately_active: 1.76,
    vigorous: 2.25,
  };
  const dietIntensities: Record<DietType, number> = {
    omnivore: 3_959.3,
    vegetarian: 2_598.3,
    vegan: 2_336.1,
  };

  // The published calculator deliberately used a fixed reference person here.
  const caloriesPerDay = basalMetabolicRate(84, 165, 40, 'female') * activityMultipliers[activityLevel];
  const foodProductionMultiplier = 7;
  const dietMultiplier = dietIntensities[dietType] / dietIntensities.omnivore;
  return (
    (caloriesPerDay * foodProductionMultiplier * JOULES_PER_KILOCALORIE * dietMultiplier) /
    JOULES_PER_KWH
  );
}

export function calculatePetsKwh({ numberOfDogs, averageWeightKg }: PetsInput): number {
  const foodKilocaloriesPerDay = 143 * averageWeightKg ** 0.75;
  const foodProductionMultiplier = 7;
  return (
    (numberOfDogs * foodKilocaloriesPerDay * foodProductionMultiplier * JOULES_PER_KILOCALORIE) /
    JOULES_PER_KWH
  );
}

export function formatKwh(value: number): string {
  return value.toPrecision(2);
}

export function totalEnergy(data: EnergyDatum[]): number {
  return data.reduce((total, datum) => total + datum.value, 0);
}
