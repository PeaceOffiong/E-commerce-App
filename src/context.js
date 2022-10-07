/* eslint-disable no-unused-vars */
import React, {
  useContext,
  useState,
} from "react";
import { storeProducts} from "./data";

const AppContext = React.createContext();

const products = () => {
  let products = [];
  let product = storeProducts.forEach((each) => {
    const singleItem = { ...each };
    products = [...products, singleItem];
    return products;
  });
  return products;
};

const AppProvider = ({ children }) => {
  // use State for manipulating the data
  const [productList, setProductList] = useState(products());
  //useState to accertain movement of mouse

  const [isItemAddedDisplayed, setIsItemAddedDisplayed] = useState(false);
  const [itemOnDisplay, setItemOnDisplay] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [state, setState] = useState({
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  const mouseEnter = (e) => {
    const target = e.currentTarget.lastElementChild;
    target.classList.add("show");
  };

  const mouseLeave = (e) => {
    const target = e.currentTarget.lastElementChild;
    target.classList.remove("show");
  };

  const addToCart = (id) => {
    let specificProduct = [...productList];
    const index = specificProduct.indexOf(getItem(id));
    const product = specificProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCartItems([...cartItems, product]);
    setProductList(specificProduct);
    addTotals();
  };

  const getItem = (id) => {
    const specificItem = productList.find((each) => each.id === id);
    return specificItem;
  };

  const handleReturnToMainPage = (e) => {
    e.preventDefault();
    setIsItemAddedDisplayed(false);
  };

  const displayCart = (id, index) => {
    const cartid = cartItems.map((each) => each.id === id);
    if (cartid === "") {
      setMessage("Already in Cart");
      console.log(cartid);
    } else {
      getItem(id);
      setIsItemAddedDisplayed(true);
      setItemOnDisplay(getItem(id));
      addToCart(id);
    }
  };

  const addTotals = () => {
    let subTotal = 0;
    cartItems.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    productList.map((each) => (each.inCart = false));
  };

  const handleDeleteItem = (id) => {
    let tempProducts = [...productList];
    let tempCart = [...cartItems];
    tempCart = tempCart.filter((each) => each.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCartItems(tempCart);
    setProductList(tempProducts);
    addTotals();
  };

  const handleCounter = (e, id) => {
    let tempCart = [...cartItems];
    const specificItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(specificItem);
    const product = tempCart[index];
    if (e.target.innerText === "-") {
      product.count = product.count - 1;
      if (product.count === 0) {
        handleDeleteItem(id);
      } else {
        product.total = product.count * product.price;
        setCartItems(tempCart);
        addTotals();
      }
    } else {
      product.count = product.count + 1;
      product.total = product.count * product.price;
      setCartItems(tempCart);
      addTotals();
    }
  };

  return (
    <AppContext.Provider
      value={{
        productList,
        mouseEnter,
        mouseLeave,
        isItemAddedDisplayed,
        itemOnDisplay,
        cartItems,
        handleReturnToMainPage,
        displayCart,
        setIsItemAddedDisplayed,
        message,
        addTotals,
        state,
        handleClearCart,
        handleDeleteItem,
        handleCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
