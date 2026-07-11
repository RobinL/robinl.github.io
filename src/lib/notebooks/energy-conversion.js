import {format} from 'd3';
import {convert} from '@robinl/energy_usage/src/convert.js';

export const per = convert.per;
export const fmt_num = (value) => format(',.2r')(value);
export const fmt_per = (units) => fmt_num(per(units));
const gbpRates = {USD: 1.39};

export function format_currency(value, currency = 'GBP') {
  const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : `${currency} `;
  return symbol + format(',.2f')(value);
}

export function xr_string(amount, inputCurrency = 'USD', outputCurrency = 'GBP') {
  if (inputCurrency === 'GBP') return `${format_currency(amount)} = ${format_currency(amount * gbpRates[outputCurrency], outputCurrency)}`;
  if (outputCurrency === 'GBP') return `${format_currency(amount / gbpRates[inputCurrency])} = ${format_currency(amount, inputCurrency)}`;
}

export function get_sources(from, to, document = globalThis.document) {
  const wrapper = document.createElement('div'); const heading = document.createElement('p'); heading.append('Conversion from ');
  const fromCode = document.createElement('code'); fromCode.textContent = from; const toCode = document.createElement('code'); toCode.textContent = to; heading.append(fromCode, ' to ', toCode);
  const table = document.createElement('table'); const header = table.insertRow(); ['Unit conversion', 'URL', 'Notes'].forEach((value) => { const th = document.createElement('th'); th.textContent = value; header.append(th); });
  for (const source of convert._constants_dict[from][to].sources) {
    const row = table.insertRow(); row.insertCell().textContent = source.from_to || '';
    const url = row.insertCell(); if (source.url) { const link = document.createElement('a'); link.href = source.url; link.textContent = 'link'; url.append(link); }
    row.insertCell().textContent = source.desc || source.notes || '';
  }
  wrapper.append(heading, table); return wrapper;
}
