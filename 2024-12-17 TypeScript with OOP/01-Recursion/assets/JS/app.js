"use strict";

(()=>{
    document.getElementById('b1').addEventListener('click', () => {
        // printStars(10);
        printStarsWithRecursion(10);
    });

    const printStars = n => {
        for(let i = 0; i<=n ; i++){
            document.write('* ');
        }
    };

    const printStarsWithRecursion = n => {
        if(n <= 0) return;
        printStarsWithRecursion(n-1);
        document.write('* ');
    };
})();