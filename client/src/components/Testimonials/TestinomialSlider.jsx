import React, { useState } from "react";
import css from "./testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import readingBook from "../../assets/imgs/readingBook.png";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: "Anonymous",
      testimonial:
        "FreeSense is an absolute revelation! As someone navigating the unpredictable journey of life, StandPat's words struck a chord deep within me. The stories and essays offer a profound exploration of personal growth, challenging me to reflect on my own values and beliefs. This anthology is not just a book; it's a companion on the path of self-discovery. Thank you, StandPat, for sharing your unique perspective with the world.",
      img: "",
    },
    {
      name: "Friend",
      testimonial:
        "Having had the privilege of delving into the pages of FreeSense before Patrick unveils it to the public, I can confidently say it's a literary gem waiting to captivate hearts. StandPat's masterful creation weaves together firsthand experiences, deep wisdom, and just a hint of confidence – a perfect concoction that creates a voice both compelling and thought-provoking. As a fellow author, I've witnessed the artistry in StandPat's writing, admiring the courage to challenge readers to question their morality.This anthology is more than just a collection of stories; it's a testament to the transformative power of storytelling. Reading it felt like being handed a key to unlock the doors of introspection and a deeper understanding of the human experience. Bravo, StandPat, for creating a literary masterpiece that transcends the ordinary. Your courage to share this journey before the public gets a taste is a gift to literature enthusiasts everywhere.",
      img: readingBook,
    },
    {
      name: "Sarah",
      testimonial:
        "FreeSense is not just a book; it's a lifeline for us students navigating the chaos of growing up. StandPat's stories have been my beacon during this tumultuous academic journey. I'll never forget the late-night conversations with him – a mentor who genuinely gets it. This anthology has become my trusty study buddy and a comforting companion. It's more than literature; it's a friend cheering me on through the twists and turns of my own journey. Thank you, StandPat, for being the mentor I never knew I needed. Your words are shaping more than just stories; they're shaping lives. Cheers to you!",
    },
  ];
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
    <div className={` ${css.testimonialSlider}`}>
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div className={css.testimonialContainer}>
            <img src={item.img} alt="" />
            <div>
              <p>{item.testimonial}</p>
              <p className={css.name}>- {item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
