import React, { useState } from 'react';
import './Services.css';  // We're using the same CSS file as Agents
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Button, TextField, Pagination } from '@mui/material';
import icons from '../importAllSvg';

const services = [
  { name: 'Service Programmation Planification', manager: 'Mana William', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
  { name: 'Service Production', manager: 'Danny Ahmad', agents: 100 },
  { name: 'Service Production', manager: 'James Soap', agents: 219 },
  { name: 'Service Production', manager: 'Justin Hope', agents: 80 },
  { name: 'Service Production', manager: 'Amanda Nico', agents: 21 },
  { name: 'Service Production', manager: 'Jack Adja', agents: 12 },
];

const Services = () => {
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
  
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(search.toLowerCase()) ||
    service.manager.toLowerCase().includes(search.toLowerCase()) ||
    service.agents.toString().includes(search)
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const renderPagination = () => {
    const pagination = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pagination.push(
        <span key="start" onClick={() => handlePageChange(1)}>
          1
        </span>
      );
      if (startPage > 2) {
        pagination.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <span
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </span>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pagination.push(<span key="end-ellipsis">...</span>);
      }
      pagination.push(
        <span key="end" onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </span>
      );
    }

    return pagination;
  };
  return (
    <div className="agent-container">
      <div className="top-bar">
        <h2>Services</h2>
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
          <Button variant="contained" className="add-agent-btn" onClick={() => navigate('/services/ajouterservice')}>
            <span>+</span> Ajouter Service
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
              <TableCell className="nom-column" sx={{ textAlign: 'left !important' }}>Nom</TableCell>
              <TableCell className="service-column">Chef de Service</TableCell>
              <TableCell className="agents-column">Nombre d'agents</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {paginatedServices.map((service, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedServices.has(index + (currentPage - 1) * itemsPerPage)}
                    onChange={() => handleSelectChange(index + (currentPage - 1) * itemsPerPage)}
                  />
                </TableCell>
                <TableCell className="nom-column" sx={{ textAlign: 'left !important' }}>{service.name}</TableCell>
                <TableCell className="agent-service service-column">{service.manager}</TableCell>
                <TableCell className="agent-post agents-column">{service.agents}</TableCell>
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
          style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}
        >
          {'<'}
        </span>
        {renderPagination()}
        <span
          className="arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ visibility: currentPage === totalPages ? 'hidden' : 'visible' }}
        >
          {'>'}
        </span>
      </div>
    </div>
  );
};

export default Services;
