import Client from "./client.js";
import Employee from "./employee.js";
import Person from "./person.js";
import Supplier from "./suplier.js";

const client = new Client("Itay Leon", new Date(), [90, 130, 15000]);
client.printName();

const employee = new Employee("Eti", new Date(), [6000, 4676, 150]);
employee.printName();

const supplier = new Supplier("Fredi", new Date(), [90, 130, 15000]);
supplier.printName();

const totalRevenue = client.calcRevenue() + employee.calcRevenue() + supplier.calcRevenue();
console.log(`total revenue: ${totalRevenue}`);

function sendNewYearGreetings(person: Person): void {
    console.log(`Happy new year ${person.getName()}`);
}

sendNewYearGreetings(client);

