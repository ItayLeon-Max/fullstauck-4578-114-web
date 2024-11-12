let random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(maxNumber(1, 2));

console.log(maxNumber(random(0,100), random(0,100)));

let number1 = +prompt('Enter the first number');
let number2 = +prompt('Enter the second number');

console.log(maxNumber(number1, number2));

