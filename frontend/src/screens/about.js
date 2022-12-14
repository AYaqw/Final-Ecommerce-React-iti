import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
// import About from './about';
class AboutScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About page</title>
        </Helmet>
        <div className="About">
          {/* <Navbar/> */}
          <h1 className="Title">Our catagers</h1>
          <div className="Programme">
            <ul className="row mt-5 g-3 ">
              <li className="col-lg-6 col-md-12">
                <div className="p-3 d-flex  ">
                  <div className="infoAbout">
                    <h3 className="fw-bold">Keeps Healthy Record</h3>
                    <p className=" fw-bolder ms-2 fs-6">
                      Sed vestibulum nulla elementum auctor tincidunt. Aliquam
                      sit amet cursus mauris. Sed vitae mattis ipsum. Vestibulum
                      enim nulla, sollicitudin ac hendrerit tempore.
                    </p>
                  </div>
                  <div className="iconAbout d-flex justify-content-center align-items-center">
                    <i className="fa-brands fa-apple fs-1  "></i>
                  </div>
                </div>
              </li>

              <li className="col-lg-6 col-md-12 ">
                <div className="p-3 d-flex  ">
                  <div className="iconAbout d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-drumstick-bite fs-1 "></i>
                  </div>

                  <div className="infoAbout">
                    <h3 className="fw-bold">Meats Reduces Fat</h3>
                    <p className=" fw-bolder ms-2 fs-6">
                      Aenean leo ligula porttitor eu consequat vitae eleifend ac
                      enim. Aliquam lorem ante dapibus in viverra quis feugiat a
                      tellus. Phasellus viverra nulla ut metus varius laoreet.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-6 col-md-12 ">
                <div className="p-3 d-flex ">
                  <div className="infoAbout">
                    <h3 className="fw-bold">Eggs Make you Fit</h3>
                    <p className=" fw-bolder ms-2 fs-6">
                      Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                      rhoncus. Maecenas tempus tellus eget condimentum rhoncus.
                      Sem quam semper libero sit amet adipiscing.
                    </p>
                  </div>
                  <div className="iconAbout d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-egg fs-1 "></i>
                  </div>
                </div>
              </li>

              <li className="col-lg-6 col-md-12 ">
                <div className="p-3 d-flex ">
                  <div className="iconAbout d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-pepper-hot fs-1 "></i>
                  </div>

                  <div className="infoAbout">
                    <h3 className="fw-bold">Pure Green Vegetables</h3>
                    <p className=" fw-bolder ms-2 fs-6">
                      Donec vitae sapien ut libero venenatis faucibus. Nullam
                      quis ante. Etiam sit amet orci eget eros faucibus
                      tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h2 className="text-center Title">Our Servies</h2>
          <div className="Servies">
            <ul className="mt-5 row">
              <li className="col-lg-4 col-md-12">
                <div className="p-3 ">
                  <div className="servies d-flex">
                    <i className="fa-solid fa-lemon fs-1 m-2"></i>
                    <div>
                      <h3 className="fw-bold">Fresh Fruits</h3>
                      <p className=" fw-bolder ms-2 fs-6">
                        Aci vestibulum nulla elementum auctor tincidunt. Aliquam
                        sit amet cursus mauris. Sed vitae mattis ipsum.
                        Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                        tempor quis nisl.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-lg-4 col-md-12">
                <div className="p-3">
                  <div className="servies d-flex">
                    <i className="fa-sharp fa-solid fa-bacon fs-1 m-2"></i>
                    <div>
                      <h3 className="fw-bold">Healthy Meat</h3>
                      <p className=" fw-bolder ms-2 fs-6">
                        Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                        tempor quis nisl. Sed vestibulum nulla elementum auctor
                        tincidunt. Aliquam sit amet cursus mauris. Sed vitae
                        mattis ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="col-lg-4 col-md-12">
                <div className="p-3">
                  <div className="servies d-flex">
                    <i className="fa-solid fa-leaf fs-1 m-2"></i>
                    <div>
                      <h3 className="fw-bold">Organic Veggies</h3>
                      <p className=" fw-bolder ms-2 fs-6">
                        Aliquam sit amet cursus mauris. Sed vitae mattis ipsum.
                        Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                        tempor quis nisl. Sed vestibulum nulla elementum auctor
                        tincidunt.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="Title">Our Team</h1>
            <div className="team mb-3 ">
              <ul className="row">
                <li className="col-lg-3 col-md-6 col-sm-12 ">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="https://img.freepik.com/premium-psd/handsome-man-with-beard-pointing-side-present-product_1368-34571.jpg?w=740"
                      alt="-"
                      className="rounded-circle "
                    />
                    <h4 className="mt-2 fw-bold">June Celine</h4>
                    <h6 className="fw-semibold">Marketing Manager</h6>
                  </div>
                </li>

                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.847144225.1662891972"
                      className="rounded-circle "
                      alt="-"
                    />
                    <h4 className="mt-2 fw-bold">Lal Johnson</h4>
                    <h6 className="fw-semibold">Store Manager</h6>
                  </div>
                </li>

                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.847144225.1662891972"
                      alt="-"
                      className="rounded-circle "
                    />
                    <h4 className="mt-2 fw-bold">Laila Berlinze</h4>
                    <h6 className="fw-semibold">Front Office</h6>
                  </div>
                </li>

                <li className="col-lg-3 col-md-6 col-sm-12">
                  <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-beautiful-executive-businesswoman-smart-casual-wear-looking-camera-smiling-happy-modern-office-workplace-night_7861-3020.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.847144225.1662891972"
                      alt="-"
                      className="rounded-circle "
                    />
                    <h4 className="mt-2 fw-bold">Sam Milton</h4>
                    <h6 className="fw-semibold">Human Resource</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutScreen;
