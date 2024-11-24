//constructor functions:

//1. function declaration
function car(color, doors, type, convertible) {
    this.color = color;
    this.doors = doors;
    this.type = type;
    this.convertible = convertible;

    this.getCarType = function() {
        console.log(`------> ${this}`);
    }
}

const car1 = new car('red', 4, 'sedan', true);
console.log(car1, car1.getCarType());

//2.factory functions
// Syntax: function functionName(parameters) {

function car2(color, doors, type, convertible) {
    return {
        color: color,
        doors: doors,
        type: type,
        convertible: convertible
    }
}

const car5 = car2('black', 4, 'tesla', true);
console.log(car5);


function student(name, grades){
    this.name = name;
    this.grades = grades;

    this.avgGrade = function() {
        let sum = 0;
        for(let grade of grades){
            sum += grade;
        }
        return sum / this.grades.length;
    }
}

const student1 = new student('John', [90, 80, 78]);
console.log(student1.avgGrade());