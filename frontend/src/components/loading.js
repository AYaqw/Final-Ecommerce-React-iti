import React, { Component } from 'react';

class LoadingComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="LoadingComponent">
          <div className="Title">Loading Component</div>
        </div>
      </React.Fragment>
    );
  }
}
export default LoadingComponent;
