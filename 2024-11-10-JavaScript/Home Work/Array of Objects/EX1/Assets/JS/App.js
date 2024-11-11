let carsArr = [
    {
        model: "BMW",
        year: 2019,
        color: "Black",
    },
    {
        model: "Audi",
        year: 2018,
        color: "White",
    },
    {
        model: "Tesla",
        year: 2024,
        color: "Silver",
    }
];

for(car in carsArr){
    document.write(`Model: ${carsArr[car].model} <br>`);
    document.write(`Year: ${carsArr[car].year} <br>`);
    document.write(`Color: ${carsArr[car].color} <br>`);
    document.write(`------------------------- <br>`);
}