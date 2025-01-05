import MusicalInstrument from "./musical-instruments.js";

export default class Guitar extends MusicalInstrument {
    public constructor(
        model: string,
        manufacturer: string,
        color: string,
        private numberOfStrings: number
    ){
        super(model, manufacturer, color);
    }

    display(): void {
        console.log(`Guitar: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Number of strings: ${this.numberOfStrings}`);
    }
    makeSound(): void {
        console.log("Guitar sound: strum strum strum");
    }
    
}