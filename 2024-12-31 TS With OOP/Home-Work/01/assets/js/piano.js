import MusicalInstrument from "./musical-instruments.js";
export default class Piano extends MusicalInstrument {
    constructor(model, manufacturer, color, numberOfKeys) {
        super(model, manufacturer, color);
        this.numberOfKeys = numberOfKeys;
    }
    display() {
        console.log(`Piano: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Number of keys: ${this.numberOfKeys}`);
    }
    makeSound() {
        console.log("Piano sound: plink plink plink");
    }
}
