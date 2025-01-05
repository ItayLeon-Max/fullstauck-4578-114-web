export default abstract class Person {
    //properties/types: private / protected / public
    public constructor(
        protected name: string,
        protected age: number,
        protected eyeColor: string,
        protected bodyColor: string,
        protected height: number,
        protected weight: number,
        protected isMarried: boolean,
        protected hasChildren: boolean,
        protected children: string[]
    ){}

   //getter and setter is a method that gets and sets the value of a property in a class.

//    public printInfo(): void {
//          console.log(`Name: ${this.name}`);
//          console.log(`Age: ${this.age}`);
//          console.log(`Eye Color: ${this.eyeColor}`);
//          console.log(`Body Color: ${this.bodyColor}`);
//          console.log(`Height: ${this.height}`);
//          console.log(`Weight: ${this.weight}`);
//          console.log(`Married: ${this.isMarried}`);
//          console.log(`Has Children: ${this.hasChildren}`);
//          console.log(`Children: ${this.children}`);
//    }

//    public sayName(): void{
//          console.log(`My name is ${this.name}`);
//    }

//    public getYearOfBirth(): number{
//          return 2025 - this.age;
//    }

//    public getAgeInTenYears(): number{
//             return this.age + 10;
//     }

public abstract printInfo(): void;
public abstract sayName(): void;
public abstract getYearOfBirth(): number;
public abstract getAgeInTenYears(): number;

}

