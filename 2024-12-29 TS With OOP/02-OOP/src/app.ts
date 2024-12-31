import Car from './car.js';

const car = new Car('Toyota', 'Camry', 2020, 'blue', true);
car.display();
car.drive();

const car2 = new Car('Honda', 'Accord', 2021, 'red', false);
car2.display();
car2.drive();