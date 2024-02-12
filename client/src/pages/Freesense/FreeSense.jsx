import React from "react";
import css from "./FreeSense.module.css";
import SpotifyIcon from "../../assets/Icons/Spotify.png";
import FrontCover from "../../assets/imgs/BookFrontPage.png";
import BackCover from "../../assets/imgs/BookBackCover.png";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FreeSense = () => {
  // A function where it will take you the page when you want to purchase the book
  // Stripe or Woo-commerce
  const handleBuyBook = () => {};
  // will share on the the users social media about them purchasing the book or excitement about the book
  // Twitter, Facebook, LinkedIn, any other social media
  const handleShare = () => {};
  const bookSummary = [
    "I despise marketing, mainly because I don’t know what to call this thing in your hand. I don’t know what to compare this book to. I never gave thought to it… I just sat down and wrote it.",
    "It’s about life. It’s about pro-spective. Firsthand experience and personal accounts. Wisdom gained and knowledge acquired. It’s about confidence with a little bit of arrogance. Well, a lot of arrogance… But I don’t know, you tell it.",
    "It’s about accountability and responsibility. It’s about the journey. The roadblocks and check-points. It’s about evaluation and perspective.  It’s about time.",
    "It’s about time… It’s about time you enter the mind of StandPat. A cool cat from the upper-left.",
    "You don’t have to know who I am… You just need to know yourself.",
    "We'll connect just fine.",
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
            className={`${css.bookCover}  ${css.frontCover}`}
          />
          <img
            src={BackCover}
            alt="book-cover"
            className={`${css.bookCover}  ${css.backCover}`}
          />
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
