import './App.css';
import React from 'react';
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Error from "./pages/Error";
import { Route, Routes} from "react-router-dom";
import Product from "./pages/product";
import ItemonDisplay from "./components/itemonDisplay";
import { useGlobalContext } from './context';

function App() {
  const { itemOnDisplay, handleReturnToMainPage, isItemAddedDisplayed } =
    useGlobalContext();
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {isItemAddedDisplayed && (
        <ItemonDisplay
          itemOnDisplay={itemOnDisplay}
          handleReturnToMainPage={handleReturnToMainPage}
        />
      )}
    </main>
  );
}

export default App;
