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
        const Promises = [1,2,3,4,5,6,7,8].map(dayNumber => getNumberOfCandle(dayNumber));
        const result = await Promise.all(Promises);
        const candleOfAllDays = result.reduce((acc, current) => acc + current, 0);
        console.log(candleOfAllDays);
      } catch (error) {
          console.log(error);
      }
})();
