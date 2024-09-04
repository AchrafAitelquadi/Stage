import React, { useState } from 'react';
import './Convocation.css';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import icons from '../importAllSvg';

const convocations = [
  // Page 1
  { idConvocation: '001', candidat: 'Salma Mhamid', email: 'salmamhamid@gmail.com', dateEnvoi: '8/17/2022', epreuveEcrit: 'Passé', epreuveOrale: 'En attente', id: 1 },
  { idConvocation: '002', candidat: 'Aya Nor Elyaqin', email: 'ayanorelyaqin@gmail.com', dateEnvoi: '8/18/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 2 },
  { idConvocation: '003', candidat: 'Youssef ', email: 'youssef@gmail.com', dateEnvoi: '8/19/2022', epreuveEcrit: 'En attente', epreuveOrale: 'En attente', id: 3 },
  { idConvocation: '004', candidat: 'Fatima Zahra', email: 'fatimazahra@gmail.com', dateEnvoi: '8/20/2022', epreuveEcrit: 'Passé', epreuveOrale: 'En attente', id: 4 },
  { idConvocation: '005', candidat: 'Hamza E', email: 'hamza@gmail.com', dateEnvoi: '8/21/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 5 },

  // Page 2
  { idConvocation: '006', candidat: 'Kawtar Bennani', email: 'kawtar@gmail.com', dateEnvoi: '8/22/2022', epreuveEcrit: 'En attente', epreuveOrale: 'En attente', id: 6 },
  { idConvocation: '007', candidat: 'Ahmed Zouitni', email: 'ahmed@gmail.com', dateEnvoi: '8/23/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 7 },
  { idConvocation: '008', candidat: 'Samira Ounouss', email: 'samira@gmail.com', dateEnvoi: '8/24/2022', epreuveEcrit: 'Passé', epreuveOrale: 'En attente', id: 8 },
  { idConvocation: '009', candidat: 'Mohamed Benhaddou', email: 'mohamed@gmail.com', dateEnvoi: '8/25/2022', epreuveEcrit: 'En attente', epreuveOrale: 'Passé', id: 9 },
  { idConvocation: '010', candidat: 'Zineb Alaoui', email: 'zineb@gmail.com', dateEnvoi: '8/26/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 10 },

  // Page 3
  { idConvocation: '011', candidat: 'Rachid Nadir', email: 'rachid@gmail.com', dateEnvoi: '8/27/2022', epreuveEcrit: 'En attente', epreuveOrale: 'En attente', id: 11 },
  { idConvocation: '012', candidat: 'Hanan Amrani', email: 'hanan@gmail.com', dateEnvoi: '8/28/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 12 },
  { idConvocation: '013', candidat: 'Nour El Houda', email: 'nour@gmail.com', dateEnvoi: '8/29/2022', epreuveEcrit: 'Passé', epreuveOrale: 'En attente', id: 13 },
  { idConvocation: '014', candidat: 'Karim Lahlou', email: 'karim@gmail.com', dateEnvoi: '8/30/2022', epreuveEcrit: 'En attente', epreuveOrale: 'Passé', id: 14 },
  { idConvocation: '015', candidat: 'Souad Ait El Kadmiri', email: 'souad@gmail.com', dateEnvoi: '8/31/2022', epreuveEcrit: 'Passé', epreuveOrale: 'Passé', id: 15 },
];

const ConvocationList = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredConvocations = convocations.filter(convocation =>
    convocation.candidat.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredConvocations.length / itemsPerPage);
  const paginatedConvocations = filteredConvocations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClick = (id) => {
    navigate(`/convocationdetail/${id}`); // Route to ConvocationDetail component
  };

  return (
    <div className="convocation-container">
      <div className="top-bar">
        <h2>Convocations</h2>
        <div className="admin-info">
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
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
      <TableContainer component={Paper} className="convocation-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'left !important' }}>ID CONVOCATION</TableCell>
              <TableCell align="center">CANDIDAT</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center">DATE D'ENVOI</TableCell>
              <TableCell align="center">ÉPREUVE ÉCRIT</TableCell>
              <TableCell align="center">ÉPREUVE ORALE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedConvocations.map((convocation, index) => (
              <TableRow key={index} onClick={() => handleClick(convocation.id)}>
                <TableCell className="id-convocation-cell">
                  <span className="id-convocation">{convocation.idConvocation}</span>
                </TableCell>
                <TableCell className="content-cell">{convocation.candidat}</TableCell>
                <TableCell className="content-cell">{convocation.email}</TableCell>
                <TableCell className="content-cell">{convocation.dateEnvoi}</TableCell>
                <TableCell className="content-cell">{convocation.epreuveEcrit}</TableCell>
                <TableCell className="content-cell">{convocation.epreuveOrale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <span
          className="arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}>
          {'<'}
        </span>
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </span>
        ))}
        <span
          className="arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ visibility: currentPage === totalPages ? 'hidden' : 'visible' }}>
          {'>'}
        </span>
      </div>
    </div>
  );
};

export default ConvocationList;
