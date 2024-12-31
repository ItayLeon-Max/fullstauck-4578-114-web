function showSale(): void {
    console.log('Only today 50% off on all products!');
}

function showBrands(): void {
    console.log('We have the best brands for you!');
}

type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

type Brand = {
    name: string;
    products: Product[];
}

const brands: Brand[] = [
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

export { showSale, showBrands, Brand }; // Export the function showSale