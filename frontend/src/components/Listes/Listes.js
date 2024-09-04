import React, { useState } from 'react';
import './Listes.css';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, TextField, FormControl, Select, MenuItem, InputLabel, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import icons from '../importAllSvg';
import { Link } from 'react-router-dom';

import ListesDetails from '../ListesDetails/ListesDetails';



const candidatesAdmis = [
    { id: "#1829102991", job: "Engineer", nombresCandidatures: 5, shortlisted: 3, startDate: "2024-09-01", location: "New York", experience: "5 years" },
    { id: "#1829102992", job: "Designer", nombresCandidatures: 4, shortlisted: 2, startDate: "2024-09-15", location: "San Francisco", experience: "3 years" },
    { id: "#1829102993", job: "Manager", nombresCandidatures: 6, shortlisted: 4, startDate: "2024-10-01", location: "Los Angeles", experience: "7 years" },
    { id: "#1829102994", job: "Developer", nombresCandidatures: 7, shortlisted: 5, startDate: "2024-10-15", location: "Chicago", experience: "4 years" },
    { id: "#1829102995", job: "Analyst", nombresCandidatures: 8, shortlisted: 6, startDate: "2024-11-01", location: "Seattle", experience: "2 years" },
    { id: "#1829102996", job: "Consultant", nombresCandidatures: 5, shortlisted: 3, startDate: "2024-11-15", location: "Boston", experience: "6 years" },
    { id: "#1829102997", job: "Technician", nombresCandidatures: 4, shortlisted: 2, startDate: "2024-12-01", location: "Austin", experience: "1 year" },
    { id: "#1829102998", job: "Coordinator", nombresCandidatures: 9, shortlisted: 7, startDate: "2024-12-15", location: "Denver", experience: "8 years" }
  ];
  
  const candidatesRetenus = [
    { id: "#1829102999", job: "Consultant", nombresCandidatures: 6, shortlisted: 4, startDate: "2024-10-01", location: "Philadelphia", experience: "5 years" },
    { id: "#1829103000", job: "Analyst", nombresCandidatures: 7, shortlisted: 5, startDate: "2024-10-15", location: "Houston", experience: "3 years" },
    { id: "#1829103001", job: "Manager", nombresCandidatures: 5, shortlisted: 3, startDate: "2024-11-01", location: "San Diego", experience: "6 years" },
    { id: "#1829103002", job: "Developer", nombresCandidatures: 4, shortlisted: 2, startDate: "2024-11-15", location: "Dallas", experience: "4 years" },
    { id: "#1829103003", job: "Designer", nombresCandidatures: 8, shortlisted: 6, startDate: "2024-12-01", location: "San Jose", experience: "2 years" },
    { id: "#1829103004", job: "Technician", nombresCandidatures: 6, shortlisted: 4, startDate: "2024-12-15", location: "Jacksonville", experience: "3 years" },
    { id: "#1829103005", job: "Coordinator", nombresCandidatures: 7, shortlisted: 5, startDate: "2025-01-01", location: "Columbus", experience: "7 years" },
    { id: "#1829103006", job: "Consultant", nombresCandidatures: 5, shortlisted: 3, startDate: "2025-01-15", location: "Indianapolis", experience: "4 years" }
  ];
  
  const candidatesNonRetenus = [
    { id: "#1829103007", job: "Developer", nombresCandidatures: 8, shortlisted: 1, startDate: "N/A", location: "Charlotte", experience: "5 years" },
    { id: "#1829103008", job: "Technician", nombresCandidatures: 7, shortlisted: 0, startDate: "N/A", location: "San Antonio", experience: "3 years" },
    { id: "#1829103009", job: "Analyst", nombresCandidatures: 9, shortlisted: 2, startDate: "N/A", location: "Detroit", experience: "4 years" },
    { id: "#1829103010", job: "Manager", nombresCandidatures: 5, shortlisted: 1, startDate: "N/A", location: "El Paso", experience: "6 years" },
    { id: "#1829103011", job: "Consultant", nombresCandidatures: 4, shortlisted: 0, startDate: "N/A", location: "Memphis", experience: "2 years" },
    { id: "#1829103012", job: "Coordinator", nombresCandidatures: 6, shortlisted: 1, startDate: "N/A", location: "Baltimore", experience: "8 years" },
    { id: "#1829103013", job: "Designer", nombresCandidatures: 5, shortlisted: 0, startDate: "N/A", location: "Washington", experience: "7 years" },
    { id: "#1829103014", job: "Technician", nombresCandidatures: 7, shortlisted: 1, startDate: "N/A", location: "Boston", experience: "3 years" }
  ];

const Listes = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const itemsPerPage = 4; // Adjusted to show 2 pages with 4 items each
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setCurrentPage(1); // Reset page number when switching tabs
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setCurrentPage(1); // Reset page number when changing year
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setCurrentPage(1); // Reset page number when changing month
  };

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
    setCurrentPage(1); // Reset page number when changing job
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

  // Collect all unique job titles from candidates
  const allCandidates = [...candidatesAdmis, ...candidatesRetenus, ...candidatesNonRetenus];
  const jobs = Array.from(new Set(allCandidates.map(candidate => candidate.job)));

  const columns = [
    { id: 'job', label: 'Job Title' },
    { id: 'nombresCandidatures', label: 'Nombres Candidatures' },
    { id: 'shortlisted', label: 'Shortlisted' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'location', label: 'Location' }, // Added column
    { id: 'experience', label: 'Experience' } // Added column
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
            candidate[column.id] // This renders the other columns normally
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
