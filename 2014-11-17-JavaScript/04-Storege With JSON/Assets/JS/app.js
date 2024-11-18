//storage with JSON on local storage
//JSON.stringify() method is used to convert an object into a string.

const shapingCart = [
    {
        id: 1,
        name: 'Apple Laptop',
        price: 1500,
    },
    {
        id: 2,
        name: 'Samsung Phone',
        price: 1000,
    },
    {
        id: 3,
        name: 'Dell Laptop',
        price: 1200,
    },
    {
        id: 4,
        name: 'HP Laptop',
        price: 1300,
    },
    {
        id: 5,
        name: 'Lenovo Laptop',
        price: 1400,
    },
];

localStorage.setItem('products', JSON.stringify(shapingCart));
//Syntax for JSON.stringify() method
//JSON.stringify(value[, replacer[, space]])

//retrieve data from local storage and convert it back to an object using JSON.parse() method.
const info = JSON.parse(localStorage.getItem('products'));
console.log(info);