const studentsArr = [
    {
        name: {
            first: 'John',
            last: 'Doe'
        },

        age: 32,
        courses:[
            {
                name: 'Math',
                grade: [100, 90, 80]
            },
            {
                name: 'DevOps',
                grade: [70, 80, 90]
            }
        ]
    },
    {
        name: {
            first: 'Itay',
            last: 'Leon'
        },
        age: 25,
        courses: [
            {
                name: 'Math',
                grade: [54, 65, 76]
            },
            {
                name: 'fullstack',
                grade: [80, 90, 100]
            }
        ]
    }
];

function addStudent(firstName, lastName, age){
    studentsArr.push({
        name: {
            first: firstName,
            last: lastName
        },
        age: age,
        courses: []
    });
}

function addCurses(students, curseName, grade){
    students.courses.push({
        name: curseName,
        grade: grade
    });
}

addCurses(studentsArr[0], 'History', [90, 80, 70]);
addCurses(studentsArr[1], 'History', [100, 100, 100]);


for(let i = 0; i < studentsArr.length; i++){
    document.write(`<h1>Student ${i + 1}</h1>`);
    document.write(`<p>First name: ${studentsArr[i].name.first}</p>`);
    document.write(`<p>Last name: ${studentsArr[i].name.last}</p>`);
    document.write(`<p>Age: ${studentsArr[i].age}</p>`);
    for(let j = 0; j < studentsArr[i].courses.length; j++){
        document.write(`<h3>Course ${j + 1}</h3>`);
        document.write(`<p>Name: ${studentsArr[i].courses[j].name}</p>`);
        document.write(`<p>Grades: ${studentsArr[i].courses[j].grade.join(', ')}</p>`);
    }
}










