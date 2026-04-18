export function postSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '').replace(/\/index$/, '');
}

