import MusicalInstrument from "./musical-instruments.js";
export default class Guitar extends MusicalInstrument {
    constructor(model, manufacturer, color, numberOfStrings) {
        super(model, manufacturer, color);
        this.numberOfStrings = numberOfStrings;
    }
    display() {
        console.log(`Guitar: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Number of strings: ${this.numberOfStrings}`);
    }
    makeSound() {
        console.log("Guitar sound: strum strum strum");
    }
}
