import MusicalInstrument from "./musical-instruments.js";

export default class Piano extends MusicalInstrument {

    public constructor(
        model: string,
        manufacturer: string,
        color: string,
        private numberOfKeys: number
    ){
        super(model, manufacturer, color);
    }

    display(): void {
        console.log(`Piano: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Number of keys: ${this.numberOfKeys}`);
    }
    makeSound(): void {
        console.log("Piano sound: plink plink plink");
    }
    
}