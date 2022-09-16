function RatingComponents(props) {
  const { rating } = props; // , numReviews
  return (
    <div className="rating text-center ">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star text-warning fs-md-6' //fa-solid fa-star
              : rating >= 0.5
              ? 'fas fa-star-half-alt text-warning fs-md-6' // fa-solid fa-star-half-stroke
              : 'far fa-star text-warning fs-md-6'
          }
        ></i>{' '}
      </span>{' '}
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star text-warning fs-md-6'
              : rating >= 1.5
              ? 'fas fa-star-half-alt text-warning fs-md-6'
              : 'far fa-star text-warning fs-md-6'
          }
        ></i>{' '}
      </span>{' '}
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star text-warning fs-md-6'
              : rating >= 2.5
              ? 'fas fa-star-half-alt text-warning fs-md-6'
              : 'far fa-star text-warning fs-md-6'
          }
        ></i>{' '}
      </span>{' '}
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star text-warning fs-md-6'
              : rating >= 3.5
              ? 'fas fa-star-half-alt text-warning fs-md-6'
              : 'far fa-star text-warning fs-md-6'
          }
        ></i>{' '}
      </span>{' '}
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star text-warning fs-md-6'
              : rating >= 4.5
              ? 'fas fa-star-half-alt text-warning fs-md-6'
              : 'far fa-star text-warning fs-md-6'
          }
        ></i>{' '}
      </span>{' '}
    </div>
  );
}
export default RatingComponents;
