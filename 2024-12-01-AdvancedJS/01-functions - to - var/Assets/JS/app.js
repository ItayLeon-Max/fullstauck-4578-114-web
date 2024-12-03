const name = "Itay";
const grade = 96;

showGrade = grade => {
    console.log(`garde is: ${grade}`);
    return true;
} 

console.log(`Hello ${name}`);
console.log(showGrade(60));
console.log(showGrade);

console.log(typeof name);
console.log(typeof grade);
console.log(typeof showGrade(60));
console.log(typeof showGrade);

let someVar;

someVar = name;
someVar = grade;
someVar = showGrade;
someVar = showGrade;
console.log(someVar(60));
