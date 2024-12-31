import Animal from './animal.js';
export default class Fish extends Animal {
    constructor(color, breed, price, isSaltWater) {
        super(color, breed, price);
        this.isSaltWater = isSaltWater;
    }
    isFreshWater() {
        if (this.isSaltWater)
            console.log("Fish is salt water");
        else
            console.log("Fish is fresh water");
    }
    display() {
        super.display();
        this.isFreshWater();
    }
}
