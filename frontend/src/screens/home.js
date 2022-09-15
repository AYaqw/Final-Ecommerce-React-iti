import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home Screen </title>
        </Helmet>
        <div className="HomeScreen">
          <div className="Title">Home Screen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomeScreen;
