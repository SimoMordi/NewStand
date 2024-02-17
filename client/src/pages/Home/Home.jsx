import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import Featured from "../../components/Featured/Featured";
import Events from "../../components/Events/Events";
import patrick from "../../assets/imgs/Patrick2.png";
import css from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const navLinks = [
    {
      name: "Home",
      route: "/",
      className: css.one,
    },
    {
      name: "About",
      route: "/about",
      className: css.two,
    },
    {
      name: "Book",
      route: "/books",
      className: css.three,
    },
    {
      name: "Blogs",
      route: "/blogs",
      className: css.four,
    },
    {
      name: "Contact",
      route: "/contact",
      className: css.five,
    },
  ];

  const quote = `“My parents met in Seattle… I was born in Seattle. All of my work has been based in Seattle. It doesn't get much more 206 than me.”`;

  return (
    <main id="home">
      <section className={css.homeSection}>
        <img
          src={patrick}
          alt="Patrick head-shot image"
          className={css.homeImg}
        />
        <div className={css.textContent}>
          <div className={css.bookContainer}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className={`${link.className} ${css.rotatedText}`}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <p>{quote}</p>
        </div>
      </section>
      <Featured />
      <Events />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;
