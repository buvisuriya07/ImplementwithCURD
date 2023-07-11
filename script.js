import React, { useState } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle user creation
  const createUser = () => {
    const newUser = { name, email };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  };

  // Function to handle user deletion
  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management System</h1>
      <div>
        <h2>List of Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                <button onClick={() => deleteUser(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>Create User</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={createUser}>Create</button>
      </div>
    </div>
  );
}

export default UserManagement;
