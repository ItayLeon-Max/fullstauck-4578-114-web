const maxNumber = (num1, num2) => {
    return Math.max(num1, num2);
}

console.log(maxNumber(1, 2));
console.log(maxNumber(Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1))

let number1 = +prompt('Enter the first number');
let number2 = +prompt('Enter the second number');

console.log(maxNumber(number1, number2));

