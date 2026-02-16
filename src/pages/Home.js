import React, { useState } from 'react';

const Home = ({ setCurrentPage }) => {
  const [activeStep, setActiveStep] = useState('register');

  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Healthcare For All, Anywhere.</h1>
            <p>Empowering 50 Crore Indian citizens with the PM-JAY mission.</p>
            <button className="cta-btn" onClick={() => setActiveStep('register')}>Get Started</button>
          </div>
          <div className="hero-image">
            <img src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb" alt="Doctor" style={{width:'100%', borderRadius:'15px'}} />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Interactive Step Selection */}
        <div className="steps-grid">
          <div className={`step-card ${activeStep === 'register' ? 'active' : ''}`} onClick={() => setActiveStep('register')}>
            <span style={{fontSize:'40px'}}>📝</span>
            <h3>1. Register</h3>
            <p>Start your journey</p>
          </div>
          <div className={`step-card ${activeStep === 'verify' ? 'active' : ''}`} onClick={() => setActiveStep('verify')}>
            <span style={{fontSize:'40px'}}>⚖️</span>
            <h3>2. Verify</h3>
            <p>Check eligibility</p>
          </div>
          <div className={`step-card ${activeStep === 'card' ? 'active' : ''}`} onClick={() => setActiveStep('card')}>
            <span style={{fontSize:'40px'}}>💳</span>
            <h3>3. Get Card</h3>
            <p>Download E-Card</p>
          </div>
        </div>

        {/* Dynamic Forms */}
        <div className="action-area">
          {activeStep === 'register' && (
            <div className="form-box">
              <h2 style={{color: '#0056b3'}}>New Beneficiary Registration</h2>
              <input type="text" placeholder="Full Name as per Aadhaar" className="full-input" />
              <input type="text" placeholder="Aadhaar Number (12 Digit)" className="full-input" />
              <input type="tel" placeholder="Mobile Number" className="full-input" />
              <button className="cta-btn" style={{width:'100%', background:'#0056b3'}}>Submit Application</button>
            </div>
          )}

          {activeStep === 'verify' && (
            <div className="form-box">
              <h2 style={{color: '#0056b3'}}>Eligibility Check</h2>
              <p>Enter your family annual income to check PM-JAY eligibility.</p>
              <input type="number" placeholder="Annual Income (₹)" className="full-input" />
              <button className="cta-btn" style={{width:'100%', background:'#0056b3'}}>Check Now</button>
            </div>
          )}

          {activeStep === 'card' && (
            <div className="form-box" style={{textAlign:'center'}}>
              <h2 style={{color: '#0056b3'}}>Download Ayushman Card</h2>
              <p>Already Registered? Enter your ID below.</p>
              <input type="text" placeholder="Registration ID / Aadhaar" className="full-input" />
              <button className="cta-btn" style={{width:'100%', background:'#0056b3'}}>Download PDF Card</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;