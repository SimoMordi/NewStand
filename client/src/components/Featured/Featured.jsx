import React from "react";
import css from "./featured.module.css";
import SliderComponent from "../SliderComponent";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  const featuredContent =
    "Step into the extraordinary with 'FreeSense'—an anthology of 21 compelling works by StandPat, a cool cat from the upper-left. This limited-edition release explores life's twists, personal growth, and moral introspection. With a velvety cover and vibrant design, 'FreeSense' isn't just a book; it's art for your shelf. Experience firsthand accounts, wisdom, and a touch of arrogance in a unique literary journey. Don't define it, let it define you—connect with 'FreeSense' and embrace the extraordinary in the ordinary.";

  return (
    <section>
      <div className="titleContainer">
        <h2>Featured</h2>
        <span className="line"></span>
      </div>
      <div className={css.featuredContainer}>
        <div className={css.bookContainer}>
          <SliderComponent />
        </div>
        <div>
          <p>{featuredContent}</p>
          <p className={css.learnMore} onClick={() => navigate("/freeSense")}>
            Learn More
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
