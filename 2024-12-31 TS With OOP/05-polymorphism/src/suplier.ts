import Person from "./person.js";

export default class Supplier extends Person {
    constructor(
        name: string,
        birthdate: Date,
        private delivers: Array<number>
    ){
        super(name, birthdate);
        this.delivers = delivers;
    }

    public calcRevenue(): number {
        return this.delivers.reduce((acc, curr) => acc + curr, 0) * (-1);
    }
}