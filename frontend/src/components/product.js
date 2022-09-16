import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import RatingComponents from './rating';

function ProductComponent(props) {
  // ! addToCartHandler
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }
  } = state;
  const addToCartHandler = async (item) => {
    console.log('added ');
    const existItem = cartItems.find(
      (x) => x.title === props.product.titleproduct
    );
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
      <>
        <Link
          className="card productCard p-3 text-decoration-none"
          style={{ width: '18rem' }}
          to={`/Products/product/${props.product.title}`}
        >
          <img
            src={props.product.filename}
            className="card-img-top w-100"
            alt="..."
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  p-2 fw-bolder ">
            % {props.product.offer}
          </span>
          <div className="card-body text-center">
            <h5
              className="card-title fw-bolder fs-3"
              style={{ textDecoration: 'none !important' }}
            >
              {props.product.title}
            </h5>
            <RatingComponents rating={props.product.rating} />

            <h5 className="fw-bolder fs-3 mb-4">
              $
              {parseInt(
                props.product.price -
                  props.product.price * (props.product.offer / 100)
              )}
              <span className="text-danger text-decoration-line-through fs-6 m-1">
                ${props.product.price}
              </span>
            </h5>

            {/* <p className="card-text">{fProudect.description}</p> */}
            <Link
              to="#"
              onClick={() => addToCartHandler(props.product)}
              className="mybtn"
            >
              Add to card
            </Link>
          </div>
        </Link>
      </>
    </React.Fragment>
  );
}

export default ProductComponent;
