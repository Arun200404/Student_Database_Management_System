import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const containerStyle = {
    height: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1950&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '600px',
    width: '90%'
  };
  

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 className='fs-1 mb-4 '>Welcome to Student Database</h1>
        <p className='fs-5 mb-4'>Manage student details efficiently and quickly.</p>
        <Link to="/Table" className='btn btn-primary px-4 py-2 fs-5 text-white rounded border-0 '>Enter</Link>
      </div>
    </div>
  );
};

export default Welcome;
