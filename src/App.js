import './App.css';
import React, { useState } from 'react';
import AdminLoginPage from './containers/admin/AdminLoginPage';
import AdminDashboard from './containers/admin/AdminDashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <AdminDashboard />
      ) : (
        <AdminLoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
