import Animal from "./animal.js";
export default class Cat extends Animal {
    constructor(color, breed, price, age) {
        super(color, breed, price);
        this.age = age;
    }
    display() {
        super.display();
        console.log(`Age: ${this.age}`);
    }
}
