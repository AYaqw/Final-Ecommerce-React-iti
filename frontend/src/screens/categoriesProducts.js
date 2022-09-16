import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
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
        <title>Categories Products Screen </title>
      </Helmet>

      <div className="CategoriesProductsScreen">
        <div className="d-flex justify-content-evenly">
          <div className="Title">Categories Products Screen</div>
          <button className="btn btn-primary">Back to Home</button>
        </div>

        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-md-9 DataFiltered">
            <div className="row gy-3 ">
              {filterProducts.map((product, index) => {
                return (
                  <div
                    className="filterProducts col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
                    key={`${index}filterProducts`}
                  >
                    <ProductComponent product={product} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3 filterData d-flex flex-column justify-content-start">
            <div className="filterRate mb-1">
              <h3 className="filterTitle">filterRate</h3>
              <ul className="list-group list-group-flush">
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
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="secondRadioR2"
                  >
                    <i className="fa-solid fa-arrow-up"></i> up 4
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
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="thirdRadioR3"
                  >
                    <i className="fa-solid fa-arrow-up"></i>up 3
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
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="fourthRadioR4"
                  >
                    <i className="fa-solid fa-arrow-up"></i>up 2
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
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="fifthRadioR5"
                  >
                    <i className="fa-solid fa-arrow-up"></i>up 1
                    <RatingComponents rating={2} />
                  </label>
                </li>
                <li className="list-group-item d-flex ">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioRate"
                    value="0"
                    id="firstRadioR5"
                    onChange={(e) => setFilterRate(e.target.value)}
                  />
                  <label
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="firstRadioR5"
                  >
                    <i className="fa-solid fa-arrow-up"></i>All
                    <RatingComponents rating={1} />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filterPrice mb-1">
              <h3 className="filterTitle">filterPrice</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r0"
                    id="firstRadioP1"
                    defaultChecked
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="firstRadioP1">
                    <i className="fa-sharp fa-solid fa-money-bill"></i> $0 to $5
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
                  <label className="form-check-label" htmlFor="secondRadioP2">
                    <i className="fa-sharp fa-solid fa-money-bill"></i> $6 to
                    $12
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
                  <label className="form-check-label" htmlFor="thirdRadioP3">
                    <i className="fa-sharp fa-solid fa-money-bill"></i> $13 to
                    $18
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
                  <label className="form-check-label" htmlFor="fourthRadioP4">
                    <i className="fa-sharp fa-solid fa-money-bill"></i> $19 to
                    $30
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="listGroupRadioPrice"
                    value="r4"
                    id="fourthRadioP5"
                    onChange={(e) => setFilterPrice(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="fourthRadioP5">
                    <i className="fa-sharp fa-solid fa-money-bill"></i> All
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
