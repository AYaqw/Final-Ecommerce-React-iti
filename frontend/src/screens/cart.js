import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }
  } = state;
  // !updateCartHandler
  const updateCartHandler = async (item, quantity, type) => {
    const { data } = await axios.get(`/api/Products/product/${item.title}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      // payload: { ...Product, quantity: 1 }
      payload: { ...item, quantity }
    });
    type === '-'
      ? (item.countInStock = item.countInStock - 1)
      : type === '+'
      ? (item.countInStock = item.countInStock + 1)
      : (item.countInStock = item.countInStock);
  };

  // ! removeItemHandler
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: { ...item } });
  };

  //! checkoutHandler
  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };
  // ! return
  return (
    <>
      <div className="CartScreen">
        <Helmet>
          <title>Shopping Cart</title>
        </Helmet>

        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="mybtn size">
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
          <div className="Title">Shopping Cart</div>
        </div>

        <div className="row">
          <div className="col-md-9">
            {' '}
            {cartItems.length === 0 ? (
              <div className="alert-info fs-2 fw-bolder darkBlue text-center mt-5">
                Cart is empty.{' '}
                <Link to="/" className="text-decoration-none ">
                  Go Shopping
                </Link>
              </div>
            ) : (
              <ul className="list-group list-group-flush">
                {cartItems.map((item, index) => (
                  <li className="list-group-item" key={`${index}cart`}>
                    <div className="align-items-center row">
                      <div className="col-sm-4">
                        <img
                          src={item.filename}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail w-50 m-3"
                        ></img>
                        <Link
                          to={`/product/${item.title}`}
                          className="text-decoration-none fs-5 fw-bolder darkBlue"
                        >
                          {item.title}{' '}
                        </Link>
                      </div>
                      <div className="col-sm-3 col-6 d-flex">
                        <div
                          className="btn btn-success btn-sm m-2"
                          variant="light"
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1, '-')
                          }
                          disabled={item.quantity === 1}
                        >
                          <i className="fas fa-minus-circle"></i>
                        </div>
                        <span className="fs-5 fw-bolder orang mt-2">
                          {item.quantity}
                        </span>
                        <div
                          className="btn btn-success btn-sm m-2"
                          variant="light"
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1, '+')
                          }
                          disabled={item.quantity === 0}
                        >
                          <i className="fas fa-plus-circle"></i>
                        </div>
                      </div>
                      <div className="col-sm-3 col-3 fs-5 fw-bolder darkBlue">
                        ${item.price}
                      </div>
                      <div className="col-sm-2 col-3">
                        <div
                          className="btn btn-danger"
                          variant="light"
                          onClick={() => removeItemHandler(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-md-3 col-sm-12 ">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush" variant="flush">
                  <li className="list-group-item checkout">
                    <h3 className="fw-bold fs-3">
                      Total Price :: (
                      <span>
                        {cartItems.reduce(
                          (a, c) => parseInt(a + c.quantity),
                          0
                        )}
                      </span>
                      ) Items : ${' '}
                      <span>
                        {' '}
                        {cartItems.reduce(
                          (a, c) => parseInt(a + c.price * c.quantity),
                          0
                        )}
                      </span>
                    </h3>
                  </li>
                  <li className="list-group-item">
                    <div className="d-grid">
                      <div
                        className="mybtn"
                        type="button"
                        variant="primary"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                      >
                        Proceed to checkout{' '}
                        <i class="fa-solid fa-money-check"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartScreen;
