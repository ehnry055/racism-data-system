import React from 'react';
import '../styles/EditDatabasePage.css'; 
import NotesList from '../components/NotesList';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const EditDatabasePage = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/unauthorized");
  }
  return (
    <div className="edit-database-container">

      {/*
      <div className="left-section">
        <div className="profile-circle"></div>
        <p className="profile-name">John Doe</p>
        <div className="pie-chart"></div>
        <p className="chart-label">Lorem Ipsum</p>
      </div>
      */}

      <div className="data-section">
        <h2 className="section-title">Your Data</h2>
        {[1].map((item, index) => (
          <div className="data-item" key={index}>
            <h3>Aggregated Data</h3>
            <p>
              items compiled and merged into a unique table
            </p>
            <div className="action-buttons">
              <button className="delete-button">Delete</button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
        <p className="noteslist">
          <NotesList />
        </p>
      </div>

      <div className="saved-section">

        <h2 className="section-title">Saved Graphs</h2>
        {[1].map((item, index) => (
          <div className="saved-graph" key={index}>
            <div className="pie-chart"></div>
            <h3>Pie Chart: AZ vs NJ</h3>
            <p>
              Saved on 1/2/23
            </p>
            <div className="action-buttons">
              <button className="delete-button">Download</button>
              <button className="edit-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditDatabasePage;
