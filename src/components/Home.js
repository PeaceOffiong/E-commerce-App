import React from 'react';
import Navbar from "./navbar";
import ProductsList from "./productsList"

const Home = () => {
  return (
    <section>
      <Navbar />
      <ProductsList/>
    </section>
  )
}

export default Home