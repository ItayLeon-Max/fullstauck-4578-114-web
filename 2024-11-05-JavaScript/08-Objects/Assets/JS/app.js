//Object in array:
//Create an array of objects with the following properties: name, age, country.
//Iterate over the array and print the properties of each object.
//Class student project:

let size = +prompt("Enter the number of students: ");
let sumGradeOfStudent = 0;
let avgGradeOfStudent = 0;
let students = [];

for(let i = 0 ; i < size ; i++){
    // students[i] = new Object();
    students[i] = {};
    students[i].name = prompt("Enter the name of the student: ");
    // test if the first character is big letter
    if(students[i].name[0] !== students[i].name[0].toUpperCase()){
        // if it is not, then capitalize the first letter
        students[i].name = students[i].name[0].toUpperCase() + students[i].name.slice(1);
    }
    students[i].age = +prompt("Enter the age of the student: ");
    if(students[i].age < 0){
        // test if the age is negative
        // if it is, then prompt the user to enter a valid age
        // and store the new age in the object property age of the student
        alert("Age cannot be negative. Please enter a valid age.");
        students[i].age = +prompt("Enter the age of the student: ");
    }
    students[i].grade = +prompt("Enter the grade of the student: ");
    if(students[i].grade < 0){
        // test if the grade is negative
        // if it is, then prompt the user to enter a valid grade
        // and store the new grade in the object property grade of the student
        alert("Grade cannot be negative. Please enter a valid grade.");
        students[i].grade = +prompt("Enter the grade of the student: ");
    }
    students[i].country = prompt("Enter the country of the student: ");
    // test if the first character is big letter
    
}

    for(let i = 0 ; i < size ; i++){
        // sum the grades of the students
        sumGradeOfStudent += students[i].grade;
    }
    if(size > 0) avgGradeOfStudent = sumGradeOfStudent / size; // calculate the average grade of the students
    else avgGradeOfStudent = 0; // if the size of the array is 0, then the average grade is 0


    for(let i = 0 ; i < size ; i++){
        //print the properties of each student
        document.write("Student " + (i+1) + "<br>");
        document.write("--------------" + "<br  />");
        document.write("Name: " + students[i].name + "<br>");
        document.write("Age: " + students[i].age + "<br>");
        document.write("Grade: " + students[i].grade + "<br>");
        document.write("Country: " + students[i].country + "<br>");
        document.write("<br>");
    }
     document.write(`The average grade of the students is: ${avgGradeOfStudent}`);

    // for-in loop
    // for(let i in students){ // i is the index of the array
    //     console.log(students[i]);
    // }




