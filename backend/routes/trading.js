const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tradingController = require('../controllers/tradingController');

// @route   GET api/trading/history
// @desc    Get user's trade history
// @access  Private
router.get('/history', auth, tradingController.getTradeHistory);

// @route   POST api/trading/trade
// @desc    Create a new trade
// @access  Private
router.post('/trade', auth, tradingController.createTrade);

// @route   GET api/trading/signals
// @desc    Get trading signals
// @access  Private
router.get('/signals', auth, tradingController.getSignals);

module.exports = router;