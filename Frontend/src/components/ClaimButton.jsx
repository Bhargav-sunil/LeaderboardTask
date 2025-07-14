import React from 'react';
import API from '../api';
import '../styles/ClaimButton.css';

const ClaimButton = ({ selectedUser, onClaim }) => {
  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await API.post(`/claim/points/${selectedUser}`);
    onClaim(res.data.points);
  };

  return (
    <button
      className="claim-button"
      onClick={handleClaim}
      disabled={!selectedUser}
    >
      🎯 Claim Points
    </button>
  );
};

export default ClaimButton;
