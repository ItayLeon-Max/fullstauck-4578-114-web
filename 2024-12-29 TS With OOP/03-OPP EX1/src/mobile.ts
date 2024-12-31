export default class Mobile {
    //members static:
    private static readonly vat = 0.18;
    private static totalMobilesCreated = 0;

    public constructor(
        private type:string,
        private inches:number,
        private price:number,
        private cameraNumbers:Number,
        private model:Number = Math.floor(Math.random() * 1000) + 1,
        private battery:Number = Math.floor(Math.random() * 1000000) + 1,
        private pinCode:Number = Math.floor(Math.random() * 10000) + 1
    ) {
        Mobile.totalMobilesCreated++;
    }

    get getType(){
        return this.type;
    }

    set setType(type:string){
        this.type = type;
    }

    get getInches(){
        return this.inches;
    }

    set setInches(inches:number){
        this.inches = inches;
    }

    get getPrice(){
        return this.price;
    }

    set setPrice(price:number){
        this.price = price;
    }

    get getCameraNumbers(){
        return this.cameraNumbers;
    }

    set setCameraNumbers(cameraNumbers:Number){
        this.cameraNumbers = cameraNumbers;
    }

    get getModel(){
        return this.model;
    }

    set setModel(model:Number){
        this.model = model;
    }

    get getBattery(){
        return this.battery;
    }

    set setBattery(battery:Number){
        this.battery = battery;
    }

    get getPinCode(){
        return this.pinCode;
    }

    set setPinCode(pinCode:Number){
        this.pinCode = pinCode;
    }

    // Methods

    public turnOff(){
        console.log(`${this.getType} is turned off`);
    }

    public turnOn(){
        console.log(`${this.getType} is turned on`);
    }

    public takePicture(){
        console.log(`${this.getType} is taking a picture`);
    }
    
    public printInfo(){
        console.log(`Model: ${this.getModel}, Battery: ${this.getBattery}, 
            Type: ${this.getType}, Inches: ${this.getInches}, 
            Price: ${this.getPrice}, Camera Numbers: ${this.getCameraNumbers}`);
    }

    public adBuy(){
        console.log(`You bought ${this.getType}`);
    }
    
    public displayFullPricePhoneAfterVat(){
        console.log(`Price after VAT: ${this.price * (1 + Mobile.vat)}`);
    }

    public static getTotalMobilesCreated(){
        return `Total mobiles is: ${Mobile.totalMobilesCreated}`;
    }
}