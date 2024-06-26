import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';

function Register() {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.register(form)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        setError('Registration failed');
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded">
            <h2 className="mb-4">Register</h2>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
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
              <button type="submit" className="btn btn-primary btn-block">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
