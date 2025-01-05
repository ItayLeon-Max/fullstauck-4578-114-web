import MusicalInstrument from "./musical-instruments.js";

export default class Drum extends MusicalInstrument {

    public constructor(
        model: string,
        manufacturer: string,
        color: string,
        private diameter: number
    ){
        super(model, manufacturer, color);
    }



    display(): void {
        console.log(`Drum: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Color: ${this.color}`);
        console.log(`Diameter: ${this.diameter}`);
    }
    makeSound(): void {
        console.log("Drum sound: boom boom boom");
    }
    
}