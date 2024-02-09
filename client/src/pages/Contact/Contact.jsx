import React from "react";
import css from "./Contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import TestimonialForm from "../../components/TestimonialsForm/TestimonialForm";

const Contact = () => {
  return (
    <main id="contactPage" className={css.contactPageContainer}>
      <ContactForm />
      <TestimonialForm />
    </main>
  );
};

export default Contact;
