import React from 'react';
import {FaPhoneSquareAlt, FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <FaPhoneSquareAlt className="site-icon" />
        <Link to="/">
          <h2>Products</h2>
        </Link>
      </div>
      <Link to="/cart">
        <div className="nav-header">
          <FaShoppingCart />
          <h4>My Cart</h4>
        </div>
      </Link>
    </nav>
  );
}

export default navbar