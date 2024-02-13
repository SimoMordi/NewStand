import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import Featured from "../../components/Featured/Featured";
import Events from "../../components/Events/Events";

const Home = () => {
  return (
    <main id="home">
      <Featured />
      <Events />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;
