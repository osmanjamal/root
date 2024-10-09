const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_SECRET_KEY
});

exports.getCurrentPrice = async (symbol) => {
  try {
    const ticker = await binance.prices(symbol);
    return parseFloat(ticker[symbol]);
  } catch (error) {
    console.error(`Error getting price for ${symbol}:`, error);
    throw error;
  }
};

exports.placeBuyOrder = async (symbol, quantity) => {
  try {
    const order = await binance.marketBuy(symbol, quantity);
    return order;
  } catch (error) {
    console.error(`Error placing buy order for ${symbol}:`, error);
    throw error;
  }
};

exports.placeSellOrder = async (symbol, quantity) => {
  try {
    const order = await binance.marketSell(symbol, quantity);
    return order;
  } catch (error) {
    console.error(`Error placing sell order for ${symbol}:`, error);
    throw error;
  }
};