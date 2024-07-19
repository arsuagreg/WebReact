<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from './service/ApiService';
import '../App.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAccount(formData);
            alert(`Logged in: ${response.Message}`);
            navigate('/dashboard'); 
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                setErrorMessage(`Login failed: ${error.response.data.Message}`);
            } else {
                setErrorMessage(`Login failed: ${error.message}`);
            }
        }
    };

    const handleCancel = () => {
        setFormData({
            username: '',
            password: ''
        });
        setErrorMessage('');
    };

=======
import React from 'react';
import {Link} from 'react-router-dom';



function Login() {
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
    return (
        <div className="auth-container">
            <h1>Login</h1>
            <div className="form-container">
<<<<<<< HEAD
                <form onSubmit={handleLogin}>
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
                    {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
=======
                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-input" type="text" id="username" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" type="password" id="password" />
                    </div>
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
                    <div className="form-group">
                        <Link className="form-link" to="/signup">Signup</Link>
                    </div>
                    <div className="form-actions">
                        <button className="btn" type="submit">Login</button>
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

export default Login;
