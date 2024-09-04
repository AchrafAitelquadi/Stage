  import React, { useState, useMemo } from 'react';
  import './Agents.css';
  import { useNavigate } from 'react-router-dom';
  import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Checkbox, 
    IconButton, 
    Button, 
    TextField, 
    Menu, 
    MenuItem, 
    Checkbox as MuiCheckbox, 
    FormControlLabel,
    Select // Keep the Select import here 
  } from '@mui/material';import icons from '../importAllSvg';
  const initialAgents = [
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
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Bruce Wayne', code: '#111111111', date: 'July 20, 2021', service: 'Alfred Wayne', post: 'Yogyakarta', grade: 'VII B' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },{ name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Bruce Wayne', code: '#111111111', date: 'July 20, 2021', service: 'Alfred Wayne', post: 'Yogyakarta', grade: 'VII B' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
    { name: 'Clark Kent', code: '#222222222', date: 'August 30, 2021', service: 'Martha Kent', post: 'Jakarta', grade: 'VII C' },
  ];

  const Agent = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgents, setSelectedAgents] = useState(new Set());
    const [selectedGrade, setSelectedGrade] = useState([]);
    const [selectedService, setSelectedService] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [contextMenuAnchor, setContextMenuAnchor] = useState(null);
    const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
    const [agents, setAgents] = useState(initialAgents);



    const itemsPerPage = 7;
    const navigate = useNavigate();

    const uniqueGrades = useMemo(() => {
      return [...new Set(agents.map(agent => agent.grade))];
    }, []);

    const uniqueServices = useMemo(() => {
      return [...new Set(agents.map(agent => agent.service))];
    }, []);

    const handleGradeChange = (event) => {
      const value = event.target.value;
      setSelectedGrade(prev => 
        prev.includes(value) ? prev.filter(grade => grade !== value) : [...prev, value]
      );
    };
    
    const handleServiceChange = (event) => {
      const value = event.target.value;
      setSelectedService(prev => 
        prev.includes(value) ? prev.filter(service => service !== value) : [...prev, value]
      );
    };

    const handleFilterClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
      setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const handleSelectChange = (index) => {
      const uniqueKey = index + (currentPage - 1) * itemsPerPage;
      setSelectedAgents(prev => {
        const newSelected = new Set(prev);
        if (newSelected.has(uniqueKey)) {
          newSelected.delete(uniqueKey);
        } else {
          newSelected.add(uniqueKey);
        }
        return newSelected;
      });
    };

    

    const handleSelectAllChange = (event) => {
      const isChecked = event.target.checked;
      setSelectAll(isChecked);

      if (isChecked) {
          // Select all agents across the entire dataset
          const allKeys = new Set(agents.map((_, index) => index));
          setSelectedAgents(allKeys);
      } else {
          // Deselect all agents
          setSelectedAgents(new Set());
      }
    };

    const handleContextMenuClick = (event, index) => {
      event.preventDefault();
      setSelectedAgentIndex(index);
      setContextMenuAnchor(event.currentTarget);
    };
    
    const handleContextMenuClose = () => {
      setContextMenuAnchor(null);
    };
    
    const handleDelete = () => {
      if (selectedAgentIndex !== null) {
        const updatedAgents = agents.filter((_, index) => index !== selectedAgentIndex);
        setAgents(updatedAgents);
        setContextMenuAnchor(null);
        setSelectedAgentIndex(null);
      }
    };
    
    
    
    
    const filteredAgents = agents.filter(agent => 
      (selectedGrade.length === 0 || selectedGrade.includes(agent.grade)) &&
      (selectedService.length === 0 || selectedService.includes(agent.service)) &&
      (agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.code.toLowerCase().includes(search.toLowerCase()) ||
      agent.service.toLowerCase().includes(search.toLowerCase()) ||
      agent.post.toLowerCase().includes(search.toLowerCase()) ||
      agent.grade.toLowerCase().includes(search.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);
    const paginatedAgents = filteredAgents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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
          <h2>Agents</h2>
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
          <Button
              variant="outlined"
              className="filter-btn"
              onClick={handleFilterClick}
            >
              Filtrer par <span className="arrow-down">▼</span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleFilterClose}
              className="filter-menu"
            >
              <div className="filter-options">
                <h4>Filter by Grade</h4>
                {uniqueGrades.map((grade) => (
                  <MenuItem key={grade}>
                    <FormControlLabel
                      control={
                        <MuiCheckbox
                          value={grade}
                          checked={selectedGrade.includes(grade)}
                          onChange={handleGradeChange}
                        />
                      }
                      label={grade}
                    />
                  </MenuItem>
                ))}
                <h4>Filter by Service</h4>
                {uniqueServices.map((service) => (
                  <MenuItem key={service}>
                    <FormControlLabel
                      control={
                        <MuiCheckbox
                          value={service}
                          checked={selectedService.includes(service)}
                          onChange={handleServiceChange}
                        />
                      }
                      label={service}
                    />
                  </MenuItem>
                ))}
              </div>
            </Menu>
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
                  <Checkbox
                      checked={selectAll}
                      indeterminate={selectedAgents.size > 0 && selectedAgents.size < agents.length}
                      onChange={handleSelectAllChange}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: 'left !important' }}>Nom</TableCell>
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
            {paginatedAgents.map((agent, index) => {
                const uniqueKey = index + (currentPage - 1) * itemsPerPage;
                return (
                  <TableRow key={uniqueKey}
                  onContextMenu={(event) => handleContextMenuClick(event, uniqueKey)}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedAgents.has(uniqueKey)}
                        onChange={() => handleSelectChange(index)}
                      />
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
                    <IconButton className="action-btn" onClick={(event) => handleContextMenuClick(event, uniqueKey)}><img src={icons.more} alt="more" /></IconButton>
                  </TableCell>
                </TableRow>
              )})}
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
        <Menu
          anchorEl={contextMenuAnchor}
          open={Boolean(contextMenuAnchor)}
          onClose={handleContextMenuClose}
        >
          <MenuItem onClick={handleDelete}>Supprimer</MenuItem>
        </Menu>
      </div>
    );
  };

  export default Agent;
