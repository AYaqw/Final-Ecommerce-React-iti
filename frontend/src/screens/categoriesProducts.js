import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import ProductComponent from '../components/product';
import RatingComponents from '../components/rating';

function CategoriesProductsScreen() {
  const params = useParams();
  const sectionName = params.id;
  console.log(`sectionName:: ${sectionName}`);

  const [FilterRate, setFilterRate] = useState();
  const [FilterPrice, setFilterPrice] = useState();
  // const [FilterDepartment, setFilterDepartment] = useState();

  //? to fetch data from Api
  //! 1- use useState
  const [Products, setProducts] = useState([]);
  //! 2- use useEffect
  useEffect(() => {
    //! 3- fetch
    const fetchData = async () => {
      const result = await axios.get('/api/Products');
      setProducts(result.data);
    };
    fetchData();
  }, []);

  var filterProducts = Products.filter((product) => {
    return product.type === sectionName;
  });

  if (FilterRate !== undefined) {
    // Rates(FilterRate);
    filterProducts = filterProducts.filter((product) => {
      return parseInt(product.rating) > FilterRate;
    });
  }

  if (FilterPrice !== undefined) {
    // const arr = ['r1', 'r2', 'r3', 'r4'];
    // const range = [0, [1, 50], [51, 200], [2001, 1000]];
    var S;
    var E;
    // for (var i in arr) {}
    if (FilterPrice === 'r0') {
      S = 0;
      E = 5;
    } else if (FilterPrice === 'r1') {
      S = 6;
      E = 12;
      console.log(`1+ Star ${S} ... End ${E}`);
    } else if (FilterPrice === 'r2') {
      S = 13;
      E = 18;
      console.log(`2+ Star ${S} ... End ${E}`);
    } else if (FilterPrice === 'r3') {
      S = 19;
      E = 30;
      console.log(`Star ${S} ... End ${E}`);
    } else {
      S = 0;
      E = 1000;
    }
    filterProducts = filterProducts.filter((product) => {
      var prc = product.price - product.price * (product.offer / 100);
      return parseInt(prc) > S && parseInt(prc) < E;
    });
  }
  console.log(`filterProducts ${filterProducts}`);
  filterProducts.map((f) => console.log(f));

  return (
    <React.Fragment>
      <Helmet>
        <title>Products Screen </title>
      </Helmet>

      <div className="CategoriesProductsScreen">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="mybtn size">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="Title">Categories Products Screen</div>
        </div>

        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-lg-9 col-sm-12 DataFiltered">
            <div className="row gy-3 ">
              {filterProducts.map((product, index) => {
                return (
                  <div
                    className="filterProducts col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center"
                    key={`${index}filterProducts`}
                  >
                    <ProductComponent product={product} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 mt-5 mt-lg-0 filterData d-flex flex-column justify-content-start">
            <div className="filterRate mb-1">
              <h3 className="filterTitle fw-bold">Filter Rate</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex ">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="0"
                    id="firstRadioR5"
                    onChange={(e) => setFilterRate(e.target.value)}
                    defaultChecked
                  />
                  <label
                    className="form-check-label d-flex justify-content-between fs-5 fw-bold"
                    htmlFor="firstRadioR5"
                  >
                    All
                    <RatingComponents rating={1} />
                  </label>
                </li>
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="4"
                    id="secondRadioR2"
                    onChange={(e) => setFilterRate(e.target.value)}
                  />
                  <label
                    className="form-check-label d-flex justify-content-between fs-5 fw-bold"
                    htmlFor="secondRadioR2"
                  >
                    up 4
                    <RatingComponents rating={5} />
                  </label>
                </li>
                <li className="list-group-item d-flex ">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="3"
                    id="thirdRadioR3"
                    onChange={(e) => setFilterRate(e.target.value)}
                  />
                  <label
                    className="form-check-label d-flex justify-content-between fs-5 fw-bold"
                    htmlFor="thirdRadioR3"
                  >
                    up 3
                    <RatingComponents rating={4} />
                  </label>
                </li>
                <li className="list-group-item d-flex ">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="2"
                    id="fourthRadioR4"
                    onChange={(e) => setFilterRate(e.target.value)}
                  />
                  <label
                    className="form-check-label d-flex justify-content-between fs-5 fw-bold"
                    htmlFor="fourthRadioR4"
                  >
                    up 2
                    <RatingComponents rating={3} />
                  </label>
                </li>
                <li className="list-group-item d-flex ">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="1"
                    id="fifthRadioR5"
                    onChange={(e) => setFilterRate(e.target.value)}
                  />
                  <label
                    className="form-check-label d-flex justify-content-between fs-5 fw-bold"
                    htmlFor="fifthRadioR5"
                  >
                    up 1
                    <RatingComponents rating={2} />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filterPrice mb-1">
              <h3 className="filterTitle fw-bold">Filter Price</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r4"
                    id="fourthRadioP5"
                    defaultChecked
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label
                    className="form-check-label fs-5 fw-bold"
                    htmlFor="fourthRadioP5"
                  >
                    All
                  </label>
                </li>
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r0"
                    id="firstRadioP1"
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label
                    className="form-check-label fs-5 fw-bold"
                    htmlFor="firstRadioP1"
                  >
                    $0 to $5
                  </label>
                </li>
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r1"
                    id="secondRadioP2"
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label
                    className="form-check-label fs-5 fw-bold"
                    htmlFor="secondRadioP2"
                  >
                    $6 to $12
                  </label>
                </li>
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r2"
                    id="thirdRadioP3"
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label
                    className="form-check-label fs-5 fw-bold"
                    htmlFor="thirdRadioP3"
                  >
                    $13 to $18
                  </label>
                </li>
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r3"
                    id="fourthRadioP4"
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label
                    className="form-check-label fs-5 fw-bold"
                    htmlFor="fourthRadioP4"
                  >
                    $19 to $30
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CategoriesProductsScreen;
