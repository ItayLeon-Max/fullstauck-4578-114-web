import Guitar from "./guitar.js";
import Piano from "./piano.js";
import Drum from "./drum.js";
import GrandPiano from "./grand-piano.js";

const guitar = new Guitar("Fender Stratocaster", "Fender", "Sunburst", 6);
const piano = new Piano("Upright", "Steinway", "Black", 88);
const drum = new Drum("Kick Drum", "Yamaha", "Black", 22);
const grandPiano = new GrandPiano("Concert Grand", "Steinway", "Black", 88, 8);

guitar.display();
guitar.makeSound();
console.log("--------------------");

piano.display();
piano.makeSound();
console.log("--------------------");

drum.display();
drum.makeSound();
console.log("--------------------");

grandPiano.display();
grandPiano.makeSound();
