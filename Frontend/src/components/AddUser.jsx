import React, { useState } from 'react';
import API from '../api';
import '../styles/AddUser.css';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');

  const addUser = async () => {
    if (!name.trim()) return;
    const res = await API.post('/users/add-user', { name });
    setName('');
    onUserAdded(res.data);
  };

  return (
    <div className="add-user-container">
      <input
        type="text"
        className="add-user-input"
        placeholder="Enter new user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="add-user-button"
        onClick={addUser}
        disabled={!name.trim()}
      >
        ➕ Add User
      </button>
    </div>
  );
};

export default AddUser;
