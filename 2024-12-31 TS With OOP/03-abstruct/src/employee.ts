import Person from "./person.js";

export default class Employee extends Person {
    constructor(
        name: string,
        birthdate: Date,
        private salaries: Array<number>
    ){
        super(name, birthdate);
        this.salaries = salaries;
    }

    public calcRevenue(): number {
        return this.salaries.reduce((acc, curr) => acc + curr, 0) * (-1);
    }
}