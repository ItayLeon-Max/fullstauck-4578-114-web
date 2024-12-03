export default class DesktopPC extends Computer {
    constructor(isMouseIncluded, screenSize){
        super(ram, storage, chipModel, price, yearsOfWarranty);
        this.isMouseIncluded = isMouseIncluded;
        this.screenSize = screenSize;
    }

    getIsMouseIncluded(){
        return this.isMouseIncluded;
    }

    setIsMouseIncluded(isMouseIncluded){
        this.isMouseIncluded = isMouseIncluded;
    }

    getScreenSize(){
        return this.screenSize;
    }

    setScreenSize(screenSize){
        this.screenSize = screenSize;
    }

    buyAncillaryEquipment(){
        console.log('You bought a table');
    }

    print(){
        super.print();
        console.log(`Is Mouse Included: ${this.isMouseIncluded}`);
        console.log(`Screen Size: ${this.screenSize}`);
    }
}