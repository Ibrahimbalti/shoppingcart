import React, { Fragment, useContext, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';
import ProductItems from './ProductItems';
import Spinner from '../layout/Spinner';

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProduct, loading } = productContext;

  useEffect(() => {
    getProduct();

    // eslint-disable-next-line
  }, []);

  if (products !== null && products.length === 0 && !loading) {
    return <h4>Please use the form to add a Products.</h4>;
  }

  return (
    <Fragment>
      {products !== null && !loading ? (
        products.map((product) => (
          <ProductItems key={product._id} product={product} />
        ))
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Products;
