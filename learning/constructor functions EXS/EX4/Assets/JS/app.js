function CryptoCurrency(coinType, exchangeRate){
    this.coinType = coinType;
    this.exchangeRate = exchangeRate;

    this.getAvgRate = function(){
        let sum = 0;
        for(let rate of this.exchangeRate){
            sum += rate;
        }
        return sum / this.exchangeRate.length;
    }

    this.getMaxRate = function(){
        let max = this.exchangeRate[0];
        for(let rate of this.exchangeRate){
            if(rate > max){
                max = rate;
            }
        }
        return max;
    }
}

const coin1 = new CryptoCurrency('Bitcoin', [100, 200, 300, 400, 500]);

console.log(coin1.getAvgRate()); 
console.log(coin1.getMaxRate());
