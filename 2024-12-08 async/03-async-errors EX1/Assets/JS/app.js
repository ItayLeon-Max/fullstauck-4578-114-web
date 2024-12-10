"use strict";

(() => {
    const getPower = (num, successCallBack, errorCallBack) => {
        setTimeout(() => {
            if(num % 3 === 0) return errorCallBack('Number is divisible by 3');
            successCallBack(Math.pow(num, 2));
        },3000)
    }

    document.getElementById('btnPower').addEventListener('click', () => {
        let num = +(prompt('Enter a number: '));
        getPower(num, result => {
            console.log(`The power of ${num} is ${result}`);
        }, error => {
            console.log(error);
        })
    });
})();