import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2>🏆 Leaderboard App</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
      <li><Link to="/history">History</Link></li>
    </ul>
  </nav>
);

export default Navbar;
