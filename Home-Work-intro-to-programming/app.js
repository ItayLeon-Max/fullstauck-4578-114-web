//EXP 1
// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));
// if(num1 > num2) {
//     document.write(`the small number is ${num2}`);
// } else {
//     document.write(`the small number is ${num1}`);
// }

//EXP 2
// 465 ---> "465" -----> ['4' '6' '5']
// let num = parseInt(prompt("Enter a number: ")); // 465
// let digits = num.toString().split(""); // ['4', '6', '5']
// if(digits[digits.length -1] === '5'){ 
//     document.write("the number ends with 5");
// } else {
//     document.write("the number does not end with 5");
// }

//EXP 4
// 4 7 4 2 8 4 [if enter: (-3)] break the loop -----> 4^4 , 7^4 , 4^4 , 2^4 , 8^4
// while(true){
//     let num = parseInt(prompt("Enter a number: "));
//     if (num < 0){
//         break;
//     }
//     let fourthPower = Math.pow(num, 4);
//     document.write(`${num}^4 = ${fourthPower}<br>`);    
// }

//EXP 5
// while(true){
//     let num = parseInt(prompt("Enter a number: "));
//     if (num % 7 === 0){
//         break;
//     }
//     if(num > 0){
//         document.write(`the number ${num} is positive and not divisible by 7<br>`);
//     } else if (num < 0){
//         document.write(`the number ${num} is negative and not divisible by 7<br>`);
//     } else {
//         document.write(`the number ${num} is zero and not divisible by 7<br>`);
//     }
// }

//EXP 6
// 5 6 7 8 9 10 -3 ----> 5^4 , 6^4 , 7^4 , 8^4 , 9^4 , 10^4 , [(-3)^4]
// while(true){
//     let num = parseInt(prompt("Enter a number: "))
//     let fourthPower = Math.pow(num, 4);
//     document.write(`${num}^4 = ${fourthPower}<br>`);
//     if(num < 0){
//         break;
//     }
// }

//EXP 7
// while(true){
//     let num = parseInt(prompt("Enter a number: "));
//     if(num > 0 && num % 7 === 0){
//         document.write(`the number ${num} is positive and divisible by 7<br>`);
//     } else if (num > 0 && num % 7 === 1){
//         document.write(`the number ${num} is positive  and not divisible by 7<br>`);
//     } else if(num < 0 && num % 7 === 0){
//         document.write(`the number ${num} is negative and divisible by 7<br>`);
//     } else if(num < 0 && num % 7 === 1){
//         document.write(`the number ${num} is negative and not divisible by 7<br>`);
//     } else {
//         document.write(`the number ${num} is zero and not divisible by 7<br>`);
//     }
//     if (num % 7 === 0){
//         break;
//     }
// }

//EXP 8
// for(let i = 1 ; i <= 300 ; i++){
//     document.write(`${i} `);
// }

//EXP 9
// for(let i = -300 ; i <= 300 ; i++){
//     document.write(`${i} `);
// }

//EXP 10
// let num = parseInt(prompt("Enter a number: "));
// for(let i = 1 ; i <= num ; i++){
//     document.write(`${i} `);
// }

//EXP 11
// let num = parseInt(prompt("Enter a number: "));
// for(let i = num ; i >= 1 ; i--){
//    document.write(`${i} `);
// }

//EXP 12
// let num = parseInt(prompt("Enter a number: "));
// for(let i = 1 ; i <= num ; i++){
//     document.write(`${i} `);
// }
// document.write("<br>");
// for(let i = num ; i >= 1 ; i--){
//     document.write(`${i} `);
// }

//EXP 13
// let firstNum = parseInt(prompt("Enter the first number: "));
// let secondNum = parseInt(prompt("Enter the second number: "));
// for(let i = firstNum ; i <= secondNum ; i++){
//     document.write(`${i} `);
// }

//EXP 20
// let num = prompt("Enter a number: ");
// let sum = 0;
// for(let i = 0 ; i < num.length ; i++){
//     sum += parseInt(num[i]);
// }
// document.write(`the sum of the digits of the number ${num} is ${sum}`);

//EXP 23
// let _length = parseInt(prompt("Enter the length of the square: "));
// let _with = parseInt(prompt("Enter the with of the square: "));
// for(let i = 1 ; i <= _length ; i++){
//     for(let j = 1 ; j <= _with ; j++){
//         if(i === 1 || i === _length || j === 1 || j === _with){
//             document.write("*");
//             document.write(" ");
//         } else {
//             document.write("*");
//             document.write(" ");
//         }
//     }
//     document.write("<br>");
// }   

//EXP 24
// n = 5
// *****
// ****
// ***
// **
// *
// let n = parseInt(prompt("Enter the number of rows: "));
// for(let i = n ; i >= 1 ; i--){
//     for(let j = 1 ; j <= i ; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

//EXP 25
// let n = parseInt(prompt("Enter the number of rows: "));
// for(let i = 1 ; i <= n ; i++){
//     for(let j = 1 ; j <= i ; j++){
//         document.write(j + " ,");
//     }
//     document.write("<br>");
// }

//EXP 26
// n = 5
// 54321
// 54321
// 54321
// 54321
// 54321
//  let n = parseInt(prompt("Enter the number of rows: "));
//     for(let i = 1 ; i <= n ; i++){
//         for(let j = n ; j >= 1 ; j--){
//             document.write(j);
//         }
//         document.write("<br>");
//     }

 let n = parseInt(prompt("Enter the number of rows: "));
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n ; j++){
            document.write(j);
        }
        document.write("<br>");
    }