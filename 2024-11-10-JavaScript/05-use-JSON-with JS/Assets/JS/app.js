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

//Convert JS (Object) to JSON
//JSON.stringify() method converts a JavaScript object or value to a JSON string
const jsonString = JSON.stringify(studentsArr);


for(student of studentsArr){
    console.log(`Student: ${student.name.first} ${student.name.last}`);
    console.log(`Grades: ${student.grade}`);
    console.log(`Average: ${student.grade.reduce((a,b) => a + b, 0) / student.grade.length}`);
    console.log("-------------------------------");
}
console.log(jsonString);

//Convert JSON to JS (Object)
//JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);
