import Car from "./car.js";
export default class RaceCar extends Car {
    constructor(carNumber, model, manufacturer, color, EngineVolume, topSpeed, numberOfRaces) {
        super(carNumber, model, manufacturer, color, EngineVolume);
        this.topSpeed = topSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    display() {
        super.display();
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Number of races: ${this.numberOfRaces}`);
    }
}
