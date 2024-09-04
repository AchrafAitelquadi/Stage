import React, { useState } from 'react';
import './EpreuveDetails.css';
import { IconButton, TextField, Button } from '@mui/material';
import icons from '../importAllSvg';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const EpreuveDetails = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { submissions } = location.state || { submissions: [] };

  const handleBackClick = () => {
    navigate('/epreuve');
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="epreuve-details-container">
      <div className="top-bar">
        <h2>
          <IoIosArrowRoundBack 
            style={{ marginRight: '10px', cursor: 'pointer' }} 
            onClick={handleBackClick} 
          />
          Détails de l'Épreuve
        </h2>
        <div className="admin-info">
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
      <div className="search-and-filter">
        <div className="search-bar-container">
          <TextField
            placeholder="Search here..."
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
            className="search-bar"
            InputProps={{
              startAdornment: <img src={icons.search} alt="Search Icon" className="search-icon" />
            }}
          />
        </div>
        <div className="filter-and-add">
          <Button variant="outlined" className="filter-btn">
            Tous <span className="arrow-down">▼</span>
          </Button>
          <Button variant="contained" className="add-epreuve-btn" onClick={() => navigate('/epreuve/ajouterepreuve')}>
            <span>+</span> Ajouter Épreuve
          </Button>
        </div>
      </div>
      <div className="table-container">
        <table className="epreuve-table">
          <thead>
            <tr>
              <th>ID Épreuve</th>
              <th>Additional Field 1</th>
              <th>Date Épreuve</th>
              <th>Additional Field 2</th>
              <th>Additional Field 3</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.idEpreuve}</td>
                <td>{submission.additionalField1}</td>
                <td>{submission.dateEpreuve}</td>
                <td>{submission.additionalField2}</td>
                <td>{submission.additionalField3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpreuveDetails;
