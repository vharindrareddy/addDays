const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  const r = ratioOfTwoNumbers(a, b);
  const f = factorialOfNumber(c);

  const obj = {
    ratio: r,
    factorial: f,
  };
  return obj;
};
module.exports = ratioAndFactorial;
