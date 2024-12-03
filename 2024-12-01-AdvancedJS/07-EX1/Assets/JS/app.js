// function sayHello() {
//     console.log("hello");
// }
// function doSomething(callback) {
//     callback();
// }
// doSomething(sayHello);

//1. inline function
//2.anonymous function
//3. arrow function

//1. inline function
// function sayHello() {console.log("hello")};
// function doSomething(callback) {
//     callback();
// }

// doSomething(sayHello);

//2. anonymous function
// function doSomething(callback) {
//     callback();
// }

// doSomething(function() {
//     console.log("hello");
// });

// doSomething();


//3. arrow function
// const sayHello = () => console.log("hello");
// const doSomething = (callback) => callback();
// doSomething(sayHello);

//////////

// function power2(num) {
//     return Math.pow(num, 2);    
// }

// function printPower2(callback){
//     console.log(callback(2));
// }

//1. inline function
// power2 = (num) => Math.pow(num, 2);
// printPower2 = (callback) => console.log(callback(2));

//2. anonymous function
// const power2 = num => Math.pow(num, 2);
// const printPower2 = num => num(2);

// printPower2(power2);

// function divide(a,b) {
//     return a/b;
// }

// function printIsOdd(num){
//     console.log(num % 2 === 0 ? "even" : "odd");
// }

// //1. Arrow function
// const divide1 = (a,b) => a/b;
// const printIsOdd1 = num => num % 2 === 0 ? "even" : "odd";

function isNegative(num) {
    if (num < 0) {
        console.log("negative");
        return true;
    }
    return false;
}

//1. Arrow function
const isNegative1 = num => {
    if (num < 0) {
        console.log("negative");
        return true;
    }
    return false;
}