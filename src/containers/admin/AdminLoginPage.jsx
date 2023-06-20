import React, { useState } from 'react';
import '../../assets/css/Admin-login.css'
// import houseBackground from '../../assets/images/r-architecture-2gDwlIim3Uw-unsplash.jpg';


const AdminLoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // try {
    //     const response = await fetch('http://localhost:8080/api/v1/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username,
    //         password,
    //       }),
    //     });
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       const token = data.token;
    //       localStorage.setItem('token', token);
    //       onLogin(true);
    //     } else {
    //       throw new Error('Invalid username or password');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     alert('Error during login. Please try again.');
    //   }
    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      alert('Invalid username or password');
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
                  placeholder="Username or Email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                <a href="">Forget Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
