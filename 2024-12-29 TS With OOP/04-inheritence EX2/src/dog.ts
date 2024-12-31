import Animal from "./animal.js";

export default class Dod extends Animal {
    public constructor(
        color: string,
        breed: string,
        price: number,
        private readonly age: number,
        private readonly isTrained: boolean
    ){
        super(color, breed, price);
    }

    display(){
        super.display();
        console.log(`Age: ${this.age}`);
        console.log(`Is trained: ${this.isTrained}`);
    }
}