import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    ws.onerror = (event) => {
      setError('خطأ في اتصال WebSocket');
      console.error(event);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return { data, error };
};

export default useWebSocket;