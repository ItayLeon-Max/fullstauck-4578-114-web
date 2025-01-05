import Person from './person.js';
export default class Student extends Person {
    constructor(name, age, eyeColor, bodyColor, height, weight, isMarried, hasChildren, children, studentID, school, grade, isGraduating) {
        super(name, age, eyeColor, bodyColor, height, weight, isMarried, hasChildren, children);
        this.studentID = studentID;
        this.school = school;
        this.grade = grade;
        this.isGraduating = isGraduating;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`School: ${this.school}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Graduating: ${this.isGraduating}`);
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    getYearOfBirth() {
        return 2025 - this.age;
    }
    getAgeInTenYears() {
        return this.age + 10;
    }
}
