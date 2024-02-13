import React, { useState } from "react";
import css from "./TestimonialForm.module.css";

const TestimonialForm = () => {
  const [testimonialFormData, setTestimonialFormData] = useState({
    name: "",
    email: "",
    relationship: "",
    file: null,
    testimonial: "",
  });
  const relationshipOption = [
    {
      id: 1,
      relationship: "Colleague",
    },
    { id: 2, relationship: "Coworker" },
    { id: 3, relationship: "Friend" },
    { id: 4, relationship: "Other" },
  ];
  const testimonialContent =
    "Have I collaborated with you in the past? Were we former colleagues or coworkers? Did I leave a memorable impression upon you? Please utilize this space to leave me a personal review. Share your fondest memories of me, or any insight that you’ve gleaned from our interactions. This can be anonymous or public. Kindly provide insight to how others will experience my presence. Much appreciated, thank you. - Pat";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(testimonialFormData);
    // need to create a POST Request and send it to the backend to collect the data and display on the landing page
    setTestimonialFormData({
      name: "",
      email: "",
      relationship: "",
      file: null,
      testimonial: "",
    });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      // Handle file input separately
      const file = files[0];
      setTestimonialFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      // Handle other input types
      setTestimonialFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  return (
    <section className={css.testimonialSection}>
      <h2 className={css.testimonialTitle}>Call for Testimonials</h2>
      <div className={css.testimonialContainer}>
        <p className={css.testimonialContent}>{testimonialContent}</p>
        <form onSubmit={handleSubmit} className={css.testimonialForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={testimonialFormData.name}
            onChange={handleChange}
            className={css.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={testimonialFormData.email}
            onChange={handleChange}
            className={css.email}
          />
          <select
            name="relationship"
            id=""
            required
            value={testimonialFormData.relationship}
            onChange={handleChange}
            className={css.dropdown}
          >
            <option value="" disabled>
              Relationship
            </option>
            {relationshipOption.map((option) => (
              <option key={option.id} value={option.relationship}>
                {option.relationship}
              </option>
            ))}
          </select>
          <label htmlFor="file">Upload a picture</label>
          <input
            type="file"
            name="file"
            id=""
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            // value={testimonialFormData.file}
          />
          <textarea
            name="testimonial"
            rows="6"
            placeholder="Testimonial"
            required
            value={testimonialFormData.testimonial}
            onChange={handleChange}
            className={css.testimonial}
          ></textarea>
          <button type="submit" className={`btn ${css.submitBtn}`}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default TestimonialForm;
