import React from 'react';

const Team = () => {
  const squad = [
    { name: "Rajashri Kale", role: "Team Leader", icon: "👩‍💼" },
    { name: "Ajinkya Kashid", role: "UI/UX & Prompt Eng.", icon: "👨‍💻" },
    { name: "Sejal Thakare", role: "Full Stack Python", icon: "👩‍💻" },
    { name: "Rutuja Karande", role: "Web & Java Full Stack", icon: "👩‍💻" }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 className="section-title" style={{ textAlign: 'center' }}>The Team Behind Ayushman Mitra</h1>
      <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '50px' }}>
        {squad.map((member, idx) => (
          <div key={idx} className="team-card" style={{ textAlign: 'center', padding: '30px', background: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{member.icon}</div>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{member.name}</h2>
            <p style={{ color: '#007bff', fontWeight: 'bold' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;