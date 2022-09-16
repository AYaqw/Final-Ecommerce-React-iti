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
          <div className="col-lg-3 col-md-6">
            <div className="p-3">
              <h4 className="text-success">{Product.title}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fw-bolder">
                  <span className="">type::</span>
                  <span className="float-end text-warning">{Product.type}</span>
                </li>
                <li className="list-group-item fw-bolder">
                  <span className="">price::</span>
                  <span className="float-end text-warning">
                    $ {Product.price}
                  </span>
                </li>
                <li className="list-group-item fw-bolder">
                  <span>offer::</span>
                  <span className="float-end text-warning">
                    % {Product.offer}
                  </span>
                </li>
                <li className="list-group-item fw-bolder">
                  <span className="">rating::</span>
                  <span className="float-end text-warning">
                    {Product.rating}
                  </span>
                </li>
                <li className="list-group-item fw-bolder">
                  <span className="">description::</span>
                  <span className="">{Product.description}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card p-3">
              <h4 className="text-success">Seller</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fw-bolder">
                  <span className="">price After seller::</span>
                  <span className="float-end text-warning">
                    $
                    {parseInt(
                      Product.price - Product.price * (Product.offer / 100)
                    )}
                  </span>
                </li>
                <li className="list-group-item fw-bolder">
                  <span className="">Status::</span>
                  <span className="float-end text-warning">{Product.type}</span>
                </li>
                <button
                  type="button"
                  className="btn btn-success"
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
