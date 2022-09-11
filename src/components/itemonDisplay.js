import React from 'react';

const itemonDisplay = ({ itemOnDisplay, handleReturnToMainPage}) => {
  const { id, title, img, price } = itemOnDisplay;
  return (
    <aside className="itemAddedOnDisplay">
      <div className="center-point">
        <h3 className="title">Item Added To Cart</h3>
        <img src={img} alt={title} className="display-img" />
        <h3>{title}</h3>
        <p>Price :${price}</p>
        <button onClick={(e) => handleReturnToMainPage(e)}
          className="blue"
        >
          Continue Shopping
        </button>
        <button className='orange'>Go to Cart</button>
      </div>
    </aside>
  );
};

export default itemonDisplay