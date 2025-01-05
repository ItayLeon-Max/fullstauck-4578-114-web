import Person from "./person.js";
export default class Employee extends Person {
    salaries;
    constructor(name, birthdate, salaries) {
        super(name, birthdate);
        this.salaries = salaries;
        this.salaries = salaries;
    }
    calcRevenue() {
        return this.salaries.reduce((acc, curr) => acc + curr, 0) * (-1);
    }
}
