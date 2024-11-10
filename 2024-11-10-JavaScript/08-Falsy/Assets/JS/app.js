//Falsy is a value that translates to false when evaluated in a boolean context.
//Falsy values are: false, 0, "", null, undefined, and NaN.
//Truthy is a value that translates to true when evaluated in a boolean context.

const isOld = false;
if(isOld){
    console.log('You are old is NOT a falsy value');
} else {
    console.log('You are old is a falsy value');
}

const number = 1;
if(number){
    console.log('Number is NOT a falsy value');
} else {
    console.log('Number is a falsy value');
}

const number2 = 0;
if(number2){
    console.log('Number2 is NOT a falsy value');
} else {
    console.log('Number2 is a falsy value');
}

const name = 'Itay';
if(name){
    console.log('Name is NOT a falsy value');
} else {
    console.log('Name is a falsy value');
}

//boolean is a falsy value
//Nameric is a falsy value
//String is a falsy value
//null is a falsy value
//undefined is a falsy value
//NaN is a falsy value
//0 is a falsy value
//empty string is a falsy value
//false is a falsy value
//true is a truthy value
//1 is a truthy value
//string is a truthy value
//empty object is a truthy value
//empty array is a truthy value
//empty function is a truthy value
//empty object is a truthy value
//empty array is a truthy value

let age;
if(age){
    console.log('Age is NOT a falsy value');
} else {
    console.log('Age is a falsy value');
}

let address = null;
if(address){
    console.log('Address is NOT a falsy value');
} else {
    console.log('Address is a falsy value');
}

let student = {name: 'Itay', age: null};
if(student.age){
    console.log('Student is NOT a falsy value');
} else {
    console.log('Student is a falsy value');
}

let salary = parseInt('4654hdfhdfh544hd');
console.log(salary);
if(salary){
    console.log('Salary is NOT a falsy value');
} else {
    console.log('Salary is a falsy value');
}