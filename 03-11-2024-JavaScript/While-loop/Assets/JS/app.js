//print numbers from 1 to 100
// let i = 1;
// while(i <= 100){
//     document.write(`${i} <br>`);
//     i++;
// }

// //print all number from 2 to 100 % 2 == 0
// let j = 2;

// while(j <= 100){
//     document.write(`${j} <br>`);
//     j += 2;
// }

//EXP 1
// input: 1 5 8 3 if 0 is entered, stop the loop and print the square of the number
let num;
while(num !== 0){
    num = +parseInt(prompt("Enter a number"));
    document.write(`${num ** 2} <br>`);
}




