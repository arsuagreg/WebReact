import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDoctors } from './service/ApiService';
import '../DoctorsList.css';
import arrow from '../assets/arrow.png';

function DoctorsList() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const doctorsData = await fetchDoctors();
                setDoctors(doctorsData);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        getDoctors();
    }, []);

    const handleBackClick = () => {
        navigate('/dashboard');
    };

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const handleCloseModal = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="doctors-list-container">
            <div className="header">
                <h1 className="heading">Doctors List</h1>
                <img
                    src={arrow}
                    alt="Back"
                    className="back-button"
                    onClick={handleBackClick}
                />
            </div>
            <div className="doctors-list">
                {doctors.map((doctor, index) => (
                    <div key={index} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
                        <h2>{doctor.name}</h2>
                        <h3>{doctor.specialty}</h3>
                        <p>{doctor.hospital}</p>
                        <p>{doctor.location}</p>
                    </div>
                ))}
            </div>

            {selectedDoctor && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{selectedDoctor.name}</h2>
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                            <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
                            <p><strong>Location:</strong> {selectedDoctor.location}</p>
                            <p><strong>Certificates:</strong> {selectedDoctor.certificates.join(', ')}</p>
                            <p><strong>Education:</strong></p>
                            <ul>
                                {selectedDoctor.education.map((edu, idx) => (
                                    <li key={idx}>{edu.degree} from {edu.university}</li>
                                ))}
                            </ul>
                            <p><strong>Contact:</strong></p>
                            <p>Email: {selectedDoctor.contact.email}</p>
                            <p>Phone: {selectedDoctor.contact.phone}</p>
                            <p>Address: {selectedDoctor.contact.address.street}, {selectedDoctor.contact.address.city}, {selectedDoctor.contact.address.zip}, {selectedDoctor.contact.address.country}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DoctorsList;
