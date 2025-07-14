import React, { useEffect, useState } from 'react';
import API from '../api';
import History from '../components/History';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get('/history/get-history').then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>📜 Claim History</h2>
      <History history={history} />
    </div>
  );
};

export default HistoryPage;
