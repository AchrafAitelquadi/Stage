import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './RightSide.css'; // Ensure this path is correct
import icons from '../importAllSvg';

const agents = [
    { name: 'Samantha William', class: 'Class VII A' },
    { name: 'Tony Soap', class: 'Class VII A' },
    { name: 'Karen Hope', class: 'Class VII A' },
    { name: 'Jordan Nico', class: 'Class VII B' },
    { name: 'Nadila Adja', class: 'Class VII B' },
];

const besoins = [
    { name: 'Samantha William', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' },
    { name: 'Tony Soap', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' },
    { name: 'Jordan Nico', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' },
    { name: 'Nadila Adja', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' },
    { name: 'Nadila Adja', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' },
    { name: 'Nadila Adja', message: 'Lorem ipsum dolor sit amet...', time: '12:45PM' }
];

const RightSidebar = () => {
    return (
        <div className="right-sidebar d-flex flex-column bg-light p-3">
            <div className="profile-section d-flex align-items-center mb-4">
                <div className="profile-icon agent-avatar">
                    <img src={icons.services} alt="Agent" />
                </div>
                <div className="profile-info ms-3">
                    <h4 className="mb-0">Prénom Admin</h4>
                    <span className="text-muted">Admin</span>
                </div>
            </div>
            <div className="agents-section mb-4">
                <h4>Agents</h4>
                <span className="text-muted d-block mb-3">You have 456 students</span>
                <div className="list-group">
                    {agents.map((agent, index) => (
                        <div key={index} className="list-group-item d-flex align-items-center justify-content-between mb-3 px-0">
                            <div className="d-flex align-items-center">
                            <div className="agent-avatar ms-0">
                                <img src={icons.services} alt="Agent" />
                            </div>
                            <div className="agent-info ms-3 me-3">
                                <h5 className="mb-0 text-truncate bold-text" style={{ maxWidth: '150px', fontSize: '13px' }}>{agent.name}</h5>
                                <span className="text-muted">{agent.class}</span>
                            </div>
                            </div>
                            <div className="agent-picture me-0">
                                <img src={icons.email} alt={agent.name} />
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-outline-primary custom-view-more-btn w-100 mt-2">View More</button>
            </div>
            <div className="besoins-section"> 
                <h4>Besoins</h4>
                <div className="list-group">
                    {besoins.map((besoin, index) => (
                        <div key={index} className="list-group-item d-flex align-items-center justify-content-between mb-3 px-0 ">
                            <div className="d-flex align-items-center">
                            <div className="agent-avatar ms-0">
                                <img src={icons.services} alt="Agent" />
                            </div>
                            <div className="besoin-info ms-3 me-3" title={besoin.message}>
                                <h5 className="mb-0 text-truncate bold-text" style={{ maxWidth: '150px', fontSize: '13px'}}>{besoin.name}</h5>
                                <span className="text-muted">{besoin.message}</span>
                            </div>
                            <div className="besoin-time text-muted me-0">
                                <span>{besoin.time}</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-outline-primary custom-view-more-btn w-100 mt-2">View More</button>
            </div>
        </div>
    );
};

export default RightSidebar;
