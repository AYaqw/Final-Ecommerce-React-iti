import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class ProductDetailsScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Product Details Screen </title>
        </Helmet>
        <div className="ProductDetailsScreen">
          <div className="Title">Product Details</div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProductDetailsScreen;
