import Animal from "./animal.js"
import Cat from "./cat.js"
import Dog from "./dog.js"

const dog: Dog = {
    type: "dog",
    name: "Buddy",
    breed: "Golden Retriever",
    weight: 30
}

//with not generic function
function clone(dog: Dog): Dog {
    return { ...dog } // This is a shallow copy of the dog object using the spread operator (...)
}

//with generic function
function cloneWithGeneric<T extends Animal>(obj: T): T {
    return { ...obj }
}

const aDuplicateDog = {...dog} // This is a shallow copy of the dog object using the spread operator (...)

console.log(dog)
console.log(aDuplicateDog)
console.log(clone(dog))

const cat: Cat = {
    type: "cat",
    numberOfSouls: 0,
    name: "",
    weight: 0
}

console.log(cat)
console.log(cloneWithGeneric(cat))

const stamObject = clone({
    type: "dog",
    name: "Stam",
    breed: "Golden Retriever",
    weight: 30  
})

console.log(stamObject)