// primitive types
const age = 25;
const messages = "Itay";
const isActive = true;
// arrays
const ages = [25, 26, 27];
const names = ["Itay", "Amit", "Yael"];
const isActives = [true, false, true];
// objects
const student = {
    age: 25,
    name: "Itay",
    isActive: true
};
const student2 = {
    age: 25,
    name: "Itay",
    isActive: true
};
student2.isActive = false;
// special types
let something = "Itay"; //praically can be anything
something = 25;
console.log(typeof something);
let myUndefine;
// myVar = 2;
let myNull;
let myWhtever; // a little bit better than any 
//arrays of objects
const students = [
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
const animals = [
    {
        type: "dog",
        eat: function () {
            console.log("I'm eating");
        }
    }
];
