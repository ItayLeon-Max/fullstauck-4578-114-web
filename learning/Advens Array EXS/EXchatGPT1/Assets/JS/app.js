const students = [
  { name: 'Alice', grade: 85, passed: true },
  { name: 'Bob', grade: 76, passed: true },
  { name: 'Charlie', grade: 92, passed: true },
  { name: 'Dave', grade: 59, passed: false },
  { name: 'Eve', grade: 68, passed: false }
];

let isPassedAndGradeBig80 = students.filter(students => students.passed === true && students.grade > 80);
console.log(isPassedAndGradeBig80);







