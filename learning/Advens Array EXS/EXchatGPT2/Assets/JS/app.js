const products = [
  { name: 'Laptop', price: 1500, category: 'Electronics', inStock: true },
  { name: 'Smartphone', price: 800, category: 'Electronics', inStock: false },
  { name: 'Tablet', price: 600, category: 'Electronics', inStock: true },
  { name: 'Headphones', price: 100, category: 'Accessories', inStock: true },
  { name: 'Keyboard', price: 50, category: 'Accessories', inStock: false },
  { name: 'Mouse', price: 30, category: 'Accessories', inStock: true },
  { name: 'Monitor', price: 300, category: 'Electronics', inStock: true }
];

//1. 
let Electronic = products.filter(products => products.category === 'Electronics' && products.inStock === true);
console.log(Electronic);

//2.
let productsInStock = products.filter(products => products.inStock === true).map(products => products.name + ' ' + products.inStock);
console.log(productsInStock);

//3. && //8.challenge!
let inStockProducts = products.filter(product => product.category);
let sum = inStockProducts.reduce((total, product) => total + product.price, 0);
let avgPriceInStock = sum / inStockProducts.length;
console.log(avgPriceInStock);

//4.
let accessoriesInStock = products.filter(products => products.category && products.inStock === true);
console.log(accessoriesInStock);

//5.
let productsWith10 = products.map(products => (products.price * 90)/100);
console.log(productsWith10);

//6.challenge!
let productsNameInStock = products.filter(products => products.inStock === true && products.price > 500)
.map(products => products.name);
console.log(productsNameInStock);

//7.challenge!
let ProductsInStock1 = products.filter(products => products.inStock === true).map(products => products);
let LowPrice = ProductsInStock1.filter(products => products.price < 100)
let mediumPrice = ProductsInStock1.filter(products => products.price >=101 && products.price <= 500)
let highPrice = ProductsInStock1.filter(products => products.price > 500)
let newProductsArr = {
  LowPrice,
  mediumPrice,
  highPrice
}
console.log(newProductsArr);






