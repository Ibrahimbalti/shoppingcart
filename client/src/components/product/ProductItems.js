import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
const ProductItems = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { deleteProduct, setCurrent, clearCurrent } = productContext;

  const { _id, name, description } = product;

  const onDelete = () => {
    deleteProduct(_id);
    clearCurrent();
  };

  const sendEmail = () => {
    emailjs
      .sendForm('gmail', 'template_jatjzbc', 'user_OsVk3dm8udsQ37XC5h4G4')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="card-container">
      <div>
        <img src="https://random.imagecdn.app/500/150" alt="Product" />
      </div>

      <div>
        <h2> {name}</h2>
        <h3> {description}</h3>
      </div>
      <p>
        <Link to="/add-product">
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setCurrent(product)}
          >
            Edit
          </button>
        </Link>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
        <Link to="/recipt">
          <button className="btn btn-success btn-sm" onClick={sendEmail}>
            Order
          </button>
        </Link>
      </p>
    </div>
  );
};

ProductItems.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItems;
