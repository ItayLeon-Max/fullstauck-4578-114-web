import Person from "./person.js";
export default class Student extends Person {
    constructor(name, age, isMarried, grade) {
        super(name, age, isMarried = false);
        this.grade = grade;
    }
    printInfo() {
        super.printInfo();
        console.log(`Your grade is: ${this.grade}`);
    }
}
