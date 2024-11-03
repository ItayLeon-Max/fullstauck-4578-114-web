const students = [];
const studentSize = prompt("Enter the number of students: ");
for (let i = 0; i < studentSize; i++) {
    const student = {};
    student.name = prompt("Enter the student name: ");
    student.grade = [];

    const gradeSize = prompt("Enter the number of grades: ");
    for (let j = 0; j < gradeSize; j++) {
        student.grade.push(prompt("Enter the grade: "));
    }
    students.push(student);
}

for(let i = 0; i < students.length ; i++){
    document.write(`Student Name: ${students[i].name} grade is: ${students[i].grade} <br>`);
}
