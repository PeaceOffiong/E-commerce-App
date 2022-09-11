import React from 'react';
import { useGlobalContext } from '../context';
import { BsCartPlusFill } from "react-icons/bs";
import ItemonDisplay from './itemonDisplay';


const ProductsList = () => {
  const {
    productList,
    mouseEnter,
    mouseLeave,
    displayCart,
    isItemInCart,
    isItemAddedDisplayed,
    itemOnDisplay,
    handleReturnToMainPage,
  } = useGlobalContext();

  return (
    <div className="products-center">
      <h3 className="title">Our Products</h3>
      <ul className="list">
        {productList.map((each) => {
          const { id, title, img, price } = each;
          return (
            <li
              key={id}
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseLeave={(e) => mouseLeave(e)}
            >
              <div className="img-container">
                <img className="img" src={img} alt={title} />
              </div>
              <div className="desc">
                <h3>{title}</h3>
                <p>${price}</p>
              </div>
              <button
                onClick={(e) => displayCart(id, e)}
                className="cart-center"
              >
                {isItemInCart ? "In Cart" : <BsCartPlusFill className="icon" />}
              </button>
            </li>
          );
        })}
      </ul>
      {isItemAddedDisplayed && (
        <ItemonDisplay
          itemOnDisplay={itemOnDisplay}
          handleReturnToMainPage={handleReturnToMainPage}
        />
      )}
    </div>
  );
}

export default ProductsList