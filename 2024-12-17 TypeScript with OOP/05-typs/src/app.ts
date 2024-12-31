// primitive types
const age: number = 25;
const messages: string = "Itay";
const isActive: boolean = true;

// arrays
const ages: number[] = [25, 26, 27];
const names: string[] = ["Itay", "Amit", "Yael"];
const isActives: boolean[] = [true, false, true];

// objects

const student: { name: string, age: number, isActive: boolean } = {
    age: 25,
    name: "Itay",
    isActive: true
};

type Person = {
    name: string,
    age: number,
    isActive: boolean
}

const student2: Person = {
    age: 25,
    name: "Itay",
    isActive: true
}
student2.isActive = false;

// special types
let something: any = "Itay"; //praically can be anything
something = 25;
console.log(typeof something);

let myUndefine: undefined;
// myVar = 2;

let myNull: null;

let myWhtever: unknown; // a little bit better than any 

//arrays of objects
const students: Person[] = [
    {
        age: 25,
        name: "Itay",
        isActive: true
    },
    {
        age: 26,
        name: "Amit",
        isActive: false
    }
];

const animals: {type: string, eat: Function}[] = [
    {
        type: "dog",
        eat: function() {
            console.log("I'm eating");
        }
    }
];