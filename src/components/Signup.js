import React from 'react';
import {Link} from 'react-router-dom';

function Signup() {
    return (
        <div className="auth-container">
            <h1>Signup</h1>
            <div className="form-container">
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
                    <div className="form-group">
                        <Link className="form-link" to="/login">Already have an account? Login</Link>
                    </div>
                    <div className="form-actions">
                        <button className="btn" type="submit">Signup</button>
                        <button className="btn btn-secondary" type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
