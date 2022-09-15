import React, { Component } from 'react';

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="FooterComponent">
          <p className="text-center fw-semibold fs-3">
            Create By <span>AyA</span> |All Rights Reserved <span>2022</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default FooterComponent;
