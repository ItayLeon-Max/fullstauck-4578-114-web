//Advanced Array:
const studentsArr = [ 
    {
    isActive: true,
    age: 18,
    name: 'John Doe',
    grade: [79, 85, 90, 95, 100],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: false,
    age: 19,
    name: ' Yoko Ono',
    grade: [70, 75, 80, 85, 90],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: true,
    age: 20,
    name: 'Yosi Tosi',
    grade: [60, 65, 70, 75, 80],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: false,
    age: 24,
    name: 'daniel radcliffe',
    grade: [50, 55, 60, 65, 70],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: true,
    age: 25,
    name: 'Emma Watson',
    grade: [40, 45, 50, 55, 60],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: false,
    age: 26,
    name: 'Rupert Grint',
    grade: [60, 100, 100,90, 80],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: true,
    age: 27,
    name: 'Tom Felton',
    grade: [79, 80, 55, 60, 40],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: false,
    age: 28,
    name: 'Alan Rickman',
    grade: [46, 100, 90, 73, 90],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    },
    {
    isActive: true,
    age: 29,
    name: 'Maggie Smith',
    grade: [45, 55, 60, 55, 80],
    subjects: ['Math', 'Science', 'English', 'History', 'Art'],
    }
];

//1. Find function
//Syntax: const nameVar =  array.find(function(currentValue, index, arr),thisValue)
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned.
//Example:
const student = studentsArr.find(student => student.name === 'Emma Watson');
console.log(student);

//2. FindIndex function
//Syntax: const nameVar =  array.findIndex(function(currentValue, index, arr),thisValue)
//The findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function.
//If no values satisfy the testing function, -1 is returned.

//Example:
const studentIndex = studentsArr.findIndex(student => student.name === 'Emma Watson');
console.log(studentIndex);

//3. Filter function
//Syntax: const nameVar =  array.filter(function(currentValue, index, arr),thisValue)
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//Example:
const studentsIsActive = studentsArr.filter(student => student.isActive === true && student.age > 20);
console.log(studentsIsActive);

const studentsIsNotActive = studentsArr.filter(student => student.isActive === false && student.grade[0] > 40);
console.log(studentsIsNotActive);

//4. Map function
//Syntax: const nameVar =  array.map(function(currentValue, index, arr),thisValue)
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//Example1:
// get the student name, age, and isActive

const studentsOnMap = studentsArr.map(student => {
    return {
        name: student.name,
        age: student.age,
        isActive: student.isActive
    }
})

console.log(studentsOnMap);

//Example2:
// use map and filter together:
// get the student who is active
// and get the student who is active and map the student name, age, and isActive

const studentOnMapAndFilter = studentsArr.filter(student => student.isActive).map(student => {
    return {
        name: student.name,
        age: student.age,
        isActive: student.isActive
    }
})

console.log(studentOnMapAndFilter); 

//5. every function
//Syntax: const nameVar =  array.every(function(currentValue, index, arr),thisValue)
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.

//Example:
const isAllStudentActive = studentsArr.every(student => student.isActive);
console.log(isAllStudentActive); // false

//Example2:
const isAllStudentSumGradeIsOver300 = studentsArr.every(student =>
    {
        for(grade of student.grade){
            let sum = 0;
            sum += grade;
            return sum === 300;
        }
    }
);
console.log(isAllStudentSumGradeIsOver300); // false

// 6. some function
//Syntax: const nameVar =  array.some(function(currentValue, index, arr),thisValue)
//The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//It returns a Boolean value.
 
//Example1:
const isSomeStudentActive = studentsArr.some(student => student.age > 20);
console.log(isSomeStudentActive); // true

//Example2:
console.log(studentsArr.filter(student => student.name.includes('a')));


