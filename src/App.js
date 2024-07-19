import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import DoctorsList from './components/DoctorsList';
import AddDoctor from './components/AddDoctor';

function App() {
  return(
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/doctors" element={<DoctorsList/>} />
            <Route path="/add-doctor" element={<AddDoctor />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
