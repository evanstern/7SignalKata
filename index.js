const add = (a) => {
  const numberStrings = a.split(',');
  return numberStrings.map(x => Number(x)).reduce((a, b) => a + b, 0);
};

const app = { add };

module.exports = app;
