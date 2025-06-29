import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(state => state.cart.items);
  const count = Object.values(cart).reduce((a, b) => a + b.quantity, 0);

  return (
    <header style={{ padding: '1rem', background: '#cfe3dc' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
};

export default Header;