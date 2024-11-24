export default class Stock {
  constructor(name, currentPrice, rates) {
    this.name = name;
    this.currentPrice = currentPrice;
    this.rates = rates;
  }

  getAvgRates(){
    let sum = 0;
    for(let rate of this.rates){
      sum += rate;
    }
    return sum / this.rates.length;
  }
}

