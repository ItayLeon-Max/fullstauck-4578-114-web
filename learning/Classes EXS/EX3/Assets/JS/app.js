import StockMarket from "./StockMarket.js";

const stockMarket1 = new StockMarket([ { name: "Apple", rate: 100 } ]);
stockMarket1.buy({ name: "Google", rate: 200 });
stockMarket1.sell("Google");  


