const add = (a) => {
  let delimiter = ',';
  let args = a;

  const match = a.match(/\/\/.+\n/);
  if (match) {
    delimiter = match[0].replace('//', '').replace('\n');
    args = a.replace(match[0], '');
  }

  const regex = RegExp(`[${delimiter}\n]+`);
  const numberStrings = args.split(regex);
  return numberStrings.map(x => Number(x)).reduce((a, b) => a + b, 0);
};

const app = { add };

module.exports = app;
