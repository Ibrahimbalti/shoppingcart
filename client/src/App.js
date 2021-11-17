import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductState from './context/product/ProductState';
import ProductForm from './components/product/ProductForm';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Recipt from './components/layout/Recipt';

import './App.css';

const App = () => {
  return (
    <ProductState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add-product" component={ProductForm} />
              <Route exact path="/recipt" component={Recipt} />
              
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ProductState>
  );
};

export default App;
