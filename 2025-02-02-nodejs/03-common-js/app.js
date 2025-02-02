const { sum } = require('./calc');

const number1 = process.argv[2];
const number2 = process.argv[3];

console.log(`The sum of ${number1} and ${number2} is ${sum(number1, number2)}`);

