const getNumber = (num) => {
    if(num < 0){
        const error = new Error('Number is less than 0');
        throw error;
    } else {
        console.log(num);
    }
}

let number = -1;

try {
    getNumber(number);
} catch (error) {
    number = 0;
}

console.log(number);