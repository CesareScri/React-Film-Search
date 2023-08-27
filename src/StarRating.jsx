import React from "react";
import starFill from "./assets/star-fill.svg";
import starHalf from "./assets/star-half.svg";
import star from "./assets/star.svg";

const StarRating = ({ rating }) => {
  const createRating = () => {
    const stars = [];
    const maxRating = 5; // Assuming a maximum rating of 5
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= maxRating; i++) {
      if (i <= fullStars) {
        stars.push(<img key={i} src={starFill} alt="Filled star" style={{ color: "#ffc107" }} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<img key={i} src={starHalf} alt="Half-filled star" style={{ color: "#ffc107" }} />);
      } else {
        stars.push(<img key={i} src={star} alt="Empty star" style={{ color: "#ffc107" }} />);
      }
    }

    return stars;
  };

  return <div className="star-rating">{createRating()}</div>;
};

export default StarRating;
