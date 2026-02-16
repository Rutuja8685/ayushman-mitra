import React from 'react';

const Dashboard = () => {
  const user = {
    name: "Ajay Sharma",
    id: "ABHA-4592-1022-9012",
    benefits: "₹5,00,000",
    status: "Verified"
  };

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h2 className="section-title">Your Health Dashboard</h2>
      
      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '30px' }}>
        
        {/* Virtual Ayushman Card */}
        <div className="card ayushman-card" style={{ 
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', 
            color: 'white', 
            padding: '30px', 
            borderRadius: '20px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ayushman Bharat</span>
            <span style={{ fontSize: '1.5rem' }}>🇮🇳</span>
          </div>
          
          <div style={{ margin: '40px 0' }}>
            <h3 style={{ margin: 0, fontSize: '1.6rem' }}>{user.name}</h3>
            <p style={{ fontSize: '1.3rem', letterSpacing: '3px', opacity: 0.9 }}>{user.id}</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '15px' }}>
            <div>
              <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8 }}>YEARLY BENEFIT</p>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{user.benefits}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8 }}>STATUS</p>
              <p style={{ margin: 0, color: '#4caf50', fontWeight: 'bold' }}>● {user.status}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="card" style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #eee' }}>
          <h3>Quick Services</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <button className="nav-btn" style={{ textAlign: 'left', width: '100%', padding: '12px' }}>🏥 Find Nearest Empanelled Hospital</button>
            <button className="nav-btn" style={{ textAlign: 'left', width: '100%', padding: '12px' }}>📄 Download E-Card (PDF)</button>
            <button className="nav-btn" style={{ textAlign: 'left', width: '100%', padding: '12px' }}>📝 Raise a Grievance</button>
            <button className="nav-btn" style={{ textAlign: 'left', width: '100%', padding: '12px' }}>📞 24/7 Support: 14555</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;