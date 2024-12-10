"use strict";

(() => {
  //Hanuca candle of the day
  const getNumberOfCandle = (dayNumber, successCallBack, errorCallBack) => {
    setTimeout(() => {
        if(dayNumber < 1) return errorCallBack('Day number must be greater than 0');
        if(dayNumber > 8) return errorCallBack('Day number must be less than 9');
        successCallBack(dayNumber+1);
    },3000)
  }

    //use getNumberOfCandle to calculate how many candles are lit during hanuca
    //output is 44
    // with not a loop 

    getNumberOfCandle(1, c1 => {
        getNumberOfCandle(2, c2 => {
          getNumberOfCandle(3, c3 => {
            getNumberOfCandle(4, c4 => {
              getNumberOfCandle(5, c5 => {
                getNumberOfCandle(6, c6 => {
                  getNumberOfCandle(7, c7 => {
                    getNumberOfCandle(8, c8 => {
                      const total = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;
                      console.log("Total candles lit during Hanuka: " + total); // אמור להיות 44
                    }, console.error);
                  }, console.error);
                }, console.error);
              }, console.error);
            }, console.error);
          }, console.error);
        }, console.error);
      }, console.error);
})();
