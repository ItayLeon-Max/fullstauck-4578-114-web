import {
  getStudentByName,
  getStudentsGradesById
 } from './students-api.js';

 async function init(studentName, id){
  let studentByName = await getStudentByName(studentName);
  if(!studentByName || typeof studentByName === 'Object'){
    console.log(`Student ${studentName} not found`);
    return;
  } 
  console.log(`Student: ${studentByName.name}`);
  console.log(`Email: ${studentByName.email}`);

  let studentGradeById = await getStudentsGradesById(studentByName.id);
  id = studentByName.id;
  let grades = studentGradeById.grades;
  if(!studentGradeById || typeof studentGradeById === 'Object'){
    console.log(`Student ${studentName} not found`);
    return;
  }
  console.log(`Student ID: ${studentGradeById.id}`);
  console.log(`Grades: ${grades}`);

  let total = grades.reduce((acc, curr) => acc + curr);
  let average = total / grades.length;
  console.log(`Average: ${average}`);
}

init("Estelle Valentine",2744564);
