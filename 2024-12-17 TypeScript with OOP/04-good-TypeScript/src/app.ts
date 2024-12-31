//bad 1:
let x: number = 1;
let y = 2;

// x='1'; // error

let z: string = 'hello ';
let a: string = 'world';

let result: string = z + a;
console.log(result);

console.log("bla");

console.log(x+y);


//bad 2:

function sum(a: number, b: number): number {
    return a+b;
}

// sum = 4;

console.log(sum(1,2));

function printHello(): void {
    console.log('Hello');
}

printHello();

