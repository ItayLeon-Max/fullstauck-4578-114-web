import FoodTruck from "./food-truck.js";
import CoffeeMaker from "./coffee.js";
import HotDogsMaker from "./hotdogs.js";
import ShnitzelMaker from "./shnitzel.js";

const foodTruck = new FoodTruck();

const coffeeMaker: CoffeeMaker = foodTruck;
coffeeMaker.makeEspresso();

const hotDogsMaker: HotDogsMaker = foodTruck;
hotDogsMaker.makeHotDog();

const shnitzelMaker: ShnitzelMaker = foodTruck;
shnitzelMaker.fry(["ketchup", "mustard"]);
