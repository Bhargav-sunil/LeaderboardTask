import '../styles/UserSelector.css';

const UserSelector = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="user-selector-wrapper">
      <select
        className="user-selector"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">🔽 Select a User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
