import React, { useEffect, useState } from 'react';
import API from '../api';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/users/leaderboard').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>🏅 Leaderboard</h2>
      <Leaderboard users={users} />
    </div>
  );
};

export default LeaderboardPage;
