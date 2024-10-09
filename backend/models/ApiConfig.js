const mongoose = require('mongoose');

const ApiConfigSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  apiKey: {
    type: String,
    required: true
  },
  apiSecret: {
    type: String,
    required: true
  },
  exchange: {
    type: String,
    required: true,
    default: 'binance'
  }
});

module.exports = mongoose.model('ApiConfig', ApiConfigSchema);