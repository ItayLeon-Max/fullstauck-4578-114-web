export default class Person {
    constructor(
        private name: string,
        private age: number,
        private isMarried: boolean
    ){}

    printInfo():void {
        console.log(`Your name is: ${this.name}`);
        console.log(`Your age is: ${this.age}`);
        console.log(`Are you married: ${this.isMarried}`);
    }

    sumOfAge():number {
        return this.age++;
    }
}