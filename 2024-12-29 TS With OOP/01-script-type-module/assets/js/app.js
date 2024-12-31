import { showSale, showBrands } from './shop.js';
function sayHi() {
    console.log('Hi!');
    showSale();
    showBrands();
    const brand = {
        name: 'Nike',
        products: [
            {
                name: 'Nike Air Max',
                price: 120,
                inStock: true
            },
            {
                name: 'Nike Blazer Mid',
                price: 90,
                inStock: false
            }
        ]
    };
    console.log(brand);
}
document.getElementById('getHi').addEventListener('click', () => {
    sayHi();
});
