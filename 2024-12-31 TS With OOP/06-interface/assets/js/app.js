import FoodTruck from "./food-truck.js";
const foodTruck = new FoodTruck();
const coffeeMaker = foodTruck;
coffeeMaker.makeEspresso();
const hotDogsMaker = foodTruck;
hotDogsMaker.makeHotDog();
const shnitzelMaker = foodTruck;
shnitzelMaker.fry(["ketchup", "mustard"]);
