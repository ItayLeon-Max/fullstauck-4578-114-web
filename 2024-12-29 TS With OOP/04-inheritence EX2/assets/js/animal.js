class Animal {
    constructor(color, breed, price) {
        this.color = color;
        this.breed = breed;
        this.price = price;
        Animal.countTotalAnimals++;
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
    static getCount() {
        return Animal.countTotalAnimals;
    }
}
Animal.countTotalAnimals = 0;
export default Animal;
