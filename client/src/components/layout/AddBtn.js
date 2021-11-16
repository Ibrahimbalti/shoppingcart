import React from 'react';
import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <div className="col-md-11">
      <Link to="/add-product" className="btn btn-outline-warning float-right">
        + Add New Products
        {/* <BookForm /> */}
      </Link>

      <br />
      <br />
      <hr />
    </div>
  );
};

export default AddBtn;
