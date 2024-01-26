export function parser(value: string) {
  const parts = value.split('/');
  if (parts.length !== 3) return Date.parse(value);
  let year = Number(parts[2]);
  if (year < 100) year += 2000;
  return new Date(year, Number(parts[0]) - 1, Number(parts[1]));
}

export function formatter(value: number | Date) {
  return typeof value !== 'number' ? value.toLocaleDateString() : '';
}
