import React, { useState, useEffect } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import "./Carousel.css";
import Img1 from "../../../assets/images/photo-1.jpg";
import Img2 from "../../../assets/images/photo-2.jpg";
import Img3 from "../../../assets/images/photo-3.jpg";
import Img4 from "../../../assets/images/photo-4.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const items = [
  {
    id: 1,
    description: "astrounat",
    img: Img1,
  },
  {
    id: 2,
    description: "launch",
    img: Img2,
  },
  {
    id: 3,
    description: "eclipse",
    img: Img3,
  },
  {
    id: 4,
    description: "space",
    img: Img4,
  },
];

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const length = items.length;

  const handlePrevNextSlide = (direction) => {
    if (direction === "prev") {
      setCurrentItem((prev) => (prev === 0 ? length - 1 : prev - 1));
    } else if (direction === "next") {
      setCurrentItem((next) => (next === length - 1 ? 0 : next + 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handlePrevNextSlide("next");
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button
          className="arrow-left"
          onClick={() => handlePrevNextSlide("prev")}
        >
          <IoIosArrowBack />
        </button>
        <CarouselItem item={items[currentItem]} />
        <button
          className="arrow-right"
          onClick={() => handlePrevNextSlide("next")}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="indicator-group">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`indicator ${currentItem === index ? "active" : ""}`}
            onClick={() => setCurrentItem(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
