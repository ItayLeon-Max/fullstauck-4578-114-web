//typeOf function:
// The typeof operator returns a string indicating the type of the unevaluated operand.
// Syntax: typeof operand
// operand: An expression representing the object or primitive whose type is to be returned.
// The typeof operator returns a string indicating the type of the unevaluated operand.


const num = 345;
console.log(`The type of is ${typeof num}`);

const str = "Hello";
console.log(`The type of is ${typeof str}`);

const bool = true;
console.log(`The type of is ${typeof bool}`);

const obj = { name: "John" };
console.log(`The type of is ${typeof obj}`);

const arr = [1, 2, 3];
console.log(`The type of is ${typeof arr}`);

console.log(`the type os alert is ${typeof alert}`);

const bigNum = BigInt(1234567890);
console.log(`The type of is ${typeof bigNum}`);