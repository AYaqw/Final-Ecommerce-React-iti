function RatingComponents(props) {
  const { rating } = props; // , numReviews
  return (
    <div className="rating ">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star text-warning' //fa-solid fa-star
              : rating >= 0.5
              ? 'fas fa-star-half-alt text-warning' // fa-solid fa-star-half-stroke
              : 'far fa-star text-warning'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star text-warning'
              : rating >= 1.5
              ? 'fas fa-star-half-alt text-warning'
              : 'far fa-star text-warning'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star text-warning'
              : rating >= 2.5
              ? 'fas fa-star-half-alt text-warning'
              : 'far fa-star text-warning'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star text-warning'
              : rating >= 3.5
              ? 'fas fa-star-half-alt text-warning'
              : 'far fa-star text-warning'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star text-warning'
              : rating >= 4.5
              ? 'fas fa-star-half-alt text-warning'
              : 'far fa-star text-warning'
          }
        ></i>
      </span>
    </div>
  );
}
export default RatingComponents;
