class Book {
    constructor(bookName, author, price, extraction) {
        this.bookName = bookName;
        this.author = author;
        this.price = price;
        this.extraction = extraction;
    }
    getBookName() {
        return this.bookName;
    }
    setBookName(bookName) {
        this.bookName = bookName;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getExtraction() {
        return this.extraction;
    }
    setExtraction(extraction) {
        this.extraction = extraction;
    }
    printInfo() {
        console.log(`Book Name: ${this.bookName}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
        console.log(`Extraction: ${this.extraction}`);
    }
    static getBookAfterVat(price) {
        return price + price * Book.vat;
    }
}
Book.vat = 0.17;
export default Book;
