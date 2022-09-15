import React, { Component } from 'react';
import CategoriesComponent from './components/categories';
import FooterComponent from './components/footer';
import LoadingComponent from './components/loading';
import NavbarComponent from './components/navbar';
import ProductComponent from './components/product';
import RatingComponents from './components/rating';
import SliderComponent from './components/slider';
import AboutScreen from './screens/about';
import CartScreen from './screens/cart';
import CategoriesProductsScreen from './screens/categoriesProducts';
import ContactUsScreen from './screens/contact';
import HomeScreen from './screens/home';
import NotFoundScreen from './screens/notFound';
import ProductDetailsScreen from './screens/productDetails';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App m-5">
          <div className="Title">App</div>
          <CategoriesComponent />
          <FooterComponent />
          <LoadingComponent />
          <NavbarComponent />
          <ProductComponent />
          <RatingComponents />
          <SliderComponent />
          <AboutScreen />
          <CartScreen />
          <CategoriesProductsScreen />
          <ContactUsScreen />
          <HomeScreen />
          <NotFoundScreen />
          <ProductDetailsScreen />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
