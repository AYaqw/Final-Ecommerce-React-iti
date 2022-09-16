import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductComponent from './product';

function OfferProducts() {
  //! to fetch data from Api
  //? 1- use useState ----------------
  const [Products, setProducts] = useState([]);
  //? 2- fetch by use useEffect ------
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/Products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  console.log(`OfferProducts:: afrer \n ${Products.length}`);
  // !  filter  Products that has offer
  var OfferProducts_ = Products.filter((product) => {
    return parseInt(product.offer) > 0;
  });
  console.log(`OfferProducts:: Before \n ${OfferProducts_.length}`);
  return (
    <React.Fragment>
      {/* <div className="OfferProducts"></div> */}
      <div className="row gy-3 ">
        {OfferProducts_.map((offerProduct, index) => {
          return (
            // <div key={offerProduct.title}></div>
            <div
              className="ProductComponent col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={`${index}ProductComponent`}
            >
              <ProductComponent product={offerProduct} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
export default OfferProducts;
