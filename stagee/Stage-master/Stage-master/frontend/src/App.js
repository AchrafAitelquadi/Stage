import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useDisableZoom from './DisableZoom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Agents from './components/Agents/Agents';
import AddAgent from './components/AddAgent/AddAgent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import MenuIcon from '@mui/icons-material/Menu';
import Services from './components/Services/Services';
import Commissions from './components/Commissions/Commissions';
import AjouterCommission from './components/AjouterCommission/AjouterCommission';
import Calendrier from './components/Calendrier/Calendrier';
import CandidateList from './components/Candidatures/Candidatures';
import AfficherCommission from './components/AfficherCommission/AfficherCommission';
import CandidaturesDetail from './components/CandidaturesDetail/CandidaturesDetail';
import Convocation from './components/Convocation/Convocation'; 
import Besoins from './components/Besoins/Besoins';
import Listes from './components/Listes/Listes'; 
import ListesDetails from './components/ListesDetails/ListesDetails';
import Avis from './components/Avis/Avis';  
import AvisDetails from './components/AvisDetails/AvisDetails';  
import Epreuve from './components/Epreuve/Epreuve';  
import EpreuveDetails from './components/EpreuveDetails/EpreuveDetails'; 

function App() {
    useDisableZoom();
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1300);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1300) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className="app d-flex">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className={`content flex-grow-1 ${isSidebarOpen ? 'shifted' : ''}`}>
                    {windowWidth <= 1300 && (
                        <button className="btn btn-primary mt-3 ml-3" onClick={toggleSidebar}>
                            <MenuIcon />
                        </button>
                    )}
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/agents" element={<Agents />} />
                        <Route path="/agents/ajouteragent" element={<AddAgent />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/commissions" element={<Commissions />} />
                        <Route path="/commissions/ajoutercommission" element={<AjouterCommission />} />
                        <Route path="/calendrier" element={<Calendrier />} />
                        <Route path="/candidatures" element={<CandidateList />} />
                        <Route path="/candidaturesdetail/:id" element={<CandidaturesDetail />} />
                        <Route path="/affichercommission/:name" element={<AfficherCommission />} />
                        <Route path="/convocations" element={<Convocation />} /> 
                        <Route path="/besoins" element={<Besoins />} />
                        <Route path="/listes" element={<Listes />} />
                        <Route path="/listesdetails/:id" element={<ListesDetails />} />
                        <Route path="/avis" element={<Avis />} /> 
                        <Route path="/avisdetails" element={<AvisDetails />} />  {/* Add AvisDetails route */}
                        <Route path="/epreuve" element={<Epreuve />} />  {/* Add Epreuve route */}
                        <Route path="/epreuvedetails" element={<EpreuveDetails />} /> 
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
