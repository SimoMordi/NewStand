import React, { useEffect, useState } from "react";
import css from "./FreeSense.module.css";
import SpotifyIcon from "../../assets/Icons/Spotify.png";
import FrontCover from "../../assets/imgs/BookFrontPage.png";
import BackCover from "../../assets/imgs/BookBackCover.png";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SliderComponent from "../../components/SliderComponent";

const FreeSense = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 767;

  // A function where it will take you the page when you want to purchase the book
  // Stripe or Woo-commerce
  const handleBuyBook = () => {};
  // will share on the the users social media about them purchasing the book or excitement about the book
  // Twitter, Facebook, LinkedIn, any other social media
  const handleShare = () => {};
  const bookSummary = [
    `Introducing "FreeSense" - a literary journey through life, perspective, and the uncharted territories of personal growth. This anthology of 21 captivating works, including short stories and narrative essays, transcends the ordinary, challenging readers to introspect and question their morality. Written by StandPat, a cool cat from the upper-left, the book is not just about time; it's about the invaluable moments that shape us.`,
    `"FreeSense" is a unique blend of firsthand experiences, wisdom gained, and knowledge acquired, wrapped in the cool confidence (and maybe a touch of arrogance) that defines StandPat's voice. This collection invites you to enter the mind of an author who despises marketing but passionately embraces the essence of life. It's about accountability, responsibility, and the twists and turns of the journey.`,
    `Beyond the words, "FreeSense" is a limited-edition print release, featuring a soft-touch cover for a velvety feel and a vibrant design that adds flair to any bookshelf or office. It's not just a book; it's a piece of art waiting to be explored. Get ready to define it for yourself, as StandPat's words resonate, and the narrative unfolds, leaving an indelible mark on your mind and soul. Don't miss the chance to connect with "FreeSense" - where life meets literature, and the extraordinary becomes the ordinary.`,
  ];
  // link to spotify playlist
  const spotifyLink = () => {
    window.open(
      "https://open.spotify.com/playlist/4s6lR7symJ99EGclQeol1P?si=f7dd5eb472834e8c"
    );
  };
  return (
    <main id="freeSense">
      <section className={css.bookSection}>
        {/* need to make the img overlap on top of each other */}
        <div className={css.bookContainer}>
          <img
            src={FrontCover}
            alt="book-cover"
            className={`${css.bookCover} ${css.frontCover}`}
          />
          <img
            src={BackCover}
            alt="book-cover"
            className={`${css.bookCover} ${css.backCover}`}
          />
          {isMobile && <SliderComponent />}
        </div>
        <button className={`btn`} onClick={handleBuyBook}>
          Get a Book!
        </button>
      </section>
      <section>
        <div className="titleContainer">
          <h2>FreeSense</h2>
          <span className="line"></span>
        </div>
        <div className={css.bookContent}>
          {bookSummary.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h3 className={css.title}>Listen to the Books Spotify Playlist</h3>
        <div className={css.ctaContainer}>
          <div className={css.spotifyContainer} onClick={spotifyLink}>
            <img src={SpotifyIcon} alt="icon" className={css.icon} />
            <p>Spotify</p>
          </div>
          <button className={`btn`} id={css.bookBtn} onClick={handleBuyBook}>
            Get a Book!
          </button>
        </div>
        <h3 className={css.title}>Share</h3>
        <div className={css.socialMediaContainer}>
          <FacebookIcon onClick={handleShare} />
          <LinkedInIcon onClick={handleShare} />
          <XIcon onClick={handleShare} />
        </div>
      </section>
    </main>
  );
};

export default FreeSense;
