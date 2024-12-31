export default class Animal {
    constructor(color, breed, price) {
        this.color = color;
        this.breed = breed;
        this.price = price;
    }
    display() {
        console.log(`Color: ${this.color}`);
        console.log(`Breed: ${this.breed}`);
        console.log(`Price: ${this.price}`);
    }
    getBreed() {
        return this.breed;
    }
    getColor() {
        return this.color;
    }
    getPrice() {
        return this.price;
    }
}
