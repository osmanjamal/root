import React, { useEffect, useState } from 'react';
import { getTrades, getSignals } from '../../services/api';
import TradingView from '../TradingView/TradingView';

const Dashboard = () => {
  const [trades, setTrades] = useState([]);
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tradesData = await getTrades();
      const signalsData = await getSignals();
      setTrades(tradesData);
      setSignals(signalsData);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>لوحة التحكم</h1>
      <TradingView />
      <div className="trades">
        <h2>الصفقات الأخيرة</h2>
        {trades.map(trade => (
          <div key={trade._id}>{trade.symbol} - {trade.type} - {trade.amount}</div>
        ))}
      </div>
      <div className="signals">
        <h2>إشارات التداول</h2>
        {signals.map(signal => (
          <div key={signal._id}>{signal.symbol} - {signal.type} - {signal.price}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;