const express = require('express');
const router = express.Router();
const ApiConfig = require('../models/ApiConfig');
const auth = require('../middleware/auth');

// إضافة أو تحديث إعدادات API
router.post('/', auth, async (req, res) => {
  try {
    const { apiKey, apiSecret, exchange } = req.body;
    let config = await ApiConfig.findOne({ userId: req.user.id });
    
    if (config) {
      config.apiKey = apiKey;
      config.apiSecret = apiSecret;
      config.exchange = exchange;
    } else {
      config = new ApiConfig({
        userId: req.user.id,
        apiKey,
        apiSecret,
        exchange
      });
    }

    await config.save();
    res.json({ message: 'تم حفظ إعدادات API بنجاح' });
  } catch (error) {
    console.error(error);
    res.status(500).send('خطأ في الخادم');
  }
});

// الحصول على إعدادات API الحالية
router.get('/', auth, async (req, res) => {
  try {
    const config = await ApiConfig.findOne({ userId: req.user.id });
    if (!config) {
      return res.status(404).json({ message: 'لم يتم العثور على إعدادات API' });
    }
    res.json({ apiKey: config.apiKey, exchange: config.exchange });
  } catch (error) {
    console.error(error);
    res.status(500).send('خطأ في الخادم');
  }
});

module.exports = router;