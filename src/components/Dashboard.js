import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Dashboard.css';
import logoutIcon from '../assets/logout.png';

const Dashboard = () => {
    const navigate = useNavigate();
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

    const handleShowListClick = () => {
        navigate('/doctors');
    };

    const handleAddDataClick = () => {
        navigate('/add-doctor');
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirmation(true);
    };

    const handleLogoutConfirm = () => {
        navigate('/login');
    };

    const handleLogoutCancel = () => {
        setShowLogoutConfirmation(false);
    };

    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Dashboard</h1>
                <img 
                    src={logoutIcon} 
                    alt="Logout" 
                    className="logout-icon" 
                    onClick={handleLogoutClick} 
                />
            </div>
            <div className="cards-container">
                <div className="card" onClick={handleShowListClick}>
                    <h2>Show List</h2>
                </div>
                <div className="card" onClick={handleAddDataClick}>
                    <h2>Add Data</h2>
                </div>
            </div>
            {showLogoutConfirmation && (
                <div className="logout-confirmation">
                    <p>Are you sure you want to logout?</p>
                    <button className="confirm-button" onClick={handleLogoutConfirm}>
                        Yes
                    </button>
                    <button className="cancel-button" onClick={handleLogoutCancel}>
                        No
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
