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
          <div className="Title404">404</div>
          <img
            src="https://stock.adobe.com/eg/images/404-error/112130459"
            alt="404"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default NotFoundScreen;
