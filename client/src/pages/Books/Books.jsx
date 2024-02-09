import React from "react";
import BookFrontPage from "../../assets/imgs/BookFrontPage.png";
import css from "./books.module.css";

const Books = () => {
  return (
    <main id="books">
      <section className={css.bookContainer}>
        <img src={BookFrontPage} alt="book-cover" />
        <h2>FreeSense</h2>
      </section>
    </main>
  );
};

export default Books;
