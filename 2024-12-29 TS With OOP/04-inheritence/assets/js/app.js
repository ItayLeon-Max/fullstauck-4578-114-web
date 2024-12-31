import Cat from "./cat.js";
import Dog from "./dog.js";
const gingo = new Cat('orange', 'mixed', 1000, 3);
gingo.display();
const snoopy = new Dog('white', 'beagle', 500, 1, true);
snoopy.display();
console.log(snoopy.getColor());
