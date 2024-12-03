//HOF - Higher Order Function

const students = [
    {name: 'John', grade:95, age: 23},
    {name: 'Jane', grade:100, age: 20},
    {name: 'Maria', grade:85, age: 22},
    {name: 'Peter', grade:75, age: 24},
    {name: 'Lucas', grade:65, age: 21},
]

const maxGrade = students.reduce((max, student) => student.grade > max ? max = student.grade :  max, 0);
console.log(maxGrade);





