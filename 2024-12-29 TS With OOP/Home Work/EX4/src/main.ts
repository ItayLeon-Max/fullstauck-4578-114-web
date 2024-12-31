import Car from "./car.js";
import RaceCar from "./raceCar.js";

let car = new Car(3245678, "Audi", "Audi", "Black", 2000);
car.display();

console.log("--------------------------------------------------");

let raceCar = new RaceCar(45667465, "BMW", "BMW", "White", 3000, 300, 5);
raceCar.display();