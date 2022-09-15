import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class AboutScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About Screen </title>
        </Helmet>
        <div className="AboutScreen">
          <div className="Title">About Screen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutScreen;
