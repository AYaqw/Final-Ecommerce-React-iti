import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

class ContactUsScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>ContactUsScreen </title>
        </Helmet>
        <div className="ContactUsScreen">
          <div className="Title">ContactUsScreen</div>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactUsScreen;
