import React from 'react';
import Navbar from "../components/navbar";
import ProductsList from "../components/productsList"

const Home = () => {
  return (
    <section>
      <Navbar />
      <ProductsList/>
    </section>
  )
}

export default Home