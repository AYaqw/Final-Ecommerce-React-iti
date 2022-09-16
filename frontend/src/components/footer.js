import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="FooterComponent mt-5 ">
          <div className="container">
            <div className="row g-3 mt-5 ">
              <div className="col-md-3 col-sm-6">
                <div className="p3">
                  <h3 className="fs-3 fw-bolder">Our Stores</h3>
                  <ul>
                    <li>
                      <Link href="/" className="it">
                        indiLink
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        USLink
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        jLinkpLinkn
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        pLinkris
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p3">
                  <h3 className="fs-3 fw-bolder">Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/" className="it">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="it">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="it">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link href="/cart" className="it">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p3">
                  <h3 className="fs-3 fw-bolder">ExtrLink Links</h3>
                  <ul>
                    <li>
                      <Link href="/" className="it">
                        my Linkccount
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        my fLinkvorite
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        my orders
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        newletter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="p3">
                  <h3 className="fs-3 fw-bolder">Follow Us</h3>
                  <ul>
                    <li>
                      <Link href="/" className="it">
                        <i className="fa-brands fa-facebook"></i>
                        <span className="ms-2 text-light">facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        <i className="fa-brands fa-square-twitter"></i>
                        <span className="ms-2 text-light">twitter</span>
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link href="/" className="it">
                        <i className="fa-brands fa-square-instagram"></i>
                        <span className="ms-2 text-light">instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="it">
                        <i className="fa-brands fa-linkedin"></i>
                        <span className="ms-2 text-light">linkedin</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center fw-semibold fs-3 text-light">
              Create By <span>AyA</span> | All Rights Reserved <span>2022</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default FooterComponent;
