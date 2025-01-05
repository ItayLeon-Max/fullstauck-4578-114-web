export default abstract class Person{
    public constructor(
        private name: string,
        private birthdate: Date
    ){}

    public printName(): void {
        console.log(this.name);
    }

    public abstract calcRevenue(): number ;
}