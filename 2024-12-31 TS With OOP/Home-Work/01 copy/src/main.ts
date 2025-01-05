// type person = {
//     //method 
//     name: string;
//     age: number;
//     eyeColor: string;
//     bodyColor: string;
//     height: number;
//     weight: number;
//     isMarried: boolean;
//     hasChildren: boolean;
//     children: string[];

//     //function
//     sayHi: () => void;
// }

// const person1: person = {
//     name: 'John Doe',
//     age: 30,
//     eyeColor: 'blue',
//     bodyColor: 'white',
//     height: 180,
//     weight: 80,
//     isMarried: true,
//     hasChildren: true,
//     children: ['Alice', 'Bob'],
//     sayHi: function (): void {
//         console.log('Hi');
//     }
// }

// const person2: person = {
//     name: 'Jane Doe',
//     age: 28,
//     eyeColor: 'brown',
//     bodyColor: 'black',
//     height: 160,
//     weight: 60,
//     isMarried: true,
//     hasChildren: false,
//     children: [],
//     sayHi: function (): void {
//         console.log('Hi');
//     }
// }

// function sayHi(): void{
//     console.log('Hi');
// }

// function plusNumber(a:number, b:number): number{
//     return a + b;
// }

/*
Syntax:
class className {
    //class body
}
 */

// class Person {
//     // name: string;
//     // age: number;
//     // eyeColor: string;
//     // bodyColor: string;
//     // height: number;
//     // weight: number;
//     // isMarried: boolean;
//     // hasChildren: boolean;
//     // children: string[];
//     // function cons(name: string, age: number, eyeColor: string, bodyColor: string, height: number, weight: number, isMarried: boolean, hasChildren: boolean) {
//     //     this.name = name;
//     //     this.age = age;
//     //     this.eyeColor = eyeColor;
//     //     this.bodyColor = bodyColor;
//     //     this.height = height;
//     //     this.weight = weight;
//     //     this.isMarried = isMarried;
//     //     this.hasChildren = hasChildren;
//     // }

//     public constructor(
//         //properties/types
//         //public / private / protected
//         public name: string,
//         public age: number,
//         public eyeColor: string,
//         public bodyColor: string,
//         public height: number,
//         public weight: number,
//         public isMarried: boolean,
//         public hasChildren: boolean,
//         public children: string[]
//     ){}
// }

// type person = {
//     //types 
//     name: string;
//     age: number;
//     eyeColor: string;
//     bodyColor: string;
//     height: number;
//     weight: number;
//     isMarried: boolean;
//     hasChildren: boolean;
//     children: string[];

//     //methods
//     sayHi: () => void;
// }

import Person from "./person.js";
import Student from "./student.js";

// const person1 = new Person('Itay Leon', 25, 'brown', 'white', 166, 80, false, false, ['Alice', 'Bob']);
// console.log(person1);
// person1.printInfo();
// person1.sayName();
// console.log(`Year of Birth: ${person1.getYearOfBirth()}`);

console.log('---------------------------------');

// const student1 = new Student('osher', 30, 1, 'JB', 97, true);
// student1.printInfo();
// student1.sayName();



// const person2 = new Person('Jane Doe', 28, 'brown', 'black', 160, 60, true, false, []);
// console.log(person2);