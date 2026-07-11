import * as arquero from 'arquero';

type ViewOptions = {
  limit?: number;
  height?: number;
  maxCellWidth?: number;
  color?: Record<string, string | ((index: number, row: unknown) => string)>
    | ((index: number, row: unknown) => string);
  [key: string]: unknown;
};

type ArqueroTable = {
  columnNames(): string[];
  toHTML(options: Record<string, unknown>): string;
};

type TableView = HTMLDivElement & {value: ArqueroTable};

function toView(table: ArqueroTable, options: ViewOptions | number = {}): TableView {
  const resolved = typeof options === 'number' ? {limit: options} : {...options};
  const colors: Record<string, (index: number, row: unknown) => string> = {};
  if (typeof resolved.color === 'function') {
    table.columnNames().forEach((name) => { colors[name] = resolved.color as (index: number, row: unknown) => string; });
  } else if (resolved.color) {
    Object.entries(resolved.color).forEach(([name, value]) => {
      colors[name] = typeof value === 'function' ? value : () => value;
    });
  }
  const cellStyle = (name: string, index: number, row: unknown) => [
    'padding: 1px 5px',
    'white-space: nowrap',
    'overflow-x: hidden',
    'text-overflow: ellipsis',
    'font-variant-numeric: tabular-nums',
    `max-width: ${Number(resolved.maxCellWidth) || 300}px`,
    colors[name] ? `background-color: ${colors[name](index, row)}` : '',
  ].filter(Boolean).join('; ');
  const html = table.toHTML({
    limit: 100,
    null: (value: unknown) => `<span style="color: #999;">${String(value)}</span>`,
    ...resolved,
    style: {
      table: 'margin: 0; border-collapse: collapse; width: initial;',
      td: cellStyle,
      th: cellStyle,
    },
  });
  const view = globalThis.document.createElement('div') as TableView;
  view.style.maxHeight = `${Number(resolved.height) || 270}px`;
  view.style.overflow = 'auto';
  view.innerHTML = html;
  view.value = table;
  return view;
}

arquero.addTableMethod('view', toView, {override: true});

export const aq = arquero;
export const op = arquero.op;
