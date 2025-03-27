import  { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0); // Reset after submission
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setRating(star)}>
            {star}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0}>
        Submit
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
