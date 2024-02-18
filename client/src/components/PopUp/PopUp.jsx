import React from 'react';
import css from './PopUp.module.css'; 
import frontCoverImage from "../../assets/imgs/BookFrontPage.png"; 
import backCoverImage from "../../assets/imgs/BookBackCover.png"; 

const PopUpComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.close} onClick={onClose}>&times;</div>
      <div className={css.content}>
        <img src={frontCoverImage} alt="Front Cover" className={css.coverImage} />
        <img src={backCoverImage} alt="Back Cover" className={css.coverImage} />
        <p className={css.descriptionText}>
          Lorem ipsum dolor sit amet consectetur. Eu elit est interdum morbi semper ipsum tellus in. Egestas enim libero porttitor augue lectus cursus orci. Purus magna nunc scelerisque magnis ultrices et senectus enim diam. Vitae ante pulvinar proin nunc quis tristique purus neque pharetra.
        </p>
        <button className={css.button}>Freshed out the press</button>
      </div>
    </div>
  );
};

export default PopUpComponent;
