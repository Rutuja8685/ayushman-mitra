import React from 'react';

const Hospitals = () => (
  <div className="container" style={{padding: '50px 20px'}}>
    <h2 className="section-title">Search Empanelled Hospitals</h2>
    <div className="info-box" style={{background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #ddd'}}>
      <p>Enter your city or PIN code to find nearby healthcare facilities.</p>
      <input type="text" placeholder="Search..." style={{width: '100%', padding: '10px', marginTop: '10px'}} />
    </div>
  </div>
);

export default Hospitals;