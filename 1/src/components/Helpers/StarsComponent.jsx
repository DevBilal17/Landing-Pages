import React from "react";

const StarsComponent = ({ rating }) => {
  const maxStars = 5;
  return (
    <div className="text-yellow-400">
      {"★".repeat(rating)}
      {"☆".repeat(maxStars - rating)}
    </div>
  );
};

export default StarsComponent;
