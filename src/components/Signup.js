<<<<<<< HEAD
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

=======
import React from 'react';
import {Link} from 'react-router-dom';

function Signup() {
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
    return (
        <div className="auth-container">
            <h1>Signup</h1>
            <div className="form-container">
<<<<<<< HEAD
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
=======
                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" type="text" id="email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-input" type="text" id="username" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" type="password" id="password" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                        <input className="form-input" type="password" id="confirm-password" />
                    </div>
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
                    <div className="form-group">
                        <Link className="form-link" to="/login">Already have an account? Login</Link>
                    </div>
                    <div className="form-actions">
                        <button className="btn" type="submit">Signup</button>
<<<<<<< HEAD
                        <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
=======
                        <button className="btn btn-secondary" type="button">Cancel</button>
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
