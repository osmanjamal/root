import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiConfigForm = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [exchange, setExchange] = useState('binance');

  useEffect(() => {
    // جلب الإعدادات الحالية عند تحميل المكون
    const fetchConfig = async () => {
      try {
        const res = await axios.get('/api/config');
        setApiKey(res.data.apiKey);
        setExchange(res.data.exchange);
      } catch (error) {
        console.error('Error fetching API config:', error);
      }
    };
    fetchConfig();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/config', { apiKey, apiSecret, exchange });
      alert('تم حفظ إعدادات API بنجاح');
    } catch (error) {
      console.error('Error saving API config:', error);
      alert('حدث خطأ أثناء حفظ الإعدادات');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>إعدادات API</h2>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key"
        required
      />
      <input
        type="password"
        value={apiSecret}
        onChange={(e) => setApiSecret(e.target.value)}
        placeholder="API Secret"
        required
      />
      <select value={exchange} onChange={(e) => setExchange(e.target.value)}>
        <option value="binance">Binance</option>
        {/* يمكن إضافة المزيد من الخيارات هنا */}
      </select>
      <button type="submit">حفظ الإعدادات</button>
    </form>
  );
};

export default ApiConfigForm;