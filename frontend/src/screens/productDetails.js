import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Store } from './../Store';

function ProductDetailsScreen() {
  const params = useParams();
  console.log(`params:: ${params}`);
  const titleproduct = params.id;
  console.log(`titleproduct:: ${titleproduct}`);
  //! to fetch data from Api
  //? 1- use useState ----------------
  const [Product, setProducts] = useState([]);
  //? 2- fetch by use useEffect ------
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/Products/product/${titleproduct}`);
      setProducts(result.data);
    };
    fetchData();
  }, [titleproduct]);

  console.log(`Products:: ${Product} `);
  console.log(`titleproduct:: ${titleproduct} `);

  // ! addToCartHandler
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }
  } = state;
  const addToCartHandler = async (item) => {
    console.log('added ');
    const existItem = cartItems.find((x) => x.title === titleproduct);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/Products/product/${item.title}`);

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }
    });
    console.log('added ');
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ProductDetiles page</title>
      </Helmet>

      <div className="ProductDetailsScreen">
        <div className="Title">{titleproduct.title} Details</div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="p-3">
              <img src={Product.filename} alt="" className="w-100 rounded-4" />
            </div>

            {/* //! review XXXXXXX */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="p-3">
              <h4 className="fs-2  fw-bolder">{Product.title}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">type ::</span>
                  <span className="float-end ">{Product.type}</span>
                </li>
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">price ::</span>
                  <span className="float-end ">$ {Product.price}</span>
                </li>
                <li className="list-group-item fs-4 fw-bold">
                  <span>offer ::</span>
                  <span className="float-end ">% {Product.offer}</span>
                </li>
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">rating ::</span>
                  <span className="float-end ">{Product.rating}</span>
                </li>
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">description ::</span>
                  <span className="float-end ">{Product.description}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card p-3">
              <h4 className="fs-2  fw-bolder">Seller</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">price After selling ::</span>
                  <span className="float-end ">
                    $
                    {parseInt(
                      Product.price - Product.price * (Product.offer / 100)
                    )}
                  </span>
                </li>
                <li className="list-group-item fs-4 fw-bold">
                  <span className="infoTitle">Status ::</span>
                  <span className="float-end ">{Product.type}</span>
                </li>
                <button
                  type="button"
                  className="mybtn mt-3"
                  onClick={() => addToCartHandler(Product)}
                >
                  Add to card
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetailsScreen;
