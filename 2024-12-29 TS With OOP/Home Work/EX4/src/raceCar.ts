import Car from "./car.js";

export default class RaceCar extends Car {
    constructor(
        carNumber: Number,
        model: String,
        manufacturer: String,
        color: String,
        EngineVolume: Number,
        private topSpeed: Number,
        private numberOfRaces: Number
    ){
        super(carNumber, model, manufacturer, color, EngineVolume);
    }

    display(){
        super.display();
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Number of races: ${this.numberOfRaces}`);
    }
}