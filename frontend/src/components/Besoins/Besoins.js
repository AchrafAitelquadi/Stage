import React, { useState } from 'react';
import './Besoins.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TextField, IconButton } from '@mui/material';
import icons from '../importAllSvg';

const servicesData = [
  { nom: 'ingénieur', chefDeService: 'Mana William', nombreDeBesoins: 100, status: '', id: 1 },
  { nom: 'technicien', chefDeService: 'James Soap', nombreDeBesoins: 219, status: '', id: 2 },
  { nom: 'Stechnicien', chefDeService: 'Mana William', nombreDeBesoins: 100, status: '', id: 3 },
  { nom: 'technicien', chefDeService: 'James Soap', nombreDeBesoins: 219, status: '', id: 4 },
  { nom: 'ingénieur', chefDeService: 'Mana William', nombreDeBesoins: 100, status: '', id: 5 },
  { nom: 'ingénieur', chefDeService: 'James Soap', nombreDeBesoins: 219, status: '', id: 6 },
];

const BesoinsList = () => {
  const [services, setServices] = useState(servicesData);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedRows, setCheckedRows] = useState([]);
  const itemsPerPage = 5;

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (id, newStatus) => {
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === id ? { ...service, status: newStatus } : service
      )
    );
    setDropdownVisible(null);
  };

  const filteredServices = services.filter(service =>
    service.nom.toLowerCase().includes(search.toLowerCase()) ||
    service.chefDeService.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const handleCheckboxChange = (event, id) => {
    event.stopPropagation();
    setCheckedRows(prevState =>
      prevState.includes(id) ? prevState.filter(rowId => rowId !== id) : [...prevState, id]
    );
  };

  const handleRowClick = (id) => {
    if (!checkedRows.includes(id)) {
      // navigate(`/besoinsdetail/${id}`);
      console.log(`Navigate to detail page for id: ${id}`); // Placeholder for navigation
    }
  };

  const handleDropdownClick = (event, id) => {
    event.stopPropagation();
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Complété':
        return 'status-complete';
      case 'Suspendu':
        return 'status-suspendu';
      default:
        return '';
    }
  };

  return (
    <div className="besoins-container">
      <div className="top-bar">
        <h2>Besoins</h2>
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
      <TableContainer component={Paper} className="besoins-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Spécialité</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedServices.map((service, index) => (
              <TableRow
                key={index}
                onClick={() => handleRowClick(service.id)}
                className={checkedRows.includes(service.id) ? 'checked-row' : ''}
              >
                <TableCell>
                  <Checkbox
                    checked={checkedRows.includes(service.id)}
                    onChange={(event) => handleCheckboxChange(event, service.id)}
                  />
                </TableCell>
                <TableCell className="nom-cell">{service.nom}</TableCell>
                <TableCell className="content-cell">{service.chefDeService}</TableCell>
                <TableCell className="content-cell">{service.nombreDeBesoins}</TableCell>
                <TableCell className={`content-cell status-cell ${getStatusClassName(service.status)}`}>
                  {service.status}
                </TableCell>
                <TableCell className="content-cell">
                  <IconButton onClick={(event) => handleDropdownClick(event, service.id)}>
                    <img src={icons.more} alt="More options" />
                  </IconButton>
                  {dropdownVisible === service.id && (
                    <div className="dropdown">
                      <div
                        className="dropdown-item"
                        onClick={() => handleStatusChange(service.id, 'Complété')}
                      >
                        Complété
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => handleStatusChange(service.id, 'Suspendu')}
                      >
                        Suspendu
                      </div>
                    </div>
                  )}
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
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </span>
        ))}
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

export default BesoinsList;
