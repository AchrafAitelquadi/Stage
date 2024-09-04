import React, { useState } from 'react';
import './Epreuve.css'; 
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';
import icons from '../importAllSvg';

const Epreuve = () => {
  const initialFormData = {
    idEpreuve: '',
    candidat: '',
    email: '',
    dateEpreuve: '',
    statut: '',
    additionalField1: '',
    additionalField2: '',
    additionalField3: '',
    additionalField4: '',
    additionalField5: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissions([...submissions, formData]);
    navigate('/epreuvedetails', { state: { submissions: [...submissions, formData] } });
    setFormData(initialFormData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="epreuve-container">
      <div className="top-bar">
        <h2>Épreuve</h2>
        <div className="admin-info">
          
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
      <div className='the-form'>
        <div className="navbar">
          <h2>Créer Épreuve</h2>
        </div>
        <form onSubmit={handleSubmit} className="epreuve-form">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="idEpreuve"
                  value={formData.idEpreuve}
                  onChange={handleChange}
                  label="ID ÉPREUVE"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="candidat"
                  value={formData.candidat}
                  onChange={handleChange}
                  label="CANDIDAT"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="EMAIL"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="dateEpreuve"
                  value={formData.dateEpreuve}
                  onChange={handleChange}
                  label="DATE ÉPREUVE"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" className="form-field">
                <InputLabel id="statut-label">STATUT</InputLabel>
                <Select
                  name="statut"
                  value={formData.statut}
                  onChange={handleChange}
                  label="STATUT"
                  labelId="statut-label"
                >
                  <MenuItem value="Accepté">Accepté</MenuItem>
                  <MenuItem value="Rejeté">Rejeté</MenuItem>
                  <MenuItem value="En attente">En attente</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="additionalField1"
                  value={formData.additionalField1}
                  onChange={handleChange}
                  label="Additional Field 1"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="additionalField2"
                  value={formData.additionalField2}
                  onChange={handleChange}
                  label="Additional Field 2"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="additionalField3"
                  value={formData.additionalField3}
                  onChange={handleChange}
                  label="Additional Field 3"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="additionalField4"
                  value={formData.additionalField4}
                  onChange={handleChange}
                  label="Additional Field 4"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" className="form-field">
                <TextField
                  name="additionalField5"
                  value={formData.additionalField5}
                  onChange={handleChange}
                  label="Additional Field 5"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>
          <div className="form-buttons">
            <button type="submit" className="submit-button">Sauvegarder</button>
            <button type="button" className="submit-button" onClick={handleCancel}>Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Epreuve;
