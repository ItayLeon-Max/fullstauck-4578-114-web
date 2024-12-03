export default class Leptop extends Computer {  
    constructor(hoursOfBattery, batteryPercentage, isTouchScreen){
        super(ram, storage, chipModel, price, yearsOfWarranty);
        this.hoursOfBattery = hoursOfBattery;
        this.batteryPercentage = batteryPercentage;
        this.isTouchScreen = isTouchScreen;
    }

    getHoursOfBattery(){
        return this.hoursOfBattery;
    }

    setHoursOfBattery(hoursOfBattery){
        this.hoursOfBattery = hoursOfBattery;
    }

    getBatteryPercentage(){
        return this.batteryPercentage;
    }

    setBatteryPercentage(batteryPercentage){
        this.batteryPercentage = batteryPercentage;
    }

    getIsTouchScreen(){
        return this.isTouchScreen;
    }

    setIsTouchScreen(isTouchScreen){
        this.isTouchScreen = isTouchScreen;
    }

    buyAnother(basicFunction){
        console.log('You bought a bag');
        basicFunction();
    }

    isBatteryFull(){
        if(this.batteryPercentage === 100)console.log('Battery is full');
        else console.log('Battery is not full');
    }

    print(){
        super.print();
        console.log(`Hours of Battery: ${this.hoursOfBattery}`);
        console.log(`Battery Percentage: ${this.batteryPercentage}`);
        console.log(`Is Touch Screen: ${this.isTouchScreen}`);
    }
}