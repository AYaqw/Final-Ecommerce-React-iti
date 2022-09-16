import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

function NavbarComponent() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  return (
    <React.Fragment>
      <div className="NavbarComponent">
        <nav className="navbar navbar-expand-lg mb-3 ps-5 pe-5 ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img
                src="
                https://img.freepik.com/free-vector/detailed-click-collect-sign_23-2148779338.jpg
                "
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fa-solid fa-cart-shopping fs-5 align-middle"
                    to="/cart"
                  >
                    {cart.cartItems.length > 0 && (
                      <span className="position-absolute top-md-50 end-md-75 top-sm-75 translate-middle badge rounded-pill bg-danger p-2">
                        {cart.cartItems.length}
                        {/* {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} */}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default NavbarComponent;
