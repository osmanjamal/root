import React, { useState } from 'react';
import { executeTrade } from '../../services/api';

const TradeForm = () => {
  const [symbol, setSymbol] = useState('');
  const [type, setType] = useState('BUY');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await executeTrade(symbol, type, parseFloat(amount));
      console.log('تم تنفيذ الصفقة:', result);
      // يمكنك إضافة إشعار هنا لإعلام المستخدم بنجاح العملية
    } catch (error) {
      console.error('خطأ في تنفيذ الصفقة:', error);
      // يمكنك إضافة إشعار خطأ هنا
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>تنفيذ صفقة جديدة</h3>
      <input
        type="text"
        placeholder="رمز العملة (مثال: BTCUSDT)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="BUY">شراء</option>
        <option value="SELL">بيع</option>
      </select>
      <input
        type="number"
        placeholder="الكمية"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">تنفيذ الصفقة</button>
    </form>
  );
};

export default TradeForm;