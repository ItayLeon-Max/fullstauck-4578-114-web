import MusicalInstrument from "./musical-instruments.js";
export default class Drum extends MusicalInstrument {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        console.log(`Drum: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Diameter: ${this.diameter}`);
    }
    makeSound() {
        console.log("Drum sound: boom boom boom");
    }
}
