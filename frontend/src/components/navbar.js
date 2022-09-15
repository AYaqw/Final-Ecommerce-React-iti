import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  state = {};
  render() {
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
                  /*https://img.freepik.com/premium-vector/supermarket-logo_23-2148476404.jpg?w=74 https://img.freepik.com/free-vector/shopping-cart-supermarket-logo-template_23-2148470295.jpg?w=740&t=st=1663193449~exp=1663194049~hmac=b05b97082199fc4d551a65c1b6d4daecf9be6adbbdfccab9353fdf04b07d573e
                  https://img.freepik.com/free-vector/detailed-click-collect-sign_23-2148779338.jpg?w=96&t=st=1663192944~exp=1663193544~hmac=c72622085f6f2067fdbdf134082b474486e328334bea718089e451dee07ed9f0*/
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
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default NavbarComponent;
