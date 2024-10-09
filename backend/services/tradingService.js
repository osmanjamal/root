const binanceService = require('./binanceService');
const Trade = require('../models/Trade');
const Signal = require('../models/Signal');
const ApiConfig = require('../models/ApiConfig');
const Binance = require('node-binance-api');

const getApiConfig = async (userId) => {
  const config = await ApiConfig.findOne({ userId });
  if (!config) {
    throw new Error('API configuration not found');
  }
  return config;
};

exports.executeTrade = async (userId, symbol, type, amount) => {
  try {
    const config = await getApiConfig(userId);
    const binance = new Binance().options({
      APIKEY: config.apiKey,
      APISECRET: config.apiSecret
    });

    const price = await binanceService.getCurrentPrice(symbol, binance);
    const trade = new Trade({
      user: userId,
      symbol,
      type,
      amount,
      price
    });

    await trade.save();
    return trade;
  } catch (error) {
    console.error('Error executing trade:', error);
    throw error;
  }
};

exports.generateSignals = async () => {
  try {
    // هنا يجب أن تكون لوجيك توليد الإشارات
    // هذا مجرد مثال بسيط
    const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
    
    const signals = await Promise.all(symbols.map(async (symbol) => {
      // استخدم حساب API افتراضي أو الأول في قاعدة البيانات للحصول على الأسعار
      const defaultConfig = await ApiConfig.findOne();
      if (!defaultConfig) {
        throw new Error('No API configuration found');
      }

      const binance = new Binance().options({
        APIKEY: defaultConfig.apiKey,
        APISECRET: defaultConfig.apiSecret
      });

      const price = await binanceService.getCurrentPrice(symbol, binance);
      return new Signal({
        symbol,
        type: Math.random() > 0.5 ? 'BUY' : 'SELL',
        price
      });
    }));

    await Signal.insertMany(signals);
    return signals;
  } catch (error) {
    console.error('Error generating signals:', error);
    throw error;
  }
};