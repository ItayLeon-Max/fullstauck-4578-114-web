import Piano from "./piano.js";

export default class GrandPiano extends Piano {
    public constructor(
        model: string,
        manufacturer: string,
        color: string,
        numberOfKeys: number,
        private Length: number
    ){
        super(model, manufacturer, color, numberOfKeys);
    }

    display(): void {
        super.display();
        console.log(`Length: ${this.Length}`);
    }

    makeSound(): void {
        console.log("Grand Piano sound: plink plink plink");
    }
}