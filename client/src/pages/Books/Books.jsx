import React from "react";
import BookFrontPage from "../../assets/imgs/BookFrontPage.png";
import css from "./books.module.css";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate("/freeSense");
  };

  return (
    <main id="books">
      <section className={css.bookContainer}>
        <div className={css.eachBookContainer}>
          <img
            src={BookFrontPage}
            alt="book-cover"
            className={css.bookCover}
            onClick={handleBookClick}
          />
          <h2 onClick={handleBookClick}>FreeSense</h2>
        </div>
      </section>
    </main>
  );
};

export default Books;
