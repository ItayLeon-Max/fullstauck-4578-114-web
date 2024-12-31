import Book from "./book.js";

const book1 = new Book("The Alchemist", "Paulo Coelho", 67, "HarperCollins");
book1.printInfo();
console.log(`The price after VAT is: ${Book.getBookAfterVat(book1.getPrice())}`);
console.log("--------------------------------------------------");

const book2 = new Book("The Da Vinci Code", "Dan Brown", 50, "Doubleday");
book2.printInfo();
console.log(`The price after VAT is: ${Book.getBookAfterVat(book2.getPrice())}`);
console.log("--------------------------------------------------");

const book3 = new Book("The Godfather", "Mario Puzo", 135, "G.P. Putnam's Sons");
book3.printInfo();
console.log(`The price after VAT is: ${Book.getBookAfterVat(book3.getPrice())}`);