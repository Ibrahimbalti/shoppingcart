import React from 'react';

import Products from '../product/Products';
import AddBtn from '../layout/AddBtn';

const Home = () => {
  return (
    <div>
      <div>
        <AddBtn />
      </div>

      <h2 style={{ textAlign: 'center' }}>List of Products </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Products />
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
