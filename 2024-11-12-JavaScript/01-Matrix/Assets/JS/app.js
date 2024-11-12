//Matrix
//Syntax for creating a matrix
/*
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
*/

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
// ];
// console.log(arr[1][2]); // 6

let students = [
    ["John", 55, 88, 95],
    ["Bob", 80, 78, 88],
    ["Alice", 85, 85, 90],
    ["Jane", 79, 90, 100]
];

let studentGrade = students.filter(students => students[1] >= 80);
console.log(studentGrade);