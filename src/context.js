import React, { useContext, useState } from 'react';
import {storeProducts, detailProduct} from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

  const [productList, setProductList] = useState(storeProducts);
  const [isMouseHover, setIsMouseOver] = useState(true);
  const [isItemInCart , setIsItemInCart ] = useState(false)

  const mouseEnter = (e) => {
    e.preventDefault();
    e.currentTarget.firstElementChild.firstElementChild.style.height = "200px";
    e.currentTarget.firstElementChild.firstElementChild.style.width = "200px";
    setIsMouseOver(true);
    const target = e.currentTarget.lastElementChild
    target.classList.add("show");
  }

  const mouseLeave = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
    const target = e.currentTarget.lastElementChild;
    target.classList.remove("show");
    e.currentTarget.firstElementChild.firstElementChild.style.width = "150px";
    e.currentTarget.firstElementChild.firstElementChild.style.height = "150px";
    setIsMouseOver(true);
  }

  const displayCart = (id, e) => {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <AppContext.Provider
      value={{
        productList,
        mouseEnter,
        mouseLeave,
        displayCart,
        isItemInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}