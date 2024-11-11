const booksArr = [
    {
        code: 5474789,
        bookName: "The Alchemist",
        bookAuthor: "Paulo Coelho",
        bookPrice: 100
    },
    {
        code: 5474790,
        bookName: "The Monk Who Sold His Ferrari",
        bookAuthor: "Robin Sharma",
        bookPrice: 200
    },
    {
        code: 5474791,
        bookName: "The Power of Now",
        bookAuthor: "Eckhart Tolle",
        bookPrice: 150
    },
    {
        code: 5474792,
        bookName: "The Secret",
        bookAuthor: "Rhonda Byrne",
        bookPrice: 250
    },
    {
        code: 5474793,
        bookName: "The 7 Habits of Highly Effective People",
        bookAuthor: "Stephen R. Covey",
        bookPrice: 300
    },
];
let bookArrToJSON = JSON.stringify(booksArr);
alert(bookArrToJSON);

item = JSON.parse(bookArrToJSON);    
console.log(item);

for(books in item){
    document.write(`Book ID: ${item[books].code} <br>`);
    document.write(`Book Name: ${item[books].bookName} <br>`);
    document.write(`Book Author: ${item[books].bookAuthor} <br>`);
    document.write(`Book Price: ${item[books].bookPrice} <br>`);
    document.write("---------------------------------<br>");

}