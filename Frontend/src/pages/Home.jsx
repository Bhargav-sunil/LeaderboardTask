import React, { useEffect, useState } from 'react';
import UserSelector from '../components/UserSelector';
import AddUser from '../components/AddUser';
import ClaimButton from '../components/ClaimButton';
import API from '../api';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [lastClaim, setLastClaim] = useState(null);

  const fetchData = async () => {
    const res = await API.get('/users/leaderboard');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserAdded = () => fetchData();
  const handleClaim = (points) => {
    setLastClaim(points);
    fetchData();
  };

  return (
    <div className="container">
      <h2>🎯 Claim Points</h2>
      <UserSelector users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} />
      {lastClaim && <p style={{ color: 'green' }}>✅ Awarded {lastClaim} points!</p>}
      <AddUser onUserAdded={handleUserAdded} />
    </div>
  );
};

export default Home;
