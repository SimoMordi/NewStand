import React from 'react';
import css from './PopUp.module.css'; // This imports the CSS module.
import frontCover from "../../assets/imgs/BookFrontPage.png"; // This imports the front cover image.
import backCover from "../../assets/imgs/BookBackCover.png"; // This imports the back cover image.

const BookComponent = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.popup}>
        <div className={css.closeButton} onClick={closePopup}>&times;</div>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <img src={frontCover} alt="Front Cover" className={css.frontCover} />
            <img src={backCover} alt="Back Cover" className={css.backCover} />
          </div>
          <div className={css.cardContent}>
            <h1 className={css.title}>Stand Pat: FreeSense</h1>
            <h2 className={css.subtitle}>An Anthology by Pat & MORE</h2>
            <h3 className={css.author}>Patrick Olochan II</h3>
            <p className={css.description}>
              Lorem ipsum dolor sit amet consectetur. Eu elit est interdum morbi semper ipsum tellus in...
            </p>
            <button className={css.actionButton}>Freshed out the press</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
