import Mobile from "./mobile.js";

const iPhone = new Mobile("iPhone 16 Pro Max", 6.9, 1099, 3);
iPhone.turnOn();
iPhone.takePicture();
iPhone.turnOff();
iPhone.printInfo();
iPhone.adBuy();
console.log(iPhone);
console.log("-------------------------------------------------");
iPhone.displayFullPricePhoneAfterVat();


const Samsung = new Mobile("Samsung Galaxy S24 Ultra", 6.8, 1199, 4);
Samsung.turnOn();
Samsung.takePicture();
Samsung.turnOff();
Samsung.printInfo();
Samsung.adBuy();
console.log(Samsung);
console.log("-------------------------------------------------");
Samsung.displayFullPricePhoneAfterVat();

console.log(Mobile.getTotalMobilesCreated());




