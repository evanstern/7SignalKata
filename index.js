const add = (str) => {
  const match = str.match(/\/\/.+\n/);

  const delimiter = match ? match[0].replace('//', '').replace('\n') : ',';
  const args = match ? str.replace(match[0], '') : str;

  const regex = RegExp(`[${delimiter}\n]+`);
  const numberStrings = args.split(regex);

  return numberStrings.map(x => Number(x)).reduce((x, y) => x + y, 0);
};

const app = { add };

module.exports = app;
