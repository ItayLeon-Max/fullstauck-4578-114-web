export default class Car {
    readonly carModel: String;
    readonly carManufacturer: String
    constructor(
        private carNumber: Number,
        private model: String,
        private manufacturer: String,
        private color: String,
        private EngineVolume: Number
    ){
        this.carModel = model;
        this.carManufacturer = manufacturer;
    }

    public display(){
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