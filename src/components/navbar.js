import React from 'react';
import {FaPhoneSquareAlt, FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <FaPhoneSquareAlt className="site-icon" />
        </Link>
        <h2>Products</h2>
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