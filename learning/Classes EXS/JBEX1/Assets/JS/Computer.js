export default class Computer {
    constructor(ram, storage, chipModel, price, yearsOfWarranty){
        this.ram = ram;
        this.storage = storage;
        this.chipModel = chipModel;
        this.price = price;
        this.yearsOfWarranty = yearsOfWarranty;
    }

    getRam(){
        return this.ram;
    }

    setRam(ram){
        this.ram = ram;
    }

    getStorage(){
        return this.storage;
    }

    setStorage(storage){
        this.storage = storage;
    }

    getChipModel(){
        return this.chipModel;
    }

    setChipModel(chipModel){
        this.chipModel = chipModel;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }

    getYearsOfWarranty(){
        return this.yearsOfWarranty;
    }

    setYearsOfWarranty(yearsOfWarranty){
        this.yearsOfWarranty = yearsOfWarranty;
    }

    buyAncillaryEquipment(){
        console.log('You bought a headset');
    }

    print(){
        console.log(`RAM: ${this.ram}`);
        console.log(`Storage: ${this.storage}`);
        console.log(`Chip Model: ${this.chipModel}`);
        console.log(`Price: ${this.price}`);
        console.log(`Years of Warranty: ${this.yearsOfWarranty}`);
    }
}