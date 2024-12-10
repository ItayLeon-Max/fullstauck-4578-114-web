"use strict";

(async () => {
    const getPower = async (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(num % 3 === 0) return reject('Number is divisible by 3');
                return resolve(Math.pow(num, 2));
            }, 1000);
        });
    }

    try {
        const number = +prompt('Enter a number');
        const power = await getPower(number);
        console.log(power);
    } catch (error) {
        console.log(error);
    }
})();
