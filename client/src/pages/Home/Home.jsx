import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import Featured from "../../components/Featured/Featured";
import Events from "../../components/Events/Events";
import patrick from "../../assets/imgs/Patrick2.png";
import css from "./home.module.css";

const Home = () => {
  const quote = `“My parents met in Seattle… I was born in Seattle. All of my work has been based in Seattle. It doesn't get much more 206 than me.”`;
  return (
    <main id="home">
      {/* <section className={css.homeSection}>
        <img src={patrick} alt="Patrick head-shot image" />
        <div className={css.textContent}>
          <div className={css.bookContainer}>
            <div className={css.one}>
              <p>Home</p>
            </div>
            <div className={css.two}>About</div>
            <div className={css.three}>Book</div>
            <div className={css.four}>Blogs</div>
            <div className={css.five}>Contact</div>
          </div>
          <p>{quote}</p>
        </div>
      </section> */}
      <Featured />
      <Events />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;
