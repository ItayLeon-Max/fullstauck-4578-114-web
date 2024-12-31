//bad 1:
var x = 1;
var y = 2;
// x='1'; // error
var z = 'hello ';
var a = 'world';
var result = z + a;
console.log(result);
console.log("bla");
console.log(x + y);
//bad 2:
function sum(a, b) {
    return a + b;
}
// sum = 4;
console.log(sum(1, 2));
function printHello() {
    console.log('Hello');
}
printHello();
