import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import css from "./footer.module.css";

const Footer = () => {
  const navLinks = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Book",
      route: "/book",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  const socialMedia = [
    {
      name: "Instagram",
      icon: <InstagramIcon fontSize="large" />,
      link: "https://www.instagram.com/standpat206/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon fontSize="large" />,
      link: "https://www.linkedin.com/in/pokocha/",
    },
    {
      name: "Twitter",
      icon: <XIcon fontSize="large" />,
      link: "",
    },
    {
      name: "Email",
      icon: <MailOutlineIcon fontSize="large" />,
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className={css.footer}>
      {/* we will include the nav links, social media, and subscribe email */}
      <div className={css.footerContainer}>
        <ul className={`${css.navList} list`}>
          {navLinks.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
        <ul className={`${css.socialMediaList} list`}>
          {socialMedia.map((icon) => (
            <li key={icon.name}>{icon.icon}</li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Subscribe to our newsletter" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className={css.copyright}>
        <p>
          Designed & Developed by <a href="">Innovis Solution</a>
        </p>
        <p>&copy; {currentYear} - Patrick Okocha II. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
