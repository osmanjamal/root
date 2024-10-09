const Trade = require('../models/Trade');
const Signal = require('../models/Signal');

exports.getTradeHistory = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id }).sort({ date: -1 });
    res.json(trades);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createTrade = async (req, res) => {
  try {
    const newTrade = new Trade({
      user: req.user.id,
      ...req.body
    });

    const trade = await newTrade.save();
    res.json(trade);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSignals = async (req, res) => {
  try {
    const signals = await Signal.find().sort({ date: -1 });
    res.json(signals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};