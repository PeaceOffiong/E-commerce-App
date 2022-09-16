import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { productList, displayCart, message } =
    useGlobalContext();
  const Item = productList.find((each) => each.id === productId);
  const {title, price, company, info, inCart, count, total, img } =
    Item;
  return (
    <section className="product-center">
      <h2 className="title">{title}</h2>

      <div className="inner center">
        <div className="img-center">
          <img src={img} alt={title} className="imgg" />
        </div>
        <div className="info-center">
          <h3 className="info">Model: {title}</h3>
          <h4 className="production">{company}</h4>
          <h5>Price: ${price}</h5>
          <small>
            some info about product:
            <span>{info}</span>
          </small>
          <div className="button-section">
            <Link to="/">
              <button className="blue">Back To Products</button>
            </Link>
            <button
              onClick={() => displayCart(productId)}
              className="orange"
              disabled={inCart ? true : false}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product