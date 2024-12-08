"use strict";

(()=>{
    const getAvg = (arr) => {
        if(typeof arr === 'undefined') throw new Error('Array is required');
        if(arr === null) throw new Error('Array is required');
        if(!Array.isArray(arr)) throw new Error('Array is required');
        if(arr.length === 0) throw new Error('Array is empty');

        return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    }

    const btn = document.getElementById('invoker');
    btn.addEventListener('click' , ()=>{
        try{
            console.log(getAvg([1,2,3,4,5]));
        } catch(err){
            console.log(err.message);
        }
    })
})();