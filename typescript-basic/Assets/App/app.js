// //Output to the page
// alert("My name is Itay Leon");
// document.write("My name is itay leon");
// document.write("<br>");
// document.write(`The sum of ${12} and ${23} is ${12+23}.`);
// document.write("<br>");
// document.write(`The sum of ${20} and ${100} is ${20+100}.`);

// //input from the user
// var name = prompt("What is your name?");
// document.write("<br>");
// document.write(`Hello ${name}`); 

// var fName = prompt("What is your first name?");
// var lName = prompt("What is your last name?");
// document.write("<br>");
// document.write(`Hello ${fName} ${lName}`);

// var fName = prompt("What is your first name?");
// var lName = prompt("What is your last name?");
// var age = prompt("What is your age?");
// if (age < 18) {
//     alert("You are not allowed to enter this website");
// } else {
//     alert(`Hello ${fName} ${lName}` + "\n" + `You are ${age} years old`);
// }

// //ex1
// var grade = prompt("What is your grade?");
// if (grade >= 60) {
//     document.write("You passed");
// } else {
//     document.write("You failed");
// }
// document.write("<br>");

// //ex2
// var num = prompt("Enter a number");
// if(num > 0) {
//     document.write("Positive number");
// } else if(num < 0) {
//     alert("Negative number");
// } else {
//     document.write("Zero");
// }
// document.write("<br>");

// //ex3
// var grade1 = prompt("Enter grade 1");
// if(grade1 >=0 && grade <=100) {
//     document.write("Valid grade");
// } else {
//     document.write("Invalid grade");
// }

//ex4
var price = prompt("Enter the price");
if(price >= 1000 && price <= 2000) {
    document.write("Getting a height discount " + price * 0.1);
} else {
    document.write("No discount today");
}