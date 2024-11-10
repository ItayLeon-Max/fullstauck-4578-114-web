//Syntax
//;
// console.log('Hello World');
// loops, if-else, functions, classes

// for(let i = 0; i < 10; i++){
// if(i === 2){
// function sayHello()
// class User{

// //blocks
// if (true) {
//     //block
//     //פעולות בתוך הבלוק
// }
// let i;
// for (i =0 ; i < 10; i++) {
//     //block
//     //פעולות בתוך הבלוק
//     document.write(i + '<br>');
// }

// document.write(`${i}`);

// {
//    // hello im block
// }

//types
//Integer - 1, 2, 3, 4, 5
//Float - 1.2, 3.4, 5.6, 7.8
//String - 'Hello World', "my name is itay"
//Boolean - true, false (1, 0) 

// let = public // let x = 9; x = 7;
// const = private // const x = 9; x = 7 === false;

// const x = 9; 
// // x = 7;
// console.log(x);

// let name = "Itay ";
// console.log(name);
// // name[index]
// // "itay" = ['i', 't', 'a', 'y', ''] ----> [0 , 1, 2, 3, 4] // length - 1 [0 ----> 3]
// // 00100001110001
// console.log(name[0]);
// console.log(name[4]);

// let x = true;
// console.log(x); // 1
// let y = false;
// console.log(y); // 0

//operators ( +, -, *, /, %, **, +=, -=, *=, /=, %=, **=)
// let x = 10;
// let y = 5;
// let z = 0;
// let m = 6;
// let result = 0; // NuN / undefined
// // + ----> result += x; ----> result = result + x; // 0 = 0 + 10
// result += x;
// console.log(result); // 10
// // - ----> result -= y; ----> result = result - x; // 0 = 0 - 5
// //result = 10;
// result -= y;
// console.log(result);
// //result = 5;   
// result *= z; // result = result * z; // 0 = [5] * 0
// console.log(result); // 0

// //result = 0;
// result /= m;
// console.log(result);  // 0

// result = 678; // result / 10 = 67
// result %= 10; // result = result % 10; // 8

// result += ((x + y)*5) % 10; // result = [8 = result] + ((10 + 5) * 5) % 10;

// result = 0;
// result **= 2; // result = [result = 0] **(^) 2 // 0 = 0 ^ 2 = 0  

// // operators (++, --)
// result++; // result = result + 1; 
// console.log(result); 
// result--; // 1
// console.log(result); // 0

//operators (==, ===, !=, !==, >, <, >=, <=)
//if-else

// let x = 10;
// let y = 5;

/*
   if(condition){
   //code
}

let x = 9;
let y = 5;
if(x > y){
    // if true:
    console.log('x is greater than y');
} else { 
    // if false:
    console.log('x is less than y');
}

// if(x > y){
// if(x >= y) // X < Y and X = Y
// x = y
// = // x = 10 // השמה
// == // x == 10 // האם הערך של X שווה ל10
// === // שווה מוחלט
*/



/*
    if(condition1 && condition2){ // && = and
        //code
    }

    if(condition1 || condition2){ // || = or
        //code
    }

    if(condition1 && (condition2 || condition3)){
        //code
    }

    if(condition1 && (condition2 || condition3) && condition4){
        //code
    }

    if(condition1 && (condition2 || condition3) && (condition4 || condition5)){
        //code
    }
 */

// let x = 9;
// let y = 5;

// if(x > y && x === 6){
//     //CODE
// }

// if(x > y && (x === 6 || x === 9)){
//     //CODE
// }

// if(x > y && (x === 6 || x === 9) && (x === 9 || y === 5)){
//     //CODE
// }

// if([x > y && (x === 6 || x === 9)] && [(x === 9 || y === 5) || (x === 1 || y === 5)]){
//     //CODE
// }

//  if(x > y || x === 6){
//     console.log('x is big than y');
//  }else if(x === 9){
//     console.log('x is 9');
//  } else if(x === 10){
//     console.log('x is 10');
//  } else {
//     console.log('x is less than y');
//  }

 
//loops (for, while)
// output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');
// console.log('6');
// console.log('7');
// console.log('8');
// console.log('9');
// console.log('10');

// for loop syntax
/*
    for(type index ; condition ; increment/decrement(i++/i--)){
        //code
    }

    for(let i = 0 ; i < 10 ; i++) { // 0 ; 0 < 10 ; 0++ // 0 -------> 10
        //code
    }
*/ 

// let name = "string"; // [0, 1, 2, 3, 4, 5]
// for(let i = 0 ; i < 6 ; i++){
//     document.write(name[2]);
// }

// swipe loop
// for(let i = 1 ; i <= 5 ; i++){
//     document.write("<br>");
//     for(let j = 1 ; j <= 5 ; j++){
//         if(i <= j){
//             document.write(j);
//     }
//     }
// }

// document.write("<br>");

// // reverse swipe loop
// for(let i = 1 ; i <= 5 ; i++){
//     document.write("<br>");
//     for(let j = 1 ; j <= 5 ; j++){
//         if(j <= i){
//             document.write(j);
//     }
//     }
// }

//if(i <= j){   
// i -----> 5
// j -----> 5

//output:
// *
// **
// ***
// ****
// *****

// if(j <= i){
// 5 -----> i
// 5------> j

//output:   
// *****
// ****
// ***
// **
// *

//for(type index ; [condition , condition, ... ]; increment/decrement(i++/i--)){

// for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 1 ; j <= 5, j <= i ; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// while loop
/*
    let i = 0;
    while(condition){
        //code
        increment/decrement(i++/i--)
    }
*/

// let i = 1;
// while(i <= 5){
//     let j = 1;
//     while(j <= i){
//         document.write("*");
//         j++;
//     }
//     document.write("<br>");
//     i++;
// }

// functions

/*
    function functionName(types, types, ...){
        //code
    }

    functionName();
*/ 

// function sayHello(){
//     console.log('Hello World');
// }

// let x = 10;
// let y = 5;
// if(x < y){
//     document.write('x is less than y');
// } else {
//     sayHello();
// }

// function sum(x,y,z){ // sum(num, num2)
//     return x + y + z;
//     // return num + num2;
// }

// let num = +prompt('Enter a number');
// let num2 = +prompt('Enter a number');
// sum(num, num2);

// function avg(x,y,z){
//     return (x + y + z) / 3;
// }

// let num = +prompt('Enter a number');
// let num2 = +prompt('Enter a number');
// let num3 = +prompt('Enter a number');
// console.log(avg(num, num2, num3));

// function printAsterisk(){
//     for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 1 ; j <= 5, j <= i ; j++){
//         document.write("*");
//     }
//     document.write("<br>");
//     }
// }

// for(let i = 0 ; i < 100 ; i++){
//     printAsterisk();
//     document.write('<br>');
// }

// function hello(){
//     return 'Hello World';
// }
 
// console.log(hello());

// Arrays
// Syntax
// let arrayName = [value, value, value, ...];
// let arr = [1, 2, 3, 4, 5]; // size = 5
// arr[3] = 4
// let name = "Itay"; // name = ['I', 't', 'a', 'y']
// name[1] // t

// let arr2 = [2, "Itay", true, 5.6]; // size = 4
// arr2[0] // 2
// arr2[1] // Itay
// arr2[2] // true
// arr2[3] // 5.6

//sum of array
// let arr = [11, 56, 20, 10, 5];
// let sum = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]; // sum = sum + arr[i];
// }
// let avg = sum / arr.length;

// console.log(sum);

// sum of array
// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// // avg of array
// function avgArray(arr){
//     // return from sumArray function / arr.length
//     return sumArray(arr) / arr.length;
// }

// // output sum and avg of array
// let arr = [11, 56, 20, 10, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// console.log(sumArray(arr) + " " + avgArray(arr));

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// when loops?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
// // console.log(arr[5]);
// // console.log(arr[6]);
// // console.log(arr[7]);
// // console.log(arr[8]);
// // console.log(arr[9]);

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// let arr = []; // size = 0
// let arr2 = [1, 2, 3, 4, 5]; // size = 5 
            //[0, 1, 2, 3, 4]

// for(let i = 3 ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

// let student = [
//     {
//         name: "Itay",
//         age: 27,  
//         grade: 100,
//         city: "Tel Aviv"
//     },

//     {
//         name: "Shlomi",
//         age: 30,
//         grade: 90,
//         city: "Jerusalem"
//     },

//     {
//         name: "Yossi",
//         age: 25,
//         grade: 80,
//         city: "Haifa"
//     }
// ];

// for(let i = 0 ; i < student.length ; i++){
//     document.write(`student name: ${student[i].name} student age: ${student[i].age} student grade: ${student[i].grade}`);
//     document.write("<br>");
// }

// for, while.
// for-in
// for-of
// for-each

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let numbers in arr){
//     console.log(numbers);
// }

// let nameArr = [6, "Shlomi", "Yossi"];
// // for(let name in nameArr){
// //     console.log(nameArr[name]);
// // }

// for(let name = 0 ; name < nameArr.length ; name++){
//     // 0 , 0 < 3 , 0++ // 6
//     console.log(nameArr[name]);
//     // 1 , 1 < 3 , 1++ // Shlomi
//     // console.log(nameArr[name]);
//     // 2 , 2 < 3 , 2++ // Yossi
//     // console.log(nameArr[name]);
// }

// console.log(nameArr[0]); // i = 0
// console.log(nameArr[1]); // i = 1
// console.log(nameArr[2]); // i = 2
