import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class CartScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Cart Screen</title>
        </Helmet>
        <div className="CartScreen">
          <div className="Title">Cart Screen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default CartScreen;
