import CoffeeMakerInterFace from "./coffee-maker-interface.js";
import Maker from "./makers-enum.js";
import Voltage from "./voltage.js";

const coffeeMaker: CoffeeMakerInterFace = {
    numberOfPremixedCups: 1,
    numberOfMilkHotters: 1,
    make: Maker.NESPRESSO,
    voltage: Voltage.V240
}

console.log(coffeeMaker); 

