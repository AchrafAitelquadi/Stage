import React, { useState } from 'react';
import './Commissions.css';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Button, TextField } from '@mui/material';
import icons from '../importAllSvg';

const commissions = [
  { name: 'Commission de pré-séléction', manager: 'Mana William', agents: 100 },
  { name: 'Commission Production', manager: 'James Soap', agents: 219 },
  { name: 'Commission de Jury', manager: 'Justin Hope', agents: 80 },
  { name: 'Commission Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Commission Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Commission Production', manager: 'Danny Ahmad', agents: 100 },
];

const Commissions = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedServices, setSelectedServices] = useState(new Set());
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectChange = (index) => {
    setSelectedServices((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return newSelected;
    });
  };

  const filteredCommissions = commissions.filter(commission =>
    commission.name.toLowerCase().includes(search.toLowerCase()) ||
    commission.manager.toLowerCase().includes(search.toLowerCase()) ||
    commission.agents.toString().includes(search)
  );

  const totalPages = Math.ceil(filteredCommissions.length / itemsPerPage);
  const paginatedCommissions = filteredCommissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="agent-container">
      <div className="top-bar">
        <h2>Commissions</h2>
        <div className="admin-info">
          <IconButton className="icon-button"><img src={icons.parameter} alt="Settings" /></IconButton>
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
          <Button variant="contained" className="add-agent-btn" onClick={() => navigate('/commissions/ajoutercommission')}>
            <span>+</span> Ajouter Commission
          </Button>
        </div>
      </div>
      <TableContainer component={Paper} className="agent-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell className="nom-column-header" sx={{ textAlign: 'left !important' }}>Nom</TableCell>
              <TableCell>Président de la comission</TableCell>
              <TableCell>Nombre des membres</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCommissions.map((commission, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox checked={selectedServices.has(index + (currentPage - 1) * itemsPerPage)}
                    onChange={() => handleSelectChange(index + (currentPage - 1) * itemsPerPage)}/>
                </TableCell>
                <TableCell className="nom-column-cell" sx={{ textAlign: 'left !important', cursor: 'pointer' }} onClick={() => navigate(`/affichercommission/${encodeURIComponent(commission.name)}`)}>{commission.name}</TableCell>
                <TableCell className="agent-service">{commission.manager}</TableCell>
                <TableCell className="agent-post">{commission.agents}</TableCell>
                <TableCell>
                  <IconButton><img src={icons.phone} alt="Phone" /></IconButton>
                  <IconButton><img src={icons.email} alt="email" /></IconButton>
                </TableCell>
                <TableCell>
                  <IconButton><img src={icons.more} alt="more" /></IconButton>
                </TableCell>
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

export default Commissions;
