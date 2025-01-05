//implementing the interfaces is done by using the implements keyword and the interfaces that we want to implement
// Syntax: class ClassName implements Interface1, Interface2, Interface3 {}
export default class FoodTruck {
    pan;
    espressoMachine;
    hotdogsMachine;
    fry(addons) {
        console.log("Frying shnitzel with addons: ", addons);
        return {};
    }
    makeEspresso() {
        console.log("Making espresso");
        return {};
    }
    makeLatte() {
        console.log("Making latte");
        return {};
    }
    makeCappuccino() {
        console.log("Making cappuccino");
        return {};
    }
    makeHotDog() {
        console.log("Making hotdog");
        return {};
    }
}
