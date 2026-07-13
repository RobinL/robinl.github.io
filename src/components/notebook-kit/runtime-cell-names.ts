type RuntimeCell = {
  output?: string;
  outputs?: string[];
};

export function runtimeCellNames(cell: RuntimeCell): string[] {
  const names: string[] = [];
  if (cell.output) names.push(cell.output);
  if (cell.outputs) names.push(...cell.outputs);
  return names;
}
