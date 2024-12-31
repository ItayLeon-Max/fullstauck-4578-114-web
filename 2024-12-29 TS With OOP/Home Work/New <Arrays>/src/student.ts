import Person from "./person.js";

export default class Student extends Person {
    constructor(
        name: string,
        age: number,
        private grade: Array<number>
    ) {
        super(name, age, false);
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Your grade is: ${this.grade}`);
    }
}