//Random - number
// form 1 to 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(randomNumber);

//Mat.floor() - round down to the nearest whole number

//Random- number EX

//EX 1
// 0-50
const randomNumber0To50 = Math.floor(Math.random() * 51);
document.write(`0 to 50: ${randomNumber0To50} <br>`);

//EX 2
// 10-30
const randomNumber10To30 = Math.floor(Math.random() * 21) + 10;
document.write(`10 to 30: ${randomNumber10To30} <br>`);

//EX 3
// 20-50 
const randomNumber20To50 = Math.floor(Math.random() * 31) + 20;
document.write(`20 to 50: ${randomNumber20To50} <br>`);

//EX 4
// 20-50 - even number
const randomNumber20To50EvenNumber = Math.floor(Math.random() * 16) * 2 + 20;
document.write(`20 to 50 even number: ${randomNumber20To50EvenNumber} <br>`);

//EX 5
// input 2 numbers
// num1 = start
// num2 = end
// output 100 random number between num1 and num2
const num1 = +prompt("Enter the start number: ");
const num2 = +prompt("Enter the end number: ");
for(let i = 0 ; i <= 100 ; i++){
    const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    document.write(`answer is: ${randomNumber} <br>`);
}




