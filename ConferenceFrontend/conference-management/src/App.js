import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConferenceList from './components/ConferenceList';
import ConferenceDetail from './components/ConferenceDetail';
import ConferenceForm from './components/ConferenceForm';
import Login from './components/Login';
import Register from './components/Register';
import userService from './services/userService';

function App() {
  const currentUser = userService.getCurrentUser();

  const handleLogout = () => {
    userService.logout();
    window.location.reload();
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Conference Management</Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/conferences" className="nav-link">Conferences</Link>
            </li>
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">{currentUser.username}</Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogout}>Logout</a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ConferenceList />} />
            <Route path="/conferences" element={<ConferenceList />} />
            <Route path="/conferences/:id" element={<ConferenceDetail />} />
            <Route path="/create" element={<ConferenceForm />} />
            <Route path="/edit/:id" element={<ConferenceForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
