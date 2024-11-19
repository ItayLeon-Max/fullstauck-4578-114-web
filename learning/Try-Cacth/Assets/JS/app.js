//try-catching the error
/*
Syntax:
try {
    // code that may throw an error
} catch (error) {
    // code to be executed if an error occurs
}
 */


//create a function that will throw an error
//Syntax: var variableName = new Error('error message');

//example:
const myError = new Error('This is an error message');
console.log(myError); // Error: This is an error message and line on vs code
//if we want the error message to be displayed, we can use the message property of the error object
// Syntax: errorObject.message
console.log(myError.message); //This is an error message

const testMe = () => {
    const errorText = new Error('This is an error message');
    throw errorText;
}

try {
    testMe();
} catch (error) {
    console.log(error.message);
}
