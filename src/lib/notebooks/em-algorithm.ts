import * as Inputs from '@observablehq/inputs';
import {csvParse} from 'd3';
import levenshtein from 'fast-levenshtein';
import embed from 'vega-embed';
import {createObservableVegaEmbed} from './observable-vega-embed';

export const data_left_template = `row_id_l,mob_l,surname_l\n1,10,Linacre\n2,7,Smith\n`;
export const data_right_template = `row_id_r,mob_r,surname_r\n1,10,Linacer\n2,8,Jones\n3,7,Smith\n`;
export const match_pairs_template = `row_id_l,row_id_r,label\n1,1,1\n2,3,1\n`;
export const textarea = ({value, rows = 6}: {value: string; rows?: number}) => Inputs.textarea({value, rows, resize: 'vertical'});
export const slider = ({title, min, max, step, value}: {title: string; min: number; max: number; step: number; value: number}) => Inputs.range([min, max], {label: title, step, value});

export type EmParameters = {lambda: number; pi1_1_m1: number; pi1_1_m0: number; pi2_1_m1: number; pi2_05_m1: number; pi2_1_m0: number; pi2_05_m0: number};
type CsvRow = Record<string, string>;
export type Comparison = Record<string, string | number> & {'𝛾1': number; '𝛾2': number};

export function parseCsv(text: string) { return csvParse(text) as unknown as CsvRow[]; }
export function comparisonVector(row: Record<string, string | number>): Comparison {
  const surnameLeft = String(row.surname_l);
  const surnameRight = String(row.surname_r);
  const surnameScore = surnameLeft === surnameRight ? 1 : levenshtein.get(surnameLeft, surnameRight) <= 1 ? 0.5 : 0;
  return {...row, '𝛾1': Number(row.mob_l === row.mob_r), '𝛾2': surnameScore};
}
export function createComparisons(left: CsvRow[], right: CsvRow[]) { return left.flatMap((l) => right.map((r) => comparisonVector({...l, ...r}))); }
function distributions(p: EmParameters) { return {mob: {m1: {1: p.pi1_1_m1, 0: 1 - p.pi1_1_m1}, m0: {1: p.pi1_1_m0, 0: 1 - p.pi1_1_m0}}, surname: {m1: {1: p.pi2_1_m1, .5: p.pi2_05_m1, 0: 1 - p.pi2_1_m1 - p.pi2_05_m1}, m0: {1: p.pi2_1_m0, .5: p.pi2_05_m0, 0: 1 - p.pi2_1_m0 - p.pi2_05_m0}}}; }
export function estimatedMatchProbability(vector: Comparison, p: EmParameters) { const d = distributions(p); const m = d.mob.m1[vector['𝛾1'] as 0|1] * d.surname.m1[vector['𝛾2'] as 0|.5|1]; const u = d.mob.m0[vector['𝛾1'] as 0|1] * d.surname.m0[vector['𝛾2'] as 0|.5|1]; return p.lambda * m / (p.lambda * m + (1 - p.lambda) * u); }
export function logLikelihood(vectors: Comparison[], p: EmParameters) { const d = distributions(p); return vectors.reduce((sum, vector) => { const m = d.mob.m1[vector['𝛾1'] as 0|1] * d.surname.m1[vector['𝛾2'] as 0|.5|1]; const u = d.mob.m0[vector['𝛾1'] as 0|1] * d.surname.m0[vector['𝛾2'] as 0|.5|1]; return sum + Math.log(p.lambda * m + (1 - p.lambda) * u); }, 0); }

let historyKey = ''; let history: Array<{log_likelihood: number}> = [];
export function computeEmState(leftCsv: string, rightCsv: string, pairsCsv: string, parameters: EmParameters) {
  const left = parseCsv(leftCsv); const right = parseCsv(rightCsv); const matches = parseCsv(pairsCsv); const combinations = createComparisons(left, right);
  const pairSet = new Set(matches.filter((row) => Number(row.label) === 1).map((row) => `${row.row_id_l}:${row.row_id_r}`));
  const trueLambda = combinations.filter((row) => pairSet.has(`${row.row_id_l}:${row.row_id_r}`)).length / combinations.length;
  const likelihood = logLikelihood(combinations, parameters); const key = `${leftCsv}\0${rightCsv}\0${pairsCsv}`; if (key !== historyKey) { historyKey = key; history = []; } history.push({log_likelihood: likelihood});
  return {left, right, matches, combinations, comparisonVectors: combinations.map((row) => ({'𝛾1': row['𝛾1'], '𝛾2': row['𝛾2']})), trueLambda, likelihood, history: [...history], estimates: combinations.map((row) => ({...row, estimated_match_probability: estimatedMatchProbability(row, parameters)}))};
}

export function renderTable(rows: Array<Record<string, unknown>>, documentRef: Document = document) { const table = documentRef.createElement('table'); if (!rows.length) return table; const columns = Object.keys(rows[0]); const head = table.insertRow(); columns.forEach((key) => {const th=documentRef.createElement('th'); th.textContent=key; head.append(th);}); rows.forEach((record)=>{const tr=table.insertRow(); columns.forEach((key)=>tr.insertCell().textContent=String(record[key]??''));}); return table; }
const render = (spec: object) => createObservableVegaEmbed(embed)(spec);
export function renderLikelihoodHistory(values: Array<{log_likelihood: number}>) { return render({$schema:'https://vega.github.io/schema/vega-lite/v5.json',data:{values:values.map((x,i)=>({...x,iteration:i+1}))},mark:{type:'line',point:true},encoding:{x:{field:'iteration',type:'quantitative'},y:{field:'log_likelihood',type:'quantitative',scale:{zero:false}}}}); }
export function renderPiChart(values: Array<{gamma:string; probability:number; match:string}>, title: string) { return render({$schema:'https://vega.github.io/schema/vega-lite/v5.json',title,data:{values},mark:'bar',encoding:{y:{field:'gamma',type:'nominal',title:'Comparison vector value'},x:{field:'probability',type:'quantitative'},column:{field:'match',type:'nominal',title:null},color:{field:'match',type:'nominal'}}}); }
