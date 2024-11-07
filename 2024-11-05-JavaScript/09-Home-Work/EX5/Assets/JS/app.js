let client = {
    firstName: 'John',
    lastName: 'Doe',
    email: "john_doe@gmail.com",
    phone: '1234567890',
    creditCard: {
        number: '1234567890123456',
        expirationDate: '12/2023',
        cvv: '123'
    }
};

//output with for loop one time print
for (let key in client) {
    document.write(`${key} : ${client[key]} <br>`);
    for (let key1 in client.creditCard) {
        document.write(`${key1} : ${client.creditCard[key1]} <br>`);
    }
    document.write("<br>");
}