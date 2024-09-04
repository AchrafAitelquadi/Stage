import React, { useState } from 'react';
import './Profile.css';
import { PiSignOut } from 'react-icons/pi';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [area, setArea] = useState('');
  const [education, setEducation] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordToDelete, setPasswordToDelete] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobileNumber':
        setMobileNumber(value);
        break;
      case 'address1':
        setAddress1(value);
        break;
      case 'address2':
        setAddress2(value);
        break;
      case 'postcode':
        setPostcode(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'area':
        setArea(value);
        break;
      case 'education':
        setEducation(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'region':
        setRegion(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'verifyPassword':
        setVerifyPassword(value);
        break;
      case 'passwordToDelete':
        setPasswordToDelete(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      firstName, lastName, email, mobileNumber, address1, address2,
      postcode, state, area, education, country, region
    });
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    if (newPassword === verifyPassword) {
      console.log('Password updated:', newPassword);
      setShowPasswordModal(false);
    } else {
      console.log('Passwords do not match');
    }
  };

  const handleDeleteAccount = (event) => {
    event.preventDefault();
    console.log('Account deleted with password:', passwordToDelete);
    setShowDeleteModal(false);
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Profile"
            />
            <span className="font-weight-bold">{firstName} {lastName}</span>
            <span className="text-black-50">{email}</span>
            <button className="btn btn-signout mt-3">
              <PiSignOut style={{ marginRight: '8px' }} />
              Sign Out
            </button>
          </div>
        </div>

        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="surname"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    name="address1"
                    value={address1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    name="address2"
                    value={address2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter postcode"
                    name="postcode"
                    value={postcode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter state"
                    name="state"
                    value={state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter area"
                    name="area"
                    value={area}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter education"
                    name="education"
                    value={education}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter country"
                    name="country"
                    value={country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter region"
                    name="region"
                    value={region}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button type="submit" className="btn btn-primary profile-button">Save Profile</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience mb-3">
              <span>Edit Experience</span>
              <span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span>
            </div>
            <div className="col-md-12">
            <label className="labels">Experience in Designing</label>
              <input type="text" className="form-control" placeholder="experience" value="" />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input type="text" className="form-control" placeholder="additional details" value="" />
            </div>
            <div className="mt-5 text-center">
              <button onClick={() => setShowPasswordModal(true)} className="btn btn-outline-secondary mr-2 profile-button">Change Password</button>
              <button onClick={() => setShowDeleteModal(true)} className="btn btn-outline-danger profile-button">Delete Account</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Password Change */}
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5>Change Password</h5>
            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Verify Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="verifyPassword"
                  value={verifyPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-custom">New Password</button>
                <button onClick={() => setShowPasswordModal(false)} className="btn btn-secondary ml-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Account Deletion */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5>Delete Account</h5>
            <form onSubmit={handleDeleteAccount}>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordToDelete"
                  value={passwordToDelete}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-danger">Delete</button>
                <button onClick={() => setShowDeleteModal(false)} className="btn btn-secondary ml-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

