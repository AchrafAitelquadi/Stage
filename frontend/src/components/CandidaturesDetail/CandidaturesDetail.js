import React from 'react';
import './CandidaturesDetail.css';
import { IoArrowBackOutline } from 'react-icons/io5';
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CandidaturesDetail = () => {
  const navigate = useNavigate();

  // Static candidate information
  const candidate = {
    name: 'James Hiddleston',
    title: 'Software Developer',
    location: 'Mountain House, CA',
    email: 'james@gmail.com',
    phone: '(415) 123-4567',
    avatarUrl: require('../../assets/pdp.jpg'), // Corrected path to candidate's avatar
  };

  // Sample position details
  const positions = [
    {
      location: 'Ithaca, New York',
      position: 'Remote',
      jobType: 'Full-time',
      compensation: '$60 - $80 per hour',
      sector: 'Information Technology',
      desiredJob: 'Software Developer',
    },
    {
      location: 'San Francisco, CA',
      position: 'Onsite',
      jobType: 'Contract',
      compensation: '$50 - $70 per hour',
      sector: 'Fintech',
      desiredJob: 'Full Stack Developer',
    },
    {
      location: 'Austin, TX',
      position: 'Hybrid',
      jobType: 'Part-time',
      compensation: '$40 - $60 per hour',
      sector: 'Healthcare',
      desiredJob: 'Backend Developer',
    },
    {
      location: 'New York, NY',
      position: 'Onsite',
      jobType: 'Full-time',
      compensation: '$80 - $100 per hour',
      sector: 'E-commerce',
      desiredJob: 'Frontend Developer',
    },
  ];

  const handleBackClick = () => {
    navigate('/candidatures');
  };

  return (
    <div className="candidatures-detail-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="back-icon" onClick={handleBackClick}>
          <IoArrowBackOutline />
          <h1 className="title">Candidatures</h1>
        </div>
        <div className="user-profile">
          <IoIosNotifications className="icon" />
          <IoSettingsOutline className="icon" />
          <div className="profile-info">
            <p>Prénom Admin</p>
            <p>Admin</p>
          </div>
          <img src={require('../../assets/admin.jpg')} alt="Admin Avatar" className="avatar" /> {/* Corrected path to admin's avatar */}
        </div>
      </div>

      {/* Main Candidature Card */}
      <div className="candidature-card">
        <div className="profile-header">
          <img
            src={candidate.avatarUrl}
            alt="Profile Avatar"
            className="avatar"
          />
          <div className="profile-info">
            <h2 className="name">{candidate.name}</h2>
            <h3 className="title">{candidate.title}</h3>
            <p className="location">{candidate.location}</p>
            <p className="email">{candidate.email}</p>
            <p className="phone">{candidate.phone}</p>
          </div>
        </div>
        <div className="positions-section">
          {positions.map((position, index) => (
            <div className="position-card" key={index}>
              <h4>Looking for Position</h4>
              <p><strong>Location:</strong> {position.location}</p>
              <p><strong>Position:</strong> {position.position}</p>
              <p><strong>Job Type:</strong> {position.jobType}</p>
              <p><strong>Compensation Expectation:</strong> {position.compensation}</p>
              <p><strong>Sector:</strong> {position.sector}</p>
              <p><strong>Desired Job:</strong> {position.desiredJob}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidaturesDetail;
