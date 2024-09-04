import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import './AddAgent.css';
import icons from '../importAllSvg';
import { IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const AddAgent = () => {
  const navigate = useNavigate();
  const initialFormData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    address: '',
    email: '',
    phoneNumber: '',
    civilStatus: '',
    childrenCount: '',
    postalCode: '',
    photo: null,
    hireDate: '',
    service: '',
    body: '',
    specialty: '',
    diploma: '',
    role: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [childrenCountError, setChildrenCountError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Clear form data when component mounts
    localStorage.removeItem('formData');
  }, []);

  useEffect(() => {
    if (step === 1) {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, [step]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'phoneNumber') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        setPhoneNumberError('Phone number must be exactly 10 digits.');
      } else {
        setPhoneNumberError('');
      }
    }

    if (name === 'childrenCount') {
      const childrenCountRegex = /^\d+$/;
      if (!childrenCountRegex.test(value) || value < 0) {
        setChildrenCountError('Children count must be a positive number.');
      } else {
        setChildrenCountError('');
      }
    }

    if (name === 'postalCode') {
      const postalCodeRegex = /^\d{5}$/;
      if (!postalCodeRegex.test(value)) {
        setPostalCodeError('Postal code must be exactly 5 digits.');
      } else {
        setPostalCodeError('');
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/') && file.size <= 5000000) { // Limit to 5MB
      setFormData({ ...formData, photo: file });
      setPhotoError('');
    } else {
      setPhotoError('Please upload a valid image file (max 5MB).');
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles[0] && acceptedFiles[0].type.startsWith('image/') && acceptedFiles[0].size <= 5000000) {
      setFormData({ ...formData, photo: acceptedFiles[0] });
      setPhotoError('');
    } else {
      setPhotoError('Please upload a valid image file (max 5MB).');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*', maxSize: 5000000 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !phoneNumberError && !childrenCountError && !postalCodeError && !photoError) {
      if (step === 1) {
        setStep(2);
      } else {
        console.log(formData); // Replace with actual form submission logic
        localStorage.removeItem('formData');
        navigate('/agents');
      }
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate('/agents');
    } else {
      setStep(1);
    }
  };

  const preventInvalidInput = (e) => {
    const invalidChars = ['-', 'e', 'E', '+', '.'];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleChildrenCountInput = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, childrenCount: numericValue });

    if (numericValue < 0) {
      setChildrenCountError('Children count must be a positive number.');
    } else {
      setChildrenCountError('');
    }
  };

  const handlePhoneNumberInput = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, phoneNumber: numericValue });

    if (numericValue.length !== 10) {
      setPhoneNumberError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handlePostalCodeInput = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, postalCode: numericValue });

    if (numericValue.length !== 5) {
      setPostalCodeError('Postal code must be exactly 5 digits.');
    } else {
      setPostalCodeError('');
    }
  };

  return (
    <div className="page-container">
      <div className="header">
        <BsArrowLeft className="back-arrow" onClick={handleBack} />
        <div className="admin-info">
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
      <Container className="form-container">
        <h3 className="form-title">{step === 1 ? 'Informations Personnelles' : 'Informations Professionnelles'}</h3>
        <Form onSubmit={handleSubmit} className="agent-form">
          {step === 1 ? (
            <>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>Prénom*</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Nom de famille*</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBirthDate">
                    <Form.Label>Date de naissance*</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Adresse*</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                    {emailError && <small className="text-danger">{emailError}</small>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Numéro de téléphone*</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handlePhoneNumberInput}
                      required
                      inputMode="numeric"
                      onKeyPress={preventInvalidInput}
                      autoComplete="off"
                    />
                    {phoneNumberError && <small className="text-danger">{phoneNumberError}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formCivilStatus">
                    <Form.Label>Civilité*</Form.Label>
                    <Form.Control
                      type="text"
                      name="civilStatus"
                      value={formData.civilStatus}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formChildrenCount">
                    <Form.Label>Nombre d'enfants*</Form.Label>
                    <Form.Control
                      type="number"
                      name="childrenCount"
                      value={formData.childrenCount}
                      onChange={handleChildrenCountInput}
                      required
                      onKeyPress={preventInvalidInput}
                      autoComplete="off"
                    />
                    {childrenCountError && <small className="text-danger">{childrenCountError}</small>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formPostalCode">
                    <Form.Label>Code postal*</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handlePostalCodeInput}
                      required
                      inputMode="numeric"
                      onKeyPress={preventInvalidInput}
                      autoComplete="off"
                    />
                    {postalCodeError && <small className="text-danger">{postalCodeError}</small>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhoto">
                    <Form.Label>Photo*</Form.Label>
                    <div
                      className={`photo-upload ${isDragActive ? 'active-dropzone' : ''}`}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <div className="photo-placeholder">
                        {isDragActive ? 'Drop the files here ...' : 'Drag and drop or click here to select file'}
                      </div>
                      {photoError && <small className="text-danger">{photoError}</small>}
                      {formData.photo && (
                      <div className="photo-preview">
                        {formData.photo && <span>{formData.photo.name}</span>}
                      </div>
                      )}
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formHireDate">
                    <Form.Label>Date d'embauche*</Form.Label>
                    <Form.Control
                      type="date"
                      name="hireDate"
                      value={formData.hireDate}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formService">
                    <Form.Label>Service*</Form.Label>
                    <Form.Control
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBody">
                    <Form.Label>Corps*</Form.Label>
                    <Form.Control
                      type="text"
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formSpecialty">
                    <Form.Label>Spécialité*</Form.Label>
                    <Form.Control
                      type="text"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formDiploma">
                    <Form.Label>Diplome*</Form.Label>
                    <Form.Control
                      type="text"
                      name="diploma"
                      value={formData.diploma}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formRole">
                    <Form.Label>Role*</Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}
          <Button variant="success" type="submit" className="submit-btn">
            {step === 1 ? 'Suivant' : 'Soumettre'}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddAgent;
