import Animal from "./animal.js";
export default class Cat extends Animal {
    public constructor(
        color: string,
        breed: string,
        price: number,
        private readonly age: number
    ){
        super(color, breed, price);
    }

    public display(){
        super.display();
        console.log(`Age: ${this.age}`);
    }
}