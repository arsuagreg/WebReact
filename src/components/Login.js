import React from 'react';
import {Link} from 'react-router-dom';



function Login() {
    return (
        <div className="auth-container">
            <h1>Login</h1>
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-input" type="text" id="username" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" type="password" id="password" />
                    </div>
                    <div className="form-group">
                        <Link className="form-link" to="/signup">Signup</Link>
                    </div>
                    <div className="form-actions">
                        <button className="btn" type="submit">Login</button>
                        <button className="btn btn-secondary" type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
