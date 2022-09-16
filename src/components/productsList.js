import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import PropTypes from 'prop-types';

const ProductsList = () => {
  const {
    productList,
    mouseEnter,
    mouseLeave,
    displayCart,
  } = useGlobalContext();

  return (
    <div className="products-center">
      <h3 className="title">Our Products</h3>
      <ul className="list">
        {productList.map((each, index) => {
          const { id, title, img, price, inCart } = each;
          return (
            <li
              key={id}
              data-id={id}
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseLeave={(e) => mouseLeave(e)}
            >
              <Link to={`/product/${id} `} className="link">
                <div className="img-container">
                  <img className="img" src={img} alt={title} />
                </div>
                <div className="desc">
                  <h3>{title}</h3>
                  <p>${price}</p>
                </div>
              </Link>
              <button
                onClick={() => displayCart(id, index)}
                className="cart-center"
                disabled={inCart ? true : false}
              >
                {inCart ? (
                  <small className="icon" disabled>In Cart</small>
                ) : (
                  <BsCartPlusFill className="icon" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

// each.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     inCart:PropTypes.boolean,
//   }).isRequired
// }

export default ProductsList