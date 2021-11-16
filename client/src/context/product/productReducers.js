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

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [action.payload],
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        products: null,

        error: null,
        current: null,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
