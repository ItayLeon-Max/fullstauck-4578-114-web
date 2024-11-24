import Stock from "./Stock.js";

let stock = new Stock("AAPL", 150, [150, 176, 140, 153, 154]);
console.log(stock.getAvgRates()); // 154.6