const catArr = [
    {
        name: "Bella",
        age: 2,
        color: "Black",
        isSterilized: true
    }
];

catArrToJSON = JSON.stringify(catArr);
alert(catArrToJSON);

yourCat = JSON.parse(catArrToJSON);
document.write(`Name: ${yourCat[0].name} <br> Age: ${yourCat[0].age} <br> Color: ${yourCat[0].color} <br> Sterilized: ${yourCat[0].isSterilized}`);
