import React from "react";
import css from "./blogsComponent.module.css";

const BlogsComponent = () => {
  const blogs = [
    {
      name: "Pseudonym (part 2)",
      date: "January 7th, 2023",
      description:
        "Dive into a thought-provoking journey through the intricate dance of pseudonyms and storytelling in the modern age. This exploration delves into the delicate balance between societal expectations and the raw essence of creativity, contemplating the shadows cast by fame on the pursuit of craft. Join the author in unraveling the enigma of identity and the timeless allure of pseudonyms, inviting readers to reflect on the evolving symphony of words in the 21st century.",
      download: "", // download file
      readMore: "", // link
    },
    {
      name: "Pseudonym (part 1)",
      date: "January 7th, 2023",
      description:
        "Embark on a journey through creativity, pseudonyms, and the evolving world of modern writing. Join StandPat as they navigate societal expectations, personal narratives, and the pursuit of thought-provoking elegance in an era dominated by social media. Discover the essence of storytelling amidst the clamor of branding and instant gratification. Welcome to a world where realness and wisdom triumph over fleeting attention spans.",
      download: "", // download file
      readMore: "", // link
    },
    {
      name: "The Creative Process",
      date: "December 15th, 2022",
      description:
        "Dive into the mind of a fearless wordsmith as Pat Okocha II unveils the mesmerizing journey of his Creative Process. From the bustling streets of Seattle to the quiet solitude of an unfamiliar neighborhood, join this Creative-Intellectual on a relentless pursuit of artistic authenticity. In a world saturated with influencers and fleeting trends, discover the meticulous, intentional, and calculated approach that sets Pat apart. Embrace the eccentricity, challenge the norms, and step into the enchanting world where words become art – this is The Creative Process like you've never experienced before.",
      download: "", // download PDF
      readMore: "", // link
    },
  ];
  return (
    <section>
      <div className="titleContainer">
        <h2>Blogs</h2>
        <span className="line"></span>
      </div>
      <div className={css.blogContainer}>
        {blogs.map((blog, index) => (
          <div>hello</div>
        ))}
      </div>
    </section>
  );
};

export default BlogsComponent;
