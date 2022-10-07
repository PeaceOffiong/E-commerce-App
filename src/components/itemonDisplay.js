/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const ItemonDisplay = ({ itemOnDisplay, handleReturnToMainPage }) => {
  const { id, title, img, price } = itemOnDisplay;
  const { setIsItemAddedDisplayed } = useGlobalContext();
  return (
    <aside className="itemAddedOnDisplay">
      <div className="center-point">
        <h3 className="title">Item Added To Cart</h3>
        <img src={img} alt={title} className="display-img" />
        <h3>{title}</h3>
        <p>Price :${price}</p>
        <button onClick={(e) => handleReturnToMainPage(e)} className="blue">
          Continue Shopping
        </button>
        <Link to="/cart">
          <button
            className="orange"
            onClick={() => setIsItemAddedDisplayed(false)}
          >
            Go to Cart
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ItemonDisplay;
