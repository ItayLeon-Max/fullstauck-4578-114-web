function University(students) {
  this.students = [
  {
    name: students.name,
    grade: students.grade
  }
  ];

  this.getStudentsAvg = function() {
    let total = 0;
    for (let i = 0; i < this.students.length; i++) {
      total += this.students[i].grade;
    }
    return total / this.students.length;
  }
};

const students = [{
  grade: 74, 
  name: "Jordan Henderson"

},
{
  grade: 86,
  name: "Alma Wall"
},
{
   grade: 95,
   name: "Mayo Wood"
}];

const university = new University(students);
console.log(university.getStudentsAvg());