// JSON ex1

const store = [
    {
    storeName: "iDigital",
    city: "Tel Aviv",
    street: "Dizengoff",
    number: 50,
    products: [
        {
            productName: "iPhone",
            price: 5000
        },
        {
            productName: "iPad",
            price: 3000
        },
        {
            productName: "iMac",
            price: 10000
        },
        {
            productName: "AppleWatch",
            price: 2000
        },
        {
            productName: "MacBook",
            price: 8000
        },
        {
            productName: "AirPods",
            price: 1000
        },
        {
            productName: "HomePod",
            price: 1500
        },
        {
            productName: "AppleTV",
            price: 1500
        },
        {
            productName: "AppleCare",
            price: 500
        }
    ]
    }
];

let storeObjectToJSON = JSON.stringify(store);
console.log(storeObjectToJSON);

let storeJSONToObject = JSON.parse(storeObjectToJSON);


for(let i = 0; i < storeJSONToObject.length; i++){
    document.write(storeJSONToObject[i].storeName + "<br>");
    document.write(storeJSONToObject[i].city + "<br>");
    document.write(storeJSONToObject[i].street + "<br>");
    document.write(storeJSONToObject[i].number + "<br>");
    for(let j = 0; j < storeJSONToObject[i].products.length; j++){
        document.write(storeJSONToObject[i].products[j].productName + "<br>");
        document.write(storeJSONToObject[i].products[j].price + "<br>");
    }
}

let storeObjectToJSON2 = JSON.stringify(storeJSONToObject);
console.log(storeObjectToJSON2);
