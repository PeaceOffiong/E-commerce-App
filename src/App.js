import './App.css';
import React from 'react';
import Navbar from "./components/navbar"
import ProductList from "./components/productsList"


function App() {
  return (
    <main>
      <Navbar />
      <ProductList/>
    </main>
  );
}

export default App;
