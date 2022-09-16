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
      <h1 className="SectionTitle mb-5">Contact Us</h1>

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
                className="btn btn-success"
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
              {values.name !== '' &&
              values.email !== '' &&
              values.message !== '' ? (
                <div
                  className="modal fade  p-3 "
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
                        <h2 className="me-auto">Successful Submit</h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="fs-1">Thankes for your messsage</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="modal fade  p-3 "
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog  mt-5">
                    <div className="modal-content">
                      <div className="modal-header">
                        {/* <i className="fa-solid fa-circle-check fs-1 text-success"></i> */}
                        <h2 className="me-auto">Erroe Submit</h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="fs-1 fa-solid fa-xmark"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default ContactUsScreen;
