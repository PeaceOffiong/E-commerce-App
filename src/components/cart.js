import React from 'react';
import Navbar from "./navbar";
import { useGlobalContext } from '../context';

const Cart = () => {
  const { cartItems } = useGlobalContext();
  if (cartItems.length <= 0) {
    return (
      <section>
        <Navbar />
        <div className="title">Your Cart is currently Empty</div>
      </section>
    );
  }
  return (
    <section>
      <Navbar />
      <div className="title">Cart below</div>
    </section>
  )
  
  
}

export default Cart