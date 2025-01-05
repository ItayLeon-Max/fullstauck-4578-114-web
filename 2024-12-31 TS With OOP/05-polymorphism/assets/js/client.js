import Person from "./person.js";
export default class Client extends Person {
    orders;
    constructor(name, birthdate, orders) {
        super(name, birthdate);
        this.orders = orders;
        this.orders = orders;
    }
    calcRevenue() {
        return this.orders.reduce((acc, curr) => acc + curr, 0);
    }
}
