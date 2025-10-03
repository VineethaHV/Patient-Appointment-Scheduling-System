import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function Dashboard() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = '/';
      return;
    }
    axios.get(`${API_URL}/api/users`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.fullName} ({u.username}) - {u.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;