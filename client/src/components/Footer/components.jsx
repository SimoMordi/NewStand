import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import css from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  // will have to send to the DB to put them in the subscribe email list
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail({
      email: "",
    });
  };
  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
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
      route: "/books",
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
      name: "Email",
      icon: <MailOutlineIcon fontSize="large" />,
      link: "mailto:patokocha206@gmail.com?subject=Hello!",
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className={css.footer}>
      <section className={css.footerContainer}>
        <nav className={css.nav}>
          <ul className={css.navLinks}>
            {navLinks.map((nav) => (
              <li key={nav.name} className={css.navItem}>
                <Link to={nav.route}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={css.socialMedia}>
          {socialMedia.map((social, index) => (
            // Adding a unique key to each item in the loop
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={css.subscribeForm}>
          <input
            type="email"
            name="email"
            value={email.email}
            onChange={handleChange}
            className={css.emailInput}
            placeholder="Subscribe for updates"
            required
          />
          <button className="btn">Subscribe</button>
        </form>
      </section>
      <section className={css.copyright}>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://innovissolution.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Innovis Solution
          </a>
        </p>
        <p> &copy; {currentYear} Patrick Okocha II. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
