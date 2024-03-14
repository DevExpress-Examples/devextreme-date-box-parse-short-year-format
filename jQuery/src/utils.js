function parser(value) {
  const parseSelectBox = $('#parse-behavior').dxSelectBox('instance');

  const algorithm = parseSelectBox.option('value');
  const resultDate = new Date(value);

  if (algorithm === 'javascript') { return resultDate; }

  const parts = value.split('/');
  if (parts.length !== 3) { return value; }

  let year = Number(parts[2]);
  if (year < 100) {
    year = getFourDigitYear(year, algorithm);
    resultDate.setFullYear(year);
  }
  return resultDate;
}

function getFourDigitYear(twoDigitYear, algorithm) {
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
const formatter = (value) => value.toLocaleDateString();
