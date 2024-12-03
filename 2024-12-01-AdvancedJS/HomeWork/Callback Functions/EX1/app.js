const myName = () => "Itay Leon";
console.log(myName());
const cool = (callback) => callback();
console.log(cool(myName));
