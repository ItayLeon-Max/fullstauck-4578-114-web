import Animal from "./animal.js";
export default class Dod extends Animal {
    constructor(color, breed, price, age, isTrained) {
        super(color, breed, price);
        this.age = age;
        this.isTrained = isTrained;
    }
    display() {
        super.display();
        console.log(`Age: ${this.age}`);
        console.log(`Is trained: ${this.isTrained}`);
    }
}
