import React from 'react';
import { useParams } from 'react-router-dom';
import icons from '../importAllSvg';
import './AfficherCommission.css';

const commissionData = [
  {
    name: 'Commission de pré-séléction',
    president: 'Mana William',
    dateCreation: '13/07/2024',
    info2: 'Lorem ipsum dolor sit amet',
    info3: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    members: [
      { name: 'Dimitres Viga', specialite: 'Mathematics' },
      { name: 'Tom Housenburg', specialite: 'Science' },
      { name: 'Dana Benevista', specialite: 'Art' },
      { name: 'Salvadore Morbeau', specialite: 'Biology' },
      { name: 'Dana Benevista', specialite: 'Art' },
      { name: 'Salvadore Morbeau', specialite: 'Biology' },
      { name: 'Dana Benevista', specialite: 'Art' },
      { name: 'Salvadore Morbeau', specialite: 'Biology' },
    ]
  },
  {
    name: 'Commission Production',
    president: 'James Soap',
    dateCreation: '15/08/2024',
    info2: 'Ut enim ad minim veniam',
    info3: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    members: [
      { name: 'Alice Johnson', specialite: 'Engineering' },
      { name: 'Bob Smith', specialite: 'Design' },
      { name: 'Carol White', specialite: 'Marketing' },
      { name: 'David Brown', specialite: 'Finance' },
    ]
  },
  // Add more commissions as needed
];

const AfficherCommission = () => {
  const { name } = useParams();
  const commission = commissionData.find(c => c.name === decodeURIComponent(name));

  if (!commission) {
    return <div>Commission not found</div>;
  }

  return (
    <div className="container-fluid afficher-commission">
      <div className="row align-items-center mb-4">
        <div className="col color">
          <h2>{commission.name}</h2>
        </div>
        <div className="col-auto">
          <div className="d-flex align-items-center">
            <button className="btn btn-link"><img src={icons.parameter} alt="Settings" /></button>
            <div className="ms-2">
              <div>Nabilin A.</div>
              <small className="text-muted">Admin</small>
            </div>
            <img src={icons.services} alt="Avatar" className="ms-2 rounded-circle admin-avatar" />
          </div>
        </div>
      </div>

      <div className="commission-content">
        <div className="members-section">
          <div className="row">
            {commission.members.map((member, index) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4" key={index}>
                <div className="card member-card">
                  <div className="card-body text-center">
                    <div className="member-avatar mx-auto mb-3"></div>
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.specialite}</p>
                    <div>
                      <button className="btn btn-sm btn-outline-primary me-2"><img src={icons.phone} alt="Phone" /></button>
                      <button className="btn btn-sm btn-outline-primary"><img src={icons.email} alt="Email" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-section">
          <p><strong>Président de la commission:</strong> {commission.president}</p>
          <p><strong>Date création:</strong> {commission.dateCreation}</p>
          <p><strong>Information 2:</strong> {commission.info2}</p>
          <p><strong>Information 3:</strong> {commission.info3}</p>
        </div>
      </div>
    </div>
  );
};

export default AfficherCommission;
