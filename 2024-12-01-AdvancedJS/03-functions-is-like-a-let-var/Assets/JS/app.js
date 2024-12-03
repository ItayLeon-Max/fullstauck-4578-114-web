const name = "Itay";
const grade = 96;

showGrade = grade => {
    console.log(`garde is: ${grade}`);
    return true;
} 

console.log(showGrade)
// showGrade is function
console.log(typeof showGrade)

showGrade = 60;
// showGrade is number value
console.log(typeof showGrade)

showGrade // when we call showGrade it will return 60
showGrade() // when we call showGrade as function it will return error

