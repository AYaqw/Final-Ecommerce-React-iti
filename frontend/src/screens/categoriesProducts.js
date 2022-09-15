import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class CategoriesProductsScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Categories Products Screen </title>
        </Helmet>
        <div className="CategoriesProductsScreen">
          <div className="Title">Categories Products Screen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default CategoriesProductsScreen;
