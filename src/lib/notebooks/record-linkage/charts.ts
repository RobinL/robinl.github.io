import embed from 'vega-embed';
import type { PartialMatchWeightRecord, WaterfallRecord } from './types';
import legacyPartialMatchWeightsSpec from './partial-match-weights-spec.json';
import legacyWaterfallSpec from './waterfall-spec.json';

const colorDomain = ['Prior', 'probability_two_random_records_match', 'first_name', 'surname', 'postcode', 'gender', 'Final score'];
const colorRange = ['#1f77b4', '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#17becf'];

export async function renderPartialMatchWeightsChart(
  data: PartialMatchWeightRecord[],
  highlight: boolean,
  _width = 700,
  document: Document = globalThis.document,
): Promise<HTMLDivElement> {
  const root = document.createElement('div');
  const spec: any = structuredClone(legacyPartialMatchWeightsSpec);
  spec.datasets.mydata = data;

  if (highlight) {
    const color = {
      condition: {
        test: "datum.activityStatus !== 'Activated partial match weight'",
        value: '#BBB',
      },
      field: 'comparison_name',
      type: 'nominal',
      legend: null,
      scale: {domain: colorDomain, range: colorRange},
    };

    spec.vconcat[0].encoding.color = color;
    spec.vconcat[1].encoding.color = color;
    for (const section of spec.vconcat) {
      section.transform.push({
        calculate: "datum.bar_is_active === true ? 'Activated partial match weight' : 'Other partial match weights'",
        as: 'activityStatus',
      });
    }
  }

  await embed(root, spec, {actions: false});
  return root;
}

export async function renderWaterfallChart(
  data: WaterfallRecord[],
  highlight: boolean,
  _width = 700,
  document: Document = globalThis.document,
): Promise<HTMLDivElement> {
  const root = document.createElement('div');
  const spec: any = structuredClone(legacyWaterfallSpec);
  spec.datasets.mydata = data;

  if (highlight) {
    spec.layer[0].layer[1].encoding.color = {
      field: 'column_name',
      type: 'nominal',
      legend: null,
      scale: {domain: colorDomain, range: colorRange},
    };
    delete spec.layer[0].layer[1].encoding.opacity;
  }

  await embed(root, spec, {actions: false});
  return root;
}
