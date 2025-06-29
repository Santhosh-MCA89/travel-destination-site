import React from 'react';
import products from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductListing = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid gray', padding: '1rem', width: 150 }}>
            <img src={p.image} alt={p.name} width={100} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button disabled={!!cart[p.id]} onClick={() => dispatch(addItem(p))}>
              {cart[p.id] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;