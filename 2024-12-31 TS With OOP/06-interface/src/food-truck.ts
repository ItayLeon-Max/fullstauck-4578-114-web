import CoffeeMaker from "./coffee.js";
import HotDogsMaker from "./hotdogs.js";
import ShnitzelMaker from "./shnitzel.js";

//implementing the interfaces is done by using the implements keyword and the interfaces that we want to implement
// Syntax: class ClassName implements Interface1, Interface2, Interface3 {}
export default class FoodTruck implements HotDogsMaker, CoffeeMaker, ShnitzelMaker {
    pan: Object;
    espressoMachine: Object;
    hotdogsMachine: Object;

    fry(addons: Object[]): Object {
        console.log("Frying shnitzel with addons: ", addons);
        return {};
    }

    makeEspresso(): Object {
        console.log("Making espresso");
        return {};
    }
    makeLatte(): Object {
        console.log("Making latte");
        return {};
       
    }
    makeCappuccino(): Object {
        console.log("Making cappuccino");
        return {};
    }

    makeHotDog(): Object {
        console.log("Making hotdog");   
        return {};
    }
   


}