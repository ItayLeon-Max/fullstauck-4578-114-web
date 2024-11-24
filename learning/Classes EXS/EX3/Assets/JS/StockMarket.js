export default class StockMarket {
    constructor(stockName, stocksRate){
        this.stocks = [
            {
                name: this.stocksName,
                rate: this.stocksRate
            }
        ];
    }

    buy(stock){
        for(stock of this.stocks){
            this.stocks.push(stock);
        }
    }

    sell(stockName){
        this.stocks = this.stocks.filter(stock => stock.name !== stockName);
    }
}