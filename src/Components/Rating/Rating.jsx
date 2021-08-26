import React from "react";
import "./style.css";

function Rating({ fullStars }) {
  return (
    <div className="Stars">
      {Array(+fullStars)
        .fill()
        .map((_, stars) => (
          <p className="fullStar" key={stars}>
            ★
          </p>
        ))}

      {Array(Math.abs(+fullStars - 5))
        .fill()
        .map((_, stars) => (
          <p className="emptyStar" key={stars}>
            ★
          </p>
        ))}
    </div>
  );
}

export default Rating;
