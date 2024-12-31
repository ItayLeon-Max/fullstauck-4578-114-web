import Cat from "./cat.js";
import Dog from "./dog.js";
import Fish from "./fish.js";
import SiamiCat from "./siamiCat.js";

const gingo = new Cat('orange', 'mixed', 1000, 3);
gingo.display();

const snoopy = new Dog('white', 'beagle', 500, 1, true);
snoopy.display();

console.log(snoopy.getColor());

const fish1 = new Fish('red', 'goldfish', 50, false);
fish1.display();

const siam = new SiamiCat('brown', 1500, true, 2);
siam.display();

console.log(Cat.getCount());