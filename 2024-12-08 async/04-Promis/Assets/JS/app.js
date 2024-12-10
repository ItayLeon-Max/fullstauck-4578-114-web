"use strict";

(() => {
    //Promise 

    const getNumberOfCandle = (dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(dayNumber < 1) return reject('Day number must be greater than 0');
                if(dayNumber > 8) return reject('Day number must be less than 9');
                resolve(dayNumber+1);
            },100)
        });
    }

    let sum = 0;
    getNumberOfCandle(1).then(result => {
        return result;
    }).then(result => {
        sum += result;
        return getNumberOfCandle(2);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(3);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(4);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(5);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(6);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(7);
    }).then(result => {
        sum += result;
        return getNumberOfCandle(8);
    }).then(result => console.log(sum+result))
    .catch(error => {
        console.log(error);
    })


})();

