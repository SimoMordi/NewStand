import React from "react";
import TestimonialSlider from "./TestinomialSlider";
import css from "./testimonials.module.css";
import border from "../../assets/imgs/testinomialTB.png";

const Testimonials = () => {
  return (
    <section>
      <div className="titleContainer">
        <h2>Testimonials</h2>
        <span className="line"></span>
      </div>
      <img src={border} alt="border" className={css.border} />
      <TestimonialSlider />
      <img src={border} alt="border" className={css.border} />
    </section>
  );
};

export default Testimonials;
