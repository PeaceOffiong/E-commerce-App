/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/navbar";
import { useGlobalContext } from "../context";
import { FaTrashAlt } from "react-icons/fa";
import CartTotals from "../components/cartTotals";

const Cart = () => {
  const { cartItems, handleCounter, handleDeleteItem } = useGlobalContext();
  if (cartItems.length <= 0) {
    return (
      <section>
        <Navbar />
        <h3 className="title">Your Cart is currently Empty</h3>
      </section>
    );
  }
  return (
    <section>
      <Navbar />
      <h3 className="title">Your Cart</h3>
      <table className="table">
        <thead>
          <tr className="table head">
            <th>Products</th>
            <th>Name of Product</th>
            <th>price</th>
            <th>quantity</th>
            <th>remove</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((each) => {
            const {
              id,
              title,
              img,
              price,
              company,
              info,
              inCart,
              count,
              total,
            } = each;
            return (
              <tr key={id}>
                <td>
                  <img src={img} alt={title} className="table-img" />
                </td>
                <td>{title}</td>
                <td>${price}</td>
                <td className="counter">
                  <button
                    onClick={(e) => handleCounter(e, id)}
                    className="quantitybtn"
                  >
                    -
                  </button>
                  <div className="quantity">{count}</div>
                  <button
                    onClick={(e) => handleCounter(e, id)}
                    className="quantitybtn"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(id)}
                    className="delete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <b>item total : ${total}</b>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CartTotals />
    </section>
  );
};

export default Cart;
