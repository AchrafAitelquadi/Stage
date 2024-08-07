import React, { useState } from 'react';
import './Agents.css';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Button, TextField } from '@mui/material';
import icons from '../importAllSvg';

const agents = [
  { name: 'Samanta William', code: '#123456789', date: 'March 25, 2021', service: 'Mana William', post: 'Jakarta', grade: 'VII A' },
  { name: 'Tony Soap', code: '#123456789', date: 'March 25, 2021', service: 'James Soap', post: 'Jakarta', grade: 'VII B' },
  { name: 'Karen Hope', code: '#123456789', date: 'March 25, 2021', service: 'Justin Hope', post: 'Jakarta', grade: 'VII C' },
  { name: 'Jordan Nico', code: '#123456789', date: 'March 25, 2021', service: 'Amanda Nico', post: 'Jakarta', grade: 'VII A' },
  { name: 'Nadila Adja', code: '#123456789', date: 'March 25, 2021', service: 'Jack Adja', post: 'Jakarta', grade: 'VII A' },
  { name: 'Johnny Ahmad', code: '#123456789', date: 'March 25, 2021', service: 'Danny Ahmad', post: 'Jakarta', grade: 'VII A' },
  { name: 'Lara Croft', code: '#987654321', date: 'April 10, 2021', service: 'Tom Croft', post: 'Bali', grade: 'VII B' },
  { name: 'Nathan Drake', code: '#123123123', date: 'May 5, 2021', service: 'Elena Drake', post: 'Bandung', grade: 'VII C' },
  { name: 'Alice Wonderland', code: '#321321321', date: 'June 15, 2021', service: 'Bob Wonderland', post: 'Surabaya', grade: 'VII A' },
  { name: 'Bruce Wayne', code: '#111111111', date: 'July 20, 2021', service: 'Alfred Wayne', post: 'Yogyakarta', grade: 'VII B' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Bruce Wayne', code: '#111111111', date: 'July 20, 2021', service: 'Alfred Wayne', post: 'Yogyakarta', grade: 'VII B' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' }
];

const Agent = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(search.toLowerCase()) ||
    agent.code.toLowerCase().includes(search.toLowerCase()) ||
    agent.service.toLowerCase().includes(search.toLowerCase()) ||
    agent.post.toLowerCase().includes(search.toLowerCase()) ||
    agent.grade.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);
  const paginatedAgents = filteredAgents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  return (
    <div className="agent-container">
      <div className="top-bar">
        <h2>Agents</h2>
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
          <Button variant="outlined" className="filter-btn">
            Filtrer par <span className="arrow-down">▼</span>
          </Button>
          <Button variant="contained" className="add-agent-btn" onClick={() => navigate('/agents/ajouteragent')}>
            <span>+</span> Ajouter Agent
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
              <TableCell sx={{ textAlign: 'left !important' }}>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Date Embauche</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Poste</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAgents.map((agent, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="agent-name">
                    <div className="avatar"></div>
                    {agent.name}
                  </div>
                </TableCell>
                <TableCell className="agent-code">{agent.code}</TableCell>
                <TableCell className="agent-date">{agent.date}</TableCell>
                <TableCell className="agent-service">{agent.service}</TableCell>
                <TableCell className="agent-post">{agent.post}</TableCell>
                <TableCell>
                  <IconButton><img src={icons.phone} alt="Phone" /></IconButton>
                  <IconButton><img src={icons.email} alt="email" /></IconButton>
                </TableCell>
                <TableCell>
                  <span className={`grade ${agent.grade.replace(' ', '').toLowerCase()}`}>
                    {agent.grade}
                  </span>
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

export default Agent;
