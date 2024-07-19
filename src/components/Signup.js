import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createAccount } from './service/ApiService';
import '../App.css';

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const response = await createAccount(formData);
            alert(`Account created: ${response.Message}`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                setErrorMessage(`Account creation failed: ${error.response.data.Message}`);
            } else {
                setErrorMessage(`Account creation failed: ${error.message}`);
            }
        }
    };

    const handleCancel = () => {
        setFormData({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
        setErrorMessage('');
    };

    return (
        <div className="auth-container">
            <h1>Signup</h1>
            <div className="form-container">
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            className="form-input"
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="form-input"
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="form-group">
                        <Link className="form-link" to="/login">Already have an account? Login</Link>
                    </div>
                    <div className="form-actions">
                        <button className="btn" type="submit">Signup</button>
                        <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
