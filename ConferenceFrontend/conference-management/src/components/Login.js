import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://localhost:7125/api/Users/GetUserLogin', {
            username: form.username,
            password: form.password
        });

        const sampledata = response.data;
        console.log(response);

        if (sampledata) {
            sessionStorage.setItem('user', JSON.stringify(sampledata));
            sessionStorage.setItem('userId', sampledata.userID);
            navigate('/conferences');
        } else {
            setError('Invalid username or password');
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            setError('Invalid username or password');
        } else {
            setError('An error occurred. Please try again.');
        }
        console.error('Login error:', error);
    }
};


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
