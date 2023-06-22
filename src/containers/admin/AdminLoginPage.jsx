import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/Admin-login.css';

const AdminLoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/v1/api/auth/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        const token = response.data.accessToken;
  
        // Store token in local storage
        localStorage.setItem('adminToken', token);
        console.log('Token:', token); // Add this line to check the token value
        await new Promise((resolve) => setTimeout(resolve, 100));
        onLogin(true);
      } else {
        // Login failed
        alert(response.data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };
  

  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome Back</h2>
            <p>Admin</p>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <p>
                <label>
                  Username or email address<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
              <p>
                <a href="">Forgot Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
