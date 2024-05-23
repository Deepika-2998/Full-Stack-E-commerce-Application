import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default CartPage;
