export default class Car {
    // The constructor method is a special method for creating and initializing an object created with a class.
    constructor(make, model, year, color, inStock) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.inStock = inStock;
    }
    // A method is a function that is a property of an object.
    display() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model} in ${this.color}.`);
    }
    drive() {
        document.getElementById('drive').innerHTML = `This ${this.make} ${this.model} is driving.`;
    }
}
