"use strict";
(()=>{
    const getAvg = (arr) => {
        if(arr === null || arr === undefined) throw new Error('Array is required');
        if(!Array.isArray(arr)) throw new Error('Array is required');
        if(arr.length === 0) throw new Error('Array is empty');

        return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    }
    const arrSize = +prompt('Enter the size of the array');
    const arr = [];
    for(let i = 0; i < arrSize; i++) {
        arr.push(+prompt(`Enter element ${i + 1}`));
    }

    try {
        const avg = getAvg(arr);
        console.log(`The average of the array is ${avg}`);
        console.log(arr);
    } catch (error) {
        console.error(error.message);
    }
})();