import Cat from "./cat.js";
export default class SiamiCat extends Cat {
    constructor(color, price, isPureBreed, age) {
        super(color, "siames Cat", price, age);
        this.isPureBreed = isPureBreed;
    }
    isPure() {
        if (this.isPureBreed)
            console.log("Cat is pure breed");
        else
            console.log("Cat is not pure breed");
    }
    display() {
        super.display();
        this.isPure();
    }
}
