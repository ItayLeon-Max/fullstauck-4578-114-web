export default class Animal {

    public constructor(
        public numberOfLungs: number
    ){}
    breath(): void {
        console.log('I am breathing with my ' + this.numberOfLungs + ' lungs');
    }
}