// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 mb-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Fitness Tracker</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/logactivity" className="text-gray-300 hover:text-white">Log Activity</Link>
          <Link to="/activityhistory" className="text-gray-300 hover:text-white">Activity History</Link>
          <Link to="/reports" className="text-gray-300 hover:text-white">Reports</Link>
          <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
