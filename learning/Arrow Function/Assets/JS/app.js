//Arrow Function
//Syntax:const nameOfFunc = (param1, param2, …, paramN) => expression

//Example 1 only function with 2 parameters numbers
const add = (a,b) => {
    return a + b;
}
console.log(add(2,3)); //Output: 5

//Example 2 with Object
const student = {
    name: {
        firstName: 'Itay',
        lastName: 'Leon',
        id: {
            numberID: 322757691,
            state: "Israeli"
        }
    },
    age: 25,
    city: {
        street: 'Sirkin',
        number: 42
    }
}

const getStudentName = ({name: {firstName,lastName}}) => {
    return `My name is ${firstName} ${lastName}`;
}


const getStudentIDNumber = ({name: {id: {numberID}}}) => {
    return `My ID number is ${numberID}`;
}

console.log(getStudentName(student));
console.log(getStudentIDNumber(student)); 
