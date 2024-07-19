<<<<<<< HEAD
import React from 'react';
=======
import logo from './logo.svg';
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
import DoctorsList from './components/DoctorsList';
import AddDoctor from './components/AddDoctor';
=======
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8

function App() {
  return(
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/doctors" element={<DoctorsList/>} />
            <Route path="/add-doctor" element={<AddDoctor />} />
=======
>>>>>>> f679895b51856268eb11053aec83fefa70b479c8
          </Routes>
        </div>
    </Router>
  );
}

export default App;
