import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontCover from "../assets/imgs/BookFrontPage.png";
import backCover from "../assets/imgs/BookBackCover.png";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: function (i) {
      return (
        <div
          className={`custom-dot ${i === currentSlide ? "active" : ""}`}
        ></div>
      );
    },
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img src={frontCover} alt="book cover" />
        <img src={backCover} alt="book cover" />
      </Slider>
    </div>
  );
};

export default SliderComponent;
