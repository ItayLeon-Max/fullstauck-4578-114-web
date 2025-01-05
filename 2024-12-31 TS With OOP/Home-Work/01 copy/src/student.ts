import Person from './person.js';
export default class Student extends Person {
     public constructor(
            name: string,
            age: number,
            eyeColor: string,
            bodyColor: string,
            height: number,
            weight: number,
            isMarried: boolean,
            hasChildren: boolean,
            children: string[],
            private studentID: number,
            private school: string,
            private grade: number,
            private isGraduating: boolean
        ){
            super(name, age, eyeColor, bodyColor, height, weight, isMarried, hasChildren, children);
        }

        public printInfo(): void {
            console.log(`Name: ${this.name}`);
            console.log(`Age: ${this.age}`);
            console.log(`Student ID: ${this.studentID}`);
            console.log(`School: ${this.school}`);
            console.log(`Grade: ${this.grade}`);
            console.log(`Graduating: ${this.isGraduating}`);
        }
        public sayName(): void {
            console.log(`My name is ${this.name}`);
        }
        public getYearOfBirth(): number {
            return 2025 - this.age;
        }
        public getAgeInTenYears(): number {
            return this.age + 10;
        }

}