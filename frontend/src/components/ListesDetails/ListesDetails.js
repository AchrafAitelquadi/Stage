import React, { useState } from 'react';
import './ListesDetails.css';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, TextField, FormControl, Select, MenuItem, InputLabel, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import icons from '../importAllSvg';
import { Link } from 'react-router-dom';

// Sample candidate data (Placeholder)
const candidatesAdmis = [
  { id: 1, job: 'Developer', nombresCandidatures: 5, shortlisted: 2, startDate: '2023-06-15', location: 'Casablanca', experience: '2 years' },
  { id: 2, job: 'Designer', nombresCandidatures: 3, shortlisted: 1, startDate: '2023-07-20', location: 'Marrakech', experience: '3 years' },
];
const candidatesRetenus = [
  { id: 3, job: 'Manager', nombresCandidatures: 7, shortlisted: 3, startDate: '2023-08-01', location: 'Rabat', experience: '5 years' },
];
const candidatesNonRetenus = [
  { id: 4, job: 'Analyst', nombresCandidatures: 4, shortlisted: 0, startDate: '2023-05-10', location: 'Tanger', experience: '1 year' },
];

const Listes = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setCurrentPage(1);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setCurrentPage(1);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setCurrentPage(1);
  };

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
    setCurrentPage(1);
  };

  const getCandidates = () => {
    switch (tabIndex) {
      case 1:
        return candidatesRetenus;
      case 2:
        return candidatesNonRetenus;
      default:
        return candidatesAdmis;
    }
  };

  const filteredCandidates = getCandidates()
    .filter(candidate =>
      candidate.job.toLowerCase().includes(search.toLowerCase())
    )
    .filter(candidate => {
      const startYear = candidate.startDate !== "N/A" ? new Date(candidate.startDate).getFullYear() : null;
      const startMonth = candidate.startDate !== "N/A" ? new Date(candidate.startDate).getMonth() + 1 : null;
      return (!selectedYear || startYear === parseInt(selectedYear)) &&
             (!selectedMonth || startMonth === parseInt(selectedMonth)) &&
             (!selectedJob || candidate.job === selectedJob);
    });

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
  const paginatedCandidates = filteredCandidates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClick = (id) => {
    navigate(`/listesdetails/${id}`);
  };

  const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2000 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const allCandidates = [...candidatesAdmis, ...candidatesRetenus, ...candidatesNonRetenus];
  const jobs = Array.from(new Set(allCandidates.map(candidate => candidate.job)));

  const columns = [
    { id: 'job', label: 'Job Title' },
    { id: 'nombresCandidatures', label: 'Nombres Candidatures' },
    { id: 'shortlisted', label: 'Shortlisted' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'location', label: 'Location' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <div className="listes-container">
      <div className="top-bar">
        <h2>Listes</h2>
        <div className="admin-info">
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
      <div className="filter-container">
        <FormControl variant="outlined" size="small" className="filter-select">
          <InputLabel>Année</InputLabel>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            label="Année"
          >
            <MenuItem value=""><em>Toutes</em></MenuItem>
            {years.map(year => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <FormControl variant="outlined" size="small" className="filter-select">
          <InputLabel>Mois</InputLabel>
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            label="Mois"
          >
            <MenuItem value=""><em>Tous</em></MenuItem>
            {months.map(month => (
              <MenuItem key={month} value={month}>{month}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" className="filter-select job-filter">
          <InputLabel>Job Title</InputLabel>
          <Select
            value={selectedJob}
            onChange={handleJobChange}
            label="Job Title"
            className="job-title-filter"
          >
            <MenuItem value=""><em>Tous</em></MenuItem>
            {jobs.map(job => (
              <MenuItem key={job} value={job}>{job}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary" aria-label="listes tabs">
        <Tab label={`Candidats Admis (${filteredCandidates.length})`} />
        <Tab label={`Candidats Retenus (${filteredCandidates.length})`} />
        <Tab label={`Candidats Non Retenus (${filteredCandidates.length})`} />
      </Tabs>
      <div className="search-summary-container">
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
      <TableContainer component={Paper} className="candidate-table">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ textAlign: 'left !important' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCandidates.map((candidate) => (
              <TableRow key={candidate.id} onClick={() => handleClick(candidate.id)}>
                {columns.map((column) => (
                  <TableCell key={column.id} className="content-cell">
                    {column.id === 'job' ? (
                      <Link to={`/listesdetails/${candidate.id}`} className="job-title-link">
                        {candidate[column.id]}
                      </Link>
                    ) : (
                      candidate[column.id]
                    )}
                  </TableCell>
                ))}
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

export default Listes;