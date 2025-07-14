import React from 'react';
import '../styles/History.css';

const History = ({ history }) => {
  return (
    <div className="history-container">
      <h3>📜 Claim History</h3>
      <ul className="history-list">
        {history.map((entry) => (
          <li className="history-item" key={entry._id}>
            <div className="history-user">{entry.userId.name}</div>
            <div className="history-points">
              +{entry.points} points
              <span className="history-time">
                {new Date(entry.claimedAt).toLocaleString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
