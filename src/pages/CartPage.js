import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalQty = Object.values(items).reduce((a, b) => a + b.quantity, 0);
  const totalPrice = Object.values(items).reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      {Object.values(items).map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid gray', marginBottom: '1rem' }}>
          <img src={item.image} alt={item.name} width={60} />
          <h4>{item.name}</h4>
          <p>Price: ${item.price} × {item.quantity}</p>
          <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total Items: {totalQty}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
      <br /><br />
      <a href="/products"><button>Continue Shopping</button></a>
    </div>
  );
};

export default CartPage;