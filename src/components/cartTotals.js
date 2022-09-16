import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const CartTotals = () => {
    const { state, handleClearCart } = useGlobalContext();
    const  {cartSubTotal, cartTax, cartTotal } = state;
  return (
      <section className='totals'>
          <Link to="/">
              <button onClick={() => handleClearCart()} className="clearBtn"> clear cart</button>
          </Link>
          <h3>Subtotal : ${cartSubTotal}</h3>
          <h3>Tax : ${cartTax}</h3>
          <h3>Total : ${ cartTotal}</h3>
    </section>
  )
}

export default CartTotals