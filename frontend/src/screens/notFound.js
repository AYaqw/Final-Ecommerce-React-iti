import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class NotFoundScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>NotFound Screen </title>
        </Helmet>
        <div className="NotFoundScreen">
          <div className="Title">NotFound Screen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default NotFoundScreen;
