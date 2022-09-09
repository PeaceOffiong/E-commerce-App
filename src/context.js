import React, { useContext, useState } from 'react';
import {storeProducts, detailProduct} from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

  const [productList, setProductList] = useState(storeProducts);
  
  return <AppContext.Provider value={{
    productList,
  }}>
  {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}