const add = (a = 0, b = 0) => {
  const aNum = Number(a);
  const bNum = Number(b);
  console.log(aNum, bNum);
  return aNum + bNum;
};

const app = { add };

module.exports = app;
