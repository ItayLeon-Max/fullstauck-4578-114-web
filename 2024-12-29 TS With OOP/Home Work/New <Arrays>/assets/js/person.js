export default class Person {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    printInfo() {
        console.log(`Your name is: ${this.name}`);
        console.log(`Your age is: ${this.age}`);
        console.log(`Are you married: ${this.isMarried}`);
    }
    sumOfAge() {
        return this.age++;
    }
}
