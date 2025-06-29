import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div style={{ padding: '2rem', textAlign: 'center', background: '#e0ffe0' }}>
    <h1>GreenLeaf Nursery</h1>
    <p>Your one-stop shop for beautiful indoor & outdoor plants.</p>
    <Link to="/products"><button>Get Started</button></Link>
  </div>
);

export default Landing;