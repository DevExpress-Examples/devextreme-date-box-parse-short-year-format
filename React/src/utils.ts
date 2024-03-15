function getFourDigitYear(twoDigitYear: number, algorithm: string): number {
  const now = new Date();
  const yearToday = now.getFullYear();
  const centuryToday = yearToday - (yearToday % 100);
  let fullYear = centuryToday + twoDigitYear;

  if (algorithm === 'nocutoff') { return fullYear; }

  let currentCenturyCutOff = yearToday;
  if (algorithm === 'excel') {
    const nextDecadeStart = yearToday - (yearToday % 10) + 10;
    currentCenturyCutOff = nextDecadeStart - 1;
  }
  if (fullYear > currentCenturyCutOff) { fullYear -= 100; }

  return fullYear;
}
export function parser(value: string, algorithm: string): Date | number {
  const resultDate = new Date(value);

  if (algorithm === 'javascript') { return resultDate; }

  const parts = value.split('/');
  if (parts.length !== 3) { return new Date(value); }

  let year = Number(parts[2]);
  if (year < 100) {
    year = getFourDigitYear(year, algorithm);
    resultDate.setFullYear(year);
  }
  return resultDate;
}
export function formatter(value: number | Date): string {
  return typeof value !== 'number' ? value.toLocaleDateString() : '';
}
