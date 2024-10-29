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
//     document.write(i + " , ");
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
// (A)
//  let n = parseInt(prompt("Enter the number of rows: "));
//     for(let i = 1 ; i <= n ; i++){
//         for(let j = n ; j >= 1 ; j--){
//             document.write(j);
//         }
//         document.write("<br>");
//     }

// (B)
//  let n = parseInt(prompt("Enter the number of rows: "));
//     for(let i = 1 ; i <= n ; i++){
//         for(let j = 1 ; j <= n ; j++){
//             document.write(j);
//         }
//         document.write("<br>");
//     }


// let first = prompt("Enter the first number: ");
// let second = prompt("Enter the second number: ");
// if(first > second){
//     let temp = first;
//     first = second;
//     second = temp;
//     for(let i = first ; i <= second ; i++){
//         if(i % num === 0){
//             document.write(i);
//         }
//     }
// } 

// let num = parseInt(prompt("Enter a number: "));
// let sum = 0;
// for(let i = 1 ; i <= num ; i++){
//     sum += i;
//     document.write(`${i} `  + " ,");
// }
// document.write(` the sum is: ${sum} `);

// class EXP 1
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

// class EXP 2
// for(let i = 7 ; i <= 700 ; i=i+7){
//     document.write(i + " ");
// }

// class EXP 3
// 2,4,8,16,32,64,128,256,512,1024,2048,4096
// for(let i = 2 ; i <= 4096 ; i *= 2){
//     document.write(i + " ");
// }

// class EXP 4
//sum candles on Hanukkah
// let sumCandle = 0;
// for(let candlesPerDay = 2 ; candlesPerDay <= 9 ; candlesPerDay++){
//     sumCandle += candlesPerDay;
// }
// document.write(`the sum of candles on Hanukkah is ${sumCandle}`);

// class EXP 5
// sum candles on Hanukkah per avg
// let sumCandle = 0;
// let avgCandle = 0;
// for(let candlesPerDay = 2 ; candlesPerDay <= 9 ; candlesPerDay++){
//     sumCandle += candlesPerDay;
// }
// document.write(`the sum of candles on Hanukkah is ${sumCandle}` + "<br>");
// avgCandle = sumCandle / 8;
// document.write(`the avg of candles on Hanukkah is ${avgCandle}`);

// class EXP 6
//10 20 30 40 50 60 70 80 90 100 = 550/10 = 55
// let randomNum = Math.floor(Math.random() * 10) + 10;
// let plusOfRandomNum = 0;
// let avgOfRandomNum = 0;
// for(let i = 1 ; i <= randomNum ; i++){
//     plusOfRandomNum += i;
// }
// avgOfRandomNum = plusOfRandomNum / randomNum;
// document.write(`the avg randoms numbers is ${avgOfRandomNum}` + "<br>");

// let price = parseInt(prompt("Enter the price: "));
// let sum = 0;
// for(let i = 1 ; i <= 12 ; i++){
//     sum += price;
// }
// document.write(`the sum of the price is ${sum}` + "<br>");

// Class EXP 7
// enter 100 numbers and print the max of numbers with array
// let arr = [];
// for(let i = 0 ; i < 100 ; i++){
//     let num = parseInt(prompt("Enter a number: "));
//     arr.push(num);
// }
// let max = arr[0];
// for(let i = 1 ; i < arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// document.write(`the max number is ${max}`);

//enter 100 numbers and print the max of numbers with only For loop
// let max = 0;
// for(let i = 0 ; i < 100 ; i++){
//     let num = parseInt(prompt("Enter a number: "));
//     if(num > max){
//         max = num;
//     }
// }
// document.write(`the max number is ${max}`);

// Class EXP 8
//input: 5
//now: 6 random numbers
//if input inside on the random numbers print "you min" else print "you dont win"
let num = parseInt(prompt("Enter a number: "));
let flag = false;
for(let i = 1 ; i <= 6 ; i++){
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if(num === randomNum){
        flag = true;
        break;
    }
}
if(flag){
    document.write("you win");
}
else{
    document.write("you dont win");
}
