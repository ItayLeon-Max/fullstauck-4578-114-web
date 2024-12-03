const name = "Itay";
const grade = 96;

showGrade = grade => {
    console.log(`garde is: ${grade}`);
    return true;
} 

const showName = name => {
    console.log(`name is: ${name}`);
}

const showFunction = (someFunction) => {
    //function with parameter is a function
    console.log(`function is: ${someFunction}`);
}

showName("Daniel");
showGrade(60);
showFunction(showGrade);
