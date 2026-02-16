import React, { useState } from 'react';
import './App.css';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Hospitals from './pages/Hospitals';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {/* Official Orange Top Bar */}
      <div className="top-gov-bar">
        Government of India | PM-JAY Official Partner Demo
      </div>
      
      {/* Navigation Header */}
      <header className="main-header">
        <div className="container header-flex">
          <div className="logo-section" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
            <h1 className="logo-text">Ayushman<span>Mitra</span></h1>
          </div>
          
          <nav className="nav-menu">
            <button 
              className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('home')}>Home</button>
            <button 
              className={`nav-item ${currentPage === 'about' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('about')}>About Scheme</button>
            <button 
              className={`nav-item ${currentPage === 'hospitals' ? 'active' : ''}`} 
              onClick={() => setCurrentPage('hospitals')}>Hospitals</button>
            <button 
              className="login-action-btn" 
              onClick={() => setCurrentPage('login')}>Login / Register</button>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="main-viewport">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'hospitals' && <Hospitals />}
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      </main>

      <footer className="main-footer">
        <p>© 2026 Ayushman Mitra Demo | Team: Rajashri, Ajinkya, Sejal, Rutuja</p>
      </footer>
    </div>
  );
}

export default App;