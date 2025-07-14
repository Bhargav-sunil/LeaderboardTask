import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = ({ users }) => {
  return (
    <table className="leaderboard-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const isTopThree = index < 3;
          const medal = ['🥇', '🥈', '🥉'][index];

          return (
            <tr key={user._id} className={isTopThree ? 'top-three' : ''}>
              <td>{isTopThree ? medal : index + 1}</td>
              <td>{user.name}</td>
              <td>{user.totalPoints}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Leaderboard;
