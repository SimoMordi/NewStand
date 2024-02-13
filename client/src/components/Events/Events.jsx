import React from "react";
import css from "./events.module.css";

const Events = () => {
  return (
    <section>
      <div className="titleContainer">
        <h2>Events</h2>
        <span className="line"></span>
      </div>
      <div className={css.eventsContainer}>
        <h2>Events Coming Soon</h2>
      </div>
    </section>
  );
};

export default Events;
