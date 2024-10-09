import React from 'react';
import { formatDate } from '../../utils/helpers';

const SignalList = ({ signals }) => {
  return (
    <div className="signal-list">
      <h3>إشارات التداول الأخيرة</h3>
      <ul>
        {signals.map(signal => (
          <li key={signal._id}>
            <span>{signal.symbol}</span>
            <span className={signal.type === 'BUY' ? 'buy-signal' : 'sell-signal'}>
              {signal.type === 'BUY' ? 'شراء' : 'بيع'}
            </span>
            <span>{signal.price}</span>
            <span>{formatDate(signal.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignalList;