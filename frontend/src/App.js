import React, { Component } from 'react';
import FooterComponent from './components/footer';
import NavbarComponent from './components/navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// - Basics Screen
import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import ContactUsScreen from './screens/contact';
import CartScreen from './screens/cart';

// - Sup Screen
import CategoriesComponent from './components/categories';
import CategoriesProductsScreen from './screens/categoriesProducts';
import ProductDetailsScreen from './screens/productDetails';
// import NotFoundScreen from './screens/notFound';
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App d-flex flex-column site">
          <NavbarComponent />
          <main className="container">
            <Routes>
              {/* ! Basis Pages */}
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/contact" element={<ContactUsScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              {/* <Route path="/Not" element={<NotFoundScreen />} /> */}
              {/* ! Sup Pages */}
              <Route path="/categories" element={<CategoriesComponent />} />
              <Route
                path="/Categories/category/:id"
                element={<CategoriesProductsScreen />}
              />
              <Route
                path="/Products/product/:id"
                element={<ProductDetailsScreen />}
              />
              {/* ! not found page */}
              {/* <Redirect to="/" /> */}
            </Routes>
          </main>
          <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
