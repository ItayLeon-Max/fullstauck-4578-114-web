const myObj = { a: 1, b: { c: 3, d: 4 } };
const {a, b: {d}} = myObj;
console.log(a, d);