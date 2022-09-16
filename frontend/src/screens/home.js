import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
// import SliderComponent from '../components/slider';
import CategoriesComponent from './../components/categories';
import OfferProducts from './../components/offerProducts';

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home Screen </title>
        </Helmet>
        <div className="HomeScreen">
          {/* <SliderComponent /> */}
          <div className="Title">Our Catogories</div>
          <CategoriesComponent />
          <div className="Title">Our Offer Products</div>
          <OfferProducts />
        </div>
      </React.Fragment>
    );
  }
}
export default HomeScreen;
