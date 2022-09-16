import React from 'react';
import Navbar from '../components/navbar';

const Error = () => {
  return (
    <section>
      <Navbar />
      <div className='error-page'>
        <h3 className='title'>Page not Found</h3>
      </div>
    </section>
  );
}

export default Error