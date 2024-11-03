const num1 = +prompt('Enter the first number');
const num2 = +prompt('Enter the second number');

// const max = num1 > num2 ? `The first number ${num1} is greater than the second number ${num2}` : `The second number ${num2} is greater than the first number ${num1}`;
// document.write(max);

// use Math.max() method
const max = Math.max(num1, num2);
document.write(`The maximum number is: ${max}`); 
