import Person from "./person.js";
export default class Supplier extends Person {
    delivers;
    constructor(name, birthdate, delivers) {
        super(name, birthdate);
        this.delivers = delivers;
        this.delivers = delivers;
    }
    calcRevenue() {
        return this.delivers.reduce((acc, curr) => acc + curr, 0) * (-1);
    }
}
