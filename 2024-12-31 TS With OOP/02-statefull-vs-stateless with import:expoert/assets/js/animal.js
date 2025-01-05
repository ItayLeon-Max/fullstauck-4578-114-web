export default class Animal {
    constructor(numberOfLungs) {
        this.numberOfLungs = numberOfLungs;
    }
    breath() {
        console.log('I am breathing with my ' + this.numberOfLungs + ' lungs');
    }
}
