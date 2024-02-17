import React, { useState } from "react";
import css from "./ContactForm.module.css";
const ContactForm = () => {
  // need to add state to control the form
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false,
  });
  // need to make a handleSubmit and handleChange function to control the data when the user inputs information to the form and when they submit that information
  // function that will handle onChange event for each input field in contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData);
    // when you submit the form it should safe it the db and send you an email with this information
    // will need a POST request
    setContactFormData({
      name: "",
      email: "",
      message: "",
      checkbox: false,
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const contactInfo =
    "Are you a podcaster, a photographer, an educator, a business or community leader? Are you a creative person, or a professional? Let’s collaborate. I welcome all opportunities. Feel free to send me a message and let’s put something together.";
  return (
    <section id="ContactForm" className={css.contactFormSection}>
      <h2 className={css.contactHeader}>Get in Touch!</h2>
      <div className={css.contactFormContainer}>
        <p className={css.contactInfo}>{contactInfo}</p>
        <form onSubmit={handleSubmit} className={css.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={contactFormData.name}
            onChange={handleChange}
            className={css.nameInput}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={contactFormData.email}
            onChange={handleChange}
            className={css.emailInput}
            autoComplete="email"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            value={contactFormData.message}
            onChange={handleChange}
            autoComplete="off"
          ></textarea>
          <div className={css.submitContainer}>
            <label className={css.checkedLabel}>
              Check box to subscribe
              <input
                type="checkbox"
                name="checkbox"
                checked={contactFormData.checkbox}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
