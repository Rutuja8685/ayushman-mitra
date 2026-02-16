import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>About Ayushman Bharat</h1>
      
      {/* Overview Section */}
      <div className="info-box" style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h3>What is Ayushman Bharat?</h3>
        <p>Ayushman Bharat is India's flagship healthcare scheme launched by the Government of India. It provides health coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.</p>
      </div>

      {/* Benefits Section */}
      <h2 style={{ marginBottom: '20px' }}>Key Benefits</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ padding: '20px', textAlign: 'center', background: '#f8f9fa', borderRadius: '10px' }}>
          <h4>💰 Free Treatment</h4>
          <p>Up to ₹5 lakhs per family per year</p>
        </div>
        <div style={{ padding: '20px', textAlign: 'center', background: '#f8f9fa', borderRadius: '10px' }}>
          <h4>🏥 6,700+ Hospitals</h4>
          <p>Cashless treatment across India</p>
        </div>
        <div style={{ padding: '20px', textAlign: 'center', background: '#f8f9fa', borderRadius: '10px' }}>
          <h4>👨‍👩‍👧‍👦 Family Coverage</h4>
          <p>Entire family covered under one card</p>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="info-box" style={{ background: '#e3f2fd', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
        <h3>Eligibility</h3>
        <ul style={{ lineHeight: '2' }}>
          <li>Families listed in SECC (Socio-Economic Caste Census) database</li>
          <li>Rural families with specific deprivation criteria</li>
          <li>Urban families with specific occupational criteria</li>
          <li>No age limit or family size limit</li>
        </ul>
      </div>

      {/* Myth vs Facts Section */}
      <h2 style={{ marginBottom: '20px' }}>Myth vs Facts</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {[
          { myth: "You need to pay to get the card", fact: "Ayushman card is completely FREE. Never pay anyone for it." },
          { myth: "Only poor people can apply", fact: "Eligibility is based on SECC database, not just income." },
          { myth: "Treatment is not really free", fact: "Treatment is 100% cashless at empaneled hospitals." }
        ].map((item, index) => (
          <div key={index} style={{ padding: '20px', background: '#fff', border: '1px solid #eee', borderRadius: '8px' }}>
            <p style={{ color: '#d32f2f', margin: '0 0 5px 0' }}>❌ <strong>Myth:</strong> {item.myth}</p>
            <p style={{ color: '#2e7d32', margin: '0', fontWeight: 'bold' }}>✅ <strong>Fact:</strong> {item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;