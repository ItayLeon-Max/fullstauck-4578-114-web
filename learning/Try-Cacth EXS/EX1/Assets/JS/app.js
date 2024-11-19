const sumNumbers = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        const errorNumber = new Error('its not a number');
        throw errorNumber;
    } else {
        return num1 + num2;
    }
}

sumNumbers(2,"t");
console.log(sumNumbers(2,"t"));

