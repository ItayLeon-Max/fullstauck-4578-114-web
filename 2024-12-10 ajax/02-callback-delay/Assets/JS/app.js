"use strict";

(async () => {
    document.getElementById('btn').addEventListener('click', () => {
        setTimeout(() => {
            console.log('1 second passed');
        }, 3000);
        for(let i =0 ; i < 10000; i++){
            // do nothing
            console.log('doing nothing');
        }
    });

    document.getElementById('btn2').addEventListener('click', () => {
        console.log('Button 2 clicked');
    });
})();