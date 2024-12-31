export default class Car {
    constructor(carNumber, model, manufacturer, color, EngineVolume) {
        this.carNumber = carNumber;
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
        this.EngineVolume = EngineVolume;
        this.carModel = model;
        this.carManufacturer = manufacturer;
    }
    display() {
        console.log("--------------------------------------------------");
        console.log("Car Details:");
        console.log("--------------------------------------------------");
        console.log(`Car Number: ${this.carNumber}`);
        console.log(`Car Model: ${this.model}`);
        console.log(`Car Manufacturer: ${this.manufacturer}`);
        console.log(`Car Color: ${this.color}`);
        console.log(`Car Engine Volume: ${this.EngineVolume}`);
    }
}
