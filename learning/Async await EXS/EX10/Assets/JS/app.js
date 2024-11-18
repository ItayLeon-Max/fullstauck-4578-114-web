import {
  getStudentByName,
  getStudentsGradesById
 } from './students-api.js';

async function init(){
  try {
    let studentByName = await getStudentByName();
    let gradeById = await getStudentsGradesById();

  //debugging
  console.log("Student Data:", studentByName);
  console.log("Grades Data:", gradeById);

  for(let i = 0; i < studentByName.length; i++){
    let nameId = studentByName[i].id;
    let studentGrades = null;

    for(let j = 0; j < gradeById.length; j++){
      if(gradeById[j].id === nameId){
        studentGrades = gradeById[j].grades;
        break;
      }
    }
    if(studentGrades){
      let sum = 0;
      for(let k = 0; k < studentGrades.length; k++){
        sum += studentGrades[k];
      }
      let avg = sum / studentGrades.length;
      console.log(`Student: ${studentByName[i].name} - Average Grade: ${avg}`);
    } else {
      console.log(`Student: ${studentByName[i].name} - No Grades`);
    }
  }
  } catch(error){
    console.error("Error:", error);
  }
}

init();