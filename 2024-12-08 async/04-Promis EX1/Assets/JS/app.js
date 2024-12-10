"use strict";

(() => {
    const getPower = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(num % 3 === 0) return reject('Number is divisible by 3');
                resolve(Math.pow(num, 2));
            },3000);
        });
    }
    document.getElementById('btnPower').addEventListener('click', () => {
        const num = +prompt('Enter a number');
        getPower(num)
            .then(result => console.log(`The power of ${num} is ${result}`))
            .catch(err => console.log(err));
    })
})();
