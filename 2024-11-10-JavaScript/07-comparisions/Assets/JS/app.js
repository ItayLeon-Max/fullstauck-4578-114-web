//compare the value and the type of the variable.
// == is used to compare the value of the variable. DONT USE IT!!!.
// === is used to compare the value and the type of the variable.


const myAge = 22;
const yourAge = "22";

// use === to compare the value and the type of the variable.
if(myAge === yourAge) {
    console.log("You are the same age as me.");
} else {
    console.log("You are not the same age as me.");
}

// dont use ==, use === to compare the value and the type of the variable.
if(myAge == yourAge) {
    console.log("You are the same age as me.");
} else {
    console.log("You are not the same age as me.");
}

const number = 0 ;
const bool = false;
if(number === bool) {
    console.log("The number is equal to the boolean.");
} else {
    console.log("The number is not equal to the boolean.");
}