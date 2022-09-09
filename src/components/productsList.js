import React from 'react';
import { useGlobalContext } from '../context';

const ProductsList = () => {
  const { productList } = useGlobalContext();
  return (
    <div className='products-center'>
        {productList.map((each) => {
          const { id, title, img, price } = each;
          return <ul className="list" key={id}>
            <li>each item</li>
          </ul>;
        })}
    </div>
  )
}

export default ProductsList