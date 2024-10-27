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

var fName = prompt("What is your first name?");
var lName = prompt("What is your last name?");
var age = prompt("What is your age?");
if (age < 18) {
    alert("You are not allowed to enter this website");
} else {
    alert(`Hello ${fName} ${lName}` + "\n" + `You are ${age} years old`);
}