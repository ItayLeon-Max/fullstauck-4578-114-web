import Person from "./person.js";
import Student from "./student.js";


//Array with Person objects
const person = Array<Person>(3);
person.fill(new Person("Itay", 25, false), 0, 1);
person.fill(new Person("Yam", 30, true), 1, 2);
person.fill(new Person("Yaron", 35, true), 2);
console.log(person);
person.forEach(p => p.printInfo());
console.log(person.reduce((acc, pAge) => acc + pAge.sumOfAge(), 0));

console.log("-------------------------------------------------");

//Array with Student objects
const student = Array<Student>(3);
student.fill(new Student("Itay", 25, [100, 90, 80]), 0, 1);
student.fill(new Student("Yam", 30, [90, 80, 70]), 1, 2);
student.fill(new Student("Yaron", 35, [80, 70, 60]), 2);
console.log(student);
student.forEach(s => s.printInfo());

console.log("-------------------------------------------------");
const arr = Array<string>(16);
arr.fill("Itay",0,3);
arr.fill("Yam",3,6);
console.log(arr);

const bool = Array<boolean>(5);
bool.fill(true, 0, 1);
bool.fill(false, 1, 2);
bool.fill(true, 2, 3);
bool.fill(false, 3, 4);
bool.fill(true, 4);
console.log(bool);

// .fill() method with a value
// syntax: arr.fill(value, start, end)
// value: value to fill the array with (required) 
// example: arr.fill(0) => fill the array with 0
// example to fill the array with 0 from index 0 to 5 => arr.fill(0, 0, 5) output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
// start: index to start filling the array (optional) 
// example: arr.fill(0, 5) => fill the array with 0 from index 5
// end: index to stop filling the array (optional)
// example: arr.fill(0, 0, 5) => fill the array with 0 from index 0 to 5
// example to fill 1 to 5 index with 1 => arr.fill(1, 5) output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
// example to fill 1 to 5 index with 1 => arr.fill(1, 5, 10) output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
