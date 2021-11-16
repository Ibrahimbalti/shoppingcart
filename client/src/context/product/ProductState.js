import React, { useReducer } from 'react';
import axios from 'axios';
import productContext from './productContext';
import producttReducer from './productReducers';

import {
  ADD_PRODUCTS,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  PRODUCT_ERROR,
  CLEAR_PRODUCT,
} from '../types';

const ProductState = (props) => {
  const initialState = {
    products: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(producttReducer, initialState);

  // Get Contacts
  const getProduct = async () => {
    try {
      const res = await axios.get('/api/product');
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/product', product, config);
      dispatch({ type: ADD_PRODUCTS, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_ERROR, payload: err.response.data });
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/product/${id}`);
      dispatch({ type: DELETE_PRODUCTS, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  const setCurrent = (product) => {
    dispatch({ type: SET_CURRENT, payload: product });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(
        `/api/product/${product._id}`,
        product,
        config
      );
      dispatch({ type: UPDATE_PRODUCTS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const clearPrduct = () => {
    dispatch({ type: CLEAR_PRODUCT });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        current: state.current,
        error: state.error,
        addProduct,
        deleteProduct,
        setCurrent,
        clearCurrent,
        updateProduct,
        clearPrduct,
        getProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
