//HOF - Higher Order Function

const students = [
    {name: 'John', grade:95, age: 23},
    {name: 'Jane', grade:55, age: 20},
]


// HOF List of functions on Array
// 1. forEach
students.forEach(student => console.log(student));

// 2. map
const studentTable = students.map(student => `
    <tr>
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>${student.age}</td>
    </tr>`
);

document.getElementById('studentsTable').innerHTML = studentTable.join('');

// 3. filter
const studentFilter = students.filter(student => student.grade > 50);
console.log(studentFilter);

// 4. reduce
const avgGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log(avgGrade);

// 5. every
// 6. some

// 7. find
const studentFind = students.find(student => student.grade === 55);
console.log(studentFind);

// 8. findIndex
const studentFindIndex = students.findIndex(student => student.age === 23);
console.log(studentFindIndex);





