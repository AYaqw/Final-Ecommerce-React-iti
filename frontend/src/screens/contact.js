import React from 'react';
import { Field, Formik } from 'formik';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
var sunmit = false;
var onSubmit = (values) => {
  console.log(values);
  localStorage.setItem('message contact us', JSON.stringify(values));
  navigator('/home');
  console.log(values.name, values.email, values.message);
  sunmit = true;
  // values.name = '';
  // values.email = '';
  // values.message = '';
};
function ContactUsScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title> contact page </title>{' '}
      </Helmet>
      <h1 className="Title ">Contact Us</h1>
      <div className="ContactUsScreen small-container">
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = (
                <div className="alert alert-danger" role="alert">
                  Required
                </div>
              );
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = (
                <div className="alert alert-danger" role="alert">
                  Invalid email address
                </div>
              );
            }

            return errors;
          }}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="name"
                className="form-control form-control-lg mb-4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={sunmit ? '' : values.name}
                placeholder="Enter your name"
              />
              {errors.name && touched.name && errors.name}
              <Field
                type="email"
                name="email"
                className="form-control form-control-lg mb-4"
                onChange={handleChange}
                onBlur={handleBlur}
                value={sunmit ? '' : values.email}
                placeholder="Enter your email"
              />

              {errors.email && touched.email && errors.email}

              <textarea
                name="message"
                className="form-control form-control-lg mb-4 textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={sunmit ? '' : values.message}
                placeholder="Leave a comment here"
              />
              {errors.message && touched.message && errors.message}
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="mybtn"
                  type="submit"
                  disabled={isSubmitting}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Submit
                </button>
              </div>
              <div>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade  p-5 mt-5 "
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog mt-5">
                    <div className="modal-content">
                      <div className="modal-header">
                        <i className="fa-solid fa-circle-check fs-1 text-success"></i>
                        <h2 className="m-auto fs-1 fw-bold Modeltitle">
                          Successful Submit
                        </h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <h2 className="fs-4 fw-bold m-auto align-content Modelcontant">
                          Thankes for your messsage
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default ContactUsScreen;
