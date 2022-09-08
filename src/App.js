import './App.css';
import React from 'react';
import Home from "./components/Home";
import Product from "./components/product";
import Cart from "./components/cart";
import Error from "./components/Error";
import { Route, Routes, Link, NavLink } from "react-router-dom";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={ <Error/>} />
      </Routes>
    </main>
  );
}

export default App;
