"use strict";

(async () => {
    const getNumberOfCandle = ( dayNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(dayNumber < 1) return reject('Day number must be greater than 0');
                if(dayNumber > 8) return reject('Day number must be less than 9');
                resolve(dayNumber + 1);
            },2000)
        });
      }

      try {
        let sum = 0;
       for(const dayNumber of [1,2,3,4,5,6,7,8]){
           const numberOfCandle = await getNumberOfCandle(dayNumber);
              sum += numberOfCandle;
       }
       console.log(sum);
      } catch (error) {
          console.log(error);
      }
})();
