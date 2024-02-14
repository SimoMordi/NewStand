import React, { useEffect, useState } from "react";
import css from "./gallery.module.css";
import bookCoverFrame from "../../assets/imgs/bookCoverFrame.png";
import img1 from "../../assets/imgs/2.png";
import img2 from "../../assets/imgs/4.png";
import img3 from "../../assets/imgs/5.png";
import img4 from "../../assets/imgs/7.png";
import GallerySlider from "./GallerySlider";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <div className="titleContainer">
        <h2>Gallery</h2>
        <span className="line"></span>
      </div>
      <div className={css.galleryContainer}>
        <img src={bookCoverFrame} alt="book cover" className={css.bookCover} />
        <img
          src={img1}
          alt="Patrick using a white jacket"
          className={css.upperRight}
        />
        <img
          src={img2}
          alt="Patrick leaning against red house"
          className={css.lowerLeft}
        />
        <img
          src={img3}
          alt="Patrick walking across the street in city"
          className={css.upperLeft}
        />
        <img
          src={img4}
          alt="Patrick standing in front of art wall"
          className={css.lowerRight}
        />
      </div>
      {windowWidth <= 767 && <GallerySlider />}
    </section>
  );
};

export default Gallery;
