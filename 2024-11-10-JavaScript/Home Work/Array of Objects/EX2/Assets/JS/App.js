const clothesArr = [
    {
        measure: 'S',
        price: 100,
        color: 'Red',
    },
    {
        measure: 'M',
        price: 200,
        color: 'Blue',
    },
    {
        measure: 'L',
        price: 300,
        color: 'Green',
    },
    {
        measure: 'XL',
        price: 400,
        color: 'Yellow',
    },
    {
        measure: 'XXL',
        price: 500,
        color: 'Black',
    },
    {
        measure: 'XXXL',
        price: 600,
        color: 'White',
    },
];

for(clothes in clothesArr){
    document.write(`<h3>Clothes ${+(clothes)+1}</h3><br>`);
    for(let key in clothesArr[clothes]){
        document.write(`${key}: ${clothesArr[clothes][key]}<br>`);
    }
    document.write('-----------------------------<br>');
}