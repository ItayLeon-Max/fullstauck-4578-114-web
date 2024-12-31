function showSale() {
    console.log('Only today 50% off on all products!');
}
function showBrands() {
    console.log('We have the best brands for you!');
}
const brands = [
    {
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
    },
    {
        name: 'Adidas',
        products: [
            {
                name: 'Adidas Superstar',
                price: 100,
                inStock: true
            },
            {
                name: 'Adidas Stan Smith',
                price: 80,
                inStock: true
            }
        ]
    }
];
export { showSale, showBrands }; // Export the function showSale
