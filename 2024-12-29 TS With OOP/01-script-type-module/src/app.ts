import { showSale, showBrands, Brand } from './shop.js';

function sayHi(): void {
    console.log('Hi!');
    showSale();
    showBrands();
    const brand: Brand = {
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

