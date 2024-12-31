export default class Book {
    private static vat = 0.17;
    constructor(
        private bookName: string,
        private author: string,
        private price: number,
        private extraction: string
    ){}

    getBookName(): string {
        return this.bookName;
    }

    setBookName(bookName: string): void {
        this.bookName = bookName;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getExtraction(): string {
        return this.extraction;
    }

    setExtraction(extraction: string): void {
        this.extraction = extraction;
    }

    printInfo(): void {
        console.log(`Book Name: ${this.bookName}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
        console.log(`Extraction: ${this.extraction}`);
    }

    public static getBookAfterVat(price: number): number {
        return price + price * Book.vat;
    }
}