import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoctor } from './service/ApiService';
import '../AddDoctor.css';
import arrow from '../assets/arrow.png';

function AddDoctor() {
    const initialFormData = {
        name: '',
        specialty: '',
        hospital: '',
        location: '',
        certificates: [''],
        education: [{ degree: '', university: '' }],
        contact: {
            email: '',
            phone: '',
            address: {
                street: '',
                city: '',
                zip: '',
                country: ''
            }
        }
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys.length === 1) {
            setFormData({ ...formData, [name]: value });
        } else if (keys.length === 2) {
            setFormData({ ...formData, [keys[0]]: { ...formData[keys[0]], [keys[1]]: value } });
        } else if (keys.length === 3) {
            setFormData({
                ...formData,
                [keys[0]]: {
                    ...formData[keys[0]],
                    [keys[1]]: { ...formData[keys[0]][keys[1]], [keys[2]]: value }
                }
            });
        }
    };

    const handleCertificatesChange = (e, index) => {
        const { value } = e.target;
        const updatedCertificates = formData.certificates.map((cert, i) =>
            i === index ? value : cert
        );
        setFormData({ ...formData, certificates: updatedCertificates });
    };

    const handleAddCertificate = () => {
        setFormData({ ...formData, certificates: [...formData.certificates, ''] });
    };

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = formData.education.map((edu, i) =>
            i === index ? { ...edu, [name]: value } : edu
        );
        setFormData({ ...formData, education: updatedEducation });
    };

    const handleAddEducation = () => {
        setFormData({ ...formData, education: [...formData.education, { degree: '', university: '' }] });
    };

    const handleBackClick = () => {
        navigate('/dashboard');
    };

    const handleCancelClick = () => {
        setFormData(initialFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoctor(formData);
            alert('Doctor added successfully');
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage('Error adding doctor: ' + (error.response?.data?.Message || error.message));
        }
    };

    return (
        <div className="add-doctor-container">
            <div className="header">
                <h1 className="heading">Add Doctor</h1>
                <img
                    src={arrow}
                    alt="Back"
                    className="back-button"
                    onClick={handleBackClick}
                />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Specialty</label>
                    <input
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Hospital</label>
                    <input
                        type="text"
                        name="hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                {formData.certificates.map((cert, index) => (
                    <div key={index} className="form-group form-group-dynamic">
                        <label className="form-label">Certificate {index + 1}</label>
                        <input
                            type="text"
                            value={cert}
                            onChange={(e) => handleCertificatesChange(e, index)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddCertificate}>
                    Add Certificate
                </button>
                {formData.education.map((edu, index) => (
                    <div key={index} className="form-group form-group-dynamic">
                        <label className="form-label">Education {index + 1}</label>
                        <input
                            type="text"
                            name="degree"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(e, index)}
                            placeholder="Degree"
                            required
                        />
                        <input
                            type="text"
                            name="university"
                            value={edu.university}
                            onChange={(e) => handleEducationChange(e, index)}
                            placeholder="University"
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddEducation}>
                    Add Education
                </button>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="contact.email"
                        value={formData.contact.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        name="contact.phone"
                        value={formData.contact.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Street</label>
                    <input
                        type="text"
                        name="contact.address.street"
                        value={formData.contact.address.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        name="contact.address.city"
                        value={formData.contact.address.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Zip</label>
                    <input
                        type="text"
                        name="contact.address.zip"
                        value={formData.contact.address.zip}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                        type="text"
                        name="contact.address.country"
                        value={formData.contact.address.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="button-group">
                    <button className="btn" type="submit">Add Doctor</button>
                    <button className="btn" type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddDoctor;
