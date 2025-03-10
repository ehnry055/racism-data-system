import React from 'react';
import '../styles/Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <a href="#" className="sidebar-link">User Type</a>
        <a href="/profile" className="sidebar-link">Profile</a>
        <a href="#" className="sidebar-link">Settings</a>
        <a href="#" className="sidebar-link">Log Out</a>
      </nav>
    </div>
  );
};

export default Sidebar;
