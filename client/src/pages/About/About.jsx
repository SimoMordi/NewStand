import React from "react";
import css from "./About.module.css";
import Patrick from "../../assets/imgs/Patrick.png";
import Gallery from "../../components/Gallery/Gallery";
import ContactForm from "../../components/ContactForm/ContactForm";

const About = () => {
  const aboutContent = [
    "Patrick Okocha II is a Creative-Intellectual from Seattle, Washington. Born in Seattle, Patrick spent his first 13 years living in the city before relocating with his family to Sacramento, CA in 2004. After graduating from high school in the Sacramento area, he relocated back to his hometown of Seattle in 2009.",

    "Since returning to Seattle, Patrick has been immersed, and a staple within the local community. Through his professional work, primarily in workforce development and higher education, Patrick has collaborated with several industry leaders, and has partnered with reputable organizations across the state of Washington. With nearly 15 years of experience, Patrick has educated, mentored, and developed thousands of students and professionals across the region.",

    "Patrick is a graduate of the University of Washington with a BA in English Literature and Communication. He began his career working in the newsroom for five years before transitioning into direct service work.",
  ];
  return (
    <main id="about" className={css.aboutSection}>
      <section className={css.aboutContainer}>
        <img
          src={Patrick}
          className={css.patrickImg}
          alt="Patrick sitting on the concrete stairs"
        />
        <h4 className={css.patrickQuote}>
          “My parents met in Seattle… I was born in Seattle. All of my work has
          been based in Seattle. It doesn't get much more 206 than me.”
        </h4>
      </section>
      <section className={css.aboutContent}>
        {aboutContent.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </section>
      <Gallery />
      <ContactForm />
    </main>
  );
};

export default About;
