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

function reversNumber(num){
    let temp = num;
    let revers = 0;

    while(num > 0){
        let rem = temp % 10;
        revers =  revers * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return revers;
}

let number = prompt("Enter a number: ");
let reverse = reversNumber(parseInt(number));
document.write("Reverse number is: " + reverse);

