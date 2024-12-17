"use strict";

(() => {
  //SET object
const mySet = new Set();

mySet.add("Itay");
mySet.add("Yaniv");
mySet.add("Tamir");

console.log(mySet);
const myNonUniqueArray = [10,10,10,20,30];
const myUniqueSet = new Set([10,10,10,20,30]);
const myOtherArray = [...myUniqueSet];  //spread operator
console.log(myUniqueSet);
console.log(myOtherArray);
})();

