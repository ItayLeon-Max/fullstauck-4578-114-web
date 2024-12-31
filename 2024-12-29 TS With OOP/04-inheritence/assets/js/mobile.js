class Mobile {
    constructor(type, inches, price, cameraNumbers, model = Math.floor(Math.random() * 1000) + 1, battery = Math.floor(Math.random() * 1000000) + 1, pinCode = Math.floor(Math.random() * 10000) + 1) {
        this.type = type;
        this.inches = inches;
        this.price = price;
        this.cameraNumbers = cameraNumbers;
        this.model = model;
        this.battery = battery;
        this.pinCode = pinCode;
        Mobile.totalMobilesCreated++;
    }
    get getType() {
        return this.type;
    }
    set setType(type) {
        this.type = type;
    }
    get getInches() {
        return this.inches;
    }
    set setInches(inches) {
        this.inches = inches;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
    get getCameraNumbers() {
        return this.cameraNumbers;
    }
    set setCameraNumbers(cameraNumbers) {
        this.cameraNumbers = cameraNumbers;
    }
    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }
    get getBattery() {
        return this.battery;
    }
    set setBattery(battery) {
        this.battery = battery;
    }
    get getPinCode() {
        return this.pinCode;
    }
    set setPinCode(pinCode) {
        this.pinCode = pinCode;
    }
    // Methods
    turnOff() {
        console.log(`${this.getType} is turned off`);
    }
    turnOn() {
        console.log(`${this.getType} is turned on`);
    }
    takePicture() {
        console.log(`${this.getType} is taking a picture`);
    }
    printInfo() {
        console.log(`Model: ${this.getModel}, Battery: ${this.getBattery}, 
            Type: ${this.getType}, Inches: ${this.getInches}, 
            Price: ${this.getPrice}, Camera Numbers: ${this.getCameraNumbers}`);
    }
    adBuy() {
        console.log(`You bought ${this.getType}`);
    }
    displayFullPricePhoneAfterVat() {
        console.log(`Price after VAT: ${this.price * (1 + Mobile.vat)}`);
    }
    static getTotalMobilesCreated() {
        return `Total mobiles is: ${Mobile.totalMobilesCreated}`;
    }
}
//members static:
Mobile.vat = 0.18;
Mobile.totalMobilesCreated = 0;
export default Mobile;
