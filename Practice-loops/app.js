// let max = prompt("Enter the maximum number: ");
// let num = prompt("Enter a number: ");

// //input: max: 10, num: 2
// //output: 0 ,2, 4, 6, 8, 10

// for(let i = 0 ; i <= max ; i++){
//     if(i % num === 0){
//         document.write(i + "<br>");
//     }
// }

//Polidrome number
// if num is polidrome return true
// let num = prompt("Enter a number: ");
// let temp = num;
// let reverse = 0;

// while(temp > 0){
//     let rem = temp % 10;
//     reverse = reverse * 10 + rem;
//     temp = parseInt(temp / 10);
// }

// if(num == reverse){
//     document.write("Polidrome number");
// } else {
//     document.write("Not a polidrome number");
// }

// function isMaxNumber(num1, num2){
//     if(num1 > num2){
//         return num1;
//     } else if(num1 < num2){ 
//         return num2;
//     } else {
//         return "Both numbers are equal";
//     }
// }

// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// let max = isMaxNumber(num1, num2);
// document.write("Max number is: " + max);

// function reversNumber(num){
//     let numStr = num.toString();
//     let reversStr = "";
//     for(let i = numStr.length - 1; i >= 0; i--){
//         reversStr += numStr[i];
//     }
//     return parseInt(reversStr);
// }

// let number = prompt("Enter a number: ");
// console.log("Input type:", typeof number, "Input value:", number);
// if(number !== null && !isNaN(number) && number.trim() != ""){
//     let reverse = reversNumber(Number(number));
//     document.write("Reverse number is: " + reverse);
// } else {
//     document.write("Please enter a valid number");
// }

// function giveMeRandomNumber(num1, num2){
//     var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
//     document.write(`The random number between ${num1} to ${num2} is : ${randomNumber}`)
// }

// let firstNumber = parseInt(prompt("Enter the first number: "));
// let secondNumber = parseInt(prompt("Enter the second number: "));
// giveMeRandomNumber(firstNumber,secondNumber);

// let arr = [];
// let result = 0;
// let arrSize = parseInt(prompt("Enter size of the array: "));
// for(let i = 0 ; i < arrSize ; i++){
//     var userInput = parseInt(prompt("Enter a number: "));
//     arr.push(userInput);
//     result += arr[i];
// }

// document.write(`The array is: [${arr}] <br>`);
// document.write(`The sum of the numbers is: ${result}`);

let grade = [];
let grideSizeArr = parseInt(prompt("Enter the amount of grades you want to calculate: "));
let sumOfGrades = 0;
for(let i = 0; i < grideSizeArr ; i++){
    var userInputGrade = parseInt(prompt(`Please enter ${grideSizeArr} grades: `));
    grade.push(userInputGrade);
    sumOfGrades += grade[i];
}

let avgOfGrades = sumOfGrades / grideSizeArr;
document.write(`the grade is: [${grade}] <br>`)
document.write(`The avg of grade is: ${avgOfGrades} <br>`);

let span = document.createElement('span');

if(avgOfGrades < 55){
    span.style.color = "red";
    span.innerHTML = "You failed your studies!";
    document.body.appendChild(span);
} else if(avgOfGrades >=55 && avgOfGrades < 65){
    span.style.color = "#FFE31A";
    span.innerHTML = "You reasonably passed the tests";
    document.body.appendChild(span);
} else if(avgOfGrades >= 65 && avgOfGrades < 85){
    span.style.color = "#F09319";
    span.innerHTML = "Well done, you have a good average";
    document.body.appendChild(span);
} else if(avgOfGrades >= 85 && avgOfGrades <=100){
    span.style.color = "green";
    span.innerHTML = "Well done, you excelled in your studies!";
    document.body.appendChild(span);
} else {
    document.write(null);
}

