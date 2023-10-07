import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={item.img} alt={item.description} />
    </div>
  );
};

export default CarouselItem;
