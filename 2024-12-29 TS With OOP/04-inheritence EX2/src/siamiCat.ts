import Cat from "./cat.js";

export default class SiamiCat extends Cat {
    public constructor(
        color: string,
        price: number,
        private isPureBreed: boolean,
        age: number
    ){
        super(color, "siames Cat", price, age);
    }

    isPure(): void{
        if(this.isPureBreed)console.log("Cat is pure breed");
        else console.log("Cat is not pure breed");
    }

    public display(){
        super.display();
        this.isPure();
    }
}