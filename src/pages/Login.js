import React, { useState } from 'react';

const Login = ({ setCurrentPage }) => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleAction = () => {
    if (!otpSent) {
      // Logic for sending OTP
      if (inputValue.length > 0) {
        setOtpSent(true);
      } else {
        alert("Please enter your details first.");
      }
    } else {
      // Logic for verifying OTP
      setOtpSent(false);
      setInputValue(''); // Clear input for next step
      
      if (step < 3) {
        setStep(step + 1);
      } else {
        // SUCCESS: Redirect to Dashboard
        setCurrentPage('dashboard');
      }
    }
  };

  const getStepLabel = () => {
    if (step === 1) return "Mobile Number";
    if (step === 2) return "Email Address";
    return "Aadhaar Number";
  };

  return (
    <div className="login-container" style={{ padding: '60px 20px' }}>
      <div className="login-box" style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '30px', 
        background: '#fff', 
        borderRadius: '15px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Secure Login</h2>
        
        {/* Progress Tracker */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          {[1, 2, 3].map((num) => (
            <div key={num} style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: step >= num ? '#007bff' : '#eee',
              color: step >= num ? '#fff' : '#888',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              {num}
            </div>
          ))}
        </div>

        <div className="form-group">
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            {getStepLabel()}
          </label>
          <input 
            type="text" 
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter your ${getStepLabel()}`}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '15px' }}
          />
        </div>

        {otpSent && (
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>One-Time Password (OTP)</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter 6-digit OTP"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '15px' }}
            />
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Demo Hint: You can enter any numbers to proceed.</p>
          </div>
        )}

        <button 
          className="btn btn-primary" 
          onClick={handleAction}
          style={{ width: '100%', padding: '12px', fontWeight: 'bold' }}
        >
          {otpSent ? 'Verify & Continue' : 'Send OTP'}
        </button>

        {step > 1 && !otpSent && (
          <button 
            onClick={() => setStep(step - 1)}
            style={{ width: '100%', background: 'none', border: 'none', color: '#666', marginTop: '10px', cursor: 'pointer' }}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;