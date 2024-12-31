import Animal from './animal.js';
export default class Fish extends Animal {
    public constructor(
        color: string,
        breed: string,
        price: number,
        private isSaltWater: boolean
    ){
        super(color, breed, price);
    }

    isFreshWater(): void{
        if(this.isSaltWater) console.log("Fish is salt water");
        else console.log("Fish is fresh water");
    }

    public display(){
        super.display();
        this.isFreshWater();
    }
}