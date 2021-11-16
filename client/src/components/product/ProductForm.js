import React, { useState, useContext, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';
import { Link } from 'react-router-dom';

const ProductForm = () => {
  const productContext = useContext(ProductContext);

  const { addProduct, current, clearCurrent, updateProduct } = productContext;

  useEffect(() => {
    if (current !== null) {
      setProduct(current);
    } else {
      setProduct({
        name: '',
        price: '',
        description: '',
      });
    }
  }, [productContext, current]);

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const { name, price, description } = product;

  const onChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addProduct(product);
    } else {
      updateProduct(product);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Product' : 'Add Product'}
      </h2>
      <input
        type="text"
        placeholder="Title of the Product"
        name="name"
        className="form-control"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        className="form-control"
        onChange={onChange}
        value={price}
      />

      <input
        type="text"
        placeholder="description"
        name="description"
        className="form-control"
        onChange={onChange}
        value={description}
      />

      <div>
        <input
          type="submit"
          value={current ? 'Update Product' : 'Add Product'}
          className="btn btn-primary btn-block"
        />

        <Link to="/">
          <input
            type="button"
            className="btn btn-primary btn-block"
            value="Back "
          />
        </Link>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProductForm;
