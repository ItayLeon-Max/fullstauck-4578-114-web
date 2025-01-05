import Person from "./person.js";

export default class Client extends Person {
    constructor(
        name: string,
        birthdate: Date,
        private orders: Array<number>
    ){
        super(name, birthdate);
        this.orders = orders;
    }
    public calcRevenue(): number {
        return this.orders.reduce((acc, curr) => acc + curr, 0);
    }
}