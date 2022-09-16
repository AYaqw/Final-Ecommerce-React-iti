import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function CategoriesComponent() {
  //! to fetch data from Api
  //? 1- use useState ----------------
  const [Categories, setCategories] = useState([]);
  //? 2- fetch by use useEffect ------
  useEffect(() => {
    //! 3- fetch
    const fetchData = async () => {
      const result = await axios.get('api/Categories');
      setCategories(result.data);
    };
    fetchData();
  }, []);

  // console.log(`Categories:: \n ${Categories}`);
  return (
    <React.Fragment>
      <div className="CategoriesComponent">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            }
          }}
          modules={[Pagination]}
          className="mySwiper pt-5 pb-5 container "
        >
          {Categories.map((category) => {
            //Data.categories
            return (
              <SwiperSlide
                className="category"
                key={category.section}
                style={{ width: '150px !important' }}
              >
                <img src={category.sectionImg} alt={category.section} />
                <Link
                  to={`/Categories/category/${category.section}`}
                  className="categoryName fs-4"
                >
                  {category.section}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default CategoriesComponent;
