const findNegatives = (numbers) => numbers.filter(n => n < 0);
const trimMax = (numbers) => numbers.filter(n => n <= 1000);
const formatDelimiter = (d) => d.replace(/^\[/, '').replace(RegExp(']$'), '');

const add = (str) => {
  const match = str.match(/\/\/.+\n/);

  const args = match ? str.replace(match[0], '') : str;
  const rawDelimiters = match ? match[0].replace('//', '').replace('\n', '') : ',';
  const delimiters = rawDelimiters.split('][').map(d => formatDelimiter(d)).filter(x => x.length);
  const delimiterString = delimiters.map(x => `(${x})`);

  const regex = RegExp(`[${delimiterString}\n]+`);
  const numberStrings = args.split(regex);

  const numbers = numberStrings.map(x => Number(x));

  const negativeNumbers = findNegatives(numbers);
  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(', ')}`);
  }

  return trimMax(numbers).reduce((x, y) => x + y, 0);
};

const app = { add };

module.exports = app;
