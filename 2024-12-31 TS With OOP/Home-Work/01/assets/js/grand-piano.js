import Piano from "./piano.js";
export default class GrandPiano extends Piano {
    constructor(model, manufacturer, color, numberOfKeys, Length) {
        super(model, manufacturer, color, numberOfKeys);
        this.Length = Length;
    }
    display() {
        super.display();
        console.log(`Length: ${this.Length}`);
    }
    makeSound() {
        console.log("Grand Piano sound: plink plink plink");
    }
}
