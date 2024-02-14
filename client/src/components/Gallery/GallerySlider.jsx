import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookCoverFrame from "../../assets/imgs/bookCoverFrame.png";
import img1 from "../../assets/imgs/2.png";
import img2 from "../../assets/imgs/4.png";
import img3 from "../../assets/imgs/5.png";
import img4 from "../../assets/imgs/7.png";

const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <div className="slider-container gallerySlider">
      <Slider {...settings}>
        <img src={bookCoverFrame} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </Slider>
    </div>
  );
};

export default GallerySlider;
