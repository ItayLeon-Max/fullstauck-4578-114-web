//Destrcut-spread on objects
//Syntax: const {prop1, prop2} = object;
const student = {
    firstName: 'Itay',
    lastName: 'Leon',
    age: 25,
    classNumbers: 'b',
    grades: [100, 90, 95, 85, 80],
    city: {
        name: 'Tel Aviv',
        zipCode: 12345
    },
    country: 'Israel'
}

const {grades: [firstGrade, secondGrade]} = student;
console.log(firstGrade, secondGrade);

const {firstName, lastName, ...otherKey} = student;
console.log(firstName, lastName, otherKey);


const {age} = student;
console.log(age);

const {city: {name, zipCode}} = student;
console.log(name, zipCode);

//Destruct-spread on objects on function
//Syntax: function foo({prop1, prop2}) {};
function foo({city: {name, zipCode}}) {
    console.log(`I am ${name} from ${zipCode}`);
}

foo(student);


//Destruct-spread on arrays
//Syntax: const [vName1,vName2,vName3,...] = array;
const numbers = [1, 2, 3, 4, 5, 6];
const [A,B,C] = numbers;
console.log(A,B,C);

const arr = [{a:1}, {b:2}];
const [{a}, {b}] = arr;
console.log(a,b);
