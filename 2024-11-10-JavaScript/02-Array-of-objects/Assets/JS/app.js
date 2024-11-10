//Object of Arrays
const studentsArr = [
    {
        name: {
            first: "Itay",
            last: "Leon"
        },
        grade: [80,75,100]
    },
    {
        name: {
            first: "Yossi",
            last: "Cohen"
        },
        grade: [45,60,80]
    },
    {
        name: {
            first: "David",
            last: "Levi"
        },
        grade: [100,90,50]
    }
];

for(let allStudentsOfArray in studentsArr){
    document.write(`First Name:   ${studentsArr[allStudentsOfArray].name.first} <br>`);
    document.write(`Last Name:  ${studentsArr[allStudentsOfArray].name.last}  <br>`);
    document.write(`Grade:  ${studentsArr[allStudentsOfArray].grade}  <br>`);
    document.write(`<br>`);
}

for(let avgOfStudents in studentsArr){
    let sum = 0;
    for(let i = 0; i < studentsArr[avgOfStudents].grade.length; i++){
        sum += studentsArr[avgOfStudents].grade[i];
    }
    let avg = sum / studentsArr[avgOfStudents].grade.length;
    document.write(`The average grade of   ${studentsArr[avgOfStudents].name.first}   ${studentsArr[avgOfStudents].name.last}  is:   ${avg}  <br>`);
    document.write(`<br>`);
}